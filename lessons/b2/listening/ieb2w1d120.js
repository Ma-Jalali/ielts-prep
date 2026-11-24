/* IELTS · Listening · Practise · Part 1 · Exercise 20 — Booking tickets for a robot exhibition.
   Source: Listening Section 1 Exercises (Practice No 20); answers from the teacher's key (folder 20). The folder has no recording script.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d120', week: 1, day: 120, sheet: true, illus: 'robot',
  title: 'Tickets for a robot exhibition',
  duration: 'About 20 minutes',
  journey: 'Listen to a caller booking tickets for an exhibition about robots. Complete the notes on tickets, food, hotels and transport.',
  finish: { title: 'Next', text: 'Exercise 21' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion',
    outcome: 'Catch days, a reference number, prices and times, and keep each answer within two words and/or a number.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 20, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d120-test', title: 'Part 1 · Exercise 20',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1DoDflUmw4_qm2yt8VqNqpz_k4gYvL8E4/view', note: 'A caller books tickets for an exhibition and asks about food, hotels and getting there.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d120-q1', from: 1, layout: 'form', title: 'Notes on Exhibition',
              instruction: 'Complete the notes below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: 'Title of exhibition (example): Robots: the end of modern civilization\nTwo free: [[day passes|day-passes|day pass]]\nDay(s) exhibition full: [[Thursday|Thursdays|Thurs]]' },
            { type: 'ieGap', id: 'ieb2w1d120-q2', from: 3, layout: 'form',
              instruction: 'Write the **TWO** days the caller chooses.', max: 3,
              text: 'Days chosen by caller: [[Tuesday and Friday|Friday and Tuesday|Tuesday, Friday|Tuesday Friday|Tuesday & Friday|Tues and Fri|Tue and Fri]]' },
            { type: 'ieGap', id: 'ieb2w1d120-q3', from: 4, layout: 'form',
              instruction: 'Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: 'Reference number: [[SF6733|SF 6733]]\n# Eating facilities\n15 restaurants\nincluding [[3|three]] cafes\nlocal restaurants putting on [[special promotion|special promotions|a promotion]]' },
            { type: 'ieGap', id: 'ieb2w1d120-q4', from: 7, layout: 'notes',
              instruction: 'Complete the notes below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: '# Accommodation\n- Halls of Residence £30 a night\n- Hotels from about £30 to approximately £[[60|sixty]]\n# Transport links\n- Within walking distance of the station and [[45 minutes|forty-five minutes|45 mins|45 min]] from the airport\n- It is possible to catch bus number [[70|seventy]]\n- A taxi costs no more than £[[17|seventeen]]' }
          ]
        }] }
    ]
  }],
  extras: [],
  glossary: []
};
