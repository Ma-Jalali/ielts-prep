/* IELTS · Listening · Practise · Part 4 · Exercise 20 — Changing the school calendar.
   Source: Listening Section 4 Exercises (Practice No 20); answers and recording script from the teacher's key (folder 20, "Ans.11.pdf").
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d420', week: 1, day: 420, sheet: true, illus: 'grad',
  title: 'Changing the school calendar',
  duration: 'About 20 minutes',
  journey: 'Listen to a lecture on a six-term school year, learning loss over the summer and summer schools. Answer the multiple-choice questions and complete the summary.',
  finish: { title: 'Next', text: 'Exercise 21' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 31–40', subtitle: 'Multiple choice and summary completion',
    outcome: 'Follow research findings in a lecture and tell apart several similar numbers.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 31–40. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d420-test', title: 'Part 4 · Exercise 20',
          audios: [
            { title: 'Recording · Questions 31–40', src: 'https://drive.google.com/file/d/1FQeG74_zjmQYe22n-wItkDACFE11xk4h/view', note: 'A lecturer compares a six-term school year with the traditional one and looks at research.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d420-q1', from: 31,
              instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'How long would terms be under the six-term system?', options: ['six weeks', 'seven weeks', 'thirteen weeks'], answer: 'B' },
                { q: 'What would happen to the summer holiday?', options: ['It would disappear.', 'It would be shortened.', 'It would be lengthened.'], answer: 'B' },
                { q: 'How much was the average learning loss in the summer?', options: ['two weeks', 'three weeks', 'seven weeks'], answer: 'B' },
                { q: 'In which subject was learning loss greatest among disadvantaged children?', options: ['maths', 'reading', 'writing'], answer: 'B' },
                { q: 'According to Marchmont’s research, in the six-term system pupils performed', options: ['better than under the existing system.', 'worse than under the existing system.', 'the same as under the existing system.'], answer: 'A' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d420-q2', from: 36, layout: 'summary',
              instruction: 'Complete the summary below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: 'The school terms that we use originated when many people worked in [[agriculture]]. Also, because of the heat, it was difficult to teach children in July and August before the invention of [[air-conditioning|air conditioning]]. A different approach can be provided by the [[summer school|summer schools]]. An important factor in the success of these is the small [[class size|class sizes]]. Also, the element of [[parental support]] is usually present, which contributes greatly.' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FR9EZimyLv82YBwEpqLz_GNHbW3ihUU2/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
