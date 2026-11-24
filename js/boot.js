/* Loader — chooses which lesson to open, loads its files, then starts the app.
   Addresses:  #/            course home (all weeks)
               #/iew1d1      a lesson's overview
               #/iew1d1/xyz  a page inside the lesson (stage id, sources, extra, notebook)
               #/studio      Studio: edit pages and build new ones (js/studio.js)
   Studio drafts (pages edited or built in the browser) are kept on this device; a draft replaces the lesson file
   while it exists, and a page that exists only as a draft is added to its week here. */
(() => {
  const course = window.DEC15_COURSE, cfg = window.DEC15_CONFIG;
  const drafts = (() => { try { return JSON.parse(localStorage.getItem(course.id + '-studio-drafts') || '{}'); } catch (e) { return {}; } })();
  /* IELTS: pages built in Studio and published online (js/gate.js fetched them). They join their skill like any lesson;
     a page that also has a lesson file opens the online version. Unpublished ones reach only the teacher. */
  const online = {};
  (window.IELTS_PAGES || []).forEach(p => { if (!p || !p.id || !p.lesson) return; online[p.id] = p;
    let w = course.weeks.find(x => x.n === p.week); if (!w) return;
    const e = p.entry || {}, info = { id: p.id, day: p.day, status: 'ready', title: p.lesson.title || e.title || p.id, sub: e.sub || '', art: e.art || w.art || 'writing',
      parts: e.parts || ['Lesson'], stages: (p.lesson.sections || []).map(s => s.id), tones: (p.lesson.sections || []).map(s => s.tone || 'teal'), scripts: [], online: true, published: !!p.published };
    const at = w.days.findIndex(d => d.id === p.id);
    if (at >= 0) w.days[at] = { ...w.days[at], ...info }; else { w.days.push(info); w.days.sort((a, b) => a.day - b.day); } });
  (drafts.days || []).forEach(nd => {   // pages that exist only in Studio
    if (course.weeks.some(w => w.days.some(d => d.id === nd.id))) return;
    let w = course.weeks.find(x => x.n === nd.week);
    if (!w) { w = { n: nd.week, theme: 'Week ' + nd.week, summary: '', days: [] }; course.weeks.push(w); course.weeks.sort((a, b) => a.n - b.n); }
    w.days.push({ ...nd, status: 'ready', draft: true, scripts: [] }); w.days.sort((a, b) => a.day - b.day);
  });
  const days = course.weeks.flatMap(w => w.days.map(d => ({ ...d, week: w.n, theme: w.theme })))
    .concat((course.lab?.strands || []).flatMap(st => st.lessons.map((l, i) => ({ ...l, lab: st.id, labN: i + 1, week: null, day: null }))))   // Skills Lab lessons
    .concat((course.pages || []).map(p => ({ ...p, page: true, week: null, day: null })));   // pages outside the course map (e.g. the Block gallery)
  const ready = id => days.find(d => d.id === id && d.status === 'ready');
  const hash = location.hash.slice(1);
  let id = (hash.match(/^\/([\w-]+)/) || [])[1];
  window.DEC15_STUDIO_PAGE = id === 'studio';
  if (!ready(id)) { try { id = localStorage.getItem(window.DEC15_CLASS.id + '-last-lesson'); } catch (e) { id = null; } }
  if (!ready(id)) id = (days.find(d => d.week && d.status === 'ready') || {}).id || course.defaultLesson;   // the first ready lesson, else the default page
  window.DEC15_DAYS = days;
  window.DEC15_LESSON_META = ready(id);
  window.DEC15_DRAFT = drafts.lessons?.[id] || null;
  if (online[id]) window.DEC15_LESSON = JSON.parse(JSON.stringify(online[id].lesson));   // the published page (a draft on this device still wins)

  // all files download at the same time; async = false keeps them running in order
  [...(course.scripts || []), ...ready(id).scripts, 'js/studio-apply.js', 'js/app.js'].forEach(src => {
    const s = document.createElement('script');
    s.src = src + '?v=' + cfg.version; s.async = false;
    s.onerror = () => window.dispatchEvent(new ErrorEvent('error', { message: 'Could not load ' + src }));
    document.body.appendChild(s);
  });
})();
