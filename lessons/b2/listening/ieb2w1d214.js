/* IELTS · Listening · Practise · Part 2 · Exercise 14 — The Park Hill teen programme.
   Source: Listening Section 2 Exercises (Practice No 14); answers from the teacher's key (folder 14, Ans.5.pdf: Unit 2,
   Part 3 Exam Practice). The paper numbers this exercise 1–10. The book marks Questions 1–4 as CD1 track 12 and
   Questions 5–10 as CD1 track 13. The folder's Scr.5.pdf is the script of other recordings (not this exercise), so it is not linked.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d214', week: 1, day: 214, sheet: true, illus: 'sport',
  title: 'The Park Hill teen programme',
  duration: 'About 20 minutes',
  journey: 'Listen to a talk about the classes, building and enrolment for a youth programme at a leisure centre. Complete a timetable, label a plan of the centre and complete a flow chart of how to join.',
  finish: { title: 'Next', text: 'Exercise 15' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Table completion, plan labelling and flow-chart completion',
    outcome: 'Follow a timetable, a plan and a process in one talk and keep track of names, places and steps.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d214-test', title: 'Part 2 · Exercise 14',
          audios: [
            { title: 'Recording 1 · Questions 1–4', src: 'https://drive.google.com/file/d/1BEtbQSsO4GG5NXxEGDOq91gVniAPsj1b/view', note: 'The classes on the teen programme, their days and their teachers.' },
            { title: 'Recording 2 · Questions 5–10', src: 'https://drive.google.com/file/d/1Gh7na_Ve_rG4WEbSpC6p-fBIkFWGidSe/view', note: 'A guide to the building and how to enrol.' }
          ],
          blocks: [
            { type: 'ieTable', id: 'ieb2w1d214-q1', from: 1, title: 'Park Hill Teen Programme',
              instruction: 'Complete the table below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              columns: ['Class', 'Day', 'Teacher'],
              rows: [
                ['Jazz', 'Wednesday', 'Diana'],
                ['[[Salsa]]', 'Thursday', 'Diana'],
                ['Baseball', 'Saturday', '[[Jim]]'],
                ['[[Football]]', 'Sunday', 'Steve'],
                ['Skateboarding', 'Monday', 'Steve'],
                ['[[Roller skating|Roller-skating|Rollerskating]]', 'Tuesday (to be confirmed)', 'Stella']
              ] },
            { type: 'ieDiagram', id: 'ieb2w1d214-q2', from: 5, title: 'Plan of the centre',
              instruction: 'Label the plan below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              src: 'assets/lessons/listening/part2/ex14-plan.jpg', alt: 'Plan of the centre: a long central area joins the swimming pool on the left, the gym, the skate arena and one more room along the top, reception below, and another room at the bottom left.',
              labels: [
                { x: 24.2, y: 77, answer: 'Dance Studios|Dance Studio' },
                { x: 67.5, y: 49.7, answer: 'Changing Rooms' },
                { x: 88.8, y: 17, answer: 'Tennis Courts' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d214-q3', from: 8, layout: 'flow',
              instruction: 'Complete the flow chart below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: 'Complete an enrolment form.\nParents need to [[sign]] an authorisation form.\nGive forms to [[reception|the reception]] with a fee of £20 (for an annual subscription) or pay per visit.\nYou will receive your [[membership card]] in the post.' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1Ghh_x9EliS6K_Ma7vHjt4YlV_6zeD9Ua/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
