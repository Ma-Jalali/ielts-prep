/* IELTS Prep · the recording player on an exercise (markup in js/sheet.js, class .xp).
   - A waveform you can tap or drag to move through the recording, with the time so far and the length.
   - Back / forward 10 seconds, speed (1×, 1.25×, 1.5×, 0.75×), volume; "Play again" when it ends.
   - Remembers where each recording stopped (on this device) and offers "Continue" next time.
   - Lock-screen and earphone controls on phones (Media Session), one recording at a time.
   - Keyboard on a computer, when the player has focus: Space or K play/pause, ← → or J/L 10 seconds.
   The recording comes through the 'ielts-audio' relay (streams from Google Drive with byte ranges); if that fails it
   tries Drive's direct link once, then offers to open the file in Google Drive. */
(() => {
  const fmt = s => isFinite(s) && s >= 0 ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '--:--';
  const SPEEDS = [1, 1.25, 1.5, 0.75];
  const box = a => a?.closest?.('.xp');
  const posKey = p => 'ielts-pos-' + (p.dataset.key || '');
  const getPos = p => { try { return +localStorage.getItem(posKey(p)) || 0; } catch (e) { return 0; } };
  const setPos = (p, t) => { try { t > 3 ? localStorage.setItem(posKey(p), String(Math.floor(t))) : localStorage.removeItem(posKey(p)); } catch (e) { /* private mode */ } };

  function paint(p) { const a = p.querySelector('audio'); if (!a) return;
    const ended = a.ended || (a.duration && a.currentTime >= a.duration - .05 && a.paused);
    p.classList.toggle('is-playing', !a.paused); p.classList.toggle('is-ended', !!ended && a.paused);
    p.querySelector('.xp-play').setAttribute('aria-label', !a.paused ? 'Pause the recording' : ended ? 'Play the recording again' : 'Play the recording');
    p.querySelector('.xp-t').textContent = fmt(a.currentTime); p.querySelector('.xp-d').textContent = a.duration && a.currentTime > .5 && !ended ? '−' + fmt(a.duration - a.currentTime) : fmt(a.duration);   // the time left, once it has started
    const pct = a.duration ? 100 * a.currentTime / a.duration : 0, seek = p.querySelector('.xp-seek');
    if (!p.classList.contains('is-seeking')) seek.value = Math.round(pct * 10);
    p.style.setProperty('--p', pct + '%');
    p.querySelector('.xp-speed').textContent = (a.playbackRate || 1) + '×';
    p.classList.toggle('is-muted', a.muted || a.volume === 0);
    p.querySelector('.xp-volume')?.style.setProperty('--v', (a.muted ? 0 : a.volume) * 100 + '%');
    p.querySelector('.xp-state').textContent = p.classList.contains('is-broken') ? '' : p.classList.contains('is-loading') ? 'Loading…' : !a.paused ? (a.playbackRate !== 1 ? `Playing · ${a.playbackRate}×` : 'Playing') : ended ? 'Finished' : a.currentTime > 0 ? 'Paused' : ''; }

  function play(p) { const a = p.querySelector('audio'); p.dataset.wantPlay = '1';
    if (a.ended || (a.duration && a.currentTime >= a.duration - .05)) a.currentTime = 0;
    p.querySelector('.xp-resume').hidden = true;
    p.classList.add('is-loading'); paint(p); a.play().catch(() => { p.classList.remove('is-loading'); paint(p); }); }
  const skip = (a, s) => { a.currentTime = Math.max(0, Math.min((a.duration || 1e9) - .1, a.currentTime + s)); };

  /* lock screen, earphones and car controls */
  function session(p) { if (!('mediaSession' in navigator)) return; const a = p.querySelector('audio');
    try { navigator.mediaSession.metadata = new MediaMetadata({ title: p.dataset.title || 'Recording', artist: (window.DEC15_LESSON?.title || 'IELTS Listening'), album: 'IELTS Preparation', artwork: [{ src: 'assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }] });
      const set = (k, f) => { try { navigator.mediaSession.setActionHandler(k, f); } catch (e) { /* not supported */ } };
      set('play', () => play(p)); set('pause', () => a.pause());
      set('seekbackward', d => skip(a, -(d?.seekOffset || 10))); set('seekforward', d => skip(a, d?.seekOffset || 10));
      set('seekto', d => { if (d?.seekTime != null) a.currentTime = d.seekTime; });
      set('previoustrack', null); set('nexttrack', null);
    } catch (e) { /* older browser */ } }

  document.addEventListener('click', e => { const p = e.target.closest?.('.xp'); if (!p) return; const a = p.querySelector('audio'); if (!a) return;
    if (e.target.closest('.xp-play')) { a.paused ? play(p) : a.pause(); return; }
    const b = e.target.closest('[data-xp]'); if (!b) return; const k = b.dataset.xp;
    if (k === '-10' || k === '+10') skip(a, +k);
    else if (k === 'speed') { const i = SPEEDS.indexOf(a.playbackRate); a.playbackRate = SPEEDS[(i + 1) % SPEEDS.length]; }
    else if (k === 'mute') a.muted = !a.muted;
    else if (k === 'resume') { const t = getPos(p); if (a.readyState >= 1) a.currentTime = t; else a.addEventListener('loadedmetadata', () => { a.currentTime = t; }, { once: true }); p.querySelector('.xp-resume').hidden = true; play(p); }
    else if (k === 'restart') { a.currentTime = 0; setPos(p, 0); p.querySelector('.xp-resume').hidden = true; play(p); }
    paint(p); });

  /* the waveform: drag or tap to move; the time follows the finger */
  document.addEventListener('input', e => { const p = box(e.target); if (!p) return; const a = p.querySelector('audio');
    if (e.target.matches('.xp-seek')) { p.classList.add('is-seeking'); p.style.setProperty('--p', e.target.value / 10 + '%'); if (a.duration) { const t = a.duration * e.target.value / 1000; p.querySelector('.xp-t').textContent = fmt(t); a.currentTime = t; } }
    if (e.target.matches('.xp-volume')) { a.volume = +e.target.value; a.muted = false; paint(p); } });
  document.addEventListener('change', e => { const p = box(e.target); if (p && e.target.matches('.xp-seek')) { p.classList.remove('is-seeking'); paint(p); } });

  /* hovering the waveform (computer): a line and the time at that point */
  document.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; const w = e.target.closest?.('.xp-wave'); if (!w) return; const p = box(w), a = p.querySelector('audio'), r = w.getBoundingClientRect(), x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    p.style.setProperty('--h', x * 100 + '%'); p.classList.add('is-hover'); p.querySelector('.xp-tip').textContent = a.duration ? fmt(a.duration * x) : '--:--'; });
  document.addEventListener('pointerout', e => { const w = e.target.closest?.('.xp-wave'); if (w && !w.contains(e.relatedTarget)) box(w).classList.remove('is-hover'); });

  /* keyboard, when the player has focus (not while typing an answer) */
  document.addEventListener('keydown', e => { const p = e.target.closest?.('.xp'); if (!p || e.target.matches('input.xp-volume')) return; const a = p.querySelector('audio');
    if (e.key === ' ' || e.key === 'k') { e.preventDefault(); a.paused ? play(p) : a.pause(); }
    else if ((e.key === 'ArrowLeft' || e.key === 'j') && !e.target.matches('.xp-seek')) { e.preventDefault(); skip(a, -10); }
    else if ((e.key === 'ArrowRight' || e.key === 'l') && !e.target.matches('.xp-seek')) { e.preventDefault(); skip(a, 10); } });

  let saveT = 0;
  ['play', 'pause', 'timeupdate', 'loadedmetadata', 'durationchange', 'ratechange', 'volumechange', 'ended', 'playing', 'waiting', 'canplay', 'seeked'].forEach(ev => document.addEventListener(ev, e => {
    const a = e.target, p = box(a); if (!(a instanceof HTMLAudioElement) || !p) return;
    if (ev === 'play') { document.querySelectorAll('.xp audio').forEach(x => { if (x !== a && !x.paused) x.pause(); }); session(p); p.querySelector('.xp-resume').hidden = true; }   // one at a time
    if (ev === 'waiting') p.classList.add('is-loading'); if (ev === 'playing' || ev === 'canplay' || ev === 'pause' || ev === 'seeked') p.classList.remove('is-loading');
    if (ev === 'loadedmetadata') { const t = getPos(p); if (t > 5 && a.duration && t < a.duration - 5 && a.currentTime < 1) { p.querySelector('.xp-rt').textContent = fmt(t); p.querySelector('.xp-resume').hidden = false; } }
    if (ev === 'timeupdate' && Date.now() - saveT > 4000) { saveT = Date.now(); setPos(p, a.currentTime); }
    if (ev === 'pause') setPos(p, a.currentTime);
    if (ev === 'ended') setPos(p, 0);
    if ('mediaSession' in navigator && (ev === 'play' || ev === 'pause')) try { navigator.mediaSession.playbackState = ev === 'play' ? 'playing' : 'paused'; } catch (err) { /* ignore */ }
    paint(p); }, true));

  /* the saved place shows before the recording loads, so "Continue" is there straight away */
  const offer = () => document.querySelectorAll('.xp').forEach(p => { if (p.dataset.offered) return; p.dataset.offered = '1'; const t = getPos(p); if (t > 5) { p.querySelector('.xp-rt').textContent = fmt(t); p.querySelector('.xp-resume').hidden = false; } });
  const main = document.getElementById('main'); if (main) new MutationObserver(offer).observe(main, { childList: true }); offer();

  /* the relay failed: try Drive's direct link once, then offer Drive itself */
  document.addEventListener('error', e => { const a = e.target, p = box(a); if (!(a instanceof HTMLAudioElement) || !p) return;
    const fb = p.dataset.fallback; p.classList.remove('is-loading');
    if (fb && !p.dataset.triedFallback) { p.dataset.triedFallback = '1'; const t = a.currentTime; a.src = fb; a.load(); if (t) a.currentTime = t; if (p.dataset.wantPlay === '1') a.play().catch(() => {}); return; }
    p.classList.add('is-broken'); p.querySelector('.xp-msg').hidden = false; paint(p); }, true);
})();
