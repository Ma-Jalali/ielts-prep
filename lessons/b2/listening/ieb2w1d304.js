/* IELTS · Listening · Practise · Part 3 · Exercise 4 — A survey of computer access.
   Source: Listening Section 3 Exercises (Practice No 4); answers from the teacher's key (folder 04, S3-4.pdf and S3-4.txt).
   The paper letters the box for Questions 6–10 F–M although its rubric and the key use A–H; the box is lettered A–H here.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d304', week: 1, day: 304, sheet: true, illus: 'survey',
  title: 'A survey of computer access',
  duration: 'About 20 minutes',
  journey: 'Listen to two students, Sami and Irene, telling their tutor about their survey of the university’s computer facilities. Answer the multiple-choice questions, then match each suggestion to its disadvantage.',
  finish: { title: 'Next', text: 'Exercise 5' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice and matching',
    outcome: 'Follow a tutorial about a research project and match ideas to the problems the speakers see in them.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d304-test', title: 'Part 3 · Exercise 4',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1EdNu85cEn3IsQuZ_3XLvtOA4XkiwcDwC/view', note: 'Sami and Irene tell their tutor how they did their survey and what they found.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1Eb0XY2-ZqdhoRaSL8Vh44IhiYAxHpVpg/view', note: 'They go through the students’ other suggestions and the problems with each.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d304-q1', from: 1,
              instruction: 'Choose the correct answer, **A**, **B** or **C**.',
              items: [
                { q: 'Sami and Irene decided to do a survey about access to computer facilities because',
                  options: ['no one had investigated this before.', 'their tutor suggested this topic.', 'this was a problem for many students.'], answer: 'C' },
                { q: 'Sami and Irene had problems with the reading for their project because',
                  options: ['the language was too technical.', 'not much had been written about the topic.', 'they could not locate the books in the library.'], answer: 'B' },
                { q: 'How did Sami and Irene get the main data in their survey?',
                  options: ['from face-to-face interviews', 'from observation of students', 'from online questionnaires'], answer: 'A' },
                { q: 'The tutor suggests that one problem with the survey was limitations in',
                  options: ['the range of students questioned.', 'the number of students involved.', 'the places where the questions were asked.'], answer: 'A' }
              ] },
            { type: 'figure', src: 'assets/lessons/listening/part3/ex04-charts.jpg', alt: 'Three pie charts. A: a quarter of the circle is shaded. B: three-quarters is shaded. C: a little more than three-quarters is shaded.', caption: 'Question 5 · Charts A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d304-q2', from: 5,
              instruction: 'Choose the correct answer, **A**, **B** or **C**.',
              items: [
                { q: 'What proportion of students surveyed thought that a booking system would be the best solution?',
                  options: ['Chart A: a quarter shaded', 'Chart B: three-quarters shaded', 'Chart C: a little more than three-quarters shaded'], answer: 'C' }
              ] },
            { type: 'ieMatch', id: 'ieb2w1d304-q3', from: 6, boxTitle: 'Disadvantages',
              instruction: 'Choose your answers from the box and write the letters **A–H** next to Questions 6–10. What disadvantage was mentioned in relation to each suggestion?',
              options: ['against university regulations', 'inconvenient for users', 'involves long waits', 'lack of alternative resources', 'need for security arrangements', 'not a long-term solution', 'more work for staff at centres', 'too expensive'],
              items: [
                { q: 'different rooms for educational and recreational use', answer: 'B' },
                { q: 'restrictions on use by classes', answer: 'D' },
                { q: 'new computers', answer: 'F' },
                { q: '24-hour access to computers', answer: 'E' },
                { q: 'booking system', answer: 'G' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1Ebqe7HXROmEsjsDTD9wbI5yBIo1I7gOK/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
