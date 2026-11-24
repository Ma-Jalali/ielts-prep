/* IELTS · Listening · Practise · Part 3 · Exercise 1 — Planning a new sports centre.
   Source: Listening Section 3 Exercises (Practice No 1, "University Facilities"); answers from the teacher's key (folder 01, s3-1 a.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d301', week: 1, day: 301, sheet: true, illus: 'sport',
  title: 'Planning a new sports centre',
  duration: 'About 20 minutes',
  journey: 'Listen to two students, Adam and Emma, discussing what the new University Sports Centre should have. Match the facilities to the notes, then say where each sport can be played now.',
  finish: { title: 'Next', text: 'Exercise 2' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Matching lists and classification',
    outcome: 'Follow two speakers as they agree and disagree, and listen for synonyms of the options in a box.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d301-test', title: 'Part 3 · Exercise 1',
          audios: [
            { title: 'Recording 1 · Questions 1–6', src: 'https://drive.google.com/file/d/1F7Qmw5LdhjHMvKm1jhTwLcmLCRFozEDD/view', note: 'Adam and Emma discuss the non-sports facilities the centre needs.' },
            { title: 'Recording 2 · Questions 7–10', src: 'https://drive.google.com/file/d/1F65zFO_Ti4SlYXL9ZxuICQFActsp37y2/view', note: 'They move on to the sports facilities themselves.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d301-q1', from: 1, layout: 'notes', title: 'Development proposals for the University Sports Centre',
              instruction: 'Complete the notes below using letters **A–F** from the box. **NB** You may use any letter more than once. (Answers 1–3 and 4–6 may be in any order.)',
              bank: ['first aid unit', 'social areas', 'teaching facilities', 'sauna rooms', 'fitness testing centre', 'physiotherapy suite'],
              text: '# What Emma says the Sports Centre needs\n[[B]]\n[[E]]\n[[F]]\n# What Adam has found useful in other sports centres\n[[B]]\n[[C]]\n[[E]]' },
            { type: 'ieMatch', id: 'ieb2w1d301-q2', from: 7, boxTitle: '',
              instruction: 'Classification. Where, at present, are there facilities for the following sports? Write the correct letter, **A–C**, next to Questions 7–10.',
              options: ['in the Sports Centre', 'elsewhere in the University', 'in the city'],
              items: [
                { q: 'table tennis', answer: 'B' },
                { q: 'swimming', answer: 'C' },
                { q: 'squash', answer: 'A' },
                { q: 'basketball', answer: 'B' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1F6UJPHyLjPssdreS3ZlkqMRYhIqC_e87/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
