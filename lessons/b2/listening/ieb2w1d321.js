/* IELTS · Listening · Practise · Part 3 · Exercise 21 — An assignment on museums.
   Source: the teacher's replacement page (Unit 2 "The importance of the past", Exam listening, Section 3, tracks 1.12–1.13);
   answers from the key in Drive folder 1WNpTCWKsxIi6w5wJhcF0occgGukmfl7h (Ans.11.pdf), checked against its script.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d321', week: 1, day: 321, sheet: true, illus: 'arts',
  title: 'An assignment on museums',
  duration: 'About 20 minutes',
  journey: 'Listen to two students, Anne and Tom, talking about their assignment on local museums and how museums should be paid for. Complete the sentences, then match each kind of museum to a way of funding it.',
  finish: { title: 'Next', text: 'Exercise 22' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 21–30', subtitle: 'Sentence completion and matching',
    outcome: 'Follow two speakers as they agree and disagree, and catch who thinks what.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 21–30. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d321-test', title: 'Part 3 · Exercise 21',
          audios: [
            { title: 'Recording 1 · Questions 21–25', src: 'https://drive.google.com/file/d/1eO2b25tR7yO3ZOBv5I1FQBMqXtAJkCE7/view', note: 'Anne tells Tom about her visit to a local museum.' },
            { title: 'Recording 2 · Questions 26–30', src: 'https://drive.google.com/file/d/1ePucCOjyYJJM-UWKyww2kzWd6uwISFd-/view', note: 'They discuss who should pay for different kinds of museum.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d321-q1', from: 21, layout: 'sentences',
              instruction: 'Complete the sentences below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'The name of the assignment is ‘Museums – their [[costs and benefits]]’.\nThe number one problem with local museums is that they are [[small|too small]].\nThe purpose of the museum shop is to [[raise money]].\nThe boat was [[about 100|100|a hundred|one hundred|about a hundred]] years old.\nThe [[display cabinets|cabinets]] are dark.' },
            { type: 'ieMatch', id: 'ieb2w1d321-q2', from: 26, reuse: true, boxTitle: 'How does Tom think the museums should be funded?',
              instruction: 'How does Tom think the museums should be funded? Write the correct letter, **A**, **B** or **C**, next to Questions 26–30.',
              options: ['by the state', 'by local government', 'by private funding'],
              items: [
                { q: 'local history museums', answer: 'B' },
                { q: 'natural history museums', answer: 'C' },
                { q: 'science museums', answer: 'A' },
                { q: 'craft museums', answer: 'C' },
                { q: 'working farms', answer: 'B' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1eNRJBLPVkFZbgbmh3KQLq_W9cbHUhL0Q/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
