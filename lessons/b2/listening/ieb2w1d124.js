/* IELTS · Listening · Practise · Part 1 · Exercise 24 — Booking an eco-tourism holiday.
   Source: Listening Section 1 Exercises (Practice No 24); answers from the teacher's key (folder 24). The folder has no recording script.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d124', week: 1, day: 124, sheet: true, illus: 'eco',
  title: 'Booking an eco-tourism holiday',
  duration: 'About 20 minutes',
  journey: 'Listen to a travel agent helping a customer choose an eco-tourism holiday. Complete the notes and the table.',
  finish: { title: 'Next', text: 'Exercise 25' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note and table completion',
    outcome: 'Catch a length of time and a price, then compare three holidays across a table.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 20, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d124-test', title: 'Part 1 · Exercise 24',
          audios: [
            { title: 'Recording 1 · Questions 1–6', src: 'https://drive.google.com/file/d/1D8keeOX-yaZzO_IlG_5dVl_dQBytcXfc/view', note: 'Igor Petrov phones a travel agent about an eco-tourism holiday.' },
            { title: 'Recording 2 · Questions 7–10', src: 'https://drive.google.com/file/d/1HOv_1UD4pYuU2X_BnjcrjCkHClMlWNk8/view', note: 'The agent describes three holidays.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d124-q1', from: 1, layout: 'form', title: 'Customer notes',
              instruction: 'Complete the notes below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: 'Customer’s name: Igor Petrov\nLength of holiday: [[two weeks|2 weeks|a fortnight|fortnight|14 days|fourteen days]]\nWill pay up to: £[[1,750|1750]]\nTold him about: [[discount|a discount|discounts]] for advance payments\nNeeds quote for: [[travel insurance|insurance]] during holiday\nRequires: [[vegetarian meals|vegetarian meal|vegetarian food]] on plane\nMust check if he needs a: [[visa]]' },
            { type: 'ieTable', id: 'ieb2w1d124-q2', from: 7,
              instruction: 'Complete the table below. Write **ONE OR TWO WORDS** for each answer.', rule: 'ONE OR TWO WORDS', max: 2,
              columns: ['', 'Type of holiday', 'Accommodation', 'Advantage'],
              rows: [
                ['Dumbarton Tablelands', 'Watching animals', 'House in a [[tree]]', 'Close to nature'],
                ['Bago Nature Reserve', 'Living with a [[family|local family]]', 'Village house', 'Learn about way of life'],
                ['San Luis Island', 'Working in a [[school]]', 'Hostel', 'Holiday location without [[cars|any cars]]']
              ] }
          ]
        }] }
    ]
  }],
  extras: [],
  glossary: []
};
