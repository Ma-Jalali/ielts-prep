/* IELTS · Listening · Practise · Part 3 · Exercise 3 — An online music course.
   Source: Listening Section 3 Exercises (Practice No 3); answers from the teacher's key (folder 03, S3-3.pdf and S3-3.txt).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d303', week: 1, day: 303, sheet: true, illus: 'music',
  title: 'An online music course',
  duration: 'About 20 minutes',
  journey: 'Listen to Josie telling another student, Graham, about Music 103, a distance-learning course she is taking. Choose the right letters, then complete the list and answer two questions.',
  finish: { title: 'Next', text: 'Exercise 4' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple-answer questions, list completion and short answers',
    outcome: 'Pick out what is really needed from what is not, and catch numbers and dates in a fast conversation.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d303-test', title: 'Part 3 · Exercise 3',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1EfqHZFlE1k2ph1Z4ZsQyUSzyCJT6l-Mw/view', note: 'Graham asks Josie what Music 103 needs and how it works.' }
          ],
          blocks: [
            { type: 'ieMulti', id: 'ieb2w1d303-q1', from: 1, pick: 3,
              instruction: 'Choose **THREE** letters, **A–G**.',
              q: 'According to Josie, which THREE things are necessary for Music 103?',
              options: ['ability to read music', 'ability to sing', 'computer skills', 'ability to play a musical instrument', 'good math', 'independent learning skills', 'membership of the music department'],
              answers: ['C', 'E', 'F'] },
            { type: 'ieMulti', id: 'ieb2w1d303-q2', from: 4, pick: 3,
              instruction: 'Choose **THREE** letters, **A–G**.',
              q: 'Which THREE of the following activities does Music 103 involve?',
              options: ['designing a software programme', 'writing and playing back your own music', 'writing music for films', 'attending lectures at the university', 'listening to examples from the internet', 'going on study tours abroad', 'comparing modern and classical music'],
              answers: ['B', 'E', 'G'] },
            { type: 'ieGap', id: 'ieb2w1d303-q3', from: 7, layout: 'notes',
              instruction: 'List TWO more things a student’s computer needs for Music 103. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: '- [[64|sixty-four|sixty four]] megabytes of RAM\n- CD ROM\n- [[sound card]]' },
            { type: 'ieGap', id: 'ieb2w1d303-q4', from: 9, layout: 'short',
              instruction: 'Answer the questions below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: 'When does the next course begin? [[January|in January|next January|this January]]\nHow many assignments must be done to pass the course? [[6|six|6 assignments|six assignments]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1ElsZKIKEx68rpGhoIawnE7hrJpUr0sMt/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
