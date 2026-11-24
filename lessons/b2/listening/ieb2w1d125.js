/* IELTS · Listening · Practise · Part 1 · Exercise 25 — Joining an international social club.
   Source: Listening Section 1 Exercises (Practice No 25); answers from the teacher's key (folder 25). The folder has no recording script.
   max is 3 in the form so that a phone number written in groups (040 422 9160) still counts as one number.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d125', week: 1, day: 125,
  title: 'Joining an international social club',
  duration: 'About 20 minutes',
  journey: 'Listen to Jenny applying to join an international social club and finding out what the club does. Complete the form and answer the multiple-choice questions.',
  finish: { title: 'Next', text: 'Part 1 complete' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Form completion and multiple choice',
    outcome: 'Catch a nationality, an address and a phone number, then choose the right option when the speakers mention all three.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 20, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d125-test', title: 'Part 1 · Exercise 25',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1HBzGwdF6hHs3p_3LD3clm3asOHqDkLBt/view', note: 'Jenny Foo gives her details to Don at the International Social Club.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1HBhRzRj2cIhDVCNCZzdnTNPy7KXIF-N5/view', note: 'Don tells Jenny about the club and its activities.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d125-q1', from: 1, layout: 'form', title: 'International Social Club · Application form',
              instruction: 'Complete the form below. Write **ONE WORD AND/OR A NUMBER** for each answer.', rule: 'ONE WORD AND/OR A NUMBER', max: 3,
              text: 'Name: Jenny Foo\nAge: 21\nNationality: [[Malaysian]]\nAddress: [[13 Anglesea]] Road, Bondi\nMobile phone: [[040 422 9160|0404229160|040 4229160|0404 229 160]]\nOccupation: [[economist|an economist]]\nFree time interests: singing and [[dancing]]' },
            { type: 'ieChoice', id: 'ieb2w1d125-q2', from: 6,
              instruction: 'Choose the correct letter, **A, B or C**.',
              items: [
                { q: 'According to Don, what might be a problem for Jenny?', options: ['her accent', 'talking to her colleagues', 'understanding local people'], answer: 'C' },
                { q: 'How many members does the club have now?', options: ['30', '50', '80'], answer: 'B' },
                { q: 'How often does the club meet?', options: ['once a week', 'once every two weeks', 'once a month'], answer: 'B' },
                { q: 'What is the club’s most frequent type of activity?', options: ['a talk', 'a visit', 'a meal'], answer: 'A' },
                { q: 'The main purpose of the club is to help members to', options: ['meet Australians.', 'learn about life in Australia.', 'enjoy themselves together.'], answer: 'A' }
              ] }
          ]
        }] }
    ]
  }],
  extras: [],
  glossary: []
};
