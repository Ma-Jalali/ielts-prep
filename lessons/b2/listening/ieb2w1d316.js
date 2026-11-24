/* IELTS · Listening · Practise · Part 3 · Exercise 16 — Working on a dissertation.
   Source: Listening Section 3 Exercises (Practice No 16); answers from the teacher's key (folder 16, Ans.7.docx — answers only, no script).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d316', week: 1, day: 316, sheet: true, illus: 'grad',
  title: 'Working on a dissertation',
  duration: 'About 20 minutes',
  journey: 'Listen to a tutor and a student, Beth, talking about her dissertation on communication at work. Choose the right letters, match each section of the dissertation to a comment and answer a question about her conclusion.',
  finish: { title: 'Next', text: 'Exercise 17' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple-answer questions, matching and short answers',
    outcome: 'Follow a tutor’s feedback and tell apart what is praised, what is criticised and what is only mentioned.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d316-test', title: 'Part 3 · Exercise 16',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1Efmc-oSBZGDLVUwQBRHRM4gS9XdJryW4/view', note: 'A tutor gives Beth feedback on her dissertation, section by section.' }
          ],
          blocks: [
            { type: 'ieMulti', id: 'ieb2w1d316-q1', from: 1, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'Which TWO areas of work did Beth include in her dissertation?',
              options: ['retail', 'banking', 'call centres', 'tourism', 'translation'],
              answers: ['A', 'D'] },
            { type: 'ieMulti', id: 'ieb2w1d316-q2', from: 3, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'Which TWO aspects of the dissertation were impressive, according to the tutor?',
              options: ['summary of academic research', 'analysis of videos', 'observation of live interactions', 'interviews', 'analysis of data on the outcomes'],
              answers: ['C', 'D'] },
            { type: 'ieMatch', id: 'ieb2w1d316-q3', from: 5, reuse: false, boxTitle: 'Comments',
              instruction: 'Which comments do the speakers make about each section of the dissertation? Choose **FOUR** answers from the box and write the correct letter, **A–F**, next to Questions 5–8.',
              options: ['There is not enough evidence.', 'The conclusion is confusing.', 'It highlights a real problem.', 'It is particularly well organised.', 'There are too many examples.', 'It includes new ideas.'],
              items: [
                { q: 'Dealing with Complaints', answer: 'F' },
                { q: 'Collaborating with Colleagues', answer: 'A' },
                { q: 'Interacting with Managers', answer: 'C' },
                { q: 'Giving Instructions', answer: 'D' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d316-q4', from: 9, layout: 'short', title: 'Which TWO aspects of communication does Beth emphasise in her conclusion?',
              instruction: 'Answer the question below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: '[[listening skills|formal language|format language]]\n[[formal language|format language|listening skills]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1Ea3_aYQuMg5jZexYA4ogcPUo1Ziq40VJ/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
