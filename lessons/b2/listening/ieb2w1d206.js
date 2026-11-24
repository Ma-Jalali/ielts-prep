/* IELTS · Listening · Practise · Part 2 · Exercise 6 — A tour guide's welcome to Rotorua.
   Source: Listening Section 2 Exercises (Practice No 6); answers from the teacher's key (folder 06, S2-6.txt and S2-6.pdf,
   which also holds the recording script). The paper numbers the questions 1–10 and heads the table "Questions 1-5" by
   mistake; the table holds Questions 5–10.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d206', week: 1, day: 206, sheet: true, illus: 'map',
  title: 'A tour guide’s welcome to Rotorua',
  duration: 'About 20 minutes',
  journey: 'Listen to a tour guide welcoming a group of visitors to Rotorua in New Zealand and explaining the plan for their stay. Find four attractions on the map, then complete the table.',
  finish: { title: 'Next', text: 'Exercise 7' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Map labelling and table completion',
    outcome: 'Follow a guide’s directions on a map (opposite, along, between, just to the north) and note facts and prices.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d206-test', title: 'Part 2 · Exercise 6',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FvT9DQyjhWLQa19d3Wk97jNZK_TWq98U/view', note: 'A tour guide welcomes visitors to Rotorua and describes the trips planned for the next few days.' }
          ],
          blocks: [
            { type: 'figure', src: 'assets/lessons/listening/part2/ex06-map.jpg', alt: 'Map of the Rotorua region, New Zealand: Lake Rotorua at the top left with Rotorua Town and the Lakes Motel at its southern tip; SH 5 runs down the west side and south; SH 30 runs east towards Lake Rotoiti; Lake Tarawera, Mount Tarawera and Lake Rotomahana are in the south-east. Stars mark places A to I.', caption: 'Rotorua, New Zealand' },
            { type: 'ieMatch', id: 'ieb2w1d206-q1', from: 1, boxTitle: 'Places on the map',
              instruction: 'Labelling a map. Write the correct letter, **A–I**, next to Questions 1–4.',
              options: ['place A', 'place B', 'place C', 'place D', 'place E', 'place F', 'place G', 'place H', 'place I'],
              items: [
                { q: 'Hell’s Gate Thermal Reserve', answer: 'B' },
                { q: 'Arts and Craft Institute', answer: 'E' },
                { q: 'Volcanic valley', answer: 'H' },
                { q: 'Tamaki Village', answer: 'G' }
              ] },
            { type: 'ieTable', id: 'ieb2w1d206-q2', from: 5,
              instruction: 'Complete the table. Use **NO MORE THAN ONE WORD AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN ONE WORD AND/OR A NUMBER', max: 1,
              columns: ['Name of attraction', 'Special Feature', 'Cost'],
              rows: [
                ['Hell’s Gate Thermal Reserve', 'Very [[active]] volcanic area; Boiling whirlpool; Hot water (temperature [[40|forty]] °C)', 'Adults $12, Children $6'],
                ['Arts and Craft Institute', 'See traditional Maori [[carving|carvings]]; Learn about use of geothermal water for cooking and medicine', 'free'],
                ['Volcanic valley', 'Formed by volcanic eruption in [[1886]]; Boat trip on lake', 'Adults [[$25|25|$25.00|25$]], Children $5'],
                ['Tamaki Village', 'Tour by Maori guide; “Hangi” – traditional feast cooked over hot [[stones|stone]] in ground', 'No extra charge']
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FumZJOLvm1EZMd97V-fGaxXryL_zNUuU/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
