/* IELTS · Listening · Practise · Part 1 · Exercise 15 — Joining the university library.
   Source: Listening Section 1 Exercises (Practice No 15); answers from the teacher's key (folder 15). The key has no script for this conversation.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d115', week: 1, day: 115,
  title: 'Joining the university library',
  duration: 'About 20 minutes',
  journey: 'Listen to a student joining the university library and finding out about its rooms and the group study booking system. Complete the form, the plan and the notes.',
  finish: { title: 'Next', text: 'Exercise 16' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Form completion, plan labelling and note completion',
    outcome: 'Write down letters and numbers as they are spelled out, and follow directions round a plan.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 20, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d115-test', title: 'Part 1 · Exercise 15',
          audios: [
            { title: 'Recording 1 · Questions 1–4', src: 'https://drive.google.com/file/d/1HbykRCjWFdFGxNxGxMIn3go3mrT9D_X2/view', note: 'A student gives his details to join the library.' },
            { title: 'Recording 2 · Questions 5–10', src: 'https://drive.google.com/file/d/1HcGzjsIt_8uhnGFgpYS-r8IPnnOdaSEX/view', note: 'The librarian explains the plan of the library and how to book a group study room.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d115-q1', from: 1, layout: 'form', title: 'Library registration',
              instruction: 'Complete the form below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'Name: Simon Anderson\nStudent ID Number: [[AND105763|AND 105763]]\nSubject: Geography\nFaculty: [[Earth Science]]\nAddress: Flat 3, 24 [[Lavender]] Gardens, London, SW12 3AG\nContact telephone: 07988 [[566341|566 341]]' },
            { type: 'ieDiagram', id: 'ieb2w1d115-q2', from: 5, title: 'Library plan',
              instruction: 'Label the plan below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              src: 'assets/lessons/listening/part1/ex15-plan.jpg', alt: 'Plan of the library: from the entrance hall, the quiet room and room 5 on the left; the service desk, help desk, Sociology Section and group study room on the right; along the back wall the Geography Section, Section 6, the Art and Math Sections and the Point room, with room 7 above the group study room.',
              labels: [
                { x: 28.4, y: 54.2, text: '…… room', answer: 'Training|training room' },
                { x: 41.3, y: 14.3, text: '…… Section', answer: 'Philosophy|Philosophy Section' },
                { x: 86.8, y: 38.8, answer: 'TV room|TV|television room' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d115-q3', from: 8, layout: 'notes', title: 'Group Study booking system',
              instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: '- To be used for group projects\n- Advance notice required: 48 hours\n- Must reserve using [[online reservation system|online reservation]]\n- Website booking for group study room: need student name and [[student number|number]]\n- Booking confirmation received via [[email|e-mail|an email]]' }
          ]
        }] }
    ]
  }],
  extras: [],
  glossary: []
};
