/* IELTS · Listening · Practise · Part 3 · Exercise 11 — H. G. Wells and the future.
   Source: Listening Section 3 Exercises (Practice No 11); answers and recording script from the teacher's key (folder 11, Ans.1.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d311', week: 1, day: 311, sheet: true, illus: 'books',
  title: 'H. G. Wells and the future',
  duration: 'About 20 minutes',
  journey: 'Listen to a tutor and two students discussing the science fiction writer H. G. Wells and his predictions. Match his works to what is said about them and answer questions about his idea of a world encyclopedia.',
  finish: { title: 'Next', text: 'Exercise 12' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Matching and short-answer questions',
    outcome: 'Follow a three-way tutorial discussion and link each book title to the detail the speakers give about it.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d311-test', title: 'Part 3 · Exercise 11',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/17SnnXZRwKPMWgvniG2MBmyphsw4G-lXA/view', note: 'A tutor and two students talk about H. G. Wells’ books and his “World Brain”.' }
          ],
          blocks: [
            { type: 'ieMatch', id: 'ieb2w1d311-q1', from: 1, reuse: false, boxTitle: 'What is said about each work?',
              instruction: 'What is said about each of these works by H. G. Wells? Choose your answers from the box and write the letters **A–H** next to Questions 1–6.',
              options: ['Wells was ill when he wrote this.', 'This was heavily criticised by another author.', 'This predicted limiting the number of people on Earth.', 'This was a commercially unsuccessful novel.', 'This was a talk, not a book.', 'This predicted a type of identity card.', 'This was Wells’ only optimistic work.', 'This actually has a much longer name.'],
              items: [
                { q: 'The Discovery of the Future', answer: 'E' },
                { q: 'The Time Machine', answer: 'A' },
                { q: 'Anticipations', answer: 'H' },
                { q: 'First Men in the Moon', answer: 'B' },
                { q: 'A Modern Utopia', answer: 'F' },
                { q: 'The Shape of Things to Come', answer: 'C' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d311-q2', from: 7, layout: 'short',
              instruction: 'Answer the questions below. Write **NO MORE THAN TWO WORDS OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS OR A NUMBER', max: 2,
              text: 'In which decade did Wells call for the setting up of a world encyclopedia? [[1930s|the 1930s|1930’s|the 1930’s|thirties|the thirties]]\nWhat was Wells’ series of essays entitled? [[World Brain]]\nWhat did Wells want people to use to create the encyclopedia? [[modern technology|technology]]\nAccording to some people, what has made Wells’ prediction a reality? [[the internet|internet]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [ { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1EawaKoSoZ2cTZfHzckSua0yfIgLmi2OP/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' } ] }
    ]
  }],
  extras: [],
  glossary: []
};
