/* IELTS PREP · course map — the skills and their lessons. The app itself is in js/, css/, assets/.
   THE COURSE IS ORGANISED BY SKILL, NOT BY WEEK. Each skill has its own lessons, studied in order:
     Skills    1 Listening · 2 Reading · 3 Writing Task 1 (Academic) · 4 Writing Task 2 · 5 Speaking
               (Writing is two parts because each task has its own lessons)
     Language  6 Vocabulary · 7 Grammar   (language systems, not skills)
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
  units: { unit: 'Part', lesson: 'Lesson' },   // the course is by part: "Reading · Lesson 3"
  /* The parts come in two groups (each part's `group`): the four macro skills, and the language systems behind them
     (vocabulary and grammar are not skills). Each group has its own heading in the side panel and on the home page. */
  groups: [
    { id: 'skills', title: 'Skills', blurb: 'Listening, Reading, Writing and Speaking: the four parts of the test.' },
    { id: 'language', title: 'Language', blurb: 'The vocabulary and grammar behind every skill.' }
  ],
  level: { id: 'b2', title: 'B2 → Band 6.5–7' },
  root: '',             // lessons and pictures live at the top of the site
  code: 'IELTS',
  title: 'IELTS Preparation',
  topic: 'Academic IELTS · B2 → Band 6.5–7',
  intro: 'The four skills of the test, and the language behind them. Start anywhere: each part has its own lessons, in order.',
  heroImage: 'assets/ui/library/hero.svg',
  heroAlt: '',
  sideCard: { name: 'IELTS Preparation', note: 'Academic · Band 6.5–7' },
  // Settings (gear at the foot of the side panel) → Side panel colour. The first one is the default.
  sideColours: [['light', 'Light', '#ffffff'], ['midnight', 'Midnight', '#18213f'], ['ielts', 'IELTS red', '#a3182c'], ['indigo', 'Indigo', '#252b6b'], ['navy', 'Navy', '#1a355e'], ['teal', 'Teal', '#0f5c63'], ['eucalypt', 'Eucalypt', '#4f7d74'], ['forest', 'Forest', '#23553c'], ['plum', 'Plum', '#4b2a68'], ['cocoa', 'Cocoa', '#5a3e32'], ['slate', 'Slate', '#364152'], ['charcoal', 'Charcoal', '#424242'], ['black', 'Black', '#000000']],
  defaultLesson: 'ieblocks',           // opens when no lesson is chosen yet; the first ready lesson is used instead once there is one
  galleryLesson: 'ieblocks',           // Studio links to it
  scripts: ['lessons/guide.js'],       // loaded before every lesson: the Course calendar and Assessments pages
  downloads: [],                       // side panel → Downloads (see the DEC10 course for the format)
  printables: [],                      // side panel → Photocopiables (teachers only)
  /* Menus hidden from students by default. The teacher hides or shows them for the whole class in the side panel →
     Settings (gear) → "Side panel for students"; that live switch then replaces this list.
     Keys: 'calendar', 'assessments', 'band' (Band calculator), 'board', 'chats', 'shared', 'picker' (Name wheel). */
  menusHidden: [],
  /* Pages outside the skills: not on the course map, opened by a link (the Block gallery is linked from Studio). */
  pages: [
    { id: 'ieblocks', status: 'ready', title: 'Block gallery', where: 'Studio', art: 'research',
      parts: ['IELTS Reading', 'IELTS Listening', 'IELTS Writing', 'IELTS Speaking', 'Media', 'Grammar & vocabulary', 'Teach', 'Practise', 'Write', 'Listen & read', 'Layout', 'Class games'],
      stages: ['reading', 'listening', 'writing', 'speaking', 'media2', 'language', 'teach', 'practise', 'write', 'media', 'layout', 'games'], tones: ['blue', 'teal', 'clay', 'plum', 'amber', 'green', 'amber', 'teal', 'clay', 'blue', 'plum', 'green'],
      scripts: ['lessons/studio/ieblocks.js'] }
  ],
  /* THE SKILLS. Each part: n (its number; never change), theme (name), color, group, art (its icon), short, tag (one line under the name),
     tone, folder (where its lesson files go), summary, and days = its lessons, in the order students study them.
     A lesson: { id: 'ieb2w<n>d<lesson>', day: <lesson number>, status: 'soon' | 'ready', title, sub, art, parts, scripts }
     ('soon' shows it as planned; 'ready' publishes it). The lessons are still to be planned. */
  map: [
    { n: 1, label: 'Listening', sub: 'To plan' },
    { n: 2, label: 'Reading', sub: 'To plan' },
    { n: 3, label: 'Writing Task 1', sub: 'To plan' },
    { n: 4, label: 'Writing Task 2', sub: 'To plan' },
    { n: 5, label: 'Speaking', sub: 'To plan' },
    { n: 6, label: 'Vocabulary', sub: 'To plan' },
    { n: 7, label: 'Grammar', sub: 'To plan' }
  ],
  weeks: [
    { n: 1, theme: 'Listening', color: '#0e8a8f', group: 'skills', art: 'listening', short: 'Listening', tag: '4 parts · 40 questions', tone: 'teal', folder: 'lessons/b2/listening', summary: '',
      /* Learn · Practise · Test. Each group owns a block of lesson numbers (base + 1 … base + size), so every exercise has a
         fixed place and a fixed id: Part 2 · Exercise 7 = lesson 207 = id ieb2w1d207; Practice test 3 = 2003. A place with no
         lesson yet shows as "coming soon". Rename anything here; never change a base once students have started. */
      sections: [
        { id: 'learn', title: 'Learn', icon: 'book', blurb: 'Strategy lessons: how the test works and how to approach each part. Start here, in order.', groups: [
          { id: 'learn', title: 'Strategy lessons', base: 0, size: 6, map: true, slots: ['Listening overview', 'Part 1: everyday conversation', 'Part 2: everyday monologue', 'Part 3: academic discussion', 'Part 4: academic lecture', 'Skills and strategies'] }] },
        { id: 'practise', title: 'Practise', icon: 'target', blurb: 'Short exercises. Practise one part of the test, or one question type, at a time.', groups: [
          { id: 'part1', title: 'Part 1', by: 'By part', sub: 'A conversation in an everyday context', base: 100, size: 25 },
          { id: 'part2', title: 'Part 2', by: 'By part', sub: 'A monologue in an everyday context', base: 200, size: 20 },
          { id: 'part3', title: 'Part 3', by: 'By part', sub: 'A discussion in an educational context', base: 300, size: 20 },
          { id: 'part4', title: 'Part 4', by: 'By part', sub: 'A lecture on an academic subject', base: 400, size: 20 },
          { id: 'mcq', title: 'Multiple choice', by: 'By question type', sub: 'One answer from A–C, or two or more from a list', base: 500, size: 10 },
          { id: 'matching', title: 'Matching', by: 'By question type', sub: 'Items matched to a box of options', base: 600, size: 10 },
          { id: 'notes', title: 'Note completion', by: 'By question type', sub: 'Notes, forms and sentences with gaps', base: 700, size: 10 },
          { id: 'table', title: 'Table completion', by: 'By question type', sub: 'Tables with gaps in the cells', base: 800, size: 10 },
          { id: 'diagram', title: 'Diagram completion', by: 'By question type', sub: 'Label a diagram, a process or a flow-chart', base: 900, size: 10 },
          { id: 'maps', title: 'Maps', by: 'By question type', sub: 'Label a map or a plan', base: 1000, size: 10 }] },
        { id: 'test', title: 'Test', icon: 'clock', blurb: 'Full practice tests: all four parts, 40 questions, about 30 minutes, under test conditions.', groups: [
          { id: 'tests', title: 'Practice tests', base: 2000, size: 10, test: true }] }
      ],
      days: [
        { id: 'ieb2w1d101', day: 101, status: 'ready', title: 'A university course enquiry', art: 'listening', parts: ['Exercise 1'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d101.js'] },
        { id: 'ieb2w1d102', day: 102, status: 'soon', title: 'Exercise 2', art: 'listening', parts: ['Exercise 2'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d102.js'] },
        { id: 'ieb2w1d103', day: 103, status: 'soon', title: 'Exercise 3', art: 'listening', parts: ['Exercise 3'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d103.js'] },
        { id: 'ieb2w1d104', day: 104, status: 'soon', title: 'Exercise 4', art: 'listening', parts: ['Exercise 4'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d104.js'] },
        { id: 'ieb2w1d105', day: 105, status: 'soon', title: 'Exercise 5', art: 'listening', parts: ['Exercise 5'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d105.js'] },
        { id: 'ieb2w1d106', day: 106, status: 'soon', title: 'Exercise 6', art: 'listening', parts: ['Exercise 6'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d106.js'] },
        { id: 'ieb2w1d107', day: 107, status: 'soon', title: 'Exercise 7', art: 'listening', parts: ['Exercise 7'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d107.js'] },
        { id: 'ieb2w1d108', day: 108, status: 'soon', title: 'Exercise 8', art: 'listening', parts: ['Exercise 8'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d108.js'] },
        { id: 'ieb2w1d109', day: 109, status: 'soon', title: 'Exercise 9', art: 'listening', parts: ['Exercise 9'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d109.js'] },
        { id: 'ieb2w1d110', day: 110, status: 'soon', title: 'Exercise 10', art: 'listening', parts: ['Exercise 10'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d110.js'] },
        { id: 'ieb2w1d111', day: 111, status: 'soon', title: 'Exercise 11', art: 'listening', parts: ['Exercise 11'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d111.js'] },
        { id: 'ieb2w1d112', day: 112, status: 'soon', title: 'Exercise 12', art: 'listening', parts: ['Exercise 12'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d112.js'] },
        { id: 'ieb2w1d113', day: 113, status: 'soon', title: 'Exercise 13', art: 'listening', parts: ['Exercise 13'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d113.js'] },
        { id: 'ieb2w1d114', day: 114, status: 'soon', title: 'Exercise 14', art: 'listening', parts: ['Exercise 14'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d114.js'] },
        { id: 'ieb2w1d115', day: 115, status: 'soon', title: 'Exercise 15', art: 'listening', parts: ['Exercise 15'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d115.js'] },
        { id: 'ieb2w1d116', day: 116, status: 'soon', title: 'Exercise 16', art: 'listening', parts: ['Exercise 16'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d116.js'] },
        { id: 'ieb2w1d117', day: 117, status: 'soon', title: 'Exercise 17', art: 'listening', parts: ['Exercise 17'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d117.js'] },
        { id: 'ieb2w1d118', day: 118, status: 'soon', title: 'Exercise 18', art: 'listening', parts: ['Exercise 18'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d118.js'] },
        { id: 'ieb2w1d119', day: 119, status: 'soon', title: 'Exercise 19', art: 'listening', parts: ['Exercise 19'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d119.js'] },
        { id: 'ieb2w1d120', day: 120, status: 'soon', title: 'Exercise 20', art: 'listening', parts: ['Exercise 20'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d120.js'] },
        { id: 'ieb2w1d121', day: 121, status: 'soon', title: 'Exercise 21', art: 'listening', parts: ['Exercise 21'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d121.js'] },
        { id: 'ieb2w1d122', day: 122, status: 'soon', title: 'Exercise 22', art: 'listening', parts: ['Exercise 22'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d122.js'] },
        { id: 'ieb2w1d123', day: 123, status: 'soon', title: 'Exercise 23', art: 'listening', parts: ['Exercise 23'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d123.js'] },
        { id: 'ieb2w1d124', day: 124, status: 'soon', title: 'Exercise 24', art: 'listening', parts: ['Exercise 24'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d124.js'] },
        { id: 'ieb2w1d125', day: 125, status: 'soon', title: 'Exercise 25', art: 'listening', parts: ['Exercise 25'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d125.js'] }
      ] },
    { n: 2, theme: 'Reading', color: '#2b67d1', group: 'skills', art: 'reading', short: 'Reading', tag: '3 passages · 60 minutes', tone: 'blue', folder: 'lessons/b2/reading', summary: '', days: [] },
    { n: 3, theme: 'Writing Task 1 (Academic)', color: '#e2552f', group: 'skills', art: 'chart', short: 'Writing Task 1', tag: '150+ words · about 20 minutes', tone: 'clay', folder: 'lessons/b2/writing-task1', summary: '', days: [] },
    { n: 4, theme: 'Writing Task 2', color: '#c2185b', group: 'skills', art: 'essay', short: 'Writing Task 2', tag: '250+ words · about 40 minutes', tone: 'clay', folder: 'lessons/b2/writing-task2', summary: '', days: [] },
    { n: 5, theme: 'Speaking', color: '#7a4fd0', group: 'skills', art: 'discussion', short: 'Speaking', tag: 'Parts 1, 2 and 3', tone: 'plum', folder: 'lessons/b2/speaking', summary: '', days: [] },
    { n: 6, theme: 'Vocabulary', color: '#1f9254', group: 'language', art: 'research', short: 'Vocabulary', tag: '', tone: 'green', folder: 'lessons/b2/vocabulary', summary: '', days: [] },
    { n: 7, theme: 'Grammar', color: '#c97a0a', group: 'language', art: 'critical', short: 'Grammar', tag: '', tone: 'amber', folder: 'lessons/b2/grammar', summary: '', days: [] }
  ]
};
