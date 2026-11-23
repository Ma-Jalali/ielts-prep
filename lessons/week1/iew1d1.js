/* IELTS · Week 1 Day 1 — STARTER PAGE: one stage per skill with an empty activity, ready to fill in Studio
   (or here, by hand). Block types: lessons/_template.js · the Block gallery (Week 1 Day 2) shows each one working.
   Ids (lesson, activities, fields) are the keys of students' saved work: never rename them after students start. */
window.DEC15_LESSON = {
  id: 'iew1d1',
  week: 1, day: 1,
  title: 'Starter page',
  duration: 'About 2 hours',
  journey: 'One stage for each part of the test. Replace this text with what students will be able to do by the end.',
  finish: { title: 'Next', text: 'What comes after this lesson' },
  sections: [
    { id: 'listening', number: '01', minutes: 30, tone: 'teal', art: 'listening',
      title: 'Listening', subtitle: 'Section 1 practice', outcome: 'What students can do after this stage.',
      activities: [
        { id: 'l1', short: 'Before you listen', minutes: 5, grouping: 'Pair', title: 'Before you listen', goal: 'Predict the answers.',
          blocks: [
            { type: 'steps', items: [{ who: 'alone', text: 'Read the questions.' }, { who: 'pair', text: 'Predict the kind of answer for each gap.' }] }
          ] },
        { id: 'l2', short: 'Listen', minutes: 15, grouping: 'Alone', title: 'Listen and answer', goal: 'Complete the notes.',
          blocks: [
            { type: 'listening', title: 'Section 1', source: '', videoId: '', transcripts: [] },
            { type: 'limit', id: 'l2-notes', title: 'Complete the notes', rule: 'ONE WORD AND/OR A NUMBER', max: 1, items: [{ q: 'Question 1 …', accept: ['answer'], model: 'answer' }] }
          ] }
      ] },
    { id: 'reading', number: '02', minutes: 30, tone: 'blue', art: 'reading',
      title: 'Reading', subtitle: 'Passage 1 practice', outcome: 'What students can do after this stage.',
      activities: [
        { id: 'r1', short: 'Read', minutes: 20, grouping: 'Alone', title: 'Read the passage', goal: 'Find the information quickly.',
          blocks: [
            { type: 'passage', id: 'r1-text', title: 'Reading passage', text: 'Paste the passage here.' },
            { type: 'grid', id: 'r1-tfng', title: 'True, False or Not Given?', columns: ['Answer'], options: ['True', 'False', 'Not Given'], rows: ['Statement 1', 'Statement 2'], answers: [['True'], ['Not Given']] }
          ] }
      ] },
    { id: 'writing', number: '03', minutes: 40, tone: 'clay', art: 'writing',
      title: 'Writing', subtitle: 'Task 2 practice', outcome: 'What students can do after this stage.',
      activities: [
        { id: 'w1', short: 'Plan', minutes: 10, grouping: 'Pair', title: 'Plan your essay', goal: 'Decide your position and main ideas.',
          blocks: [
            { type: 'key', title: 'The key idea', points: ['Point one', 'Point two'] },
            { type: 'fields', fields: [{ id: 'w1-pos', label: 'My position', placeholder: 'I agree / disagree because …', rows: 2 }] }
          ] },
        { id: 'w2', short: 'Write', minutes: 30, grouping: 'Alone', title: 'Write your essay', goal: 'Write at least 250 words.',
          blocks: [
            { type: 'fields', fields: [{ id: 'w2-essay', label: 'Your essay', placeholder: 'Start writing here…', rows: 14 }] }
          ],
          answers: { items: [['Model answer', 'Write a model answer here.']] } }
      ] },
    { id: 'speaking', number: '04', minutes: 20, tone: 'plum', art: 'discussion',
      title: 'Speaking', subtitle: 'Part 2 practice', outcome: 'What students can do after this stage.',
      activities: [
        { id: 's1', short: 'Cue card', minutes: 10, grouping: 'Pair', title: 'Speak for two minutes', goal: 'Talk about the topic for 1–2 minutes.',
          blocks: [
            { type: 'cards', title: 'Describe …', items: [{ label: 'You should say:', text: 'what …' }, { text: 'when …' }, { text: 'where …' }, { label: 'and explain', text: 'why …' }] },
            { type: 'language', title: 'Useful language', groups: [{ label: 'Starting', phrases: ['I’d like to talk about …'] }] }
          ] }
      ] }
  ],
  extras: [],
  glossary: []
};
