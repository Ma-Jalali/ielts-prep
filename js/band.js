/* IELTS · Band score calculator (#/band).
   Listening and Reading: choose the number of correct answers (0–40) and see the band at once. Reading has two tables,
   Academic and General Training, because the two modules are marked differently.
   Writing: Task 1 and Task 2 are chosen separately; Task 2 counts twice as much as Task 1, so the Writing band is
   (Task 1 + 2 × Task 2) ÷ 3, rounded to the nearest half band.
   Overall: the average of the four bands with the official rounding (.25 rounds up to the half band, .75 to the next
   whole band). The Listening/Reading tables are the commonly published conversions; the official ones can differ by a
   mark from test to test, so the page says the result is an estimate. Saved on this device only. */
window.createIELTSBand = function ({ esc, target = [6.5, 7] }) {
  /* [lowest correct answers, band] from the top down */
  const TABLES = {
    lis: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [1, 2], [0, 0]],
    ac: [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [1, 2], [0, 0]],
    gt: [[40, 9], [39, 8.5], [37, 8], [36, 7.5], [34, 7], [32, 6.5], [30, 6], [27, 5.5], [23, 5], [19, 4.5], [15, 4], [12, 3.5], [9, 3], [6, 2.5], [1, 2], [0, 0]]
  };
  const band = (t, n) => (TABLES[t].find(([min]) => n >= min) || [0, 0])[1];
  const half = x => Math.round(x * 2) / 2;   // Writing: to the nearest half band
  const overall = b => { const avg = b.reduce((a, x) => a + x, 0) / b.length, f = avg - Math.floor(avg); return Math.floor(avg) + (f < .25 ? 0 : f < .75 ? .5 : 1); };
  const KEY = 'ielts-band-calc-v2';
  const load = () => { try { return { mod: 'ac', ...(JSON.parse(localStorage.getItem(KEY)) || {}) }; } catch (e) { return { mod: 'ac' }; } };
  const keep = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* ignore */ } };
  const fmt = x => (x % 1 ? x.toFixed(1) : x + '.0');
  const has = x => x !== undefined && x !== null && x !== '';
  const C = { lis: '#0e8a8f', rea: '#2b67d1', wri: '#e2552f', spe: '#7a4fd0' };
  const counts = [...Array(41)].map((_, i) => 40 - i), halves = [...Array(19)].map((_, i) => (18 - i) / 2);

  function result(v) {
    const L = has(v.lis) ? band('lis', +v.lis) : null, R = has(v.rea) ? band(v.mod === 'gt' ? 'gt' : 'ac', +v.rea) : null;
    const W = has(v.w1) && has(v.w2) ? half((+v.w1 + 2 * +v.w2) / 3) : null, S = has(v.spe) ? +v.spe : null;
    const all = [L, R, W, S].every(x => x !== null);
    return { L, R, W, S, all, o: all ? overall([L, R, W, S]) : null };
  }
  const sel = (id, list, v, label, fmtOpt = x => x) => `<select id="bc-${id}" data-band="${id}" aria-label="${esc(label)}"><option value="">Choose…</option>${list.map(x => `<option value="${x}"${has(v) && Number(v) === x ? ' selected' : ''}>${fmtOpt(x)}</option>`).join('')}</select>`;
  function html() {
    const v = load();
    const row = (k, name, sub, field, out) => `<div class="bc-row" style="--c:${C[k]}"><div class="bc-lab"><b>${name}</b><small>${sub}</small></div>${field}<span class="bc-band"><small>Band</small><b data-band-of="${out}">–</b></span></div>`;
    return `<div class="bc-page"><header class="bc-head"><span class="eyebrow">IELTS · Tool</span><h1>Band score calculator</h1>
      <p>Choose your practice-test results. Each band appears as soon as you choose, and the overall band is rounded the way IELTS rounds it.</p></header>
      <div class="bc-grid"><section class="bc-card" aria-label="Your scores">
        ${row('lis', 'Listening', 'Correct answers out of 40', sel('lis', counts, v.lis, 'Listening: correct answers out of 40', x => `${x} / 40`), 'lis')}
        <div class="bc-row is-reading" style="--c:${C.rea}"><div class="bc-lab"><b>Reading</b><small>Correct answers out of 40</small>
          <span class="bc-mod" role="radiogroup" aria-label="Reading module"><button type="button" role="radio" data-bc-mod="ac" aria-checked="${v.mod !== 'gt'}">Academic</button><button type="button" role="radio" data-bc-mod="gt" aria-checked="${v.mod === 'gt'}">General Training</button></span></div>
          ${sel('rea', counts, v.rea, 'Reading: correct answers out of 40', x => `${x} / 40`)}<span class="bc-band"><small>Band</small><b data-band-of="rea">–</b></span></div>
        <div class="bc-row is-writing" style="--c:${C.wri}"><div class="bc-lab"><b>Writing</b><small>Task 2 counts twice as much as Task 1</small></div>
          <div class="bc-tasks"><label><span>Task 1 <i>⅓</i></span>${sel('w1', halves, v.w1, 'Writing Task 1 band', fmt)}</label><label><span>Task 2 <i>⅔</i></span>${sel('w2', halves, v.w2, 'Writing Task 2 band', fmt)}</label></div>
          <span class="bc-band"><small>Band</small><b data-band-of="wri">–</b></span></div>
        ${row('spe', 'Speaking', 'Your band (0–9)', sel('spe', halves, v.spe, 'Speaking band', fmt), 'spe')}
        <button type="button" class="btn-quiet bc-clear" data-band-clear>Clear</button></section>
      <section class="bc-card bc-out" data-band-out aria-live="polite"></section></div>
      <details class="bc-how"><summary>How the bands are worked out</summary>
        <p><b>Listening and Reading:</b> your number of correct answers out of 40 is converted to a band. Academic and General Training Reading use different tables: General Training needs more correct answers for the same band (for example, 30 correct is about 7.0 in Academic and 6.0 in General Training).</p>
        <p><b>Writing:</b> Task 2 counts twice as much as Task 1. The Writing band is (Task 1 + 2 × Task 2) ÷ 3, rounded to the nearest half band. For example, Task 1 = 6.0 and Task 2 = 7.0 gives 6.67, so 6.5.</p>
        <p><b>Overall:</b> the four bands are averaged. An average ending in .25 rounds up to the half band, and one ending in .75 rounds up to the next whole band: 6.25 → 6.5, 6.75 → 7.0, 6.1 → 6.0.</p>
        <p>These are the commonly published conversions. The official tables can change by a mark from one test to another, so treat the result as an estimate.</p></details></div>`;
  }
  function paintOut(root) {
    if (!root) return; const v = load(), r = result(v), out = root.querySelector('[data-band-out]');
    const put = (k, x) => { const el = root.querySelector(`[data-band-of="${k}"]`); if (el) el.textContent = x === null ? '–' : fmt(x); };
    put('lis', r.L); put('rea', r.R); put('wri', r.W); put('spe', r.S);
    root.querySelectorAll('[data-bc-mod]').forEach(b => b.setAttribute('aria-checked', String((v.mod === 'gt') === (b.dataset.bcMod === 'gt'))));
    const [lo, hi] = target;
    if (!out) return;
    out.innerHTML = r.all ? `<span class="bc-o-label">Overall band</span><b class="bc-o-num">${fmt(r.o)}</b>
      <span class="bc-o-note ${r.o >= lo ? 'is-ok' : ''}">${r.o >= hi ? `Above the course target (${fmt(lo)}–${fmt(hi)}). Excellent!` : r.o >= lo ? `Inside the course target (${fmt(lo)}–${fmt(hi)}). Keep it steady.` : `${fmt(lo - r.o)} below the course target of ${fmt(lo)}.`}</span>
      <span class="bc-o-bar" style="--p:${(r.o / 9).toFixed(3)};--t:${(lo / 9).toFixed(3)}"><i></i><em title="Target ${fmt(lo)}"></em></span>
      <ul class="bc-o-parts">${[['Listening', r.L, C.lis], ['Reading', r.R, C.rea], ['Writing', r.W, C.wri], ['Speaking', r.S, C.spe]].map(([n, x, c]) => `<li style="--c:${c}"><small>${n}</small><b>${fmt(x)}</b></li>`).join('')}</ul>`
      : `<span class="bc-o-label">Overall band</span><b class="bc-o-num is-empty">–</b><span class="bc-o-note">Choose a result for all four skills to see your overall band.</span>`;
  }
  const onPick = e => { const t = e.target.closest?.('[data-band]'); if (!t) return; const v = load(); v[t.dataset.band] = t.value; keep(v); paintOut(t.closest('.bc-page')); };
  document.addEventListener('input', onPick);
  document.addEventListener('change', onPick);   // Safari and phones report a menu choice as "change"
  document.addEventListener('click', e => {
    const m = e.target.closest?.('[data-bc-mod]'); if (m) { const v = load(); v.mod = m.dataset.bcMod; keep(v); paintOut(m.closest('.bc-page')); return; }
    if (!e.target.closest?.('[data-band-clear]')) return; const p = e.target.closest('.bc-page'), mod = load().mod; keep({ mod });
    p.querySelectorAll('[data-band]').forEach(x => { x.value = ''; }); paintOut(p); });
  return { html, mount: root => paintOut(root) };
};
