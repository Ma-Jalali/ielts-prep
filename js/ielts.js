/* IELTS · question types and test screens — the blocks a teacher adds in Studio (Add block → IELTS …).
   app.js calls createIELTSKit(ctx) and adds these block types to the lesson renderer. Every answer is saved in the
   normal lesson state (state.values / state.checked), so it syncs online and appears in My notebook.

   Every question block has: id, from (its first question number, e.g. 14), instruction (the rubric), and optional
   rule (the word limit, e.g. 'NO MORE THAN TWO WORDS AND/OR A NUMBER') with max (the number of words, e.g. 2).
   Answers are checked without caring about capitals or extra spaces; several right answers are separated by | .

   ieChoice   multiple choice, one answer:  items: [{ q, options: ['…', '…', '…'], answer: 'B' }]   (3 options in Listening, 4 in Reading)
   ieMulti    choose TWO / THREE letters:   q, options: [...], answers: ['A', 'D'], pick: 2
   ieMatch    a box of options matched to questions (features, people, paragraphs, sentence endings, headings,
              classification, map letters):  boxTitle, numbering: 'letters' | 'roman', options: ['…'], reuse: true|false,
              items: [{ q, answer: 'C' }]   (answer is the letter, or the roman numeral for headings)
   ieTFNG     TRUE / FALSE / NOT GIVEN or YES / NO / NOT GIVEN:  kind: 'tfng' | 'ynng', items: [{ q, answer: 'TRUE' }]
   ieGap      completion, typed or from a box:  layout: 'sentences' | 'summary' | 'notes' | 'form' | 'flow' | 'short',
              title, text: lines with gaps written [[answer]] or [[answer|other answer]], bank?: ['A …', 'B …'] (then the
              gaps take a letter, as in "summary completion with a box"). notes: a line starting '# ' is a heading,
              '- ' a bullet. form: 'Label: [[…]]'. flow: one box per line. short: one question per line.
   ieTable    table completion:  title, columns: ['…'], rows: [['cell', 'text with [[answer]]'], …]
   ieDiagram  diagram / map / plan labelling:  src (picture), alt, labels: [{ x, y, answer }] (x, y in % of the picture),
              bank?: ['A …'] (then each label takes a letter)
   ieTest     the computer-delivered test screen: the passage (or a recording) on the left, the questions on the right,
              each scrolling on its own:  title, minutes?, passage: { title, text } (paragraphs split by a blank line;
              a paragraph starting 'A ' … shows its letter), audio?: { src }, blocks: [question blocks]
   ieAudio    a recording from anywhere (mp3/m4a link, Google Drive, Dropbox, OneDrive, SoundCloud, YouTube, Vimeo):
              title, src, once?: true (exam mode: plays once, no pausing or seeking), transcript?
   ieVideo    a video (YouTube, Vimeo, Google Drive, mp4 link):  title, src, caption?
   ieWriting  a Writing task:  task: 1 | 2, prompt, src? (the Task 1 picture), alt?, minutes: 20 | 40, minWords: 150 | 250
              — the task card, the answer box with a live word count and an optional timer
   ieSpeaking a Speaking part:  part: 1 | 2 | 3, topic, questions: ['…'] (Parts 1, 3) or say: ['…'], explain: '…' (Part 2),
              prepare: 60, talk: 120 — the cue card, timers and a voice recorder (recordings stay on the device) */
window.createIELTSKit = function ({ getState, save, rerender, esc, strip, icon, toast, findBlock, confetti, inner }) {
  const st = () => getState();
  const val = k => st().values[k] ?? '';
  const set = (k, v) => { st().values[k] = v; save(); };
  const B = {};
  const LET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const ROM = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv'];
  const norm = s => String(s ?? '').toLowerCase().replace(/[’']/g, "'").replace(/[.,;:!?]+$/g, '').replace(/\s+/g, ' ').trim();
  const words = s => String(s || '').trim().split(/\s+/).filter(Boolean);
  const alts = a => String(a ?? '').split('|').map(norm).filter(Boolean);
  const ok = (ans, given, max) => { const g = norm(given); if (!g) return false; if (max && words(given).length > max) return false; return alts(ans).includes(g); };
  const from = b => Number(b.from) || 1;
  const range = (b, n) => n > 1 ? `Questions ${from(b)}–${from(b) + n - 1}` : `Question ${from(b)}`;
  const checked = b => !!st().checked[b.id];
  const teacher = () => !!st().teacher;
  const fmt = t => esc(String(t ?? '')).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');   // **bold** in instructions

  /* ───────── shared pieces: the header, the score line, the buttons ───────── */
  const head = (b, n, extra = '') => `<header class="iq-head"><span class="iq-range">${range(b, n)}</span>
    ${b.instruction ? `<p class="iq-inst">${fmt(b.instruction)}</p>` : ''}${b.rule && !norm(b.instruction).includes(norm(b.rule)) ? `<p class="iq-rule">Write <b>${esc(b.rule)}</b> for each answer.</p>` : ''}${extra}</header>`;
  const foot = (b, right, total, kind = 'ie') => `<footer class="iq-foot">${checked(b) ? `<span class="iq-score${right === total ? ' is-full' : ''}"><b>${right}</b> / ${total} correct</span>
      <button type="button" class="btn-quiet" data-ie-reset="${esc(b.id)}">Try again</button>` : `<button type="button" class="btn" data-ie-check="${esc(b.id)}">${icon('check')}Check answers</button>`}</footer>`;
  const num = (n, state = '') => `<span class="iq-n${state}">${n}</span>`;
  const verdict = (b, good, answer) => !checked(b) ? '' : good ? `<span class="iq-v is-ok" aria-label="Correct">${icon('check')}</span>` : `<span class="iq-v is-no"><i aria-hidden="true">✕</i><small>Answer: <b>${esc(String(answer).split('|')[0])}</b></small></span>`;

  /* ───────── ieChoice: multiple choice, one answer ───────── */
  B.ieChoice = b => { const items = b.items || [], n = items.length; let right = 0;
    const body = items.map((it, i) => { const k = `${b.id}-${i}`, v = val(k), good = v && v === String(it.answer).trim().toUpperCase(); if (good) right++;
      return `<li class="iq-item${checked(b) ? (good ? ' is-ok' : ' is-no') : ''}">${num(from(b) + i)}<div class="iq-body"><p class="iq-q">${fmt(it.q)}</p>
        <div class="iq-opts" role="radiogroup" aria-label="Question ${from(b) + i}">${(it.options || []).map((o, j) => { const L = LET[j], on = v === L, isAns = checked(b) && L === String(it.answer).trim().toUpperCase();
          return `<button type="button" role="radio" aria-checked="${on}" class="iq-opt${on ? ' on' : ''}${isAns ? ' is-ans' : ''}" data-ie-pick="${esc(b.id)}" data-i="${i}" data-v="${L}"><span class="iq-let">${L}</span><span>${fmt(o)}</span></button>`; }).join('')}</div>
        ${checked(b) && it.why ? `<p class="iq-why">${fmt(it.why)}</p>` : ''}</div>${verdict(b, good, it.answer)}</li>`; }).join('');
    return `<section class="block iq" id="iq-${esc(b.id)}">${head(b, n)}<ol class="iq-list">${body}</ol>${foot(b, right, n)}</section>`; };

  /* ───────── ieMulti: choose TWO (THREE …) letters ───────── */
  B.ieMulti = b => { const pick = Number(b.pick) || (b.answers || []).length || 2, k = b.id, on = String(val(k)).split(',').filter(Boolean), ans = (b.answers || []).map(x => String(x).trim().toUpperCase());
    const right = on.filter(x => ans.includes(x)).length;
    return `<section class="block iq" id="iq-${esc(b.id)}">${head(b, pick)}<div class="iq-multi">${b.q ? `<p class="iq-q">${fmt(b.q)}</p>` : ''}
      <p class="iq-pickn">Choose <b>${['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'][pick] || pick}</b> · <span>${on.length} of ${pick} chosen</span></p>
      <div class="iq-opts is-multi">${(b.options || []).map((o, j) => { const L = LET[j], sel = on.includes(L), isAns = checked(b) && ans.includes(L);
        return `<button type="button" role="checkbox" aria-checked="${sel}" class="iq-opt${sel ? ' on' : ''}${isAns ? ' is-ans' : ''}${checked(b) && sel && !isAns ? ' is-wrong' : ''}" data-ie-multi="${esc(b.id)}" data-v="${L}" data-max="${pick}"><span class="iq-let">${L}</span><span>${fmt(o)}</span></button>`; }).join('')}</div></div>
      ${foot(b, right, pick)}</section>`; };

  /* ───────── ieMatch: a box of options, one per question (letters or roman numerals) ───────── */
  const keys = b => (b.options || []).map((_, j) => b.numbering === 'roman' ? ROM[j] : LET[j]);
  B.ieMatch = b => { const items = b.items || [], n = items.length, K = keys(b); let right = 0;
    const box = `<div class="iq-box"><b class="iq-box-t">${esc(b.boxTitle || (b.numbering === 'roman' ? 'List of Headings' : 'Options'))}</b><ul>${(b.options || []).map((o, j) => `<li><span class="iq-let${b.numbering === 'roman' ? ' is-rom' : ''}">${K[j]}</span>${fmt(o)}</li>`).join('')}</ul>${b.reuse ? '<p class="iq-nb"><b>NB</b> You may use any letter more than once.</p>' : ''}</div>`;
    const rows = items.map((it, i) => { const k = `${b.id}-${i}`, v = val(k), good = v && norm(v) === norm(it.answer); if (good) right++;
      return `<li class="iq-item${checked(b) ? (good ? ' is-ok' : ' is-no') : ''}">${num(from(b) + i)}<p class="iq-q">${fmt(it.q)}</p>
        <select class="iq-sel" data-save="${esc(k)}" data-ie-input="${esc(b.id)}" aria-label="Question ${from(b) + i}"><option value="">—</option>${K.map(x => `<option${v === x ? ' selected' : ''}>${x}</option>`).join('')}</select>${verdict(b, good, it.answer)}</li>`; }).join('');
    return `<section class="block iq" id="iq-${esc(b.id)}">${head(b, n)}<div class="iq-match">${b.boxFirst === false ? '' : box}<ol class="iq-list is-rows">${rows}</ol>${b.boxFirst === false ? box : ''}</div>${foot(b, right, n)}</section>`; };

  /* ───────── ieTFNG ───────── */
  B.ieTFNG = b => { const items = b.items || [], n = items.length, O = b.kind === 'ynng' ? ['YES', 'NO', 'NOT GIVEN'] : ['TRUE', 'FALSE', 'NOT GIVEN']; let right = 0;
    const key = b.kind === 'ynng' ? [['YES', 'if the statement agrees with the claims of the writer'], ['NO', 'if the statement contradicts the claims of the writer'], ['NOT GIVEN', 'if it is impossible to say what the writer thinks about this']]
      : [['TRUE', 'if the statement agrees with the information'], ['FALSE', 'if the statement contradicts the information'], ['NOT GIVEN', 'if there is no information on this']];
    const rows = items.map((it, i) => { const k = `${b.id}-${i}`, v = val(k), good = v && v === String(it.answer).trim().toUpperCase(); if (good) right++;
      return `<li class="iq-item${checked(b) ? (good ? ' is-ok' : ' is-no') : ''}">${num(from(b) + i)}<div class="iq-body"><p class="iq-q">${fmt(it.q)}</p>
        <div class="iq-seg" role="radiogroup" aria-label="Question ${from(b) + i}">${O.map(o => `<button type="button" role="radio" aria-checked="${v === o}" class="${v === o ? 'on' : ''}${checked(b) && o === String(it.answer).trim().toUpperCase() ? ' is-ans' : ''}" data-ie-pick="${esc(b.id)}" data-i="${i}" data-v="${o}">${o}</button>`).join('')}</div></div>${verdict(b, good, it.answer)}</li>`; }).join('');
    return `<section class="block iq" id="iq-${esc(b.id)}">${head(b, n, `<dl class="iq-key">${key.map(([k, t]) => `<dt>${k}</dt><dd>${t}</dd>`).join('')}</dl>`)}<ol class="iq-list">${rows}</ol>${foot(b, right, n)}</section>`; };

  /* ───────── gaps: [[answer|other]] inside text, numbered in order ───────── */
  const GAP = /\[\[(.+?)\]\]/g;
  const gapsIn = t => [...String(t || '').matchAll(GAP)].map(m => m[1]);
  function gapHTML(b, idx, ans) { const k = `${b.id}-${idx}`, v = val(k), n = from(b) + idx, good = b.bank ? v && norm(v) === norm(ans) : ok(ans, v, Number(b.max) || 0);
    const cls = checked(b) ? (good ? ' is-ok' : ' is-no') : '';
    const field = b.bank ? `<select class="iq-gap-sel" data-save="${esc(k)}" data-ie-input="${esc(b.id)}" aria-label="Question ${n}"><option value="">${n}</option>${b.bank.map((_, j) => `<option${v === LET[j] ? ' selected' : ''}>${LET[j]}</option>`).join('')}</select>`
      : `<input class="iq-gap-in" type="text" autocomplete="off" spellcheck="false" data-save="${esc(k)}" data-ie-input="${esc(b.id)}" data-max="${Number(b.max) || 0}" placeholder="${n}" value="${esc(v)}" aria-label="Question ${n}" size="${Math.max(8, Math.min(24, String(ans).split('|')[0].length + 4))}">`;
    return `<span class="iq-gap${cls}"><span class="iq-gn" aria-hidden="true">${n}</span>${field}${checked(b) && !good ? `<small class="iq-fix">${esc(String(ans).split('|')[0])}</small>` : ''}</span>`; }
  const fillGaps = (b, text, counter) => esc(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\[\[(.+?)\]\]/g, (_, a) => gapHTML(b, counter.i++, a.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"')));
  const scoreGaps = (b, all) => all.filter((a, i) => { const v = val(`${b.id}-${i}`); return b.bank ? v && norm(v) === norm(a) : ok(a, v, Number(b.max) || 0); }).length;
  const bankBox = b => b.bank ? `<div class="iq-box is-bank">${b.bankTitle ? `<b class="iq-box-t">${esc(b.bankTitle)}</b>` : ''}<ul class="is-cols">${b.bank.map((w, j) => `<li><span class="iq-let">${LET[j]}</span>${fmt(String(w).replace(/^[A-Z]\s+/, ''))}</li>`).join('')}</ul></div>` : '';

  B.ieGap = b => { const lines = String(b.text || '').split('\n'), all = gapsIn(b.text), n = all.length, c = { i: 0 }, L = b.layout || 'sentences';
    let body = '';
    if (L === 'summary') body = `<div class="iq-sum">${b.title ? `<h4>${esc(b.title)}</h4>` : ''}${String(b.text || '').split(/\n\s*\n/).map(p => `<p>${fillGaps(b, p.replace(/\n/g, ' '), c)}</p>`).join('')}</div>`;
    else if (L === 'notes') body = `<div class="iq-notes">${b.title ? `<h4>${esc(b.title)}</h4>` : ''}${lines.filter(l => l.trim()).map(l => l.startsWith('# ') ? `<h5>${esc(l.slice(2))}</h5>` : l.startsWith('- ') ? `<p class="is-bul">${fillGaps(b, l.slice(2), c)}</p>` : `<p>${fillGaps(b, l, c)}</p>`).join('')}</div>`;
    else if (L === 'form') body = `<div class="iq-form">${b.title ? `<h4>${esc(b.title)}</h4>` : ''}<dl>${lines.filter(l => l.trim()).map(l => { if (l.startsWith('# ')) return `<dt class="iq-fh">${esc(l.slice(2))}</dt>`; const m = l.match(/^([^:]+):\s*(.*)$/); return m ? `<dt>${esc(m[1])}</dt><dd>${fillGaps(b, m[2], c)}</dd>` : `<dt></dt><dd>${fillGaps(b, l, c)}</dd>`; }).join('')}</dl></div>`;
    else if (L === 'flow') body = `<div class="iq-flow">${b.title ? `<h4>${esc(b.title)}</h4>` : ''}${lines.filter(l => l.trim()).map((l, i, A) => `<div class="iq-fbox">${fillGaps(b, l, c)}</div>${i < A.length - 1 ? '<span class="iq-farrow" aria-hidden="true"></span>' : ''}`).join('')}</div>`;
    else body = `<ol class="iq-lines">${b.title ? `<h4>${esc(b.title)}</h4>` : ''}${lines.filter(l => l.trim()).map(l => `<li>${fillGaps(b, l, c)}</li>`).join('')}</ol>`;
    return `<section class="block iq is-gap" id="iq-${esc(b.id)}">${head(b, n)}${b.bankFirst ? bankBox(b) : ''}${body}${b.bankFirst ? '' : bankBox(b)}${foot(b, scoreGaps(b, all), n)}</section>`; };

  /* ───────── ieTable ───────── */
  B.ieTable = b => { const all = (b.rows || []).flat().flatMap(gapsIn), c = { i: 0 };
    return `<section class="block iq is-gap" id="iq-${esc(b.id)}">${head(b, all.length)}${b.title ? `<h4 class="iq-ttl">${esc(b.title)}</h4>` : ''}
      <div class="table-scroll" tabindex="0" role="region" aria-label="${esc(b.title || 'Table')}"><table class="iq-table"><thead><tr>${(b.columns || []).map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${(b.rows || []).map(r => `<tr>${r.map((cell, ci) => ci === 0 ? `<th scope="row">${fillGaps(b, cell, c)}</th>` : `<td>${fillGaps(b, cell, c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
      ${bankBox(b)}${foot(b, scoreGaps(b, all), all.length)}</section>`; };

  /* ───────── ieDiagram: a picture with numbered labels ───────── */
  B.ieDiagram = b => { const labs = b.labels || [], all = labs.map(l => l.answer), c = { i: 0 };
    return `<section class="block iq is-gap" id="iq-${esc(b.id)}">${head(b, labs.length)}${b.title ? `<h4 class="iq-ttl">${esc(b.title)}</h4>` : ''}
      <div class="iq-diagram${b.bank ? ' has-bank' : ''}"><figure class="iq-pic">${b.src ? `<img src="${esc(b.src)}" alt="${esc(b.alt || '')}" loading="lazy">` : '<div class="iq-pic-empty">Add a picture (src)</div>'}
        ${labs.map((l, i) => `<span class="iq-pin" style="left:${Number(l.x) || 0}%;top:${Number(l.y) || 0}%">${from(b) + i}</span>`).join('')}</figure>
        <ol class="iq-lines is-labels">${labs.map(l => `<li>${l.text ? `<span>${esc(l.text)}</span> ` : ''}${gapHTML(b, c.i++, l.answer)}</li>`).join('')}</ol></div>
      ${bankBox(b)}${foot(b, scoreGaps(b, all), labs.length)}</section>`; };

  /* ───────── media: a recording or a video from anywhere ───────── */
  function mediaOf(src) {
    const s = String(src || '').trim(); let m;
    if ((m = s.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/))) return { kind: 'frame', url: `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0`, ratio: '16/9' };
    if ((m = s.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return { kind: 'frame', url: `https://player.vimeo.com/video/${m[1]}`, ratio: '16/9' };
    if ((m = s.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?.*id=)([\w-]{10,})/))) return { kind: 'drive', url: `https://drive.google.com/file/d/${m[1]}/preview`, direct: `https://drive.google.com/uc?export=download&id=${m[1]}`, view: `https://drive.google.com/file/d/${m[1]}/view` };
    if (/soundcloud\.com\//.test(s)) return { kind: 'frame', url: `https://w.soundcloud.com/player/?url=${encodeURIComponent(s)}&color=%23d6283c&visual=false`, ratio: 'auto', h: 166 };
    if (/dropbox\.com\//.test(s)) return { kind: 'file', url: s.replace(/[?&]dl=0/, '').replace('www.dropbox.com', 'dl.dropboxusercontent.com') };
    if (/1drv\.ms|onedrive\.live\.com/.test(s)) return { kind: 'frame', url: s.replace('redir?', 'embed?'), ratio: 'auto', h: 120 };
    return s ? { kind: 'file', url: s } : null;
  }
  const isVideoFile = u => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(u);
  B.ieAudio = b => { const m = mediaOf(b.src);
    let player = '<p class="iq-media-empty">Paste a link to the recording in <b>src</b>: an mp3 file, Google Drive, Dropbox, OneDrive, SoundCloud or YouTube.</p>';
    if (m?.kind === 'file' || (m?.kind === 'drive' && b.once)) player = b.once
      ? `<div class="iq-once" data-ie-once="${esc(b.id)}"><audio preload="metadata" src="${esc(m.direct || m.url)}"></audio><button type="button" class="iq-play" data-ie-play="${esc(b.id)}" aria-label="Play the recording">${icon('play')}</button><div class="iq-once-tx"><b>Play the recording</b><small>Exam mode: it plays once, as in the test. You cannot pause or go back.</small><span class="iq-once-bar"><i></i></span></div></div>`
      : `<audio class="iq-audio" controls preload="metadata" src="${esc(m.direct || m.url)}"></audio>`;
    /* Google Drive: the recording streams from Drive into the page's own player (nothing is stored on the site); if Drive
       refuses to stream it, the player swaps itself for Drive's own player (see the 'error' listener below) */
    else if (m?.kind === 'drive') player = `<audio class="iq-audio" controls preload="none" src="${esc(m.direct)}" data-ie-drive="${esc(m.url)}" title="${esc(b.title || 'Recording')}"></audio>`;
    if (m?.kind === 'drive') player += `<a class="iq-drive-link" href="${esc(m.view)}" target="_blank" rel="noopener">${icon('open')}Open in Google Drive</a>`;
    else if (m?.kind === 'frame') player = `<iframe class="iq-frame" style="${m.h ? `height:${m.h}px` : `aspect-ratio:${m.ratio}`}" src="${esc(m.url)}" title="${esc(b.title || 'Recording')}" allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe>`;
    return `<section class="block iq-media is-audio"><header><span class="iq-media-ic">${icon('play')}</span><div><h3>${esc(b.title || 'Recording')}</h3>${b.note ? `<p>${fmt(b.note)}</p>` : ''}</div></header>${player}
      ${b.transcript ? `<details class="iq-trans"><summary>Transcript</summary><div>${String(b.transcript).split(/\n\s*\n/).map(p => `<p>${fmt(p)}</p>`).join('')}</div></details>` : ''}</section>`; };
  B.ieVideo = b => { const m = mediaOf(b.src);
    const player = !m ? '<p class="iq-media-empty">Paste a link to the video in <b>src</b>: YouTube, Vimeo, Google Drive or an mp4 file.</p>'
      : m.kind === 'file' && isVideoFile(m.url) ? `<video class="iq-video" controls preload="metadata" playsinline src="${esc(m.url)}"></video>`
      : `<iframe class="iq-frame" style="aspect-ratio:16/9" src="${esc(m.url)}" title="${esc(b.title || 'Video')}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
    return `<section class="block iq-media is-video"><header><span class="iq-media-ic">${icon('play')}</span><div><h3>${esc(b.title || 'Video')}</h3>${b.caption ? `<p>${fmt(b.caption)}</p>` : ''}</div></header>${player}</section>`; };

  /* ───────── ieTest: the computer-delivered test screen (passage left, questions right) ───────── */
  const paras = t => String(t || '').split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  B.ieTest = (b, a) => { const p = b.passage || {}, au = b.audio, aus = (b.audios || []).filter(x => x && x.src);   // audios: several recordings (e.g. the two halves of a Part)
    const left = aus.length ? aus.map((x, i) => B.ieAudio({ ...x, title: x.title || `Recording ${i + 1}` })).join('') : au && au.src ? B.ieAudio({ ...au, title: au.title || b.title || 'Recording' })
      : `<article class="iq-passage"><span class="iq-passage-k">${esc(p.label || 'Reading passage')}</span>${p.title ? `<h3>${esc(p.title)}</h3>` : ''}${p.subtitle ? `<p class="iq-passage-sub">${esc(p.subtitle)}</p>` : ''}
        ${paras(p.text).map(x => { const m = x.match(/^([A-Z])\s{1,3}(.+)$/s); return m ? `<p class="has-letter"><b class="iq-plet">${m[1]}</b>${fmt(m[2])}</p>` : `<p>${fmt(x)}</p>`; }).join('')}</article>`;
    return `<section class="block iq-test" id="iqt-${esc(b.id || '')}"><header class="iq-test-bar"><b>${esc(b.title || 'Test')}</b>${b.minutes ? `<span class="iq-timer" data-ie-timer="${Number(b.minutes) * 60}" data-key="${esc(b.id || '')}">${icon('clock')}<span>${b.minutes}:00</span><button type="button" class="iq-timer-go" data-ie-timer-go>Start</button></span>` : ''}</header>
      <div class="iq-split${aus.length || (au && au.src) ? ' is-audio' : ''}"><div class="iq-pane is-left" tabindex="0" role="region" aria-label="${esc(au?.src ? 'Recording' : 'Passage')}">${left}</div><div class="iq-pane is-right" tabindex="0" role="region" aria-label="Questions">${inner(b.blocks, a)}</div></div></section>`; };

  /* ───────── ieWriting: a Writing task, as in the test ───────── */
  B.ieWriting = b => { const k = b.id, v = String(val(k)), n = words(v).length, min = Number(b.minWords) || (Number(b.task) === 1 ? 150 : 250), min_ = Number(b.minutes) || (Number(b.task) === 1 ? 20 : 40);
    return `<section class="block iq-writing">
      <div class="iq-wtask"><header><span class="iq-wtag">Writing Task ${Number(b.task) || 1}</span><span class="iq-wtime">${icon('clock')}You should spend about ${min_} minutes on this task.</span></header>
        <div class="iq-wprompt">${String(b.prompt || '').split(/\n\s*\n/).map(p => `<p>${fmt(p)}</p>`).join('')}<p class="iq-wmin">Write at least <b>${min} words</b>.</p></div>
        ${b.src ? `<figure class="iq-wfig"><a href="${esc(b.src)}" target="_blank" rel="noopener" aria-label="Open the picture full size"><img src="${esc(b.src)}" alt="${esc(b.alt || '')}" loading="lazy"></a>${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}</figure>` : ''}</div>
      <div class="iq-wans"><div class="iq-wbar"><b>Your answer</b><span class="iq-wc${n >= min ? ' is-ok' : ''}" data-ie-wc="${esc(k)}" data-min="${min}"><span>${n}</span> / ${min} words</span>
        <span class="iq-timer" data-ie-timer="${min_ * 60}" data-key="${esc(k)}">${icon('clock')}<span>${min_}:00</span><button type="button" class="iq-timer-go" data-ie-timer-go>Start</button></span></div>
        <textarea data-save="${esc(k)}" data-ie-words="${esc(k)}" rows="${Number(b.task) === 1 ? 12 : 18}" spellcheck="false" placeholder="Start writing here…">${esc(v)}</textarea></div></section>`; };

  /* ───────── ieSpeaking: Part 1, 2 or 3, with timers and a recorder ───────── */
  B.ieSpeaking = b => { const part = Number(b.part) || 1, prep = Number(b.prepare) || 60, talk = Number(b.talk) || 120;
    const card = part === 2 ? `<div class="iq-cue"><span class="iq-cue-k">Candidate task card</span><h4>${fmt(b.topic || 'Describe …')}</h4><p>You should say:</p><ul>${(b.say || []).map(s => `<li>${fmt(s)}</li>`).join('')}</ul>${b.explain ? `<p>and explain ${fmt(b.explain)}</p>` : ''}</div>
        <div class="iq-sp-timers"><span class="iq-timer" data-ie-timer="${prep}" data-key="${esc(b.id)}-prep">${icon('clock')}<b>Prepare</b><span>${Math.floor(prep / 60)}:${String(prep % 60).padStart(2, '0')}</span><button type="button" class="iq-timer-go" data-ie-timer-go>Start</button></span>
        <span class="iq-timer" data-ie-timer="${talk}" data-key="${esc(b.id)}-talk">${icon('clock')}<b>Talk</b><span>${Math.floor(talk / 60)}:${String(talk % 60).padStart(2, '0')}</span><button type="button" class="iq-timer-go" data-ie-timer-go>Start</button></span></div>`
      : `${b.topic ? `<h4 class="iq-sp-topic">${fmt(b.topic)}</h4>` : ''}<ol class="iq-sp-qs">${(b.questions || []).map(q => `<li>${fmt(q)}</li>`).join('')}</ol>`;
    return `<section class="block iq-speaking is-p${part}"><header><span class="iq-sp-tag">Speaking Part ${part}</span><span class="iq-sp-time">${['', '4–5 minutes · questions about you and familiar topics', '3–4 minutes · 1 minute to prepare, then talk for 1–2 minutes', '4–5 minutes · a discussion of more abstract ideas'][part]}</span></header>
      ${card}<div class="iq-rec" data-ie-rec="${esc(b.id)}"><button type="button" class="iq-rec-btn" data-ie-rec-go aria-label="Record your answer"><i></i></button><div class="iq-rec-tx"><b>Record your answer</b><small>Listen back and compare. The recording stays on this device.</small></div><span class="iq-rec-t">0:00</span><div class="iq-rec-out"></div></div></section>`; };

  /* ───────── scoring, notebook labels ───────── */
  function counts(b) {
    if (b.type === 'ieChoice' || b.type === 'ieTFNG') return [(b.items || []).filter((it, i) => val(`${b.id}-${i}`) === String(it.answer).trim().toUpperCase()).length, (b.items || []).length];
    if (b.type === 'ieMulti') { const ans = (b.answers || []).map(x => String(x).trim().toUpperCase()); return [String(val(b.id)).split(',').filter(x => ans.includes(x)).length, Number(b.pick) || ans.length]; }
    if (b.type === 'ieMatch') return [(b.items || []).filter((it, i) => norm(val(`${b.id}-${i}`)) === norm(it.answer)).length, (b.items || []).length];
    const all = b.type === 'ieTable' ? (b.rows || []).flat().flatMap(gapsIn) : b.type === 'ieDiagram' ? (b.labels || []).map(l => l.answer) : gapsIn(b.text);
    return [scoreGaps(b, all), all.length];
  }
  const answerable = b => /^ie(Choice|Multi|Match|TFNG|Gap|Table|Diagram)$/.test(b.type);
  function register(b, reg) {
    if (!answerable(b)) { if (b.type === 'ieWriting') reg(b.id, `Writing Task ${b.task || 1}`); return; }
    const n = counts(b)[1];
    if (b.type === 'ieMulti') { reg(b.id, `${range(b, n)} · ${strip(b.q || 'Choose')}`); return; }
    for (let i = 0; i < n; i++) reg(`${b.id}-${i}`, `Question ${from(b) + i}`);
  }

  /* ───────── events ───────── */
  function onClick(t, d) {
    if (d.iePick) { set(`${d.iePick}-${d.i}`, d.v); delete st().checked[d.iePick]; rerender(); return true; }
    if (d.ieMulti) { const k = d.ieMulti, on = String(val(k)).split(',').filter(Boolean), max = Number(d.max) || 2;
      const next = on.includes(d.v) ? on.filter(x => x !== d.v) : on.length < max ? [...on, d.v] : (toast(`Choose ${max} letters only — tap one again to change it.`), on);
      set(k, next.join(',')); delete st().checked[k]; rerender(); return true; }
    if (d.ieCheck) { const b = findBlock(d.ieCheck); if (!b) return true; const [r, n] = counts(b);
      st().checked[b.id] = true; save(); rerender(); if (r === n && n) { toast(`${r} / ${n} — all correct!`); confetti?.(document.getElementById('iq-' + b.id)); } else toast(`${r} / ${n} correct. The right answers are shown.`); return true; }
    if (d.ieReset) { delete st().checked[d.ieReset]; save(); rerender(); return true; }
    if (d.iePlay !== undefined) { onceplay(t.closest('[data-ie-once]')); return true; }
    if (d.ieTimerGo !== undefined) { timer(t.closest('[data-ie-timer]')); return true; }
    if (d.ieRecGo !== undefined) { record(t.closest('[data-ie-rec]')); return true; }
    return false;
  }
  function onInput(t) {
    if (t.dataset.ieInput && st().checked[t.dataset.ieInput]) { delete st().checked[t.dataset.ieInput]; save(); }
    if (t.dataset.ieWords) { const c = document.querySelector(`[data-ie-wc="${CSS.escape(t.dataset.ieWords)}"]`); if (c) { const n = words(t.value).length; c.firstElementChild.textContent = n; c.classList.toggle('is-ok', n >= Number(c.dataset.min)); } }
  }
  /* exam-mode audio: once, no pause */
  function onceplay(box) { const au = box?.querySelector('audio'); if (!au || box.classList.contains('is-on') || box.classList.contains('is-done')) return;
    box.classList.add('is-on'); au.play().catch(() => { box.classList.remove('is-on'); toast('The recording could not play. Check the link.'); });
    au.ontimeupdate = () => box.style.setProperty('--p', au.duration ? (au.currentTime / au.duration).toFixed(4) : 0);
    au.onended = () => { box.classList.remove('is-on'); box.classList.add('is-done'); box.querySelector('.iq-once-tx b').textContent = 'The recording has finished'; };
    au.onpause = () => { if (!au.ended) au.play(); }; }
  /* a countdown: Start → Pause → Resume; turns red in the last minute */
  const timers = new Map();
  function timer(el) { if (!el) return; const key = el.dataset.key, total = Number(el.dataset.ieTimer), btn = el.querySelector('[data-ie-timer-go]'), out = el.querySelector('span');
    let tm = timers.get(key) || { left: total, on: false, h: 0 }; timers.set(key, tm);
    const paint = () => { const m = Math.floor(tm.left / 60), s = tm.left % 60; out.textContent = `${m}:${String(s).padStart(2, '0')}`; el.classList.toggle('is-low', tm.left <= 60 && tm.left > 0); el.classList.toggle('is-up', tm.left <= 0); };
    if (tm.on) { clearInterval(tm.h); tm.on = false; btn.textContent = 'Resume'; return; }
    if (tm.left <= 0) tm.left = total;
    tm.on = true; btn.textContent = 'Pause'; el.classList.add('is-run');
    tm.h = setInterval(() => { tm.left--; const live = document.querySelector(`[data-ie-timer][data-key="${CSS.escape(key)}"]`); if (live && live !== el) { el = live; } paint();
      if (tm.left <= 0) { clearInterval(tm.h); tm.on = false; el.querySelector('[data-ie-timer-go]').textContent = 'Again'; toast('Time is up.'); } }, 1000); paint(); }
  /* the speaking recorder: MediaRecorder, kept in memory on this device */
  const recs = new Map();
  async function record(box) { if (!box) return; const id = box.dataset.ieRec, r = recs.get(id);
    if (r?.rec?.state === 'recording') { r.rec.stop(); return; }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { toast('Recording is not available in this browser.'); return; }
    let stream; try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { toast('Allow the microphone to record your answer.'); return; }
    const rec = new MediaRecorder(stream), chunks = [], t0 = Date.now(), tEl = box.querySelector('.iq-rec-t');
    const tick = setInterval(() => { const s = Math.floor((Date.now() - t0) / 1000); tEl.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }, 250);
    rec.ondataavailable = e => chunks.push(e.data);
    rec.onstop = () => { clearInterval(tick); stream.getTracks().forEach(x => x.stop()); box.classList.remove('is-rec');
      const url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' })), n = box.querySelectorAll('.iq-take').length + 1;
      box.querySelector('.iq-rec-out').insertAdjacentHTML('beforeend', `<div class="iq-take"><b>Take ${n}</b><audio controls src="${url}"></audio><a class="btn-quiet" href="${url}" download="speaking-${id}-take${n}.webm">Save</a></div>`);
      box.querySelector('.iq-rec-tx b').textContent = 'Record again'; };
    recs.set(id, { rec }); rec.start(); box.classList.add('is-rec'); box.querySelector('.iq-rec-tx b').textContent = 'Recording… tap to stop'; }

  function notebookItems(b) { const out = [];
    if (!answerable(b)) { if (b.type === 'ieWriting' && String(val(b.id)).trim()) out.push({ t: 'qa', label: `Writing Task ${b.task || 1}`, value: val(b.id) }); return out; }
    if (b.type === 'ieMulti') { if (val(b.id)) out.push({ t: 'qa', label: strip(b.q || range(b, Number(b.pick) || 2)), value: val(b.id) }); return out; }
    const n = counts(b)[1]; for (let i = 0; i < n; i++) { const v = val(`${b.id}-${i}`); if (String(v).trim()) out.push({ t: 'qa', label: `Question ${from(b) + i}`, value: v }); }
    return out; }
  /* a Google Drive recording that cannot stream into the page's player: use Drive's own player instead */
  document.addEventListener('error', e => { const au = e.target; if (!(au instanceof HTMLMediaElement) || !au.dataset.ieDrive) return;
    const f = document.createElement('iframe'); f.className = 'iq-frame is-audio'; f.src = au.dataset.ieDrive; f.title = au.title || 'Recording'; f.allow = 'autoplay'; au.replaceWith(f); }, true);
  return { B, register, onClick, onInput, notebookItems };
};
