/* IELTS · Listening · Practise · Part 3 · Exercise 17 — Planning a project on relationships ("Relationships").
   Source: Listening Section 3 Exercises (Practice No 17); answers from the teacher's key (folder 17, Ans.8.docx — answers only, no script).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d317', week: 1, day: 317, sheet: true, illus: 'people',
  title: 'Planning a project on relationships',
  duration: 'About 20 minutes',
  journey: 'Listen to two students, Fumiko and Victor, talking about her psychology project on friendship. Answer multiple-choice questions, then complete the flow chart of her plan.',
  finish: { title: 'Next', text: 'Exercise 18' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice and flow-chart completion',
    outcome: 'Follow two students planning a project and note each stage of the plan in order.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d317-test', title: 'Part 3 · Exercise 17',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1ETnaABxYerKRipuDy5cH8X7p23-LKpCW/view', note: 'Fumiko tells Victor about the problems with her psychology project.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1EVtIMc8DL7fe0swDJNW1Iss72MGxmZGs/view', note: 'Fumiko goes through the plan for her project, step by step.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d317-q1', from: 1,
              instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'What problem does Fumiko have with her psychology project?',
                  options: ['She isn’t interested in the topic.', 'She can’t find enough information.', 'She doesn’t know what to focus on.'], answer: 'C' },
                { q: 'What point does Victor make about Fumiko’s tutor?',
                  options: ['He explores his students’ key interests.', 'He is a very hard-working member of staff.', 'He uses a limited range of project titles.'], answer: 'A' },
                { q: 'What has Fumiko already read on her topic?',
                  options: ['book extracts', 'journal articles', 'internet material'], answer: 'C' },
                { q: 'According to Mr Dresden, Fumiko’s project must include',
                  options: ['some graphic data.', 'a bibliography.', 'a public survey.'], answer: 'B' },
                { q: 'Victor and Fumiko arrange to',
                  options: ['get in contact in half an hour.', 'meet up in the library.', 'have lunch together.'], answer: 'A' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d317-q2', from: 6, layout: 'flow', title: 'Fumiko’s plan',
              instruction: '**Fumiko’s plan.** Complete the flow chart below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: 'Define [[key terms]] using a diagram\nBackground: relationships in the [[animal world]], e.g. apes\nPresent an overview of the [[contexts]] for human relationships, e.g. work, home\nLook at six [[stages]] involved in a friendship (plus survey)\nPredict the future [[influences]] on friendship' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1Edln-GcaJbvYqW2H1f0-D-sFp08T9hMG/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
