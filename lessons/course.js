/* IELTS PREP · course map — the skills and their lessons. The app itself is in js/, css/, assets/.
   THE COURSE IS ORGANISED BY SKILL, NOT BY WEEK. Each skill has its own lessons, studied in order:
     the four skills  1 Listening · 2 Reading · 3 Writing Task 1 (Academic) · 4 Writing Task 2 · 5 Speaking
                      (Writing is two parts because each task has its own lessons)
     two sub-skills   6 Grammar · 7 Vocabulary
   The data keeps the app's weeks/days shape: each entry in `weeks` is a SKILL and each of its `days` is a LESSON
   (`day` = the lesson's number in that skill). `units` below makes the app say "Reading · Lesson 3", not "Week 2, Day 3".
   LEVEL: this course is B2 → Band 6.5–7. Lesson ids carry the level: <idPrefix>w<skill>d<lesson>, e.g. ieb2w2d3 =
   B2 · Reading · Lesson 3. A later level gets its own prefix (ieb1…, iec1…) so ids never clash.
   ADD A LESSON — two ways
   A. In the browser (no code): open  #/studio  (side panel → Studio), choose "New page", pick the skill and the lesson
      number, build it with the blocks, then "Download lesson file" and put it in the skill's folder (below), or ask
      Claude to publish your drafts.
   B. By hand: copy lessons/_template.js to <folder>/<id>.js and write the content.
   Then add the lesson to its skill below (status: 'ready', scripts: ['<folder>/<id>.js']).
   Raise the version (index.html ?v= and js/config.js) and run  node tools/build-sw.js .
   LESSON IDS START WITH "ie". The Supabase project is shared with DEC15/DEC10 and the id is the key of every
   student's saved work and class wall, so an IELTS id must never be the same as another course's id.
   Never change an id after students start — to reorder lessons once students have started, add new ids rather than
   renumbering old ones. */
window.DEC15_COURSE = {
  id: 'ielts',          // keeps this class (class list, chat, announcements, boards) apart from the other courses — never change
  idPrefix: 'ieb2',     // every lesson id starts with this: 'ie' + the level (b2)
  units: { unit: 'Skill', lesson: 'Lesson' },   // the course is by skill: "Reading · Lesson 3"
  level: { id: 'b2', title: 'B2 → Band 6.5–7' },
  root: '',             // lessons and pictures live at the top of the site
  code: 'IELTS',
  title: 'IELTS Preparation',
  topic: 'Academic IELTS · B2 → Band 6.5–7',
  intro: 'Four skills and two sub-skills. Open a skill and work through its lessons in order.',
  heroImage: 'assets/ui/library/hero.svg',
  heroAlt: '',
  sideCard: { name: 'IELTS Preparation', note: 'Academic · Band 6.5–7' },
  // Settings (gear at the foot of the side panel) → Side panel colour. The first one is the default.
  sideColours: [['light', 'Light', '#ffffff'], ['charcoal', 'Charcoal', '#424242'], ['black', 'Black', '#000000'], ['navy', 'Navy', '#1a355e'], ['eucalypt', 'Eucalypt', '#4f7d74']],
  defaultLesson: 'ieblocks',           // opens when no lesson is chosen yet; the first ready lesson is used instead once there is one
  galleryLesson: 'ieblocks',           // Studio links to it
  scripts: ['lessons/guide.js'],       // loaded before every lesson: the Course calendar and Assessments pages
  downloads: [],                       // side panel → Downloads (see the DEC10 course for the format)
  printables: [],                      // side panel → Photocopiables (teachers only)
  /* Pages outside the skills: not on the course map, opened by a link (the Block gallery is linked from Studio). */
  pages: [
    { id: 'ieblocks', status: 'ready', title: 'Block gallery', where: 'Studio', art: 'research',
      parts: ['IELTS', 'Teach', 'Practise', 'Write', 'Listen & read', 'Layout', 'Class games'],
      stages: ['ielts', 'teach', 'practise', 'write', 'media', 'layout', 'games'], tones: ['teal', 'amber', 'teal', 'clay', 'blue', 'plum', 'green'],
      scripts: ['lessons/studio/ieblocks.js'] }
  ],
  /* THE SKILLS. Each skill: n (its number; never change), theme (name), art (its picture), short, tag (one line under the name),
     tone, folder (where its lesson files go), summary, and days = its lessons, in the order students study them.
     A lesson: { id: 'ieb2w<n>d<lesson>', day: <lesson number>, status: 'soon' | 'ready', title, sub, art, parts, scripts }
     ('soon' shows it as planned; 'ready' publishes it). The lessons are still to be planned. */
  map: [
    { n: 1, label: 'Listening', sub: 'To plan' },
    { n: 2, label: 'Reading', sub: 'To plan' },
    { n: 3, label: 'Writing Task 1', sub: 'To plan' },
    { n: 4, label: 'Writing Task 2', sub: 'To plan' },
    { n: 5, label: 'Speaking', sub: 'To plan' },
    { n: 6, label: 'Grammar', sub: 'To plan' },
    { n: 7, label: 'Vocabulary', sub: 'To plan' }
  ],
  weeks: [
    { n: 1, theme: 'Listening', art: 'listening', short: 'Listening', tag: '4 sections · 40 questions', tone: 'teal', folder: 'lessons/b2/listening', summary: '', days: [] },
    { n: 2, theme: 'Reading', art: 'reading', short: 'Reading', tag: '3 passages · 60 minutes', tone: 'blue', folder: 'lessons/b2/reading', summary: '', days: [] },
    { n: 3, theme: 'Writing Task 1 (Academic)', art: 'writing', short: 'Writing Task 1', tag: '150+ words · about 20 minutes', tone: 'clay', folder: 'lessons/b2/writing-task1', summary: '', days: [] },
    { n: 4, theme: 'Writing Task 2', art: 'writing', short: 'Writing Task 2', tag: '250+ words · about 40 minutes', tone: 'clay', folder: 'lessons/b2/writing-task2', summary: '', days: [] },
    { n: 5, theme: 'Speaking', art: 'discussion', short: 'Speaking', tag: 'Parts 1, 2 and 3', tone: 'plum', folder: 'lessons/b2/speaking', summary: '', days: [] },
    { n: 6, theme: 'Grammar', art: 'critical', short: 'Grammar', tag: '', tone: 'amber', folder: 'lessons/b2/grammar', summary: '', days: [] },
    { n: 7, theme: 'Vocabulary', art: 'research', short: 'Vocabulary', tag: '', tone: 'green', folder: 'lessons/b2/vocabulary', summary: '', days: [] }
  ]
};
