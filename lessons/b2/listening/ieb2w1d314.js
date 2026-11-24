/* IELTS · Listening · Practise · Part 3 · Exercise 14 — Planning a field trip on native languages.
   Source: Listening Section 3 Exercises (Practice No 14); answers from the teacher's key (folder 14, Ans.5.pdf, Part 3 Exam practice),
   checked against the recording script (Scr.5.pdf, CD2 Tracks 31–32).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d314', week: 1, day: 314, sheet: true, illus: 'globe',
  title: 'Planning a field trip on native languages',
  duration: 'About 20 minutes',
  journey: 'Listen to three students planning a field trip to research native North American languages and their route around California. Answer multiple-choice questions, choose four research areas and label the map.',
  finish: { title: 'Next', text: 'Exercise 15' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice and map labelling',
    outcome: 'Notice when speakers change their minds or reject an idea, and follow a route on a map.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d314-test', title: 'Part 3 · Exercise 14',
          audios: [
            { title: 'Recording 1 · Questions 1–6', src: 'https://drive.google.com/file/d/1EfqSgGhPe9sOjA2inWekYy5H6GYw5p1N/view', note: 'Anna, Suzanne and James decide where to go and what to research.' },
            { title: 'Recording 2 · Questions 7–10', src: 'https://drive.google.com/file/d/1EgP7c_qcGPFq7pgsvGTlquXVJo6_XHv6/view', note: 'The students plan their route around California.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d314-q1', from: 1, instruction: 'Choose **A, B** or **C**.', items: [
              { q: 'Which countries are the students going to visit for the field trip?', options: ['the United States of America and Canada', 'Mexico and the United States of America', 'Canada and Mexico'], answer: 'A' }
            ] },
            { type: 'figure', src: 'assets/lessons/listening/part3/ex14-graphs.jpg', alt: 'Three bar charts of the number of speakers (in thousands) of Na-Dene, Salishan and Algic. A: 4, 2, 3. B: 3, 2, 4. C: 5, 3, 2.', caption: 'Question 2 · Graphs A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d314-q2', from: 2, instruction: 'Choose **A, B** or **C**.', items: [
              { q: 'Which of the graphs above correctly shows the numbers of people under 25 years of age who speak three languages?', options: ['Graph A: Na-Dene 4, Salishan 2, Algic 3 (thousand)', 'Graph B: Na-Dene 3, Salishan 2, Algic 4 (thousand)', 'Graph C: Na-Dene 5, Salishan 3, Algic 2 (thousand)'], answer: 'C' }
            ] },
            { type: 'ieMulti', id: 'ieb2w1d314-q3', from: 3, pick: 4,
              instruction: 'Choose **FOUR** letters from **A–F** below.',
              q: 'Which four social factors affecting native-language usage do the students want to research during their field trip?',
              options: ['Employment', 'Family structure', 'Education', 'Language policy', 'Tourism', 'Emigration'],
              answers: ['A', 'B', 'D', 'F'] },
            { type: 'ieDiagram', id: 'ieb2w1d314-q4', from: 7, title: 'Field trip route (map of California)',
              instruction: 'Label the map below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              src: 'assets/lessons/listening/part3/ex14-map.jpg', alt: 'Outline map of California with four arrows: “Visit the north country …” points to the north; “Interview … of Co-Tech” points to the east; “… signs in Sun City” points to the south centre; “Visit the Barona …” points to the south-west corner.',
              labels: [
                { x: 24.8, y: 80.2, answer: 'reservation' },
                { x: 30.7, y: 12.6, answer: 'education authority|local education authority|education department|local education department' },
                { x: 76.6, y: 15.2, answer: 'the managing director|managing director' },
                { x: 74.8, y: 79, answer: 'take photos of|take photographs of|photograph' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [ { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1EhKXKdfIkuzwg2-CZYlhZo5TG_sHBSrl/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1Eh3ca88i3odXs0SdsdeSGixDDmczyhTg/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a> (Part 3: Exam practice, just before the Practice test)' } ] }
    ]
  }],
  extras: [],
  glossary: []
};
