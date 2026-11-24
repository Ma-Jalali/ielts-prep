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
        const m = document.createElement('mark'); m.className = `xs-hl is-${h.k}${h.n ? ' has-note' : ''}`; m.dataset.hlI = i; 
        node.replaceWith(m); m.append(node); last = m; }
      if (last && h.n) { const ic = document.createElement('span'); ic.className = 'xs-hl-note-ic'; ic.dataset.hlI = i; ic.setAttribute('role', 'button'); ic.tabIndex = 0; ic.setAttribute('aria-label', 'Your note: ' + h.n); ic.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5h14v10H10l-5 4z"/></svg>'; last.after(ic); }
    });
  }
  const paintAll = () => { data = load(); document.querySelectorAll('.xs [data-hl]').forEach(paint); };
  const save = root => { store(data); paint(root); };

  function hide() { closeCard?.(); bar?.remove(); bar = null; pop?.remove(); pop = null; pending = null; }
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
      if (act === 'note-save' || act === 'note-del') { const h = list[pending.i]; if (h) { const v = act === 'note-save' ? pop.querySelector('textarea').value.trim() : ''; if (v) { h.n = v; h.t = Date.now(); } else { delete h.n; delete h.t; } } save(root); hide(); return; }
    }
    const ni = e.target.closest?.('.xs .xs-hl-note-ic'); if (ni) { openCard(ni); return; }
    if (card && e.target.closest?.('.xs-note-card')) return;
    const m = e.target.closest?.('.xs mark.xs-hl, .xs .xs-hl-note-ic');
    if (m && getSelection()?.isCollapsed !== false) { const root = m.closest('[data-hl]'), i = +m.dataset.hlI, h = (data[root.dataset.hl] || [])[i]; if (!h) return;
      showBar(btn('edit-note', h.n ? 'Edit note' : 'Add note', IC.note) + btn('remove', 'Remove', IC.del), m.getBoundingClientRect(), { root, i }); }
  });


  /* ── the note card: opens on hover (or tap) over a noted word or its note icon ── */
  let card = null, cardFor = null, hideT = 0;
  const words = (root, h) => { let pos = 0, out = ''; for (const t of texts(root)) { const a = pos, b = pos + t.length; pos = b; if (b <= h.s || a >= h.e) continue; out += t.textContent.slice(Math.max(h.s - a, 0), Math.min(h.e - a, t.length)); } return out.replace(/\s+/g, ' ').trim(); };
  const when = t => { if (!t) return ''; const d = (Date.now() - t) / 1000; return d < 60 ? 'just now' : d < 3600 ? `${Math.floor(d / 60)} min ago` : d < 86400 ? `${Math.floor(d / 3600)} h ago` : new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short' }); };
  function closeCard() { clearTimeout(hideT); card?.remove(); card = null; cardFor = null; }
  function openCard(m) {
    const root = m.closest('[data-hl]'), i = +m.dataset.hlI, h = (data[root?.dataset.hl] || [])[i]; if (!h || !h.n) return;
    if (cardFor === root.dataset.hl + ':' + i && card) { clearTimeout(hideT); return; }
    closeCard(); cardFor = root.dataset.hl + ':' + i;
    card = document.createElement('div'); card.className = 'xs-note-card'; card.setAttribute('role', 'dialog'); card.setAttribute('aria-label', 'Your note');
    card.innerHTML = `<header><span class="xs-nc-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5h14v10H10l-5 4z"/></svg></span><b>Your note</b>${h.t ? `<small>${when(h.t)}</small>` : ''}</header>
      <blockquote>${esc(words(root, h))}</blockquote><p>${esc(h.n).replace(/\n/g, '<br>')}</p>
      <footer><button type="button" data-nc="edit">Edit</button><button type="button" data-nc="del">Delete note</button></footer>`;
    const marks = root.querySelectorAll(`mark.xs-hl[data-hl-i="${i}"]`), first = marks[0]?.getBoundingClientRect(), lastR = (marks[marks.length - 1] || m).getBoundingClientRect();
    document.body.append(card); const w = card.offsetWidth, ht = card.offsetHeight, r = first || m.getBoundingClientRect();
    let x = r.left, y = lastR.bottom + 10; if (y + ht > innerHeight - 8) y = r.top - ht - 10;
    card.style.left = Math.max(8, Math.min(innerWidth - w - 8, x)) + scrollX + 'px'; card.style.top = Math.max(8, y) + scrollY + 'px';
    card.addEventListener('mouseenter', () => clearTimeout(hideT)); card.addEventListener('mouseleave', () => { hideT = setTimeout(closeCard, 250); });
    card.addEventListener('click', e => { const b = e.target.closest('[data-nc]'); if (!b) return; const rect = card.getBoundingClientRect(); closeCard();
      if (b.dataset.nc === 'edit') showNote(root, i, rect); else { delete h.n; delete h.t; save(root); } });
  }
  document.addEventListener('mouseover', e => { const m = e.target.closest?.('.xs mark.xs-hl.has-note, .xs .xs-hl-note-ic'); if (m) { clearTimeout(hideT); if (!bar && !pop) openCard(m); } });
  document.addEventListener('mouseout', e => { const m = e.target.closest?.('.xs mark.xs-hl.has-note, .xs .xs-hl-note-ic'); if (m && card && !card.contains(e.relatedTarget)) hideT = setTimeout(closeCard, 250); });
  document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches?.('.xs-hl-note-ic')) { e.preventDefault(); openCard(e.target); } if (e.key === 'Escape') closeCard(); });
  /* the page is redrawn by app.js: paint again whenever an exercise sheet appears */
  const mo = new MutationObserver(muts => { if (muts.some(m => [...m.addedNodes].some(n => n.nodeType === 1 && (n.matches?.('.xs') || n.querySelector?.('.xs'))))) { hide(); paintAll(); } });
  const start = () => { const main = document.getElementById('main') || document.body; mo.observe(main, { childList: true, subtree: true }); paintAll(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
