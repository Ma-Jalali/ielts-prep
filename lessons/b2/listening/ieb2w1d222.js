/* IELTS · Listening · Practise · Part 2 · Exercise 22 — A first day at Coppersmith Engineering.
   Source: Listening Section 2 Exercises (Practice No 22); answers and recording script from the teacher's key (folder 22, Progress Test 2.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d222', week: 1, day: 222, sheet: true, illus: 'conference',
  title: 'A first day at Coppersmith Engineering',
  duration: 'About 20 minutes',
  journey: 'Listen to the training manager of an engineering company welcoming a group of new trainees. Complete the sentences about the company, then match each trainee to the activity they will learn about.',
  finish: { title: 'Next', text: 'Exercise 23' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Sentence completion and matching',
    outcome: 'Pick out dates and facts from a company history and match people to the departments they are sent to.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d222-test', title: 'Part 2 · Exercise 22',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1GQYq5OGLsYg8AUPyc1s4iUk8_Isx7b7l/view', note: 'The training manager gives the trainees some background on the company.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1GR-xU2hk0IZfY0Yuk_hdwdtfWn5jIqMa/view', note: 'He tells each trainee which member of staff they will work with.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d222-q1', from: 1, layout: 'sentences',
              instruction: 'Complete the sentences below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 3,
              text: 'Coppersmith Engineering was founded in [[1934]].\nIt has recently developed engines for certain types of [[boats]].\nSince starting a joint venture, there has been an increase in [[turnover|sales turnover]].\nThe building that is under construction is to be a new [[office|office block]].\nThe company recently won an award as the [[best employer]] in the city.' },
            { type: 'ieMatch', id: 'ieb2w1d222-q2', from: 6, boxTitle: 'Activities',
              instruction: 'Which activity will each trainee learn about? Choose your answers from the box and write the letters **A–H** next to Questions 6–10.',
              options: ['domestic sales', 'export sales', 'marketing', 'purchasing', 'recruitment', 'salaries and wages', 'training', 'warehouse'],
              items: [
                { q: 'Carol', answer: 'F' },
                { q: 'Frank', answer: 'D' },
                { q: 'Philip', answer: 'B' },
                { q: 'Stephanie', answer: 'H' },
                { q: 'Minh', answer: 'E' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GQor_5G4t0xNjUCskC4TCiRXfdvGgXSR/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
