/* IELTS Prep · Students (teacher only): add a student (first name, email, password, their character and first
   language), design a student's character, change a password, remove a student. Talks to the 'ielts-admin' edge
   function, which checks that the caller is the IELTS admin and does the work with the service role. app.js shows this
   page at #/students for the admin (window.IELTS_GATE.isAdmin). The characters are drawn by js/character.js. */
window.IELTSStudents = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const CH = () => window.IELTSCharacter;
  let list = null, msg = null, busy = false, el = null;
  let addLook = { gender: 'unspecified', avatar: {}, lang: '' };   // the character chosen in the Add form
  let ed = null;                                                    // the open designer: { who, name, gender, avatar, lang }
  async function call(body) {
    const cfg = window.DEC15_CONFIG, token = await window.IELTS_GATE.token();
    const r = await fetch(cfg.supabaseUrl.replace(/\/$/, '') + '/functions/v1/ielts-admin', { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: cfg.supabaseKey, Authorization: 'Bearer ' + token }, body: JSON.stringify(body) });
    const out = await r.json().catch(() => ({})); if (!r.ok || out.error) throw new Error(out.error || 'Something went wrong. Please try again.'); return out;
  }
  const pw = () => { const A = 'abcdefghjkmnpqrstuvwxyz', N = '23456789'; let s = ''; for (let i = 0; i < 6; i++) s += A[Math.floor(Math.random() * A.length)]; return s[0].toUpperCase() + s.slice(1) + N[Math.floor(Math.random() * N.length)] + N[Math.floor(Math.random() * N.length)]; };
  const say = (t, kind = 'ok') => { msg = { t, kind }; paint(); };
  async function load() { try { list = (await call({ action: 'list' })).members || []; } catch (e) { list = []; msg = { t: e.message, kind: 'err' }; } paint(); }
  const pic = (g, size, av) => CH() ? CH().portrait(g, size, av) : '';
  const langName = code => CH()?.lang(code)?.name || '';
  const summary = l => { const C = CH(); if (!C) return ''; const L = C.resolve(l.gender, l.avatar);
    return [C.LABELS[L.g], C.OPTIONS.hair[L.hair], L.hair === 'bald' || L.hair === 'hijab' || L.hair === 'cap' ? '' : C.OPTIONS.hairColor[L.hairColor].toLowerCase() + ' hair', l.lang ? 'speaks ' + langName(l.lang) : ''].filter(Boolean).join(' · '); };

  function rows() {
    const st = (list || []).filter(m => m.role !== 'admin');
    if (!list) return '<p class="stu-empty">Loading your students…</p>';
    if (!st.length) return '<p class="stu-empty">No students yet. Add your first student above.</p>';
    return `<ul class="stu-list">${st.map(m => `<li class="stu-row" data-id="${esc(m.user_id)}"><button type="button" class="stu-av" data-stu="look" aria-label="Design ${esc(m.first_name || m.email)}’s character">${CH() ? pic(m.gender, 46, m.avatar) : esc((m.first_name || m.email || '?')[0].toUpperCase())}<span class="stu-av-ed" aria-hidden="true">✎</span></button>
      <span class="stu-tx"><b>${esc(m.first_name || '—')}</b><small>${esc(m.email)}</small>${m.first_language ? `<span class="stu-lang">${esc(langName(m.first_language))}</span>` : ''}</span><span class="stu-date">Added ${new Date(m.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
      <span class="stu-act"><button type="button" class="btn-quiet btn-sm" data-stu="look">Character</button><button type="button" class="btn-quiet btn-sm" data-stu="password">New password</button><button type="button" class="btn-quiet btn-sm stu-del" data-stu="remove">Remove</button></span></li>`).join('')}</ul>`;
  }
  function html() {
    const n = (list || []).filter(m => m.role !== 'admin').length;
    return `<section class="stu-page"><header class="stu-head"><span class="eyebrow">Teacher only</span><h1>Your students</h1><p>Only the people on this list can sign in to IELTS Preparation. Add a student with their email and a password, then give them both. Remove a student and they can no longer sign in.</p></header>
      ${msg ? `<p class="stu-msg is-${msg.kind}" role="status">${msg.html || esc(msg.t)}</p>` : ''}
      <form class="stu-add" autocomplete="off"><h2>Add a student</h2>
        <label><span>First name</span><input name="first" required placeholder="e.g. Isla"></label>
        <label><span>Email</span><input name="email" type="email" required placeholder="student@email.com"></label>
        <label><span>Password</span><span class="stu-pw"><input name="password" required minlength="6" value="${pw()}"><button type="button" class="btn-quiet btn-sm" data-stu="gen">New</button></span></label>
        <div class="stu-look"><span class="stu-look-pic">${pic(addLook.gender, 56, addLook.avatar)}</span><span class="stu-look-tx"><b>Character &amp; language</b><small>${esc(summary(addLook))}</small></span><button type="button" class="btn-quiet btn-sm" data-stu="addlook">Design</button></div>
        <button class="btn" type="submit"${busy ? ' disabled' : ''}>${busy ? 'Adding…' : 'Add student'}</button></form>
      <section class="stu-box"><h2>Students <small>${list ? n : ''}</small></h2>${rows()}</section></section>`;
  }
  function paint() { if (el && document.body.contains(el)) { const f = el.querySelector('.stu-add'), keep = f ? { first: f.first.value, email: f.email.value, password: f.password.value } : null; el.innerHTML = html();
    if (keep) { const g = el.querySelector('.stu-add'); g.first.value = keep.first; g.email.value = keep.email; if (keep.password) g.password.value = keep.password; } } }

  /* ───────── the character designer ───────── */
  const chip = (k, v, label, on, extra = '') => `<button type="button" class="av-chip${on ? ' on' : ''}" data-av="${k}" data-v="${esc(v)}" aria-pressed="${on}">${extra}${esc(label)}</button>`;
  const dot = (k, v, label, colour, on) => `<button type="button" class="av-dot${on ? ' on' : ''}" data-av="${k}" data-v="${v}" aria-pressed="${on}" title="${esc(label)}" aria-label="${esc(label)}" style="--c:${colour}"></button>`;
  function edHTML() {
    const C = CH(), L = C.resolve(ed.gender, ed.avatar), O = C.OPTIONS, look = over => Object.assign({}, ed.avatar, over);
    const road = `<svg class="av-road" viewBox="-60 -26 120 46" aria-hidden="true"><path d="M-60 12h120" stroke="#d8dce8" stroke-width="10" stroke-linecap="round"/><path d="M-56 12h112" stroke="#fff" stroke-width="1.4" stroke-dasharray="5 5"/><g transform="translate(34 0)">${C.walker(ed.gender, ed.avatar)}</g></svg>`;
    const langs = Object.entries(C.LANGS).map(([k, v]) => [k, v[0]]).sort((a, b) => a[1].localeCompare(b[1]));
    const sec = (t, body, cls = '') => `<section class="av-sec${cls}"><h4>${t}</h4><div class="av-row">${body}</div></section>`;
    return `<div class="av-card" role="dialog" aria-modal="true" aria-labelledby="av-title">
      <header class="av-head"><h3 id="av-title">${esc(ed.name ? `${ed.name}’s character` : 'New student’s character')}</h3><button type="button" class="av-x" data-av-close aria-label="Close">×</button></header>
      <div class="av-body">
        <div class="av-stage"><span class="av-big">${C.portrait(ed.gender, 150, ed.avatar)}</span>${road}
          ${ed.lang && ed.lang !== 'en' ? `<p class="av-hi">${C.hello(ed.lang, ed.name || '')}</p>` : ''}<p class="av-sum">${esc(summary(ed))}</p>
          <button type="button" class="btn-quiet btn-sm" data-av-random>Surprise me</button></div>
        <div class="av-opts">
          ${sec('Body', Object.entries(C.LABELS).map(([k, v]) => chip('gender', k, v, ed.gender === k, `<span class="av-mini">${C.portrait(k, 30)}</span>`)).join(''))}
          ${sec('Quick start <small>sets the skin and hair; change anything after</small>', Object.entries(C.HERITAGE).map(([k, h]) => chip('heritage', k, h.label, L.heritage === k)).join(''))}
          ${sec('Skin tone', Object.entries(O.skin).map(([k, v]) => dot('skin', k, v, C.SWATCH.skin(k), L.skin === k)).join(''))}
          ${sec('Hair style', Object.entries(O.hair).map(([k, v]) => `<button type="button" class="av-tile${L.hair === k ? ' on' : ''}" data-av="hair" data-v="${k}" aria-pressed="${L.hair === k}">${C.portrait(ed.gender, 52, look({ hair: k }))}<small>${esc(v)}</small></button>`).join(''), ' is-tiles')}
          ${sec('Hair colour', Object.entries(O.hairColor).map(([k, v]) => dot('hairColor', k, v, C.SWATCH.hairColor(k), L.hairColor === k)).join(''))}
          ${sec('Clothes colour', Object.entries(O.top).map(([k, v]) => dot('top', k, v, C.SWATCH.top(k), L.top === k)).join(''))}
          ${sec('Clothes', Object.entries(O.outfit).map(([k, v]) => chip('outfit', k, v, L.outfit === k)).join(''))}
          ${sec('Glasses', Object.entries(O.glasses).map(([k, v]) => chip('glasses', k, v, L.glasses === k)).join(''))}
          ${sec('Beard', Object.entries(O.beard).map(([k, v]) => chip('beard', k, v, L.beard === k)).join(''))}
          ${sec('Earrings', Object.entries(O.earrings).map(([k, v]) => chip('earrings', k, v, L.earrings === k)).join(''))}
          <section class="av-sec"><h4>First language <small>a hello on their home page, and a “well done” above the answer key</small></h4>
            <select class="av-lang" data-av-lang><option value="">Not set</option>${langs.map(([k, v]) => `<option value="${k}"${ed.lang === k ? ' selected' : ''}>${esc(v)}</option>`).join('')}</select></section>
        </div></div>
      <footer class="av-foot"><button type="button" class="btn-quiet btn-sm" data-av-reset>Start again</button><span></span><button type="button" class="btn-quiet" data-av-close>Cancel</button><button type="button" class="btn" data-av-save>${ed.who ? 'Save' : 'Use this'}</button></footer></div>`;
  }
  let edEl = null;
  function openEd(state) { ed = JSON.parse(JSON.stringify(state)); ed.avatar = ed.avatar || {};
    edEl = document.createElement('div'); edEl.className = 'av-ed is-new'; setTimeout(() => edEl?.classList.remove('is-new'), 400); document.body.appendChild(edEl); document.documentElement.classList.add('av-open'); paintEd(); edEl.querySelector('.av-x').focus(); }
  function paintEd() { const sc = edEl.querySelector('.av-opts')?.scrollTop || 0, ws = edEl.querySelector('.av-body')?.scrollTop || 0; edEl.innerHTML = edHTML();
    const o = edEl.querySelector('.av-opts'); if (o) o.scrollTop = sc; const b = edEl.querySelector('.av-body'); if (b) b.scrollTop = ws; }
  function closeEd() { edEl?.remove(); edEl = null; ed = null; document.documentElement.classList.remove('av-open'); }
  function setAv(k, v) { const C = CH();
    if (k === 'gender') { ed.gender = v; ['hair', 'outfit', 'earrings', 'beard'].forEach(x => delete ed.avatar[x]); const h = C.HERITAGE[ed.avatar.heritage]; if (h?.hair?.[v]) ed.avatar.hair = h.hair[v]; }
    else if (k === 'heritage') { const h = C.HERITAGE[v]; ed.avatar.heritage = v; ed.avatar.skin = h.skin; ed.avatar.hairColor = h.hairColor; if (h.hair?.[ed.gender]) ed.avatar.hair = h.hair[ed.gender]; else if (['afro', 'curly'].includes(ed.avatar.hair)) delete ed.avatar.hair; }
    else ed.avatar[k] = v;
    paintEd(); }
  function randomLook() { const C = CH(), O = C.OPTIONS, any = o => { const k = Object.keys(o); return k[Math.floor(Math.random() * k.length)]; };
    const g = C.norm(ed.gender), hairs = Object.keys(O.hair).filter(h => !['cap', 'hijab', 'bald'].includes(h) && (g === 'male' ? !['long', 'wavy', 'curlylong', 'braid', 'bun', 'ponytail'].includes(h) || Math.random() < .1 : g === 'female' ? !['buzz', 'spiky', 'manbun'].includes(h) : true));
    ed.avatar = { skin: any(O.skin), hair: hairs[Math.floor(Math.random() * hairs.length)], hairColor: Math.random() < .8 ? ['black', 'darkbrown', 'brown', 'auburn', 'ginger', 'blonde'][Math.floor(Math.random() * 6)] : any(O.hairColor), top: any(O.top),
      outfit: g === 'female' ? (Math.random() < .5 ? 'dress' : any(O.outfit)) : g === 'male' ? 'trousers' : any(O.outfit), glasses: Math.random() < .3 ? any(O.glasses) : 'none', beard: g === 'male' && Math.random() < .4 ? any(O.beard) : 'none', earrings: g === 'male' ? 'none' : any(O.earrings) };
    paintEd(); }
  document.addEventListener('click', async e => { if (!edEl || !edEl.contains(e.target)) return;
    if (e.target === edEl || e.target.closest('[data-av-close]')) { closeEd(); return; }
    const b = e.target.closest('[data-av]'); if (b) { setAv(b.dataset.av, b.dataset.v); return; }
    if (e.target.closest('[data-av-random]')) { randomLook(); return; }
    if (e.target.closest('[data-av-reset]')) { ed.avatar = {}; paintEd(); return; }
    const s = e.target.closest('[data-av-save]'); if (!s) return;
    const look = { gender: CH().norm(ed.gender), avatar: ed.avatar, lang: ed.lang || '' };
    if (!ed.who) { addLook = look; closeEd(); paint(); return; }
    s.disabled = true; s.textContent = 'Saving…';
    try { await call({ action: 'look', user_id: ed.who, gender: look.gender, avatar: look.avatar, first_language: look.lang }); const m = list.find(x => x.user_id === ed.who);
      if (m) { m.gender = look.gender; m.avatar = look.avatar; m.first_language = look.lang; } const name = ed.name; closeEd(); say(`${name}’s character is saved. They will see it the next time they open the site.`); }
    catch (err) { s.disabled = false; s.textContent = 'Save'; alert(err.message); } });
  document.addEventListener('change', e => { if (edEl && e.target.matches('[data-av-lang]')) { ed.lang = e.target.value; paintEd(); } });
  document.addEventListener('keydown', e => { if (edEl && e.key === 'Escape') closeEd(); });

  function mount(node) { el = node; el.innerHTML = html(); if (!list) load();
    if (el.dataset.wired) return; el.dataset.wired = '1';
    el.addEventListener('submit', async e => { if (!e.target.matches('.stu-add')) return; e.preventDefault(); const f = e.target;
      const first = f.first.value.trim(), email = f.email.value.trim(), password = f.password.value;
      busy = true; paint();
      try { const out = await call({ action: 'add', first_name: first, email, password, gender: addLook.gender, avatar: addLook.avatar, first_language: addLook.lang }); busy = false; list = null;
        addLook = { gender: 'unspecified', avatar: {}, lang: '' }; const g = el.querySelector('.stu-add'); if (g) { g.reset(); g.password.value = pw(); } await load();
        msg = out.existing ? { kind: 'ok', html: `<b>${esc(first)}</b> is added. This email already had an account (from another course), so they sign in with <b>their own existing password</b>.` }
          : { kind: 'ok', html: `<b>${esc(first)}</b> is added. Send them: <span class="stu-cred">Email: <code>${esc(email)}</code> · Password: <code>${esc(password)}</code></span> <button type="button" class="btn-quiet btn-sm" data-stu="copy" data-copy="${esc(`IELTS Preparation\n${location.href.split('#')[0]}\nEmail: ${email}\nPassword: ${password}`)}">Copy</button>` };
        paint(); const fresh = el.querySelector('.stu-add'); if (fresh) { fresh.first.value = ''; fresh.email.value = ''; fresh.password.value = pw(); } }
      catch (err) { busy = false; say(err.message, 'err'); } });
    el.addEventListener('click', async e => { const b = e.target.closest('[data-stu]'); if (!b) return; const act = b.dataset.stu, row = b.closest('.stu-row'), m = row && list.find(x => x.user_id === row.dataset.id);
      if (act === 'gen') { el.querySelector('[name=password]').value = pw(); return; }
      if (act === 'addlook') { if (CH()) openEd({ who: '', name: el.querySelector('[name=first]').value.trim(), ...addLook }); return; }
      if (act === 'look') { if (CH()) openEd({ who: m.user_id, name: m.first_name || m.email, gender: m.gender, avatar: m.avatar || {}, lang: m.first_language || '' }); return; }
      if (act === 'copy') { try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; } catch (err) { b.textContent = 'Select and copy'; } return; }
      if (act === 'remove') { if (!confirm(`Remove ${m.first_name || m.email}? They will no longer be able to sign in.`)) return;
        try { await call({ action: 'remove', user_id: m.user_id }); list = list.filter(x => x.user_id !== m.user_id); say(`${m.first_name || m.email} has been removed.`); } catch (err) { say(err.message, 'err'); } return; }
      if (act === 'password') { const p = prompt(`New password for ${m.first_name || m.email} (at least 6 characters):`, pw()); if (!p) return;
        try { await call({ action: 'password', user_id: m.user_id, password: p }); msg = { kind: 'ok', html: `New password for <b>${esc(m.first_name)}</b>: <code>${esc(p)}</code>` }; paint(); } catch (err) { say(err.message, 'err'); } }
    });
  }
  return { html, mount };
})();
