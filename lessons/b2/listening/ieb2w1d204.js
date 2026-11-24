/* IELTS · Listening · Practise · Part 2 · Exercise 4 — The Ashmolean Museum in Oxford.
   Source: Listening Section 2 Exercises (Practice No 4); answers and recording script from the teacher's key (Drive folder 04, s2-4 a.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d204', week: 1, day: 204, sheet: true, illus: 'arts',
  title: 'The Ashmolean Museum in Oxford',
  duration: 'About 20 minutes',
  journey: 'Listen to an audio guide introducing the Ashmolean Museum of Art and Archaeology and its education service. Complete the notes and the table.',
  finish: { title: 'Next', text: 'Exercise 5' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion and table completion',
    outcome: 'Catch opening times, prices and group sizes, and keep track of which row of the table the speaker is talking about.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d204-test', title: 'Part 2 · Exercise 4',
          audios: [
            { title: 'Recording 1 · Questions 1–4', src: 'https://drive.google.com/file/d/1G1jDghbKzV2_hb_c5lKvKYx6x6cTFQj9/view', note: 'An audio guide introduces the museum: entry, opening hours, photos and photocopies.' },
            { title: 'Recording 2 · Questions 5–10', src: 'https://drive.google.com/file/d/1G19hSUmNVDLeVDm8iVbqm0fE-pAAQVIu/view', note: 'The guide describes the museum’s group visits, talks and workshops.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d204-q1', from: 1, layout: 'notes', title: 'Ashmolean Museum of Art and Archaeology',
              instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'Cost of museum admission: [[free|free of charge]]\nMuseum open every Sunday from [[twelve to five|12–5|12-5|12 to 5|12 - 5|noon to five|12-5 pm]]\nPhotographing exhibits allowed, but without [[flash or lights|flash and lights|flash or light|flash]]\nPhotocopying possible if items under [[100 years|a hundred years|one hundred years]] old' },
            { type: 'ieTable', id: 'ieb2w1d204-q2', from: 5,
              instruction: 'Complete the table below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              columns: ['Activity', 'Length', 'Time', 'Price per person', 'Maximum number of people'],
              rows: [
                ['Group visits: Adults', '1 hour', '', '[[£4|4 pounds|four pounds|4|£4.00]]', '15'],
                ['Group visits: University Students', '1 hour', '', '£2', '[[14|fourteen]]'],
                ['Group visits: Schools', '[[50 minutes|fifty minutes|50 mins|50 min]]', '10.15 am, 11.30 am, 1.15 pm', '', '13'],
                ['Lunchtime talks', '45 minutes', '[[1.15|1:15|one-fifteen|one fifteen|1.15 pm|1:15 pm|1.15 p.m.|quarter past one]]', '£2', ''],
                ['[[workshops|workshop|the workshops|Saturday workshops]]', '6 hours', '10 am', '[[£5|5 pounds|five pounds|5|£5.00]]', '']
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1G2FOIV2JZ7VjgD2Y4jk9UOO9p2SB7c_R/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
