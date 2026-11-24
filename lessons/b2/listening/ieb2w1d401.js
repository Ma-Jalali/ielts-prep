/* IELTS · Listening · Practise · Part 4 · Exercise 1 — The trumpet.
   Source: Listening Section 4 Exercises (Practice No 01); answers and recording script from the teacher's key (folder 01, s4-1 a.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d401', week: 1, day: 401, sheet: true, illus: 'music',
  title: 'The trumpet',
  duration: 'About 20 minutes',
  journey: 'Listen to a short talk about the trumpet: how it works and its long history. Label the parts of the instrument and complete the notes.',
  finish: { title: 'Next', text: 'Exercise 2' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Diagram labelling and note completion',
    outcome: 'Follow a description of an object part by part, using words like “on the left”, “at the top” and “known as” to find each label.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d401-test', title: 'Part 4 · Exercise 1',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FXPWKESN3MlgIzXhWtn1rRx71GChrHnI/view', note: 'A speaker describes the parts of a trumpet and then its history.' }
          ],
          blocks: [
            { type: 'ieDiagram', id: 'ieb2w1d401-q1', from: 1, title: 'The trumpet',
              instruction: 'Label the diagram below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              src: 'assets/lessons/listening/part4/ex01-trumpet.jpg', alt: 'A trumpet seen from the side: the mouthpiece on the left, three valves with buttons in the middle, the wide bell on the right and a small lever under the tuning slide at the bottom right. Arrows point to five parts.',
              labels: [
                { x: 15, y: 4, answer: 'mouthpiece|the mouthpiece' },
                { x: 30, y: 93, answer: 'valves|the valves|three valves|3 valves' },
                { x: 50, y: 4, answer: 'finger buttons|the finger buttons' },
                { x: 87, y: 4, answer: 'bell|the bell' },
                { x: 79, y: 93, answer: 'water key|the water key' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d401-q2', from: 6, layout: 'notes',
              instruction: 'Complete these sentences. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '- First evidence of trumpet in Ancient Egypt [[3,500 years|3500 years]] ago.\n- Became orchestral instrument in early [[eighteenth|18th]] century.\n- The trumpet often leads the brass section because of its [[loud and clear]] sound.\n- The trumpet is quite [[small|fairly small]] compared with other instruments.\n- Some trumpeters now play the [[French horn|French horns]] instead.' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FWWlKSvwxNV48wU8XGFp2DkHLfh20959/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
