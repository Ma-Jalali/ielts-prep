/* IELTS · Listening · Practise · Part 2 · Exercise 25 — A short history of the car.
   Source: Listening Section 2 Exercises (Practice No 25); answers from the teacher's key (folder 25, 2.txt — answers only, no script).
   The paper prints Questions 1 and 9 as two blanks each ("…… or ……", "…… and ……") with one number; here each is one gap.
   Recording split: Track 25 ends with "look at Questions 6 to 10" (checked by listening), so it covers Questions 1–5.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d225', week: 1, day: 225, sheet: true, illus: 'bus',
  title: 'A short history of the car',
  duration: 'About 20 minutes',
  journey: 'Listen to a radio report on the history of the car, from the first electric vehicles to Henry Ford’s assembly line. Complete the notes on some “firsts”, then the table about Henry Ford’s life.',
  finish: { title: 'Done', text: 'Part 2 complete' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion and table completion',
    outcome: 'Follow a history told in dates and pick out names, places and numbers.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d225-test', title: 'Part 2 · Exercise 25',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1GDRhrnQ2liyjdJICOGTxu6wQxNR9oRyl/view', note: 'A reporter explains where the words for the car come from and describes the first vehicles.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1G9PuIpoVbIfxT0L0CBY03B-rL_CTL1PD/view', note: 'The report moves on to Henry Ford and the Model T.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d225-q1', from: 1, layout: 'notes', title: '‘Firsts’ in the History of the Car',
              instruction: 'Complete the notes. Use **NO MORE THAN THREE WORDS**.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '- Word ‘automobile’ first used by Italian painter in 14th century\n- ‘Car’ comes from a Latin word that means [[cart or wagon|cart, wagon|cart wagon|wagon or cart]]\n- 1839 – first electric-powered road vehicle built in [[Scotland]]\n- Late 1800s – electric [[taxis]] first used in London\n- First cars called [[horseless carriages]]\n- Early 1900s – first cars sold in [[bicycle|local bicycle]] shops' },
            { type: 'ieTable', id: 'ieb2w1d225-q2', from: 6,
              instruction: 'Complete the table. Use **NO MORE THAN THREE WORDS AND/OR A NUMBER**.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              columns: ['Date', 'Event', 'Details'],
              rows: [
                ['1863', 'Born', 'Son of Irish [[farmers]]'],
                ['1879', 'Built an internal-combustion engine', 'Used plans from a [[magazine]]'],
                ['1896', 'Built the ‘Quadricycle’', 'Raised capital for more creations'],
                ['1903', 'Founded the [[Ford Motor Company]]', 'Model A car cost $850 to buy'],
                ['1906', 'Lost money with the Model K', 'It was [[big and expensive|big, expensive|big expensive]]'],
                ['1914', 'Opened the first car assembly line for the Model T', 'It took [[93 minutes|ninety-three minutes|ninety three minutes|93 mins]] to put together a car']
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1GCwUU09N2BtlfWnL5oF3VPBcLBX7qCmz/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
