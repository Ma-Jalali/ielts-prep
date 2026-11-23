/* IELTS PREP · course map — the list of weeks and lessons. The app itself is in js/, css/, assets/.
   ADD A LESSON — two ways
   A. In the browser (no code): open  #/studio  (side panel → Studio), choose "New page", build it with the blocks,
      then "Download lesson file" and put it in lessons/weekN/ (or ask Claude to publish your drafts).
   B. By hand: copy lessons/_template.js to lessons/weekN/iewNdM.js and write the content.
   Then, below, add the day to its week with status: 'ready' and list its file in `scripts`.
   Raise the version (index.html ?v= and js/config.js) and run  node tools/build-sw.js .
   LESSON IDS START WITH "ie" (iew1d1, iew2d3 …). The Supabase project is shared with DEC15/DEC10 and the id is the key
   of every student's saved work and class wall, so an IELTS id must never be the same as another course's id.
   Never change an id after students start. */
window.DEC15_COURSE = {
  id: 'ielts',          // keeps this class (class list, chat, announcements, boards) apart from the other courses — never change
  idPrefix: 'ie',       // every lesson id starts with this
  root: '',             // lessons and pictures live at the top of the site
  code: 'IELTS',
  title: 'IELTS Preparation',
  topic: 'Academic IELTS',
  intro: '',
  heroImage: 'assets/ui/library/hero.svg',
  heroAlt: '',
  sideCard: { name: 'IELTS Preparation', note: 'Academic' },
  // Settings (gear at the foot of the side panel) → Side panel colour. The first one is the default.
  sideColours: [['light', 'Light', '#ffffff'], ['charcoal', 'Charcoal', '#424242'], ['black', 'Black', '#000000'], ['navy', 'Navy', '#1a355e'], ['eucalypt', 'Eucalypt', '#4f7d74']],
  defaultLesson: 'iew1d1',
  scripts: ['lessons/guide.js'],       // loaded before every lesson: the Course calendar and Assessments pages
  downloads: [],                       // side panel → Downloads (see the DEC10 course for the format)
  printables: [],                      // side panel → Photocopiables (teachers only)
  /* SKILLS LAB (side panel, #/lab): short self-study lessons outside the weekly plan. Each lesson is ONE page with four
     tabs: Warm-up · Learn · Practise · Use it. Copy lessons/lab/_template.js to lessons/lab/<strand>/<name>.js, then add
     { id: 'ielab-…', status: 'ready', title, sub, minutes, level, scripts: [path] } to a strand below. */
  lab: {
    title: 'Skills Lab',
    intro: 'Short self-study lessons for each part of the test. Open a skill, then choose a lesson. Each lesson has four steps: Warm-up, Learn, Practise, Use it.',
    strands: [
      { id: 'listening', title: 'Listening', short: 'Listening', tone: 'teal', icon: 'listening', blurb: 'Four sections, forty questions.', soon: 'Listening lessons are on the way.', lessons: [] },
      { id: 'reading', title: 'Reading', short: 'Reading', tone: 'blue', icon: 'reading', blurb: 'Three passages, sixty minutes.', soon: 'Reading lessons are on the way.', lessons: [] },
      { id: 'writing', title: 'Writing', short: 'Writing', tone: 'clay', icon: 'writing', blurb: 'Task 1 and Task 2.', soon: 'Writing lessons are on the way.', lessons: [] },
      { id: 'speaking', title: 'Speaking', short: 'Speaking', tone: 'plum', icon: 'speaking', blurb: 'Parts 1, 2 and 3.', soon: 'Speaking lessons are on the way.', lessons: [] }
    ]
  },
  // The weeks shown on the course map (home page). Change label (short!) and sub when the course outline is ready.
  map: [
    { n: 1, label: 'Week 1', sub: 'To plan' }, { n: 2, label: 'Week 2', sub: 'To plan' },
    { n: 3, label: 'Week 3', sub: 'To plan' }, { n: 4, label: 'Week 4', sub: 'To plan' },
    { n: 5, label: 'Week 5', sub: 'To plan' }, { n: 6, label: 'Week 6', sub: 'To plan' },
    { n: 7, label: 'Week 7', sub: 'To plan' }, { n: 8, label: 'Week 8', sub: 'To plan' }
  ],
  weeks: [
    {
      n: 1, theme: 'Getting started',
      summary: 'A starter page for each skill and a gallery of every block you can build with.',
      image: 'assets/ui/library/hero.svg', imageAlt: '',
      days: [
        { id: 'iew1d1', day: 1, status: 'ready', title: 'Starter page', art: 'listening',
          parts: ['Listening', 'Reading', 'Writing', 'Speaking'],
          stages: ['listening', 'reading', 'writing', 'speaking'], tones: ['teal', 'blue', 'clay', 'plum'],
          scripts: ['lessons/week1/iew1d1.js'] },
        { id: 'iew1d2', day: 2, status: 'ready', title: 'Block gallery', art: 'research',
          parts: ['Teach', 'Practise', 'Write', 'Listen & read', 'Layout', 'Class games'],
          stages: ['teach', 'practise', 'write', 'media', 'layout', 'games'], tones: ['amber', 'teal', 'clay', 'blue', 'plum', 'green'],
          scripts: ['lessons/week1/iew1d2.js'] }
      ]
    },
    { n: 2, theme: 'Week 2', summary: '', days: [] },
    { n: 3, theme: 'Week 3', summary: '', days: [] },
    { n: 4, theme: 'Week 4', summary: '', days: [] },
    { n: 5, theme: 'Week 5', summary: '', days: [] },
    { n: 6, theme: 'Week 6', summary: '', days: [] },
    { n: 7, theme: 'Week 7', summary: '', days: [] },
    { n: 8, theme: 'Week 8', summary: '', days: [] }
  ]
};
