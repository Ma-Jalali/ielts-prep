/* IELTS · Listening · Practise · Part 4 · Exercise 8 — The Fayum portraits.
   Source: Listening Section 4 Exercises (Practice No 8); answers and recording script from the teacher's key (folder 08, S4-8.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d408', week: 1, day: 408, sheet: true, illus: 'arts',
  title: 'The Fayum mummy portraits',
  duration: 'About 20 minutes',
  journey: 'Listen to an art history lecture on the Fayum portraits of ancient Egypt and how scientists rebuilt two of the faces. Complete the sentences and answer the multiple-choice questions.',
  finish: { title: 'Next', text: 'Exercise 9' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Sentence completion and multiple choice',
    outcome: 'Follow the history of an object in a lecture, then compare two things the speaker describes in detail.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d408-test', title: 'Part 4 · Exercise 8',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1FC2cynpOjC9eQk5DDy63WiPC3Ir1PK7t/view', note: 'A lecturer explains where the Fayum portraits came from and compares two of them with clay models of the faces.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d408-q1', from: 1, layout: 'sentences',
              instruction: 'Complete the sentences below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'After 322 BC, many people came from [[Greece]] to settle in the Fayum.\nThe new inhabitants of the Fayum introduced the custom of placing a picture [[over the face]] of the mummy.\nThe pictures were made of coloured [[wax]] spread onto a wooden board.\nWilliam Petrie believed the pictures were painted [[in the lifetime|during the lifetime|in the life|during the life]] of the person.\nHe said the pictures were unusual because of their [[realistic|more realistic]] style.\nThe pictures may have originally been displayed [[in the houses|inside the houses]] of the people they showed.' },
            { type: 'ieChoice', id: 'ieb2w1d408-q2', from: 7,
              instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'The reconstructions of the faces were mainly based on', options: ['the original portraits of the mummies.', 'models of the skulls of the mummies.', 'the X-rays of the mummies.'], answer: 'B' },
                { q: 'In the man’s portrait, the dark shadow around his chin', options: ['would make him identifiable as an individual.', 'suggests the artist was not trying to flatter him.', 'shows this is a different person from the reconstruction.'], answer: 'A' },
                { q: 'The portrait of the woman', options: ['has unusual features for a woman.', 'suggests a particularly strong personality.', 'is very similar to the model.'], answer: 'C' },
                { q: 'The speaker concludes that both portraits', options: ['are individual adaptations of a standard.', 'were probably painted by the same person.', 'are rather untypical of their genre.'], answer: 'A' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1FCEBxHBLXioqdgm0iyYWpHMOafbeIqjk/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
