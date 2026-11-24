/* IELTS · Listening · Practise · Part 2 · Exercise 17 — Machines for a new building.
   Source: Listening Section 2 Exercises (Practice No 17); answers from the teacher's key (folder 17, Ans.11.docx — answers only, no script).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d217', week: 1, day: 217, sheet: true, illus: 'food',
  title: 'Machines for a new building',
  duration: 'About 20 minutes',
  journey: 'Listen to a talk about where the cash, ticket, games and drinks machines will go in a new building, and how the new drinks machine for the staff room works. Match the machines to places, then label the picture of the drinks machine.',
  finish: { title: 'Next', text: 'Exercise 18' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Matching and diagram labelling',
    outcome: 'Match things to places in a building, and follow a description of how a machine works.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d217-test', title: 'Part 2 · Exercise 17',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1G7fFHejXOyzqFpZ8As6_uS4HP9Jsszc6/view', note: 'A speaker explains where the machines will go and how the new drinks machine works.' }
          ],
          blocks: [
            { type: 'ieMatch', id: 'ieb2w1d217-q1', from: 1, boxTitle: 'Places',
              instruction: 'Where will the following machines be? Choose **FOUR** answers from the box and write the correct letter, **A–F**, next to Questions 1–4.',
              options: ['visitor centre', 'in front of the building', 'next to elevators', 'entrance hall', 'exhibition halls', 'reception area'],
              items: [
                { q: 'cash machine', answer: 'D' },
                { q: 'ticket machine', answer: 'F' },
                { q: 'games machine', answer: 'A' },
                { q: 'drinks machine', answer: 'C' }
              ] },
            { type: 'ieDiagram', id: 'ieb2w1d217-q2', from: 5, title: 'Drinks machine for staff room',
              instruction: 'Label the diagram below. Write **ONE OR TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'ONE OR TWO WORDS AND/OR A NUMBER', max: 2,
              src: 'assets/lessons/listening/part2/ex17-machine.jpg', alt: 'A tall drinks vending machine with rows of cans and bottles behind the front panel. On the right-hand side there is a narrow panel with a display, a keypad, a coin slot and buttons, and lower down a small flap where the drink comes out. A white arm in the middle of the shelves picks up the drinks.',
              labels: [
                { x: 83.2, y: 9.2, text: '…… front', answer: 'glass|glass front' },
                { x: 82.2, y: 68.8, text: '…… receiver', answer: 'illuminated|illuminated receiver' },
                { x: 8.7, y: 59.3, text: 'Drink delivered by a visible', answer: 'moving arm' },
                { x: 15.9, y: 63.3, text: '(Drink not ……)', answer: 'shaken' },
                { x: 89.4, y: 29.0, text: 'Put in …… for drink required', answer: 'code|a code' },
                { x: 82.7, y: 50.8, text: 'Order maximum of', answer: '10|ten|10 products|ten products|10 drinks|ten drinks' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1G90AXMtCkCylkWT0DkwfAnO7PpfM1QLI/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
