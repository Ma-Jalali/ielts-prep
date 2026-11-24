/* IELTS · Listening · Practise · Part 1 · Exercise 14 — A city bus tour.
   Source: Listening Section 1 Exercises (Practice No 14); answers from the teacher's key (folder 14). The key has no script for this conversation.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d114', week: 1, day: 114, sheet: true, illus: 'bus',
  title: 'A city bus tour',
  duration: 'About 20 minutes',
  journey: 'Listen to a tourist booking a city bus tour and asking for advice about a museum and restaurants. Complete the form, then choose and match.',
  finish: { title: 'Next', text: 'Exercise 15' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Form completion, multiple choice and matching',
    outcome: 'Catch names, numbers and times for a booking, then match each place with what the speaker says about it.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 20, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d114-test', title: 'Part 1 · Exercise 14',
          audios: [
            { title: 'Recording 1 · Questions 1–6', src: 'https://drive.google.com/file/d/1HZV8CCFRVfeYWEApTwzQUubLvVg84McN/view', note: 'A tourist books a city bus tour at the tourist information office.' },
            { title: 'Recording 2 · Questions 7–10', src: 'https://drive.google.com/file/d/1HZsUMMttKZf3RScKMLnYjMnomK-TtTaz/view', note: 'The conversation continues: the assistant describes some restaurants.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d114-q1', from: 1, layout: 'form', title: 'City Bus Tour Booking Form',
              instruction: 'Complete the form below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: 'Number of passengers: 2\nPassenger name(s): Susan Field and James [[Carter]]\nContact telephone number: 07988 [[636197|636 197]]\nHotel: [[Riverside Hotel|Riverside]]\nBus tour time: [[2|2.00|2:00|two]] pm\nBus tour date: 14th August' },
            { type: 'ieChoice', id: 'ieb2w1d114-q2', from: 5,
              instruction: 'Choose the correct letter, **A, B or C**.',
              items: [
                { q: 'Why does a ticket for the museum cost £10?', options: ['The money is needed to fix parts of the building.', 'The collection of Latin American art is unique.', 'It is the only art museum in Europe.'], answer: 'A' },
                { q: 'The tourist office assistant suggests going to the next town for a good restaurant because', options: ['they overlook the sea.', 'the restaurants are bigger.', 'there are more restaurants to choose from.'], answer: 'C' }
              ] },
            { type: 'ieMatch', id: 'ieb2w1d114-q3', from: 7, reuse: false, boxTitle: 'Descriptions',
              instruction: 'Match the restaurants with their descriptions. Write **ONE** letter, **A–E**, next to Questions 7–10.',
              options: ['It is visited by famous people who work in entertainment.', 'This restaurant has recently been bought by a new family.', 'One family has managed the restaurant for over 100 years.', 'It is expensive but serves high quality food.', 'It has been decorated in a modern style.'],
              items: [
                { q: 'The Belleview', answer: 'D' },
                { q: 'The Lighthouse Cafe', answer: 'A' },
                { q: 'Harvey’s', answer: 'C' },
                { q: 'Stonecroft House', answer: 'B' }
              ] }
          ]
        }] }
    ]
  }],
  extras: [],
  glossary: []
};
