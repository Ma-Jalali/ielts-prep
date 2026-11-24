/* IELTS · Listening · Practise · Part 2 · Exercise 11 — The golden rules of listening.
   Source: Listening Section 2 Exercises (Practice No 11); answers from the teacher's key (folder 11, S2-11 a.pdf, Unit 12
   Focus on listening 1) and the recording script (S2-11.pdf). The paper numbers this exercise 1–10.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d211', week: 1, day: 211, sheet: true, illus: 'radio',
  title: 'The golden rules of listening',
  duration: 'About 20 minutes',
  journey: 'Listen to the first programme in a radio series on communication skills, in which the presenter gives her golden rules for listening well. Choose the two topics the series will cover, then complete the notes.',
  finish: { title: 'Next', text: 'Exercise 12' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple-answer question and note completion',
    outcome: 'Pick out the main points of a short talk and note each piece of advice in a few words.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d211-test', title: 'Part 2 · Exercise 11',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1G2FTHfbFZ4uFtAqJzNczml4XRvtPSWjX/view', note: 'A radio presenter introduces a new series on communication and gives her rules for good listening.' }
          ],
          blocks: [
            { type: 'ieMulti', id: 'ieb2w1d211-q1', from: 1, pick: 2,
              instruction: 'Circle **TWO** letters **A–F**.',
              q: 'Which TWO topics will be covered in the programmes?',
              options: ['taking notes in a lecture', 'taking part in a discussion', 'writing a letter of enquiry', 'preparing a job application', 'understanding body language', 'complaining on the telephone'],
              answers: ['B', 'E'] },
            { type: 'ieGap', id: 'ieb2w1d211-q2', from: 3, layout: 'notes', title: 'The golden rules of listening',
              instruction: 'Complete the notes below. Use **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '- Stop talking.\n- Make a special effort to listen carefully when situation is [[familiar]].\n- Relax – listening less effective when you’re [[tense and anxious|tense or anxious|tense and/or anxious|tense/anxious|tense|anxious|feeling tense|feeling anxious|feeling tense/anxious]].\n- Make it clear speaker has your [[full attention]].\n- If you need [[to make notes|make notes]], explain what you are doing and why.\n- Try not to let personal prejudices influence [[your judgement|your judgment|judgement|judgment]].\n- Listen with reason and with [[feeling]].\n- Your aim is to understand, not to [[win an argument|win argument]].\n- Be aware of what speaker [[is not saying|isn’t saying|does not say|doesn’t say]].' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1G3u8ULohegRUvCIzoi8AD43d88Ke08Ak/view" target="_blank" rel="noopener">Open the script (Google Drive)</a> · <a href="https://drive.google.com/file/d/1G4G3tFgFLBYv6ivX49QrUzoBi2wuEldC/view" target="_blank" rel="noopener">Open the answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
