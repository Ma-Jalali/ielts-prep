/* IELTS · Listening · Practise · Part 3 · Exercise 12 — A group project on extreme weather.
   Source: Listening Section 3 Exercises (Practice No 12); answers from the teacher's key (folder 12, Ans.3.pdf, Unit 3 Part 3 Exam practice),
   checked against the recording script (Scr.3.pdf, Tracks 19–20).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d312', week: 1, day: 312, sheet: true, illus: 'eco',
  title: 'A group project on extreme weather',
  duration: 'About 20 minutes',
  journey: 'Listen to three students planning a group project on the weather and sharing out the topics, then explaining how a cyclone forms. Complete the notes, match the topics to the students and complete the diagram.',
  finish: { title: 'Next', text: 'Exercise 13' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion, matching and diagram labelling',
    outcome: 'Follow students as they reject ideas and share out tasks, and track a process step by step on a diagram.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d312-test', title: 'Part 3 · Exercise 12',
          audios: [
            { title: 'Recording 1 · Questions 1–7', src: 'https://drive.google.com/file/d/1By2aMxTRBkn_9Hx6BQ6yO21OgWG6BHGU/view', note: 'Emma, Tom and Alex choose a project topic and decide who covers what.' },
            { title: 'Recording 2 · Questions 8–10', src: 'https://drive.google.com/file/d/1Bv8lt_s_-ASHFPwYzj_GqhhZKs57K_ML/view', note: 'One student explains how cyclones form and behave.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d312-q1', from: 1, layout: 'notes', title: 'Project suggestions: pros and cons',
              instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: '# Localised weather conditions\nProblem: Not enough time for [[own research|our own research|research]]\n# Seasons\nProblem: Too [[wide-reaching|wide reaching]]\n# Extreme weather conditions\nAdvantage: Easier to [[break down]] into different sections, more interesting' },
            { type: 'ieMatch', id: 'ieb2w1d312-q2', from: 4, reuse: true, boxTitle: 'Students',
              instruction: 'Who will cover the following weather conditions? Write the correct letter, **A, B, C** or **D**, next to Questions 4–7.',
              options: ['Alex', 'Emma', 'Tom', 'None of them'],
              items: [
                { q: 'Blizzards', answer: 'D' },
                { q: 'Floods', answer: 'C' },
                { q: 'Drought', answer: 'B' },
                { q: 'Cyclones', answer: 'A' }
              ] },
            { type: 'ieDiagram', id: 'ieb2w1d312-q3', from: 8, title: 'How a cyclone forms',
              instruction: 'Complete the diagram below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              src: 'assets/lessons/listening/part3/ex12-cyclone.jpg', alt: 'Diagram of a cyclone: warm water under clouds over the sea; an arrow from “If low pressure clouds …” to “Mature cyclones: gains speed/power”; an arrow down to “… momentum”; on land a house and a tornado-shaped storm with “Strong wind”, “Eye” and “Equally strong in …”.',
              labels: [
                { x: 33.2, y: 30.9, answer: 'rotate|spin|start to rotate|will rotate|start to spin' },
                { x: 34, y: 80, answer: 'lose' },
                { x: 91, y: 19, answer: 'the other direction|other direction' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [ { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1CmePGE4zz0V302anhG7ocMlZjfUK68d3/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1BtYtBSGi3sTC-fyGvZAdBhw1BK7E_Oh3/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a> (Unit 3, Part 3: Exam practice)' } ] }
    ]
  }],
  extras: [],
  glossary: []
};
