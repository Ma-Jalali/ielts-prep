/* IELTS · Listening · Practise · Part 2 · Exercise 16 — Banks and debit cards for new students.
   Source: Listening Section 2 Exercises (Practice No 16); answers from the teacher's key (folder 16, Ans.10.docx — answers only, no script).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d216', week: 1, day: 216, sheet: true, illus: 'grad',
  title: 'Banks and debit cards for new students',
  duration: 'About 20 minutes',
  journey: 'Listen to a talk for new students about choosing a bank and about the parts of a debit card. Match the banks to what they offer, then label the front and back of the card.',
  finish: { title: 'Next', text: 'Exercise 17' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Matching and diagram labelling',
    outcome: 'Tell apart several similar names in a talk, and follow a description of where things are on a picture.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d216-test', title: 'Part 2 · Exercise 16',
          audios: [
            { title: 'Recording 1 · Questions 1–4', src: 'https://drive.google.com/file/d/1G6bQ5YTChkeEuusSZugDOh_INE5tCmbU/view', note: 'A speaker compares the banks that new students can choose from.' },
            { title: 'Recording 2 · Questions 5–10', src: 'https://drive.google.com/file/d/1G5pef6fjz2smDGbVud2gE9ObSiS9kwoa/view', note: 'She shows a slide of a debit card and explains each part of it.' }
          ],
          blocks: [
            { type: 'ieMatch', id: 'ieb2w1d216-q1', from: 1, boxTitle: 'Banks',
              instruction: 'Which bank provides the following? Choose **FOUR** answers from the box and write the correct letter, **A–F**, next to Questions 1–4.',
              options: ['Evergreen', 'Finley’s', 'Great Western', 'International Union', 'Moneysafe', 'Northern Star'],
              items: [
                { q: 'a branch on the campus', answer: 'B' },
                { q: 'a free gift for new customers', answer: 'D' },
                { q: 'special interest rates for students', answer: 'C' },
                { q: 'no bank charges for certain customers', answer: 'E' }
              ] },
            { type: 'ieDiagram', id: 'ieb2w1d216-q2', from: 5, title: 'Debit card',
              instruction: 'Label the diagram below. Write **ONE OR TWO WORDS** for each answer.', rule: 'ONE OR TWO WORDS', max: 2,
              src: 'assets/lessons/listening/part2/ex16-card.jpg', alt: 'The front and back of a debit card. Front: the name of the bank or card company along the top, a hologram on the right, a small box in the bottom right corner, two small boxes on the left and the card holder’s name along the bottom. Back: a black band across the top and a long box below it for the security number.',
              labels: [
                { x: 83.3, y: 7.2, text: 'Hologram with moving', answer: 'picture|pictures' },
                { x: 91.2, y: 66.5, text: 'Black', answer: 'magnetic strip|magnetic stripe' },
                { x: 91.2, y: 90.9, text: 'Security Number and Holder’s', answer: 'signature' },
                { x: 92.1, y: 44.9, answer: 'bank logo|bank’s logo|logo' },
                { x: 8.8, y: 39.6, text: 'Expiry', answer: 'date|expiry date' },
                { x: 8.8, y: 27.9, answer: 'chip|the chip' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1G5hLqu6Vb-FNC01tunFFiS9wrD8QB28o/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
