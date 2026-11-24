/* IELTS · Listening · Practise · Part 3 · Exercise 5 — An essay on captive breeding.
   Source: Listening Section 3 Exercises (Practice No 5); answers from the teacher's key (folder 05, S3-5.pdf and S3-5.txt).
   As on the paper and in the key, the "Choose TWO letters" item is one question (Question 1, both letters for one mark),
   so it is a single answer box here and Questions 2–10 keep the paper's numbers. The paper heads the notes "Questions 6-10"
   by mistake; they are Questions 2–5.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d305', week: 1, day: 305, sheet: true, illus: 'eco',
  title: 'An essay on captive breeding',
  duration: 'About 20 minutes',
  journey: 'Listen to Eliot, an environmental science student, talking to his tutor about the draft of his essay on captive breeding. Choose two letters, complete the notes, then say what Eliot found out about each factor.',
  finish: { title: 'Next', text: 'Exercise 6' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple-answer question, note completion and classification',
    outcome: 'Follow a tutor’s feedback on an essay and tell apart what the data shows from what it does not.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d305-test', title: 'Part 3 · Exercise 5',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1GT_BvRKcyeCVNX4z0PZfhDLTHmeNbolW/view', note: 'Eliot’s tutor gives him feedback on the first draft of his essay.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1GUhdVGnbdJNiQIdDUTNfvR7Nx1zavvel/view', note: 'They discuss what helps captive animals survive when they are released.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d305-q1', from: 1, layout: 'form', title: 'What were the TWO main problems with the first part of Eliot’s essay?',
              instruction: 'Choose **TWO** letters, **A–F**. Write both letters in the box: you need both for the mark.',
              text: 'A: insufficient research\nB: lack of organisation\nC: lack of concrete examples\nD: narrow focus\nE: inclusion of irrelevant material\nF: insufficient supporting evidence\nYour TWO letters: [[B and E|E and B|B, E|E, B|B,E|E,B|B E|E B|BE|EB|B & E|E & B]]' },
            { type: 'ieGap', id: 'ieb2w1d305-q2', from: 2, layout: 'notes', title: 'Captive breeding',
              instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '# Introduction\n- a [[definition]] of captive breeding\n# Advantages of captive breeding programmes\n- allow preservation of species from extinction\n- could give new function for [[zoos]] in future\n- allow reintroduction of species into wild\n# Disadvantages of captive breeding programmes\n- captive breeding is [[expensive|very expensive]]\n- psychological effects of captivity\n- danger of [[disease]] for captive animals\n- poor success in reintroduction to wild' },
            { type: 'ieMatch', id: 'ieb2w1d305-q3', from: 6, boxTitle: '',
              instruction: 'What does Eliot say about the following factors related to the release of captive animals into the wild? Write the correct letter, **A**, **B** or **C**, next to Questions 6–10.',
              options: ['the data shows that this factor is very important', 'the data shows that this factor is less important', 'no data is available for this factor'],
              items: [
                { q: 'training in survival skills before release', answer: 'A' },
                { q: 'provision of food and shelter after release', answer: 'B' },
                { q: 'employment and education of the local community', answer: 'C' },
                { q: 'medical screening of animals', answer: 'B' },
                { q: 'acclimatisation', answer: 'A' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1GUmUp2FvIF8xOZJm1vHEAcYjPXJL6xID/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
