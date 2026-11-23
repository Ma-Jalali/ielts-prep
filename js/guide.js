/* Course guide pages: #/calendar and #/assessments. Data: window.DEC15_GUIDE (lessons/guide.js).
   app.js calls createDEC15Guide(ctx) only when the course has a guide; DEC15 has none, so nothing here shows there.
   The page remembers the open week / tab while the student is on it; the readiness checklist is kept on the device. */
window.createDEC15Guide = function ({ esc, icon, days, toast }) {
  const G = window.DEC15_GUIDE;
  if (!G) return null;
  const DAY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (dt, n) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + n);
  const fmt = dt => `${dt.getDate()} ${MON[dt.getMonth()]}`;
  const today = (() => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); })();
  const same = (a, b) => a.getTime() === b.getTime();
  const weeks = G.weeks;
  const span = w => [parse(w.start), w.end ? parse(w.end) : addDays(parse(w.start), 4)];
  const nowIdx = (() => { const i = weeks.findIndex(w => { const [a, b] = span(w); return today >= a && today <= addDays(b, 2); }); return i >= 0 ? i : today < parse(weeks[0].start) ? 0 : weeks.length - 1; })();
  let calSel = nowIdx, asTab = 'lrw', filter = 'all', shownWeek = -1;
  /* ───────── Class 30 seminar schedule (G.classSchedule): helpers shared by both pages ───────── */
  const S = G.classSchedule || null, SG = S ? S.groups : [];
  const weekIdx = n => weeks.findIndex(w => w.n === n);
  const dayLabel = dt => `${DAY[(dt.getDay() + 6) % 7]} ${fmt(dt)}`;
  const semDay = n => { const w = weeks.find(x => x.n === n); if (!w || w.brk) return null;
    const i = w.days.findIndex(d => (d.events || []).some(e => e.type === 'seminar')); return i < 0 ? null : { w, i, dt: addDays(parse(w.start), i) }; };
  const ipDays = () => { const w = weeks.find(x => x.n === 7); if (!w) return [];
    return w.days.map((d, i) => ((d.events || []).some(e => /Interactive Presentation/.test(e.title) && e.counts) ? addDays(parse(w.start), i) : null)).filter(Boolean); };
  const myGroup = () => SG.find(g => g.g === Number(store.get('semGroup'))) || null;
  const myName = () => (myGroup() ? store.get('semName') || '' : '');
  const myStrategy = () => { const g = myGroup(), n = myName(); return g && n ? (g.ip.strategies.find(([, who]) => who === n) || [])[0] || '' : ''; };
  function rolesOf(g, n) {   // what a group does in week n
    const r = []; if (n === g.opening) r.push('opening'); if (n === g.seminar) r.push('seminar'); if (n === g.seminar + 1) r.push('video'); if (n === 7) r.push('ip');
    if (!r.length && n >= 2 && n <= 6) r.push('audience'); return r; }
  const ROLE = { opening: ['Opening Remarks', 'Opening Remarks'], seminar: ['Seminar', 'Seminar'], video: ['Video due', 'Video response due'], ip: ['Presentation', 'Interactive Presentation'], audience: ['Audience', 'Audience: give feedback'] };
  const SVG = p => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const MIC = SVG('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>');
  const GLOBE = SVG('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.4 5.3 3.4 8.5s-1 6.1-3.4 8.5c-2.4-2.4-3.4-5.3-3.4-8.5s1-6.1 3.4-8.5z"/>');
  const CAL_ADD = SVG('<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M3.5 9.5h17M8 3v4M16 3v4M12 12.5v5M9.5 15h5"/>');
  const COLS = SVG('<rect x="3.5" y="4.5" width="4.5" height="15" rx="1.5"/><rect x="9.75" y="4.5" width="4.5" height="15" rx="1.5"/><rect x="16" y="4.5" width="4.5" height="15" rx="1.5"/>');
  const ROWS = SVG('<rect x="3.5" y="4" width="17" height="4.5" rx="1.5"/><rect x="3.5" y="9.75" width="17" height="4.5" rx="1.5"/><rect x="3.5" y="15.5" width="17" height="4.5" rx="1.5"/>');
  const openPast = new Set();   // past days a phone user opened (they start folded on small screens)
  const store = { get(k) { try { return JSON.parse(localStorage.getItem('ielts-guide') || '{}')[k]; } catch (e) { return undefined; } },
    set(k, v) { try { const o = JSON.parse(localStorage.getItem('ielts-guide') || '{}'); o[k] = v; localStorage.setItem('ielts-guide', JSON.stringify(o)); } catch (e) { /* storage blocked */ } } };
  const ready = new Set(days.filter(d => d.status === 'ready').map(d => d.id));
  const lessonId = code => { const m = String(code).match(/^W(\d+) D(\d+)$/); return m ? `${window.DEC15_COURSE.idPrefix || ''}w${m[1]}d${m[2]}` : null; };
  const type = t => G.eventTypes[t] || ['Event', '#5d6a74'];
  const head = (eyebrow, title, text, art) => `<header class="gd-hero"><div class="gd-hero-copy"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${text}</p></div>${art}</header>`;

  /* ───────── the next assessed task, for the countdown card ───────── */
  function upcoming() {
    for (const w of weeks) { if (w.brk) continue;
      for (let i = 0; i < w.days.length; i++) for (const e of w.days[i].events || []) {
        if (e.type !== 'assess') continue; const dt = addDays(parse(w.start), i);
        if (dt >= today) return { e, dt, w, i, n: Math.round((dt - today) / 864e5) };
      } }
    return null;
  }

  /* ───────── Course calendar ───────── */
  const CAL_ART = `<img class="gd-hero-art" src="assets/ui/guide/calendar.svg" alt="" width="360" height="240">`;
  function eventHTML(e) {
    const [label, col] = type(e.type);
    const times = e.times ? `<ul class="gd-times">${e.times.map(([k, t]) => `<li><span>${esc(G.shifts[k] || k)}</span><b>${esc(t)}</b></li>`).join('')}</ul>` : '';
    const meta = [e.time ? `${icon('clock')}${esc(e.time)}` : '', e.where ? `${icon('map')}${esc(e.where)}` : ''].filter(Boolean);
    return `<li class="gd-ev${e.type === 'assess' ? ' is-assess' : ''}${e.counts ? ' is-counts' : ''}" style="--ec:${col}">
      <span class="gd-ev-type"><i aria-hidden="true"></i>${esc(label)}${e.must ? '<em>Must attend</em>' : ''}${e.counts ? '<em>Counts</em>' : ''}</span>
      <b class="gd-ev-title">${esc(e.title)}</b>${times}
      ${meta.length ? `<p class="gd-ev-meta">${meta.map(m => `<span>${m}</span>`).join('')}</p>` : ''}
      ${e.note ? `<p class="gd-note">${esc(e.note)}</p>` : ''}
      ${e.reg ? `<p class="gd-reg">${icon('pen')}${esc(e.reg === true ? 'Register on CET Connect' : e.reg)}</p>` : ''}</li>`;
  }
  function lessonList(items, hw) {
    return `<ul class="gd-lessons${hw ? ' is-hw' : ''}">${items.map(([code, title, at]) => { const id = at ? at.split('/')[0] : lessonId(code), on = id && ready.has(id);   // at: 'lessonId/stage' when the part is taught on another day's page
      return `<li>${on ? `<a href="#/${esc(at || id)}" title="Open this lesson">` : '<span>'}${esc(title)}${on ? `<i class="gd-go">${icon('arrow')}</i></a>` : '</span>'}</li>`; }).join('')}</ul>`;
  }
  /* small dots in a day's header: one per kind of event, so the week can be read at a glance */
  function dayDots(d) {
    const kinds = [...new Set((d.events || []).map(e => e.type))]; if (!kinds.length && !d.class) return '';
    const n = (d.class || []).length + (d.hw || []).length;
    return `<span class="gd-ddots" aria-hidden="true">${n ? `<small>${n} lesson${n === 1 ? '' : 's'}</small>` : ''}${kinds.map(k => `<i style="--ec:${type(k)[1]}" title="${esc(type(k)[0])}"></i>`).join('')}</span>`;
  }
  function dayCard(w, d, i) {
    const dt = addDays(parse(w.start), i), isToday = same(dt, today), assess = (d.events || []).some(e => e.type === 'assess');
    const showC = filter !== 'events', showE = filter !== 'classes';
    const sem = (d.events || []).filter(e => e.type === 'seminar'), ev = (d.events || []).filter(e => e.type !== 'seminar');
    const body = d.off ? `<p class="gd-off">${esc(d.off)}</p>` : `${semDayHTML(w, i, sem)}
      ${showC && d.class ? `<section><h4>${icon('users')}In class</h4>${lessonList(d.class)}</section>` : ''}
      ${showC && d.hw ? `<section><h4>${icon('home')}After class</h4>${lessonList(d.hw, true)}</section>` : ''}
      ${showE && ev.length ? `<section><h4>${icon('flag')}${filter === 'events' ? 'Events' : 'Also on today'}</h4><ul class="gd-evs">${ev.map(eventHTML).join('')}</ul></section>` : ''}
      ${filter === 'events' && !ev.length && !sem.length ? '<p class="gd-empty">No extra events.</p>' : ''}`;
    const past = dt < today, key = `${calSel}-${i}`;
    return `<article class="gd-day${isToday ? ' is-today' : ''}${assess ? ' has-assess' : ''}${d.off ? ' is-off' : ''}${past ? ' is-past' : ''}${openPast.has(key) ? ' is-open' : ''}" style="--i:${i}">
      <header><span class="gd-dtile" aria-hidden="true"><small>${DAY[i]}</small><b>${dt.getDate()}</b></span><span class="gd-dh"><span class="gd-dname">${DAYS[i]}</span><span class="gd-ddate">${fmt(dt)}</span></span>${dayDots(d)}${isToday ? '<em class="gd-today">Today</em>' : ''}${past ? `<button type="button" class="gd-past-btn" data-gd-day="${key}" aria-expanded="${openPast.has(key)}">${openPast.has(key) ? 'Hide' : 'Show'}</button>` : ''}</header><div class="gd-dbody">${body}</div></article>`;
  }
  /* previous / this week / next, shown beside the week title and under a break */
  function weekNav() {
    return `<span class="gd-wnav" role="group" aria-label="Change week"><button type="button" data-gd-week="${calSel - 1}"${calSel ? '' : ' disabled'} aria-label="Previous week">${icon('left')}</button>${calSel === nowIdx ? '' : `<button type="button" class="gd-wnav-now" data-gd-week="${nowIdx}">This week</button>`}<button type="button" data-gd-week="${calSel + 1}"${calSel < weeks.length - 1 ? '' : ' disabled'} aria-label="Next week">${icon('arrow')}</button></span>`;
  }
  function weekPanel(w) {
    if (w.brk) return `<div class="gd-break"><div class="gd-break-art" aria-hidden="true">${icon('sprout')}</div><div><span class="eyebrow">${esc(w.dates)}</span><h2>${esc(w.title)}</h2><p>${esc(w.text)}</p>
      ${w.events ? `<ul class="gd-evs gd-evs-row">${w.events.map(eventHTML).join('')}</ul>` : ''}<div class="gd-week-tools">${weekNav()}</div></div></div>`;
    const counts = w.days.some(d => (d.events || []).some(e => e.counts));
    return `<div class="gd-week-head"><div><span class="eyebrow">Week ${w.n} · ${esc(w.dates)}</span><h2>${esc(w.theme)}</h2>${w.sub ? `<p>${esc(w.sub)}</p>` : ''}</div>
      <div class="gd-week-tools">${counts ? `<span class="gd-flag">${icon('alert')}Assessment week</span>` : ''}${weekNav()}</div></div>
      ${semWeekHTML(w)}
      <div class="gd-viewbar"><div class="gd-seg" role="group" aria-label="Show">${[['all', 'Everything'], ['classes', 'Classes & homework'], ['events', 'Workshops & events']].map(([k, l]) => `<button type="button" data-gd-filter="${k}" aria-pressed="${filter === k}">${l}</button>`).join('')}</div>
        <div class="gd-seg gd-lay" role="group" aria-label="Layout">${[['list', 'Agenda', ROWS], ['cols', 'Week grid', COLS]].map(([k, l, ic]) => `<button type="button" data-gd-layout="${k}" aria-pressed="${layout() === k}" title="${l}">${ic}<span>${l}</span></button>`).join('')}</div></div>
      <div class="gd-days${layout() === 'list' ? ' is-list' : ''}">${w.days.map((d, i) => dayCard(w, d, i)).join('')}</div>`;
  }
  const layout = () => store.get('layout') === 'cols' ? 'cols' : 'list';   // the agenda (one day per row) is the default: easier to read

  /* ───────── Class 30: the seminar schedule panel (a fold-out menu above the weeks) ───────── */
  const WK = [2, 3, 4, 5, 6, 7];
  const whenOf = n => { const sd = semDay(n); return sd ? dayLabel(sd.dt) : (weeks.find(w => w.n === n)?.dates || ''); };
  function semPanelHTML() {
    if (!S) return '';
    const me = myGroup(), name = myName(), open = store.get('semOpen'), curN = weeks[nowIdx]?.n;
    const ips = ipDays(), ipWhen = ips.length ? ips.map(dayLabel).join(' or ') : 'Week 7';
    const ipShort = ips.length === 2 && ips[0].getMonth() === ips[1].getMonth() ? `${DAY[(ips[0].getDay() + 6) % 7]} ${ips[0].getDate()} / ${DAY[(ips[1].getDay() + 6) % 7]} ${fmt(ips[1])}` : ipWhen;
    const pick = `<label class="gd-sem-pick"><span>${icon('users')}Find my name</span><select data-gd-me>
        <option value="">Choose…</option>${SG.map(g => `<optgroup label="Group ${g.g} · ${esc(g.country)}">${g.members.map(m => `<option value="${g.g}|${esc(m)}"${me && me.g === g.g && name === m ? ' selected' : ''}>${esc(m)}</option>`).join('')}</optgroup>`).join('')}</select></label>`;
    const matrix = `<div class="gd-sm-wrap"><div class="gd-sm" role="table" aria-label="${esc(S.short)}: what each group does, Weeks 2 to 7">
        <div class="gd-sm-row gd-sm-hd" role="row"><span role="columnheader" class="gd-sm-corner">Group</span>${WK.map(n => `<button type="button" role="columnheader" data-gd-week="${weekIdx(n)}" class="${n === curN ? 'is-now' : ''}" title="Open Week ${n} in the calendar"><b>Week ${n}</b><small>${esc(n === 7 ? ipShort : whenOf(n))}</small></button>`).join('')}</div>
        ${SG.map(g => `<div class="gd-sm-row${me && me.g === g.g ? ' is-mine' : ''}" role="row" style="--gc:${g.color}"><span role="rowheader" class="gd-sm-g"><i>${g.g}</i><span><b>Group ${g.g}</b><small>${esc(g.country)}</small></span></span>
          ${WK.map(n => `<span role="cell" class="gd-sm-c">${rolesOf(g, n).map(r => `<em class="r-${r}">${ROLE[r][0]}</em>`).join('')}</span>`).join('')}</div>`).join('')}
      </div></div>
      <p class="gd-sm-key"><span class="r-opening">Opening Remarks · 5–7 min</span><span class="r-seminar">Seminar · one week later</span><span class="r-video">Video response · within a week of the Seminar</span><span class="r-audience">Audience · Feedback Tool + 150–200 words the same day</span><span class="r-ip">Interactive Presentation · alone, 3 min</span></p>`;
    const cards = `<div class="gd-sgs">${SG.map(g => { const mine = me && me.g === g.g;
      return `<article class="gd-sg${mine ? ' is-mine' : ''}" id="gd-sg-${g.g}" style="--gc:${g.color}">
        <header><span class="gd-sg-n">${g.g}</span><div><span class="gd-sg-k">Group ${g.g}${mine ? ' · your group' : ''}</span><b>${esc(g.topic)}</b></div><span class="gd-sg-country">${GLOBE}${esc(g.country)}</span></header>
        <p class="gd-sg-q">${esc(g.question)}</p>
        <ul class="gd-sg-people" aria-label="Members">${g.members.map(m => `<li class="${mine && m === name ? 'is-me' : ''}"><i aria-hidden="true">${esc(m[0])}</i>${esc(m)}</li>`).join('')}</ul>
        <ol class="gd-sg-when">
          <li class="r-opening"><span>Opening Remarks</span><b>${esc(whenOf(g.opening))}</b><small>Week ${g.opening}</small></li>
          <li class="r-seminar"><span>Seminar</span><b>${esc(whenOf(g.seminar))}</b><small>Week ${g.seminar}</small></li>
          <li class="r-video"><span>Video response</span><b>Week ${g.seminar + 1}</b><small>within one week</small></li>
        </ol>
        <details class="gd-sg-ip"${mine ? ' open' : ''}><summary><span><b>Week 7 · Interactive Presentation</b><small>${esc(ipWhen)} · about Australia</small></span><i class="lg-fold-chev" aria-hidden="true"></i></summary>
          <p>${esc(g.ip.question)}</p>
          <ol>${g.ip.strategies.map(([st, who]) => `<li class="${who ? '' : 'is-free'}${mine && who && who === name ? ' is-me' : ''}"><span>${esc(st)}</span><b>${who ? esc(who) : 'Not chosen yet'}</b></li>`).join('')}</ol></details>
      </article>`; }).join('')}</div>`;
    const status = me ? `<span class="gd-sem-me" style="--gc:${me.color}">${name ? esc(name) + ' · ' : ''}Group ${me.g}</span>` : '<span class="gd-sem-hint">Find your name</span>';
    return `<details class="gd-sem" data-gd-sem${open ? ' open' : ''}>
      <summary><span class="gd-sem-ic">${MIC}</span><span class="gd-sem-t"><span class="eyebrow">${esc(S.name)}</span><b>Seminar schedule</b><small>Who presents when · group members · Week 7 strategies</small></span>
        <span class="gd-sem-peek" aria-hidden="true">${SG.map(g => `<i style="--gc:${g.color}" class="${me && me.g === g.g ? 'is-mine' : ''}">${g.g}</i>`).join('')}</span>${status}<i class="lg-fold-chev" aria-hidden="true"></i></summary>
      <div class="gd-sem-body">
        <div class="gd-sem-tools">${pick}${me ? `<button type="button" class="gd-sem-clear" data-gd-me-clear>Not me</button>` : ''}<span class="gd-sp"></span>
          <button type="button" class="btn-quiet btn-sm" data-gd-ics>${CAL_ADD}${me ? `Add Group ${me.g}’s dates to my calendar` : 'Add all seminar dates to my calendar'}</button></div>
        ${matrix}${cards}
      </div></details>`;
  }
  /* the strip under a week's title: what Class 30 does this week, and what it means for me */
  function semWeekHTML(w) {
    if (!S || w.brk || w.n < 2 || w.n > 7) return '';
    const sd = semDay(w.n), me = myGroup(), when = sd ? dayLabel(sd.dt) : '', ips = ipDays();
    const items = SG.flatMap(g => rolesOf(g, w.n).filter(r => r === 'opening' || r === 'seminar' || r === 'video').map(r => ({ g, r })));
    let mine = '';
    if (me) { const rs = rolesOf(me, w.n), strat = myStrategy();
      mine = rs.includes('opening') ? `Your group gives its <b>Opening Remarks</b> on <b>${esc(when)}</b>.`
        : rs.includes('seminar') ? `Your group leads its <b>Seminar</b> on <b>${esc(when)}</b>.`
        : rs.includes('ip') ? `Your <b>Interactive Presentation</b>: ${esc(ips.map(dayLabel).join(' or '))}${strat ? ` · your strategy: <b>${esc(strat)}</b>` : ''}.${rs.includes('video') ? ' Your video response is due this week too.' : ''}`
        : rs.includes('video') ? `Your group’s <b>video response</b> is due this week.${when ? ` On ${esc(when)} you are the audience.` : ''}`
        : rs.includes('audience') && when ? `You are the <b>audience</b> on ${esc(when)}: Feedback Tool and 150–200 words of feedback the same day.` : ''; }
    const chips = [...items.map(({ g, r }) => `<button type="button" class="gd-swc r-${r}" style="--gc:${g.color}" data-gd-sem-show="${g.g}"><em>${ROLE[r][1]}</em><b>Group ${g.g}</b><small>${esc(g.country)}</small></button>`),
      ...(w.n === 7 ? [`<button type="button" class="gd-swc r-ip" data-gd-sem-show="ip"><em>Interactive Presentations</em><b>Everyone</b><small>${esc(ips.map(dayLabel).join(' & '))}</small></button>`] : [])].join('');
    return `<div class="gd-semweek${me && mine ? ' has-me' : ''}" style="${me ? `--gc:${me.color}` : ''}"><span class="gd-semweek-ic">${MIC}</span>
      <div class="gd-semweek-t"><span class="eyebrow">${esc(S.short)} · ${w.n === 7 ? 'Interactive Presentations' : 'seminars'}${when ? ` · ${esc(when)}` : ''}</span>${mine ? `<p>${mine}</p>` : `<p>${me ? '' : 'Find your name in the seminar schedule to see your own dates here.'}</p>`}</div>
      <div class="gd-semweek-chips">${chips}</div></div>`;
  }
  /* inside a day: the seminar session (who presents, who is in the group), or the Week 7 presentations */
  function semDayHTML(w, i, sem) {
    if (!S) return '';
    const me = myGroup(), dt = addDays(parse(w.start), i);
    const isIP = w.n === 7 && ipDays().some(x => same(x, dt));
    if (!sem.length && !isIP) return '';
    if (isIP) { const strat = myStrategy();
      return `<section class="gd-semday is-ip"><h4>${MIC}${esc(S.short)} · Interactive Presentations</h4>
        ${me ? `<button type="button" class="gd-semrow is-mine" style="--gc:${me.color}" data-gd-sem-show="${me.g}"><span class="gd-semrow-k">Your strategy</span><b>${esc(strat || 'Choose one with your group')}</b><small>Group ${me.g} · ${esc(me.ip.question)}</small></button>`
          : `<button type="button" class="gd-semrow" data-gd-sem-show="ip"><span class="gd-semrow-k">Thursday or Friday</span><b>One strategy each, about Australia</b><small>See every group’s strategies</small></button>`}</section>`; }
    const rows = sem.map(e => { const g = SG.find(x => x.g === e.group); if (!g) return ''; const mine = me && me.g === g.g;
      return `<button type="button" class="gd-semrow r-${e.role}${mine ? ' is-mine' : ''}" style="--gc:${g.color}" data-gd-sem-show="${g.g}"><span class="gd-semrow-k">${e.role === 'opening' ? 'Opening Remarks · 5–7 min' : 'Seminar · 3 parts'}${mine ? '<em>Your group</em>' : ''}</span>
        <b>Group ${g.g} · ${esc(g.country)}</b><small>${esc(g.members.join(' · '))}</small></button>`; }).join('');
    const audience = me && !sem.some(e => e.group === me.g) ? `<p class="gd-semnote">${icon('pen')}You are the audience: Feedback Tool, then 150–200 words of feedback the same day.</p>` : '';
    return `<section class="gd-semday"><h4>${MIC}${esc(S.short)} · Seminar session</h4>${rows}${audience}</section>`;
  }
  /* a calendar file (.ics) with the seminar dates: one group's, or everyone's */
  function downloadICS() {
    const me = myGroup(), groups = me ? [me] : SG, pad = n => String(n).padStart(2, '0');
    const ymd = dt => `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}`, now = new Date();
    const stamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}00Z`;
    const txt = v => String(v).replace(/[\;,]/g, m => '\\' + m).replace(/\n/g, '\\n'), out = [];
    const add = (dt, len, title, desc) => out.push(['BEGIN:VEVENT', `UID:${window.DEC15_CLASS.id}-${S.short.replace(/\W+/g, '').toLowerCase()}-${ymd(dt)}-${out.length}@ielts-prep`, `DTSTAMP:${stamp}`, `DTSTART;VALUE=DATE:${ymd(dt)}`, `DTEND;VALUE=DATE:${ymd(addDays(dt, len))}`, `SUMMARY:${txt(title)}`, `DESCRIPTION:${txt(desc)}`, 'END:VEVENT'].join('\r\n'));
    groups.forEach(g => { const o = semDay(g.opening), sm = semDay(g.seminar), who = `Group ${g.g}: ${g.members.join(', ')}\n${g.question}`;
      if (o) add(o.dt, 1, `${S.short} · Opening Remarks · Group ${g.g} (${g.country})`, who);
      if (sm) add(sm.dt, 1, `${S.short} · Seminar · Group ${g.g} (${g.country})`, who); });
    const ips = ipDays(); if (ips.length) add(ips[0], ips.length, `${S.short} · Interactive Presentation (Week 7)`, me ? `${myStrategy() ? 'Your strategy: ' + myStrategy() + '\n' : ''}${me.ip.question}` : 'One strategy each, about Australia.');
    const body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//IELTS//Seminar schedule//EN', 'CALSCALE:GREGORIAN', ...out, 'END:VCALENDAR'].join('\r\n');
    const url = URL.createObjectURL(new Blob([body], { type: 'text/calendar' })), a = Object.assign(document.createElement('a'), { href: url, download: `${S.short.replace(/\s+/g, '-').toLowerCase()}-seminars${me ? '-group-' + me.g : ''}.ics` });
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
    toast('Calendar file saved. Open it to add the dates to your phone or laptop calendar.');
  }
  function showSem(which) {   // open the schedule panel and bring a group (or the Week 7 strategies) into view
    store.set('semOpen', true); const det = document.querySelector('.gd-sem'); if (!det) return; det.open = true;
    const el = which === 'ip' ? document.querySelector('.gd-sg-ip') : which === 'all' ? det : document.getElementById(`gd-sg-${which}`);
    if (which === 'ip') document.querySelectorAll('.gd-sg-ip').forEach(x => { x.open = true; });
    (el || det).scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    const card = el?.closest('.gd-sg') || el; card?.classList.remove('is-flash'); void card?.offsetWidth; card?.classList.add('is-flash');
  }
  // remember whether the schedule is open; ← and → change the week on the calendar page
  document.addEventListener('toggle', e => { if (e.target.matches?.('details[data-gd-sem]')) store.set('semOpen', e.target.open); }, true);
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || !/^#\/calendar/.test(location.hash) || !document.querySelector('.gd-rail')) return;
    if (e.target.closest?.('input, select, textarea, [contenteditable="true"], dialog[open]')) return;
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0, to = calSel + step; if (!step || to < 0 || to >= weeks.length) return;
    e.preventDefault(); document.querySelector(`.gd-wnav [data-gd-week="${to}"]`)?.click();
  });

  /* ───────── focus cards at the top of both pages ───────── */
  const classDays = () => weeks.flatMap((w, wi) => w.brk ? [] : w.days.map((d, i) => ({ w, wi, d, i, dt: addDays(parse(w.start), i) })).filter(x => !x.d.off));
  function todayHTML() {
    const all = classDays(), t = all.find(x => same(x.dt, today)), nx = t || all.find(x => x.dt > today); if (!nx) return '';
    const { w, d, i, dt } = nx, id = `${window.DEC15_COURSE.idPrefix || ''}w${w.n}d${i + 1}`, info = days.find(x => x.id === id), open = ready.has(id), n = Math.round((dt - today) / 864e5);
    const ev = (d.events || []).filter(e => e.type !== 'seminar'), sem = (d.events || []).some(e => e.type === 'seminar');
    const row = ([code, title, at]) => { const lid = at ? at.split('/')[0] : lessonId(code), on = lid && ready.has(lid);
      return `<li>${on ? `<a href="#/${esc(at || lid)}">${esc(title)}${icon('arrow')}</a>` : `<span>${esc(title)}</span>`}</li>`; };
    return `<section class="gx-today${t ? ' is-today' : ''}">
      <span class="gx-cal" aria-hidden="true"><small>${DAY[i]}</small><b>${dt.getDate()}</b><small>${MON[dt.getMonth()]}</small></span>
      <div class="gx-today-main"><span class="eyebrow">${t ? 'Today' : n === 1 ? 'Tomorrow' : 'Next class day'} · ${DAYS[i]} · Week ${w.n}</span>
        <h2>${esc(info?.title || w.theme)}</h2>
        ${d.class ? `<ol class="gx-today-list">${d.class.map(row).join('')}</ol>` : ''}
        <div class="gx-today-foot">${open ? `<a class="btn btn-sm" href="#/${id}">${t ? 'Open today’s lesson' : 'Open the lesson'}${icon('arrow')}</a>` : ''}
          ${d.hw ? `<span class="gx-chip">${icon('home')}${d.hw.length} homework</span>` : ''}${ev.length ? `<span class="gx-chip">${icon('flag')}${ev.length} event${ev.length === 1 ? '' : 's'}</span>` : ''}${sem ? `<span class="gx-chip is-sem">${MIC}Seminar session</span>` : ''}</div></div>
    </section>`;
  }
  function nextHTML(onAssess) {
    const nx = upcoming(); if (!nx) return '';
    const fill = nx.n === 0 ? 1 : Math.max(.06, 1 - Math.min(nx.n, 30) / 30);
    return `<section class="gx-next${nx.e.counts ? ' is-counts' : ''}">
      <span class="gx-ring${nx.n === 0 ? ' is-word' : ''}" style="--p:${fill}" aria-hidden="true"><b>${nx.n === 0 ? 'Today' : nx.n}</b>${nx.n ? `<small>day${nx.n === 1 ? '' : 's'}</small>` : ''}</span>
      <div class="gx-next-main"><span class="eyebrow">Next assessment</span><b class="gx-next-t">${esc(nx.e.title)}</b>
        <small>${DAYS[nx.i]} ${fmt(nx.dt)} · Week ${nx.w.n}${nx.n ? ` · in ${nx.n} day${nx.n === 1 ? '' : 's'}` : ''}</small>
        <span class="gx-kind ${nx.e.counts ? 'is-counts' : 'is-practice'}">${nx.e.counts ? 'Counts towards your score' : esc(nx.e.note || 'Practice')}</span></div>
      ${onAssess ? `<button type="button" class="gx-link" data-gd-jump="gd-s-ready">Get ready${icon('arrow')}</button>` : `<a class="gx-link" href="#/assessments">Assessments${icon('arrow')}</a>`}
    </section>`;
  }
  function calendarHTML() {
    const w = weeks[calSel];
    return `${head(esc(G.calendarEyebrow || ''), 'Course calendar', esc(G.calendarIntro || 'Your classes, homework and events, one week at a time.'), CAL_ART)}
    <div class="gx-focus">${todayHTML()}<div class="gx-side">${nextHTML(false)}
      <details class="gd-terms"><summary><span>${icon('clock')}<b>Term dates and breaks</b></span><i class="lg-fold-chev" aria-hidden="true"></i></summary>
        <dl>${(G.terms || []).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>${G.resit ? `<p class="gd-warn">${icon('alert')}${esc(G.resit)}</p>` : ''}</details></div>
    </div>
    ${semPanelHTML()}
    <nav class="gd-rail" aria-label="Weeks">${weeks.map((x, i) => { const cnt = !x.brk && x.days.some(d => (d.events || []).some(e => e.counts));
      const me = myGroup(), mine = me && !x.brk && rolesOf(me, x.n).some(r => r === 'opening' || r === 'seminar' || r === 'ip'), semWk = S && !x.brk && (semDay(x.n) || x.n === 7);
      return `<button type="button" class="${x.brk ? 'is-brk' : ''}${i === nowIdx ? ' is-now' : ''}${mine ? ' is-mine' : ''}" data-gd-week="${i}" aria-pressed="${i === calSel}">${x.brk ? `<b>${icon('sprout')}</b><small>Break</small>` : `<b>${x.n}</b><small>${esc(x.dates)}</small>`}${cnt ? '<i class="gd-dot" title="Assessment this week"></i>' : ''}${semWk ? `<i class="gd-semmark" title="${esc(S.short)} seminar week${mine ? ' · your group presents' : ''}">${MIC}</i>` : ''}${i === nowIdx ? '<em>Now</em>' : ''}</button>`; }).join('')}</nav>
    <section class="gd-week${calSel !== shownWeek ? ' gd-anim' : ''}" aria-live="polite">${(shownWeek = calSel, weekPanel(w))}</section>
    <div class="gd-legend">${Object.entries(G.eventTypes).filter(([k]) => k !== 'seminar' || S).map(([, [l, c]]) => `<span style="--ec:${c}"><i></i>${esc(l)}</span>`).join('')}<span class="gd-keys" aria-hidden="true"><kbd>←</kbd><kbd>→</kbd> change week</span></div>
    ${G.calendarFoot ? `<p class="gd-foot">${icon('bulb')}<span>${G.calendarFoot}</span></p>` : ''}`;
  }

  /* ───────── Assessments ───────── */
  const AS_ART = `<img class="gd-hero-art" src="assets/ui/guide/assessments.svg" alt="" width="360" height="240">`;
  const a = (href, text) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(text)} ${icon('open')}</a>`;
  const facts = rows => `<dl class="gd-facts">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
  /* Everything on this page comes from window.DEC15_GUIDE (lessons/guide.js): G.assessments (the tabs), G.ready
     (the checklist), G.help (the folds at the bottom). Text may contain simple HTML (<b>, <a>). */
  const fold = (title, sub, body, open, ic) => `<details class="gd-fold"${open ? ' open' : ''}><summary>${ic ? `<span class="gd-fold-ic">${icon(ic)}</span>` : ''}<span><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span><i class="lg-fold-chev" aria-hidden="true"></i></summary><div class="gd-fold-body">${body}</div></details>`;
  const steps = items => `<ol class="gd-steps">${items.map(t => `<li>${t}</li>`).join('')}</ol>`;
  const TAB_IC = { book: SVG('<path d="M4 5.5c3-1 5.5-.6 8 1.2 2.5-1.8 5-2.2 8-1.2v13c-3-1-5.5-.6-8 1.2-2.5-1.8-5-2.2-8-1.2z"/><path d="M12 6.7v13"/>'), people: SVG('<circle cx="8" cy="9" r="3"/><circle cx="16.5" cy="9.5" r="2.5"/><path d="M3 19c.6-3 2.7-4.6 5-4.6s4.4 1.6 5 4.6M13.5 18.5c.5-2.3 1.8-3.6 3.5-3.6 1.8 0 3 1.3 3.5 3.6"/>'), mic: MIC, chat: SVG('<path d="M4 6h10v7H8.5L5 16v-3H4z"/><path d="M14 9h6v7h-1v3l-3.5-3H11v-3"/>'),
    ear: SVG('<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 9a2 2 0 0 1 4 0"/>'), pen: SVG('<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>') };
  const AS = G.assessments || [];
  const TABS = AS.map(x => [x.key, x.label, x.sub || '']);
  if (!AS.some(x => x.key === asTab)) asTab = AS[0]?.key;
  const card = c => `<article class="gd-card" style="--ec:${esc(c.color || '#4f68b8')}">${c.k ? `<span class="gd-card-k">${c.k}</span>` : ''}${c.title ? `<b>${c.title}</b>` : ''}${c.text ? `<p>${c.text}</p>` : ''}${c.list ? `<ul>${c.list.map(t => `<li>${t}</li>`).join('')}</ul>` : ''}</article>`;
  function tabBody(k) {
    const x = AS.find(t => t.key === k); if (!x) return '<p class="gd-lead">Add assessments to lessons/guide.js (assessments: [...]).</p>';
    return `${x.lead ? `<p class="gd-lead">${x.lead}</p>` : ''}
      ${x.facts?.length ? facts(x.facts) : ''}
      ${x.cards?.length ? `<div class="${x.cards.length === 2 ? 'gd-two' : 'gd-cards3'}">${x.cards.map(card).join('')}</div>` : ''}
      ${(x.sections || []).map(s => `<h3 class="gd-h3">${s.title}</h3>${s.text ? `<p>${s.text}</p>` : ''}${s.steps ? steps(s.steps) : ''}${s.cards ? `<div class="${s.cards.length === 2 ? 'gd-two' : 'gd-cards3'}">${s.cards.map(card).join('')}</div>` : ''}`).join('')}
      ${x.tip ? `<p class="gd-tip">${icon('bulb')}<span>${x.tip}</span></p>` : ''}
      ${x.links?.length ? `<p class="gd-links">${icon('book')}${x.links.map(([t, h]) => a(h, t)).join(' ')}</p>` : ''}`;
  }
  const READY = (G.ready?.items || []).map((t, i) => Array.isArray(t) ? t : ['r' + i, t]);
  /* the ten weeks as one strip: a dot for each assessment, a bar for the Seminar + Portfolio weeks, and where we are now */
  function stripHTML() {
    const ws = weeks.filter(w => !w.brk), KC = { real: '#e64626', practice: '#3a58a0', check: '#2f7a52' };
    const cur = (() => { const w = weeks[nowIdx]; return w?.brk ? null : w?.n; })();
    const cells = ws.map(w => { const items = (G.timeline || []).filter(t => { const m = String(t.week).match(/^(\d+)(?:–(\d+))?$/); if (!m) return false; const a = +m[1], b = m[2] ? +m[2] : a; return w.n >= a && w.n <= b; });
      const range = items.find(t => /–/.test(String(t.week)));
      return `<li class="${w.n === cur ? 'is-now' : ''}${range ? ' in-range' : ''}"><b>${w.n}</b>${items.filter(t => !/–/.test(String(t.week))).map(t => `<i style="--k:${KC[t.kind] || '#5d6a74'}" title="${esc(t.title)}"></i>`).join('')}${range ? `<span class="gd-sc-bar" style="--k:${KC[range.kind]}"></span>` : ''}</li>`; }).join('');
    return `<ol class="gd-strip" aria-label="The weeks">${cells}</ol><p class="gd-strip-key"><span style="--k:#e64626">Counts</span><span style="--k:#3a58a0">Practice</span><span style="--k:#2f7a52">Check-in</span>${cur ? `<span class="is-now">Week ${cur} · now</span>` : ''}</p>`;
  }
  /* the day a timeline item happens: the week's assessment event (the one that counts, if there are two) */
  function tlDate(t) {
    if (!/^\d+$/.test(String(t.week))) return null; const w = weeks.find(x => x.n === Number(t.week)); if (!w) return null; let best = null;
    w.days.forEach((d, i) => (d.events || []).forEach(e => { if (e.type !== 'assess') return; const sc = e.counts ? 2 : 1; if (!best || sc > best.sc) best = { sc, dt: addDays(parse(w.start), i) }; }));
    return best ? best.dt : null;
  }
  function classTable() {
    const me = myGroup();
    return `<div class="gd-c30"><div class="gd-c30-head"><div><span class="eyebrow">${esc(S.name)}</span><b>Your class’s groups and dates</b></div><a class="btn-quiet btn-sm" href="#/calendar" data-gd-sem-go>${MIC}Full seminar schedule</a></div>
      <div class="gd-table-wrap"><table class="gd-table gd-c30t"><thead><tr><th>Group</th><th>Topic · country</th><th>Members</th><th>Opening Remarks</th><th>Seminar</th></tr></thead>
      <tbody>${SG.map(g => `<tr class="${me && me.g === g.g ? 'is-mine' : ''}" style="--gc:${g.color}"><td><span class="gd-c30-n">${g.g}</span></td><td><b>${esc(g.topic)}</b><small>${GLOBE}${esc(g.country)}</small></td><td>${esc(g.members.join(', '))}</td><td><b>${esc(whenOf(g.opening))}</b><small>Week ${g.opening}</small></td><td><b>${esc(whenOf(g.seminar))}</b><small>Week ${g.seminar}</small></td></tr>`).join('')}</tbody></table></div></div>`;
  }
  function assessmentsHTML() {
    const tick = store.get('ready') || {}, n = READY.filter(([k]) => tick[k]).length;
    const total = (G.weights || []).reduce((t, w) => t + w.total, 0);
    return `${head(esc(G.assessEyebrow || 'How you are assessed'), 'Assessments', esc(G.assessIntro || 'What you do, when, and how much it counts — in plain English.'), AS_ART)}
    <div class="gx-focus is-assess">${nextHTML(true)}
      <section class="gx-readycard"><div class="gd-ready-meter" style="--p:${n / READY.length}"><b>${n}/${READY.length}</b><small>${n === READY.length ? 'Ready!' : 'ready'}</small></div>
        <div><span class="eyebrow">Before every assessment</span><b>${esc(G.ready?.title || 'Get ready')}</b><small>${esc(G.ready?.sub || 'Quick checks — tick them before each test.')}</small></div>
        <button type="button" class="gx-link" data-gd-jump="gd-s-ready">Check${icon('arrow')}</button></section></div>
    <nav class="gd-jump" aria-label="On this page">${[['gd-s-score', 'Your score'], ['gd-s-year', 'When'], ['gd-s-four', 'The four assessments'], ['gd-s-ready', 'Get ready'], ['gd-s-help', 'Rules & help']].map(([id, l]) => `<button type="button" data-gd-jump="${id}">${l}</button>`).join('')}</nav>
    <section class="gx-score" id="gd-s-score"><div class="gx-sec-head"><h2 class="gd-h2">Where your score comes from</h2><p>Four skills · 100% · each assessment adds to one skill</p></div>
      <div class="gx-card">
        <div class="gx-bar" role="img" aria-label="${(G.weights || []).map(w => `${w.skill} ${w.total}%`).join(', ')}">${(G.weights || []).map(w => `<span style="--w:${w.total / total};--ec:${w.color}"></span>`).join('')}</div>
        <div class="gx-skills">${(G.weights || []).map(w => `<div class="gx-skill" style="--ec:${w.color}"><span class="gx-skill-h"><i aria-hidden="true"></i><b>${esc(w.skill)}</b><em>${w.total}%</em></span>
          <ul>${w.parts.map(([p, v]) => `<li><span>${esc(p)}</span><b>${v}%</b><i style="--p:${v / w.total}" aria-hidden="true"></i></li>`).join('')}</ul></div>`).join('')}</div>
      </div>
    </section>
    <section id="gd-s-year"><div class="gx-sec-head"><h2 class="gd-h2">When are my assessments?</h2><p>${weeks.filter(w => !w.brk).length} weeks · the next one is marked</p></div>
      <div class="gx-card gx-when">${stripHTML()}
      <ol class="gx-tl">${(() => { const info = (G.timeline || []).map(tlDate), next = info.findIndex(x => x && x >= today);
        return (G.timeline || []).map((t, i) => { const dt = info[i], done = dt && dt < today, n = dt ? Math.round((dt - today) / 864e5) : null, me = myGroup();
          const when = dt ? (done ? `<span class="gx-when is-done">${icon('check')}Done</span>` : `<span class="gx-when${i === next ? ' is-next' : ''}">${n === 0 ? 'Today' : n === 1 ? 'Tomorrow' : `in ${n} days`}</span>`) : '';
          const sub = /–/.test(String(t.week)) && S && me ? `Group ${me.g}: Opening Remarks ${whenOf(me.opening)} · Seminar ${whenOf(me.seminar)}` : t.text;
          return `<li class="is-${t.kind}${done ? ' is-done' : ''}${i === next ? ' is-next' : ''}"><span class="gx-tl-d"><b>Week ${esc(String(t.week))}</b>${dt ? `<small>${esc(dayLabel(dt))}</small>` : ''}</span>
            <span class="gx-tl-t"><b>${esc(t.title)}</b><small>${esc(sub)}</small></span>
            <span class="gx-tl-r"><em class="gx-kind is-${t.kind}">${t.kind === 'real' ? 'Counts' : t.kind === 'practice' ? 'Practice' : 'Check-in'}</em>${when}</span></li>`; }).join(''); })()}</ol></div>
    </section>
    <section class="gd-tabs-wrap" id="gd-s-four"><div class="gx-sec-head"><h2 class="gd-h2">The four assessments</h2><p>Choose one to see what you do</p></div>
      <div class="gd-tabs" role="tablist">${TABS.map(([k, l, s]) => `<button type="button" role="tab" data-gd-tab="${k}" aria-selected="${asTab === k}"><span class="gx-tab-ic" aria-hidden="true">${TAB_IC[k]}</span><span><b>${l}</b><small>${s}</small></span></button>`).join('')}</div>
      <div class="gd-tab" role="tabpanel">${tabBody(asTab)}</div>
    </section>
    <section id="gd-s-ready"><div class="gx-sec-head"><h2 class="gd-h2">Before every assessment</h2><p>Tick each one — it is saved on this device</p></div>
      <div class="gd-ready"><div class="gd-ready-meter" style="--p:${n / READY.length}"><b>${n}/${READY.length}</b><small>${n === READY.length ? 'Ready!' : 'ready'}</small></div>
        <ul>${READY.map(([k, t]) => `<li><label><input type="checkbox" data-gd-ready="${k}"${tick[k] ? ' checked' : ''}><span>${esc(t)}</span></label></li>`).join('')}</ul></div>
      ${G.ready?.tip ? `<p class="gd-tip">${icon('flag')}<span>${G.ready.tip}</span></p>` : ''}
    </section>
    ${G.help?.length ? `<section id="gd-s-help"><div class="gx-sec-head"><h2 class="gd-h2">Rules and help</h2><p>Open the one you need</p></div>
      ${G.help.map(h => fold(esc(h.title), esc(h.sub || ''), h.html || '', false, h.icon)).join('')}` : ''}
    </section>`;
  }

  /* ───────── events ───────── */
  /* the "On this page" pills follow the reader: the section nearest the top is marked */
  let spyTick = false;
  document.addEventListener('scroll', () => { if (spyTick) return; spyTick = true; requestAnimationFrame(() => { spyTick = false;
    const nav = document.querySelector('.gd-jump'); if (!nav) return;
    const btns = [...nav.querySelectorAll('[data-gd-jump]')]; let cur = btns[0];
    for (const b of btns) { const el = document.getElementById(b.dataset.gdJump); if (el && el.getBoundingClientRect().top <= 230) cur = b; }
    btns.forEach(b => b.setAttribute('aria-current', b === cur ? 'true' : 'false')); }); }, { capture: true, passive: true });
  function onClick(t, d, rerender) {
    if (d.gdWeek != null) { calSel = Number(d.gdWeek); rerender(); document.querySelector(`[data-gd-week="${calSel}"]`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); return true; }
    if (d.gdJump) { document.getElementById(d.gdJump)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); return true; }
    if (d.gdDay) { openPast.has(d.gdDay) ? openPast.delete(d.gdDay) : openPast.add(d.gdDay); rerender(); return true; }
    if (d.gdFilter) { filter = d.gdFilter; rerender(); return true; }
    if (d.gdTab) {   // swap only the panel: the rest of the page stays still
      asTab = d.gdTab; const panel = document.querySelector('.gd-tab');
      if (!panel) { rerender(); return true; }
      document.querySelectorAll('[data-gd-tab]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.gdTab === asTab)));
      panel.style.minHeight = `${Math.max(parseFloat(panel.style.minHeight) || 0, panel.offsetHeight)}px`;   // never shorter than before: nothing above or below moves
      panel.innerHTML = tabBody(asTab); panel.classList.remove('is-swap'); void panel.offsetWidth; panel.classList.add('is-swap');
      t.focus({ preventScroll: true }); return true; }
    if (d.gdLayout) { store.set('layout', d.gdLayout); rerender(); return true; }
    if (d.gdSemShow) { showSem(d.gdSemShow); return true; }
    if (d.gdSemGo != null) { store.set('semOpen', true); return false; }
    if (d.gdIcs != null) { downloadICS(); return true; }
    if (d.gdMeClear != null) { store.set('semGroup', null); store.set('semName', ''); rerender(); return true; }
    return false;
  }
  function onChange(t, rerender) {
    if (t.dataset.gdMe != null) { const [g, n] = t.value.split('|'); store.set('semGroup', g ? Number(g) : null); store.set('semName', n || '');
      rerender(); if (g) { toast(`Hi ${n}! Your group’s dates are now marked in the calendar.`); showSem(g); } return true; }
    if (!t.dataset.gdReady) return false;
    const o = store.get('ready') || {}; o[t.dataset.gdReady] = t.checked; store.set('ready', o);
    const n = READY.filter(([k]) => o[k]).length, ms = document.querySelectorAll('.gd-ready-meter');
    if (ms.length) ms.forEach(m => { m.style.setProperty('--p', n / READY.length); m.innerHTML = `<b>${n}/${READY.length}</b><small>${n === READY.length ? 'Ready!' : 'ready'}</small>`; }); else rerender();
    if (READY.every(([k]) => o[k])) toast('All set — you are ready for your assessments!');
    return true;
  }
  function centerNow() { const el = document.querySelector('.gd-rail [aria-pressed="true"]'), rail = el?.parentElement; if (rail && rail.scrollWidth > rail.clientWidth) rail.scrollLeft = el.offsetLeft - rail.clientWidth / 2 + el.offsetWidth / 2; }
  return { calendarHTML, assessmentsHTML, onClick, onChange, centerNow };
};
