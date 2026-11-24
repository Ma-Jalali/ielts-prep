/* IELTS · Listening · Practise · Part 3 · Exercise 8 — Students report on television and the media.
   Source: Listening Section 3 Exercises (Practice No 8); answers from the teacher's key (folder 08, S3-8 a.pdf: Focus on IELTS,
   Unit 14 Focus on listening 2 "Couch potatoes", key and recording script).
   Question 2: the key gives Switzerland, but on this paper arrow 2 points to the fifth bar (about 40%), which the recording
   says is the USA (Switzerland, the lowest, is the sixth bar), so the answer here is the USA.
   Questions 8–10: the paper's option A reads "Not interesting date" and E "Information is out of"; this is a layout slip
   ("date" belongs to E), corrected here. The paper's rubric says A–F, but the options run A–G.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d308', week: 1, day: 308, sheet: true, illus: 'tv',
  title: 'Couch potatoes: a seminar on TV',
  duration: 'About 20 minutes',
  journey: 'Listen to two students reporting their research on television viewing and children’s media to their tutor. Label the chart, choose the right charts and answers, and pick three reasons.',
  finish: { title: 'Next', text: 'Exercise 9' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Chart labelling and multiple choice',
    outcome: 'Link spoken percentages and fractions to bars, pie charts and line graphs, and pick out reasons in a discussion.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d308-test', title: 'Part 3 · Exercise 8',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1f5JFXP3fXCbLhhMKSAyFoa1uCtWaVDhU/view', note: 'Amy and Jonathan present their findings on television and the media to their tutor.' }
          ],
          blocks: [
            { type: 'ieDiagram', id: 'ieb2w1d308-q1', from: 1, title: 'Percentage of people watching television for more than two hours per day',
              instruction: 'Label the two bars on the chart below. Choose your answers from the countries in the box and write the correct letter, **A–F**, next to Questions 1 and 2.',
              src: 'assets/lessons/listening/part3/ex08-chart.jpg', alt: 'A bar chart of six bars, from left to right about 59%, 55%, 49%, 42%, 40% and 22%. Arrow 1 points to the second bar; arrow 2 points to the fifth bar.',
              bankTitle: 'List of countries',
              bank: ['Germany', 'New Zealand', 'Portugal', 'Switzerland', 'UK', 'USA'],
              labels: [
                { x: 26.6, y: 95.7, answer: 'B' },
                { x: 76.7, y: 93.2, answer: 'F' }
              ] },
            { type: 'figure', src: 'assets/lessons/listening/part3/ex08-pies.jpg', alt: 'Three pie charts of a TV channel’s week. A: drama and entertainment about two-thirds, news and factual and other smaller. B: news and factual about a third, other about a third, drama and entertainment about a third. C: drama and entertainment half, news and factual about a quarter, other about a quarter.', caption: 'Question 3 · Pie charts A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d308-q2', from: 3, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'Which pie chart shows the TV channel’s average week?', options: ['Pie chart A', 'Pie chart B', 'Pie chart C'], answer: 'C' }
            ] },
            { type: 'figure', src: 'assets/lessons/listening/part3/ex08-graphs.jpg', alt: 'Three line graphs, 0–100%, of video recorders (dashed line), CD players (solid line) and satellite TV (dotted line). A: video recorders rise from about 55% to almost 100%; CD players go up and down around 50%; satellite TV stays around 20–30%. B: video recorders stay above 90%; CD players rise from about 45% to about 65%; satellite TV rises slowly to about 25%. C: video recorders fall from about 85% to 65%; CD players rise to almost 100%; satellite TV rises from about 40% to 60%.', caption: 'Question 4 · Graphs A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d308-q3', from: 4, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'Which graph shows home entertainment equipment in homes with children?', options: ['Graph A', 'Graph B', 'Graph C'], answer: 'B' },
              { q: 'Why does Jonathan think that television is so important to children?', options: ['They don’t have much else to do in their free time.', 'They like to watch the same programmes as their friends.', 'It’s a way of escaping from their parents’ demands.'], answer: 'B' },
              { q: 'How many British children have televisions in their bedrooms?', options: ['less than half', 'about half', 'more than half'], answer: 'C' },
              { q: 'How many British children have access to computers in their bedrooms?', options: ['less than half', 'about half', 'more than half'], answer: 'A' }
            ] },
            { type: 'ieMulti', id: 'ieb2w1d308-q4', from: 8, pick: 3,
              instruction: 'Choose **THREE** letters, **A–G**.',
              q: 'What THREE reasons did children give for not reading books?',
              options: ['Not interesting', 'Too expensive', 'Parents don’t buy books', 'Not fashionable', 'Information is out of date', 'Too much effort', 'Not enough pictures'],
              answers: ['A', 'D', 'F'] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1AsMrw9C5mNVmYLH7Sdqyd3s-He8bJfrc/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
