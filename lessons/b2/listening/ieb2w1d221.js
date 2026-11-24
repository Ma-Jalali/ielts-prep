/* IELTS · Listening · Practise · Part 2 · Exercise 21 — Visiting a science festival.
   Source: Listening Section 2 Exercises (Practice No 21); answers and recording script from the teacher's key (folder 21, Ans.18.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d221', week: 1, day: 221, sheet: true, illus: 'science',
  title: 'Visiting a science festival',
  duration: 'About 20 minutes',
  journey: 'Listen to a lecturer telling student teachers how to organise a school visit to the Norchester Science Festival and describing some of its events. Answer the multiple-choice questions, then match each event to the kind of event it is.',
  finish: { title: 'Next', text: 'Exercise 22' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice and matching',
    outcome: 'Follow a talk that gives aims and reasons, and match event names to descriptions of what happens at each one.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d221-test', title: 'Part 2 · Exercise 21',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1GGk5PB23kDdkxRd6FuOQ4dft1fTtg41U/view', note: 'A lecturer explains why student teachers should organise school visits to the festival.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1GH8wEtZf3Mit77-2AMkOfkyABlpY4mAp/view', note: 'The lecturer describes the festival venues and some of this year’s events.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d221-q1', from: 1,
              instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'What will the head of science probably do?',
                  options: ['arrange the visit to the festival', 'confirm the school placements', 'provide information about the festival'], answer: 'C' },
                { q: 'The student teachers should arrange visits that last',
                  options: ['one or two days.', 'two or three days.', 'all three days.'], answer: 'A' },
                { q: 'The most important purpose of festival visits is to',
                  options: ['get better exam grades.', 'create enthusiasm for science.', 'enable students to have fun.'], answer: 'B' },
                { q: 'The central features of our scientific age are',
                  options: ['inventions and improvements.', 'interesting and unusual events.', 'interest and enthusiasm for science.'], answer: 'A' },
                { q: 'What kind of specialists are teaching maths?',
                  options: ['physicists', 'biologists', 'chemists'], answer: 'B' }
              ] },
            { type: 'ieMatch', id: 'ieb2w1d221-q2', from: 6, boxTitle: 'Types of event',
              instruction: 'Match Questions 6–10 with answers **A–E**.',
              options: ['a show', 'an event of local interest', 'a technical demonstration', 'an open discussion', 'an interactive event'],
              items: [
                { q: 'Waterworld', answer: 'B' },
                { q: 'Transport 2050', answer: 'D' },
                { q: 'Science in a suitcase', answer: 'A' },
                { q: 'Ropes and hangings', answer: 'E' },
                { q: 'Paper and time', answer: 'C' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GHBfjBJoY5HRlPFzyw1Fs6EsbBDsVGj8/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
