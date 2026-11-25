/* IELTS Prep · phones. Most students use the site on a phone, so on a narrow screen (≤ 720px):
   - a bottom tab bar (Home · Listening · Reading · Dictionary · Menu) replaces the numbered bar at the top;
   - the top bar shows a back arrow and the page's name;
   - on an exercise, a mini player stays at the bottom once the recording scrolls out of view, so students can pause,
     go back 5 seconds or play again without scrolling up (on every screen size);
   - maps, plans and pictures open full screen with zoom;
   - Enter in an answer box moves to the next box. */
(() => {
  const phone = () => matchMedia('(max-width: 720px)').matches;
  const $ = s => document.querySelector(s);
  const ic = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    home: '<path d="M3.5 10.5 12 4l8.5 6.5V20h-5.5v-6h-6v6H3.5z"/>',
    listen: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13" width="4" height="7" rx="1.6"/><rect x="17" y="13" width="4" height="7" rx="1.6"/>',
    read: '<path d="M4 5.5C6.5 4 9 4 12 5.5 15 4 17.5 4 20 5.5V19c-2.5-1.5-5-1.5-8 0-3-1.5-5.5-1.5-8 0z"/><path d="M12 5.5V19"/>',
    dict: '<path d="M6 4h11a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2z"/><path d="M6 18a2 2 0 0 1 2-2h11M10 8h5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    back: '<path d="M15 5 8 12l7 7"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>', pause: '<path d="M8 5v14M16 5v14" stroke-width="3"/>',
    rew: '<path d="M11 7 6 12l5 5M18 7l-5 5 5 5"/>', zoomIn: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M11 8v6M8 11h6"/>', zoomOut: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8 11h6"/>', close: '<path d="M6 6l12 12M18 6 6 18"/>'
  };

  /* ── bottom tab bar ── */
  const listening = (window.DEC15_COURSE?.weeks || []).find(w => /listen/i.test(w.theme)), reading = (window.DEC15_COURSE?.weeks || []).find(w => /read/i.test(w.theme));
  const bar = document.createElement('nav'); bar.className = 'm-bar'; bar.setAttribute('aria-label', 'Main');
  bar.innerHTML = [['home', '#/', 'Home'], ['listen', listening ? `#/skill/${listening.n}` : '#/', 'Listening'], ['read', reading ? `#/skill/${reading.n}` : '#/', 'Reading'], ['dict', '', 'Dictionary'], ['menu', '', 'Menu']]
    .map(([k, href, label]) => href ? `<a class="m-tab" data-m="${k}" href="${href}">${ic(I[k])}<span>${label}</span></a>` : `<button type="button" class="m-tab" data-m="${k}">${ic(I[k])}<span>${label}</span></button>`).join('');
  document.body.appendChild(bar);
  bar.addEventListener('click', e => { const t = e.target.closest('[data-m]'); if (!t) return;
    if (t.dataset.m === 'menu') { e.preventDefault(); $('#menu-btn')?.click(); }
    if (t.dataset.m === 'dict') { e.preventDefault(); $('.dx-fab')?.click(); } });
  function paintBar() { const h = location.hash || '#/', days = window.DEC15_DAYS || [], id = (h.match(/^#\/([\w-]+)/) || [])[1], d = days.find(x => x.id === id);
    const sk = (h.match(/^#\/skill\/(\d+)/) || [])[1] || (d && d.week ? String(d.week) : '');
    bar.querySelectorAll('[data-m]').forEach(a => a.classList.toggle('is-on', a.dataset.m === 'home' ? h === '#/' || h === '#' || h === '' : a.dataset.m === 'listen' ? sk && +sk === listening?.n : a.dataset.m === 'read' ? sk && +sk === reading?.n : false)); }

  /* ── top bar: back arrow and the page's name, from the breadcrumb ── */
  const head = document.createElement('div'); head.className = 'm-head';
  function paintHead() { const crumb = $('#crumb'); if (!crumb) return; const links = [...crumb.querySelectorAll('a')], last = crumb.querySelector('b');
    const parent = links.length ? links[links.length - 1] : null, title = (last?.textContent || '').trim();
    const back = parent && (location.hash || '#/') !== '#/' ? parent.getAttribute('href') : '';
    head.innerHTML = `${back ? `<a class="m-back" href="${back}" aria-label="Back to ${parent.textContent.trim() || 'the previous page'}">${ic(I.back)}</a>` : ''}<b class="m-title">${title.replace(/[<>&]/g, '')}</b>`; }
  const topbar = $('.topbar'); if (topbar) topbar.insertBefore(head, topbar.firstChild);
  new MutationObserver(() => { paintHead(); paintBar(); }).observe($('#crumb') || document.body, { childList: true, subtree: true, characterData: true });
  addEventListener('hashchange', paintBar); paintBar(); paintHead();

  /* ── answer boxes: Enter moves to the next one; phones get the right keyboard hint ── */
  document.addEventListener('keydown', e => { if (e.key !== 'Enter' || !e.target.matches?.('.xs input[type=text]')) return; e.preventDefault();
    const all = [...document.querySelectorAll('.xs input[type=text], .xs select')], i = all.indexOf(e.target), nx = all[i + 1];
    if (nx) { nx.focus(); nx.scrollIntoView({ block: 'center', behavior: 'smooth' }); } else e.target.blur(); });
  const hint = () => document.querySelectorAll('.xs input[type=text]').forEach(x => { x.enterKeyHint = 'next'; x.setAttribute('autocapitalize', 'off'); x.setAttribute('autocorrect', 'off'); });

  /* ── mini player: the recording stays within reach while the student answers ── */
  const skipIc = (fwd, n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${fwd ? '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.8 3.8v3.6h-3.6"/>' : '<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.2 3.8v3.6h3.6"/>'}<text x="12" y="15.6" text-anchor="middle" font-size="7.6" font-weight="800" fill="currentColor" stroke="none" font-family="system-ui, sans-serif">${n}</text></svg>`;
  const mini = document.createElement('div'); mini.className = 'm-mini'; mini.hidden = true; mini.setAttribute('role', 'region'); mini.setAttribute('aria-label', 'Recording');
  mini.innerHTML = `<button type="button" class="m-mini-play" aria-label="Play">${ic(I.play)}</button>
    <div class="m-mini-tx"><div class="m-mini-top"><b></b><span class="m-mini-t">0:00</span></div><div class="m-mini-bar"><i></i><input type="range" min="0" max="1000" value="0" aria-label="Position in the recording"></div></div>
    <button type="button" class="m-mini-skip" data-s="-10" aria-label="Back 10 seconds">${skipIc(false, 10)}</button><button type="button" class="m-mini-skip" data-s="10" aria-label="Forward 10 seconds">${skipIc(true, 10)}</button>`;
  document.body.appendChild(mini);
  let cur = null, seen = new Map(), io = null, dragging = false;
  const fmt = s => isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00';
  const label = a => (a.closest('.xp')?.dataset.title || 'Recording').replace(/Questions? /, 'Q ');
  function paintMini() { if (!cur || !document.contains(cur)) { mini.hidden = true; document.body.classList.remove('has-mini'); return; }
    const offscreen = seen.get(cur) === false, started = cur.currentTime > 0 || !cur.paused;
    mini.hidden = !(offscreen && started);
    mini.querySelector('b').textContent = label(cur);
    mini.querySelector('.m-mini-play').innerHTML = ic(cur.paused ? I.play : I.pause); mini.querySelector('.m-mini-play').setAttribute('aria-label', cur.paused ? 'Play' : 'Pause');
    mini.classList.toggle('is-playing', !cur.paused);
    const pct = cur.duration ? 100 * cur.currentTime / cur.duration : 0;
    mini.querySelector('.m-mini-bar i').style.width = pct + '%'; if (!dragging) mini.querySelector('.m-mini-bar input').value = Math.round(pct * 10);
    mini.querySelector('.m-mini-t').textContent = fmt(cur.currentTime) + (cur.duration ? ' / ' + fmt(cur.duration) : '');
    document.body.classList.toggle('has-mini', !mini.hidden); }
  mini.addEventListener('click', e => { if (!cur) return;
    if (e.target.closest('.m-mini-play')) { cur.paused ? cur.closest('.xp')?.querySelector('.xp-play')?.click() : cur.pause(); }
    else if (e.target.closest('[data-s]')) cur.currentTime = Math.max(0, Math.min((cur.duration || 1e9) - .1, cur.currentTime + +e.target.closest('[data-s]').dataset.s));
    else if (e.target.closest('.m-mini-top')) cur.closest('.xs-player')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    paintMini(); });
  mini.addEventListener('input', e => { if (!cur || !e.target.matches('input[type=range]') || !cur.duration) return; dragging = true; cur.currentTime = cur.duration * e.target.value / 1000; mini.querySelector('.m-mini-bar i').style.width = e.target.value / 10 + '%'; });
  mini.addEventListener('change', () => { dragging = false; paintMini(); });
  ['play', 'pause', 'timeupdate', 'ended', 'loadedmetadata'].forEach(ev => document.addEventListener(ev, e => { if (!(e.target instanceof HTMLAudioElement) || !e.target.closest('.xs')) return;
    if (ev === 'play') { cur = e.target; document.querySelectorAll('.xs audio').forEach(a => { if (a !== cur && !a.paused) a.pause(); }); }   // one recording at a time
    if (e.target === cur) paintMini(); }, true));
  function watch() { io?.disconnect(); seen = new Map(); const auds = [...document.querySelectorAll('.xs audio')]; if (!auds.length) { cur = null; paintMini(); return; }
    if (!cur || !document.contains(cur)) cur = auds[0];
    io = new IntersectionObserver(es => { es.forEach(x => seen.set(x.target.querySelector('audio') || x.target, x.isIntersecting)); paintMini(); }, { threshold: 0 });
    auds.forEach(a => { const p = a.closest('.xs-player') || a; io.observe(p); }); }

  /* ── pictures: tap to open full screen, with zoom ── */
  const view = document.createElement('div'); view.className = 'm-view'; view.hidden = true; view.setAttribute('role', 'dialog'); view.setAttribute('aria-label', 'Picture');
  view.innerHTML = `<div class="m-view-tools"><button type="button" data-z="-" aria-label="Zoom out">${ic(I.zoomOut)}</button><button type="button" data-z="+" aria-label="Zoom in">${ic(I.zoomIn)}</button><button type="button" data-z="x" aria-label="Close">${ic(I.close)}</button></div><div class="m-view-scroll"><div class="m-view-pic"></div></div>`;
  document.body.appendChild(view);
  let zoom = 1; const setZoom = z => { zoom = Math.max(1, Math.min(4, z)); view.querySelector('.m-view-pic').style.width = (zoom * 100) + '%'; };
  view.addEventListener('click', e => { const b = e.target.closest('[data-z]'); if (b) { if (b.dataset.z === 'x') { view.hidden = true; document.body.classList.remove('m-view-open'); } else setZoom(zoom + (b.dataset.z === '+' ? .75 : -.75)); } });
  document.addEventListener('click', e => { const pic = e.target.closest?.('.xs .xs-pic, .xs .xs-figure'); if (!pic || e.target.closest('input, select, button')) return;
    const c = pic.cloneNode(true); c.querySelectorAll('figcaption').forEach(x => x.remove());
    view.querySelector('.m-view-pic').replaceChildren(c); setZoom(phone() ? 1.6 : 1); view.hidden = false; document.body.classList.add('m-view-open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !view.hidden) { view.hidden = true; document.body.classList.remove('m-view-open'); } });

  /* ── exercise progress strip: how many questions have an answer; "Answers" opens the key ── */
  function answered() { const xs = document.querySelector('.xs'); if (!xs) return; const got = new Set();
    xs.querySelectorAll('.xs-gap input, .xs-gap select').forEach(f => { const m = (f.getAttribute('aria-label') || '').match(/(\d+)/); if (m && String(f.value).trim()) got.add(+m[1]); });
    xs.querySelectorAll('.xs-opts[role=radiogroup], .xs-tf-o[role=radiogroup]').forEach(g => { const m = (g.getAttribute('aria-label') || '').match(/(\d+)/); if (m && g.querySelector('input:checked')) got.add(+m[1]); });
    xs.querySelectorAll('.xs-mq.is-multi').forEach(g => { const from = +g.dataset.from || 1, n = +g.dataset.n || 1, c = Math.min(n, g.querySelectorAll('input:checked').length); for (let i = 0; i < c; i++) got.add(from + i); });
    const total = +xs.dataset.total || 0, k = Math.min(total, got.size), strip = xs.querySelector('.xs-bar, .xs-strip'); if (!strip) return;
    strip.querySelector('.xs-strip-n b').textContent = k; strip.querySelector('.xs-strip-bar i').style.width = (total ? 100 * k / total : 0) + '%'; strip.classList.toggle('is-full', total && k >= total); }
  document.addEventListener('input', e => { if (e.target.closest?.('.xs')) answered(); });
  document.addEventListener('change', e => { if (e.target.closest?.('.xs')) answered(); });
  document.addEventListener('click', e => { if (!e.target.closest?.('[data-xs-answers]')) return; const k = document.querySelector('.xs .xs-fold.is-key'); if (!k) return; k.open = true; const bar = document.querySelector('[data-xs-nav]'); scrollTo({ top: k.getBoundingClientRect().top + scrollY - (document.querySelector('.masthead')?.offsetHeight || 0) - (bar?.offsetHeight || 0) - 14, behavior: 'smooth' }); });

  /* the app redraws #main: wire the new page */
  const main = document.getElementById('main');
  if (main) new MutationObserver(() => { hint(); watch(); answered(); }).observe(main, { childList: true });
  hint(); watch(); answered();
})();
