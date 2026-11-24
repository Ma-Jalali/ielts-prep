/* IELTS · Listening · Practise · Part 2 · Exercise 3 — Travel facts: the Scottish Highlands.
   Source: Listening Section 2 Exercises (Practice No 3); answers and recording script from the teacher's key (Drive folder 03, s2-3 a.pdf).
   The paper prints "Questions 1-8" but its notes stop at the heading "Events (Inverness)" with no gap; Question 8 (the date of the Highland Games) is restored from the key.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d203', week: 1, day: 203, sheet: true, illus: 'mountain',
  title: 'Travel facts: the Scottish Highlands',
  duration: 'About 20 minutes',
  journey: 'Listen to a travel writer talking on the radio about visiting the Scottish Highlands. Complete the travel facts and choose her two pieces of advice.',
  finish: { title: 'Next', text: 'Exercise 4' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion and multiple choice (two answers)',
    outcome: 'Catch large numbers, distances, temperatures and dates, and tell advice the speaker gives from advice she rejects.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d203-test', title: 'Part 2 · Exercise 3',
          audios: [
            { title: 'Recording 1 · Questions 1–8', src: 'https://drive.google.com/file/d/1GgLEE3FYM0AlrYrymYZI8ye6wGVSMXTe/view', note: 'A travel writer gives the facts about the Highlands: size, travel, climate and places to stay.' },
            { title: 'Recording 2 · Questions 9–10', src: 'https://drive.google.com/file/d/1GfRD_qwAUL5s6_gNmeGoCLOLE7QgwSQZ/view', note: 'She gives visitors some rules for watching wildlife.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d203-q1', from: 1, layout: 'notes', title: 'Scottish Highlands, travel facts',
              instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS OR A NUMBER', max: 3,
              text: 'Total area (with islands): [[39,000|39000|39 000|thirty-nine thousand]] sq km\n# Getting there\nBy train\nGlasgow to Fort William: 174 km. Journey time: [[4 hours|four hours|4 hrs]]\nGlasgow to Inverness: [[280]] km.\nJourney time: 3.5 hours\nBy car\nGlasgow to Fort William: take the [[A82]] road.\n# Climate\nAverage maximum temperature (West Coast): [[18|eighteen]] °C\nAverage rainfall (West Coast): [[2,000|2000|2 000|two thousand]] mm/year.\n# Accommodation costs\nFort William: [[£25|25 pounds|twenty-five pounds|25|£25.00]] per night\nInverness: £30 per night\n# Events (Inverness)\nHighland Games: [[23 July|23rd July|July 23|July 23rd|23rd of July|twenty-third of July]]' },
            { type: 'ieMulti', id: 'ieb2w1d203-q2', from: 9, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'What advice does Moira give visitors?',
              options: ['Wear bright clothes.', 'Get as close as you can to the animals.', 'Watch wildlife from your car.', 'Avoid making a noise.', 'Take your dog with you.'],
              answers: ['C', 'D'] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GgDa_tto2fqVMSIUZRqrufK0BPQvuigu/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
