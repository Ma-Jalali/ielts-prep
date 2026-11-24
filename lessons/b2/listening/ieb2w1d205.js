/* IELTS · Listening · Practise · Part 2 · Exercise 5 — Cranley Hill Primary School.
   Source: Listening Section 2 Exercises (Practice No 5); answers from the teacher's key (Drive folder 05, S2-5.txt — answers only, no script),
   checked against the recordings. The paper labels the options of Question 2 B–D and prints "9" twice on the map;
   here the options are A–C and the pin in the Play Area is Question 8, as in the key.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d205', week: 1, day: 205, sheet: true, illus: 'map',
  title: 'Cranley Hill Primary School',
  duration: 'About 20 minutes',
  journey: 'Listen to a head teacher welcoming visitors to a village primary school and describing its grounds. Answer the multiple-choice questions and label the map.',
  finish: { title: 'Next', text: 'Exercise 6' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice and map labelling',
    outcome: 'Choose the option that really answers the question, then follow directions (behind, to the left, at the far end) round a map.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d205-test', title: 'Part 2 · Exercise 5',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1GB2emwkzwGkab8ZWGrF1F8UfveTRqbzc/view', note: 'The head teacher tells parents about the school’s history, its energy and its meals.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1GC82lVHBr_3XITzz8j0cqeeV5rjNIp1t/view', note: 'She tells the visitors what they will see as they walk round the school grounds.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d205-q1', from: 1,
              instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'Cranley Hill Primary School first opened in', options: ['1830', '1899', '1983'], answer: 'B' },
                { q: 'There are fewer pupils in the school now than in the past because', options: ['there are not enough teachers.', 'students have transport problems.', 'the local population has declined.'], answer: 'C' },
                { q: 'The head teacher is proud that the school is provided with energy from', options: ['wind power from their own turbine.', 'coal from the local mines.', 'electricity supplied by nearby villages.'], answer: 'A' },
                { q: 'The head teacher believes that primary pupils should study problems which', options: ['are regional rather than global.', 'can be solved locally.', 'may have no clear answer.'], answer: 'B' },
                { q: 'The children’s meals at school are unusual because', options: ['they include food grown by the children.', 'they are provided by local people.', 'the children are involved in cooking the food.'], answer: 'A' }
              ] },
            { type: 'ieDiagram', id: 'ieb2w1d205-q2', from: 6,
              instruction: 'Label the map. Choose five answers from the box and write the letters **A–H** next to Questions 6–10.',
              src: 'assets/lessons/listening/part2/ex05-map.jpg', alt: 'Map of the grounds of Cranley Hill Primary School, north at the top: the school building at the bottom with the car park to its right and a large field to its left; the Play Area behind the school; the Secret Garden at the top, with trees, a vegetable patch on the right and the wind turbine at the top left.',
              bank: ['bird cages', 'football field', 'play equipment', 'pond', 'recycling centre', 'sports field', 'storyteller’s chair', 'tree house'],
              labels: [
                { x: 19.9, y: 67, answer: 'F' },
                { x: 81.9, y: 86.4, answer: 'E' },
                { x: 51, y: 58.6, answer: 'H' },
                { x: 68.2, y: 21.4, answer: 'D' },
                { x: 40.9, y: 27, answer: 'G' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1GBqXf1owwCZBy5Lui5VPY_39SNhjloVx/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
