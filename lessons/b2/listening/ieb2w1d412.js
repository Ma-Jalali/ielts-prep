/* IELTS · Listening · Practise · Part 4 · Exercise 12 — The house of the future.
   Source: Listening Section 4 Exercises (Practice No 12); answers and recording script from the teacher's key (Drive folder 12:
   S4-12 a.pdf = answer key, S4-12 Script.pdf = recording script).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d412', week: 1, day: 412, sheet: true, illus: 'home',
  title: 'The house of the future',
  duration: 'About 20 minutes',
  journey: 'Listen to a radio talk about high-tech, energy-saving houses in Britain. Answer the multiple-choice questions, label the diagram of the Millennium House and complete the table.',
  finish: { title: 'Next', text: 'Exercise 13' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice, diagram labelling and table completion',
    outcome: 'Follow a description of a building and match features to the companies that offer them.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d412-test', title: 'Part 4 · Exercise 12',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FZeSbi-XD4JcvXf_sMNsETv-oiVCTBPn/view', note: 'A radio talk about the techno-house and three builders’ show homes.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d412-q1', from: 1, instruction: 'Choose the appropriate letter, **A–C**.', items: [
              { q: 'In Britain ...', options: ['most new houses include the latest technology.', 'the technology for high-tech houses is not available.', 'few people are interested in buying high-tech houses.'], answer: 'C' },
              { q: 'An important concern for British homebuyers is that a house ...', options: ['is in a suitable place.', 'has a modern design.', 'is environmentally friendly.'], answer: 'A' },
              { q: 'How do Integer Project buildings compare with conventional houses?', options: ['They cost more to buy.', 'They can be built more quickly.', 'They are more complicated to construct.'], answer: 'B' }
            ] },
            { type: 'ieDiagram', id: 'ieb2w1d412-q2', from: 4, title: 'The Millennium House',
              instruction: 'Label the diagram of the Millennium House. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              src: 'assets/lessons/listening/part4/ex12-house.jpg', alt: 'Cross-section of the Millennium House: a sloping roof on the left, an inner box with two floors of rooms (the lower one below ground level), a tall sloping glass wall round the inner box with plants growing inside, and a round water tank outside on the right that collects rain water.',
              labels: [
                { x: 14, y: 13.2, text: 'Roof covered with ……', answer: 'grass' },
                { x: 75, y: 21.6, text: 'Outer ……', answer: 'glasshouse|glass house' },
                { x: 86, y: 55, text: '…… for rain water', answer: 'pond|a pond' }
              ] },
            { type: 'ieTable', id: 'ieb2w1d412-q3', from: 7,
              instruction: 'Complete the table using **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              columns: ['Company', 'Building(s)', 'Features'],
              rows: [
                ['Berkeley Homes', 'Housing development', 'Computers control heating and lighting. Water is recycled and heated by [[solar energy]].'],
                ['Laing Homes', '[[Internet House|the Internet House]]', 'Heating, TV and security system can be operated from the [[office or car|office/car]] via a website.'],
                ['Redrow Homes', '“House for future”', 'The [[staircase]] is moveable, so shape and size of rooms can be changed. • Water and waste are recycled.']
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FavsugQudRUKQTzHpy13UYWCwCIahdlA/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1F_adB4EAQ2s_p3bNpXD4qmRsd37_1u2K/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a> — it is under “Focus on listening 2”.' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
