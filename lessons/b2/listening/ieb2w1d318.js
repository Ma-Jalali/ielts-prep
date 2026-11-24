/* IELTS · Listening · Practise · Part 3 · Exercise 18 — A presentation on lifelong friendships.
   Source: Listening Section 3 Exercises (Practice No 18); answers from the teacher's key (folder 18, Ans.9.docx — answers only, no script).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d318', week: 1, day: 318, sheet: true, illus: 'people',
  title: 'A presentation on lifelong friendships',
  duration: 'About 20 minutes',
  journey: 'Listen to a student, Maya, talking about her research on lifelong friendships and how she will present it. Answer multiple-choice questions, then complete the flow chart of her presentation.',
  finish: { title: 'Next', text: 'Exercise 19' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice and flow-chart completion',
    outcome: 'Follow a student describing her research methods and the order of her presentation.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d318-test', title: 'Part 3 · Exercise 18',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1CzVdQkfK0hjMcG8_4H6mzaoMYDdYiUol/view', note: 'Maya discusses her research on lifelong friendships and plans her presentation.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d318-q1', from: 1,
              instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'Maya chose the topic of lifelong friendships because',
                  options: ['it was an unusual area of research.', 'she had a particular interest in it.', 'someone suggested it to her.'], answer: 'A' },
                { q: 'Maya says that the sample of people she used',
                  options: ['was smaller than she wanted it to be.', 'was typical of the population in general.', 'was the basis for further work.'], answer: 'C' },
                { q: 'The problem with the questionnaire was that',
                  options: ['it wasn’t well constructed.', 'the subjects couldn’t engage with it.', 'too much time was required to complete it.'], answer: 'B' },
                { q: 'Maya says that when she conducted the interviews,',
                  options: ['she kept brief notes.', 'the subjects were all very relaxed.', 'they followed a clear structure.'], answer: 'C' },
                { q: 'What does Maya say about other research in the area?',
                  options: ['A lot of it contradicted her findings.', 'It wasn’t very easy to find.', 'It was carried out in the same way as hers.'], answer: 'B' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d318-q2', from: 6, layout: 'flow', title: 'Lifelong friendships presentation',
              instruction: '**Lifelong friendships presentation.** Complete the flow chart below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: 'Origins of friendship (age, where began, circumstances, etc.): 1 table\nEffects of change of [[location]]: 2 tables\nEffects of [[marriage]]: 1 pie chart\nComparisons between descriptions of [[personality]]: patterns of extreme change\nChanges in [[political opinions]]: 1 pie chart\n[[shared interests]] (e.g. sports, musical tastes): continuing or changing' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1Aa7I_nH6sJhrCepmCrByk22foWHJc3lN/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
