/* IELTS · Listening · Practise · Part 4 · Exercise 5 — Children and learning: baby talk.
   Source: Listening Section 4 Exercises (Practice No 5); answers and recording script from the teacher's key (folder 05, s4-5 a.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d405', week: 1, day: 405, sheet: true, illus: 'people',
  title: 'Children and learning: baby talk',
  duration: 'About 20 minutes',
  journey: 'Listen to a talk about “motherese”, the way adults speak to babies, and a new theory of how human language began. Complete the sentences and choose the answers.',
  finish: { title: 'Next', text: 'Exercise 6' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Sentence completion and multiple choice',
    outcome: 'Follow the argument of a talk: a theory, the people who disagree with it and the speaker’s main purpose.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d405-test', title: 'Part 4 · Exercise 5',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FVaGYu_Zz22a_YPZauvnSV7pGl0VnJEf/view', note: 'A speaker talks about how adults speak to babies and where language may have come from.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d405-q1', from: 1, layout: 'sentences',
              instruction: 'Complete the sentences below. Write **no more than three words** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'When talking to babies adults [[repeat phrases]] several times.\n‘Motherese’ provides a [[kind of framework|framework]] which allows language to develop in children.\nIn comparison with a [[baby chimpanzee|chimpanzee|baby chimp|chimp]], a human baby is relatively helpless.\nHuman mothers used their voices to [[pacify]] their young.\nLanguage began as sounds became standardized into [[words]].' },
            { type: 'ieMulti', id: 'ieb2w1d405-q2', from: 6, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'Why might mothers have put their babies in slings?',
              options: ['to transport them', 'to protect them', 'to control them', 'to keep them warm', 'to communicate with them'],
              answers: ['A', 'D'] },
            { type: 'ieMulti', id: 'ieb2w1d405-q3', from: 8, pick: 2,
              instruction: 'Choose **TWO** letters, **A–E**.',
              q: 'Linguists say a comprehensive theory would not explain',
              options: ['how grammar developed', 'how language is learnt', 'how sounds got meanings', 'how sounds are produced', 'how speech developed'],
              answers: ['A', 'C'] },
            { type: 'ieChoice', id: 'ieb2w1d405-q4', from: 10,
              instruction: 'Choose the correct letter, **A, B, C or D**.',
              items: [
                { q: 'What is the speaker’s main purpose?', options: ['to describe how mothers talk to their babies', 'to compare how humans and animals look after their young', 'to explain a new theory of origin of human language', 'to contrast the views of linguists and anthropologists'], answer: 'C' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1Fd8m6rKhI9wA5XcktjHhSdsXEMDdm0eL/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
