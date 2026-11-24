/* IELTS · Listening · Practise · Part 2 · Exercise 10 — The Museum of Anthropology, Vancouver.
   Source: Listening Section 2 Exercises (Practice No 10); answers from the teacher's key (folder 10: S2-10 a.pdf is the
   answer key, "Unit 8, Focus on listening 2"; S2-10.pdf is the recording script, "Unit 8, Focus on listening 2").
   Questions 9–10 on the paper are marked in a timetable (C = closed, L = late opening). Here each one is a choice of
   table cells (seen in the picture): Question 9 one cell; Question 10 two cells, which the paper counts as one question.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d210', week: 1, day: 210, sheet: true, illus: 'arts',
  title: 'The Museum of Anthropology, Vancouver',
  duration: 'About 20 minutes',
  journey: 'Listen to a radio reporter describing a visit to the Museum of Anthropology in Vancouver. Answer short questions, label the plan, complete the sentences and mark the opening hours.',
  finish: { title: 'Next', text: 'Exercise 11' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Short answers, plan labelling, sentence completion and a timetable',
    outcome: 'Follow directions round a building (straight ahead, on the right, down a ramp) and catch dates, numbers and days.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d210-test', title: 'Part 2 · Exercise 10',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1GDXX9wfc4b-HZpJgibEPIno9yGjKespv/view', note: 'A radio reporter describes the Museum of Anthropology in Vancouver.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d210-q1', from: 1, layout: 'short',
              instruction: 'Short answer questions. Write **NO MORE THAN THREE WORDS or A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS or A NUMBER', max: 3,
              text: 'When was the museum originally founded? [[1949|in 1949]]\nHow many floors does the museum have? [[one|1|one floor|1 floor|just one]]\nDoes the museum contain exhibits from countries other than Canada? [[yes|yes, it does|yes it does]]' },
            { type: 'ieDiagram', id: 'ieb2w1d210-q2', from: 4, title: 'Plan of the museum',
              instruction: 'Label the diagram. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              src: 'assets/lessons/listening/part2/ex10-plan.jpg', alt: 'Plan of the museum: an arrow at the bottom shows the way in, past a small room (4) and up a ramp to a crossroads (5); straight ahead is a large stepped room at the top (6). On the right are a Rotunda, two galleries and Visible Storage.',
              labels: [
                { x: 69.5, y: 83.7, answer: 'shop|a shop|small shop|a small shop|the shop' },
                { x: 3.5, y: 79.4, answer: 'information desk|an information desk|the information desk' },
                { x: 75.3, y: 6.5, answer: 'Great Hall|the Great Hall' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d210-q3', from: 7, layout: 'sentences',
              instruction: 'Complete the sentences. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'The sculpture in the Rotunda took [[five people|5 people]] more than three years to create.\nThe best way of getting to the museum is [[by bus|on a bus|bus]].' },
            { type: 'figure', src: 'assets/lessons/listening/part2/ex10-hours.jpg', alt: 'An empty timetable: the days MON to SUN across the top, and two rows, Winter and Summer.', caption: 'The museum’s opening hours' },
            { type: 'ieChoice', id: 'ieb2w1d210-q4', from: 9,
              instruction: 'Complete the table showing the museum’s opening hours. Choose the correct space in the table.',
              items: [
                { q: 'When is the museum closed? (On the paper: write **C** in the appropriate space.)',
                  options: ['Winter · Monday', 'Winter · Tuesday', 'Winter · Wednesday', 'Winter · Thursday', 'Winter · Friday', 'Winter · Saturday', 'Winter · Sunday', 'Summer · Monday', 'Summer · Tuesday', 'Summer · Wednesday', 'Summer · Thursday', 'Summer · Friday', 'Summer · Saturday', 'Summer · Sunday'],
                  answer: 'A' }
              ] },
            { type: 'ieMulti', id: 'ieb2w1d210-q5', from: 10, pick: 2, numbers: 1,   // the paper counts the two spaces as one question
              instruction: 'Choose **TWO** spaces in the table.',
              q: 'When is the museum open late? (On the paper: write **L** in the appropriate two spaces.)',
              options: ['Winter · Monday', 'Winter · Tuesday', 'Winter · Wednesday', 'Winter · Thursday', 'Winter · Friday', 'Winter · Saturday', 'Winter · Sunday', 'Summer · Monday', 'Summer · Tuesday', 'Summer · Wednesday', 'Summer · Thursday', 'Summer · Friday', 'Summer · Saturday', 'Summer · Sunday'],
              answers: ['B', 'I'] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GIFoicZC-Msixlrh4eLgwXtlvAb6Zxcs/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1GDkxdI3dEO7klhGi0R_RDCEi3HLNvH8b/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
