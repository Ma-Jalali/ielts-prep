/* IELTS · Listening · Practise · Part 3 · Exercise 20 — An assignment on zoos.
   Source: Listening Section 3 Exercises (Practice No 20); answers and recording script from the teacher's key (folder 20, Ans.15.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d320', week: 1, day: 320, sheet: true, illus: 'eco',
  title: 'An assignment on zoos',
  duration: 'About 20 minutes',
  journey: 'Listen to three students planning a group assignment on zoos and then talking about the Arabian oryx. Choose the right letters, then complete the summary.',
  finish: { title: 'Next', text: 'Exercise 21' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple-answer questions and summary completion',
    outcome: 'Follow a group discussion and tell apart what the students must cover, what they drop and what they decide to do next.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d320-test', title: 'Part 3 · Exercise 20',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1F1wL3JOZkvxauKJZ36Hdx1Q3MNr1XSlv/view', note: 'Three students decide what their assignment on zoos must cover.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1F2S28Q-2oYv0kdPQ3ncvpk2Jg0UHh56Q/view', note: 'One student describes how zoos helped save the Arabian oryx.' }
          ],
          blocks: [
            { type: 'ieMulti', id: 'ieb2w1d320-q1', from: 1, pick: 3,
              instruction: 'Choose **THREE** letters, **A–G**.',
              q: 'What topics must the assignment cover?',
              options: ['zoo finances', 'public safety', 'the history of zoos', 'animal welfare', 'education and zoos', 'zoos for science', 'value for money'],
              answers: ['C', 'E', 'F'] },
            { type: 'ieMulti', id: 'ieb2w1d320-q2', from: 4, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'Which areas do the students decide to concentrate their efforts on?',
              options: ['science', 'history', 'entertainment', 'conservation', 'education'],
              answers: ['C', 'D'] },
            { type: 'ieGap', id: 'ieb2w1d320-q3', from: 6, layout: 'summary',
              instruction: 'Complete the summary. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'The Arabian oryx is mainly [[white]] in colour. It lives in a [[hot|hot desert]] climate. In [[1972]] it became extinct. Now, there are about [[300|three hundred]] in Oman. A crash in the population was caused by [[illegal hunting|hunting]].' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1F30BdoeKa2rn4U4soaR8wBw9EYu8iw5q/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
