/* Publishes Studio drafts: turns the file from Studio → "Download all drafts" into lesson files.
     node tools/import-drafts.js path/to/ielts-studio-drafts-YYYY-MM-DD.json
   For each draft it writes <folder>/<id>.js, where <folder> is the skill's `folder` in lessons/course.js (or
   lessons/week<N>/ for a course without one), overwriting the published file of an edited page.
   Pages that are new (not yet in lessons/course.js) are listed with the course.js entry to paste into their skill;
   a planned lesson (status 'soon') is listed with the change to make to its entry.
   Then raise the version (index.html + js/config.js), run  node tools/build-sw.js , and discard the drafts in Studio. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), file = process.argv[2];
if (!file) { console.error('Usage: node tools/import-drafts.js <drafts.json>'); process.exit(1); }
const d = JSON.parse(fs.readFileSync(file, 'utf8')), course = fs.readFileSync(path.join(root, 'lessons/course.js'), 'utf8');
const C = (() => { const window = {}; new Function('window', course)(window); return window.DEC15_COURSE; })();
const unit = n => C.weeks.find(w => w.n === n), where = l => C.units ? `${unit(l.week)?.theme || 'Unit ' + l.week} · Lesson ${l.day}` : `Week ${l.week} Day ${l.day}`;
const planned = id => C.weeks.some(w => w.days.some(x => x.id === id && x.status !== 'ready'));
const info = l => ({ title: l.title, art: l.sections[0]?.art || 'reading', parts: l.sections.map(s => s.title), stages: l.sections.map(s => s.id), tones: l.sections.map(s => s.tone) });
for (const [id, l] of Object.entries(d.lessons || {})) {
  if (!/^[\w-]+$/.test(id) || l.id !== id) { console.warn('skipped (bad id):', id); continue; }
  const rel = l.week ? `${unit(l.week)?.folder || 'lessons/week' + l.week}/${id}.js` : `lessons/lab/${id}.js`;
  fs.mkdirSync(path.join(root, path.dirname(rel)), { recursive: true });
  fs.writeFileSync(path.join(root, rel), `/* IELTS · ${l.week ? where(l) : 'Skills Lab'} — ${String(l.title).replace(/\*\//g, '')}. Made in Studio.\n   Ids (lesson, activities, fields) are the keys of students' saved work: never rename them after students start. */\nwindow.DEC15_LESSON = ${JSON.stringify(l, null, 2)};\n`);
  console.log('wrote', rel);
  if (!course.includes(`'${id}'`)) { const i = info(l);
    console.log(`  NEW — add to ${C.units ? unit(l.week)?.theme || 'unit ' + l.week : 'week ' + l.week} in lessons/course.js:\n  { id: '${id}', day: ${l.day}, status: 'ready', title: ${JSON.stringify(i.title)}, art: '${i.art}',\n    parts: ${JSON.stringify(i.parts)},\n    stages: ${JSON.stringify(i.stages)}, tones: ${JSON.stringify(i.tones)},\n    scripts: ['${rel}'] },`); }
  else if (planned(id)) console.log(`  PLANNED — in lessons/course.js set this lesson's status to 'ready' and add scripts: ['${rel}']`);
}
