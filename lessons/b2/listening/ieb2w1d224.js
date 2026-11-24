/* IELTS · Listening · Practise · Part 2 · Exercise 24 — The Red Cross and first aid.
   Source: Listening Section 2 Exercises (Practice No 24); answers from the teacher's key (folder 24, 1.txt — answers only, no script).
   The paper prints Question 6 as two blanks ("…… And ……") with one number; here it is one gap for both colours.
   The paper's Questions 1–8 notes are shown as two blocks (1–6, 7–8) so that Recording 2 sits above Question 7.
   Recording split: Track 23 ends with "look at Questions 7 to 10" (checked by listening), so it covers Questions 1–6.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d224', week: 1, day: 224, sheet: true, illus: 'health',
  title: 'The Red Cross and first aid',
  duration: 'About 20 minutes',
  journey: 'Listen to a speaker from the Red Cross talking about how the organisation began, what its emblem means and what first aid aims to do. Complete the notes, then label the chart of accidental injuries in Australia.',
  finish: { title: 'Next', text: 'Exercise 25' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion and chart labelling',
    outcome: 'Follow a short history and a list of aims, and match percentages on a chart to what the speaker says.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d224-test', title: 'Part 2 · Exercise 24',
          audios: [
            { title: 'Recording 1 · Questions 1–6', src: 'https://drive.google.com/file/d/1MxH46tV1H_tHMnQhOg5GDnb_ZfKEt5fL/view', note: 'A Red Cross speaker explains how the organisation started and what its emblem stands for.' },
            { title: 'Recording 2 · Questions 7–10', src: 'https://drive.google.com/file/d/1B73pSdG_bbMJbf2LEWsrVTTtrMScCEo1/view', note: 'She describes the aims of first aid and the main causes of accidents.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d224-q1', from: 1, layout: 'notes',
              instruction: 'Complete the notes. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '# Jean Henri Dunant:\n- was a citizen of [[Switzerland]]\n- 1859 – Italy – helped wounded soldiers – provided food and [[medical attention|basic medical attention]]\n- 1864 – organised a conference which was the First [[Geneva Convention]]\nRed cross chosen as emblem to symbolise their activities.\n- Red Cross operates in areas of famine and [[war]]\n- Misuse of the emblem is [[against the law|against law]]\n- In Australia the colours used to indicate First Aid are [[white and green|white, green|white & green|white green]]' },
            { type: 'ieGap', id: 'ieb2w1d224-q2', from: 7, layout: 'notes',
              instruction: 'Complete the notes. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '# The aims of First Aid are to:\n- [[preserve life]]\n- [[protect]] the victim\n- prevent things from worsening\n- promote recovery' },
            { type: 'ieDiagram', id: 'ieb2w1d224-q3', from: 9, title: 'Accidental injuries in Australia in 1992',
              instruction: 'Complete the chart below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              src: 'assets/lessons/listening/part2/ex24-chart.jpg', alt: 'Bar chart of accidental injuries in Australia in 1992: road accidents 45%, an unlabelled bar 21%, work accidents 15%, water 7%, an unlabelled bar 5%, other 7%. Arrows point to the two unlabelled bars.',
              labels: [
                { x: 26.6, y: 94, answer: 'falling|falls' },
                { x: 65.2, y: 92, answer: 'poisoning' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1BE-6oSTMLdx1xrW5A3CMEhYCvcFP6iD6/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
