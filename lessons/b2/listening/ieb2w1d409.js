/* IELTS · Listening · Practise · Part 4 · Exercise 9 — São Paulo: why people move to the city.
   Source: Listening Section 4 Exercises (Practice No 9); answers and recording script from the teacher's key (folder 09, S4-9 a.pdf;
   the folder also has S4-9 Scripts.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d409', week: 1, day: 409, sheet: true, illus: 'globe',
  title: 'São Paulo: why people move to the city',
  duration: 'About 20 minutes',
  journey: 'Listen to a lecture on São Paulo in Brazil: first some corrections to a fact sheet, then a survey of why people leave the countryside for the city. Correct the fact sheet and complete the table.',
  finish: { title: 'Next', text: 'Exercise 10' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Correcting a fact sheet and table completion',
    outcome: 'Notice when a speaker corrects written information, and sort reasons into groups as you listen.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d409-test', title: 'Part 4 · Exercise 9',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FxQE8FmTwEl41pd3vpR5PxJiskyuCU-_/view', note: 'A lecturer updates some facts about São Paulo and then reports a survey of migrants to the city.' }
          ],
          blocks: [
            { type: 'figure', src: 'assets/lessons/listening/part4/ex09-map.jpg', alt: 'Map of Brazil with the Pacific Ocean on the left and the Atlantic Ocean on the right; an arrow points to São Paulo near the south-east coast.', caption: 'São Paulo, Brazil' },
            { type: 'ieTable', id: 'ieb2w1d409-q1', from: 1, title: 'FACT SHEET: SAO PAULO',
              instruction: 'Look at the fact sheet. Tick if the information is correct or write in the changes. (Type **✓** or **tick** if it is correct.)',
              columns: ['Fact sheet', 'Answer'],
              rows: [
                ['Example: Founded in 1550', '1554'],
                ['Example: Population (1970): 7.8 million', '✓'],
                ['Current population: 15.2 million', '[[16.5 million|16,500,000|16.5m|16.5 m|16 500 000]]'],
                ['Currently third largest city in the world', '[[✓|tick|✔|√|correct]]'],
                ['Major products: paper and textiles', '[[cars and computers|computers and cars]]'],
                ['Centre of coffee trade', '[[✓|tick|✔|√|correct]]']
              ] },
            { type: 'ieGap', id: 'ieb2w1d409-q2', from: 5, layout: 'notes', title: 'Countryside → São Paulo',
              instruction: 'Complete the table. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '# PUSH FACTORS (reasons for leaving countryside)\n- Poor harvest\n- [[not enough money|lack of money|no money|little money]] to improve old farms\n- Little chance of education in the countryside\n- [[floods]] damage land and houses\n# PULL FACTORS (reasons for moving to the city)\n- Greater [[variety of work]]\n- Higher wages\n- More [[entertainment]] opportunities\n- Better [[health|hospitals and health]] facilities\n- Relations may already live in town\n# MIGRATION OBSTACLES\n- Little money for [[transport|transportation]]\n- Relations do not want you to leave the village' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FxalGWcOg-DKkYUQCydS_tWBEKfYmnG9/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
