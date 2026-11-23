/* IELTS · Band score calculator (#/band): Listening and Reading correct answers (out of 40) → band, Writing and Speaking
   bands, and the overall band with the official rounding (a quarter rounds up to the half, three quarters to the whole).
   The Listening/Reading tables are the commonly published Academic conversions; the official one can differ by a mark
   from test to test, so the page says the result is an estimate. Saved on this device only. */
window.createIELTSBand = function ({ esc, target = [6.5, 7] }) {
  const LIS = [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [1, 2], [0, 0]];
  const REA = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [1, 2], [0, 0]];
  const band = (t, n) => (t.find(([min]) => n >= min) || [0, 0])[1];
  const overall = b => { const avg = b.reduce((a, x) => a + x, 0) / 4, f = avg - Math.floor(avg); return Math.floor(avg) + (f < .25 ? 0 : f < .75 ? .5 : 1); };
  const KEY = 'ielts-band-calc';
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const keep = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* ignore */ } };
  const fmt = x => (x % 1 ? x.toFixed(1) : x + '.0');
  const halves = [...Array(19)].map((_, i) => i / 2).reverse();
  const SK = [['lis', 'Listening', '#0e8a8f', 'raw'], ['rea', 'Reading', '#2b67d1', 'raw'], ['wri', 'Writing', '#e2552f', 'band'], ['spe', 'Speaking', '#7a4fd0', 'band']];
  function result(v) {
    const b = { lis: band(LIS, +v.lis || 0), rea: band(REA, +v.rea || 0), wri: +v.wri || 0, spe: +v.spe || 0 };
    const all = SK.every(([k, , , t]) => (t === 'raw' ? v[k] !== undefined && v[k] !== '' : v[k] !== undefined && v[k] !== ''));
    return { b, all, o: overall([b.lis, b.rea, b.wri, b.spe]) };
  }
  function paintOut(root) {
    const v = load(), { b, all, o } = result(v), out = root.querySelector('[data-band-out]'); if (!out) return;
    SK.forEach(([k]) => { const el = root.querySelector(`[data-band-of="${k}"]`); if (el) el.textContent = (v[k] === undefined || v[k] === '') ? '–' : fmt(b[k]); });
    const [lo, hi] = target, gap = Math.max(0, lo - o);
    out.innerHTML = all ? `<span class="bc-o-label">Overall band</span><b class="bc-o-num">${fmt(o)}</b>
      <span class="bc-o-note ${o >= lo ? 'is-ok' : ''}">${o >= hi ? `Above the course target (${fmt(lo)}–${fmt(hi)}). Excellent!` : o >= lo ? `Inside the course target (${fmt(lo)}–${fmt(hi)}). Keep it steady.` : `${fmt(gap)} below the course target of ${fmt(lo)}.`}</span>
      <span class="bc-o-bar" style="--p:${(o / 9).toFixed(3)};--t:${(lo / 9).toFixed(3)}"><i></i><em title="Target ${fmt(lo)}"></em></span>`
      : `<span class="bc-o-label">Overall band</span><b class="bc-o-num is-empty">–</b><span class="bc-o-note">Fill in all four parts to see your overall band.</span>`;
  }
  function html() {
    const v = load();
    const row = ([k, name, c, t]) => `<div class="bc-row" style="--c:${c}"><label for="bc-${k}"><b>${name}</b><small>${t === 'raw' ? 'Correct answers out of 40' : 'Your band (0–9)'}</small></label>
      ${t === 'raw' ? `<input id="bc-${k}" type="number" inputmode="numeric" min="0" max="40" step="1" placeholder="0–40" value="${esc(v[k] ?? '')}" data-band="${k}">`
        : `<select id="bc-${k}" data-band="${k}"><option value="">Choose…</option>${halves.map(h => `<option value="${h}"${String(v[k]) === String(h) ? ' selected' : ''}>${fmt(h)}</option>`).join('')}</select>`}
      <span class="bc-band" aria-live="polite"><small>Band</small><b data-band-of="${k}">–</b></span></div>`;
    return `<div class="bc-page"><header class="bc-head"><span class="eyebrow">IELTS · Tool</span><h1>Band score calculator</h1>
      <p>Enter your practice-test results to see each band and your overall band, rounded the way IELTS rounds it.</p></header>
      <div class="bc-grid"><section class="bc-card" aria-label="Your scores">${SK.map(row).join('')}<button type="button" class="btn-quiet bc-clear" data-band-clear>Clear</button></section>
      <section class="bc-card bc-out" data-band-out aria-live="polite"></section></div>
      <details class="bc-how"><summary>How the overall band is worked out</summary><p>The four bands are averaged. An average ending in .25 rounds up to the half band, and one ending in .75 rounds up to the next whole band: 6.25 → 6.5, 6.75 → 7.0, 6.1 → 6.0.</p>
      <p>Listening and Reading use the commonly published Academic conversion tables. The official table can change by a mark from one test to another, so treat the result as an estimate.</p></details></div>`;
  }
  document.addEventListener('input', e => { const t = e.target.closest?.('[data-band]'); if (!t) return; const v = load(); let x = t.value;
    if (t.type === 'number' && x !== '') { x = Math.max(0, Math.min(40, Math.round(+x))); if (String(x) !== t.value) t.value = x; }
    v[t.dataset.band] = x; keep(v); paintOut(t.closest('.bc-page')); });
  document.addEventListener('click', e => { if (!e.target.closest?.('[data-band-clear]')) return; keep({}); const p = e.target.closest('.bc-page');
    p.querySelectorAll('[data-band]').forEach(x => { x.value = ''; }); paintOut(p); });
  return { html, mount: root => paintOut(root) };
};
