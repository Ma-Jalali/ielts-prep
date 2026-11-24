/* IELTS · Listening · Practise · Part 2 · Exercise 15 — Benchmark Consulting: past and future.
   Source: Listening Section 2 Exercises (Practice No 15); answers from the teacher's key (folder 15, Ans.7.pdf: Units 10–11,
   Part 3 Exam practice) and the recording script (Scr.7.pdf, CD2 tracks 21–22). The paper numbers this exercise 1–10.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d215', week: 1, day: 215, sheet: true, illus: 'conference',
  title: 'Benchmark Consulting: past and future',
  duration: 'About 20 minutes',
  journey: 'Listen to the head of a consulting company speaking at the annual staff meeting about the company’s history, its new structure and its plans. Complete a table, match departments to cities and complete a summary.',
  finish: { title: 'Next', text: 'Exercise 16' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Table completion, matching and summary completion',
    outcome: 'Follow a company’s history through dates and figures and tell apart the reasons given for each decision.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d215-test', title: 'Part 2 · Exercise 15',
          audios: [
            { title: 'Recording 1 · Questions 1–6', src: 'https://drive.google.com/file/d/1GOsXXQpd-s5daijxy_mH4VC7UyFdvxQ8/view', note: 'The chief executive tells new staff how the company grew and where each department will be.' },
            { title: 'Recording 2 · Questions 7–10', src: 'https://drive.google.com/file/d/1GQQp-cHSgUnKLOPauz0vYWxfWLDTfiCd/view', note: 'The chief executive outlines the company’s plans for the next few years.' }
          ],
          blocks: [
            { type: 'ieTable', id: 'ieb2w1d215-q1', from: 1, title: 'Overview of Benchmark Consulting',
              instruction: 'Complete the table below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              columns: ['', '', '', ''],
              rows: [
                ['2000', 'Founded by James Cox', 'First office in Melbourne', 'Established new [[consultancy system]]'],
                ['2006', 'Fred Montgomery', 'Opened the Perth office', 'Increased revenue to [[$5 million|$5,000,000|five million dollars|5 million dollars|$5m]]'],
                ['2008', 'Sold to TFB Group Ltd for $10 million', 'Created new [[headquarters]] in Sydney', 'Contract with Australian Government']
              ] },
            { type: 'ieMatch', id: 'ieb2w1d215-q2', from: 4, boxTitle: '',
              instruction: 'Matching. In which city **A–C** are the company’s functions in 4–6 located?',
              options: ['Sydney', 'Perth', 'Melbourne'],
              items: [
                { q: 'Marketing', answer: 'C' },
                { q: 'Staff training', answer: 'B' },
                { q: 'Administration', answer: 'A' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d215-q3', from: 7, layout: 'summary', title: 'Benchmark Consulting – company vision for the future',
              instruction: 'Complete the summary below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'Over the next five years, Benchmark Consulting will create two [[subsidiary|small subsidiary]] companies in order to increase business with European and Asian organisations. In all departments, more [[employees]] will be recruited over the next year, and to ensure Benchmark Consulting is a good choice for potential employees, salaries for staff will be raised by [[10%|10 per cent|ten per cent|10 percent|ten percent]]. Staff who will have to move to a different city following the restructure will receive a [[relocation package]] to assist with expenses.' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GQGabpHtvTnFd0FJo0sFLy0tasRP64rP/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1GP7V9ilv_ahTj-D3sFZJKFqcPP-paedi/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
