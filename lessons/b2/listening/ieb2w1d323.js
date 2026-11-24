/* IELTS · Listening · Practise · Part 3 · Exercise 23 — John Gould and his bird prints.
   Source: Listening Section 3 Exercises (Practice No 23); answers from the teacher's key (folder 23, Answer Keys.txt).
   The folder has no recording script; the answers and the split between the tracks (Track 10: Questions 1–6, Track 11:
   Questions 7–10, as the narrator announces) were checked by listening to the recordings.
   Questions 1–3 may be answered in any order, so each of those gaps accepts any of the three professions.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d323', week: 1, day: 323, sheet: true, illus: 'arts',
  title: 'John Gould and his bird prints',
  duration: 'About 20 minutes',
  journey: 'Listen to a discussion about John Gould, the naturalist who published famous pictures of Australian birds, and how his prints were made. List his professions, complete the timeline and answer questions about lithography.',
  finish: { title: 'Next', text: 'Exercise 24' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Listing, table completion and short answers',
    outcome: 'Pick out a list of facts about one person, follow dates in order and catch the details of a process.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d323-test', title: 'Part 3 · Exercise 23',
          audios: [
            { title: 'Recording 1 · Questions 1–6', src: 'https://drive.google.com/file/d/1EtDNm8u8OB9YkbumfbVCwtbUGe6TIFhn/view', note: 'John Gould’s life and work, from gardener to author of a famous book.' },
            { title: 'Recording 2 · Questions 7–10', src: 'https://drive.google.com/file/d/1Ev7UjwFCp0lGjQpZacuMnAj1BUFf4qrb/view', note: 'How Gould’s pictures were printed and coloured.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d323-q1', from: 1, layout: 'notes', title: 'John Gould’s professions',
              instruction: 'List **THREE** of John Gould’s professions, in any order. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '- [[artist|an artist|businessman|a businessman|scientist|a scientist]]\n- [[businessman|a businessman|artist|an artist|scientist|a scientist]]\n- [[scientist|a scientist|artist|an artist|businessman|a businessman]]' },
            { type: 'ieTable', id: 'ieb2w1d323-q2', from: 4,
              instruction: 'Complete the table below. Write **NO MORE THAN THREE WORDS** for each answer. (Question 5 has two gaps: write both words, for example “… and …”.)', rule: 'NO MORE THAN THREE WORDS', max: 3,
              columns: ['Date', 'Event'],
              rows: [
                ['1804', 'Gould was born'],
                ['1920s', 'Worked as a gardener and then in a [[zoological museum|museum]]'],
                ['1838', 'Sailed to Australia'],
                ['1838–40', 'Gould [[discovered and named|discovered, named|discovered named]] many new species'],
                ['1840', 'Returned to England'],
                ['1848', 'Published book entitled [[Birds of Australia]]']
              ] },
            { type: 'ieGap', id: 'ieb2w1d323-q3', from: 7, layout: 'short',
              instruction: 'Answer the following questions. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'What part of the animals could be effectively reproduced using lithography? [[fur and feather|fur and feathers]]\nWhat did Gould use to make the first drawing on limestone? [[wax crayon|a wax crayon]]\nHow were the prints coloured? [[by hand]]\nHow many prints did Gould produce of each picture? [[250|250 of each]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The answer key for this exercise is in the teacher’s key. <a href="https://drive.google.com/file/d/1Eu9cQG-dvaRLj0ifejGDob1XCdGb-Pp3/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
