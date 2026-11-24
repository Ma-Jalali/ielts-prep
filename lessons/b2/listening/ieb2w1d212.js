/* IELTS · Listening · Practise · Part 2 · Exercise 12 — Worldwide Student Projects.
   Source: Listening Section 2 Exercises (Practice No 12); answers from the teacher's key (folder 12, S2-12 a.pdf, Unit 18
   Focus on listening 1) and the recording script (S2-12.pdf). The paper numbers this exercise 1–10.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d212', week: 1, day: 212, sheet: true, illus: 'globe',
  title: 'Worldwide Student Projects',
  duration: 'About 20 minutes',
  journey: 'Listen to a talk about a voluntary organisation that sends students to work on projects around the world. Answer a question, complete a table of projects and complete a flow chart of how to apply.',
  finish: { title: 'Next', text: 'Exercise 13' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Short answer, table completion and flow-chart completion',
    outcome: 'Follow a talk that describes several projects in turn and note the key detail of each.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d212-test', title: 'Part 2 · Exercise 12',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1GGTi5GkEWjrl-ghWxS2Pd0fREkietSZf/view', note: 'A volunteer organisation describes the projects it offers abroad and how to apply.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d212-q1', from: 1, layout: 'short',
              instruction: 'Write **NO MORE THAN THREE WORDS** for your answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'What does WSP aim to promote? [[international understanding]]' },
            { type: 'ieTable', id: 'ieb2w1d212-q2', from: 2, title: 'Worldwide Student Projects (W.S.P.)',
              instruction: 'Complete the table showing details of the projects. Write **NO MORE THAN THREE WORDS or A LETTER** for your answer. Period: **S** = Short-term, **M** = Medium-term, **L** = Long-term.', rule: 'NO MORE THAN THREE WORDS or A LETTER', max: 3,
              columns: ['Country', 'Period', 'Project', 'Special information'],
              rows: [
                ['Japan', 'S', 'Village [[improvement]]', 'Some knowledge of Japanese required'],
                ['Poland', '[[M]]', 'Renovating children’s holiday centre', ''],
                ['Mexico', 'S', 'Sea turtle conservation', 'Accommodation in school with [[very basic conditions|basic conditions]]'],
                ['China', '[[L]]', 'Architecture: planning and design', 'US$ [[250|two hundred fifty]] payable on arrival'],
                ['India', 'M', 'Medicine: centre for [[disabled]] children', '']
              ] },
            { type: 'ieGap', id: 'ieb2w1d212-q3', from: 8, layout: 'flow',
              instruction: 'Complete the flow chart. Use **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'You complete an application and send it with [[a passport photo|passport photo|a passport photograph|passport photograph]].\nWe send ‘Welcome Pack’ with: general information · formal [[terms and conditions]] · a questionnaire for you to return\nWe use the questionnaire to match you to your job.\n[[one month|1 month|a month]] before departure we send full details of your placement.' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GGIqk_W3lLFcot3N_3ZmGj4UxT_EuMqf/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1GDlumPFwmfuQZ0prmNfvw73Qc-IMMp94/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
