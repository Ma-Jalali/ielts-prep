/* IELTS · Listening · Practise · Part 2 · Exercise 20 — Staff briefing at a pop festival.
   Source: Listening Section 2 Exercises (Practice No 20); answers and recording script from the teacher's key (folder 20, Ans.17.pdf).
   On the paper the table's "Meeting place" row (Question 8) is printed above the "Meeting time" row (Question 7); the rows are
   swapped here so the gaps run 7, 8 in reading order, and the two "all teams" rows (Questions 9–10) are a second small table below.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d220', week: 1, day: 220, sheet: true, illus: 'music',
  title: 'Staff briefing at a pop festival',
  duration: 'About 20 minutes',
  journey: 'Listen to the manager of a pop festival welcoming her staff, showing them the site plan and telling them about the festival’s history and their meetings. Label the map, complete the sentences and complete the table.',
  finish: { title: 'Next', text: 'Exercise 21' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Map labelling, sentence completion and table completion',
    outcome: 'Follow place words on a site plan (beside, between, opposite) and note meeting places and times.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d220-test', title: 'Part 2 · Exercise 20',
          audios: [
            { title: 'Recording 1 · Questions 1–3', src: 'https://drive.google.com/file/d/1Gj-pUDWy55AaLpoE7fjHhJ2AZmlxR1Cm/view', note: 'The festival manager points out the important places on the site plan.' },
            { title: 'Recording 2 · Questions 4–10', src: 'https://drive.google.com/file/d/1GkUKLeF0lESPWCElq8QcyIqztPIFI7Gv/view', note: 'She tells the story of the festival and gives the times and places of the team meetings.' }
          ],
          blocks: [
            { type: 'ieDiagram', id: 'ieb2w1d220-q1', from: 1, title: 'Festival site plan',
              instruction: 'Label the map. Write the correct letters, **A–F**, next to Questions 1–3.',
              src: 'assets/lessons/listening/part2/ex20-map.jpg', alt: 'Plan of the festival grounds: the entrance is on the right. Along the top are the visitors’ toilets and two round symbols; the breakfast tent and Campsite 1 are on the left, the Old England pub in the middle, the disabled viewing area and the stage below it, with small squares beside the stage and by the entrance. Blank 1 is in the top left corner, blank 2 between the breakfast tent and the disabled viewing area, blank 3 below the pub.',
              bank: ['small security office', 'main security office', 'first aid tent', 'staff toilets', 'staff meeting point', 'visitors’ meeting point'],
              labels: [
                { x: 13.6, y: 10.2, answer: 'D' },
                { x: 31.5, y: 45.8, answer: 'E' },
                { x: 66.7, y: 53.6, answer: 'B' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d220-q2', from: 4, layout: 'sentences',
              instruction: 'Complete the sentences below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: 'In the first year, it was a [[pop concert]] and not a real festival.\nShortly afterwards the event was moved, and the [[castle]] was in the background.\nNow the festival is held in the [[fields]].' },
            { type: 'ieTable', id: 'ieb2w1d220-q3', from: 7, title: 'Team briefings',
              instruction: 'Complete the table below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              columns: ['', 'Children’s zone team', 'Security team', 'First aid team'],
              rows: [
                ['Meeting time', '2:00 pm', '[[3.15|3:15|3.15 pm|3:15 pm]] pm', '4:00 pm'],
                ['Meeting place', 'In campsite 2', 'Behind the stage', 'At the [[entrance gates|entrance gate]]']
              ] },
            { type: 'ieTable', id: 'ieb2w1d220-q4', from: 9, title: 'Final meeting',
              instruction: 'Complete the table below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              columns: ['', 'All teams'],
              rows: [
                ['Final meeting time for all teams', '[[8|eight|8.00|8:00|8 am|8.00 am]] am'],
                ['Final meeting place for all teams', '[[Campsite 1|Campsite one]]']
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1Gk2yMapAEIP2WyWBBcs-GiemNVgUs-4q/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
