/* IELTS · Listening · Practise · Part 2 · Exercise 13 — Getting involved in Sport Aid.
   Source: Listening Section 2 Exercises (Practice No 13); answers and recording script from the teacher's key (folder 13,
   Ans.1.pdf, Listening and Audioscript CD1, 12). The paper numbers this exercise 1–10.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d213', week: 1, day: 213, sheet: true, illus: 'sport',
  title: 'Getting involved in Sport Aid',
  duration: 'About 20 minutes',
  journey: 'Listen to a local radio programme about a charity sports weekend and how listeners can take part or organise their own event. Answer six short questions, then choose the correct letter for four more.',
  finish: { title: 'Next', text: 'Exercise 14' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Short-answer questions and multiple choice',
    outcome: 'Catch facts, places and advice in a radio announcement and choose the option that matches what is said.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d213-test', title: 'Part 2 · Exercise 13',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1JgbRU_GU3hErTOdMF_Y0NW4F4xnja18O/view', note: 'A local radio presenter talks about this weekend’s Sport Aid charity events.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d213-q1', from: 1, layout: 'short',
              instruction: 'Answer the questions below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'How long has Sport Aid existed for? [[four years|4 years]]\nWho does Sport Aid mainly benefit? [[developing countries]]\nWhat did the money provide for one village? [[a water supply|water supply]]\nWhat is thought to be an important part of development? [[education]]\nWhere is the main event taking place? [[City Stadium|at City Stadium|the City Stadium]]\nWhat are you advised to wear to the event? [[comfortable clothes]]' },
            { type: 'ieChoice', id: 'ieb2w1d213-q2', from: 7,
              instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'You can learn more about different events by contacting', options: ['the radio station.', 'the town hall.', 'the organisers.'], answer: 'C' },
                { q: 'The council is more likely to approve', options: ['unusual events.', 'expensive events.', 'familiar sports.'], answer: 'A' },
                { q: 'What do you need to provide if you organise your own event?', options: ['equipment', 'prizes', 'publicity'], answer: 'A' },
                { q: 'Who is able to organise events?', options: ['anybody', 'local residents only', 'adults only'], answer: 'B' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GGjCXieGy23MSnMJO5I6IPqwlFH0yeVm/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
