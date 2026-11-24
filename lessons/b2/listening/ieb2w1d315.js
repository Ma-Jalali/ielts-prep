/* IELTS · Listening · Practise · Part 3 · Exercise 15 — A pronunciation project.
   Source: Listening Section 3 Exercises (Practice No 15); answers from the teacher's key (folder 15, Ans.6.docx — answers only, no script).
   Questions 9–10 may be answered in either order, so each gap accepts both answers. The folder has no recording script, so the answers
   are the key's and which questions each of the two tracks covers is not known: both players sit at the top.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d315', week: 1, day: 315, sheet: true, illus: 'chat',
  title: 'A pronunciation project',
  duration: 'About 20 minutes',
  journey: 'Listen to students discussing a midterm pronunciation project: what the participants will do, how to choose a reading extract, their views on some lectures and the equipment they will use. Choose two answers, match the lectures to comments and answer short questions.',
  finish: { title: 'Next', text: 'Exercise 16' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice (two answers), matching and short-answer questions',
    outcome: 'Pick out two correct options from five and match opinions to the lectures they describe.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recordings in order and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d315-test', title: 'Part 3 · Exercise 15',
          audios: [
            { title: 'Recording 1 · Questions 1–10 (first part)', src: 'https://drive.google.com/file/d/1Ex-ewiGxsdip7KNXZB2BQco3aeWnbTXa/view', note: 'The conversation begins: Amanda’s pronunciation assignment.' },
            { title: 'Recording 2 · Questions 1–10 (second part)', src: 'https://drive.google.com/file/d/1ExMKxOfUNq4KjbwWm46JhN7K-OWtaQXN/view', note: 'The conversation continues.' }
          ],
          blocks: [
            { type: 'ieMulti', id: 'ieb2w1d315-q1', from: 1, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'Which TWO activities will students do as part of Amanda’s assignment?',
              options: ['analyse their own speech', 'record other students’ speech', 'read something from a book', 'repeat part of a lecture', 'remember part of a lecture'],
              answers: ['A', 'D'] },
            { type: 'ieMulti', id: 'ieb2w1d315-q2', from: 3, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'Which TWO features must Amanda check when she chooses the extract?',
              options: ['the time it takes to read', 'the overall organisation', 'the number of words', 'the number of sentences', 'the inclusion of key ideas'],
              answers: ['B', 'E'] },
            { type: 'ieMatch', id: 'ieb2w1d315-q3', from: 5, reuse: false, boxTitle: 'Comments',
              instruction: 'Which comments do the speakers make about each lecture? Choose **FOUR** answers from the box and write the correct letter, **A–F**, next to Questions 5–8.',
              options: ['The content is repetitive.', 'It took a long time to write.', 'It was shorter than the others.', 'It was well structured.', 'The content is relevant.', 'The topic was popular.'],
              items: [
                { q: 'History of English', answer: 'D' },
                { q: 'Gestures and signs', answer: 'F' },
                { q: 'Intonation patterns', answer: 'E' },
                { q: 'Language and rhythm', answer: 'C' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d315-q4', from: 9, layout: 'short',
              instruction: 'Answer the questions below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: 'Which TWO pieces of equipment will the students use in the study? [[mobile phones|mobile phone|digital recorders|digital recorder]] [[digital recorders|digital recorder|mobile phones|mobile phone]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [ { type: 'text', title: 'Recording script and answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1Ey9Da7shD4zHWxzZKhIFJz9M3oB4qFU_/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' } ] }
    ]
  }],
  extras: [],
  glossary: []
};
