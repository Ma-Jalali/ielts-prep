/* IELTS · Listening · Practise · Part 4 · Exercise 23 — The first railways.
   Source: Listening Section 4 Exercises (Practice No 23); answers from the teacher's key (Drive folder 23, Ans. 19.docx, numbered 1–10
   there; the paper numbers the questions 31–40). The key has no recording script.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d423', week: 1, day: 423, sheet: true, illus: 'bus',
  title: 'The first railways',
  duration: 'About 20 minutes',
  journey: 'Listen to a talk about the early history of the railways, from the first public railway to the Liverpool to Manchester line. Complete the table and choose three consequences of the new railway.',
  finish: { title: 'Next', text: 'Exercise 24' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 31–40', subtitle: 'Table completion and multiple choice',
    outcome: 'Follow a history talk organised by dates and note what happened at each stage.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 31–40. Read the table and the options before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d423-test', title: 'Part 4 · Exercise 23',
          audios: [
            { title: 'Recording · Questions 31–40', src: 'https://drive.google.com/file/d/1G-BGer8UalnJQcmlcD4QH2qbBnzk100f/view', note: 'A speaker traces the first steps of the railways in Britain, date by date.' }
          ],
          blocks: [
            { type: 'ieTable', id: 'ieb2w1d423-q1', from: 31,
              instruction: 'Complete the table below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              columns: ['Date', 'Modern railway developments'],
              rows: [
                ['1803', 'William Jessop’s [[public railway]] is considered to be the first one ever built.'],
                ['1804', 'The achievements of Richard Trevithick passed mainly [[unnoticed]].'],
                ['1812', 'The Salamanca was the first commercially successful [[steam locomotive]].'],
                ['1825', 'The Darlington to Stockton railway was at first constructed to carry [[coal]]. Carrying [[passengers]] was considered unimportant.'],
                ['1831', 'The Liverpool to Manchester line was the first modern railway, because it carried merchandise and [[passenger traffic]] on a fixed timetable. [[canals|the canals]] were felt to be hindering the growth of the cities and towns in the area.']
              ] },
            { type: 'ieMulti', id: 'ieb2w1d423-q2', from: 38, pick: 3,
              instruction: 'Choose **THREE** letters, **A–F**.',
              q: 'Which THREE of the following consequences of the opening of the new Liverpool to Manchester railway are mentioned?',
              options: ['Coal became scarce', 'Cotton prices rose', 'Passenger numbers rose', 'The volume of goods transported went up', 'No new canals were built', 'Canal charges fell'],
              answers: ['C', 'D', 'F'] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1G-SGc1OvtHazaWhRkqCiiM8_3UnwRdu3/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
