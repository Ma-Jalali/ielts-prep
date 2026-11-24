/* IELTS · Listening · Practise · Part 4 · Exercise 3 — Psychometric testing.
   Source: Listening Section 4 Exercises (Practice No 03); answers and recording script from the teacher's key (folder 03, s4-3 a.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d403', week: 1, day: 403, sheet: true, illus: 'survey',
  title: 'Psychometric testing',
  duration: 'About 20 minutes',
  journey: 'Listen to a lecture about psychometric tests: why employers use them, the four main types and the Myers-Briggs test. Complete the sentences, choose the answers and answer the questions.',
  finish: { title: 'Next', text: 'Exercise 4' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Sentence completion, multiple choice and short answers',
    outcome: 'Follow a lecture that lists types and categories, and notice when the speaker paraphrases the words in the questions.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d403-test', title: 'Part 4 · Exercise 3',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FfDvHQVeXgIPaO4ztt8rFPK19YdocPhS/view', note: 'A lecturer explains what psychometric tests are and how they work.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d403-q1', from: 1, layout: 'sentences',
              instruction: 'Listen to the recording and complete statements 1–5 in **no more than THREE words**.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'Some employers use a psychometric test as one element of their [[selection procedure|selection procedures]].\nA better name for psychometric tests would be [[assessments]].\nOne reason why questionnaires are popular is that they are straightforward to [[administer]].\nIn the [[ratings|rating]] test format, someone else answers questions about you.\nIn the [[objective]] type of test, subjects have to do something practical.' },
            { type: 'ieChoice', id: 'ieb2w1d403-q2', from: 6,
              instruction: 'Choose the correct letter, **A, B or C**.',
              items: [
                { q: 'Psychometric testing aims to assess', options: ['permanent personality features', 'personality tendencies', 'personality deficiencies'], answer: 'B' },
                { q: 'How effective a questionnaire is depends on', options: ['the standard of questions', 'the subject’s attitude', 'the subject’s ability'], answer: 'B' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d403-q3', from: 8, layout: 'short',
              instruction: 'Answer the questions below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS',
              text: 'How many areas of a person’s character does the Myers-Briggs test assess? [[four|4]]\nIn the Myers-Briggs test, what is the third area concerned with? [[decision making|decision-making|making decisions|decisions]]\nWhat are the two ways in which people may prefer to organize their lives? (… and …) [[structured and flexible|flexible and structured|structured, flexible|structured flexible]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FfBY-rEo8stUrkjlkb3Ql4b9OLxcQrpB/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
