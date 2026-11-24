/* IELTS · Listening · Practise · Part 4 · Exercise 11 — Making the most of your memory.
   Source: Listening Section 4 Exercises (Practice No 11); answers and recording script from the teacher's key (Drive folder 11:
   S4-11 a.pdf = answer key, S4-11 Script.pdf = recording script).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d411', week: 1, day: 411, sheet: true, illus: 'books',
  title: 'Making the most of your memory',
  duration: 'About 20 minutes',
  journey: 'Listen to a lecture about how memory works and a study method called PQRST. Complete the notes and sentences, then choose the right chart.',
  finish: { title: 'Next', text: 'Exercise 12' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion, sentence completion and multiple choice',
    outcome: 'Follow the steps of a lecture and pick out the key words for each stage of a process.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d411-test', title: 'Part 4 · Exercise 11',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1F401C_bRkH_HpAv2dwOf5i55EFJ_KAlT/view', note: 'A lecturer explains how memory works and how to remember what you study.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d411-q1', from: 1, layout: 'notes', title: 'Lecture notes',
              instruction: 'Complete the lecture notes. Use **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '# The five main memory systems:\n- Encoding\n- [[storage|storage system|the storage system]]\n- Retrieval\n- [[verbal|verbal memory]]\n- visual\n# PQRST stands for:\n- [[Preview]]\n- Question\n- Read\n- [[State]]\n- Test' },
            { type: 'ieGap', id: 'ieb2w1d411-q2', from: 5, layout: 'sentences',
              instruction: 'Complete the sentences. Use **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'Before reading an article, you should look [[through it quickly]].\nWhen you have read an article carefully, you should [[review the contents]].\n‘Implicit memory’ allows us to learn information without [[paying attention]] to it.\nFor this system to work efficiently, it is essential not to [[make any mistakes|make mistakes]].\nIt is better to test yourself on things you [[know well]].' },
            { type: 'figure', src: 'assets/lessons/listening/part4/ex11-chart.jpg', alt: 'Three bar charts comparing a control group with a group of mice kept in luxury. The luxury group has more brain cells by 15% in chart A, 24% in chart B and 40% in chart C.', caption: 'Question 10 · Charts A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d411-q3', from: 10, instruction: 'Choose the correct letter, **A–C**.', items: [
              { q: 'Which chart shows the percentage increase in brain cells of the mice who lived in luxury?', options: ['Chart A: 15%', 'Chart B: 24%', 'Chart C: 40%'], answer: 'A' }
            ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1F4jyGEqNyGVVAnRzJXHygojbzLVbG0xq/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1F4eeZYVgYh5zH7mYNGcqShQfNXobz-Ny/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a> — it is under “Focus on listening 2”.' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
