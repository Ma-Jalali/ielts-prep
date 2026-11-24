/* IELTS · Listening · Practise · Part 4 · Exercise 10 — Tsunami.
   Source: Listening Section 4 Exercises (Practice No 10); answers from the teacher's key (folder 10, S4-10 a.pdf), recording script in S4-10 Scripts.pdf.
   The question paper has Questions 1–9 only (the book's Question 10, on the Crescent City tsunami, is not on the paper).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d410', week: 1, day: 410, sheet: true, illus: 'eco',
  title: 'Waves and tsunamis',
  duration: 'About 20 minutes',
  journey: 'Listen to a lecture on ocean waves and tsunamis. Label a diagram of a wave and complete the notes with facts and figures.',
  finish: { title: 'Next', text: 'Exercise 11' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–9', subtitle: 'Diagram labelling and note completion',
    outcome: 'Match technical terms to a diagram as they are defined, then catch numbers, measurements and places.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–9. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d410-test', title: 'Part 4 · Exercise 10',
          audios: [
            { title: 'Recording · Questions 1–9', src: 'https://drive.google.com/file/d/1FJZyAefzQl832hAlAwcSf7mxcaAdt8e-/view', note: 'A lecturer explains the terms used to measure waves and then gives the key facts about tsunamis.' }
          ],
          blocks: [
            { type: 'ieDiagram', id: 'ieb2w1d410-q1', from: 1, title: 'Diagram of a water wave',
              instruction: 'Label the diagram of a water wave below. Write the appropriate letters **A–F** against Questions 1–3.',
              src: 'assets/lessons/listening/part4/ex10-wave.jpg', alt: 'A wave line crosses the picture above a dashed line marked Mean Sea Floor, with the sea floor at the bottom. Label 1 has an arrow to the top of a wave; label 2 is a bracket between the tops of two waves; label 3 has an arrow to the bottom of a wave.',
              bank: ['Wave height', 'Depth', 'Crest', 'Trough', 'Wavelength', 'Wave period'],
              labels: [
                { x: 16.5, y: 22.3, answer: 'C' },
                { x: 61, y: 12.6, answer: 'E' },
                { x: 66, y: 76.8, answer: 'D' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d410-q2', from: 4, layout: 'form', title: 'Tsunamis',
              instruction: 'Complete the notes. Use **NO MORE THAN THREE WORDS or A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS or A NUMBER', max: 3,
              text: 'Main cause: [[earthquakes|earthquake|underwater earthquakes|undersea earthquakes]]\nPercentage occurring in Pacific Ocean: [[80–90%|80-90%|80%-90%|80%–90%|80 to 90%|80% to 90%|80-90 per cent|80–90 per cent|80-90 percent|80–90 percent]]\nTypical wave height in open ocean: [[half a metre|0.5 metres|0.5 metre|0.5 m|0.5m|half a meter|0.5 meters|0.5 meter|50 cm|50cm]]\nCountry where largest tsunami ever was recorded: [[Russia]]\nAverage wavelength in Pacific: [[480 km|480km|480 kilometres|480 kilometers]]\nTravel at speeds up to: [[700 km/h|700km/h|700 km|700km|700 kph|700kph|700km an hour|700km per hour|700]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FOUaLgZCuapLBABm_E_hRdegfzRfIwlR/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1FJfrkpspmpTB59nYfsEiSlU2Q28WTIT5/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
