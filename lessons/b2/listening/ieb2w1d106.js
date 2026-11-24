/* IELTS · Listening · Practise · Part 1 · Exercise 6 — A television repair.
   Source: Listening Section 1 Exercises (Practice No 6); answers and recording script from the teacher's key (folder 06).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d106', week: 1, day: 106,
  title: 'A television repair',
  duration: 'About 20 minutes',
  journey: 'Listen to a woman phoning an electrical repair company about her television. Complete the notes, answer the questions, then choose the right answers.',
  finish: { title: 'Next', text: 'Exercise 7' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note completion, short-answer questions and multiple choice',
    outcome: 'Catch spelled names, addresses and numbers, answer exactly what the question asks, and follow a description of a place.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d106-test', title: 'Part 1 · Exercise 6',
          audios: [
            { title: 'Recording 1 · Questions 1–10', src: 'https://drive.google.com/file/d/1GzssALFPI2-aDfJQIBlDTLWNXYfB53JC/view', note: 'Mrs Douglass phones Sinclair Electrical Services about her TV. The example is played first.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d106-q1', from: 1, layout: 'form', title: 'Sinclair Electrical Services',
              instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 4,   // 4: the house number does not count as a word (135 Park Hill Avenue)
              text: 'Example · Customer called about: Television\nCustomer name: Mrs. [[Douglass]]\nAddress: [[135 Park Hill Avenue|135 Parkhill Avenue|135 Park Hill Ave|135 Parkhill Ave]], Sommerton\nPhone: [[765482|765 482]]' },
            { type: 'ieGap', id: 'ieb2w1d106-q2', from: 4, layout: 'short',
              instruction: 'Answer the questions below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'What is the problem with the TV? [[low volume|volume is low|volume low|the low volume]]\nWhat may have caused the problem? [[a power cut|power cut|the power cut]]\nWhat is the TV make and model number? [[Schneider SW5002|Schneider SW 5002|a Schneider SW5002]]\nHow old is the TV? [[7 years old|seven years old|7 years|seven years|7|seven]]' },
            { type: 'figure', src: 'assets/lessons/listening/part1/ex06-house.jpg', alt: 'Three maps of a road that leaves the High Street and bends to the right. A: the house is on the right of the road, before the bend. B: the house is on the left of the road, before the bend. C: the house is beyond the bend, at the top.', caption: 'Question 8 · Maps A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d106-q3', from: 8, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'Where is the customer’s house?', options: ['Map A', 'Map B', 'Map C'], answer: 'B' },
              { q: 'When will the electrician call at the house?', options: ['Friday afternoon', 'Saturday morning', 'Monday morning'], answer: 'C' },
              { q: 'How did the customer first hear about the repair service?', options: ['from a neighbour', 'from the phone book', 'from the Internet'], answer: 'A' }
            ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1H-bHISN6ZaWXuEKnlfuXCWlydPH0uPHF/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
