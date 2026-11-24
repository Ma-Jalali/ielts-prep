/* IELTS · Listening · Practise · Part 3 · Exercise 25 — Planning a computer programming lesson.
   Source: Listening Section 3 Exercises (Practice No 25); answers and recording script from the teacher's key
   (folder 25, Answers S3-25.pdf: Unit 7 Exam Practice, Listening, audioscript CD2 track 15).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d325', week: 1, day: 325, sheet: true, illus: 'robot',
  title: 'Planning a computer programming lesson',
  duration: 'About 20 minutes',
  journey: 'Listen to two student teachers, Dawn and Hardip, planning a lesson in which teenagers write a simple guessing game in BASIC. Match each task to the way students work, then complete the flow chart of the game.',
  finish: { title: 'Done', text: 'Part 3 complete' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Matching and flow-chart completion',
    outcome: 'Follow a plan as it is built up step by step, and catch the exact words shown on a screen.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d325-test', title: 'Part 3 · Exercise 25',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1ErmJyVi_9W80omg0Fqkg1WzZJcUTHTeR/view', note: 'Dawn and Hardip plan a 45-minute programming lesson for sixteen teenagers.' }
          ],
          blocks: [
            { type: 'ieMatch', id: 'ieb2w1d325-q1', from: 1, reuse: true, boxTitle: 'How students work',
              instruction: 'How will students carry out the following tasks in the lesson? Write the correct letter, **A, B or C**, next to Questions 1–4.',
              options: ['as a whole group', 'in pairs', 'in small groups'],
              items: [
                { q: 'doing the short quiz', answer: 'B' },
                { q: 'making a flow chart', answer: 'A' },
                { q: 'learning the key commands', answer: 'C' },
                { q: 'writing a computer program', answer: 'B' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d325-q2', from: 5, layout: 'flow',
              instruction: 'Complete the flow chart below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: 'Game starts with [[blank screen]]\nText on screen “[[Guess]] a number between 1 and 10”\nPlayer [[types in]] a number\nIf the number is less than 1 or bigger than 10 then “[[Bad choice]]” appears!\nIf the number is 6 then “[[Correct]]” appears!\nIf the number isn’t 6 then “[[Try again]]” appears!' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1ErwUrU2x76xJt_aZ4_dShGJQX_-LWAHR/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
