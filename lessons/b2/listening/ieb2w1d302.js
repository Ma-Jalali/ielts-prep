/* IELTS · Listening · Practise · Part 3 · Exercise 2 — Ethics in science.
   Source: Listening Section 3 Exercises (page 2, "S3-", Unit 7); answers from the teacher's key (folder 02, Answer Exerciase 2.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d302', week: 1, day: 302, sheet: true, illus: 'chat',
  title: 'Ethics in science',
  duration: 'About 20 minutes',
  journey: 'Listen to a tutor and two students discussing the responsibilities of scientists and the ethical issues science raises. Answer two multiple-choice questions, then choose the right letters from each list.',
  finish: { title: 'Next', text: 'Exercise 3' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice and multiple-answer questions',
    outcome: 'Tell apart options that are really suggested from those that are only mentioned, and notice who says what.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d302-test', title: 'Part 3 · Exercise 2',
          audios: [
            { title: 'Recording 1 · Questions 1–2', src: 'https://drive.google.com/file/d/1a7FwPglQexmoxxMZ0lUkppcjHU5O5eui/view', note: 'A tutor and a student talk about how science changed in the twentieth century.' },
            { title: 'Recording 2 · Questions 3–10', src: 'https://drive.google.com/file/d/1IUFH4FFWr5WwsNKYpIojKNXUiOpyywaA/view', note: 'The discussion moves on to what scientists should do and the issues that worry people.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d302-q1', from: 1,
              instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'What, according to the tutor, happened to scientists in the twentieth century?',
                  options: ['They lost contact with the rest of society.', 'They began to lose interest in ethical issues.', 'They did both good and harm to the world.'], answer: 'C' },
                { q: 'One of the students says that scientists should not',
                  options: ['publish the results of certain kinds of research.', 'distinguish between pure and applied science.', 'feel responsible for the applications of science.'], answer: 'B' }
              ] },
            { type: 'ieMulti', id: 'ieb2w1d302-q2', from: 3, pick: 3,
              instruction: 'Choose **THREE** letters, **A–F**.',
              q: 'Which THREE of these things do the speakers suggest scientists should do?',
              options: ['improve science teaching', 'warn of future dangers', 'solve problems that arise', 'prevent discoveries going abroad', 'become politicians', 'improve their public image'],
              answers: ['B', 'C', 'F'] },
            { type: 'ieMulti', id: 'ieb2w1d302-q3', from: 6, pick: 3,
              instruction: 'Choose **THREE** letters, **A–F**.',
              q: 'Which THREE of these issues do the students mention?',
              options: ['genetically-modified crops', 'the cloning of human beings', 'using pesticides in agriculture', 'experiments on live animals', 'changing weather patterns', 'weapons of mass destruction'],
              answers: ['A', 'C', 'F'] },
            { type: 'ieMulti', id: 'ieb2w1d302-q4', from: 9, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'Which TWO of these does the tutor suggest the students should avoid?',
              options: ['making many car journeys', 'travelling frequently by air', 'communicating via computer', 'buying certain imported products', 'wasting energy at home'],
              answers: ['B', 'D'] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1yxaLiZOCwFBd1JJxkH4FLLtQXV8CTwjj/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
