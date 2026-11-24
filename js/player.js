/* IELTS Prep · the recording player on an exercise (markup in js/sheet.js, class .xp). A big play button, a seek bar
   with times, back / forward 10 seconds, speed (1×, 1.25×, 1.5×, 0.75×) and volume. The recording comes through the
   'ielts-audio' relay (streams from Google Drive with byte ranges, so it seeks on every phone); if that fails it tries
   Drive's direct link, then shows a link to open the file in Google Drive. One recording plays at a time. */
(() => {
  const fmt = s => isFinite(s) && s >= 0 ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '--:--';
  const SPEEDS = [1, 1.25, 1.5, 0.75];
  const box = a => a?.closest?.('.xp');
  function paint(p) { const a = p.querySelector('audio'); if (!a) return;
    p.classList.toggle('is-playing', !a.paused); p.querySelector('.xp-play').setAttribute('aria-label', a.paused ? 'Play the recording' : 'Pause the recording');
    p.querySelector('.xp-t').textContent = fmt(a.currentTime); p.querySelector('.xp-d').textContent = fmt(a.duration);
    const seek = p.querySelector('.xp-seek'); if (!seek.matches(':active')) seek.value = a.duration ? Math.round(1000 * a.currentTime / a.duration) : 0;
    seek.style.setProperty('--p', (a.duration ? 100 * a.currentTime / a.duration : 0) + '%');
    p.querySelector('.xp-speed').textContent = (a.playbackRate || 1) + '×';
    p.classList.toggle('is-muted', a.muted || a.volume === 0); }

  document.addEventListener('click', e => { const p = e.target.closest?.('.xp'); if (!p) return; const a = p.querySelector('audio'); if (!a) return;
    if (e.target.closest('.xp-play')) { if (a.paused) { p.classList.add('is-loading'); a.play().catch(() => p.classList.remove('is-loading')); } else a.pause(); return; }
    const b = e.target.closest('[data-xp]'); if (!b) return; const k = b.dataset.xp;
    if (k === '-10' || k === '+10') { a.currentTime = Math.max(0, Math.min((a.duration || 1e9) - .1, a.currentTime + (+k))); }
    else if (k === 'speed') { const i = SPEEDS.indexOf(a.playbackRate); a.playbackRate = SPEEDS[(i + 1) % SPEEDS.length]; }
    else if (k === 'mute') a.muted = !a.muted;
    paint(p); });
  document.addEventListener('input', e => { const p = box(e.target); if (!p) return; const a = p.querySelector('audio');
    if (e.target.matches('.xp-seek') && a.duration) { a.currentTime = a.duration * e.target.value / 1000; paint(p); }
    if (e.target.matches('.xp-volume')) { a.volume = +e.target.value; a.muted = false; paint(p); } });

  ['play', 'pause', 'timeupdate', 'loadedmetadata', 'durationchange', 'ratechange', 'volumechange', 'ended', 'playing', 'waiting', 'canplay'].forEach(ev => document.addEventListener(ev, e => {
    const a = e.target, p = box(a); if (!(a instanceof HTMLAudioElement) || !p) return;
    if (ev === 'play') document.querySelectorAll('.xp audio').forEach(x => { if (x !== a && !x.paused) x.pause(); });   // one recording at a time
    if (ev === 'waiting') p.classList.add('is-loading'); if (ev === 'playing' || ev === 'canplay' || ev === 'pause') p.classList.remove('is-loading');
    paint(p); }, true));

  /* the relay failed: try Drive's direct link once, then offer Drive itself */
  document.addEventListener('error', e => { const a = e.target, p = box(a); if (!(a instanceof HTMLAudioElement) || !p) return;
    const fb = p.dataset.fallback; p.classList.remove('is-loading');
    if (fb && !p.dataset.triedFallback) { p.dataset.triedFallback = '1'; const t = a.currentTime, playing = p.dataset.wantPlay === '1'; a.src = fb; a.load(); if (t) a.currentTime = t; if (playing) a.play().catch(() => {}); return; }
    p.classList.add('is-broken'); p.querySelector('.xp-msg').hidden = false; }, true);
  document.addEventListener('click', e => { const p = e.target.closest?.('.xp'); if (p && e.target.closest('.xp-play')) p.dataset.wantPlay = '1'; }, true);
})();
