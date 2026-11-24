/* IELTS · a practice exercise on one page ("sheet").
   Students open an exercise and see everything on one page, in one column: each recording sits just above the
   questions it is for, the questions are laid out like the exam paper, and the answers (and the recording script,
   when there is one) are at the bottom, folded away until the student opens them. Nothing is marked: an answer can
   be written in several right ways, so students compare their answers with the key themselves.

   Reads the normal lesson file: the ieTest block (its audios and question blocks) in the first activity, and the
   toggles / text blocks of a 'script' activity. A recording is placed above the first question block its title's
   "Questions 6–10" covers. Answers typed into the page are saved in the lesson state under the same keys as the
   IELTS blocks (js/ielts.js), so nothing a student already wrote is lost.

   app.js calls IELTSSheet.page(lesson, ctx) for a lesson with `sheet: true`. */
(function () {
  const LET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', ROM = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii'];
  const GAP = /\[\[(.+?)\]\]/g;
  const gapsIn = t => [...String(t || '').matchAll(GAP)].map(m => m[1]);
  const isQ = b => /^ie(Gap|Table|Diagram|Choice|Multi|Match|TFNG)$/.test(b.type);
  const count = b => b.type === 'ieChoice' || b.type === 'ieMatch' || b.type === 'ieTFNG' ? (b.items || []).length : b.type === 'ieMulti' ? Number(b.numbers) || Number(b.pick) || (b.answers || []).length
    : b.type === 'ieTable' ? (b.rows || []).flat().flatMap(gapsIn).length : b.type === 'ieDiagram' ? (b.labels || []).length : gapsIn(b.text).length;
  const KINDS = { form: 'Form completion', notes: 'Note completion', sentences: 'Sentence completion', short: 'Short answers', summary: 'Summary completion', flow: 'Flow chart' };
  const kindOf = b => b.type === 'ieGap' ? KINDS[b.layout] || 'Completion' : b.type === 'ieTable' ? 'Table completion' : b.type === 'ieDiagram' ? (/\bmap\b/i.test(`${b.title || ''} ${b.alt || ''}`) ? 'Map labelling' : /\bplan\b|floor|layout/i.test(`${b.title || ''} ${b.alt || ''}`) ? 'Plan labelling' : 'Diagram labelling')
    : b.type === 'ieChoice' || b.type === 'ieMulti' ? 'Multiple choice' : b.type === 'ieMatch' ? 'Matching' : '';

  function page(L, ctx) {
    const { esc, icon } = ctx, val = k => ctx.val(k) ?? '';
    const fmt = t => esc(String(t ?? '')).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    const acts = (L.sections || []).flatMap(s => s.activities || []);
    const test = acts.flatMap(a => a.blocks || []).find(b => b.type === 'ieTest') || { blocks: acts.flatMap(a => a.blocks || []).filter(b => isQ(b) || b.type === 'figure'), audios: [] };
    const blocks = test.blocks || [], audios = (test.audios || (test.audio ? [test.audio] : [])).filter(a => a && a.src);
    const scriptAct = acts.find(a => a.id === 'script'), qs = blocks.filter(isQ);
    const total = qs.reduce((n, b) => n + count(b), 0), lastN = qs.reduce((m, b) => Math.max(m, (Number(b.from) || 1) + count(b) - 1), 0);

    /* ── the player: streams from Google Drive into the page's own player; Drive's player is the fallback ── */
    const drive = s => { const m = String(s).match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?.*id=)([\w-]{10,})/); return m && m[1]; };
    const player = (a, i) => { const id = drive(a.src), m = String(a.title || '').match(/Questions?\s+(\d+)(?:\s*[–-]\s*(\d+))?/i);
      const range = m ? (m[2] ? `Questions ${m[1]}–${m[2]}` : `Question ${m[1]}`) : audios.length > 1 ? `Recording ${i + 1}` : `Questions 1–${lastN}`;
      const extra = String(a.title || '').match(/\(([^)]+)\)/);
      const cfg = window.DEC15_CONFIG || {}, relay = id && cfg.supabaseUrl ? `${cfg.supabaseUrl.replace(/\/$/, '')}/functions/v1/ielts-audio?id=${id}` : '';
      const direct = id ? `https://drive.usercontent.google.com/download?id=${id}&export=download` : a.src;
      const I = (p, w = 2.2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
      const skip = (fwd, n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${fwd ? '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.8 3.8v3.6h-3.6"/>' : '<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.2 3.8v3.6h3.6"/>'}<text x="12" y="15.6" text-anchor="middle" font-size="7.6" font-weight="800" fill="currentColor" stroke="none" font-family="system-ui, sans-serif">${n}</text></svg>`;
      let seed = 0; for (const ch of String(id || a.src)) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;   // the same bars for the same recording
      const bars = [...Array(56)].map((_, j) => { seed = (seed * 1103515245 + 12345) >>> 0; const r = (seed >>> 8) / 16777216, env = .55 + .45 * Math.sin(j / 55 * Math.PI); return `<i style="height:${Math.round(22 + 70 * r * env)}%"></i>`; }).join('');
      return `<div class="xs-player xp" data-key="${esc(id || a.src)}" data-fallback="${esc(relay ? direct : '')}" data-title="${esc(`${audios.length > 1 ? `Recording ${i + 1}` : 'Recording'} · ${range}`)}">
        <audio preload="metadata" src="${esc(relay || direct)}" title="${esc(a.title || 'Recording')}"></audio>
        <div class="xp-head xp-top xs-play-top"><b>${audios.length > 1 ? `Recording ${i + 1}` : 'Recording'}</b><span>${esc(range)}${extra ? ` · ${esc(extra[1])}` : ''}</span><em class="xp-state" aria-live="polite"></em></div>
        <div class="xp-wave"><div class="xp-bars" aria-hidden="true">${bars}</div><div class="xp-bars is-on" aria-hidden="true">${bars}</div><input type="range" class="xp-seek" min="0" max="1000" step="1" value="0" aria-label="Position in the recording"></div>
        <div class="xp-times"><span class="xp-t">0:00</span><span class="xp-d">--:--</span></div>
        <div class="xp-ctrl">
          <button type="button" class="xp-skip" data-xp="-10" aria-label="Back 10 seconds">${skip(false, 10)}</button>
          <button type="button" class="xp-play" aria-label="Play the recording"><span class="xp-i-play">${I('<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/>')}</span><span class="xp-i-pause">${I('<path d="M8.5 5.5v13M15.5 5.5v13"/>', 3.4)}</span><span class="xp-i-again">${I('<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.2 3.8v3.6h3.6"/>', 2.6)}</span><span class="xp-spin" aria-hidden="true"></span></button>
          <button type="button" class="xp-skip" data-xp="+10" aria-label="Forward 10 seconds">${skip(true, 10)}</button>
          <span class="xp-extra"><button type="button" class="xp-speed" data-xp="speed" aria-label="Playback speed">1×</button>
            <span class="xp-vol"><button type="button" class="xp-mute" data-xp="mute" aria-label="Mute">${I('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path class="xp-wv" d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>', 2)}</button><input type="range" class="xp-volume" min="0" max="1" step="0.05" value="1" aria-label="Volume"></span></span>
        </div>
        <div class="xp-resume" hidden><span>You stopped at <b class="xp-rt">0:00</b></span><button type="button" data-xp="resume">Continue</button><button type="button" data-xp="restart">Start again</button></div>
        <p class="xp-msg" hidden>This recording could not play here. ${id ? `<a href="https://drive.google.com/file/d/${id}/view" target="_blank" rel="noopener">Open it in Google Drive</a>` : ''}</p></div>`; };

    /* ── one answer field: typed, or a letter ── */
    const field = (k, n, ans, letters) => { const v = val(k);
      return letters ? `<label class="xs-gap is-letter"><span class="xs-gn">${n}</span><select data-save="${esc(k)}" aria-label="Question ${n}"><option value=""></option>${letters.map(x => `<option${v === x ? ' selected' : ''}>${x}</option>`).join('')}</select></label>`
        : `<label class="xs-gap"><span class="xs-gn">${n}</span><input type="text" autocomplete="off" spellcheck="false" data-save="${esc(k)}" value="${esc(v)}" aria-label="Question ${n}" style="--w:${Math.max(7, Math.min(22, String(ans).split('|')[0].length + 3))}ch"></label>`; };
    const filler = (b, c) => t => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\[\[(.+?)\]\]/g, (_, a) => { const i = c.i++; return field(`${b.id}-${i}`, (Number(b.from) || 1) + i, a, b.bank ? b.bank.map((_, j) => LET[j]) : null); });
    const box = (title, opts, keys) => `<div class="xs-box">${title ? `<b class="xs-box-t">${esc(title)}</b>` : ''}<ul>${opts.map((o, j) => `<li><span class="xs-let">${keys[j]}</span><span>${fmt(String(o).replace(/^[A-Z]\s+(?=\S)/, ''))}</span></li>`).join('')}</ul></div>`;
    const range = b => { const f = Number(b.from) || 1, n = count(b); return n > 1 ? `Questions ${f}–${f + n - 1}` : `Question ${f}`; };
    const rubric = b => `<div class="xs-rubric"><span class="xs-range">${range(b)}</span>${b.instruction ? `<p>${fmt(b.instruction)}</p>` : ''}</div>`;

    const R = {
      ieGap(b) { const c = { i: 0 }, fill = filler(b, c), lines = String(b.text || '').split('\n').filter(l => l.trim()), Lt = b.layout || 'sentences';
        let body;
        if (Lt === 'form' || Lt === 'notes') body = `<div class="xs-paper is-${Lt}">${b.title ? `<h3 class="xs-paper-t">${esc(b.title)}</h3>` : ''}<div class="xs-rows">${lines.map(l => {
            if (l.startsWith('# ')) return `<h4 class="xs-sub">${esc(l.slice(2))}</h4>`;
            if (l.startsWith('- ')) return `<p class="xs-bul">${fill(l.slice(2))}</p>`;
            const m = l.match(/^([^:[\]]{1,60}):\s*(.*)$/);
            return m ? `<div class="xs-row"><span class="xs-k">${esc(m[1])}</span><span class="xs-v">${fill(m[2])}</span></div>` : `<p class="xs-line">${fill(l)}</p>`; }).join('')}</div></div>`;
        else if (Lt === 'summary') body = `<div class="xs-paper">${b.title ? `<h3 class="xs-paper-t">${esc(b.title)}</h3>` : ''}${String(b.text || '').split(/\n\s*\n/).map(p => `<p class="xs-line">${fill(p.replace(/\n/g, ' '))}</p>`).join('')}</div>`;
        else if (Lt === 'flow') body = `${b.title ? `<h3 class="xs-flow-t">${esc(b.title)}</h3>` : ''}<div class="xs-flow">${lines.map((l, i) => `<div class="xs-fbox">${fill(l)}</div>${i < lines.length - 1 ? '<span class="xs-farrow" aria-hidden="true"></span>' : ''}`).join('')}</div>`;
        else body = `<div class="xs-paper is-plain">${b.title ? `<h3 class="xs-paper-t">${esc(b.title)}</h3>` : ''}<ul class="xs-sent${Lt === 'short' ? ' is-short' : ''}">${lines.map(l => `<li>${fill(l)}</li>`).join('')}</ul></div>`;
        return `${rubric(b)}${b.bank && b.bankFirst ? box(b.bankTitle, b.bank, b.bank.map((_, j) => LET[j])) : ''}${body}${b.bank && !b.bankFirst ? box(b.bankTitle, b.bank, b.bank.map((_, j) => LET[j])) : ''}`; },
      ieTable(b) { const c = { i: 0 }, fill = filler(b, c), cols = b.columns || [];
        return `${rubric(b)}<div class="xs-paper is-table">${b.title ? `<h3 class="xs-paper-t">${esc(b.title)}</h3>` : ''}<div class="xs-tscroll" tabindex="0" role="region" aria-label="${esc(b.title || 'Table')}"><table class="xs-table">
          ${cols.some(h => String(h).trim()) ? `<thead><tr>${cols.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>` : ''}
          <tbody>${(b.rows || []).map(r => `<tr>${r.map((cell, i) => i === 0 ? `<th scope="row">${fill(cell)}</th>` : `<td>${fill(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>
          ${b.bank ? box(b.bankTitle, b.bank, b.bank.map((_, j) => LET[j])) : ''}`; },
      ieDiagram(b) { const labs = b.labels || [], f = Number(b.from) || 1, letters = b.bank ? b.bank.map((_, j) => LET[j]) : null;
        return `${rubric(b)}<div class="xs-paper is-diagram">${b.title ? `<h3 class="xs-paper-t">${esc(b.title)}</h3>` : ''}<div class="xs-diag${b.bank ? ' has-box' : ''}">
          <figure class="xs-pic"><img src="${esc(b.src)}" alt="${esc(b.alt || '')}" loading="lazy">${labs.map((l, i) => `<span class="xs-pin" style="left:${Number(l.x) || 0}%;top:${Number(l.y) || 0}%">${f + i}</span>`).join('')}</figure>
          <div class="xs-diag-side">${b.bank ? box(b.bankTitle || 'Choose from', b.bank, letters) : ''}<div class="xs-labels">${labs.map((l, i) => `<div class="xs-lab">${l.text ? `<span>${esc(l.text)}</span>` : ''}${field(`${b.id}-${i}`, f + i, l.answer, letters)}</div>`).join('')}</div></div></div></div>`; },
      ieChoice(b) { const f = Number(b.from) || 1;
        return `${rubric(b)}<ol class="xs-mcq">${(b.items || []).map((it, i) => { const k = `${b.id}-${i}`, v = val(k);
          return `<li class="xs-mq"><div class="xs-mq-q"><span class="xs-qn">${f + i}</span><p>${fmt(it.q)}</p></div><div class="xs-opts" role="radiogroup" aria-label="Question ${f + i}">${(it.options || []).map((o, j) =>
            `<label class="xs-opt"><input type="radio" name="${esc(k)}" value="${LET[j]}" data-save="${esc(k)}"${v === LET[j] ? ' checked' : ''}><span class="xs-let">${LET[j]}</span><span class="xs-ot">${fmt(o)}</span></label>`).join('')}</div></li>`; }).join('')}</ol>`; },
      ieMulti(b) { const pick = Number(b.pick) || (b.answers || []).length || 2;
        return `${rubric(b)}<div class="xs-mq is-multi" data-from="${Number(b.from) || 1}" data-n="${count(b)}"><div class="xs-mq-q"><span class="xs-qn is-wide">${range(b).replace('Questions ', '')}</span><p>${fmt(b.q)}<small>Choose ${['', 'ONE', 'TWO', 'THREE', 'FOUR'][pick] || pick} letters.${Number(b.numbers) === 1 ? ` You need ${pick === 2 ? 'both' : 'all of them'} for the mark.` : ''}</small></p></div>
          <div class="xs-opts">${(b.options || []).map((o, j) => { const k = `${b.id}-${LET[j]}`; return `<label class="xs-opt is-check"><input type="checkbox" data-save="${esc(k)}"${val(k) === true ? ' checked' : ''}><span class="xs-let">${LET[j]}</span><span class="xs-ot">${fmt(o)}</span></label>`; }).join('')}</div></div>`; },
      ieMatch(b) { const f = Number(b.from) || 1, keys = (b.options || []).map((_, j) => b.numbering === 'roman' ? ROM[j] : LET[j]);
        return `${rubric(b)}<div class="xs-match">${box(b.boxTitle, b.options || [], keys)}<ol class="xs-mlist">${(b.items || []).map((it, i) => `<li><span class="xs-mq-t">${fmt(it.q)}</span>${field(`${b.id}-${i}`, f + i, it.answer, keys)}</li>`).join('')}</ol></div>`; },
      figure(b) { return `<figure class="xs-figure"><img src="${esc(b.src)}" alt="${esc(b.alt || '')}" loading="lazy">${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}</figure>`; }
    };

    /* ── the recordings, each above the questions it is for ── */
    const startOf = a => { const m = String(a.title || '').match(/Questions?\s+(\d+)/i); return m ? Number(m[1]) : 1; };
    const queue = audios.map((a, i) => ({ a, i, at: startOf(a) })), parts = [];
    let cur = null;
    blocks.forEach(b => { const f = isQ(b) ? Number(b.from) || 1 : null, due = f == null ? [] : queue.filter(q => !q.done && q.at <= f + count(b) - 1);
      if (due.length && cur && !cur.audios.length && !cur.blocks.some(isQ)) { cur.audios = due; due.forEach(q => { q.done = true; }); }   // a picture before the first questions stays below that recording
      else if (due.length || !cur) { cur = { audios: due, blocks: [] }; parts.push(cur); due.forEach(q => { q.done = true; }); }
      cur.blocks.push(b); });
    queue.filter(q => !q.done).forEach(q => (parts[0] || (parts[0] = { audios: [], blocks: [] })).audios.push(q));   // a recording no question block claims goes at the top
    const partRange = p => { const q = p.blocks.filter(isQ); if (!q.length) return ''; const a = Number(q[0].from) || 1, z = Math.max(...q.map(b => (Number(b.from) || 1) + count(b) - 1)); return a === z ? `Question ${a}` : `Questions ${a}–${z}`; };
    const body = parts.map(p => `<section class="xs-part">${p.audios.length ? `<div class="xs-listen">${p.audios.map(q => player(q.a, q.i)).join('')}</div>` : ''}
      ${p.blocks.map((b, j) => `<div class="xs-q" data-hl="${esc(b.id || `fig-${j}-${String(b.src || '').split('/').pop()}`)}">${(R[b.type] || (() => ''))(b)}</div>`).join('')}</section>`).join('');

    /* ── the answer key ── */
    const alts = a => String(a).split('|').map(s => s.trim()).filter(Boolean);
    const key = [];
    qs.forEach(b => { const f = Number(b.from) || 1;
      if (b.type === 'ieGap' || b.type === 'ieTable' || b.type === 'ieDiagram') { const all = b.type === 'ieTable' ? (b.rows || []).flat().flatMap(gapsIn) : b.type === 'ieDiagram' ? (b.labels || []).map(l => l.answer) : gapsIn(b.text);
        all.forEach((a, i) => { if (b.bank) { const j = LET.indexOf(String(a).trim()); key.push({ n: f + i, main: a, also: [], note: b.bank[j] ? String(b.bank[j]).replace(/^[A-Z]\s+(?=\S)/, '') : '' }); }
          else { const [m, ...o] = alts(a); key.push({ n: f + i, main: m, also: o }); } }); }
      else if (b.type === 'ieChoice') (b.items || []).forEach((it, i) => { const j = LET.indexOf(String(it.answer).toUpperCase()); key.push({ n: f + i, main: it.answer, also: [], note: it.options?.[j] || '' }); });
      else if (b.type === 'ieMatch') (b.items || []).forEach((it, i) => { const keys = (b.options || []).map((_, j) => b.numbering === 'roman' ? ROM[j] : LET[j]), j = keys.indexOf(String(it.answer)); key.push({ n: f + i, main: it.answer, also: [], note: b.options?.[j] || '' }); });
      else if (b.type === 'ieMulti') { const n = count(b); key.push({ n: n > 1 ? `${f}–${f + n - 1}` : f, main: (b.answers || []).join(', '), also: [], note: `${(b.answers || []).map(x => b.options?.[LET.indexOf(x)]).filter(Boolean).join('; ')} · in either order`, wide: true }); } });
    key.sort((a, b) => parseInt(a.n) - parseInt(b.n));
    const keyHTML = `<ol class="xs-key">${key.map(k => `<li class="${k.wide ? 'is-wide' : ''}"><span class="xs-kn">${k.n}</span><span class="xs-ka"><b>${esc(k.main)}</b>${k.note ? `<small>${esc(k.note)}</small>` : ''}${k.also.length ? `<small class="xs-also">also accepted: ${k.also.map(esc).join(' · ')}</small>` : ''}</span></li>`).join('')}</ol>`;

    /* ── the recording script (when the key has one) ── */
    const scr = [];
    (scriptAct?.blocks || []).forEach(b => {
      if (b.type === 'toggle') { const chat = (b.blocks || []).find(x => x.type === 'chat'); scr.push({ title: String(b.title || 'Recording script').replace(/^Recording script\s*·\s*/, ''), html: chat ? `<div class="xs-script">${(chat.lines || []).map(([who, said]) => `<p><b>${esc(who)}</b><span>${fmt(said)}</span></p>`).join('')}</div>` : (b.blocks || []).filter(x => x.type === 'text').map(x => `<div class="xs-script">${x.text}</div>`).join('') }); }
      else if (b.type === 'text') scr.push({ title: 'Script and answer key', link: true, html: `<div class="xs-script is-link">${b.text}</div>` }); });
    const scriptHTML = scr.length ? scr.map(s => `<details class="xs-fold is-script"><summary><span class="xs-fold-ic">${icon('book')}</span><span class="xs-fold-tx"><b>Recording script</b><small>${esc(s.link ? 'In the teacher’s key on Google Drive' : s.title)}</small></span><i class="xs-chev" aria-hidden="true"></i></summary>${s.html}</details>`).join('') : '';

    const kinds = [...new Set(qs.map(kindOf).filter(Boolean))];
    /* ── before you play: three steps, and tips for the question types in this exercise ── */
    /* ── before you play: four short tips — three for every exercise, one for its main question type ── */
    const TIPS = {
      'Form completion': 'Names are often spelled out letter by letter.',
      'Note completion': 'Keep to the word limit in the instructions.',
      'Table completion': 'Read across the rows and down the columns.',
      'Sentence completion': 'Your answer must fit the sentence.',
      'Summary completion': 'Your answer must fit the sentence.',
      'Short answers': 'Write only the words that answer the question.',
      'Flow chart': 'Follow the steps in order, top to bottom.',
      'Multiple choice': 'All options may be mentioned. Pick the one that answers.',
      'Matching': 'Read the box first. A letter may be used more than once.',
      'Map labelling': 'Find where you start, then follow the directions.',
      'Plan labelling': 'Find where you start, then follow the directions.',
      'Diagram labelling': 'Follow the speaker from one part to the next.'
    };
    const ICON = {
      read: '<path d="M4 6.5C6.5 5 9 5 12 6.5 15 5 17.5 5 20 6.5V18c-2.5-1.5-5-1.5-8 0-3-1.5-5.5-1.5-8 0z"/><path d="M12 6.5V18"/>',
      listen: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13" width="4" height="7" rx="1.6"/><rect x="17" y="13" width="4" height="7" rx="1.6"/>',
      check: '<path d="M20 6 9 17l-5-5"/>',
      tip: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>'
    };
    const ic = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
    function prep() { const r = partRange(parts[0] || { blocks: [] }), main = kinds.find(k => TIPS[k]);
      const items = [['read', 'Read first', `Read ${r || 'the questions'} first. Select words to highlight them.`],
        ['listen', 'Listen once', 'Write your answers as you listen.'],
        ['check', 'Check', 'Spelling and word limit, then see the answers.']];
      if (main) items.push(['tip', main, TIPS[main]]);
      return `<section class="xs-prep" aria-label="Before you play"><span class="xs-prep-k">Before you play</span>
        <ul class="xs-tips4">${items.map(([k, t, d]) => `<li class="${k === 'tip' ? 'is-tip' : ''}"><span class="xs-t4-ic">${ic(k)}</span><span><b>${esc(t)}</b>${esc(d)}</span></li>`).join('')}</ul></section>`; }
    /* ── the page ── */
    const sec = (L.sections || [])[0] || {}, doneAll = acts.length && acts.every(a => ctx.done(a.id));
    const crumbs = (ctx.trail || []).map(t => `<a href="${esc(t.href)}">${esc(t.label)}</a><span aria-hidden="true">›</span>`).join('');
    return `<article class="xs" style="--xs-soft:${ctx.soft || '#e6f3f1'}${ctx.acc ? `;--xs-acc:${ctx.acc}` : ''}" data-total="${total}">
      <div class="xs-strip" aria-label="Your progress in this exercise"><b class="xs-strip-t">${esc(L.title)}</b><span class="xs-strip-bar" aria-hidden="true"><i></i></span><span class="xs-strip-n"><b>0</b> / ${total}</span><button type="button" class="xs-strip-go" data-xs-answers>Answers</button></div>
      <nav class="xs-trail" aria-label="Where you are">${ctx.back ? `<a class="xs-back" href="${esc(ctx.back.href)}">${icon('left')}<span>${esc(ctx.back.label)}</span></a>` : ''}<span class="xs-crumbs">${crumbs}<b>${esc(ctx.name || '')}</b></span></nav>
      <header class="xs-hero"><div class="xs-hero-tx"><span class="xs-eyebrow">${esc(ctx.eyebrow || 'Listening')}</span><h1>${esc(L.title)}</h1>${L.journey ? `<p>${esc(L.journey)}</p>` : ''}
        <ul class="xs-facts"><li><b>${total}</b> questions</li><li><b>${audios.length || 1}</b> recording${audios.length === 1 ? '' : 's'}</li>${kinds.map(k => `<li>${esc(k)}</li>`).join('')}</ul></div>
        ${window.IELTSSheetArt ? window.IELTSSheetArt(L.illus) : ''}</header>
      ${prep()}
      ${body}
      <section class="xs-end" aria-label="Answers">
        <details class="xs-fold is-key"${ctx.open ? ' open' : ''}><summary><span class="xs-fold-ic">${icon('check')}</span><span class="xs-fold-tx"><b>Check your answers</b><small>Open the answer key when you have finished</small></span><i class="xs-chev" aria-hidden="true"></i></summary>
          <p class="xs-key-note">Compare each answer with yours. Spelling counts; capital letters do not. Where more than one answer is right, the others are shown underneath.</p>${keyHTML}</details>
        ${scriptHTML}
        <footer class="xs-foot"><label class="xs-done"><input type="checkbox" data-sheet-done${doneAll ? ' checked' : ''}><span>I have finished this exercise</span></label>
          <span class="xs-nav">${ctx.back ? `<a class="btn-quiet" href="${esc(ctx.back.href)}">${icon('left')}All exercises</a>` : ''}${ctx.next ? `<a class="btn" href="${esc(ctx.next.href)}">${esc(ctx.next.label)} ${icon('arrow')}</a>` : ''}</span></footer>
      </section></article>`;
  }
  window.IELTSSheet = { page };
})();
