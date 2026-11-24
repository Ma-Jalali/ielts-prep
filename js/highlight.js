/* IELTS · highlight, underline and notes on a practice exercise (js/sheet.js), as in the computer-delivered test,
   where candidates select words and choose Highlight or Notes. Select words inside a question block ([data-hl]) and a
   small toolbar appears; click a highlighted word to add a note or remove it. Saved on this device for each exercise
   (localStorage 'ielts-hl-<lesson id>'), as character positions inside each block, so they survive a reload. */
(function () {
  const SKIP = 'input, select, textarea, button, option, .xs-gn, .xs-hl-note-ic, .xs-hl-bar, .xs-hl-pop';
  const key = () => 'ielts-hl-' + (window.DEC15_LESSON?.id || 'page');
  const load = () => { try { return JSON.parse(localStorage.getItem(key())) || {}; } catch (e) { return {}; } };
  const store = d => { try { localStorage.setItem(key(), JSON.stringify(d)); } catch (e) { /* private mode: highlights last until reload */ } };
  let data = {}, bar = null, pop = null, pending = null;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

  const texts = root => { const out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement?.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT }); let n; while ((n = w.nextNode())) out.push(n); return out; };
  function offset(root, node, off) {   // characters of question text from the start of the block to (node, off)
    const r = document.createRange(); r.setStart(root, 0); r.setEnd(node, off); let n = 0;
    for (const t of texts(root)) { if (!r.intersectsNode(t)) continue; n += t === node ? off : t.length; }
    return n;
  }
  function unpaint(root) { root.querySelectorAll('mark.xs-hl').forEach(m => m.replaceWith(...m.childNodes)); root.querySelectorAll('.xs-hl-note-ic').forEach(x => x.remove()); root.normalize(); }
  function paint(root) {
    unpaint(root); const list = data[root.dataset.hl] || [];
    list.forEach((h, i) => { let pos = 0, last = null;
      for (const t of texts(root)) { const a = pos, b = pos + t.length; pos = b; if (b <= h.s || a >= h.e) continue;
        let node = t; const from = Math.max(h.s - a, 0), to = Math.min(h.e - a, t.length);
        if (to < node.length) node.splitText(to); if (from > 0) node = node.splitText(from);
        if (!node.textContent.trim()) continue;
        const m = document.createElement('mark'); m.className = `xs-hl is-${h.k}${h.n ? ' has-note' : ''}`; m.dataset.hlI = i; if (h.n) m.title = h.n;
        node.replaceWith(m); m.append(node); last = m; }
      if (last && h.n) { const ic = document.createElement('span'); ic.className = 'xs-hl-note-ic'; ic.dataset.hlI = i; ic.title = h.n; ic.setAttribute('aria-label', 'Note: ' + h.n); last.after(ic); }
    });
  }
  const paintAll = () => { data = load(); document.querySelectorAll('.xs [data-hl]').forEach(paint); };
  const save = root => { store(data); paint(root); };

  function hide() { bar?.remove(); bar = null; pop?.remove(); pop = null; pending = null; }
  function place(el, rect) { document.body.append(el); const w = el.offsetWidth, h = el.offsetHeight;
    let x = rect.left + rect.width / 2 - w / 2, y = rect.top - h - 10; if (y < 8) y = rect.bottom + 10;
    el.style.left = Math.max(8, Math.min(innerWidth - w - 8, x)) + scrollX + 'px'; el.style.top = y + scrollY + 'px'; }   // page position: it scrolls with the words
  const btn = (act, label, icon) => `<button type="button" data-hl-act="${act}">${icon}<span>${label}</span></button>`;
  const IC = { hl: '<i class="xs-hl-sw is-hl"></i>', ul: '<i class="xs-hl-sw is-ul"></i>', note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v12H9l-5 4z"/></svg>', del: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>' };

  function showBar(html, rect, ctx) { hide(); bar = document.createElement('div'); bar.className = 'xs-hl-bar'; bar.setAttribute('role', 'toolbar'); bar.innerHTML = html; pending = ctx; place(bar, rect); }
  function showNote(root, i, rect) { const h = (data[root.dataset.hl] || [])[i]; if (!h) return; hide();
    pop = document.createElement('div'); pop.className = 'xs-hl-pop'; pending = { root, i };
    pop.innerHTML = `<label><b>Note</b><textarea rows="3" maxlength="300" placeholder="Write a short note…">${esc(h.n || '')}</textarea></label><div><button type="button" class="btn-quiet btn-sm" data-hl-act="note-del">Delete note</button><button type="button" class="btn btn-sm" data-hl-act="note-save">Save</button></div>`;
    place(pop, rect); pop.querySelector('textarea').focus(); }

  function onSelect() {
    const sel = getSelection(); if (!sel || sel.isCollapsed || !sel.rangeCount) return;
    const rg = sel.getRangeAt(0), root = (rg.commonAncestorContainer.nodeType === 1 ? rg.commonAncestorContainer : rg.commonAncestorContainer.parentElement)?.closest('.xs [data-hl]');
    if (!root || !sel.toString().trim()) return;
    const s = offset(root, rg.startContainer, rg.startOffset), e = offset(root, rg.endContainer, rg.endOffset); if (e <= s) return;
    showBar(btn('hl', 'Highlight', IC.hl) + btn('ul', 'Underline', IC.ul) + btn('note', 'Note', IC.note), rg.getBoundingClientRect(), { root, s, e });
  }
  document.addEventListener('mouseup', e => { if (e.target.closest?.('.xs-hl-bar, .xs-hl-pop')) return; setTimeout(onSelect, 0); });
  document.addEventListener('keyup', e => { if (e.shiftKey || e.key === 'Shift') setTimeout(onSelect, 0); });
  document.addEventListener('touchend', () => setTimeout(onSelect, 250));
  document.addEventListener('mousedown', e => { if (!e.target.closest?.('.xs-hl-bar, .xs-hl-pop')) { if (bar || pop) { const keep = e.target.closest?.('mark.xs-hl, .xs-hl-note-ic'); hide(); if (keep) e.preventDefault(); } } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && (bar || pop)) hide(); });

  document.addEventListener('click', e => {
    const a = e.target.closest?.('[data-hl-act]');
    if (a && pending) { const { root } = pending, list = data[root.dataset.hl] = data[root.dataset.hl] || [], act = a.dataset.hlAct;
      if (act === 'hl' || act === 'ul' || act === 'note') { const { s, e: end } = pending;
        const keep = list.filter(h => h.e <= s || h.s >= end); keep.push({ s, e: end, k: act === 'ul' ? 'ul' : 'hl' }); keep.sort((x, y) => x.s - y.s);
        data[root.dataset.hl] = keep; getSelection()?.removeAllRanges(); const i = keep.findIndex(h => h.s === s && h.e === end), rect = a.closest('.xs-hl-bar').getBoundingClientRect();
        save(root); hide(); if (act === 'note') showNote(root, i, rect); return; }
      if (act === 'remove') { list.splice(pending.i, 1); save(root); hide(); return; }
      if (act === 'edit-note') { const rect = a.closest('.xs-hl-bar').getBoundingClientRect(); showNote(root, pending.i, rect); return; }
      if (act === 'note-save' || act === 'note-del') { const h = list[pending.i]; if (h) { const v = act === 'note-save' ? pop.querySelector('textarea').value.trim() : ''; if (v) h.n = v; else delete h.n; } save(root); hide(); return; }
    }
    const m = e.target.closest?.('.xs mark.xs-hl, .xs .xs-hl-note-ic');
    if (m && getSelection()?.isCollapsed !== false) { const root = m.closest('[data-hl]'), i = +m.dataset.hlI, h = (data[root.dataset.hl] || [])[i]; if (!h) return;
      showBar(btn('edit-note', h.n ? 'Edit note' : 'Add note', IC.note) + btn('remove', 'Remove', IC.del), m.getBoundingClientRect(), { root, i }); }
  });

  /* the page is redrawn by app.js: paint again whenever an exercise sheet appears */
  const mo = new MutationObserver(muts => { if (muts.some(m => [...m.addedNodes].some(n => n.nodeType === 1 && (n.matches?.('.xs') || n.querySelector?.('.xs'))))) { hide(); paintAll(); } });
  const start = () => { const main = document.getElementById('main') || document.body; mo.observe(main, { childList: true, subtree: true }); paintAll(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
