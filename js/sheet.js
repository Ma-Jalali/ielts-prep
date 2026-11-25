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
  const KINDS = { form: 'Form completion', notes: 'Note completion', sentences: 'Sentence completion', short: 'Short-answer questions', summary: 'Summary completion', flow: 'Flow chart' };
  const kindOf = b => b.kindName ? b.kindName : b.type === 'ieGap' && b.layout === 'summary' && b.bank ? 'Summary completion with a box' : b.type === 'ieMulti' ? 'Pick from a list' : b.type === 'ieTFNG' ? (b.kind === 'ynng' ? 'Yes / No / Not Given' : 'True / False / Not Given') : b.type === 'ieGap' ? KINDS[b.layout] || 'Completion' : b.type === 'ieTable' ? 'Table completion' : b.type === 'ieDiagram' ? (/\bmap\b/i.test(`${b.title || ''} ${b.alt || ''}`) ? 'Map labelling' : /\bplan\b|floor|layout/i.test(`${b.title || ''} ${b.alt || ''}`) ? 'Plan labelling' : 'Diagram labelling')
    : b.type === 'ieChoice' || b.type === 'ieMulti' ? 'Multiple choice' : b.type === 'ieMatch' ? 'Matching' : '';

  /* ───────── a Learn lesson (strategy lesson) on one page ─────────
     The lesson file has `learn: { tags?, blocks: [...] }`. Each top-level block is one band (card) of the page; the
     blocks inside tabs, folds and exercises are drawn the same way, without the band around them.
       videos    { title, items: [{ title, src (Google Drive), note }] }       the teacher's videos, played in the page
       parts     { items: [{ n, qs, who, what, eg }], foot? }                   the four parts of the test
       facts     { items: [[big, small]] }                                      a row of key numbers
       list      { items: ['…'], tone? }                                        a checklist
       faq       { items: [{ q, a }] }                                          questions and answers, folded
       check     { items: [{ s, answer: true|false, why }] }                    true or false, answer on a tap
       table     { head: ['…'], rows: [['…']], foot? }
       tabs      { items: [{ label, blocks: [...] }] }                          tabs: one panel shows at a time
       folds     { items: [{ title, sub?, blocks: [...] }], open? }             folded sections (open one at a time)
       cards     { items: [{ icon?, t, d }] }                                   small tip cards
       steps     { items: [{ t, d }] }                                          numbered steps (before / while / after …)
       chips     { groups: [{ label?, items: ['…'] }], tone? }                  words as chips (spelling lists, sounds)
       note      { tone: 'tip' | 'warn' | 'info', title?, text }                a callout
       text      { text }                                                       paragraphs
       reveal    { items: [{ q, a }] }                                          a question; the answer on a tap
       spot      { items: [{ lines: [[who, said]], q, options: [], answer: 0, why }] }   a short dialogue and a question
       exercises { items: [{ id, title, kind?, audio?: [{ title, src, note }], tip?, blocks: [question blocks] }] }
                 each exercise is a fold: the recording(s) and the questions inside it, laid out like the practice
                 exercises (js/sheet.js page(), embedded), with its answers folded at the bottom
     Any block may have kicker, title, intro. A video's "I watched this video" is saved as <lesson id>-v<n>. */
  /* the icons of Learn pages (also used by js/pagebuilder.js through window.IELTSSheetIcon) */
  const SV = { play: '<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/>', ok: '<path d="M20 6 9 17l-5-5"/>', no: '<path d="M6 6l12 12M18 6 6 18"/>',
      chat: '<path d="M4 5h16v11H9l-5 4z"/>', mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>', people: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2.5 19c.8-3.4 3-5 5.5-5s4.7 1.6 5.5 5M11 19c.8-3.4 2.6-5 5-5s4.4 1.6 5.2 5"/>', lecture: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8"/>',
      tip: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>', warn: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17v.5"/>', info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
      ear: '<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 10a2 2 0 0 1 4 0"/>', pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>', eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
      book: '<path d="M4 6.5C6.5 5 9 5 12 6.5 15 5 17.5 5 20 6.5V18c-2.5-1.5-5-1.5-8 0-3-1.5-5.5-1.5-8 0z"/><path d="M12 6.5V18"/>', target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>', hash: '<path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"/>', abc: '<path d="M3 17 6.5 7 10 17M4.2 13.5h4.6"/><path d="M13 7v10h3.2a2.6 2.6 0 0 0 0-5.2H13h2.8a2.4 2.4 0 0 0 0-4.8z"/>',
      repeat: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>', star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>', list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
      signpost: '<path d="M12 3v18M5 6h11l3 3-3 3H5zM19 13H8l-3 3 3 3h11z"/>', speak: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>' };
  const sv = (k, w = 2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SV[k] || SV.tip}</svg>`;
  window.IELTSSheetIcon = k => sv(k, 1.9);
  function learnPage(L, ctx) {
    const { esc, icon } = ctx, ED = !!ctx.edit, UI = ctx.builder?.ui || { tab: () => 0, open: () => false };
    const fmt = t => esc(String(t ?? '')).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>').replace(/==(.+?)==/g, '<mark>$1</mark>').replace(/~~(.+?)~~/g, '<s>$1</s>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/\[([^\]]+)\]\((#\/[^\s)]+)\)/g, '<a href="$2">$1</a>');   // **bold**, *italic*, [link](https://…) or (#/… inside the site)
    const paras = t => String(t ?? '').split(/\n\s*\n/).map(p => `<p>${fmt(p).replace(/\n/g, '<br>')}</p>`).join('');
    const drive = s => { const m = String(s || '').match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?.*id=)([\w-]{10,})/); return m && m[1]; };
    /* the video streams from Google Drive through the 'ielts-audio' relay (?kind=video: byte ranges, so it plays and seeks on iPhones too) */
    const cfg = window.DEC15_CONFIG || {}, relay = id => cfg.supabaseUrl ? `${cfg.supabaseUrl.replace(/\/$/, '')}/functions/v1/ielts-audio?kind=video&id=${id}` : `https://drive.usercontent.google.com/download?id=${id}&export=download`;
    let vn = 0, tn = 0;
    const JUMP = (L.learn.jump || []).map(j => j[0]), num = b => { const i = b.anchor ? JUMP.indexOf(b.anchor) : -1; return i < 0 ? '' : `<i class="xl-kn">${String(i + 1).padStart(2, '0')}</i>`; };
    const head = (b, k, top) => b.title || b.intro ? (top ? `<header class="xl-h"><span class="xl-k">${num(b)}${esc(b.kicker || k)}</span>${b.title ? `<h2>${esc(b.title)}</h2>` : ''}${b.intro ? `<p>${fmt(b.intro)}</p>` : ''}</header>`
      : `<header class="xl-sh">${b.title ? `<h3>${esc(b.title)}</h3>` : ''}${b.intro ? `<p>${fmt(b.intro)}</p>` : ''}</header>`) : '';
    const inner = (b, top, path) => (R[b.type] || (() => ED ? `<p class="pb-unknown">Unknown element: ${esc(b.type)}</p>` : ''))(b, top, path);
    /* a list of blocks; in Studio (ED) each block gets its toolbar and the list an "Add" button (js/pagebuilder.js) */
    const many = (blocks, top, base) => (blocks || []).map((x, i) => draw(x, top, `${base}.${i}`)).join('') + (ED ? ctx.builder.addHTML(base, top) : '');
    const KICK = { examples: 'Examples', recap: 'Summary', versus: 'Try it', scale: 'Reference', videos: 'Watch', parts: 'The test', facts: 'At a glance', list: 'Remember', faq: 'Questions', check: 'Check yourself', table: 'Reference', tabs: 'Tips', folds: 'Tips', cards: 'Tips', steps: 'Method', chips: 'Words', note: '', text: '', reveal: 'Try it', spot: 'Try it', exercises: 'In-class exercises', image: '', model: 'Model answer', write: 'Your turn' };
    function draw(b, top, path) {
      const out = b.type === 'note' ? R.note(b) : b.type === 'divider' ? R.divider(b) : b.type === 'key' ? `<div${b.anchor ? ` id="${esc(b.anchor)}"` : ''}>${R.key(b)}</div>`
        : top ? `<section class="xl-band${b.tone ? ' is-' + esc(b.tone) : ''} is-${esc(b.type)}"${b.anchor ? ` id="${esc(b.anchor)}"` : ''}>${head(b, KICK[b.type] || '', true)}${inner(b, true, path)}</section>`
        : `<div class="xl-sub is-${esc(b.type)}${b.tone ? ' is-' + esc(b.tone) : ''}">${head(b, '', false)}${inner(b, false, path)}</div>`;
      return ED ? ctx.builder.wrap(b, path, out, top) : out;
    }
    const R = {
      videos: b => (b.items || []).map(v => { const i = ++vn, id = drive(v.src), k = `${L.id}-v${i}`, seen = ctx.val(k) === true;
        return `<article class="xl-video"><div class="xl-video-h"><span class="xl-vn">${i}</span><span class="xl-vt"><b>${esc(v.title)}</b>${v.note ? `<small>${fmt(v.note)}</small>` : ''}</span>${v.length ? `<span class="xl-len">${esc(v.length)}</span>` : ''}</div>
          <div class="xl-frame" data-xl-drive="${esc(id || '')}">${id ? `<video controls playsinline preload="metadata" src="${esc(relay(id))}" title="${esc(v.title)}" data-xl-k="${esc(k)}"></video>
            <button type="button" class="xl-cover" data-xl-play aria-label="Play video ${i}: ${esc(v.title)}"><span class="xl-cover-btn">${sv('play')}</span><span class="xl-cover-tx"><small>Video ${i}</small><b>${esc(v.title)}</b></span></button>` : ''}</div>
          <div class="xl-video-f"><label class="xl-seen"><input type="checkbox" data-save="${esc(k)}"${seen ? ' checked' : ''}><span>I watched this video</span></label>${id ? `<a href="https://drive.google.com/file/d/${id}/view" target="_blank" rel="noopener">${icon('open')}Open in Google Drive</a>` : ''}</div></article>`; }).join(''),
      parts: b => `<ol class="xl-parts${(b.items || []).length === 3 ? ' is-3' : ''}">${(b.items || []).map((p, i) => `<li style="--d:${i}"${p.on ? ' class="is-on"' : ''}><span class="xl-pi">${sv(p.icon || ['chat', 'mic', 'people', 'lecture'][i], 1.8)}</span>
          <span class="xl-pn">${esc(p.label || `Part ${p.n}`)}</span><b>${esc(p.who)}</b><span class="xl-pw">${fmt(p.what)}</span>${p.eg ? `<small>e.g. ${fmt(p.eg)}</small>` : ''}<span class="xl-pq">${esc(p.qs)}</span><i class="xl-level" aria-label="Difficulty ${i + 1} of 4">${[0, 1, 2, 3].map(j => `<b class="${j <= i ? 'on' : ''}"></b>`).join('')}</i></li>`).join('')}</ol>
        ${b.foot ? `<p class="xl-foot">${fmt(b.foot)}</p>` : ''}`,
      facts: b => `<ul class="xl-facts${(b.items || []).length < 6 ? ' is-' + (b.items || []).length : ''}">${(b.items || []).map(([big, small]) => `<li><b>${esc(big)}</b><span>${fmt(small)}</span></li>`).join('')}</ul>`,
      list: b => `<ul class="xl-list">${(b.items || []).map(t => `<li><span class="xl-tick">${sv('ok', 2.6)}</span><span>${fmt(t)}</span></li>`).join('')}</ul>`,
      faq: b => `<div class="xl-faq">${(b.items || []).map((f, i) => `<details${i === 0 && b.open !== false ? ' open' : ''}><summary><span>${fmt(f.q)}</span><i class="xs-chev" aria-hidden="true"></i></summary><div>${paras(f.a)}</div></details>`).join('')}</div>`,
      table: b => `<div class="xl-table${b.wide ? ' is-wide' : ''}"><table>${(b.head || []).length ? `<thead><tr>${b.head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${(b.rows || []).map(r => `<tr>${r.map((c, j) => j ? `<td>${fmt(c)}</td>` : `<th scope="row">${fmt(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>${b.foot ? `<p class="xl-foot">${fmt(b.foot)}</p>` : ''}`,
      check: b => `<ol class="xl-check">${(b.items || []).map((c, i) => `<li data-xl-ans="${c.answer ? 'T' : 'F'}"><span class="xl-cn">${i + 1}</span><div class="xl-cq"><p>${fmt(c.s)}</p>
          <div class="xl-tf"><button type="button" data-xl-tf="T">True</button><button type="button" data-xl-tf="F">False</button></div><p class="xl-why" hidden><b class="xl-verdict"></b> ${fmt(c.why)}</p></div></li>`).join('')}</ol>`,
      tabs: (b, top, path) => { const id = `xlt${++tn}`, sel = Math.min(UI.tab(path), Math.max(0, (b.items || []).length - 1));
        return `<div class="xl-tabs" data-xl-tabs><div class="xl-tabbar" role="tablist" aria-label="${esc(b.title || 'Topics')}">${(b.items || []).map((t, i) => `<button type="button" role="tab" id="${id}-t${i}" aria-controls="${id}-p${i}" aria-selected="${i === sel}" tabindex="${i === sel ? 0 : -1}" data-xl-tab="${i}" data-xl-path="${esc(path || '')}">${t.icon ? sv(t.icon, 1.9) : ''}<span>${esc(t.label)}</span></button>`).join('')}</div>
          ${(b.items || []).map((t, i) => `<div class="xl-panel" role="tabpanel" id="${id}-p${i}" aria-labelledby="${id}-t${i}"${i === sel ? '' : ' hidden'}>${t.lead ? `<p class="xl-lead">${fmt(t.lead)}</p>` : ''}${many(t.blocks, false, `${path}.items.${i}.blocks`)}${i < b.items.length - 1 && b.next !== false ? `<div class="xl-tabnext"><span>${i + 1} of ${b.items.length}</span><button type="button" data-xl-tabgo="${i + 1}">Next: ${esc(b.items[i + 1].label)}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>` : ''}</div>`).join('')}</div>`; },
      folds: (b, top, path) => `<div class="xl-folds" data-xl-folds>${(b.items || []).map((f, i) => `<details class="xl-fold"${(ED ? UI.open(`${path}.items.${i}`) : b.open === i) ? ' open' : ''} data-xl-path="${esc(`${path}.items.${i}`)}"><summary>${f.icon ? `<span class="xl-fold-ic">${sv(f.icon, 1.9)}</span>` : ''}<span class="xl-fold-tx"><b>${fmt(f.title)}</b>${f.sub ? `<small>${fmt(f.sub)}</small>` : ''}</span><i class="xs-chev" aria-hidden="true"></i></summary><div class="xl-fold-in">${many(f.blocks, false, `${path}.items.${i}.blocks`)}</div></details>`).join('')}</div>`,
      cards: b => `<ul class="xl-cards${b.cols ? ' is-' + b.cols : ''}">${(b.items || []).map(c => `<li><span class="xl-card-ic">${sv(c.icon || 'tip', 1.9)}</span><span><b>${fmt(c.t)}</b>${c.d ? `<span>${fmt(c.d)}</span>` : ''}</span></li>`).join('')}</ul>`,
      steps: b => `<ol class="xl-steps">${(b.items || []).map((s, i) => `<li><span class="xl-step-n">${esc(s.n || i + 1)}</span><div><b>${fmt(s.t)}</b>${s.d ? `<div class="xl-step-d">${Array.isArray(s.d) ? `<ul>${s.d.map(x => `<li>${fmt(x)}</li>`).join('')}</ul>` : paras(s.d)}</div>` : ''}</div></li>`).join('')}</ol>`,
      chips: b => (b.groups || []).map(g => `<div class="xl-chipg">${g.label ? `<span class="xl-chipl">${fmt(g.label)}</span>` : ''}<ul class="xl-chips${b.tone ? ' is-' + esc(b.tone) : ''}">${(g.items || []).map(w => `<li>${fmt(w)}</li>`).join('')}</ul></div>`).join(''),
      note: b => `<aside class="xl-note is-${esc(b.tone || 'tip')}"><span class="xl-note-ic">${sv(b.tone === 'warn' ? 'warn' : b.tone === 'info' ? 'info' : 'tip', 2)}</span><div>${b.title ? `<b>${fmt(b.title)}</b>` : ''}${paras(b.text)}</div></aside>`,
      text: b => `<div class="xl-text">${paras(b.text)}</div>`,
      reveal: b => { let k = 0; return `<ol class="xl-reveal">${(b.items || []).map(r => `<li><span class="xl-cn${r.n ? ' is-eg' : ''}">${esc(r.n || String.fromCharCode(97 + k++))}</span><div><p>${fmt(r.q).replace(/\n/g, '<br>')}</p><button type="button" class="xl-show" data-xl-show>Show the answer</button><p class="xl-ans" hidden>${fmt(r.a).replace(/\n/g, '<br>')}</p></div></li>`).join('')}</ol>`; },
      spot: b => `<ol class="xl-spot">${(b.items || []).map((s, i) => `<li data-xl-right="${Number(s.answer) || 0}"><div class="xl-talk">${(s.lines || []).map(([who, said], j) => `<p class="${j % 2 ? 'is-b' : 'is-a'}"><b>${esc(who)}</b><span>${fmt(said)}</span></p>`).join('')}</div>
          <p class="xl-spot-q"><span class="xl-cn">${i + 1}</span>${fmt(s.q)}</p><div class="xl-opts">${(s.options || []).map((o, j) => `<button type="button" data-xl-opt="${j}"><span class="xs-let">${['i', 'ii', 'iii', 'iv'][j] || j + 1}</span><span>${fmt(o)}</span></button>`).join('')}</div><p class="xl-why" hidden><b class="xl-verdict"></b> ${fmt(s.why)}</p></li>`).join('')}</ol>`,
      image: b => b.src ? `<figure class="xl-img${b.size ? ' is-' + esc(b.size) : ''}"><img src="${esc(b.src)}" alt="${esc(b.alt || '')}" loading="lazy">${b.caption ? `<figcaption>${fmt(b.caption)}</figcaption>` : ''}</figure>` : (ED ? '<p class="pb-unknown">Add a picture link in Edit.</p>' : ''),
      model: b => { const body = `<div class="xl-model-paper">${b.label ? `<span class="xl-model-k">${esc(b.label)}</span>` : ''}${paras(b.text)}${b.words ? `<span class="xl-model-n">${esc(b.words)}</span>` : ''}</div>${(b.notes || []).length ? `<ul class="xl-model-notes">${b.notes.map(n => `<li>${fmt(n)}</li>`).join('')}</ul>` : ''}`;
        return b.fold ? `<details class="xl-model is-fold"${ED ? ' open' : ''}><summary>${sv('eye', 1.9)}<span>${esc(b.show || 'Show the model answer')}</span><i class="xs-chev" aria-hidden="true"></i></summary>${body}</details>` : `<div class="xl-model">${body}</div>`; },
      write: b => { const k = `${L.id}-${b.key || 'write'}`, v = String(ctx.val(k) ?? ''), n = v.trim() ? v.trim().split(/\s+/).length : 0, min = Number(b.minWords) || 0;
        return `<div class="xl-write" data-xl-min="${min}"><div class="xl-task">${b.label ? `<span class="xl-task-k">${esc(b.label)}</span>` : ''}${paras(b.prompt)}${b.src ? `<img src="${esc(b.src)}" alt="${esc(b.alt || 'The task picture')}" loading="lazy">` : ''}${b.minutes || min ? `<p class="xl-task-rule">${[b.minutes ? `Spend about ${esc(b.minutes)} minutes on this task.` : '', min ? `Write at least ${min} words.` : ''].filter(Boolean).join(' ')}</p>` : ''}</div>
          <label class="xl-answer"><span>Your answer</span><textarea rows="${Number(b.rows) || 12}" data-save="${esc(k)}" spellcheck="true" placeholder="${esc(b.placeholder || 'Write your answer here …')}">${esc(v)}</textarea></label>
          <p class="xl-count"><b>${n}</b> word${n === 1 ? '' : 's'}${min ? ` <span>of at least ${min}</span>` : ''}</p></div>`; },
      /* a question beside the passage it comes from: choose TRUE / FALSE / NOT GIVEN (or any options), then see why */
      versus: b => `<ol class="xl-vs">${(b.items || []).map((v, i) => { const O = v.options || b.options || ['TRUE', 'FALSE', 'NOT GIVEN'], r = typeof v.answer === 'number' ? v.answer : Math.max(0, O.indexOf(v.answer));
        return `<li data-xl-right="${r}"><div class="xl-vs-pair"><p class="xl-vs-q"><span class="xl-vs-k">${esc(v.qLabel || b.qLabel || 'Question')}</span><span>${fmt(v.q)}</span></p><p class="xl-vs-p"><span class="xl-vs-k">${esc(v.pLabel || b.pLabel || 'Passage')}</span><span>${fmt(v.p)}</span></p></div>
          <div class="xl-opts is-row"><span class="xl-cn">${esc(v.n || i + 1)}</span>${O.map((o, j) => `<button type="button" data-xl-opt="${j}">${fmt(o)}</button>`).join('')}</div><p class="xl-why" hidden><b class="xl-verdict"></b> ${fmt(v.why)}</p></li>`; }).join('')}</ol>`,
      /* the one idea to remember, large */
      key: b => `<aside class="xl-key-idea"><span class="xl-key-ic">${sv(b.icon || 'star', 2)}</span><div>${b.title ? `<span class="xl-key-k">${fmt(b.title)}</span>` : ''}<p>${fmt(b.text)}</p>${b.sub ? `<small>${fmt(b.sub)}</small>` : ''}</div></aside>`,
      /* worked examples: the passage, the question, the answer and why, each on its own coloured line; hide: true puts the answer behind a button */
      examples: b => { const nl = t => fmt(t).replace(/\n/g, '<br>'); return `<div class="xl-egs${(b.items || []).length > 1 && b.cols !== 1 ? ' is-grid' : ''}${[2, 4].includes((b.items || []).length) || b.cols === 2 ? ' is-2' : ''}">${(b.items || []).map((x, i) => { const ans = `${x.a ? `<p class="xl-eg-a"><span class="xl-eg-k">${esc(x.aLabel || b.aLabel || 'Answer')}</span><b>${nl(x.a)}</b></p>` : ''}${x.why ? `<p class="xl-eg-why">${sv('tip', 2)}<span>${nl(x.why)}</span></p>` : ''}`;
        return `<article class="xl-eg"><header>${esc(x.label || b.label || 'Example')}${(b.items || []).length > 1 && !x.label ? ` ${i + 1}` : ''}</header>${x.p ? `<p class="xl-eg-p"><span class="xl-eg-k">${esc(x.pLabel || b.pLabel || 'Passage')}</span><span>${nl(x.p)}</span></p>` : ''}${x.q ? `<p class="xl-eg-q"><span class="xl-eg-k">${esc(x.qLabel || b.qLabel || 'Question')}</span><span>${nl(x.q)}</span></p>` : ''}
          ${b.hide || x.hide ? `<button type="button" class="xl-show" data-xl-show>Show the answer</button><div class="xl-eg-hid" hidden>${ans}</div>` : ans}</article>`; }).join('')}</div>`; },
      /* the end-of-lesson summary */
      recap: b => `<ul class="xl-recap">${(b.items || []).map((t, i) => `<li><span class="xl-recap-n">${i + 1}</span><span>${fmt(t)}</span></li>`).join('')}</ul>`,
      /* a scale from 100% down to 0%: words of quantity or certainty, strongest first */
      scale: b => `<ol class="xl-scale">${(b.items || []).map((x, i, a) => `<li style="--p:${Math.max(4, Number(x.p ?? (100 - i * 100 / Math.max(1, a.length - 1))) || 4)}%"><span class="xl-sc-v">${esc(x.v)}</span><span class="xl-sc-bar" aria-hidden="true"><i></i></span><span class="xl-sc-w">${(x.words || []).map(w => `<em>${fmt(w)}</em>`).join('')}${x.note ? `<small>${fmt(x.note)}</small>` : ''}</span></li>`).join('')}</ol>`,
      divider: b => `<div class="xl-divider" role="separator">${b.title ? `<span>${esc(b.title)}</span>` : ''}</div>`,
      exercises: b => `<div class="xl-exs">${(b.items || []).map((x, i) => { const qs = (x.blocks || []).filter(isQ), n = qs.reduce((a, q) => a + count(q), 0), kinds = [...new Set(qs.map(kindOf).filter(Boolean))];
        const sub = { id: x.id, title: x.title, sections: [{ activities: [{ id: 'listen', blocks: [{ type: 'ieTest', audios: x.audio || [], passage: x.passage, blocks: x.blocks || [] }] }] }] };
        return `<details class="xl-ex" id="ex-${esc(x.id)}" data-xl-ex${ED && UI.open('ex-' + x.id) ? ' open' : ''}><summary><span class="xl-ex-n">${i + 1}</span><span class="xl-ex-tx"><b>${esc(x.title)}</b><small>${[n ? `${n} question${n === 1 ? '' : 's'}` : '', (x.audio || []).length ? `${x.audio.length > 1 ? x.audio.length + ' recordings' : 'Recording'}` : x.passage ? 'Reading passage' : '', ...(x.kind ? [x.kind] : kinds)].filter(Boolean).map(esc).join(' · ')}</small></span>
          <span class="xl-ex-go"><span class="xl-ex-open">${esc(x.go || 'Start')}</span><span class="xl-ex-close">Close</span></span></summary>
          <div class="xl-ex-in">${x.tip ? R.note({ tone: 'tip', title: 'Before you start', text: x.tip }) : ''}${page(sub, Object.assign({}, ctx, { embed: true }))}</div></details>`; }).join('')}</div>`
    };
    const blocks = L.learn.blocks || [], acts = (L.sections || []).flatMap(s => s.activities || []), doneAll = acts.length && acts.every(a => ctx.done(a.id));
    const walk = bs => (bs || []).flatMap(b => [b, ...walk(b.blocks), ...(b.items || []).flatMap(t => walk(t && t.blocks))]);
    const all = walk(blocks), nVid = all.filter(b => b.type === 'videos').reduce((n, b) => n + (b.items || []).length, 0), nEx = all.filter(b => b.type === 'exercises').reduce((n, b) => n + (b.items || []).length, 0);
    const crumbs = (ctx.trail || []).map(t => `<a href="${esc(t.href)}">${esc(t.label)}</a><span aria-hidden="true">›</span>`).join('');
    const jump = (L.learn.jump || []).length ? `<nav class="xl-jump" aria-label="On this page" data-xl-nav><span class="xl-jump-k">On this page</span><div class="xl-jump-in">${L.learn.jump.map(([href, label, ic], i) => `<a href="#${esc(href)}" data-xl-jump><i>${i + 1}</i><span>${esc(label)}</span></a>`).join('')}</div><span class="xl-jump-bar" aria-hidden="true"><b></b></span></nav>` : '';
    return `<article class="xs xl" style="--xs-soft:${ctx.soft || '#e6f3f1'}${ctx.acc ? `;--xs-acc:${ctx.acc}` : ''}">
      <nav class="xs-trail" aria-label="Where you are">${ctx.back ? `<a class="xs-back" href="${esc(ctx.back.href)}">${icon('left')}<span>${esc(ctx.back.label)}</span></a>` : ''}<span class="xs-crumbs">${crumbs}<b>${esc(ctx.name || '')}</b></span></nav>
      <header class="xs-hero"><div class="xs-hero-tx"><span class="xs-eyebrow">${esc(ctx.eyebrow || 'Learn')}</span><h1>${esc(L.title)}</h1>${L.journey ? `<p>${esc(L.journey)}</p>` : ''}
        <ul class="xs-facts">${nVid ? `<li><b>${nVid}</b> video${nVid === 1 ? '' : 's'}</li>` : ''}${L.duration ? `<li>${esc(L.duration)}</li>` : ''}${(L.learn.tags || []).map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
        ${window.IELTSSheetArt ? window.IELTSSheetArt(L.illus) : ''}</header>
      ${ED ? ctx.builder.barHTML() : ''}${jump}
      ${many(blocks, true, 'blocks')}
      <section class="xs-end"><footer class="xs-foot"><label class="xs-done"><input type="checkbox" data-sheet-done${doneAll ? ' checked' : ''}><span>I have finished this lesson</span></label>
        <span class="xs-nav">${ctx.back ? `<a class="btn-quiet" href="${esc(ctx.back.href)}">${icon('left')}All lessons</a>` : ''}${ctx.next ? `<a class="btn" href="${esc(ctx.next.href)}">${esc(ctx.next.label)} ${icon('arrow')}</a>` : ''}</span></footer></section></article>`;
  }
  /* Learn pages: tabs (click and arrow keys), one fold open at a time in a group, "show the answer", the short dialogues,
     and the "on this page" links (they open the exercise or fold they point to) */
  document.addEventListener('click', e => {
    const t = e.target.closest?.('[data-xl-tab]');
    if (t) { const box = t.closest('[data-xl-tabs]'), i = +t.dataset.xlTab; box.querySelectorAll(':scope > .xl-tabbar [data-xl-tab]').forEach((b, j) => { b.setAttribute('aria-selected', j === i); b.tabIndex = j === i ? 0 : -1; });
      box.querySelectorAll(':scope > .xl-panel').forEach((p, j) => { p.hidden = j !== i; }); t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); return; }
    const s = e.target.closest?.('[data-xl-show]'); if (s) { s.hidden = true; s.nextElementSibling.hidden = false; return; }
    const g = e.target.closest?.('[data-xl-tabgo]');
    if (g) { const box = g.closest('[data-xl-tabs]'), t = box.querySelector(`:scope > .xl-tabbar [data-xl-tab="${g.dataset.xlTabgo}"]`); if (t) { t.click(); const top = box.getBoundingClientRect().top + scrollY - navTop() - 70; scrollTo({ top, behavior: 'smooth' }); } return; }
    const o = e.target.closest?.('[data-xl-opt]');
    if (o) { const li = o.closest('li'), right = +li.dataset.xlRight, j = +o.dataset.xlOpt; li.querySelectorAll('[data-xl-opt]').forEach(b => { b.classList.toggle('is-pick', b === o); b.classList.toggle('is-ans', +b.dataset.xlOpt === right); });
      li.classList.toggle('is-right', j === right); li.classList.toggle('is-wrong', j !== right); const w = li.querySelector('.xl-why'); w.hidden = false; w.querySelector('.xl-verdict').textContent = j === right ? 'Right.' : 'Not quite.'; return; }
    const a = e.target.closest?.('[data-xl-jump]');
    if (a) { const el = document.getElementById(a.getAttribute('href').slice(1)); if (el) { e.preventDefault(); if (el.tagName === 'DETAILS') el.open = true; scrollTo({ top: el.getBoundingClientRect().top + scrollY - navTop() - 64, behavior: 'smooth' }); } }
  });
  /* the "on this page" bar: it sticks under the page header, lights up the section you are reading and fills as you read */
  const navTop = () => document.querySelector('.masthead')?.offsetHeight || 0;
  let spyQ = false;
  const spy = () => { spyQ = false; const nav = document.querySelector('[data-xl-nav]'); if (!nav) return; const top = navTop(); nav.style.top = top + 'px';
    const links = [...nav.querySelectorAll('[data-xl-jump]')], line = top + nav.offsetHeight + 90; let on = -1;
    links.forEach((l, i) => { const el = document.getElementById(l.getAttribute('href').slice(1)); if (el && el.getBoundingClientRect().top < line) on = i; });
    links.forEach((l, i) => l.classList.toggle('is-on', i === on)); nav.classList.toggle('is-stuck', nav.getBoundingClientRect().top <= top + 1);
    const art = nav.closest('.xl'), r = art?.getBoundingClientRect(), p = r ? Math.min(1, Math.max(0, (innerHeight - r.top) / r.height)) : 0; nav.style.setProperty('--xl-p', p.toFixed(3));
    const cur = links[on]; if (cur && nav.dataset.on !== String(on)) { nav.dataset.on = on; const box = cur.parentElement; box.scrollTo({ left: cur.offsetLeft - box.clientWidth / 2 + cur.offsetWidth / 2, behavior: 'smooth' }); } };
  addEventListener('scroll', () => { if (!spyQ) { spyQ = true; requestAnimationFrame(spy); } }, { passive: true });
  addEventListener('resize', () => requestAnimationFrame(spy)); addEventListener('hashchange', () => setTimeout(spy, 400)); setTimeout(spy, 600);
  document.addEventListener('keydown', e => { const t = e.target.closest?.('[data-xl-tab]'); if (!t || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return; e.preventDefault();
    const tabs = [...t.parentElement.querySelectorAll('[data-xl-tab]')], i = tabs.indexOf(t), n = tabs.length, j = e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + n) % n; tabs[j].focus(); tabs[j].click(); });
  /* an exercise opened: the others in the page close, so only one recording and one set of questions is open at a time */
  document.addEventListener('toggle', e => { const d = e.target; if (!(d instanceof HTMLDetailsElement) || !d.open) return;
    if (d.matches('.xl-ex')) { document.querySelectorAll('details.xl-ex[open]').forEach(x => { if (x !== d) { x.open = false; x.querySelectorAll('audio').forEach(a => a.pause()); } }); setTimeout(() => { const r = d.getBoundingClientRect(); if (r.top < 60 || r.top > innerHeight * .6) d.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 30); }
    else if (d.matches('.xl-fold')) d.parentElement.querySelectorAll(':scope > details.xl-fold[open]').forEach(x => { if (x !== d) x.open = false; }); }, true);
  document.addEventListener('toggle', e => { const d = e.target; if (d instanceof HTMLDetailsElement && !d.open && d.matches('.xl-ex')) d.querySelectorAll('audio, video').forEach(a => a.pause()); }, true);

  /* Learn videos: the cover starts the video; one video at a time; finishing a video ticks "I watched this video";
     if the relay cannot play it, Drive's own player takes its place */
  document.addEventListener('click', e => { const c = e.target.closest?.('[data-xl-play]'); if (!c) return; const v = c.parentElement.querySelector('video'); c.parentElement.classList.add('is-on'); v?.play().catch(() => {}); });
  ['play', 'ended', 'error'].forEach(ev => document.addEventListener(ev, e => { const v = e.target; if (!(v instanceof HTMLVideoElement) || !v.closest('.xl-frame')) return; const f = v.closest('.xl-frame');
    if (ev === 'play') { f.classList.add('is-on'); document.querySelectorAll('.xl-frame video, .xp audio').forEach(x => { if (x !== v && !x.paused) x.pause(); }); }
    if (ev === 'ended') { const box = document.querySelector(`input[data-save="${CSS.escape(v.dataset.xlK || '')}"]`); if (box && !box.checked) { box.checked = true; box.dispatchEvent(new Event('change', { bubbles: true })); } }
    if (ev === 'error' && f.dataset.xlDrive) { f.classList.add('is-on'); f.innerHTML = `<iframe src="https://drive.google.com/file/d/${f.dataset.xlDrive}/preview" title="${v.title.replace(/"/g, '&quot;')}" allow="autoplay; fullscreen" allowfullscreen></iframe>`; } }, true));

  /* the live word count under a writing box */
  document.addEventListener('input', e => { const t = e.target; if (!t.matches?.('.xl-write textarea')) return; const box = t.closest('.xl-write'), n = t.value.trim() ? t.value.trim().split(/\s+/).length : 0, min = +box.dataset.xlMin || 0;
    const c = box.querySelector('.xl-count'); c.innerHTML = `<b>${n}</b> word${n === 1 ? '' : 's'}${min ? ` <span>of at least ${min}</span>` : ''}`; c.classList.toggle('is-ok', !!min && n >= min); });

  /* true or false in a Learn lesson: the answer and why, as soon as a button is pressed (nothing is saved or marked) */
  document.addEventListener('click', e => { const b = e.target.closest?.('[data-xl-tf]'); if (!b) return; const li = b.closest('li'), right = li.dataset.xlAns === b.dataset.xlTf;
    li.querySelectorAll('[data-xl-tf]').forEach(x => { x.classList.toggle('is-pick', x === b); x.classList.toggle('is-ans', x.dataset.xlTf === li.dataset.xlAns); });
    li.classList.toggle('is-right', right); li.classList.toggle('is-wrong', !right);
    const w = li.querySelector('.xl-why'); w.hidden = false; w.querySelector('.xl-verdict').textContent = right ? 'Right.' : `Not quite: it’s ${li.dataset.xlAns === 'T' ? 'true' : 'false'}.`; });

  function page(L, ctx) {
    const { esc, icon } = ctx, val = k => ctx.val(k) ?? '';
    if (L.learn) return learnPage(L, ctx);
    const fmt = t => esc(String(t ?? '')).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[^*\w])\*([^*\n]+?)\*(?![*\w])/g, '$1<i>$2</i>').replace(/==(.+?)==/g, '<mark>$1</mark>');
    const acts = (L.sections || []).flatMap(s => s.activities || []);
    const test = acts.flatMap(a => a.blocks || []).find(b => b.type === 'ieTest') || { blocks: acts.flatMap(a => a.blocks || []).filter(b => isQ(b) || b.type === 'figure'), audios: [] };
    const blocks = test.blocks || [], audios = (test.audios || (test.audio ? [test.audio] : [])).filter(a => a && a.src);
    const scriptAct = acts.find(a => a.id === 'script'), qs = blocks.filter(isQ);
    /* a reading passage: paragraphs split by a blank line; "A  " (a letter and two spaces) labels a paragraph, "### " is a heading inside it */
    const P = test.passage, pfmt = t => fmt(t).replace(/_(.+?)_/g, '<i>$1</i>');
    const READ = !!(P && P.text && !audios.length);   // a reading exercise: the passage beside the questions
    const readTips = () => `<section class="xs-rtips" aria-label="Before you read"><span class="xs-rtips-k">How to do it</span><ol>
      <li><b>Skim</b><span>Read the title and the first lines of each paragraph: about one minute.</span></li>
      <li><b>One question at a time</b><span>Predict the answer, then find the place in the passage.</span></li>
      <li><b>Check</b><span>Word limit, spelling and grammar. Then open the answers and mark yourself.</span></li></ol></section>`;
    const passageHTML = P && P.text ? `<article class="xs-text${P.scroll === false ? '' : ' is-scroll'}"><header class="xs-text-h"><span class="xs-text-k">${esc(P.label || 'Reading passage')}</span>${P.title ? `<h3>${esc(P.title)}</h3>` : ''}${P.subtitle ? `<p>${esc(P.subtitle)}</p>` : ''}</header>
      <div class="xs-text-b" tabindex="0" role="region" aria-label="${esc(P.title || 'The passage')}">${String(P.text).split(/\n\s*\n/).map(par => { const t = par.trim(); if (t.startsWith('### ')) { const [h, ...rest] = t.slice(4).split('\n'); return `<h4>${pfmt(h)}</h4>${rest.join(' ').trim() ? `<p>${pfmt(rest.join('\n')).replace(/\n/g, '<br>')}</p>` : ''}`; } if (t.startsWith('* ')) return `<p class="xs-text-fn">${pfmt(t.slice(2))}</p>`;
        const m = t.match(/^([A-Z])\s{2,}([\s\S]*)$/); return m ? `<p class="has-l"><span class="xs-text-l">${m[1]}</span>${pfmt(m[2]).replace(/\n/g, '<br>')}</p>` : `<p>${pfmt(t).replace(/\n/g, '<br>')}</p>`; }).join('')}</div></article>` : '';
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
      const bars = [...Array(72)].map((_, j) => { seed = (seed * 1103515245 + 12345) >>> 0; const r = (seed >>> 8) / 16777216, env = .5 + .5 * Math.sin(j / 71 * Math.PI); return `<i style="height:${Math.round(16 + 78 * r * env)}%"></i>`; }).join('');
      const hp = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13" width="4.4" height="7" rx="1.8"/><rect x="16.6" y="13" width="4.4" height="7" rx="1.8"/></svg>';
      return `<div class="xs-player xp" data-key="${esc(id || a.src)}" data-fallback="${esc(relay ? direct : '')}" data-title="${esc(`${audios.length > 1 ? `Recording ${i + 1}` : 'Recording'} · ${range}`)}">
        <audio preload="metadata" src="${esc(relay || direct)}" title="${esc(a.title || 'Recording')}"></audio>
        <div class="xp-top"><span class="xp-cover" aria-hidden="true">${hp}<span class="xp-eq"><i></i><i></i><i></i><i></i></span></span>
          <span class="xp-meta"><span class="xp-over">${audios.length > 1 ? `Recording ${i + 1} of ${audios.length}` : 'Recording'}</span><b class="xp-title">${a.note ? esc(a.note) : esc(range)}</b><small class="xp-note">${esc(range)}${extra ? ` · ${esc(extra[1])}` : ''}</small></span>
          <em class="xp-state" aria-live="polite"></em></div>
        <div class="xp-wave"><div class="xp-bars" aria-hidden="true">${bars}</div><div class="xp-bars is-on" aria-hidden="true">${bars}</div><span class="xp-knob" aria-hidden="true"></span><span class="xp-tip" aria-hidden="true">0:00</span><input type="range" class="xp-seek" min="0" max="1000" step="1" value="0" aria-label="Position in the recording"></div>
        <div class="xp-times"><span class="xp-t">0:00</span><span class="xp-d">--:--</span></div>
        <div class="xp-ctrl">
          <button type="button" class="xp-speed" data-xp="speed" aria-label="Playback speed">1×</button>
          <span class="xp-mid"><button type="button" class="xp-skip" data-xp="-10" aria-label="Back 10 seconds">${skip(false, 10)}</button>
          <button type="button" class="xp-play" aria-label="Play the recording"><span class="xp-i-play">${I('<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/>')}</span><span class="xp-i-pause">${I('<path d="M9 6v12M15 6v12"/>', 3)}</span><span class="xp-i-again">${I('<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.2 3.8v3.6h3.6"/>', 2.4)}</span><span class="xp-spin" aria-hidden="true"></span></button>
          <button type="button" class="xp-skip" data-xp="+10" aria-label="Forward 10 seconds">${skip(true, 10)}</button></span>
          <span class="xp-vol"><button type="button" class="xp-mute" data-xp="mute" aria-label="Mute">${I('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path class="xp-wv" d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>', 1.9)}</button><input type="range" class="xp-volume" min="0" max="1" step="0.05" value="1" aria-label="Volume"></span>
        </div>
        <div class="xp-resume" hidden><span>You stopped at <b class="xp-rt">0:00</b></span><button type="button" data-xp="resume">Continue</button><button type="button" data-xp="restart">Start again</button></div>
        <p class="xp-msg" hidden>This recording could not play here. ${id ? `<a href="https://drive.google.com/file/d/${id}/view" target="_blank" rel="noopener">Open it in Google Drive</a>` : ''}</p></div>`; };

    /* ── one answer field: typed, or a letter ──
       A letter answer is a "Choose" box: the face shows "Choose" (or the letter and its option), and a transparent native
       select over it opens the phone's or computer's own list, which shows each letter with its option in full. */
    const optText = o => String(o ?? '').replace(/^[A-Z]\s+(?=\S)/, '').replace(/\*\*/g, '');
    const face = (v, letters, texts) => { const j = letters.indexOf(v); return v ? `<b>${esc(v)}</b>${texts && texts[j] ? `<small>${esc(optText(texts[j]))}</small>` : ''}` : '<span>Choose</span>'; };
    const picker = (k, n, letters, texts) => { const v = val(k);
      return `<span class="xs-pick${v ? ' has-v' : ''}"><span class="xs-pick-face" aria-hidden="true">${face(v, letters, texts)}</span><select data-save="${esc(k)}" aria-label="Question ${n}: choose a letter" data-texts="${esc(JSON.stringify((texts || []).map(optText)))}"><option value="">Choose…</option>${letters.map((x, j) => `<option value="${x}"${v === x ? ' selected' : ''}>${x}${texts && texts[j] ? ` — ${esc(optText(texts[j]))}` : ''}</option>`).join('')}</select></span>`; };
    const field = (k, n, ans, letters, texts) => letters ? `<label class="xs-gap is-letter"><span class="xs-gn">${n}</span>${picker(k, n, letters, texts)}</label>`
        : `<label class="xs-gap"><span class="xs-gn">${n}</span><input type="text" autocomplete="off" spellcheck="false" data-save="${esc(k)}" value="${esc(val(k))}" aria-label="Question ${n}" style="--w:${Math.max(7, Math.min(22, String(ans).split('|')[0].length + 3))}ch"></label>`;
    const filler = (b, c) => t => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\[\[(.+?)\]\]/g, (_, a) => { const i = c.i++; return field(`${b.id}-${i}`, (Number(b.from) || 1) + i, a, b.bank ? b.bank.map((_, j) => LET[j]) : null, b.bank); });
    const box = (title, opts, keys) => `<div class="xs-box">${title ? `<b class="xs-box-t">${esc(title)}</b>` : ''}<ul>${opts.map((o, j) => `<li><span class="xs-let">${keys[j]}</span><span>${fmt(String(o).replace(/^[A-Z]\s+(?=\S)/, ''))}</span></li>`).join('')}</ul></div>`;
    const range = b => { const f = Number(b.from) || 1, n = count(b); return n > 1 ? `Questions ${f}–${f + n - 1}` : `Question ${f}`; };
    const RULE = /\b(NO MORE THAN [A-Z ]+?(?: AND\/OR (?:A )?NUMBERS?)?|ONE WORD(?: AND\/OR A NUMBER)?(?: ONLY)?|A NUMBER ONLY|ONE OR TWO WORDS)\b/;
    const ruleOf = b => { const r = b.rule || (String(b.instruction || '').replace(/\*\*/g, '').match(RULE) || [])[1]; return r ? String(r).trim() : ''; };
    const rubric = b => { const r = ruleOf(b), how = b.type === 'ieChoice' || b.type === 'ieMulti' ? 'Choose letters' : b.type === 'ieMatch' || (b.bank && b.bank.length) ? 'Choose from a box' : b.type === 'ieTFNG' ? 'Choose an answer' : r ? 'Write words' : '';
      return `<div class="xs-rubric"><div class="xs-rubric-top"><span class="xs-range">${range(b)}</span>${how ? `<span class="xs-how">${esc(how)}</span>` : ''}</div>${b.instruction ? `<p>${fmt(b.instruction)}</p>` : ''}${r ? `<span class="xs-rule"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16z"/></svg>Word limit: <b>${esc(r.charAt(0) + r.slice(1).toLowerCase())}</b></span>` : ''}</div>`; };

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
          <div class="xs-diag-side">${b.bank ? box(b.bankTitle || 'Choose from', b.bank, letters) : ''}<div class="xs-labels">${labs.map((l, i) => `<div class="xs-lab">${l.text ? `<span>${esc(l.text)}</span>` : ''}${field(`${b.id}-${i}`, f + i, l.answer, letters, b.bank)}</div>`).join('')}</div></div></div></div>`; },
      ieChoice(b) { const f = Number(b.from) || 1;
        return `${rubric(b)}<ol class="xs-mcq">${(b.items || []).map((it, i) => { const k = `${b.id}-${i}`, v = val(k);
          return `<li class="xs-mq"><div class="xs-mq-q"><span class="xs-qn">${f + i}</span><p>${fmt(it.q)}</p></div><div class="xs-opts" role="radiogroup" aria-label="Question ${f + i}">${(it.options || []).map((o, j) =>
            `<label class="xs-opt"><input type="radio" name="${esc(k)}" value="${LET[j]}" data-save="${esc(k)}"${v === LET[j] ? ' checked' : ''}><span class="xs-let">${LET[j]}</span><span class="xs-ot">${fmt(o)}</span></label>`).join('')}</div></li>`; }).join('')}</ol>`; },
      ieMulti(b) { const pick = Number(b.pick) || (b.answers || []).length || 2;
        return `${rubric(b)}<div class="xs-mq is-multi" data-from="${Number(b.from) || 1}" data-n="${count(b)}"><div class="xs-mq-q"><span class="xs-qn is-wide">${range(b).replace('Questions ', '')}</span><p>${fmt(b.q)}<small>Choose ${['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'][pick] || pick} letters.${Number(b.numbers) === 1 ? ` You need ${pick === 2 ? 'both' : 'all of them'} for the mark.` : ''}</small></p></div>
          <div class="xs-opts">${(b.options || []).map((o, j) => { const k = `${b.id}-${LET[j]}`; return `<label class="xs-opt is-check"><input type="checkbox" data-save="${esc(k)}"${val(k) === true ? ' checked' : ''}><span class="xs-let">${LET[j]}</span><span class="xs-ot">${fmt(o)}</span></label>`; }).join('')}</div></div>`; },
      ieTFNG(b) { const f = Number(b.from) || 1, yn = b.kind === 'ynng', O = yn ? ['YES', 'NO', 'NOT GIVEN'] : ['TRUE', 'FALSE', 'NOT GIVEN'];
        const legend = (yn ? [['YES', 'if the statement agrees with the views or claims of the writer'], ['NO', 'if the statement contradicts the views or claims of the writer'], ['NOT GIVEN', 'if it is impossible to say what the writer thinks about this']]
          : [['TRUE', 'if the statement agrees with the information'], ['FALSE', 'if the statement contradicts the information'], ['NOT GIVEN', 'if there is no information on this']]);
        return `${rubric(b)}${b.legend === false ? '' : `<dl class="xs-tf-legend">${legend.map(([k, d]) => `<div><dt>${k}</dt><dd>${d}</dd></div>`).join('')}</dl>`}<ol class="xs-tfng">${(b.items || []).map((it, i) => { const k = `${b.id}-${i}`, v = String(val(k)).toUpperCase();
          return `<li><p class="xs-tf-q"><span class="xs-qn">${f + i}</span><span>${fmt(it.q)}</span></p><span class="xs-tf-o" role="radiogroup" aria-label="Question ${f + i}">${O.map(o => `<label class="xs-tfo"><input type="radio" name="${esc(k)}" value="${o}" data-save="${esc(k)}"${v === o ? ' checked' : ''}><span>${o}</span></label>`).join('')}</span></li>`; }).join('')}</ol>`; },
      ieMatch(b) { const f = Number(b.from) || 1, keys = (b.options || []).map((_, j) => b.numbering === 'roman' ? ROM[j] : LET[j]);
        return `${rubric(b)}<div class="xs-match">${box(b.boxTitle, b.options || [], keys)}<ol class="xs-mlist">${(b.items || []).map((it, i) => `<li><label class="xs-mrow"><span class="xs-gn">${f + i}</span><span class="xs-mq-t">${fmt(it.q)}</span>${picker(`${b.id}-${i}`, f + i, keys, b.options || [])}</label></li>`).join('')}</ol></div>`; },
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
    const body = parts.map((p, k) => `<section id="xs-p${k + 1}" class="xs-part${p.blocks.filter(isQ).length === 1 ? ' is-one' : ''}">${partRange(p) ? `<header class="xs-part-h"><span class="xs-part-n">${String(k + 1).padStart(2, '0')}</span><span class="xs-part-tx"><b>${partRange(p)}</b><small>${esc([...new Set(p.blocks.filter(isQ).map(kindOf).filter(Boolean))].join(' · '))}</small></span>${parts.length > 1 ? `<span class="xs-part-of">Section ${k + 1} of ${parts.length}</span>` : ''}</header>` : ''}${p.audios.length ? `<div class="xs-listen">${p.audios.map(q => player(q.a, q.i)).join('')}</div>` : ''}
      ${p.blocks.map((b, j) => `<div class="xs-q" data-hl="${esc(b.id || `fig-${j}-${String(b.src || '').split('/').pop()}`)}">${(R[b.type] || (() => ''))(b)}</div>`).join('')}</section>`).join('');

    /* ── the answer key ── */
    const alts = a => String(a).split('|').map(s => s.trim()).filter(Boolean);
    const key = [];
    qs.forEach(b => { const f = Number(b.from) || 1;
      if (b.type === 'ieGap' || b.type === 'ieTable' || b.type === 'ieDiagram') { const all = b.type === 'ieTable' ? (b.rows || []).flat().flatMap(gapsIn) : b.type === 'ieDiagram' ? (b.labels || []).map(l => l.answer) : gapsIn(b.text);
        all.forEach((a, i) => { if (b.bank) { const j = LET.indexOf(String(a).trim()); key.push({ n: f + i, main: a, also: [], note: b.bank[j] ? String(b.bank[j]).replace(/^[A-Z]\s+(?=\S)/, '') : '' }); }
          else { const [m, ...o] = alts(a); key.push({ n: f + i, main: m, also: o, why: (b.why || [])[i] }); } }); }
      else if (b.type === 'ieChoice') (b.items || []).forEach((it, i) => { const j = LET.indexOf(String(it.answer).toUpperCase()); key.push({ n: f + i, main: it.answer, also: [], note: it.options?.[j] || '', why: it.why }); });
      else if (b.type === 'ieTFNG') (b.items || []).forEach((it, i) => key.push({ n: f + i, main: it.answer, also: [], why: it.why }));
      else if (b.type === 'ieMatch') (b.items || []).forEach((it, i) => { const keys = (b.options || []).map((_, j) => b.numbering === 'roman' ? ROM[j] : LET[j]), j = keys.indexOf(String(it.answer)); key.push({ n: f + i, main: it.answer, also: [], note: String(b.options?.[j] || '').replace(/^[A-Z]\s+(?=\S)/, ''), why: it.why }); });
      else if (b.type === 'ieMulti') { const n = count(b); key.push({ n: n > 1 ? `${f}–${f + n - 1}` : f, main: (b.answers || []).join(', '), also: [], note: `${(b.answers || []).map(x => b.options?.[LET.indexOf(x)]).filter(Boolean).join('; ')} · in any order`, why: b.why, wide: true }); } });
    key.sort((a, b) => parseInt(a.n) - parseInt(b.n));
    const mk = k => `${L.id}-mk-${k.n}`, nMk = key.reduce((a, k) => a + (k.wide ? (String(k.n).includes('–') ? Number(String(k.n).split('–')[1]) - Number(String(k.n).split('–')[0]) + 1 : 1) : 1), 0);
    const scoreHTML = `<div class="xs-score" data-xs-score data-of="${nMk}"><span class="xs-score-tx"><b>Mark yourself.</b> Tick each answer you got right.</span><span class="xs-score-n"><b>${key.filter(k => ctx.val(mk(k)) === true).reduce((a, k) => a + (k.wide ? Number(String(k.n).split('–')[1] || k.n) - Number(String(k.n).split('–')[0]) + 1 : 1), 0)}</b> / ${nMk}</span></div>`;
    const keyHTML = scoreHTML + `<ol class="xs-key">${key.map(k => `<li class="${k.wide ? 'is-wide' : ''}"><label class="xs-mk" title="I got this right"><input type="checkbox" data-save="${esc(mk(k))}" data-w="${k.wide && String(k.n).includes('–') ? Number(String(k.n).split('–')[1]) - Number(String(k.n).split('–')[0]) + 1 : 1}"${ctx.val(mk(k)) === true ? ' checked' : ''}><span aria-hidden="true"></span><em class="xs-sr">I got question ${k.n} right</em></label><span class="xs-kn">${k.n}</span><span class="xs-ka"><b>${esc(k.main)}</b>${k.note ? `<small>${esc(k.note)}</small>` : ''}${k.also.length ? `<small class="xs-also">also accepted: ${k.also.map(esc).join(' · ')}</small>` : ''}${k.why ? `<small class="xs-kwhy">${fmt(k.why)}</small>` : ''}</span></li>`).join('')}</ol>`;

    /* ── the recording script (when the key has one) ── */
    const scr = [];
    (scriptAct?.blocks || []).forEach(b => {
      if (b.type === 'toggle') { const chat = (b.blocks || []).find(x => x.type === 'chat'); scr.push({ title: String(b.title || 'Recording script').replace(/^Recording script\s*·\s*/, ''), html: chat ? `<div class="xs-script">${(chat.lines || []).map(([who, said]) => `<p><b>${esc(who)}</b><span>${fmt(said)}</span></p>`).join('')}</div>` : (b.blocks || []).filter(x => x.type === 'text').map(x => `<div class="xs-script">${x.text}</div>`).join('') }); }
      else if (b.type === 'text') scr.push({ title: 'Script and answer key', link: true, html: `<div class="xs-script is-link">${b.text}</div>` }); });
    const scriptHTML = scr.length ? scr.map((s, i) => `<details class="xs-fold is-script"${i ? '' : ' id="xs-script"'}><summary><span class="xs-fold-ic">${icon('book')}</span><span class="xs-fold-tx"><b>Recording script</b><small>${esc(s.link ? 'In the teacher’s key on Google Drive' : s.title)}</small></span><i class="xs-chev" aria-hidden="true"></i></summary>${s.html}</details>`).join('') : '';

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
      return `<section id="xs-prep" class="xs-prep" aria-label="Before you play"><span class="xs-prep-k">Before you play</span>
        <ul class="xs-tips4">${items.map(([k, t, d]) => `<li class="${k === 'tip' ? 'is-tip' : ''}"><span class="xs-t4-ic">${ic(k)}</span><span><b>${esc(t)}</b>${esc(d)}</span></li>`).join('')}</ul></section>`; }
    /* ── the page ── */
    const sec = (L.sections || [])[0] || {}, doneAll = acts.length && acts.every(a => ctx.done(a.id));
    const crumbs = (ctx.trail || []).map(t => `<a href="${esc(t.href)}">${esc(t.label)}</a><span aria-hidden="true">›</span>`).join('');
    /* inside a Learn page: only the recording(s), the questions and the answers (see learnPage, 'exercises') */
    if (ctx.embed) return `<div class="xl-exbody">${passageHTML}${body}<details class="xs-fold is-key xl-key"${ctx.open ? ' open' : ''}><summary><span class="xs-fold-ic">${icon('check')}</span><span class="xs-fold-tx"><b>Answers</b><small>Open them when you have finished</small></span><i class="xs-chev" aria-hidden="true"></i></summary><p class="xs-key-note">Spelling counts; capital letters do not. Other right answers are shown underneath.</p>${keyHTML}</details></div>`;
    return `<article class="xs" style="--xs-soft:${ctx.soft || '#e6f3f1'}${ctx.acc ? `;--xs-acc:${ctx.acc}` : ''}" data-total="${total}">

      <nav class="xs-trail" aria-label="Where you are">${ctx.back ? `<a class="xs-back" href="${esc(ctx.back.href)}">${icon('left')}<span>${esc(ctx.back.label)}</span></a>` : ''}<span class="xs-crumbs">${crumbs}<b>${esc(ctx.name || '')}</b></span></nav>
      <header class="xs-hero"><div class="xs-hero-tx"><span class="xs-eyebrow">${esc(ctx.eyebrow || 'Listening')}</span><h1>${esc(L.title)}</h1>${L.journey ? `<p>${esc(L.journey)}</p>` : ''}
        <ul class="xs-facts"><li><b>${total}</b> questions</li>${READ ? `<li><b>1</b> passage</li>${L.duration ? `<li>${esc(L.duration)}</li>` : ''}` : `<li><b>${audios.length || 1}</b> recording${audios.length === 1 ? '' : 's'}</li>`}${kinds.map(k => `<li>${esc(k)}</li>`).join('')}</ul></div>
        ${window.IELTSSheetArt ? window.IELTSSheetArt(L.illus) : ''}</header>
      <div class="xs-bar" data-xs-nav aria-label="Your progress in this exercise"><b class="xs-bar-t">${esc(L.title)}</b>
        <nav class="xs-bar-in" aria-label="Parts of this exercise">${READ ? '<a href="#xs-passage" data-xs-jump class="is-passage"><i>P</i><span>Passage</span></a>' : ''}${parts.map((p, k) => partRange(p) ? `<a href="#xs-p${k + 1}" data-xs-jump><i>${k + 1}</i><span>${partRange(p).replace('Questions ', 'Q ').replace('Question ', 'Q ')}</span></a>` : '').join('')}${scriptHTML ? `<a href="#xs-script" data-xs-jump><i>${parts.length + 1}</i><span>Script</span></a>` : ''}</nav>
        <span class="xs-strip-n xs-bar-n"><b>0</b> / ${total}<small> answered</small></span><button type="button" class="xs-bar-go" data-xs-answers>Answers</button><span class="xs-strip-bar xs-bar-line" aria-hidden="true"><i></i></span></div>
      ${READ ? `${readTips()}<div class="xs-read"><div class="xs-read-p" id="xs-passage">${passageHTML}</div><div class="xs-read-q">${body}</div></div>` : `${passageHTML ? passageHTML : prep()}
      ${body}`}
      <section class="xs-end" aria-label="Answers">
        <details id="xs-key" class="xs-fold is-key"${ctx.open ? ' open' : ''}><summary><span class="xs-fold-ic">${icon('check')}</span><span class="xs-fold-tx"><b>Check your answers</b><small>Open the answer key when you have finished</small></span><i class="xs-chev" aria-hidden="true"></i></summary>
          ${(() => { const m = window.IELTS_GATE?.member, L = m && m.lang && m.lang !== 'en' && window.IELTSCharacter?.lang(m.lang); return L ? `<p class="xs-l1"><bdi lang="${L.code}" dir="${L.rtl ? 'rtl' : 'ltr'}">${esc(L.done)}</bdi> <span>Time to check your answers.</span></p>` : ''; })()}<p class="xs-key-note">Compare each answer with yours. Spelling counts; capital letters do not. Where more than one answer is right, the others are shown underneath.</p>${keyHTML}</details>
        ${scriptHTML}
        <footer class="xs-foot"><label class="xs-done"><input type="checkbox" data-sheet-done${doneAll ? ' checked' : ''}><span>I have finished this exercise</span></label>
          <span class="xs-nav">${ctx.back ? `<a class="btn-quiet" href="${esc(ctx.back.href)}">${icon('left')}All exercises</a>` : ''}${ctx.next ? `<a class="btn" href="${esc(ctx.next.href)}">${esc(ctx.next.label)} ${icon('arrow')}</a>` : ''}</span></footer>
      </section></article>`;
  }
  /* the "Choose" box shows the chosen letter (and its option) as soon as it changes */
  document.addEventListener('change', e => { const sel = e.target.closest?.('.xs-pick select'); if (!sel) return; const box = sel.parentElement, v = sel.value;
    let texts = []; try { texts = JSON.parse(sel.dataset.texts || '[]'); } catch (err) { /* none */ }
    const j = [...sel.options].findIndex(o => o.value === v) - 1, t = j >= 0 ? texts[j] : '';
    const esc2 = x => String(x ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
    box.classList.toggle('has-v', !!v); box.querySelector('.xs-pick-face').innerHTML = v ? `<b>${esc2(v)}</b>${t ? `<small>${esc2(t)}</small>` : ''}` : '<span>Choose</span>'; });
  /* an exercise: the sticky bar jumps to each set of questions and lights up the one on screen */
  document.addEventListener('click', e => { const a = e.target.closest?.('[data-xs-jump]'); if (!a) return; const el = document.getElementById(a.getAttribute('href').slice(1)); if (!el) return; e.preventDefault();
    if (el.tagName === 'DETAILS') el.open = true; const bar = document.querySelector('[data-xs-nav]'); scrollTo({ top: el.getBoundingClientRect().top + scrollY - (document.querySelector('.masthead')?.offsetHeight || 0) - (bar?.offsetHeight || 0) - 14, behavior: 'smooth' }); });
  let xsQ = false;
  const xsSpy = () => { xsQ = false; const bar = document.querySelector('[data-xs-nav]'); if (!bar) return; const top = document.querySelector('.masthead')?.offsetHeight || 0; bar.style.top = top + 'px';
    bar.classList.toggle('is-stuck', bar.getBoundingClientRect().top <= top + 1); const links = [...bar.querySelectorAll('[data-xs-jump]')], line = top + bar.offsetHeight + 120; let on = -1;
    links.forEach((l, i) => { const el = document.getElementById(l.getAttribute('href').slice(1)); if (el && el.getBoundingClientRect().top < line) on = i; });
    links.forEach((l, i) => l.classList.toggle('is-on', i === on)); };
  addEventListener('scroll', () => { if (!xsQ) { xsQ = true; requestAnimationFrame(xsSpy); } }, { passive: true }); addEventListener('resize', () => requestAnimationFrame(xsSpy)); addEventListener('hashchange', () => setTimeout(xsSpy, 400)); setTimeout(xsSpy, 600);
  /* mark yourself: ticks in the answer key add up to a score */
  document.addEventListener('change', e => { const c = e.target.closest?.('.xs-mk input'); if (!c) return; const key = c.closest('.xs-fold, .xl-key'), box = key?.querySelector('[data-xs-score]'); if (!box) return;
    const n = [...key.querySelectorAll('.xs-mk input:checked')].reduce((a, x) => a + (+x.dataset.w || 1), 0), of = +box.dataset.of || 0; box.querySelector('.xs-score-n b').textContent = n; box.classList.toggle('is-done', of && n >= of); });
  window.IELTSSheet = { page };
})();
