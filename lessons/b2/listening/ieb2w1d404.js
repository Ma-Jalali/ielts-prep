/* IELTS · Listening · Practise · Part 4 · Exercise 4 — The Emergency Watch.
   Source: Listening Section 4 Exercises (Practice No 04); answers and recording script from the teacher's key (folder 04, s4-4 a.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d404', week: 1, day: 404, sheet: true, illus: 'watch',
  title: 'The Emergency Watch',
  duration: 'About 20 minutes',
  journey: 'Listen to a talk about a watch that can send an emergency signal: its story, what it can do and what is inside it. Answer the questions and label the parts of the watch.',
  finish: { title: 'Next', text: 'Exercise 5' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Short answers and diagram labelling',
    outcome: 'Predict the kind of answer each question needs (a price, a place, a time, a distance, a weight, a year) and catch the numbers.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d404-test', title: 'Part 4 · Exercise 4',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FeXOhO4wTx5DuUqL8RiGUQj88-ytY3ZK/view', note: 'A speaker describes the Breitling Emergency Watch and takes it apart.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d404-q1', from: 1, layout: 'short',
              instruction: 'Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'How much was the watch used by Fossett sold for? [[£20,000|£20000|20,000|20000|20,000 pounds|20000 pounds|twenty thousand pounds]]\nWhere were the two men near when the accident happened? [[Antarctica|off Antarctica]]\nHow long can the watch continue transmitting an emergency signal? [[48 hours|forty-eight hours]]\nWhat is the maximum range of the watch at sea? [[160 kilometres|160 kilometers|160 km|160 kms]]\nHow much does the watch weigh? [[85 grams|85 grammes|85 g|85g|eighty-five grams]]\nWhen was the self-winding watch invented? [[1770|in 1770]]' },
            { type: 'ieDiagram', id: 'ieb2w1d404-q2', from: 7, title: 'Inside the Emergency Watch',
              instruction: 'Label the watch. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              src: 'assets/lessons/listening/part4/ex04-watch.jpg', alt: 'An exploded view of the watch, top to bottom: the ring, part 7 inside the ring, the inner case with part 8 on its right side, the watch, the watch battery, part 9, the circuit board in the outer case, and part 10 coming out of a cap at the bottom right.',
              labels: [
                { x: 77.6, y: 7.2, answer: 'crystal|the crystal' },
                { x: 78, y: 23.2, answer: 'crown|the crown' },
                { x: 74.7, y: 52.6, answer: 'transmitter battery|the transmitter battery' },
                { x: 81.8, y: 77.8, answer: 'antenna|the antenna' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FemquHVQBawU5XUzjAmT7NGHxuPzrWOk/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
