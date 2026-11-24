/* IELTS · Listening · Practise · Part 4 · Exercise 2 — Wikipedia: how it works.
   Source: Listening Section 4 Exercises (Practice No 02); answers and recording script from the teacher's key (folder 02, s4-2 a.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d402', week: 1, day: 402, sheet: true, illus: 'books',
  title: 'Wikipedia: how it works',
  duration: 'About 20 minutes',
  journey: 'Listen to a talk about Wikipedia: who writes it, how to edit an article and how its quality is checked. Answer the questions, complete the flow chart and the summary.',
  finish: { title: 'Next', text: 'Exercise 3' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Short answers, flow chart and summary completion',
    outcome: 'Follow the steps of a process in order and match what you hear to the words in a summary box.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d402-test', title: 'Part 4 · Exercise 2',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FT0Ja6IJ_3wnu5YJDn59a4R8YjlRgcsM/view', note: 'A lecturer talks about Wikipedia as a source of information.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d402-q1', from: 1, layout: 'short',
              instruction: 'Answer the questions below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'What information source is Wikipedia similar to? [[an encyclopedia|encyclopedia|an encyclopaedia|encyclopaedia]]\nWho are the authors of Wikipedia? [[unpaid volunteers|volunteers]]' },
            { type: 'ieGap', id: 'ieb2w1d402-q2', from: 3, layout: 'flow', title: 'Editing a Wikipedia article',
              instruction: 'Complete the flow chart below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: '**Step A:** Decision to change → Select “Edit”\n**Step B:** [[input]] changes → Type, cut and paste, delete\n**Step C:** [[summarize|summarise]] changes → Enter text in separate area\n**Step D:** Check changes → Select [[preview|preview option|the preview option]] (further changes: go back to Step A)\n**Step E:** Confirm changes → [[click on save|click save|save]] to finish' },
            { type: 'ieGap', id: 'ieb2w1d402-q3', from: 7, layout: 'summary',
              instruction: 'Complete the summary below using words from the list. Write the correct letter, **A–H**.',
              bank: ['accuracy', 'vandalism', 'reputations', 'democracy', 'interest', 'quality', 'neutrality', 'originality'],
              text: 'Criticism of Wikipedia has focused on the question of [[A]]. Some contributors are registered with the site, and over time they are able to improve their [[C]]. There are also administrators who carry out checks on entries and prevent [[B]]. Other policies to maintain high standards include a rule that entries should aim at [[G]] in writing style.' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FXoU9a87FcY75dPaQjl3GXvJbTjBxMAj/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
