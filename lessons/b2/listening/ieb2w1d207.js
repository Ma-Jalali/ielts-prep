/* IELTS · Listening · Practise · Part 2 · Exercise 7 — This evening on Radio 6.
   Source: Listening Section 2 Exercises (Practice No 7); answers from the teacher's key (folder 07, S2-7.txt and S2-7.pdf,
   which also holds the recording script). Two recordings: s2-7-1.mp3 (Questions 1–5) and s2-7-2.mp3 (Questions 6–10).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d207', week: 1, day: 207, sheet: true, illus: 'radio',
  title: 'This evening on Radio 6',
  duration: 'About 20 minutes',
  journey: 'Listen to a radio announcer giving details of the evening’s programmes, then more about a documentary on how killer whales and elephants communicate. Complete the programme table and the summary.',
  finish: { title: 'Next', text: 'Exercise 8' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Table and summary completion',
    outcome: 'Catch times and titles in a programme listing, and follow a short description of a documentary.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d207-test', title: 'Part 2 · Exercise 7',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1GeOwDTKe_FOOrpeD6_UOtRcuL7bBs5n3/view', note: 'A radio announcer runs through the evening’s programmes.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1Gf-y4c9sdfpAlQ7aIgM2ZC7O0eU9Pc8o/view', note: 'More about the new documentary series on animal communication.' }
          ],
          blocks: [
            { type: 'ieTable', id: 'ieb2w1d207-q1', from: 1, title: 'Thursday October 15th · Radio 6',
              instruction: 'Complete the table. Use **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              columns: ['Time', 'Programme'],
              rows: [
                ['7:00', '“Animal Talk”'],
                ['[[7.50|7:50|7.50 pm|7:50 pm|ten to eight|19.50|19:50]]', 'Charity broadcast: Rare Species Protection Group'],
                ['8:00', '[[Park Square]]'],
                ['8:30', '‘What’s your view?’ The effects of the [[media|the media]]'],
                ['9:00', '[[News and weather|news & weather]]'],
                ['9:20', 'Book of the week: Just-so Stories – ‘How the [[first letter]] was written.’']
              ] },
            { type: 'ieGap', id: 'ieb2w1d207-q2', from: 6, layout: 'summary', title: '‘Animal Talk’',
              instruction: 'Complete the summary below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'This programme is about communication systems of killer whales and elephants. Both of these are mammals which have strong [[social bonds]], live for a long time and have large [[brains]]. Killer whales communicate mainly through [[sound|sounds]] in the water but little is known about the purpose of this communication. Elephants send messages through the air in a process which is called ‘[[silent singing]]’ because the messages cannot be heard by humans, and they can also receive messages through their [[feet]].' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GetQpxGSdChX6iX1c99E-dsKAOcqkxEk/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
