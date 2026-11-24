/* IELTS Prep · Students (teacher only): add a student (first name, email, password), change a password, remove a
   student. Talks to the 'ielts-admin' edge function, which checks that the caller is the IELTS admin and does the
   work with the service role. app.js shows this page at #/students for the admin (window.IELTS_GATE.isAdmin). */
window.IELTSStudents = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  let list = null, msg = null, busy = false, el = null;
  async function call(body) {
    const cfg = window.DEC15_CONFIG, token = await window.IELTS_GATE.token();
    const r = await fetch(cfg.supabaseUrl.replace(/\/$/, '') + '/functions/v1/ielts-admin', { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: cfg.supabaseKey, Authorization: 'Bearer ' + token }, body: JSON.stringify(body) });
    const out = await r.json().catch(() => ({})); if (!r.ok || out.error) throw new Error(out.error || 'Something went wrong. Please try again.'); return out;
  }
  const pw = () => { const A = 'abcdefghjkmnpqrstuvwxyz', N = '23456789'; let s = ''; for (let i = 0; i < 6; i++) s += A[Math.floor(Math.random() * A.length)]; return s[0].toUpperCase() + s.slice(1) + N[Math.floor(Math.random() * N.length)] + N[Math.floor(Math.random() * N.length)]; };
  const say = (t, kind = 'ok') => { msg = { t, kind }; paint(); };
  async function load() { try { list = (await call({ action: 'list' })).members || []; } catch (e) { list = []; msg = { t: e.message, kind: 'err' }; } paint(); }

  function rows() {
    const st = (list || []).filter(m => m.role !== 'admin');
    if (!list) return '<p class="stu-empty">Loading your students…</p>';
    if (!st.length) return '<p class="stu-empty">No students yet. Add your first student above.</p>';
    return `<ul class="stu-list">${st.map(m => `<li class="stu-row" data-id="${esc(m.user_id)}"><span class="stu-av" aria-hidden="true">${esc((m.first_name || m.email || '?')[0].toUpperCase())}</span>
      <span class="stu-tx"><b>${esc(m.first_name || '—')}</b><small>${esc(m.email)}</small></span><span class="stu-date">Added ${new Date(m.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
      <span class="stu-act"><button type="button" class="btn-quiet btn-sm" data-stu="password">New password</button><button type="button" class="btn-quiet btn-sm stu-del" data-stu="remove">Remove</button></span></li>`).join('')}</ul>`;
  }
  function html() {
    const n = (list || []).filter(m => m.role !== 'admin').length;
    return `<section class="stu-page"><header class="stu-head"><span class="eyebrow">Teacher only</span><h1>Your students</h1><p>Only the people on this list can sign in to IELTS Preparation. Add a student with their email and a password, then give them both. Remove a student and they can no longer sign in.</p></header>
      ${msg ? `<p class="stu-msg is-${msg.kind}" role="status">${msg.html || esc(msg.t)}</p>` : ''}
      <form class="stu-add" autocomplete="off"><h2>Add a student</h2>
        <label><span>First name</span><input name="first" required placeholder="e.g. Isla"></label>
        <label><span>Email</span><input name="email" type="email" required placeholder="student@email.com"></label>
        <label><span>Password</span><span class="stu-pw"><input name="password" required minlength="6" value="${pw()}"><button type="button" class="btn-quiet btn-sm" data-stu="gen">New</button></span></label>
        <button class="btn" type="submit"${busy ? ' disabled' : ''}>${busy ? 'Adding…' : 'Add student'}</button></form>
      <section class="stu-box"><h2>Students <small>${list ? n : ''}</small></h2>${rows()}</section></section>`;
  }
  function paint() { if (el && document.body.contains(el)) { const keep = el.querySelector('.stu-add') ? { first: el.querySelector('[name=first]').value, email: el.querySelector('[name=email]').value } : null; el.innerHTML = html(); if (keep && busy) { el.querySelector('[name=first]').value = keep.first; el.querySelector('[name=email]').value = keep.email; } } }

  function mount(node) { el = node; el.innerHTML = html(); if (!list) load();
    if (el.dataset.wired) return; el.dataset.wired = '1';
    el.addEventListener('submit', async e => { if (!e.target.matches('.stu-add')) return; e.preventDefault(); const f = e.target;
      const first = f.first.value.trim(), email = f.email.value.trim(), password = f.password.value;
      busy = true; paint();
      try { const out = await call({ action: 'add', first_name: first, email, password }); busy = false; list = null; await load();
        msg = out.existing ? { kind: 'ok', html: `<b>${esc(first)}</b> is added. This email already had an account (from another course), so they sign in with <b>their own existing password</b>.` }
          : { kind: 'ok', html: `<b>${esc(first)}</b> is added. Send them: <span class="stu-cred">Email: <code>${esc(email)}</code> · Password: <code>${esc(password)}</code></span> <button type="button" class="btn-quiet btn-sm" data-stu="copy" data-copy="${esc(`IELTS Preparation\n${location.href.split('#')[0]}\nEmail: ${email}\nPassword: ${password}`)}">Copy</button>` };
        paint(); }
      catch (err) { busy = false; say(err.message, 'err'); } });
    el.addEventListener('click', async e => { const b = e.target.closest('[data-stu]'); if (!b) return; const act = b.dataset.stu, row = b.closest('.stu-row'), m = row && list.find(x => x.user_id === row.dataset.id);
      if (act === 'gen') { el.querySelector('[name=password]').value = pw(); return; }
      if (act === 'copy') { try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; } catch (err) { b.textContent = 'Select and copy'; } return; }
      if (act === 'remove') { if (!confirm(`Remove ${m.first_name || m.email}? They will no longer be able to sign in.`)) return;
        try { await call({ action: 'remove', user_id: m.user_id }); list = list.filter(x => x.user_id !== m.user_id); say(`${m.first_name || m.email} has been removed.`); } catch (err) { say(err.message, 'err'); } return; }
      if (act === 'password') { const p = prompt(`New password for ${m.first_name || m.email} (at least 6 characters):`, pw()); if (!p) return;
        try { await call({ action: 'password', user_id: m.user_id, password: p }); msg = { kind: 'ok', html: `New password for <b>${esc(m.first_name)}</b>: <code>${esc(p)}</code>` }; paint(); } catch (err) { say(err.message, 'err'); } }
    });
  }
  return { html, mount };
})();
