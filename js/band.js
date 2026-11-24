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
  let mod = null;   // Reading module in memory (storage can be blocked)
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
    const v = load(); mod = mod || v.mod;
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
        <div class="bc-actions"><button type="button" class="btn-quiet bc-clear" data-band-clear>Clear</button></div></section>
      <section class="bc-card bc-out" data-band-out aria-live="polite"></section></div>
      <details class="bc-how"><summary><span class="bh-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.6"/><circle cx="12" cy="16.9" r=".6" fill="currentColor" stroke="none"/></svg></span>
        <span class="bh-tx"><b>How the bands are worked out</b><small>Listening and Reading tables, the Writing weighting and the IELTS rounding rule</small></span><span class="bh-chev" aria-hidden="true"></span></summary>
        <div class="bh-body">
          <section class="bh-card" style="--c:#2b67d1"><header><span class="bh-k">1</span><h4>Listening and Reading</h4></header>
            <p>Your number of correct answers out of 40 becomes a band. Academic and General Training Reading use different tables: General Training needs more correct answers for the same band.</p>
            <div class="bh-eg"><span class="bh-chip"><small>Academic</small><b>30 / 40</b><i>→</i><b>7.0</b></span><span class="bh-chip"><small>General Training</small><b>30 / 40</b><i>→</i><b>6.0</b></span></div></section>
          <section class="bh-card" style="--c:#e2552f"><header><span class="bh-k">2</span><h4>Writing</h4></header>
            <p>Task 2 counts twice as much as Task 1. The result is rounded to the nearest half band.</p>
            <div class="bh-formula"><span>Writing</span><i>=</i><span class="bh-frac"><span>Task 1 + 2 × Task 2</span><span>3</span></span></div>
            <div class="bh-eg"><span class="bh-chip"><small>Example</small><b>6.0</b><i>+</i><b>2 × 7.0</b><i>→</i><b>6.67</b><i>→</i><b>6.5</b></span></div></section>
          <section class="bh-card" style="--c:#7a4fd0"><header><span class="bh-k">3</span><h4>Overall band</h4></header>
            <p>The four bands are averaged. An average ending in .25 rounds up to the half band, and one ending in .75 rounds up to the next whole band.</p>
            <div class="bh-eg">${[['6.25', '6.5'], ['6.75', '7.0'], ['6.1', '6.0']].map(([a, b]) => `<span class="bh-chip"><b>${a}</b><i>→</i><b>${b}</b></span>`).join('')}</div></section>
          <aside class="bh-note"><b>An estimate.</b> These are the commonly published conversion tables. The official tables can change by a mark from one test to another.</aside>
        </div></details></div>`;
  }
  /* the results come from the menus on the page (not from storage, which Safari's private browsing blocks) */
  function readPage(root) { const v = { mod: mod || load().mod }; root.querySelectorAll('[data-band]').forEach(x => { v[x.dataset.band] = x.value; }); return v; }
  function paintOut(root) {
    if (!root) return; const v = readPage(root), r = result(v), out = root.querySelector('[data-band-out]');
    const put = (k, x) => { const el = root.querySelector(`[data-band-of="${k}"]`); if (el) el.textContent = x === null ? '–' : fmt(x); };
    put('lis', r.L); put('rea', r.R); put('wri', r.W); put('spe', r.S);
    root.querySelectorAll('[data-bc-mod]').forEach(b => b.setAttribute('aria-checked', String((v.mod === 'gt') === (b.dataset.bcMod === 'gt'))));
    const [lo, hi] = target;
    if (!out) return;
    out.innerHTML = r.all ? `<span class="bc-o-label">Overall band</span><b class="bc-o-num">${fmt(r.o)}</b>
      <span class="bc-o-note ${r.o >= lo ? 'is-ok' : ''}">${r.o >= hi ? `Above the course target (${fmt(lo)}–${fmt(hi)}). Excellent!` : r.o >= lo ? `Inside the course target (${fmt(lo)}–${fmt(hi)}). Keep it steady.` : `${fmt(lo - r.o)} below the course target of ${fmt(lo)}.`}</span>
      <span class="bc-o-bar" style="--p:${(r.o / 9).toFixed(3)};--t:${(lo / 9).toFixed(3)}"><i></i><em title="Target ${fmt(lo)}"></em></span>
      <ul class="bc-o-parts">${[['Listening', r.L, C.lis], ['Reading', r.R, C.rea], ['Writing', r.W, C.wri], ['Speaking', r.S, C.spe]].map(([n, x, c]) => `<li style="--c:${c}"><small>${n}</small><b>${fmt(x)}</b></li>`).join('')}</ul>`
      : (() => { const got = [['Listening', r.L, C.lis], ['Reading', r.R, C.rea], ['Writing', r.W, C.wri], ['Speaking', r.S, C.spe]], have = got.filter(g => g[1] !== null), miss = got.filter(g => g[1] === null).map(g => g[0]);
          if (!have.length) return `<span class="bc-o-label">Your bands</span><b class="bc-o-num is-empty">–</b><span class="bc-o-note">Choose a result for any skill to see its band. Choose all four to see your overall band.</span>`;
          return `<span class="bc-o-label">${have.length === 1 ? `Your ${have[0][0]} band` : 'Your bands so far'}</span>${have.length === 1 ? `<b class="bc-o-num" style="color:${have[0][2]}">${fmt(have[0][1])}</b>` : ''}
            <ul class="bc-o-parts">${got.map(([n, x, c]) => `<li style="--c:${c}"${x === null ? ' class="is-empty"' : ''}><small>${n}</small><b>${x === null ? '–' : fmt(x)}</b></li>`).join('')}</ul>
            <span class="bc-o-note">For the overall band, also choose ${miss.join(miss.length === 2 ? ' and ' : ', ').replace(/, ([^,]*)$/, ' and $1')}.</span>`; })();
  }
  const onPick = e => { const t = e.target.closest?.('[data-band]'); if (!t) return; const root = t.closest('.bc-page'); keep(readPage(root)); paintOut(root); };
  document.addEventListener('input', onPick);
  document.addEventListener('change', onPick);   // Safari and phones report a menu choice as "change"
  document.addEventListener('click', e => {
    const m = e.target.closest?.('[data-bc-mod]'); if (m) { mod = m.dataset.bcMod; const root = m.closest('.bc-page'); keep(readPage(root)); paintOut(root); return; }
    const go = e.target.closest?.('[data-band-go]'); if (go) { const root = go.closest('.bc-page'); paintOut(root); const out = root.querySelector('[data-band-out]'); out?.classList.remove('is-flash'); void out?.offsetWidth; out?.classList.add('is-flash'); out?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); return; }
    if (!e.target.closest?.('[data-band-clear]')) return; const p = e.target.closest('.bc-page'); keep({ mod: mod || load().mod });
    p.querySelectorAll('[data-band]').forEach(x => { x.value = ''; }); paintOut(p); });
  return { html, mount: root => paintOut(root) };
};
