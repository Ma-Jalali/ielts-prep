/* IELTS · Studio — BLOCK GALLERY. Every block the app can draw, built from the Studio catalogue
   (js/studio-blocks.js), one stage per group. Use it as a reference when you design a page, or open it in Studio
   and copy blocks from here. It is not on the course map (course.js → pages); Studio links to it, so students do not see it. */
(() => {
  const C = window.STUDIO_BLOCKS || [];
  const GROUPS = [['IELTS Reading', 'reading', 'IELTS Reading', 'Every Reading question type, and the test screen', 'blue', 'reading'],
    ['IELTS Listening', 'listening', 'IELTS Listening', 'Recordings, the test screen and every Listening question type', 'teal', 'listening'],
    ['IELTS Writing', 'writing', 'IELTS Writing', 'Task 1, Task 2 and a band self-check', 'clay', 'writing'],
    ['IELTS Speaking', 'speaking', 'IELTS Speaking', 'Parts 1, 2 and 3, with timers and a recorder', 'plum', 'discussion'],
    ['IELTS Media', 'media2', 'Media', 'Video and audio from anywhere', 'amber', 'listening'],
    ['Grammar & vocabulary', 'language', 'Grammar & vocabulary', 'Quizzes', 'green', 'critical'],
    ['Teach', 'teach', 'Teach', 'Explain, show and model', 'amber', 'critical'],
    ['Practise', 'practise', 'Practise', 'Interactive practice that checks itself', 'teal', 'feedback'],
    ['Write', 'write', 'Write', 'Boxes, tables, checklists and forms', 'clay', 'writing'],
    ['Listen & read', 'media', 'Listen & read', 'Texts and recordings', 'blue', 'listening'],
    ['Layout', 'layout', 'Layout', 'Tabs, folds, slides and cards', 'plum', 'research'],
    ['Class games', 'games', 'Class games', 'Whole-class activities', 'green', 'group']];
  window.DEC15_LESSON = {
    id: 'ieblocks', week: null, day: null, where: 'Studio',
    title: 'Block gallery',
    duration: 'Reference',
    journey: 'Every element you can build a page with. Open a stage to see each block working; switch on Edit in Studio to change or copy them.',
    finish: { title: 'Studio', text: 'Build your own page' },
    sections: GROUPS.map(([cat, id, title, sub, tone, art], k) => ({
      id, number: String(k + 1).padStart(2, '0'), minutes: 10, tone, art, title, subtitle: sub,
      outcome: `${C.filter(b => b.cat === cat).length} blocks: ${C.filter(b => b.cat === cat).map(b => b.name).join(', ')}.`,
      activities: C.filter(b => b.cat === cat).map((b, i) => ({
        id: `${id}${i + 1}`, short: b.name, minutes: 5, grouping: 'Alone', wall: false,
        title: b.name, goal: `${b.desc} (type: '${b.type}')`,
        blocks: [b.make()]
      }))
    })),
    extras: [],
    glossary: []
  };
})();
