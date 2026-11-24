/* IELTS · Listening · Practise · Part 3 · Exercise 10 — The end of oil.
   Source: Listening Section 3 Exercises (Practice No 10); answers from the teacher's key (folder 10, S3-10 a.pdf: Focus on IELTS,
   Unit 18 Focus on listening 2 "The end of oil", key and recording script).
   The paper has 9 questions (the book's Question 10 is not on it). Its second heading reads "Questions 1-3 Labe the pie chart";
   the gaps are numbered 4–6. Questions 7–9 ("Tick the relevant boxes in each column") each have several countries and one mark,
   so each is one typed answer here: the countries, in any order.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d310', week: 1, day: 310, sheet: true, illus: 'globe',
  title: 'The end of oil: a tutorial',
  duration: 'About 20 minutes',
  journey: 'Listen to a tutor talking to a student about his progress and his next assignment on the world’s oil. Complete the sentences, label the pie chart and say which countries answer each question.',
  finish: { title: 'Next', text: 'Exercise 11' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–9', subtitle: 'Sentence completion, pie chart labelling and table',
    outcome: 'Catch advice and word limits in a tutorial, match proportions to a pie chart and sort countries by what is said about them.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–9. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d310-test', title: 'Part 3 · Exercise 10',
          audios: [
            { title: 'Recording · Questions 1–9', src: 'https://drive.google.com/file/d/1EvHiv7sQ9htjWwtQwm1RDp_KobjtF_82/view', note: 'A tutor talks to Andrew about his progress and his assignment on oil.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d310-q1', from: 1, layout: 'sentences',
              instruction: 'Complete the sentences. Write **NO MORE THAN THREE WORDS OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS OR A NUMBER', max: 3,
              text: 'Andrew’s tutor thinks he can achieve a [[Credit]] if he maintains his progress.\nHis tutor advises him to avoid the subject of [[global warming]].\nThe assignment needs to be [[3,000|3000|three thousand]] words long.' },
            { type: 'ieDiagram', id: 'ieb2w1d310-q2', from: 4,
              instruction: 'Label the pie chart. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              src: 'assets/lessons/listening/part3/ex10-pie.jpg', alt: 'A pie chart in three parts: part 4 (green) is about a quarter, part 5 (blue) is just under half, part 6 (red) is about 30 per cent.',
              labels: [
                { x: 42.2, y: 37.3, answer: 'transportation' },
                { x: 59.2, y: 50.6, answer: 'industry' },
                { x: 44.4, y: 76.3, answer: 'buildings' }
              ] },
            { type: 'ieMulti', id: 'ieb2w1d310-q3', from: 7, pick: 2, numbers: 1,   // one tick-box column on the paper: one mark
              instruction: 'Tick the relevant countries for each question. You need all the right countries for the mark.', q: 'Which countries are producing less oil now than in the past?',
              options: ['Great Britain', 'Canada', 'Germany', 'India', 'Japan', 'Mexico', 'Saudi Arabia', 'South Korea', 'former Soviet Union', 'USA'], answers: ['F', 'I'] },
            { type: 'ieMulti', id: 'ieb2w1d310-q4', from: 8, pick: 4, numbers: 1,   // one tick-box column on the paper: one mark
              instruction: '', q: 'Which countries use the most gasoline per head?',
              options: ['Great Britain', 'Canada', 'Germany', 'India', 'Japan', 'Mexico', 'Saudi Arabia', 'South Korea', 'former Soviet Union', 'USA'], answers: ['B', 'C', 'E', 'J'] },
            { type: 'ieMulti', id: 'ieb2w1d310-q5', from: 9, pick: 2, numbers: 1,   // one tick-box column on the paper: one mark
              instruction: '', q: 'Which countries are increasing their gasoline use most rapidly?',
              options: ['Great Britain', 'Canada', 'Germany', 'India', 'Japan', 'Mexico', 'Saudi Arabia', 'South Korea', 'former Soviet Union', 'USA'], answers: ['D', 'H'] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1F3qn06MMsqYa79J9P8zwK79_CIsgvwom/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
