/* IELTS · Listening · Practise · Part 3 · Exercise 6 — A presentation on waste in cities.
   Source: Listening Section 3 Exercises (Practice No 6); answers from the teacher's key (folder 06, S3-6 a.pdf: Focus on IELTS,
   Unit 4 Focus on listening 1, key and recording script). Questions 8–10 may be answered in any order, so each of those gaps
   accepts any of the three factors.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d306', week: 1, day: 306, sheet: true, illus: 'eco',
  title: 'A presentation on waste in cities',
  duration: 'About 20 minutes',
  journey: 'Listen to two students giving a short presentation to their tutor about rubbish in big cities and how long it takes to break down. Label the graph, complete the table and list three factors.',
  finish: { title: 'Next', text: 'Exercise 7' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Graph labelling, table completion and listing',
    outcome: 'Match spoken figures to bars on a graph, and catch numbers and conditions as two speakers take turns.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d306-test', title: 'Part 3 · Exercise 6',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1Lyhe2DUdpd49b4dYGjaQq9QWU23dNiEL/view', note: 'Susan and Peter present their findings on city rubbish to their tutor.' }
          ],
          blocks: [
            { type: 'ieDiagram', id: 'ieb2w1d306-q1', from: 1, title: 'Rubbish produced per day (million kilograms)',
              instruction: 'Label the two bars identified on the graph below. Choose your answers from the box and write the correct letter, **A–E**, next to Questions 1 and 2.',
              src: 'assets/lessons/listening/part3/ex06-chart.jpg', alt: 'A bar graph with five bars from 0 to 15. The first bar is about 14, the second about 10, the third about 9, the fourth about 4.5 and the fifth about 3.5. Arrow 1 points to the second bar; arrow 2 points to the fifth bar.',
              bankTitle: 'List of Cities',
              bank: ['Calcutta', 'Los Angeles', 'Mexico City', 'New York', 'Tokyo'],
              labels: [
                { x: 21, y: 92.5, answer: 'E' },
                { x: 94.3, y: 93.3, answer: 'A' }
              ] },
            { type: 'ieTable', id: 'ieb2w1d306-q2', from: 3,
              instruction: 'Complete the table. Write **NO MORE THAN TWO WORDS OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS OR A NUMBER', max: 2,
              columns: ['Material', 'Time to biodegrade', 'Notes'],
              rows: [
                ['Food', '[[twenty days|20 days]]', ''],
                ['Paper', '3–12 months', 'Needs [[damp]] conditions'],
                ['Metal', '1–10 years', 'Excluding aluminium (used in [[80|eighty]] % of all soft drink cans)'],
                ['[[plastics|plastic]]', '100 years (estimated)', ''],
                ['Glass', '[[4,000 years|4000 years|4,000|4000]] (minimum)', '']
              ] },
            { type: 'ieGap', id: 'ieb2w1d306-q3', from: 8, layout: 'notes', title: 'Factors which affect the speed of decay',
              instruction: 'List three factors which affect the speed of decay, in any order. Write **NO MORE THAN ONE WORD** for each answer.', rule: 'NO MORE THAN ONE WORD', max: 1,
              text: '- [[temperature|humidity|oxygen]]\n- [[humidity|temperature|oxygen]]\n- [[oxygen|temperature|humidity]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1LvmDOxNDQRz4LjcZTcdy4LZEAdpMfQFk/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
