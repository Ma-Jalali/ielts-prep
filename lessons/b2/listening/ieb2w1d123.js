/* IELTS · Listening · Practise · Part 1 · Exercise 23 — Volunteering for the environment.
   Replaces the earlier Exercise 23 (its recordings could not be streamed from Google Drive).
   Source: the teacher's folder (IELTS Intermediate Workbook, Unit 5 "The world in our hands", Listening Section 1, Scan 17);
   recording "IELTS Int. WB Tr6"; answers from the folder's Answer Keys.docx. There is no recording script, so the page
   has no script section. New block ids (a1, b1), so nothing written for the old exercise is shown here.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d123', week: 1, day: 123, sheet: true, illus: 'eco',
  title: 'Volunteering for the environment',
  duration: 'About 20 minutes',
  journey: 'A man asks at a volunteer agency about environmental projects, and then hears about three wildlife organisations. Before you play, look at Questions 1–6: which one needs only a number?',
  finish: { title: 'Next', text: 'Exercise 24' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note and table completion',
    outcome: 'Predict which gaps need a number, a word or a name, then follow a conversation from notes into a table.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 20, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read all the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d123-test', title: 'Part 1 · Exercise 23',
          audios: [
            { title: 'Recording · Questions 1–10', src: 'https://drive.google.com/file/d/1ADo0FzBMspItDeXKeK2DcUu_1-fGsYqP/view', note: 'A man asks a volunteer agency about environmental projects.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d123-a1', from: 1, layout: 'notes', title: 'The Volunteer Agency',
              instruction: 'Complete the notes below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              text: '- has recruited [[130,000|130000|130 000]] people for environmental projects\n- project abroad involves doing [[diving]] or going into the rain forest\n- major project for dealing with [[litter]] in the countryside\n- project for improving conditions for [[cyclists]]\n- [[City Farms|city farm|city farms]] projects in urban areas\n- some projects do not have any [[paid staff]]' },
            { type: 'ieTable', id: 'ieb2w1d123-b1', from: 7,
              instruction: 'Complete the table below. Write **ONE WORD** for each answer.', rule: 'ONE WORD', max: 1,
              columns: ['Name of organisation', 'Numbers', 'Example volunteer activity'],
              rows: [
                ['Wildlife Link', '24,000 volunteers', 'getting information about [[species]] of wildlife'],
                ['Wildlife Watch', '300 [[groups]]', 'doing administrative work'],
                ['[[Action]] Earth', '908 projects', 'building [[fences]] and walls']
              ] }
          ]
        }] }
    ]
  }],
  extras: [],
  glossary: []
};
