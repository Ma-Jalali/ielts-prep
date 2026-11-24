/* IELTS · Listening · Practise · Part 1 · Exercise 23 — Renting a room in a new house.
   Source: Listening Section 1 Exercises (Practice No 23); answers from the teacher's key (folder 23). The folder has no recording script.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d123', week: 1, day: 123, sheet: true, illus: 'home',
  title: 'Renting a room in a new house',
  duration: 'About 20 minutes',
  journey: 'Listen to a new tenant finding out about a house: the rent, the house rules and the local area. Complete the notes and label the map.',
  finish: { title: 'Next', text: 'Exercise 24' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion and map labelling',
    outcome: 'Catch a spelled street name, a postcode and house rules, then follow directions on a map.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 20, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d123-test', title: 'Part 1 · Exercise 23',
          audios: [
            { title: 'Recording 1 · Questions 1–7', src: 'https://drive.google.com/file/d/1HNsHiM3gdDjCdDbXJmf4VTNpIfh2vTck/view', note: 'A new tenant hears about the rent and the rules of the house.' },
            { title: 'Recording 2 · Questions 8–10', src: 'https://drive.google.com/file/d/1-45XZOZGTmEAf1OY8Qmh2RUMrlVwVO9g/view', note: 'Directions to places near the house.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d123-q1', from: 1, layout: 'notes', title: 'New house',
              instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: '- Rent doesn’t include [[telephone|the telephone|phone|the phone|telephone bill|the telephone bill|phone bill]]\n- Send reference to: Mr Crawly, [[King Street|King St]], Exford [[AP12 7QT|AP127QT]]\n- Need to buy a [[hair dryer|hairdryer|hair-dryer]]\n- No music in living room after [[10|ten|10 pm|10pm|10 o’clock|ten o’clock|10.00|10:00]]\n- Put bicycle in the [[garden]]\n- Barbecue every [[Wednesday|Wednesdays]]' },
            { type: 'figure', src: 'assets/lessons/listening/part1/ex23-map.jpg', alt: 'A street map: from the house at the bottom, a road leads up and divides into several streets; buildings A to G stand beside the streets.', caption: 'Map of the area near the house' },
            { type: 'ieMatch', id: 'ieb2w1d123-q2', from: 8, boxTitle: 'Buildings on the map',
              instruction: 'Label the map above. Write the correct letter, **A–G**, next to Questions 8–10.',
              options: ['building A', 'building B', 'building C', 'building D', 'building E', 'building F', 'building G'],
              items: [{ q: 'Bank', answer: 'C' }, { q: 'Internet café', answer: 'G' }, { q: 'Post office', answer: 'B' }] }
          ]
        }] }
    ]
  }],
  extras: [],
  glossary: []
};
