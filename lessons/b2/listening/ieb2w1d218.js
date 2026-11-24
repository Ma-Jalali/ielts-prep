/* IELTS · Listening · Practise · Part 2 · Exercise 18 — Growing your own vegetables.
   Source: Listening Section 2 Exercises (Practice No 18); answers from the teacher's key (folder 18, ans.15.docx — answers only, no script).
   The plan shows four plots marked 2: the pin for Question 2 sits on the first of them.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d218', week: 1, day: 218, sheet: true, illus: 'eco',
  title: 'Growing your own vegetables',
  duration: 'About 20 minutes',
  journey: 'Listen to a gardening talk about laying out a vegetable plot, rotating crops over three years and building a compost bin. Label the plan, complete the flow chart and label the compost bin.',
  finish: { title: 'Next', text: 'Exercise 19' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Plan labelling, flow-chart completion and diagram labelling',
    outcome: 'Follow directions round a plan (on your left, straight ahead, directly opposite) and the steps of a process.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d218-test', title: 'Part 2 · Exercise 18',
          audios: [
            { title: 'Recording 1 · Questions 1–4', src: 'https://drive.google.com/file/d/1vNMT-IM9ymc_SoDy0GxcTmRrW_MAs80v/view', note: 'A gardener walks you round the plan of her vegetable plot.' },
            { title: 'Recording 2 · Questions 5–7', src: 'https://drive.google.com/file/d/15hcvXZV8dNNuspDDiXanX0aPNjo990sn/view', note: 'She explains the three-year crop rotation system.' },
            { title: 'Recording 3 · Questions 8–10', src: 'https://drive.google.com/file/d/1eaCjeQkYS_CWTslmbBT5Lqta9yUtz9py/view', note: 'She describes how to build a simple compost bin.' }
          ],
          blocks: [
            { type: 'ieDiagram', id: 'ieb2w1d218-q1', from: 1, title: 'Vegetable plot',
              instruction: 'Label the plan below. Choose your answers from the box and write the letters **A–G** next to Questions 1–4.',
              src: 'assets/lessons/listening/part2/ex18-plan.jpg', alt: 'Plan of a vegetable plot entered through a gate at the bottom. Bottom left: an oval; bottom right: plot 1. In the middle, four square beds marked 2, two on each side of a path. Above them, a dotted bed on the left and plot 3 on the right. At the top, plot 4 in the left corner and an unnumbered building in the right corner with a small box below it.',
              bank: ['tall plants', 'strawberries', 'shed', 'manure heap', 'vegetable bed', 'greenhouse', 'compost bins'],
              labels: [
                { x: 74, y: 88.6, answer: 'G' },
                { x: 21.3, y: 45.5, answer: 'E' },
                { x: 72.5, y: 27.3, answer: 'A' },
                { x: 22.5, y: 9.8, answer: 'F' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d218-q2', from: 5, layout: 'flow', title: 'Three-Year Crop Rotation Cycle',
              instruction: 'Complete the flow chart below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '**YEAR 1** Legumes (e.g. [[peas and beans|beans and peas]]) release nitrogen into soil.\n**YEAR 2** Brassicas (e.g. cabbages and broccoli) have a [[high nitrogen requirement|high nitrogen requirements]].\n**YEAR 3** Potato family (e.g. tomatoes, peppers) have big leaves preventing the [[spread of weeds]].' },
            { type: 'ieDiagram', id: 'ieb2w1d218-q3', from: 8, title: 'Compost bin',
              instruction: 'Label the diagram below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              src: 'assets/lessons/listening/part2/ex18-compost.jpg', alt: 'A compost bin with two compartments built of breeze blocks. Upright wooden posts stand at the front, with boards slotted between them on the left-hand compartment. In the open right-hand compartment, compost sits on rigid mesh screening raised on small blocks. The left-hand compartment is covered and weighed down with bricks.',
              labels: [
                { x: 11.1, y: 74.5, text: '…… boards', answer: 'removable wooden|wooden' },
                { x: 45, y: 96, text: '…… for ventilation', answer: 'brick base|a brick base' },
                { x: 72.8, y: 4, text: 'Piece of', answer: 'old carpet|carpet' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1Fvz-TBHuo-Gou8o6MDbRveahztoCna3W/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
