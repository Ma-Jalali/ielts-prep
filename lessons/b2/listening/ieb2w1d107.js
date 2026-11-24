/* IELTS · Listening · Practise · Part 1 · Exercise 7 — A survey on eating habits.
   Source: Listening Section 1 Exercises (Practice No 7); answers from the teacher's key and recording script (folder 07).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d107', week: 1, day: 107, sheet: true, illus: 'food',
  title: 'A survey on eating habits',
  duration: 'About 20 minutes',
  journey: 'Listen to someone from the Students’ Union asking a student about the food he eats. Choose the right answers, then complete the form.',
  finish: { title: 'Next', text: 'Exercise 8' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice (with pictures) and form completion',
    outcome: 'Wait for the speaker’s final choice when several options are mentioned, and catch a spelled name.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d107-test', title: 'Part 1 · Exercise 7',
          audios: [
            { title: 'Recording 1 · Questions 1–10', src: 'https://drive.google.com/file/d/1HVrb3yLL9t7SHKzZ3uVcJ9aqo9h3u4KB/view', note: 'A Students’ Union interviewer asks a student questions for a survey.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d107-q1', from: 1, instruction: 'Choose the correct letter, **A, B or C**. (Example: What is the survey about? A study methods · B leisure activities · **C eating habits**)', items: [
              { q: 'What is the Students’ Union planning to produce?', options: ['a report', 'a leaflet', 'a newsletter'], answer: 'B' }
            ] },
            { type: 'figure', src: 'assets/lessons/listening/part1/ex07-favourite.jpg', alt: 'Three dishes. A: a bowl of noodles with chopsticks. B: a plate of spaghetti. C: a burger and chips.', caption: 'Question 2 · Pictures A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d107-q2', from: 2, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'What is the student’s favourite food?', options: ['Picture A', 'Picture B', 'Picture C'], answer: 'C' }
            ] },
            { type: 'figure', src: 'assets/lessons/listening/part1/ex07-least.jpg', alt: 'Three dishes. A: a cauliflower. B: a bowl of salad. C: a fish on a plate.', caption: 'Question 3 · Pictures A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d107-q3', from: 3, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'What is his least favourite food?', options: ['Picture A', 'Picture B', 'Picture C'], answer: 'B' },
              { q: 'Which meals does he eat in a day?', options: ['just breakfast', 'just lunch', 'just dinner'], answer: 'C' },
              { q: 'How many eggs does he eat a week?', options: ['none', 'one', 'two'], answer: 'C' },
              { q: 'How often does he eat fresh fruit?', options: ['never', 'very rarely', 'regularly'], answer: 'B' },
              { q: 'What’s his opinion of organic food?', options: ['He thinks it’s a waste of money.', 'He thinks it’s poor quality.', 'He would eat it if he could afford it.'], answer: 'A' }
            ] },
            { type: 'ieGap', id: 'ieb2w1d107-q4', from: 8, layout: 'form', title: 'The Food Survey',
              instruction: 'Complete the form. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'Name (optional): Jamie [[Buckingham]]\nCourse: [[Travel and Tourism|Travel & Tourism|Tourism and Travel]]\nFaculty: Business studies\nYear: [[second|2nd|second year|2nd year|2|two]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1HWOydLsY3u5Jl0okZQoNoYRSBJQOz1QW/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1HWA5lyA7c9Y_cLbbBznNNjqKWXUh_XHi/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
