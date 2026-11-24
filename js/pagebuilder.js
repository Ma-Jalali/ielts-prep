/* IELTS Prep · page builder: the teacher builds and edits Learn-style pages (the ones drawn by js/sheet.js learnPage:
   tabs, folds, cards, steps, tips, tables, model answers, writing boxes …) right on the page, then publishes them.

   HOW IT IS USED
   - Studio must be on (#/studio, teacher account). Switch on "Edit" in the Studio dock and open a Learn page:
     every element gets a toolbar (move, duplicate, delete, Edit) and every list an "Add" button.
   - "Edit" opens a form for that element (plain fields; a JSON tab for anything else).
   - Every change is saved at once as a draft on this device (the same drafts as Studio: '<course>-studio-drafts').
   - "Publish" saves the page online (Supabase table ielts_pages): students see it the next time they open the site.
     "Unpublish" hides it again; "Discard draft" goes back to the published (or file) version.
   - "New lesson" / "New task" (on a Writing section page while Studio is on) creates a page and opens it here.

   app.js creates it (window.createPageBuilder) only for the teacher with Studio on, and js/sheet.js asks it for the
   toolbars (wrap, addHTML), the page bar (barHTML) and the tab/fold state (ui). */
window.createPageBuilder = function ({ lesson, course, days, esc, icon, toast, rerender, editing }) {
  const K_DRAFTS = course.id + '-studio-drafts', K_EDIT = course.id + '-studio-edit', K_UI = 'pb-ui-' + lesson.id;
  const ls = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { toast('Could not save on this device (storage is full).'); return false; } } };
  const clone = o => JSON.parse(JSON.stringify(o));
  const G = () => window.IELTS_GATE;
  const online = () => (window.IELTS_PAGES || []).find(p => p.id === lesson.id) || null;
  const isDraft = () => !!(ls.get(K_DRAFTS, {}).lessons || {})[lesson.id];
  const meta = days.find(d => d.id === lesson.id) || {};

  /* ───────── the element catalogue: name, icon, what it is, a starter, and the fields of its form ───────── */
  const ICONS = ['tip', 'info', 'warn', 'ok', 'star', 'target', 'list', 'pen', 'book', 'eye', 'ear', 'clock', 'chat', 'speak', 'people', 'mic', 'lecture', 'map', 'hash', 'abc', 'repeat', 'signpost', 'play'];
  const ILLUS = ['books', 'laptop', 'survey', 'grad', 'chat', 'globe', 'science', 'eco', 'health', 'people', 'family', 'home', 'map', 'conference', 'robot', 'camera', 'arts', 'music', 'food', 'sport', 'phone', 'headset', 'stamp', 'watch', 'train', 'bus', 'boat', 'mountain', 'suitcase', 'tv', 'radio', 'clothes'];
  const HEAD = [{ k: 'kicker', label: 'Small label above the title', top: true }, { k: 'title', label: 'Title' }, { k: 'intro', label: 'Introduction', type: 'textarea', rows: 2 }];
  const T = {
    text: { name: 'Text', ic: 'list', d: 'Paragraphs of text.', start: { type: 'text', text: 'Write your text here. Use **bold** and *italic*.\n\nA blank line starts a new paragraph.' }, f: [{ k: 'text', label: 'Text', type: 'textarea', rows: 8 }] },
    note: { name: 'Tip box', ic: 'tip', d: 'A coloured box: a tip, a warning or information.', start: { type: 'note', tone: 'tip', title: 'Tip', text: 'Write the tip here.' }, noHead: true,
      f: [{ k: 'tone', label: 'Colour', type: 'select', options: [['tip', 'Tip (yellow)'], ['info', 'Information (blue-green)'], ['warn', 'Warning (red)']] }, { k: 'title', label: 'Title' }, { k: 'text', label: 'Text', type: 'textarea', rows: 5 }] },
    list: { name: 'Checklist', ic: 'ok', d: 'A list of points with ticks.', start: { type: 'list', title: 'Remember', items: ['First point', 'Second point', 'Third point'] }, f: [{ k: 'items', label: 'Points (one per line)', type: 'lines' }] },
    steps: { name: 'Numbered steps', ic: 'hash', d: 'Steps in order, with a line joining them.', start: { type: 'steps', title: 'How to do it', items: [{ t: 'First step', d: 'What to do.' }, { t: 'Second step', d: 'What to do next.' }, { t: 'Third step', d: 'And then …' }] },
      f: [{ k: 'items', label: 'Steps', type: 'items', add: { t: 'New step', d: '' }, fields: [{ k: 't', label: 'Step' }, { k: 'd', label: 'Details (a new line for each point)', type: 'textarea', rows: 3, lines: true }] }] },
    cards: { name: 'Tip cards', ic: 'star', d: 'Small cards with an icon, side by side.', start: { type: 'cards', title: 'Key points', items: [{ icon: 'target', t: 'First point', d: 'A short explanation.' }, { icon: 'clock', t: 'Second point', d: 'A short explanation.' }] },
      f: [{ k: 'cols', label: 'Layout', type: 'select', options: [['', 'As many as fit'], ['2', 'Two columns']] }, { k: 'items', label: 'Cards', type: 'items', add: { icon: 'tip', t: 'New card', d: '' }, fields: [{ k: 'icon', label: 'Icon', type: 'select', options: ICONS.map(x => [x, x]) }, { k: 't', label: 'Title' }, { k: 'd', label: 'Text', type: 'textarea', rows: 2 }] }] },
    tabs: { name: 'Tabs', ic: 'list', d: 'Topics side by side; one shows at a time. Add elements inside each tab.', start: { type: 'tabs', title: 'Tips', items: [{ label: 'First tab', icon: 'info', blocks: [{ type: 'text', text: 'Content of the first tab.' }] }, { label: 'Second tab', icon: 'tip', blocks: [{ type: 'text', text: 'Content of the second tab.' }] }] },
      f: [{ k: 'items', label: 'Tabs (their content is edited on the page)', type: 'items', add: { label: 'New tab', icon: 'tip', blocks: [] }, keep: ['blocks'], fields: [{ k: 'label', label: 'Tab name' }, { k: 'icon', label: 'Icon', type: 'select', options: [['', 'No icon'], ...ICONS.map(x => [x, x])] }, { k: 'lead', label: 'First line in the tab', type: 'textarea', rows: 2 }] }] },
    folds: { name: 'Toggle list', ic: 'eye', d: 'Sections that open and close (one at a time). Add elements inside each.', start: { type: 'folds', items: [{ title: 'First section', sub: 'A short description', icon: 'book', blocks: [{ type: 'text', text: 'What opens here.' }] }, { title: 'Second section', sub: '', icon: 'tip', blocks: [{ type: 'text', text: 'What opens here.' }] }] },
      f: [{ k: 'items', label: 'Sections (their content is edited on the page)', type: 'items', add: { title: 'New section', sub: '', icon: 'tip', blocks: [] }, keep: ['blocks'], fields: [{ k: 'title', label: 'Title' }, { k: 'sub', label: 'Small line under the title' }, { k: 'icon', label: 'Icon', type: 'select', options: [['', 'No icon'], ...ICONS.map(x => [x, x])] }] }] },
    table: { name: 'Table', ic: 'hash', d: 'Rows and columns.', start: { type: 'table', head: ['Column 1', 'Column 2'], rows: [['Row 1', 'Text'], ['Row 2', 'Text']] },
      f: [{ k: 'head', label: 'Column headings (separate with |)', type: 'cells' }, { k: 'rows', label: 'Rows (one row per line; separate the cells with |)', type: 'rows' }, { k: 'foot', label: 'Line under the table' }, { k: 'wide', label: 'Width', type: 'select', options: [['', 'Normal'], ['1', 'Full width']], bool: true }] },
    facts: { name: 'Key numbers', ic: 'star', d: 'Big numbers or words with a short label.', start: { type: 'facts', title: 'At a glance', items: [['150', 'words at least'], ['20', 'minutes'], ['1', 'chart or diagram']] },
      f: [{ k: 'items', label: 'One per line: big | small', type: 'pairs' }] },
    chips: { name: 'Word chips', ic: 'abc', d: 'Words or phrases as chips, in groups.', start: { type: 'chips', title: 'Useful language', groups: [{ label: 'Describing a rise', items: ['rise', 'increase', 'grow', 'climb'] }] },
      f: [{ k: 'tone', label: 'Colour', type: 'select', options: [['', 'White'], ['warn', 'Yellow']] }, { k: 'groups', label: 'Groups', type: 'items', add: { label: '', items: [] }, fields: [{ k: 'label', label: 'Group name' }, { k: 'items', label: 'Words (one per line)', type: 'lines' }] }] },
    faq: { name: 'Questions and answers', ic: 'info', d: 'Questions that open to show the answer.', start: { type: 'faq', title: 'Questions students ask', items: [{ q: 'A question?', a: 'The answer.' }] },
      f: [{ k: 'items', label: 'Questions', type: 'items', add: { q: 'New question?', a: '' }, fields: [{ k: 'q', label: 'Question' }, { k: 'a', label: 'Answer', type: 'textarea', rows: 3 }] }] },
    model: { name: 'Model answer', ic: 'pen', d: 'A sample answer on paper, with notes; can be hidden until tapped.', start: { type: 'model', title: 'A model answer', label: 'Band 8 answer', text: 'Paste the model answer here.\n\nA blank line starts a new paragraph.', words: '', notes: ['Why this is a good answer.'], fold: true },
      f: [{ k: 'label', label: 'Label on the paper (e.g. Band 8 answer)' }, { k: 'text', label: 'The answer', type: 'textarea', rows: 10 }, { k: 'words', label: 'Word count line (e.g. 172 words)' }, { k: 'notes', label: 'Notes under it (one per line)', type: 'lines' },
        { k: 'fold', label: 'Show', type: 'select', options: [['1', 'Hidden until the student taps'], ['', 'Always shown']], bool: true }, { k: 'show', label: 'Button text when hidden' }] },
    write: { name: 'Writing box', ic: 'pen', d: 'A task with a box to write in and a live word count (saved for the student).', start: { type: 'write', title: 'Your turn', label: 'Writing Task 2', prompt: 'Write the task here.', minutes: 40, minWords: 250 },
      f: [{ k: 'label', label: 'Label (e.g. Writing Task 1)' }, { k: 'prompt', label: 'The task', type: 'textarea', rows: 5 }, { k: 'src', label: 'Picture link (a chart or diagram; optional)' }, { k: 'minutes', label: 'Minutes', type: 'number' }, { k: 'minWords', label: 'At least … words', type: 'number' }, { k: 'rows', label: 'Height of the box (lines)', type: 'number' }] },
    image: { name: 'Picture', ic: 'eye', d: 'A picture from a link, with a caption.', start: { type: 'image', src: '', alt: '', caption: '' }, noHead: true,
      f: [{ k: 'src', label: 'Picture link (https://…)' }, { k: 'alt', label: 'What the picture shows (for screen readers)' }, { k: 'caption', label: 'Caption' }, { k: 'size', label: 'Size', type: 'select', options: [['', 'Normal'], ['small', 'Small'], ['wide', 'Full width']] }] },
    check: { name: 'True or false?', ic: 'ok', d: 'Statements; the student taps True or False and sees why.', start: { type: 'check', title: 'True or false?', items: [{ s: 'A statement.', answer: true, why: 'Why.' }] },
      f: [{ k: 'items', label: 'Statements', type: 'items', add: { s: 'New statement.', answer: true, why: '' }, fields: [{ k: 's', label: 'Statement' }, { k: 'answer', label: 'Answer', type: 'select', options: [['1', 'True'], ['', 'False']], bool: true }, { k: 'why', label: 'Why' }] }] },
    reveal: { name: 'Show the answer', ic: 'eye', d: 'Questions; the answer appears on a tap.', start: { type: 'reveal', title: 'Try it', items: [{ q: 'A question.', a: 'The answer.' }] },
      f: [{ k: 'items', label: 'Questions', type: 'items', add: { q: 'New question.', a: '' }, fields: [{ k: 'q', label: 'Question' }, { k: 'a', label: 'Answer', type: 'textarea', rows: 2 }] }] },
    videos: { name: 'Videos', ic: 'play', d: 'Videos from Google Drive, played in the page.', start: { type: 'videos', title: 'Watch', items: [{ title: 'Video title', note: '', src: '' }] },
      f: [{ k: 'items', label: 'Videos', type: 'items', add: { title: 'New video', note: '', src: '' }, fields: [{ k: 'title', label: 'Title' }, { k: 'note', label: 'One line about it' }, { k: 'src', label: 'Google Drive link' }] }] },
    divider: { name: 'Divider', ic: 'list', d: 'A line between parts, with an optional label.', start: { type: 'divider', title: '' }, noHead: true, f: [{ k: 'title', label: 'Label on the line (optional)' }] },
    spot: { name: 'Spot the trap', ic: 'chat', d: 'A short dialogue and a question (edit in JSON).', start: { type: 'spot', title: 'Try it', items: [{ lines: [['A', 'First line.'], ['B', 'Second line.']], q: 'The question?', options: ['Option one', 'Option two'], answer: 0, why: 'Why.' }] }, f: [] },
    exercises: { name: 'Exercises', ic: 'pen', d: 'Exercises with a recording and questions (edit in JSON).', start: { type: 'exercises', title: 'Practise', items: [] }, f: [] },
    parts: { name: 'Four parts', ic: 'list', d: 'The four parts of a test (edit in JSON).', start: { type: 'parts', items: [] }, f: [] }
  };
  const ADDABLE = ['text', 'note', 'list', 'steps', 'cards', 'tabs', 'folds', 'table', 'facts', 'chips', 'faq', 'model', 'write', 'image', 'check', 'reveal', 'videos', 'divider', 'spot'];
  const nameOf = t => T[t]?.name || t;

  /* ───────── paths ('blocks.2.items.0.blocks.1') ───────── */
  const parts = p => String(p).split('.').filter(Boolean).map(k => /^\d+$/.test(k) ? +k : k);
  const at = p => parts(p).reduce((o, k) => (o == null ? o : o[k]), lesson.learn);
  const listOf = p => { const a = parts(p), i = a.pop(); return [a.reduce((o, k) => o?.[k], lesson.learn), i]; };

  /* ───────── drafts and undo ───────── */
  const undo = [];
  function saveDraft() {
    const d = ls.get(K_DRAFTS, {}); d.lessons = d.lessons || {}; d.lessons[lesson.id] = clone(lesson); d.saved = d.saved || {}; d.saved[lesson.id] = Date.now();
    const day = (d.days || []).find(x => x.id === lesson.id); if (day) { day.title = lesson.title; day.sub = lesson.learn?.sub || ''; }
    ls.set(K_DRAFTS, d);
  }
  function change(fn) { undo.push(JSON.stringify(lesson)); if (undo.length > 60) undo.shift(); fn(); saveDraft(); rerender(); }
  function doUndo() { if (!undo.length) { toast('Nothing to undo.'); return; } const prev = JSON.parse(undo.pop()); Object.keys(lesson).forEach(k => delete lesson[k]); Object.assign(lesson, prev); saveDraft(); rerender(); }

  /* the open tab / fold / exercise, kept while you edit (the page is drawn again after every change) */
  const uiS = (() => { try { return JSON.parse(sessionStorage.getItem(K_UI) || '{}'); } catch (e) { return {}; } })(); uiS.tab = uiS.tab || {}; uiS.open = uiS.open || {};
  const keepUI = () => { try { sessionStorage.setItem(K_UI, JSON.stringify(uiS)); } catch (e) { /* ignore */ } };
  const ui = { tab: p => uiS.tab[p] || 0, open: p => !!uiS.open[p] };

  /* ───────── what js/sheet.js draws in edit mode ───────── */
  const S = (p, w = 2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const IC = { up: S('<path d="M12 19V5M6 11l6-6 6 6"/>'), down: S('<path d="M12 5v14M6 13l6 6 6-6"/>'), copy: S('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>'),
    del: S('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'), edit: S('<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>'), plus: S('<path d="M12 5v14M5 12h14"/>', 2.4),
    cloud: S('<path d="M7 18h11a4 4 0 0 0 .5-8 6 6 0 0 0-11.6 1.5A3.5 3.5 0 0 0 7 18z"/><path d="M12 11v6M9.5 13.5 12 11l2.5 2.5"/>'), off: S('<path d="M3 3l18 18M10.6 6.2A6 6 0 0 1 18.5 10 4 4 0 0 1 21 16M18 18H7a3.5 3.5 0 0 1-.9-6.9"/>'), undo: S('<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>'),
    gear: S('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>', 1.6), trash: S('<path d="M4 7h16M6 7l1 13h10l1-13M9 7V4h6v3"/>') };
  function wrap(b, path, html, top) {
    const [arr, i] = listOf(path);
    return `<div class="pb-blk${top ? ' is-top' : ''}" data-pb="${esc(path)}"><div class="pb-tools" role="toolbar" aria-label="${esc(nameOf(b.type))}"><span class="pb-type">${esc(nameOf(b.type))}</span>
      <button type="button" data-pb-act="edit" class="is-main" title="Edit">${IC.edit}<span>Edit</span></button>
      <button type="button" data-pb-act="up" title="Move up"${i === 0 ? ' disabled' : ''}>${IC.up}</button><button type="button" data-pb-act="down" title="Move down"${i >= (arr?.length || 1) - 1 ? ' disabled' : ''}>${IC.down}</button>
      <button type="button" data-pb-act="dup" title="Duplicate">${IC.copy}</button><button type="button" data-pb-act="del" title="Delete">${IC.del}</button></div>${html}</div>`;
  }
  const addHTML = (base, top) => `<div class="pb-addrow${top ? ' is-top' : ''}"><button type="button" data-pb-addat="${esc(base)}">${IC.plus}<span>${top ? 'Add a section' : 'Add an element here'}</span></button></div>`;
  function barHTML() {
    const on = online(), draft = isDraft(), file = !!meta.scripts?.length || (!on && !meta.draft);
    const state = draft ? (on ? 'Changes on this device: not published yet' : 'Draft on this device: not published yet') : on ? (on.published ? 'Published: students can see it' : 'Online, hidden from students') : file ? 'From the site files' : 'Not published';
    return `<div class="pbb" role="toolbar" aria-label="Page builder"><span class="pbb-k">Page builder</span><span class="pb-state${draft ? ' is-draft' : on?.published ? ' is-live' : ''}">${esc(state)}</span>
      <span class="pbb-acts"><button type="button" data-pb-page="settings">${IC.gear}<span>Page settings</span></button><button type="button" data-pb-page="undo"${undo.length ? '' : ' disabled'}>${IC.undo}<span>Undo</span></button>
      ${draft ? `<button type="button" data-pb-page="discard">${IC.trash}<span>Discard draft</span></button>` : ''}
      ${on?.published && !draft ? `<button type="button" data-pb-page="unpublish">${IC.off}<span>Unpublish</span></button>` : ''}
      <button type="button" class="is-main" data-pb-page="publish"${!draft && on?.published ? ' disabled' : ''}>${IC.cloud}<span>${on?.published ? 'Publish changes' : 'Publish'}</span></button></span></div>`;
  }

  /* ───────── the side panel: a form for one element, or for the page ───────── */
  let panel = null, work = null, target = null, tab = 'form';
  const field = (f, v, name) => {
    const id = 'pb-f-' + name.replace(/[^\w-]/g, '_'), L = `<label for="${id}">${esc(f.label)}</label>`;
    if (f.type === 'textarea') return `<div class="pb-f">${L}<textarea id="${id}" rows="${f.rows || 4}" data-pbf="${esc(name)}">${esc(f.lines && Array.isArray(v) ? v.join('\n') : v ?? '')}</textarea></div>`;
    if (f.type === 'select') return `<div class="pb-f">${L}<select id="${id}" data-pbf="${esc(name)}">${f.options.map(([k, t]) => `<option value="${esc(k)}"${String(f.bool ? (v ? '1' : '') : v ?? '') === k ? ' selected' : ''}>${esc(t)}</option>`).join('')}</select></div>`;
    if (f.type === 'number') return `<div class="pb-f is-short">${L}<input id="${id}" type="number" min="0" value="${esc(v ?? '')}" data-pbf="${esc(name)}"></div>`;
    if (f.type === 'lines') return `<div class="pb-f">${L}<textarea id="${id}" rows="${Math.max(3, (v || []).length + 1)}" data-pbf="${esc(name)}">${esc((v || []).join('\n'))}</textarea></div>`;
    if (f.type === 'cells') return `<div class="pb-f">${L}<input id="${id}" value="${esc((v || []).join(' | '))}" data-pbf="${esc(name)}"></div>`;
    if (f.type === 'rows') return `<div class="pb-f">${L}<textarea id="${id}" rows="${Math.max(4, (v || []).length + 1)}" data-pbf="${esc(name)}">${esc((v || []).map(r => r.join(' | ')).join('\n'))}</textarea></div>`;
    if (f.type === 'pairs') return `<div class="pb-f">${L}<textarea id="${id}" rows="${Math.max(3, (v || []).length + 1)}" data-pbf="${esc(name)}">${esc((v || []).map(r => r.join(' | ')).join('\n'))}</textarea></div>`;
    if (f.type === 'items') return `<div class="pb-f is-items"><span class="pb-f-l">${esc(f.label)}</span>${(v || []).map((it, j) => `<div class="pb-item"><div class="pb-item-h"><b>${j + 1}</b><span>${esc(String(it[f.fields[0].k] ?? '').slice(0, 40))}</span>
        <button type="button" data-pbi="up" data-k="${esc(name)}" data-j="${j}" title="Move up"${j === 0 ? ' disabled' : ''}>${IC.up}</button><button type="button" data-pbi="down" data-k="${esc(name)}" data-j="${j}" title="Move down"${j === v.length - 1 ? ' disabled' : ''}>${IC.down}</button><button type="button" data-pbi="del" data-k="${esc(name)}" data-j="${j}" title="Remove">${IC.del}</button></div>
        ${f.fields.map(ff => field(ff, it[ff.k], `${name}.${j}.${ff.k}`)).join('')}</div>`).join('')}<button type="button" class="pb-additem" data-pbi="add" data-k="${esc(name)}">${IC.plus}Add</button></div>`;
    return `<div class="pb-f">${L}<input id="${id}" value="${esc(v ?? '')}" data-pbf="${esc(name)}"></div>`;
  };
  const SETTINGS = [{ k: 'title', label: 'Page title' }, { k: 'journey', label: 'Introduction (under the title)', type: 'textarea', rows: 3 }, { k: 'learn.sub', label: 'Short description (shown in the list of lessons)' },
    { k: 'duration', label: 'How long (e.g. About 30 minutes)' }, { k: 'illus', label: 'Picture at the top', type: 'select', options: ILLUS.map(x => [x, x]) }, { k: 'learn.tags', label: 'Labels under the introduction (one per line)', type: 'lines' }];
  const fieldsOf = () => target === 'page' ? SETTINGS : [...(T[work.type]?.noHead ? [] : HEAD.filter(h => !h.top || target.split('.').length === 2)), ...(T[work.type]?.f || [])];
  const getK = (o, k) => k.split('.').reduce((x, y) => x?.[y], o);
  const setK = (o, k, v) => { const a = k.split('.'), last = a.pop(); const p = a.reduce((x, y) => (x[y] = x[y] ?? (/^\d+$/.test(y) ? [] : {}), x[y]), o); p[last] = v; };
  function paintPanel() {
    const isPage = target === 'page', fs = fieldsOf(), jsonOnly = !isPage && !fs.length;
    if (jsonOnly) tab = 'json';
    panel.innerHTML = `<header class="pb-p-h"><div><span>${isPage ? 'Page' : 'Element'}</span><b>${esc(isPage ? 'Page settings' : nameOf(work.type))}</b></div><button type="button" class="pb-x" data-pbp="close" aria-label="Close">×</button></header>
      ${isPage || jsonOnly ? '' : `<div class="pb-p-tabs"><button type="button" data-pbp="form" class="${tab === 'form' ? 'on' : ''}">Fields</button><button type="button" data-pbp="json" class="${tab === 'json' ? 'on' : ''}">JSON (advanced)</button></div>`}
      <div class="pb-p-body">${tab === 'json' && !isPage ? `<p class="pb-hint">Everything in this element, as JSON. Edit with care: it must stay valid JSON.</p><textarea class="pb-json" rows="22" data-pbjson>${esc(JSON.stringify(work, null, 2))}</textarea>`
        : `${fs.map(f => field(f, getK(work, f.k), f.k)).join('')}<p class="pb-hint">Text can use **bold**, *italic* and [a link](https://…).</p>`}</div>
      <footer class="pb-p-f"><button type="button" data-pbp="close">Cancel</button><button type="button" class="is-main" data-pbp="save">Save</button></footer>`;
  }
  function openPanel(t) { target = t; tab = 'form'; work = clone(t === 'page' ? lesson : at(t));
    if (!panel) { panel = document.createElement('aside'); panel.className = 'pb-panel'; panel.setAttribute('aria-label', 'Edit'); document.body.append(panel); }
    paintPanel(); document.body.classList.add('pb-open'); panel.querySelector('input, textarea, select')?.focus(); }
  function closePanel() { panel?.remove(); panel = null; work = null; target = null; document.body.classList.remove('pb-open'); }
  /* read the form back into `work` */
  function readForm() {
    if (!panel) return true;
    const js = panel.querySelector('[data-pbjson]');
    if (js) { try { const v = JSON.parse(js.value); if (!v || typeof v !== 'object' || (target !== 'page' && !v.type)) throw new Error('An element needs a "type".'); work = v; return true; } catch (e) { toast('That is not valid JSON: ' + e.message); return false; } }
    const defs = {}; const walkF = (fs, pre) => fs.forEach(f => { defs[pre + f.k] = f; if (f.type === 'items') (getK(work, pre + f.k) || []).forEach((_, j) => walkF(f.fields, `${pre}${f.k}.${j}.`)); });
    walkF(fieldsOf(), '');
    panel.querySelectorAll('[data-pbf]').forEach(el => { const k = el.dataset.pbf, f = defs[k]; let v = el.value;
      if (!f) { setK(work, k, v); return; }
      if (f.type === 'lines') v = v.split('\n').map(x => x.trim()).filter(Boolean);
      else if (f.type === 'cells') v = v.split('|').map(x => x.trim());
      else if (f.type === 'rows' || f.type === 'pairs') v = v.split('\n').filter(x => x.trim()).map(r => r.split('|').map(x => x.trim()));
      else if (f.type === 'number') v = v === '' ? '' : Number(v);
      else if (f.bool) v = v === '1';
      else if (f.lines) v = v.includes('\n') ? v.split('\n').map(x => x.trim()).filter(Boolean) : v;
      setK(work, k, v); });
    return true;
  }
  function itemOp(op, k, j) { readForm(); const f = fieldsOf().find(x => x.k === k), arr = getK(work, k) || [];
    if (op === 'add') arr.push(clone(f.add || {})); else if (op === 'del') { if (!confirm('Remove this one?')) return; arr.splice(j, 1); }
    else { const to = op === 'up' ? j - 1 : j + 1; if (to < 0 || to >= arr.length) return; [arr[j], arr[to]] = [arr[to], arr[j]]; }
    setK(work, k, arr); paintPanel(); }
  function savePanel() { if (!readForm()) return;
    if (target === 'page') { change(() => { ['title', 'journey', 'duration', 'illus'].forEach(k => { lesson[k] = work[k]; }); lesson.learn.sub = work.learn?.sub || ''; lesson.learn.tags = work.learn?.tags || [];
      (lesson.sections || []).forEach(s => { s.title = lesson.title; }); }); }
    else { const p = target; change(() => { const [arr, i] = listOf(p); arr[i] = work; }); }
    closePanel(); toast('Saved on this device. Publish when you are ready.'); }

  /* ───────── the "Add" menu ───────── */
  let menu = null;
  function openMenu(base, btn) { closeMenu();
    menu = document.createElement('div'); menu.className = 'pb-menu'; menu.setAttribute('role', 'dialog'); menu.setAttribute('aria-label', 'Add an element');
    menu.innerHTML = `<header><b>Add an element</b><button type="button" class="pb-x" data-pbm="close" aria-label="Close">×</button></header><div class="pb-menu-grid">${ADDABLE.map(t => `<button type="button" data-pbm="${t}"><span class="pb-m-ic">${window.IELTSSheetIcon ? window.IELTSSheetIcon(T[t].ic) : ''}</span><span><b>${esc(T[t].name)}</b><small>${esc(T[t].d)}</small></span></button>`).join('')}</div>`;
    menu.dataset.base = base; document.body.append(menu); menu.querySelector('button[data-pbm]:not([data-pbm="close"])')?.focus(); }
  function closeMenu() { menu?.remove(); menu = null; }
  function add(base, type) { const list = at(base); if (!Array.isArray(list)) { if (base === 'blocks') lesson.learn.blocks = []; else return; }
    const b = clone(T[type].start); if (type === 'write') b.key = 'w' + Math.random().toString(36).slice(2, 7);
    let path = ''; change(() => { const l = at(base); l.push(b); path = `${base}.${l.length - 1}`; });
    closeMenu(); setTimeout(() => { document.querySelector(`[data-pb="${CSS.escape(path)}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); openPanel(path); }, 60); }

  /* ───────── publish ───────── */
  async function publish(pub = true) {
    const c = G()?.client; if (!c) { toast('Sign in again, then try once more.'); return; }
    const w = course.weeks.find(x => x.n === lesson.week) || {};
    const row = { id: lesson.id, week: lesson.week, day: lesson.day, entry: { title: lesson.title, sub: lesson.learn?.sub || meta.sub || '', art: meta.art || w.art || 'writing', parts: meta.parts || ['Lesson'] }, lesson: clone(lesson), published: pub, updated_at: new Date().toISOString() };
    const { error } = await c.from('ielts_pages').upsert(row, { onConflict: 'id' });
    if (error) { toast('Could not publish: ' + error.message); return; }
    const d = ls.get(K_DRAFTS, {}); if (d.lessons) delete d.lessons[lesson.id]; if (d.saved) delete d.saved[lesson.id]; d.days = (d.days || []).filter(x => x.id !== lesson.id); ls.set(K_DRAFTS, d);
    toast(pub ? 'Published. Students see it the next time they open the site.' : 'Saved online, hidden from students.'); setTimeout(() => location.reload(), 700);
  }
  async function unpublish() { const c = G()?.client; if (!c || !confirm('Hide this page from students? It stays saved online and you can publish it again.')) return;
    const { error } = await c.from('ielts_pages').update({ published: false, updated_at: new Date().toISOString() }).eq('id', lesson.id);
    if (error) { toast('Could not unpublish: ' + error.message); return; } toast('Hidden from students.'); setTimeout(() => location.reload(), 600); }
  function discard() { if (!confirm(online() ? 'Discard your changes on this device and go back to the published page?' : meta.draft ? 'Delete this new page? It has not been published.' : 'Discard your changes on this device?')) return;
    const d = ls.get(K_DRAFTS, {}); if (d.lessons) delete d.lessons[lesson.id]; const wasNew = (d.days || []).some(x => x.id === lesson.id) && !online(); d.days = (d.days || []).filter(x => x.id !== lesson.id); ls.set(K_DRAFTS, d);
    if (wasNew) { const w = course.weeks.find(x => x.n === lesson.week); location.hash = w ? `#/skill/${w.n}` : '#/'; } location.reload(); }

  /* ───────── a new page in an open group (Writing: Learn or Practise) ───────── */
  function newPage(spec) { const [week, base, noun] = spec.split(':'); const wn = +week, b = +base, w = course.weeks.find(x => x.n === wn); if (!w) return;
    const title = prompt(`Title of the new ${noun.toLowerCase()} in ${w.theme}:`, ''); if (!title || !title.trim()) return;
    const d = ls.get(K_DRAFTS, {}), taken = new Set([...days, ...(d.days || [])].filter(x => x.week === wn).map(x => x.day));
    let day = b + 1; while (taken.has(day)) day++;
    const id = `${course.idPrefix || ''}w${wn}d${day}`, tone = w.tone || 'clay', art = w.art || 'writing';
    const l = { id, week: wn, day, sheet: true, illus: wn === 3 ? 'survey' : 'books', title: title.trim(), duration: 'About 30 minutes', journey: 'Write a short introduction to this ' + noun.toLowerCase() + ' here.',
      learn: { sub: '', tags: [], blocks: [{ type: 'text', kicker: 'Start here', title: 'Introduction', text: 'Use the buttons on the page to edit this text and to add tabs, tips, tables, model answers and writing boxes.' }] },
      sections: [{ id: 'learn', number: '01', minutes: 30, tone, art, title: title.trim(), subtitle: '', outcome: '', activities: [{ id: 'read', short: 'Read', minutes: 30, grouping: 'Alone', title: 'Read and practise', goal: '', blocks: [] }] }], extras: [], glossary: [] };
    d.lessons = d.lessons || {}; d.lessons[id] = l; d.saved = d.saved || {}; d.saved[id] = Date.now();
    d.days = (d.days || []).filter(x => x.id !== id); d.days.push({ id, week: wn, day, title: l.title, sub: '', art, parts: [noun], stages: ['learn'], tones: [tone] });
    if (!ls.set(K_DRAFTS, d)) return; ls.set(K_EDIT, true);
    location.hash = '#/' + id; location.reload(); }

  /* ───────── clicks ───────── */
  document.addEventListener('click', e => {
    const t = e.target;
    const nw = t.closest?.('[data-pb-new]'); if (nw) { e.preventDefault(); newPage(nw.dataset.pbNew); return; }
    if (!editing() || !lesson.learn) return;
    const tb = t.closest?.('[data-xl-tab][data-xl-path]'); if (tb && tb.dataset.xlPath) { uiS.tab[tb.dataset.xlPath] = +tb.dataset.xlTab; keepUI(); }
    const act = t.closest?.('[data-pb-act]');
    if (act) { e.preventDefault(); e.stopPropagation(); const path = act.closest('[data-pb]').dataset.pb, [arr, i] = listOf(path), k = act.dataset.pbAct;
      if (k === 'edit') openPanel(path);
      else if (k === 'del') { if (confirm(`Delete this ${nameOf(arr[i].type).toLowerCase()}?`)) change(() => arr.splice(i, 1)); }
      else if (k === 'dup') change(() => { const c = clone(arr[i]); if (c.key) c.key = 'w' + Math.random().toString(36).slice(2, 7); arr.splice(i + 1, 0, c); });
      else if (k === 'up' && i > 0) change(() => { [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; });
      else if (k === 'down' && i < arr.length - 1) change(() => { [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; });
      return; }
    const ad = t.closest?.('[data-pb-addat]'); if (ad) { e.preventDefault(); openMenu(ad.dataset.pbAddat, ad); return; }
    const pg = t.closest?.('[data-pb-page]');
    if (pg) { const k = pg.dataset.pbPage; if (k === 'settings') openPanel('page'); else if (k === 'undo') doUndo(); else if (k === 'publish') publish(true); else if (k === 'unpublish') unpublish(); else if (k === 'discard') discard(); return; }
    const pm = t.closest?.('[data-pbm]'); if (pm && menu) { if (pm.dataset.pbm === 'close') closeMenu(); else add(menu.dataset.base, pm.dataset.pbm); return; }
    if (menu && !t.closest?.('.pb-menu')) closeMenu();
    const pp = t.closest?.('[data-pbp]'); if (pp && panel) { const k = pp.dataset.pbp; if (k === 'close') closePanel(); else if (k === 'save') savePanel(); else if (k !== tab && readForm()) { tab = k; paintPanel(); } return; }
    const pi = t.closest?.('[data-pbi]'); if (pi && panel) { itemOp(pi.dataset.pbi, pi.dataset.k, +pi.dataset.j); return; }
  }, true);
  document.addEventListener('toggle', e => { const d = e.target; if (!editing() || !(d instanceof HTMLDetailsElement)) return;
    if (d.matches('.xl-fold') && d.dataset.xlPath) { uiS.open[d.dataset.xlPath] = d.open; keepUI(); } else if (d.matches('.xl-ex')) { uiS.open[d.id] = d.open; keepUI(); } }, true);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (menu) closeMenu(); else if (panel) closePanel(); } });

  return { on: () => true, ui, wrap, addHTML, barHTML, afterRender() { document.body.classList.toggle('pb-editing', !!(editing() && lesson.learn)); } };
};
