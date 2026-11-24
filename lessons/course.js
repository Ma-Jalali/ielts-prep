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
          { id: 'part2', title: 'Part 2', by: 'By part', sub: 'A monologue in an everyday context', base: 200, size: 25 },
          { id: 'part3', title: 'Part 3', by: 'By part', sub: 'A discussion in an educational context', base: 300, size: 25 },
          { id: 'part4', title: 'Part 4', by: 'By part', sub: 'A lecture on an academic subject', base: 400, size: 25 },
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
        { id: 'ieb2w1d102', day: 102, status: 'ready', title: 'A job at a call centre', art: 'listening', parts: ['Exercise 2'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d102.js'] },
        { id: 'ieb2w1d103', day: 103, status: 'ready', title: 'Volunteering abroad', art: 'listening', parts: ['Exercise 3'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d103.js'] },
        { id: 'ieb2w1d104', day: 104, status: 'ready', title: 'A job at a sports centre', art: 'listening', parts: ['Exercise 4'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d104.js'] },
        { id: 'ieb2w1d105', day: 105, status: 'ready', title: 'Sharing a flat', art: 'listening', parts: ['Exercise 5'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d105.js'] },
        { id: 'ieb2w1d106', day: 106, status: 'ready', title: 'A television repair', art: 'listening', parts: ['Exercise 6'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d106.js'] },
        { id: 'ieb2w1d107', day: 107, status: 'ready', title: 'A survey on eating habits', art: 'listening', parts: ['Exercise 7'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d107.js'] },
        { id: 'ieb2w1d108', day: 108, status: 'ready', title: 'Student interviews', art: 'listening', parts: ['Exercise 8'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d108.js'] },
        { id: 'ieb2w1d109', day: 109, status: 'ready', title: 'A music festival', art: 'listening', parts: ['Exercise 9'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d109.js'] },
        { id: 'ieb2w1d110', day: 110, status: 'ready', title: 'A media survey', art: 'listening', parts: ['Exercise 10'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d110.js'] },
        { id: 'ieb2w1d111', day: 111, status: 'ready', title: 'Photography courses', art: 'listening', parts: ['Exercise 11'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d111.js'] },
        { id: 'ieb2w1d112', day: 112, status: 'ready', title: 'Registering for a conference', art: 'listening', parts: ['Exercise 12'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d112.js'] },
        { id: 'ieb2w1d113', day: 113, status: 'ready', title: 'Harbour cruises', art: 'listening', parts: ['Exercise 13'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d113.js'] },
        { id: 'ieb2w1d114', day: 114, status: 'ready', title: 'A city bus tour', art: 'listening', parts: ['Exercise 14'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d114.js'] },
        { id: 'ieb2w1d115', day: 115, status: 'ready', title: 'Joining the university library', art: 'listening', parts: ['Exercise 15'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d115.js'] },
        { id: 'ieb2w1d116', day: 116, status: 'ready', title: 'Friends of the Arts Centre', art: 'listening', parts: ['Exercise 16'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d116.js'] },
        { id: 'ieb2w1d117', day: 117, status: 'ready', title: 'Finding a flat in Newbridge', art: 'listening', parts: ['Exercise 17'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d117.js'] },
        { id: 'ieb2w1d118', day: 118, status: 'ready', title: 'College trips', art: 'listening', parts: ['Exercise 18'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d118.js'] },
        { id: 'ieb2w1d119', day: 119, status: 'ready', title: 'A school trip to Peru', art: 'listening', parts: ['Exercise 19'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d119.js'] },
        { id: 'ieb2w1d120', day: 120, status: 'ready', title: 'Tickets for a robot exhibition', art: 'listening', parts: ['Exercise 20'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d120.js'] },
        { id: 'ieb2w1d121', day: 121, status: 'ready', title: 'Buying a radio and a store card', art: 'listening', parts: ['Exercise 21'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d121.js'] },
        { id: 'ieb2w1d122', day: 122, status: 'ready', title: 'Student health and welfare services', art: 'listening', parts: ['Exercise 22'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d122.js'] },
        { id: 'ieb2w1d123', day: 123, status: 'ready', title: 'Renting a room in a new house', art: 'listening', parts: ['Exercise 23'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d123.js'] },
        { id: 'ieb2w1d124', day: 124, status: 'ready', title: 'Booking an eco-tourism holiday', art: 'listening', parts: ['Exercise 24'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d124.js'] },
        { id: 'ieb2w1d125', day: 125, status: 'ready', title: 'Joining an international social club', art: 'listening', parts: ['Exercise 25'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d125.js'] },
        { id: 'ieb2w1d201', day: 201, status: 'ready', title: 'The London congestion charge', art: 'listening', parts: ['Exercise 1'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d201.js'] },
        { id: 'ieb2w1d202', day: 202, status: 'ready', title: 'Clubs and societies at the Students’ Union', art: 'listening', parts: ['Exercise 2'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d202.js'] },
        { id: 'ieb2w1d203', day: 203, status: 'ready', title: 'Travel facts: the Scottish Highlands', art: 'listening', parts: ['Exercise 3'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d203.js'] },
        { id: 'ieb2w1d204', day: 204, status: 'ready', title: 'The Ashmolean Museum in Oxford', art: 'listening', parts: ['Exercise 4'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d204.js'] },
        { id: 'ieb2w1d205', day: 205, status: 'ready', title: 'Cranley Hill Primary School', art: 'listening', parts: ['Exercise 5'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d205.js'] },
        { id: 'ieb2w1d206', day: 206, status: 'ready', title: 'A tour guide’s welcome to Rotorua', art: 'listening', parts: ['Exercise 6'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d206.js'] },
        { id: 'ieb2w1d207', day: 207, status: 'ready', title: 'This evening on Radio 6', art: 'listening', parts: ['Exercise 7'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d207.js'] },
        { id: 'ieb2w1d208', day: 208, status: 'ready', title: 'A talk on healthy eating', art: 'listening', parts: ['Exercise 8'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d208.js'] },
        { id: 'ieb2w1d209', day: 209, status: 'ready', title: 'Ten ways to slow down your life', art: 'listening', parts: ['Exercise 9'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d209.js'] },
        { id: 'ieb2w1d210', day: 210, status: 'ready', title: 'The Museum of Anthropology, Vancouver', art: 'listening', parts: ['Exercise 10'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d210.js'] },
        { id: 'ieb2w1d211', day: 211, status: 'ready', title: 'The golden rules of listening', art: 'listening', parts: ['Exercise 11'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d211.js'] },
        { id: 'ieb2w1d212', day: 212, status: 'ready', title: 'Worldwide Student Projects', art: 'listening', parts: ['Exercise 12'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d212.js'] },
        { id: 'ieb2w1d213', day: 213, status: 'ready', title: 'Getting involved in Sport Aid', art: 'listening', parts: ['Exercise 13'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d213.js'] },
        { id: 'ieb2w1d214', day: 214, status: 'ready', title: 'The Park Hill teen programme', art: 'listening', parts: ['Exercise 14'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d214.js'] },
        { id: 'ieb2w1d215', day: 215, status: 'ready', title: 'Benchmark Consulting: past and future', art: 'listening', parts: ['Exercise 15'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d215.js'] },
        { id: 'ieb2w1d216', day: 216, status: 'ready', title: 'Banks and debit cards for new students', art: 'listening', parts: ['Exercise 16'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d216.js'] },
        { id: 'ieb2w1d217', day: 217, status: 'ready', title: 'Machines for a new building', art: 'listening', parts: ['Exercise 17'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d217.js'] },
        { id: 'ieb2w1d218', day: 218, status: 'ready', title: 'Growing your own vegetables', art: 'listening', parts: ['Exercise 18'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d218.js'] },
        { id: 'ieb2w1d219', day: 219, status: 'ready', title: 'A tour of the college library', art: 'listening', parts: ['Exercise 19'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d219.js'] },
        { id: 'ieb2w1d220', day: 220, status: 'ready', title: 'Staff briefing at a pop festival', art: 'listening', parts: ['Exercise 20'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d220.js'] },
        { id: 'ieb2w1d221', day: 221, status: 'ready', title: 'Visiting a science festival', art: 'listening', parts: ['Exercise 21'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d221.js'] },
        { id: 'ieb2w1d222', day: 222, status: 'ready', title: 'A first day at Coppersmith Engineering', art: 'listening', parts: ['Exercise 22'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d222.js'] },
        { id: 'ieb2w1d223', day: 223, status: 'ready', title: 'The history of luxury rail travel', art: 'listening', parts: ['Exercise 23'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d223.js'] },
        { id: 'ieb2w1d224', day: 224, status: 'ready', title: 'The Red Cross and first aid', art: 'listening', parts: ['Exercise 24'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d224.js'] },
        { id: 'ieb2w1d225', day: 225, status: 'ready', title: 'A short history of the car', art: 'listening', parts: ['Exercise 25'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d225.js'] },
        { id: 'ieb2w1d301', day: 301, status: 'ready', title: 'Planning a new sports centre', art: 'listening', parts: ['Exercise 1'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d301.js'] },
        { id: 'ieb2w1d302', day: 302, status: 'ready', title: 'Ethics in science', art: 'listening', parts: ['Exercise 2'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d302.js'] },
        { id: 'ieb2w1d303', day: 303, status: 'ready', title: 'An online music course', art: 'listening', parts: ['Exercise 3'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d303.js'] },
        { id: 'ieb2w1d304', day: 304, status: 'ready', title: 'A survey of computer access', art: 'listening', parts: ['Exercise 4'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d304.js'] },
        { id: 'ieb2w1d305', day: 305, status: 'ready', title: 'An essay on captive breeding', art: 'listening', parts: ['Exercise 5'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d305.js'] },
        { id: 'ieb2w1d306', day: 306, status: 'ready', title: 'A presentation on waste in cities', art: 'listening', parts: ['Exercise 6'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d306.js'] },
        { id: 'ieb2w1d307', day: 307, status: 'ready', title: 'Warning signs of a volcanic eruption', art: 'listening', parts: ['Exercise 7'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d307.js'] },
        { id: 'ieb2w1d308', day: 308, status: 'ready', title: 'Couch potatoes: a seminar on TV', art: 'listening', parts: ['Exercise 8'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d308.js'] },
        { id: 'ieb2w1d309', day: 309, status: 'ready', title: 'A science-fiction writer’s predictions', art: 'listening', parts: ['Exercise 9'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d309.js'] },
        { id: 'ieb2w1d310', day: 310, status: 'ready', title: 'The end of oil: a tutorial', art: 'listening', parts: ['Exercise 10'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d310.js'] },
        { id: 'ieb2w1d311', day: 311, status: 'ready', title: 'H. G. Wells and the future', art: 'listening', parts: ['Exercise 11'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d311.js'] },
        { id: 'ieb2w1d312', day: 312, status: 'ready', title: 'A group project on extreme weather', art: 'listening', parts: ['Exercise 12'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d312.js'] },
        { id: 'ieb2w1d313', day: 313, status: 'ready', title: 'A project on renewable energy', art: 'listening', parts: ['Exercise 13'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d313.js'] },
        { id: 'ieb2w1d314', day: 314, status: 'ready', title: 'Planning a field trip on native languages', art: 'listening', parts: ['Exercise 14'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d314.js'] },
        { id: 'ieb2w1d315', day: 315, status: 'ready', title: 'A pronunciation project', art: 'listening', parts: ['Exercise 15'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d315.js'] },
        { id: 'ieb2w1d316', day: 316, status: 'ready', title: 'Working on a dissertation', art: 'listening', parts: ['Exercise 16'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d316.js'] },
        { id: 'ieb2w1d317', day: 317, status: 'ready', title: 'Planning a project on relationships', art: 'listening', parts: ['Exercise 17'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d317.js'] },
        { id: 'ieb2w1d318', day: 318, status: 'ready', title: 'A presentation on lifelong friendships', art: 'listening', parts: ['Exercise 18'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d318.js'] },
        { id: 'ieb2w1d319', day: 319, status: 'ready', title: 'Returning a faulty breadmaker', art: 'listening', parts: ['Exercise 19'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d319.js'] },
        { id: 'ieb2w1d320', day: 320, status: 'ready', title: 'An assignment on zoos', art: 'listening', parts: ['Exercise 20'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d320.js'] },
        { id: 'ieb2w1d321', day: 321, status: 'ready', title: 'An assignment on museums', art: 'listening', parts: ['Exercise 21'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d321.js'] },
        { id: 'ieb2w1d322', day: 322, status: 'ready', title: 'The history of postage stamps', art: 'listening', parts: ['Exercise 22'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d322.js'] },
        { id: 'ieb2w1d323', day: 323, status: 'ready', title: 'John Gould and his bird prints', art: 'listening', parts: ['Exercise 23'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d323.js'] },
        { id: 'ieb2w1d324', day: 324, status: 'ready', title: 'Planning two science experiments', art: 'listening', parts: ['Exercise 24'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d324.js'] },
        { id: 'ieb2w1d325', day: 325, status: 'ready', title: 'Planning a computer programming lesson', art: 'listening', parts: ['Exercise 25'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d325.js'] },
        { id: 'ieb2w1d401', day: 401, status: 'ready', title: 'The trumpet', art: 'listening', parts: ['Exercise 1'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d401.js'] },
        { id: 'ieb2w1d402', day: 402, status: 'ready', title: 'Wikipedia: how it works', art: 'listening', parts: ['Exercise 2'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d402.js'] },
        { id: 'ieb2w1d403', day: 403, status: 'ready', title: 'Psychometric testing', art: 'listening', parts: ['Exercise 3'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d403.js'] },
        { id: 'ieb2w1d404', day: 404, status: 'ready', title: 'The Emergency Watch', art: 'listening', parts: ['Exercise 4'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d404.js'] },
        { id: 'ieb2w1d405', day: 405, status: 'ready', title: 'Children and learning: baby talk', art: 'listening', parts: ['Exercise 5'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d405.js'] },
        { id: 'ieb2w1d406', day: 406, status: 'ready', title: 'A lecture on art in Bali', art: 'listening', parts: ['Exercise 6'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d406.js'] },
        { id: 'ieb2w1d407', day: 407, status: 'ready', title: 'How local people feel about tourists', art: 'listening', parts: ['Exercise 7'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d407.js'] },
        { id: 'ieb2w1d408', day: 408, status: 'ready', title: 'The Fayum mummy portraits', art: 'listening', parts: ['Exercise 8'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d408.js'] },
        { id: 'ieb2w1d409', day: 409, status: 'ready', title: 'São Paulo: why people move to the city', art: 'listening', parts: ['Exercise 9'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d409.js'] },
        { id: 'ieb2w1d410', day: 410, status: 'ready', title: 'Waves and tsunamis', art: 'listening', parts: ['Exercise 10'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d410.js'] },
        { id: 'ieb2w1d411', day: 411, status: 'ready', title: 'Making the most of your memory', art: 'listening', parts: ['Exercise 11'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d411.js'] },
        { id: 'ieb2w1d412', day: 412, status: 'ready', title: 'The house of the future', art: 'listening', parts: ['Exercise 12'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d412.js'] },
        { id: 'ieb2w1d413', day: 413, status: 'ready', title: 'A short history of cinema', art: 'listening', parts: ['Exercise 13'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d413.js'] },
        { id: 'ieb2w1d414', day: 414, status: 'ready', title: 'CFCs and the ozone layer', art: 'listening', parts: ['Exercise 14'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d414.js'] },
        { id: 'ieb2w1d415', day: 415, status: 'ready', title: 'Recent changes in family structure', art: 'listening', parts: ['Exercise 15'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d415.js'] },
        { id: 'ieb2w1d416', day: 416, status: 'ready', title: 'Amateur journalism', art: 'listening', parts: ['Exercise 16'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d416.js'] },
        { id: 'ieb2w1d417', day: 417, status: 'ready', title: 'Blogs and blogging', art: 'listening', parts: ['Exercise 17'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d417.js'] },
        { id: 'ieb2w1d418', day: 418, status: 'ready', title: 'The history of jeans', art: 'listening', parts: ['Exercise 18'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d418.js'] },
        { id: 'ieb2w1d419', day: 419, status: 'ready', title: 'The life cycle of a product', art: 'listening', parts: ['Exercise 19'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d419.js'] },
        { id: 'ieb2w1d420', day: 420, status: 'ready', title: 'Changing the school calendar', art: 'listening', parts: ['Exercise 20'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d420.js'] },
        { id: 'ieb2w1d421', day: 421, status: 'ready', title: 'The European starling', art: 'listening', parts: ['Exercise 21'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d421.js'] },
        { id: 'ieb2w1d422', day: 422, status: 'ready', title: 'Computer viruses', art: 'listening', parts: ['Exercise 22'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d422.js'] },
        { id: 'ieb2w1d423', day: 423, status: 'ready', title: 'The first railways', art: 'listening', parts: ['Exercise 23'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d423.js'] },
        { id: 'ieb2w1d424', day: 424, status: 'ready', title: 'Early human migrations', art: 'listening', parts: ['Exercise 24'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d424.js'] },
        { id: 'ieb2w1d425', day: 425, status: 'ready', title: 'A company training scheme', art: 'listening', parts: ['Exercise 25'], stages: ['ex'], tones: ['teal'], scripts: ['lessons/b2/listening/ieb2w1d425.js'] }
      ] },
    { n: 2, theme: 'Reading', color: '#2b67d1', group: 'skills', art: 'reading', short: 'Reading', tag: '3 passages · 60 minutes', tone: 'blue', folder: 'lessons/b2/reading', summary: '', days: [] },
    { n: 3, theme: 'Writing Task 1 (Academic)', color: '#e2552f', group: 'skills', art: 'chart', short: 'Writing Task 1', tag: '150+ words · about 20 minutes', tone: 'clay', folder: 'lessons/b2/writing-task1', summary: '', days: [] },
    { n: 4, theme: 'Writing Task 2', color: '#c2185b', group: 'skills', art: 'essay', short: 'Writing Task 2', tag: '250+ words · about 40 minutes', tone: 'clay', folder: 'lessons/b2/writing-task2', summary: '', days: [] },
    { n: 5, theme: 'Speaking', color: '#7a4fd0', group: 'skills', art: 'discussion', short: 'Speaking', tag: 'Parts 1, 2 and 3', tone: 'plum', folder: 'lessons/b2/speaking', summary: '', days: [] },
    { n: 6, theme: 'Vocabulary', color: '#1f9254', group: 'language', art: 'research', short: 'Vocabulary', tag: '', tone: 'green', folder: 'lessons/b2/vocabulary', summary: '', days: [] },
    { n: 7, theme: 'Grammar', color: '#c97a0a', group: 'language', art: 'critical', short: 'Grammar', tag: '', tone: 'amber', folder: 'lessons/b2/grammar', summary: '', days: [] }
  ]
};
