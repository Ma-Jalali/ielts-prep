/* IELTS · Listening · Practise · Part 1 · Exercise 22 — A police report and Emma Darwin.
   Replaces the earlier Exercise 22 (its recordings did not match its questions).
   Source: the teacher's folder "Sec1 insight wb" (Insight into IELTS workbook, Listening: predicting the answers from the
   given information, tasks A and B); recordings Track 03 (task A) and Track 04 (task B); answers from its Answer Keys.pdf. There is no recording script, so
   the page has no script section (the answers are in the page's own answer key).
   New block ids (a1, b1), so nothing written for the old exercise is shown here.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d122', week: 1, day: 122, sheet: true, illus: 'people',
  title: 'A police report and Emma Darwin',
  duration: 'About 20 minutes',
  journey: 'Two short recordings: a woman reports a theft to the police, then a talk about the life of Emma Darwin. Before each one, look at the words around every gap and predict what kind of information you need: a name, a number, an adjective, a family relation …',
  finish: { title: 'Next', text: 'Exercise 23' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Form and note completion',
    outcome: 'Predict the type of information each gap needs, then listen for names, numbers and descriptions.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Predict the type of information before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d122-test', title: 'Part 1 · Exercise 22',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1dmcO31-P1UqAIorcISJ67gu2mY4ckSfe/view', note: 'A woman reports a theft at a police station.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1dmsn-fSj-pHWRr3mp-tbCITQ1t-qmtKQ/view', note: 'A short talk about the life of Emma Darwin.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d122-a1', from: 1, layout: 'form', title: 'Police report',
              instruction: 'Complete the form below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: 'Name: [[Anna Andersson]]\nAddress: [[Sunrise House]], Beach Road\n# Description of stolen items\nBag: [[black leather|leather black|black, leather]]\nPassport no: [[4528 7709|45287709]]\nWatch: [[small, silver|small silver|silver, small|silver small]]' },
            { type: 'ieGap', id: 'ieb2w1d122-b1', from: 6, layout: 'notes', title: 'Biographical notes · Emma Darwin',
              instruction: 'Complete the notes below. Write **NO MORE THAN TWO WORDS** for each answer. (Question 8 has two things: write both.)', rule: 'NO MORE THAN TWO WORDS',
              text: '- [[wife]] of Charles Darwin\n- Good dancer. Spoke many languages\n- Played [[piano|the piano]] well\n- Born into the Wedgwood family, famous for [[plates and china|plates, china|china and plates]]\n- Happily married, with [[ten children|10 children]] born between 1839 and 1856\n- Now the subject of a [[biography|book]]' }
          ]
        }] }
    ]
  }],
  extras: [],
  glossary: []
};
