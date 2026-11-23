/* Studio — edit any lesson page in place and build new pages from the blocks (a Notion-style editor on top of the app).

   SWITCH IT ON: open  …/#/studio  once on a device. The side panel then shows "Studio" and a dock appears at the bottom.
   Students never see it unless they open that address themselves — and even then their changes stay on their own device.

   HOW IT WORKS
   - A lesson is data (lessons/weekN/*.js → window.DEC15_LESSON). Studio edits that data and the app draws it again.
   - Every change is saved at once as a DRAFT on this device (localStorage '<course>-studio-drafts'). While a draft
     exists it replaces the lesson file (js/boot.js + js/studio-apply.js), so you see your version everywhere.
   - To publish: "Download lesson file" and put it in lessons/weekN/ (or "Download all drafts" and give the file to
     Claude, who adds the lessons and their course.js entries). Then discard the draft.
   - Edit mode: each block gets a toolbar (move, duplicate, copy, delete, edit, add below). Double-click any text to
     type over it. "Edit" opens the side panel with every field of the block (and a JSON tab for everything else).
   - Activities and stages have their own bars (add, duplicate, move, delete). Those changes reload the page.
   - Undo (Ctrl/Cmd + Z outside a text box) steps back through this session's changes. */
window.createStudio = function ({ lesson, course, days, esc, icon, toast, L, rerender, getState }) {
  const P = course.id + '-studio', K_ON = P, K_EDIT = P + '-edit', K_DRAFTS = P + '-drafts', K_CLIP = P + '-clip', K_UNDO = P + '-undo-' + lesson.id;
  const ls = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { toast('Could not save on this device (storage is full or blocked).'); return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } } };
  if (window.DEC15_STUDIO_PAGE) ls.set(K_ON, true);
  if (!ls.get(K_ON, false)) return null;   // Studio is off on this device: the app runs exactly as before
  document.getElementById('side-studio')?.removeAttribute('hidden');

  const CAT = window.STUDIO_BLOCKS || [], uid = window.STUDIO_UID || (p => `${p}-${Math.random().toString(36).slice(2, 6)}`);
  const typeName = t => (CAT.find(c => c.type === t && c.cat !== 'IELTS') || CAT.find(c => c.type === t) || { name: t }).name;
  const clone = o => JSON.parse(JSON.stringify(o));
  const PREFIX = course.idPrefix || '';
  /* A course by skill (course.units) keeps the weeks/days shape: week = unit (skill), day = lesson in it. */
  const UNITS = course.units || null, UW = UNITS?.unit || 'Week', DW = UNITS?.lesson || 'Day';
  const unitOf = n => course.weeks.find(w => w.n === n);
  const whereOf = (w, d) => UNITS ? `${unitOf(w)?.theme || UW + ' ' + w} · ${DW} ${d}` : `Week ${w} Day ${d}`;
  const folderOf = n => unitOf(n)?.folder || `lessons/week${n}`;
  let editing = !!ls.get(K_EDIT, false);
  const isDraft = () => !!(ls.get(K_DRAFTS, {}).lessons || {})[lesson.id];
  const draftOnly = () => !!days.find(d => d.id === lesson.id)?.draft;

  /* ───────── paths: where a blocks array sits inside the lesson ───────── */
  let index = new WeakMap();
  function reindex() {
    index = new WeakMap();
    const walk = (o, path) => { if (!o || typeof o !== 'object') return;
      if (Array.isArray(o)) { o.forEach((x, i) => walk(x, path.concat(i))); return; }
      for (const [k, v] of Object.entries(o)) { if (Array.isArray(v) && k === 'blocks') index.set(v, path.concat(k)); if (v && typeof v === 'object') walk(v, path.concat(k)); } };
    walk(lesson, []);
  }
  const pathOf = arr => { if (!index.has(arr)) reindex(); return index.get(arr) || null; };
  const enc = p => p.join('.'), dec = s => String(s).split('.').filter(x => x !== '').map(x => /^\d+$/.test(x) ? Number(x) : x);
  const at = p => p.reduce((o, k) => (o == null ? o : o[k]), lesson);
  const parentOf = p => [at(p.slice(0, -1)), p[p.length - 1]];

  /* ───────── drafts, undo ───────── */
  const undo = (() => { try { return JSON.parse(sessionStorage.getItem(K_UNDO) || '[]'); } catch (e) { return []; } })();
  function snapshot() { undo.push(JSON.stringify(lesson)); while (undo.length > 40) undo.shift(); try { sessionStorage.setItem(K_UNDO, JSON.stringify(undo)); } catch (e) { /* ignore */ } }
  function saveDraft() {
    const d = ls.get(K_DRAFTS, {}); d.lessons = d.lessons || {}; d.lessons[lesson.id] = clone(lesson);
    d.saved = d.saved || {}; d.saved[lesson.id] = Date.now();
    const day = (d.days || []).find(x => x.id === lesson.id);
    if (day) Object.assign(day, dayInfo(lesson));
    if (ls.set(K_DRAFTS, d)) paintDock();
  }
  function dayInfo(l) { return { title: l.title, art: l.sections[0]?.art || 'reading', parts: l.sections.map(s => s.title), stages: l.sections.map(s => s.id), tones: l.sections.map(s => s.tone) }; }
  function commit(opts = {}) { saveDraft(); if (opts.reload) reloadTo(opts.hash); else if (opts.render !== false) rerender(); }
  function reloadTo(hash) { if (hash && hash !== location.hash) location.hash = hash; location.reload(); }
  function doUndo() {
    if (!undo.length) { toast('Nothing to undo.'); return; }
    const prev = JSON.parse(undo.pop()); try { sessionStorage.setItem(K_UNDO, JSON.stringify(undo)); } catch (e) { /* ignore */ }
    const d = ls.get(K_DRAFTS, {}); d.lessons = d.lessons || {}; d.lessons[lesson.id] = prev; ls.set(K_DRAFTS, d);
    location.reload();
  }
  /* new ids for everything inside a copied block / activity, so saved answers never mix */
  function freshIds(o) {
    if (Array.isArray(o)) { o.forEach(freshIds); return o; }
    if (!o || typeof o !== 'object') return o;
    for (const [k, v] of Object.entries(o)) {
      if ((k === 'id' || k === 'ref') && typeof v === 'string') o[k] = uid(v.replace(/-[a-z0-9]{4}$/, '').slice(0, 12) || 'x');
      else if (v && typeof v === 'object') freshIds(v);
    }
    return o;
  }

  /* ───────── block wrapper (called by blocksHTML in app.js) ───────── */
  const TB = (act, ic, label, extra = '') => `<button type="button" class="sx-tb" data-sx-act="${act}" title="${label}" aria-label="${label}"${extra}>${ic}</button>`;
  const SV = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    up: SV('<path d="M12 19V5M6 11l6-6 6 6"/>'), down: SV('<path d="M12 5v14M6 13l6 6 6-6"/>'),
    dup: SV('<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>'),
    copy: SV('<path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/>'),
    del: SV('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/>'),
    edit: SV('<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>'), plus: SV('<path d="M12 5v14M5 12h14"/>'),
    left: SV('<path d="M15 6l-6 6 6 6"/>'), right: SV('<path d="M9 6l6 6-6 6"/>'), undo: SV('<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>'),
    out: SV('<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>'), studio: SV('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M8 4v5"/>'),
    x: SV('<path d="M6 6l12 12M18 6 6 18"/>'), grip: SV('<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>')
  };
  function wrap(arr, b, html) {
    const p = pathOf(arr), i = arr.indexOf(b); if (!p || i < 0) return html;
    const key = enc(p.concat(i)), last = i === arr.length - 1;
    return `<div class="sx-blk${openKey === key ? ' is-open' : ''}" data-sx="${key}">
      <div class="sx-tools" role="toolbar" aria-label="${esc(typeName(b.type))} block"><span class="sx-type">${I.grip}${esc(typeName(b.type))}</span>
        ${TB('up', I.up, 'Move up', i ? '' : ' disabled')}${TB('down', I.down, 'Move down', last ? ' disabled' : '')}${TB('dup', I.dup, 'Duplicate')}${TB('copy', I.copy, 'Copy (paste it on any page)')}${TB('del', I.del, 'Delete')}
        <span class="sx-sep"></span>${TB('edit', I.edit, 'Edit all fields')}${TB('add', I.plus, 'Add a block below')}</div>${html}</div>`;
  }
  const addHere = arr => { const p = pathOf(arr); return p ? `<button type="button" class="sx-add" data-sx-add="${enc(p)}" data-sx-at="${arr.length}">${I.plus}<span>Add a block</span></button>` : ''; };

  /* ───────── activity, stage and lesson bars ───────── */
  const findAct = a => { for (const [si, s] of lesson.sections.entries()) { const ai = s.activities.indexOf(a); if (ai >= 0) return { si, ai, s }; }
    const ei = (lesson.extras || []).indexOf(a); return ei >= 0 ? { extra: true, ai: ei } : null; };
  function actBar(a) {
    const f = findAct(a); if (!f || f.extra) return '';
    const n = f.s.activities.length;
    return `<div class="sx-bar sx-actbar" data-sx-actbar="${f.si}.${f.ai}"><span class="sx-bar-k">Activity ${f.ai + 1} of ${n}</span>
      <button type="button" data-sx-a="edit">${I.edit}Edit activity</button><button type="button" data-sx-a="add">${I.plus}New activity after</button>
      <button type="button" data-sx-a="dup">${I.dup}Duplicate</button><button type="button" data-sx-a="left"${f.ai ? '' : ' disabled'}>${I.left}Earlier</button>
      <button type="button" data-sx-a="right"${f.ai < n - 1 ? '' : ' disabled'}>${I.right}Later</button><button type="button" class="is-danger" data-sx-a="del"${n > 1 ? '' : ' disabled title="A stage needs at least one activity"'}>${I.del}Delete</button></div>`;
  }
  function stageBar(s) {
    const si = lesson.sections.indexOf(s), n = lesson.sections.length;
    return `<div class="sx-bar sx-stagebar" data-sx-stagebar="${si}"><span class="sx-bar-k">Stage ${si + 1} of ${n}</span>
      <button type="button" data-sx-s="edit">${I.edit}Edit stage</button><button type="button" data-sx-s="add">${I.plus}New stage after</button>
      <button type="button" data-sx-s="dup">${I.dup}Duplicate stage</button><button type="button" data-sx-s="left"${si ? '' : ' disabled'}>${I.left}Earlier</button>
      <button type="button" data-sx-s="right"${si < n - 1 ? '' : ' disabled'}>${I.right}Later</button><button type="button" class="is-danger" data-sx-s="del"${n > 1 ? '' : ' disabled title="A page needs at least one stage"'}>${I.del}Delete stage</button></div>`;
  }
  function lessonBar() {
    return `<div class="sx-bar sx-lessonbar"><span class="sx-bar-k">${isDraft() ? (draftOnly() ? 'New page · draft on this device' : 'Edited · draft on this device') : 'Published version'}</span>
      <button type="button" data-sx-l="edit">${I.edit}Edit page details</button><button type="button" data-sx-l="add">${I.plus}New stage</button>
      <button type="button" data-sx-l="export">${I.out}Download lesson file</button>${isDraft() ? `<button type="button" class="is-danger" data-sx-l="discard">${I.undo}${draftOnly() ? 'Delete this page' : 'Discard my changes'}</button>` : ''}</div>`;
  }
  const blankActivity = (n = 1) => ({ id: uid('a'), short: 'New activity', minutes: 10, grouping: 'Alone', title: 'New activity', goal: 'One clear goal.',
    blocks: [{ type: 'steps', items: [{ who: 'alone', text: 'First step.' }] }] });
  const blankStage = n => ({ id: uid('s'), number: String(n).padStart(2, '0'), minutes: 20, tone: 'teal', art: 'reading', title: 'New stage', subtitle: 'A one-line description', outcome: 'What students can do after this stage.', activities: [blankActivity()] });
  function onActBar(btn) {
    const [si, ai] = btn.closest('[data-sx-actbar]').dataset.sxActbar.split('.').map(Number), s = lesson.sections[si], acts = s.activities, a = acts[ai], act = btn.dataset.sxA;
    if (act === 'edit') { openPanel(['sections', si, 'activities', ai], 'activity'); return; }
    snapshot();
    const go = id => { const st0 = getState?.(); if (st0) { st0.active = st0.active || {}; st0.active[s.id] = id; } try { const st = JSON.parse(localStorage.getItem('dec15-' + lesson.id + '-v2') || '{}'); st.active = st.active || {}; st.active[s.id] = id; localStorage.setItem('dec15-' + lesson.id + '-v2', JSON.stringify(st)); } catch (e) { /* ignore */ } };
    if (act === 'add') { const na = blankActivity(); acts.splice(ai + 1, 0, na); go(na.id); }
    if (act === 'dup') { const na = freshIds(clone(a)); na.title += ' (copy)'; acts.splice(ai + 1, 0, na); go(na.id); }
    if (act === 'left' || act === 'right') { const j = ai + (act === 'left' ? -1 : 1); [acts[ai], acts[j]] = [acts[j], acts[ai]]; go(a.id); }
    if (act === 'del') { if (!confirm(`Delete the activity “${a.title}” and all its blocks?`)) { undo.pop(); return; } acts.splice(ai, 1); go(acts[Math.max(0, ai - 1)].id); }
    commit({ reload: true });
  }
  function onStageBar(btn) {
    const si = Number(btn.closest('[data-sx-stagebar]').dataset.sxStagebar), S = lesson.sections, s = S[si], act = btn.dataset.sxS;
    if (act === 'edit') { openPanel(['sections', si], 'stage'); return; }
    snapshot();
    let to = L(s.id);
    if (act === 'add') { const ns = blankStage(si + 2); S.splice(si + 1, 0, ns); to = L(ns.id); }
    if (act === 'dup') { const ns = freshIds(clone(s)); ns.id = uid(s.id.replace(/-[a-z0-9]{4}$/, '')); ns.title += ' (copy)'; S.splice(si + 1, 0, ns); to = L(ns.id); }
    if (act === 'left' || act === 'right') { const j = si + (act === 'left' ? -1 : 1); [S[si], S[j]] = [S[j], S[si]]; }
    if (act === 'del') { if (!confirm(`Delete the stage “${s.title}” with its ${s.activities.length} activities?`)) { undo.pop(); return; } S.splice(si, 1); to = L(); }
    S.forEach((x, i) => { if (/^\d+$/.test(String(x.number || ''))) x.number = String(i + 1).padStart(2, '0'); });
    commit({ reload: true, hash: to });
  }
  function onLessonBar(btn) {
    const act = btn.dataset.sxL;
    if (act === 'edit') { openPanel([], 'lesson'); return; }
    if (act === 'export') { exportLesson(lesson.id); return; }
    if (act === 'discard') { discard(lesson.id); return; }
    if (act === 'add') { snapshot(); const ns = blankStage(lesson.sections.length + 1); lesson.sections.push(ns); commit({ reload: true, hash: L(ns.id) }); }
  }

  /* ───────── block actions ───────── */
  function onBlockTool(btn) {
    const host = btn.closest('[data-sx]'), p = dec(host.dataset.sx), [arr, i] = parentOf(p), b = arr[i], act = btn.dataset.sxAct;
    if (act === 'edit') { openPanel(p, 'block'); return; }
    if (act === 'add') { openMenu(btn, enc(p.slice(0, -1)), i + 1); return; }
    if (act === 'copy') { ls.set(K_CLIP, b); toast(`Copied: ${typeName(b.type)}. Use “Add a block” → Paste on any page.`); return; }
    snapshot();
    if (act === 'up' && i > 0) [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    if (act === 'down' && i < arr.length - 1) [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    if (act === 'dup') arr.splice(i + 1, 0, freshIds(clone(b)));
    if (act === 'del') { if (arr.length === 1 && p.length <= 5 && !confirm('This is the only block in the activity. Delete it?')) { undo.pop(); return; } arr.splice(i, 1); if (openKey === enc(p)) closePanel(); }
    reindex(); commit();
  }

  /* ───────── the add-block menu ───────── */
  let menu = null;
  function openMenu(anchor, arrKey, at) {
    closeMenu();
    const clip = ls.get(K_CLIP, null);
    const cats = [...new Set(CAT.map(c => c.cat))];
    menu = document.createElement('div'); menu.className = 'sx-menu'; menu.setAttribute('role', 'dialog'); menu.setAttribute('aria-label', 'Add a block');
    menu.innerHTML = `<div class="sx-menu-head"><input type="search" class="sx-menu-q" placeholder="Search blocks… (e.g. gap, true, cue card)" aria-label="Search blocks"><button type="button" class="sx-x" data-sx-menu-close aria-label="Close">${I.x}</button></div>
      ${clip ? `<button type="button" class="sx-paste" data-sx-pick="clip">${I.copy}<span><b>Paste</b><small>${esc(typeName(clip.type))} — copied earlier</small></span></button>` : ''}
      <div class="sx-menu-body">${cats.map(cat => `<section class="sx-cat" data-cat="${esc(cat)}"><h4>${esc(cat)}</h4><div class="sx-cat-grid">${CAT.map((c, k) => c.cat !== cat ? '' :
        `<button type="button" class="sx-pick" data-sx-pick="${k}" data-q="${esc((c.name + ' ' + c.desc + ' ' + c.type + ' ' + c.cat).toLowerCase())}"><b>${esc(c.name)}</b><small>${esc(c.desc)}</small></button>`).join('')}</div></section>`).join('')}</div>`;
    menu.dataset.arr = arrKey; menu.dataset.at = at;
    document.body.append(menu);
    const r = anchor.getBoundingClientRect(), mw = Math.min(560, innerWidth - 24), mh = Math.min(520, innerHeight - 24);
    menu.style.width = mw + 'px'; menu.style.maxHeight = mh + 'px';
    menu.style.left = Math.max(12, Math.min(innerWidth - mw - 12, r.left)) + 'px';
    if (r.bottom + mh + 8 < innerHeight) menu.style.top = r.bottom + 6 + 'px';   // below the button, or above it (growing upwards)
    else { menu.style.bottom = Math.max(12, innerHeight - r.top + 6) + 'px'; menu.style.maxHeight = Math.min(mh, r.top - 18) + 'px'; }
    const q = menu.querySelector('.sx-menu-q'); q.focus();
    q.addEventListener('input', () => { const t = q.value.trim().toLowerCase();
      menu.querySelectorAll('.sx-pick').forEach(b => { b.hidden = !!t && !t.split(/\s+/).every(w => b.dataset.q.includes(w)); });
      menu.querySelectorAll('.sx-cat').forEach(c => { c.hidden = !c.querySelector('.sx-pick:not([hidden])'); }); });
    q.addEventListener('keydown', e => { if (e.key === 'Enter') { menu.querySelector('.sx-pick:not([hidden])')?.click(); e.preventDefault(); } });
  }
  function closeMenu() { menu?.remove(); menu = null; }
  function pick(k) {
    const arr = at(dec(menu.dataset.arr)), i = Number(menu.dataset.at);
    const b = k === 'clip' ? freshIds(clone(ls.get(K_CLIP, null))) : CAT[k].make();
    closeMenu(); if (!arr || !b) return;
    snapshot(); arr.splice(i, 0, b); reindex(); commit();
    const p = enc(pathOf(arr).concat(i));
    requestAnimationFrame(() => { const el = document.querySelector(`[data-sx="${CSS.escape(p)}"]`); el?.scrollIntoView({ block: 'center', behavior: 'smooth' }); el?.classList.add('is-new'); });
    openPanel(dec(p), 'block');
  }

  /* ───────── the side panel: every field of a block / activity / stage / page ───────── */
  let panel = null, openKey = null, openKind = null, panelTab = 'fields';
  const SKIP = { block: [], activity: ['blocks'], stage: ['activities'], lesson: ['sections', 'extras'] };
  const LONG = /^(text|explain|note|why|goal|outcome|journey|intro|before|after|model|lead|desc|answer|q|clue|back|front|to|from|caption|alt|tip|hint|statement|question)$/;
  const HELP = { who: 'alone · pair · group · class', tone: 'amber · teal · blue · clay · plum · green', art: 'ai · feedback · critical · writing · reading · listening · discussion · research · assessment · group — or a picture path',
    grouping: 'Alone · Pair · Group · Whole class', answer: 'the number of the right option (0 = first)', videoId: 'the part after v= in a YouTube link', rows: 'number of lines (a box) or rows (a table)',
    gate: 'hide this block until the student says they tried', size: 'small · wide', id: 'the key of students’ saved answers — never change it once students have started', max: 'the word limit', send: 'adds “Share with classmates” + PDF' };
  function openPanel(p, kind) {
    openKey = enc(p); openKind = kind; panelTab = 'fields';
    if (!panel) { panel = document.createElement('aside'); panel.className = 'sx-panel'; panel.setAttribute('aria-label', 'Studio editor'); document.body.append(panel); }
    document.body.classList.add('sx-panel-open');
    paintPanel();
    document.querySelectorAll('.sx-blk.is-open').forEach(e => e.classList.remove('is-open'));
    if (kind === 'block') document.querySelector(`[data-sx="${CSS.escape(openKey)}"]`)?.classList.add('is-open');
  }
  function closePanel() { panel?.remove(); panel = null; openKey = null; document.body.classList.remove('sx-panel-open'); document.querySelectorAll('.sx-blk.is-open').forEach(e => e.classList.remove('is-open')); }
  function paintPanel() {
    const p = dec(openKey), o = at(p);
    if (!o) { closePanel(); return; }
    const title = openKind === 'block' ? typeName(o.type) : openKind === 'activity' ? 'Activity' : openKind === 'stage' ? 'Stage' : 'Page details';
    const sub = openKind === 'block' ? `type: '${o.type}'` : openKind === 'activity' ? o.title : openKind === 'stage' ? o.title : lesson.id;
    let missing = [];
    if (openKind === 'block') { const tpl = CAT.find(c => c.type === o.type && c.cat !== 'IELTS') || CAT.find(c => c.type === o.type); if (tpl) { const t = tpl.make(); missing = Object.keys(t).filter(k => !(k in o) && k !== 'blocks').map(k => [k, t[k]]); } }
    if (openKind === 'activity') missing = [['answers', { title: 'Suggested answers', items: [['Question', 'Answer']] }], ['art', ''], ['category', ''], ['wall', false]].filter(([k]) => !(k in o));
    if (openKind === 'lesson') missing = [['question', ''], ['questionLabel', 'Focus question'], ['image', ''], ['imageAlt', '']].filter(([k]) => !(k in o));
    panel.innerHTML = `<header class="sx-p-head"><div><span class="sx-p-k">${esc(openKind === 'block' ? 'Block' : 'Edit')}</span><h3>${esc(title)}</h3><small>${esc(sub || '')}</small></div>
        <button type="button" class="sx-x" data-sx-p="close" aria-label="Close the editor">${I.x}</button></header>
      <nav class="sx-p-tabs" role="tablist"><button type="button" role="tab" data-sx-ptab="fields" aria-selected="${panelTab === 'fields'}">Fields</button><button type="button" role="tab" data-sx-ptab="json" aria-selected="${panelTab === 'json'}">JSON</button></nav>
      <div class="sx-p-body">${panelTab === 'json' ? `<textarea class="sx-json" spellcheck="false" aria-label="This item as JSON">${esc(JSON.stringify(stripSkip(o), null, 2))}</textarea>
          <p class="sx-hint">Everything about this ${openKind} as data. Change it, then press Apply.${SKIP[openKind].length ? ` (${SKIP[openKind].join(', ')} are edited on the page.)` : ''}</p><button type="button" class="sx-btn" data-sx-p="apply">Apply JSON</button>`
        : `${form(o, p, openKind)}${missing.length ? `<div class="sx-missing"><span>Add a field:</span>${missing.map(([k], n) => `<button type="button" data-sx-addkey="${esc(k)}" data-n="${n}">+ ${esc(k)}</button>`).join('')}</div>` : ''}`}</div>
      <footer class="sx-p-foot">${openKind === 'block' ? `<button type="button" class="sx-btn-q" data-sx-p="dup">${I.dup}Duplicate</button><button type="button" class="sx-btn-q is-danger" data-sx-p="del">${I.del}Delete</button>` : ''}<span class="sx-saved" aria-live="polite">Saved as a draft</span><button type="button" class="sx-btn" data-sx-p="close">Done</button></footer>`;
    panel._missing = missing;
  }
  const stripSkip = o => { const c = { ...o }; SKIP[openKind].forEach(k => delete c[k]); return c; };
  function form(o, p, kind) {
    return Object.entries(o).filter(([k]) => !SKIP[kind].includes(k)).map(([k, v]) => field(k, v, p.concat(k), 0)).join('');
  }
  const label = (k, extra = '') => `<span class="sx-f-l">${esc(k)}${HELP[k] ? `<i title="${esc(HELP[k])}">?</i>` : ''}${extra}</span>`;
  const itemName = (x, i) => { if (Array.isArray(x)) return String(x[0] ?? '').replace(/<[^>]+>/g, '').slice(0, 40) || `Row ${i + 1}`;
    const t = x.label || x.title || x.q || x.text || x.front || x.from || x.clue || x.statement || x.id; return t ? String(t).replace(/<[^>]+>/g, '').slice(0, 48) : `Item ${i + 1}`; };
  const rowBtns = (p, i, n) => `<span class="sx-row-b"><button type="button" data-sx-li="up" data-p="${enc(p)}" data-i="${i}"${i ? '' : ' disabled'} aria-label="Move up">${I.up}</button><button type="button" data-sx-li="down" data-p="${enc(p)}" data-i="${i}"${i < n - 1 ? '' : ' disabled'} aria-label="Move down">${I.down}</button><button type="button" data-sx-li="del" data-p="${enc(p)}" data-i="${i}" aria-label="Remove">${I.x}</button></span>`;
  function input(k, v, p) {
    const key = enc(p);
    if (typeof v === 'boolean') return `<label class="sx-check"><input type="checkbox" data-sx-v="${key}"${v ? ' checked' : ''}><span>${v ? 'yes' : 'no'}</span></label>`;
    if (typeof v === 'number') return `<input class="sx-in sx-num" type="number" step="any" data-sx-v="${key}" data-t="n" value="${v}">`;
    const s = String(v ?? '');
    if (k === 'type') return `<code class="sx-code">${esc(s)}</code>`;
    if (k === 'who') return `<select class="sx-in" data-sx-v="${key}">${['alone', 'pair', 'group', 'class'].map(w => `<option${w === s ? ' selected' : ''}>${w}</option>`).join('')}</select>`;
    if (k === 'tone') return `<select class="sx-in" data-sx-v="${key}">${['amber', 'teal', 'blue', 'clay', 'plum', 'green'].map(w => `<option${w === s ? ' selected' : ''}>${w}</option>`).join('')}</select>`;
    const long = s.length > 70 || s.includes('\n') || LONG.test(String(k)) || typeof k === 'number';
    return long ? `<textarea class="sx-in" rows="${Math.min(12, Math.max(2, Math.ceil(s.length / 46) + (s.match(/\n/g) || []).length))}" data-sx-v="${key}">${esc(s)}</textarea>`
      : `<input class="sx-in" type="text" data-sx-v="${key}" value="${esc(s)}">`;
  }
  function field(k, v, p, depth) {
    if (v == null) return `<div class="sx-f">${label(k)}${input(k, '', p)}</div>`;
    if (k === 'blocks' && Array.isArray(v)) return `<div class="sx-f">${label(k)}<p class="sx-hint">${v.length} block${v.length === 1 ? '' : 's'} — edit them on the page.</p></div>`;
    if (Array.isArray(v)) {
      const n = v.length, add = `<button type="button" class="sx-add-row" data-sx-li="add" data-p="${enc(p)}">${I.plus}Add</button>`;
      if (v.every(x => x == null || typeof x !== 'object')) return `<div class="sx-f">${label(k, ` <em>${n}</em>`)}<ol class="sx-list">${v.map((x, i) => `<li>${input(i, x, p.concat(i))}${rowBtns(p, i, n)}</li>`).join('')}</ol>${add}</div>`;
      if (v.every(x => Array.isArray(x) && x.every(y => y == null || typeof y !== 'object'))) return `<div class="sx-f">${label(k, ` <em>${n}</em>`)}<ol class="sx-rows">${v.map((row, i) => `<li><div class="sx-cells" style="--c:${row.length}">${row.map((c, j) => input(j, c, p.concat(i, j))).join('')}</div>${rowBtns(p, i, n)}</li>`).join('')}</ol>${add}</div>`;
      return `<div class="sx-f">${label(k, ` <em>${n}</em>`)}<div class="sx-items">${v.map((x, i) => `<details class="sx-item"${n <= 3 || depth ? ' open' : ''}><summary><b>${i + 1}</b><span>${esc(itemName(x, i))}</span>${rowBtns(p, i, n)}</summary><div class="sx-item-body">${
        x && typeof x === 'object' && !Array.isArray(x) ? Object.entries(x).map(([kk, vv]) => field(kk, vv, p.concat(i, kk), depth + 1)).join('') : field(i, x, p.concat(i), depth + 1)}</div></details>`).join('')}</div>${add}</div>`;
    }
    if (typeof v === 'object') return `<fieldset class="sx-obj"><legend>${esc(k)}</legend>${Object.entries(v).map(([kk, vv]) => field(kk, vv, p.concat(kk), depth + 1)).join('')}</fieldset>`;
    return `<div class="sx-f">${label(k)}${input(k, v, p)}</div>`;
  }
  let typing = null;
  function onPanelInput(t) {
    const p = dec(t.dataset.sxV), [o, k] = parentOf(p);
    if (!typing) snapshot();
    o[k] = t.type === 'checkbox' ? t.checked : t.dataset.t === 'n' ? (t.value === '' ? 0 : Number(t.value)) : t.value;
    if (t.type === 'checkbox') t.nextElementSibling.textContent = t.checked ? 'yes' : 'no';
    clearTimeout(typing); typing = setTimeout(() => { typing = null; commit(); flashSaved(); }, 260);
  }
  const flashSaved = () => { const s = panel?.querySelector('.sx-saved'); if (s) { s.classList.remove('is-on'); void s.offsetWidth; s.classList.add('is-on'); } };
  function emptyLike(x) {   // a new list item shaped like the last one, with empty text and fresh ids
    if (Array.isArray(x)) return x.map(emptyLike);
    if (x && typeof x === 'object') { const o = {}; for (const [k, v] of Object.entries(x)) o[k] = k === 'id' && typeof v === 'string' ? uid(v.replace(/-[a-z0-9]{4}$/, '').slice(0, 12)) : k === 'blocks' ? [{ type: 'text', text: 'New content.' }] : emptyLike(v); return o; }
    return typeof x === 'number' ? x : typeof x === 'boolean' ? x : '';
  }
  function onList(btn) {
    const p = dec(btn.dataset.p), arr = at(p), i = Number(btn.dataset.i), act = btn.dataset.sxLi;
    snapshot();
    if (act === 'add') arr.push(arr.length ? emptyLike(arr[arr.length - 1]) : '');
    if (act === 'del') arr.splice(i, 1);
    if (act === 'up' && i > 0) [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    if (act === 'down' && i < arr.length - 1) [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    reindex(); commit(); paintPanel(); flashSaved();
  }
  function onPanelButton(btn) {
    const d = btn.dataset;
    if (d.sxPtab) { panelTab = d.sxPtab; paintPanel(); return; }
    if (d.sxAddkey) { const o = at(dec(openKey)), [k, v] = panel._missing[Number(d.n)]; snapshot(); o[k] = clone(v ?? ''); commit(); paintPanel(); return; }
    if (d.sxP === 'close') { closePanel(); return; }
    if (d.sxP === 'apply') {
      let v; try { v = JSON.parse(panel.querySelector('.sx-json').value); } catch (e) { toast('That is not valid JSON: ' + e.message); return; }
      const p = dec(openKey), o = at(p); snapshot();
      SKIP[openKind].forEach(k => { if (k in o) v[k] = o[k]; });
      Object.keys(o).forEach(k => delete o[k]); Object.assign(o, v);
      reindex(); commit({ reload: openKind !== 'block' }); toast('Applied.'); paintPanel(); return;
    }
    const p = dec(openKey), [arr, i] = parentOf(p);
    if (d.sxP === 'dup') { snapshot(); arr.splice(i + 1, 0, freshIds(clone(arr[i]))); reindex(); commit(); openPanel(p.slice(0, -1).concat(i + 1), 'block'); }
    if (d.sxP === 'del') { snapshot(); arr.splice(i, 1); reindex(); closePanel(); commit(); }
  }

  /* ───────── type over text on the page (double-click) ───────── */
  const decode = s => { const t = document.createElement('textarea'); t.innerHTML = s; return t.value; };
  const norm = s => decode(String(s ?? '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '')).replace(/\[\[\*?|\]\]/g, '').replace(/\s+/g, ' ').trim();
  function strings(o, p, out = [], skip = []) {
    if (typeof o === 'string') { out.push([p, o]); return out; }
    if (!o || typeof o !== 'object') return out;
    for (const [k, v] of Object.entries(o)) { if (skip.includes(k) || k === 'blocks' || k === 'type' || k === 'id') continue; strings(v, p.concat(k), out); }
    return out;
  }
  function inlineTarget(e) {
    let scope = null, p = null, skip = [];
    const blk = e.target.closest('[data-sx]'), art = e.target.closest('article.activity'), stageHead = e.target.closest('.stage-head'), hero = e.target.closest('.hero, .essay-q-hero');
    if (blk) { p = dec(blk.dataset.sx); scope = at(p); }
    else if (art && (e.target.closest('.act-head') || e.target.closest('.answers'))) { for (const [si, s] of lesson.sections.entries()) { const ai = s.activities.findIndex(a => a.id === art.id); if (ai >= 0) { p = ['sections', si, 'activities', ai]; scope = s.activities[ai]; } } skip = ['blocks']; }
    else if (stageHead) { const si = lesson.sections.findIndex(s => location.hash.endsWith('/' + s.id)); if (si >= 0) { p = ['sections', si]; scope = lesson.sections[si]; skip = ['activities']; } }
    else if (hero) { p = []; scope = lesson; skip = ['sections', 'extras']; }
    if (!scope) return null;
    const cands = strings(scope, p, [], skip);
    for (let el = e.target, n = 0; el && n < 4 && el !== document.body; el = el.parentElement, n++) {
      if (el.matches('.sx-tools, .sx-bar') || el.closest('.sx-tools')) return null;
      const txt = norm(el.innerText || el.textContent); if (!txt) continue;
      const hit = cands.find(([, s]) => norm(s) === txt) || (txt.length > 8 && cands.find(([, s]) => norm(s).length > 8 && txt.endsWith(norm(s)) && norm(s).length > txt.length * .6));
      if (hit) { if (norm(hit[1]) === txt) return { el, path: hit[0], value: hit[1] };
        for (const nd of el.childNodes) if (nd.nodeType === 3 && norm(nd.textContent) === norm(hit[1])) { const sp = document.createElement('span'); sp.textContent = nd.textContent.trim(); nd.replaceWith(' ', sp); return { el: sp, path: hit[0], value: hit[1] }; }
        return { panelOnly: true }; }
    }
    return null;
  }
  let inline = null;
  function startInline(e) {
    let t = inlineTarget(e);
    if (t?.panelOnly) t = null;
    if (!t) { const blk = e.target.closest('[data-sx]'); if (blk) { openPanel(dec(blk.dataset.sx), 'block'); toast('This text is easier to change in the side panel.'); } return; }
    e.preventDefault();
    const { el } = t; inline = { ...t, rich: /<[a-z]/i.test(t.value) };
    el.contentEditable = 'true'; el.classList.add('sx-inline'); el.spellcheck = true;
    if (!inline.rich) el.textContent = norm(t.value) === norm(el.innerText) ? el.innerText.trim() : el.innerText;
    el.focus();
    const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    el.addEventListener('blur', endInline, { once: true });
  }
  const clean = h => h.replace(/<(\/?)(strong)>/gi, '<$1b>').replace(/<(\/?)(em)>/gi, '<$1i>').replace(/<div>/gi, '<br>').replace(/<\/div>/gi, '')
    .replace(/<(?!\/?(b|i|u|mark|br)\b)[^>]*>/gi, '').replace(/&nbsp;/g, ' ').replace(/^(<br>)+|(<br>)+$/g, '').trim();
  function endInline(cancel) {
    if (!inline) return; const { el, path, value, rich } = inline; inline = null;
    el.contentEditable = 'false'; el.classList.remove('sx-inline');
    if (cancel === true) { rerender(); return; }
    const nv = rich ? clean(el.innerHTML) : el.innerText.replace(/\s+\n/g, '\n').trim();
    if (nv === value || norm(nv) === norm(value) && !rich) { rerender(); return; }
    const [o, k] = parentOf(path); snapshot(); o[k] = nv; commit(); toast('Saved as a draft.');
    if (panel) paintPanel();
  }

  /* ───────── export, drafts ───────── */
  const download = (name, text, type = 'text/javascript') => { const u = URL.createObjectURL(new Blob([text], { type })); const a = Object.assign(document.createElement('a'), { href: u, download: name }); document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 2000); };
  function lessonFile(l) {
    const where = l.week ? whereOf(l.week, l.day) : 'Skills Lab';
    return `/* ${course.code} · ${where} — ${String(l.title).replace(/\*\//g, '')}. Made in Studio on ${new Date().toISOString().slice(0, 10)}.\n   Ids (lesson, activities, fields) are the keys of students' saved work: never rename them after students start. */\nwindow.DEC15_LESSON = ${JSON.stringify(l, null, 2)};\n`;
  }
  const courseEntry = l => { const i = dayInfo(l); return `{ id: '${l.id}', day: ${l.day}, status: 'ready', title: ${JSON.stringify(i.title)}, art: '${i.art}',\n  parts: ${JSON.stringify(i.parts)},\n  stages: ${JSON.stringify(i.stages)}, tones: ${JSON.stringify(i.tones)},\n  scripts: ['${folderOf(l.week)}/${l.id}.js'] }`; };
  function exportLesson(id) {
    const d = ls.get(K_DRAFTS, {}), l = d.lessons?.[id] || (id === lesson.id ? lesson : null);
    if (!l) { toast('Open that page first, or it has no draft.'); return; }
    download(`${id}.js`, lessonFile(l));
    toast(`Downloaded ${id}.js — put it in ${folderOf(l.week)}/.`);
  }
  function discard(id) {
    const d = ls.get(K_DRAFTS, {}), only = (d.days || []).some(x => x.id === id);
    if (!confirm(only ? 'Delete this page? It exists only on this device, so it will be gone.' : 'Discard your changes to this page and go back to the published version?')) return;
    delete d.lessons?.[id]; if (d.saved) delete d.saved[id]; d.days = (d.days || []).filter(x => x.id !== id); ls.set(K_DRAFTS, d);
    try { sessionStorage.removeItem(P + '-undo-' + id); } catch (e) { /* ignore */ }
    reloadTo(only ? '#/studio' : location.hash);
  }

  /* ───────── page templates for "New page" ───────── */
  const STARTS = {
    blank: { name: 'Blank page', sections: () => [blankStage(1)] },
    listening: { name: 'Listening lesson', sections: () => [{ ...blankStage(1), id: 'listen', tone: 'teal', art: 'listening', title: 'Listening', subtitle: 'Before, while and after listening',
      activities: [{ ...blankActivity(), id: uid('pre'), short: 'Predict', title: 'Before you listen', goal: 'Predict the answers.', grouping: 'Pair', blocks: [{ type: 'steps', items: [{ who: 'alone', text: 'Read the questions.' }, { who: 'pair', text: 'Predict the kind of answer for each gap.' }] }] },
        { ...blankActivity(), id: uid('lis'), short: 'Listen', title: 'Listen and answer', goal: 'Answer the questions.', blocks: [CAT.find(c => c.name === 'Listening recording').make(), CAT.find(c => c.name === 'Sentence / note completion').make()] }] }] },
    reading: { name: 'Reading lesson', sections: () => [{ ...blankStage(1), id: 'read', tone: 'blue', art: 'reading', title: 'Reading', subtitle: 'Skim, scan, answer',
      activities: [{ ...blankActivity(), id: uid('rd'), short: 'Read', title: 'Read the passage', goal: 'Find the information quickly.', blocks: [CAT.find(c => c.name === 'Reading passage').make(), CAT.find(c => c.name === 'True / False / Not Given').make()] }] }] },
    writing: { name: 'Writing lesson', sections: () => [{ ...blankStage(1), id: 'write', tone: 'clay', art: 'writing', title: 'Writing', subtitle: 'Plan, write, check',
      activities: [{ ...blankActivity(), id: uid('pl'), short: 'Plan', title: 'Plan your answer', goal: 'Decide your position and main ideas.', grouping: 'Pair', blocks: [{ type: 'key', title: 'The key idea', points: ['Point one', 'Point two'] }, CAT.find(c => c.type === 'fields' && c.cat === 'Write').make()] },
        { ...blankActivity(), id: uid('wr'), short: 'Write', title: 'Write', goal: 'Write at least 250 words.', blocks: [CAT.find(c => c.name === 'Writing task box').make(), CAT.find(c => c.name === 'Band descriptor self-check').make()] }] }] },
    speaking: { name: 'Speaking lesson', sections: () => [{ ...blankStage(1), id: 'speak', tone: 'plum', art: 'discussion', title: 'Speaking', subtitle: 'Parts 1, 2 and 3',
      activities: [{ ...blankActivity(), id: uid('p1'), short: 'Part 1', title: 'Part 1 questions', goal: 'Answer with reasons and examples.', grouping: 'Pair', blocks: [CAT.find(c => c.name === 'Speaking Part 1 / Part 3 questions').make()] },
        { ...blankActivity(), id: uid('p2'), short: 'Part 2', title: 'Cue card', goal: 'Talk for 1–2 minutes.', grouping: 'Pair', blocks: [CAT.find(c => c.name === 'Speaking Part 2 cue card').make(), { type: 'language', title: 'Useful language', groups: [{ label: 'Starting', phrases: ['I’d like to talk about …'] }] }] }] }] },
    four: { name: 'All four skills', sections: () => ['listening', 'reading', 'writing', 'speaking'].flatMap(k => STARTS[k].sections()) }
  };
  function createPage(f) {
    const week = Number(f.week.value), day = Number(f.day.value), title = f.title.value.trim() || 'New page';
    if (!(week >= 1 && day >= 1)) { toast(UNITS ? `Choose a ${UW.toLowerCase()} and a ${DW.toLowerCase()} number.` : 'Choose a week and a day.'); return; }
    const id = `${PREFIX}w${week}d${day}`;
    if (days.some(d => d.id === id)) { toast(`${whereOf(week, day)} already exists — open it and switch on Edit.`); return; }
    const from = f.from.value;
    let sections;
    if (from.startsWith('copy:')) { const src = ls.get(K_DRAFTS, {}).lessons?.[from.slice(5)] || (from.slice(5) === lesson.id ? lesson : null);
      if (!src) { toast('Open that page once first, then copy it.'); return; } sections = freshIds(clone(src.sections)); }
    else sections = STARTS[from].sections();
    sections.forEach((s, i) => { s.number = String(i + 1).padStart(2, '0'); });
    const l = { id, week, day, title, duration: 'About 1 hour', journey: 'What students will be able to do by the end.', finish: { title: 'Next', text: '' }, sections, extras: [], glossary: [] };
    const d = ls.get(K_DRAFTS, {}); d.lessons = d.lessons || {}; d.days = d.days || [];
    d.lessons[id] = l; d.days.push({ id, week, day, ...dayInfo(l) }); d.saved = d.saved || {}; d.saved[id] = Date.now();
    ls.set(K_DRAFTS, d); ls.set(K_EDIT, true);
    reloadTo('#/' + id);
  }

  /* ───────── #/studio ───────── */
  function pageHTML() {
    const d = ls.get(K_DRAFTS, {}), ids = Object.keys(d.lessons || {}), only = new Set((d.days || []).map(x => x.id));
    const ago = t => { if (!t) return ''; const m = Math.round((Date.now() - t) / 6e4); return m < 1 ? 'just now' : m < 60 ? `${m} min ago` : m < 1440 ? `${Math.round(m / 60)} h ago` : new Date(t).toLocaleDateString(); };
    const weekly = days.filter(x => x.week && x.status === 'ready');
    const nextFree = (() => { for (let w = 1; w < 60; w++) for (let dd = 1; dd <= (UNITS ? 40 : 5); dd++) if (!days.some(x => x.id === `${PREFIX}w${w}d${dd}`)) return [w, dd]; return [1, 1]; })();
    return `<div class="sx-page">
      <header class="sx-hero"><div><span class="eyebrow">${esc(course.code)} · Studio</span><h1>Design with the blocks</h1>
        <p>Edit any page in place, or build a new one from the course’s own elements. Your work is saved as a <b>draft on this device</b> until you publish it.</p></div>
        <label class="sx-switch-big"><input type="checkbox" data-sx-edit-toggle${editing ? ' checked' : ''}><span class="sx-sw" aria-hidden="true"><i></i></span><span><b>Edit mode</b><small>${editing ? 'On — toolbars show on every block' : 'Off — pages look as students see them'}</small></span></label></header>
      <section class="sx-card"><h2>${I.plus}New page</h2>
        <form class="sx-new" data-sx-new>
          ${UNITS ? `<label>${UW}<select name="week">${course.weeks.map(w => `<option value="${w.n}"${w.n === nextFree[0] ? ' selected' : ''}>${esc(w.theme)}</option>`).join('')}</select></label>` : `<label>Week<input name="week" type="number" min="1" value="${nextFree[0]}" required></label>`}
          <label>${DW}<input name="day" type="number" min="1" value="${nextFree[1]}" required></label>
          <label class="sx-grow">Title<input name="title" type="text" placeholder="e.g. Reading: matching headings" required></label>
          <label class="sx-grow">Start from<select name="from">${Object.entries(STARTS).map(([k, v]) => `<option value="${k}">${esc(v.name)}</option>`).join('')}
            <optgroup label="A copy of …">${weekly.map(x => `<option value="copy:${x.id}">${esc(whereOf(x.week, x.day))} · ${esc(x.title)}</option>`).join('')}</optgroup></select></label>
          <button class="sx-btn" type="submit">${I.plus}Create</button></form>
        <p class="sx-hint">The page gets the id <code>${esc(PREFIX)}w&lt;${UNITS ? UW.toLowerCase() : 'week'}&gt;d&lt;${UNITS ? DW.toLowerCase() : 'day'}&gt;</code>${UNITS ? ` (${course.weeks.map(w => `${w.n} = ${esc(w.theme)}`).join(', ')})` : ''} and appears on the course map at once (on this device).</p></section>
      <section class="sx-card"><h2>${I.edit}Drafts on this device <em>${ids.length}</em></h2>
        ${ids.length ? `<ul class="sx-drafts">${ids.map(id => { const l = d.lessons[id]; return `<li><span class="sx-d-tag${only.has(id) ? ' is-new' : ''}">${only.has(id) ? 'New' : 'Edited'}</span>
          <a href="#/${esc(id)}"><b>${esc(l.week ? whereOf(l.week, l.day) : id)} · ${esc(l.title)}</b><small>${esc(id)} · saved ${ago(d.saved?.[id])}</small></a>
          <span class="sx-d-acts"><button type="button" class="sx-btn-q" data-sx-export="${esc(id)}">${I.out}Lesson file</button><button type="button" class="sx-btn-q" data-sx-entry="${esc(id)}">course.js entry</button><button type="button" class="sx-btn-q is-danger" data-sx-discard="${esc(id)}">${I.del}</button></span></li>`; }).join('')}</ul>
          <div class="sx-row"><button type="button" class="sx-btn" data-sx-all>${I.out}Download all drafts</button><label class="sx-btn-q sx-file">Import drafts<input type="file" accept=".json,application/json" data-sx-import hidden></label></div>`
          : `<p class="sx-empty">No drafts yet. Switch on <b>Edit mode</b> and open any page, or create a new one above.</p><label class="sx-btn-q sx-file">Import drafts<input type="file" accept=".json,application/json" data-sx-import hidden></label>`}</section>
      <section class="sx-card sx-how"><h2>${I.studio}How it works</h2><ol>
        <li><b>Edit.</b> With Edit mode on, hover a block for its toolbar: move, duplicate, copy, delete, <b>Edit</b> (all its fields) and <b>+</b> (add a block below). <b>Double-click any text</b> to type over it. Activities and stages have their own bars.</li>
        <li><b>Build.</b> “Add a block” opens the catalogue: IELTS question types (True/False/Not Given, completion, matching, cue cards …) and every element of the design. The <a href="#/${course.galleryLesson || PREFIX + 'w1d2'}">Block gallery</a> shows each one working; copy any block there and paste it on your page.</li>
        <li><b>Publish.</b> Download the lesson file and put it in ${UNITS ? 'its skill’s folder (<code>lessons/b2/&lt;skill&gt;/</code>)' : '<code>lessons/week&lt;n&gt;/</code>'} with its course.js entry — or <b>Download all drafts</b> and give the file to Claude to publish. Then discard the draft.</li>
        <li><b>Undo</b> with the dock button or <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>Z</kbd> (outside a text box).</li></ol>
        <button type="button" class="sx-btn-q" data-sx-off>Turn Studio off on this device</button></section>
    </div>`;
  }
  function onStudioPage(t) {
    if (t.dataset.sxExport) { exportLesson(t.dataset.sxExport); return true; }
    if (t.dataset.sxDiscard) { discard(t.dataset.sxDiscard); return true; }
    if (t.dataset.sxEntry) { const l = ls.get(K_DRAFTS, {}).lessons?.[t.dataset.sxEntry]; if (!l) return true; const txt = courseEntry(l);
      navigator.clipboard?.writeText(txt).then(() => toast('Copied: paste it into the week’s days in lessons/course.js.'), () => prompt('Copy this into lessons/course.js:', txt)); return true; }
    if (t.dataset.sxAll != null) { const d = ls.get(K_DRAFTS, {}); download(`${course.id}-studio-drafts-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(d, null, 2), 'application/json'); return true; }
    if (t.dataset.sxOff != null) { if (!confirm('Turn Studio off on this device? Your drafts stay saved; open #/studio to turn it on again.')) return true; ls.del(K_ON); ls.del(K_EDIT); location.hash = '#/'; location.reload(); return true; }
    return false;
  }

  /* ───────── the dock ───────── */
  let dock = null, route = '';
  const onLessonPage = () => { const seg = location.hash.replace(/^#\/?/, '').split('/'); return seg[0] === lesson.id && !['notebook', 'sources'].includes(seg[1] || ''); };
  function paintDock() {
    if (!dock) { dock = document.createElement('div'); dock.className = 'sx-dock'; dock.setAttribute('role', 'toolbar'); dock.setAttribute('aria-label', 'Studio'); document.body.append(dock); }
    const draft = isDraft();
    dock.innerHTML = `<a class="sx-dock-brand" href="#/studio" title="Studio home">${I.studio}<span>Studio</span></a>
      <label class="sx-dock-sw${onLessonPage() ? '' : ' is-off'}" title="${onLessonPage() ? 'Show the editing tools on this page' : 'Open a lesson page to edit it'}"><input type="checkbox" data-sx-edit-toggle${editing ? ' checked' : ''}${onLessonPage() ? '' : ' disabled'}><span class="sx-sw" aria-hidden="true"><i></i></span><span>Edit</span></label>
      ${onLessonPage() ? `<span class="sx-dock-state${draft ? ' is-draft' : ''}">${draft ? 'Draft' : 'Published'}</span>
      <button type="button" data-sx-dock="undo" title="Undo (Ctrl/Cmd + Z)"${undo.length ? '' : ' disabled'}>${I.undo}<span>Undo</span></button>
      <button type="button" data-sx-dock="export" title="Download this page as a lesson file">${I.out}<span>Export</span></button>` : ''}`;
  }
  function afterRender(r) {
    route = r; document.body.classList.toggle('sx-editing', editing && onLessonPage());
    paintDock();
    if (panel && !at(dec(openKey))) closePanel();
    if (panel && openKind === 'block') document.querySelector(`[data-sx="${CSS.escape(openKey)}"]`)?.classList.add('is-open');
  }

  /* ───────── events ───────── */
  document.addEventListener('click', e => {
    const t = e.target.closest('button, a, input[type=checkbox], label'); if (!t) { if (menu && !e.target.closest('.sx-menu')) closeMenu(); return; }
    const stop = () => { e.preventDefault(); e.stopPropagation(); };
    if (menu && !t.closest('.sx-menu') && !t.dataset.sxAdd && t.dataset.sxAct !== 'add') closeMenu();
    if (t.matches('[data-sx-edit-toggle]')) { e.stopPropagation(); setTimeout(() => { editing = t.checked; ls.set(K_EDIT, editing); if (!editing) closePanel(); route === 'studio' ? rerender() : rerender(); }, 0); return; }
    if (t.dataset.sxAct) { stop(); onBlockTool(t); return; }
    if (t.dataset.sxAdd) { stop(); openMenu(t, t.dataset.sxAdd, Number(t.dataset.sxAt)); return; }
    if (t.dataset.sxPick) { stop(); pick(t.dataset.sxPick === 'clip' ? 'clip' : Number(t.dataset.sxPick)); return; }
    if (t.dataset.sxMenuClose != null) { stop(); closeMenu(); return; }
    if (t.dataset.sxA) { stop(); onActBar(t); return; }
    if (t.dataset.sxS) { stop(); onStageBar(t); return; }
    if (t.dataset.sxL) { stop(); onLessonBar(t); return; }
    if (t.dataset.sxLi) { stop(); onList(t); return; }
    if (t.closest('.sx-panel') && (t.dataset.sxP || t.dataset.sxPtab || t.dataset.sxAddkey)) { stop(); onPanelButton(t); return; }
    if (t.dataset.sxDock) { stop(); if (t.dataset.sxDock === 'undo') doUndo(); else exportLesson(lesson.id); return; }
    if (route === 'studio' && t.closest('.sx-page') && onStudioPage(t)) { stop(); return; }
  }, true);
  document.addEventListener('submit', e => { if (e.target.matches('[data-sx-new]')) { e.preventDefault(); createPage(e.target); } }, true);
  document.addEventListener('input', e => { if (e.target.closest('.sx-panel') && e.target.dataset.sxV) { e.stopPropagation(); onPanelInput(e.target); } }, true);
  document.addEventListener('change', e => {
    if (e.target.closest('.sx-panel') && e.target.dataset.sxV) { e.stopPropagation(); if (e.target.tagName === 'SELECT' || e.target.type === 'checkbox') onPanelInput(e.target); return; }
    if (e.target.matches('[data-sx-import]')) { const f = e.target.files?.[0]; if (!f) return;
      f.text().then(txt => { const inc = JSON.parse(txt); if (!inc || typeof inc.lessons !== 'object') throw new Error('not a drafts file');
        const d = ls.get(K_DRAFTS, {}); d.lessons = { ...(d.lessons || {}), ...inc.lessons }; d.saved = { ...(d.saved || {}), ...(inc.saved || {}) };
        d.days = [...(d.days || []).filter(x => !(inc.days || []).some(y => y.id === x.id)), ...(inc.days || [])];
        ls.set(K_DRAFTS, d); toast(`Imported ${Object.keys(inc.lessons).length} draft(s).`); setTimeout(() => location.reload(), 600); })
        .catch(err => toast('Could not import: ' + err.message)); }
  }, true);
  document.addEventListener('dblclick', e => { if (!editing || !onLessonPage() || inline || e.target.closest('.sx-panel, .sx-menu, .sx-dock, .sx-bar, .sx-tools, input, textarea, select')) return; if (e.target.closest('#main')) startInline(e); }, true);
  document.addEventListener('keydown', e => {
    if (inline) { if (e.key === 'Escape') { e.preventDefault(); inline.el.blur(); }   // blur saves; Esc after typing keeps the text
      else if (e.key === 'Enter' && !e.shiftKey && !inline.rich && !/text|explain|note|model/.test(String(inline.path.at(-1)))) { e.preventDefault(); inline.el.blur(); }
      e.stopPropagation(); return; }
    if (e.key === 'Escape') { if (menu) { closeMenu(); return; } if (panel) { closePanel(); return; } }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z' && !e.shiftKey && !e.target.closest('input, textarea, [contenteditable="true"]') && onLessonPage()) { e.preventDefault(); doUndo(); }
  }, true);
  window.addEventListener('hashchange', () => { closeMenu(); });

  return { editing: () => editing && onLessonPage(), wrap, addHere, actBar, stageBar, lessonBar, pageHTML, afterRender };
};
