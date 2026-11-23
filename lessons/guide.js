/* IELTS PREP · course guide — the data behind two side-panel pages (js/guide.js draws them):
     #/calendar     Course calendar: one week at a time (classes, homework, events)
     #/assessments  Assessments: what students do, when, and how much it counts
   Everything here is placeholder structure — replace it with your course's dates and details.
   Week:   { n, theme, sub, start: 'YYYY-MM-DD' (a Monday), dates: '5–9 Jan', days: [Mon … Fri] }  ·  brk: true = a break week
   Day:    { class: [[code, title]], hw: [[code, title]], events: [{ type, title, time?, where?, note?, counts? }], off?: true }
           A code like 'W2 D3' links to that lesson when it is ready. The course is by skill (course.js), so W = skill and
           D = lesson: 'W2 D3' = Reading · Lesson 3 (ieb2w2d3).
   Event types: the keys of eventTypes ([label, colour]). type 'assess' feeds the "Next assessment" countdown. */
window.DEC15_GUIDE = {
  calendarEyebrow: 'IELTS Preparation',
  calendarIntro: 'Your classes, homework and events, one week at a time.',
  calendarFoot: '',
  terms: [['Course', 'Add your dates in lessons/guide.js']],
  resit: '',
  eventTypes: {
    assess: ['Mock test', '#e64626'],
    info: ['Information', '#1a355e'],
    support: ['Extra class', '#4f68b8'],
    skills: ['Workshop', '#8a4f9e'],
    chat: ['Speaking club', '#2f9a63']
  },
  weeks: [
    { n: 1, theme: 'Getting started', sub: '', start: '2027-01-04', dates: '4–8 Jan', days: [
      { class: [['W1 D1', 'The Listening test']], events: [{ type: 'info', title: 'Welcome and course overview' }] },
      { class: [['W2 D1', 'The Academic Reading test']] }, {}, {},
      { events: [{ type: 'assess', title: 'Diagnostic mock test', note: 'Shows your starting band' }] }
    ] },
    { n: 2, theme: 'Week 2', start: '2027-01-11', dates: '11–15 Jan', days: [{}, {}, {}, {}, {}] },
    { n: 3, theme: 'Week 3', start: '2027-01-18', dates: '18–22 Jan', days: [{}, {}, {}, {}, {}] },
    { n: 4, theme: 'Week 4', start: '2027-01-25', dates: '25–29 Jan', days: [{}, {}, {}, {}, { events: [{ type: 'assess', title: 'Mid-course mock test', counts: true }] }] }
  ],
  // Assessments page. weights: where the score comes from (one bar per skill)
  assessEyebrow: 'IELTS Preparation',
  assessIntro: 'What you do, when, and how it is marked — in plain English.',
  weights: [
    { skill: 'Listening', total: 25, parts: [['Mock test', 25]], color: '#2f7d6b' },
    { skill: 'Reading', total: 25, parts: [['Mock test', 25]], color: '#3a58a0' },
    { skill: 'Writing', total: 25, parts: [['Task 1', 8.5], ['Task 2', 16.5]], color: '#b0512a' },
    { skill: 'Speaking', total: 25, parts: [['Parts 1–3', 25]], color: '#7a4a8c' }
  ],
  // timeline: kind 'real' (counts) · 'practice' · 'check'
  timeline: [
    { week: 1, title: 'Diagnostic', kind: 'check', text: 'All four skills — your starting point.' },
    { week: 4, title: 'Mid-course mock test', kind: 'real', text: 'Full test, timed.' }
  ],
  // the four tabs: lead, facts [[k, v]], cards [{ k, title, text | list, color }], sections [{ title, text?, steps?, cards? }], tip, links [[text, url]]
  assessments: [
    { key: 'listening', label: 'Listening', sub: '30 min · 40 questions', lead: 'Describe the Listening test here.',
      facts: [['Sections', '4'], ['Questions', '40'], ['Time', 'About 30 minutes + transfer time']],
      cards: [{ k: 'Section 1', title: 'Everyday conversation', color: '#2f7d6b' }, { k: 'Section 2', title: 'Everyday monologue', color: '#3a58a0' }, { k: 'Sections 3–4', title: 'Academic discussion and lecture', color: '#7a4a8c' }] },
    { key: 'reading', label: 'Reading', sub: '60 min · 40 questions', lead: 'Describe the Reading test here.',
      facts: [['Passages', '3'], ['Questions', '40'], ['Time', '60 minutes']] },
    { key: 'writing', label: 'Writing', sub: '60 min · 2 tasks', lead: 'Describe the Writing test here.',
      cards: [{ k: 'Task 1', title: '150+ words · about 20 min', text: 'Describe visual information.', color: '#b0512a' }, { k: 'Task 2', title: '250+ words · about 40 min', text: 'An essay in response to a point of view, argument or problem.', color: '#985c0e' }] },
    { key: 'speaking', label: 'Speaking', sub: '11–14 min · 3 parts', lead: 'Describe the Speaking test here.',
      cards: [{ k: 'Part 1', title: 'Introduction and interview', color: '#7a4a8c' }, { k: 'Part 2', title: 'Long turn · cue card', color: '#2f7d6b' }, { k: 'Part 3', title: 'Discussion', color: '#3a58a0' }] }
  ],
  ready: { title: 'Before every mock test', sub: 'Quick checks — tick them before each test.', items: ['I know the time and room.', 'I have pencils, an eraser and my ID.', 'I slept well and ate breakfast.'], tip: '' },
  help: []   // [{ title, sub, icon: 'alert' | 'lock' | 'users' | 'chat' | 'target', html }]
};
