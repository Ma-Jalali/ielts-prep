/* IELTS · Reading · Learn · Lesson 1 — Reading overview.
   A Learn lesson on one page (js/sheet.js, learnPage). Source: the teacher's training notes "Reading" (RAD TIME), page 1:
   the test, the passages, how to improve; rewritten and extended (the two families of questions, a map of the question
   types, timing, the answer sheet and an error log). The band tables are the usual IELTS conversion.
   Ids (lesson, activities) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w2d1', week: 2, day: 1, sheet: true, illus: 'books',
  title: 'Reading overview',
  duration: 'About 40 minutes',
  journey: 'How the IELTS Reading test works: the passages, the timing, the marking and the two big families of questions. Then a plan to improve your reading, so that every lesson after this one has a place to fit.',
  finish: { title: 'Next', text: 'Completion tasks: the method' },
  learn: {
    tags: ['40 questions', '60 minutes'],
    jump: [['xl-test', 'The test', 'list'], ['xl-types', 'Question types', 'hash'], ['xl-score', 'Scores', 'star'], ['xl-better', 'Improve', 'target'], ['xl-check', 'Check yourself', 'ok']],
    blocks: [
      { type: 'facts', kicker: 'At a glance', title: 'The test in five numbers',
        items: [['60', 'minutes for everything, **including** writing your answers'], ['40', 'questions: one mark each, and **no** minus marks'], ['3', 'passages, each a little harder than the one before'], ['0', 'extra minutes to copy answers: write them as you go'], ['20', 'minutes for each passage is a good plan']] },
      { type: 'tabs', anchor: 'xl-test', kicker: 'The test', title: 'Academic or General Training?', intro: 'Both versions have 40 questions in 60 minutes and the same types of question. The texts are different.',
        items: [
          { label: 'Academic', icon: 'book', blocks: [
            { type: 'parts', items: [
              { n: 1, label: 'Passage 1', icon: 'book', qs: '13–14 questions', who: 'One long passage', what: 'A factual text on a general academic topic.', eg: 'the history of a product, an animal, a city' },
              { n: 2, label: 'Passage 2', icon: 'list', qs: '13–14 questions', who: 'One long passage', what: 'Often a text that describes or explains, sometimes with several points of view.', eg: 'a new technology, a social trend' },
              { n: 3, label: 'Passage 3', icon: 'lecture', qs: '13–14 questions', who: 'One long passage', what: 'The longest and hardest: arguments, opinions and abstract ideas.', eg: 'a research study, a debate in science' }],
              foot: 'The texts come from books, journals, magazines and newspapers. Together they are about **2,150–2,750 words**.' },
            { type: 'note', tone: 'tip', title: 'Your target for band 7', text: 'Band 7 needs **30 out of 40**, so you can lose about 10 marks: roughly **3** in Passage 1, **3** in Passage 2 and **4** in Passage 3.' }] },
          { label: 'General Training', icon: 'people', blocks: [
            { type: 'parts', items: [
              { n: 1, label: 'Section 1', icon: 'list', qs: '13–14 questions', who: 'Two or three very short texts', what: 'Everyday life: adverts, notices, brochures, timetables, instructions.', eg: 'a leaflet about a sports centre' },
              { n: 2, label: 'Section 2', icon: 'people', qs: '13–14 questions', who: 'One or two short texts', what: 'Work: job descriptions, contracts, staff training, workplace rules.', eg: 'a guide for new staff at a hotel' },
              { n: 3, label: 'Section 3', icon: 'book', qs: '13–14 questions', who: 'One long passage', what: 'A longer text on a topic of general interest.', eg: 'a magazine article about sleep' }] },
            { type: 'note', tone: 'tip', title: 'Your target for band 6.5', text: 'In General Training you need more correct answers for the same band: about **32–33 out of 40** for 6.5, and **34–35** for 7.' }] }
        ] },
      { type: 'cards', anchor: 'xl-types', kicker: 'Two families', title: 'Every question is one of two kinds', cols: 2,
        items: [
          { icon: 'pen', t: 'Completion tasks: you write', d: 'You copy **words from the passage** into a gap: short answers, notes, tables, flow charts, sentences, summaries and diagrams. You must **find** answers, not **make** them.' },
          { icon: 'list', t: 'Selection tasks: you choose', d: 'You choose from what is given: TRUE / FALSE / NOT GIVEN, matching, headings and multiple choice. You write a letter, a number or a word from a list.' }] },
      { type: 'table', kicker: 'The question types', title: 'A map of the question types', intro: 'Each training lesson teaches one family. The last column matters a lot: when the answers are **in passage order**, each answer comes after the one before it.',
        head: ['Question type', 'You…', 'In passage order?', 'Lesson'], wide: true,
        rows: [
          ['Short-answer questions', 'write words from the passage', 'Yes', '3'],
          ['Note, table and flow-chart completion', 'write words from the passage', 'Not always', '3'],
          ['TRUE / FALSE / NOT GIVEN, YES / NO / NOT GIVEN', 'choose one of three answers', 'Yes', '4'],
          ['Sentence completion', 'write words, or choose an ending from a box', 'Yes', '5'],
          ['Summary completion', 'write words, or choose from a box', 'Mostly', '6'],
          ['Matching names and classification', 'choose a letter from a list', 'No', '7'],
          ['Which paragraph contains…?', 'choose a paragraph letter', 'No', '7'],
          ['Matching headings', 'choose a heading for each paragraph', 'Paragraph by paragraph', '8'],
          ['Multiple choice', 'choose one or more letters', 'Yes', '9'],
          ['Diagram labelling', 'write words from the passage', 'No: a small area', '10']] },
      { type: 'tabs', anchor: 'xl-score', kicker: 'Scores', title: 'From marks to a band score', intro: 'Every correct answer is one mark. Your marks out of 40 become a band from 1 to 9. The numbers can change a little from one test to another.',
        items: [
          { label: 'Academic', icon: 'book', blocks: [
            { type: 'table', head: ['Correct answers', 'Band'], rows: [['39–40', '9'], ['37–38', '8.5'], ['35–36', '8'], ['33–34', '7.5'], ['==30–32==', '==7=='], ['27–29', '6.5'], ['23–26', '6'], ['19–22', '5.5'], ['15–18', '5']] }] },
          { label: 'General Training', icon: 'people', blocks: [
            { type: 'table', head: ['Correct answers', 'Band'], rows: [['40', '9'], ['39', '8.5'], ['37–38', '8'], ['36', '7.5'], ['34–35', '7'], ['==32–33==', '==6.5=='], ['30–31', '6'], ['27–29', '5.5'], ['23–26', '5']] }] }
        ] },
      { type: 'steps', anchor: 'xl-better', kicker: 'Improve', title: 'Five ways to a better score',
        items: [
          { t: 'Read as much as you can', d: 'Read every day, for 20 minutes or more: news, science magazines, long articles on topics you like. Speed and vocabulary grow from the amount you read.' },
          { t: 'Build good reading habits', d: ['Read groups of words, not one word at a time.', 'Do not say the words in your head or move your lips.', 'Do not stop at every word you do not know: guess from the context and keep going.'] },
          { t: 'Learn the question types', d: 'There are about 14 types of question, and each one has its own strategy. That is what these training lessons are for.' },
          { t: 'Grow your vocabulary', d: 'The questions **paraphrase** the passage: they say the same thing in other words. Learn synonyms and word families (*develop, development, developed*).' },
          { t: 'Be your own doctor', d: 'After every practice test, look at **your time** and **your mistakes**. Find out why you lost each mark, then fix that problem first.' }] },
      { type: 'folds', kicker: 'Good to know', title: 'Before the test',
        items: [
          { icon: 'clock', title: 'Plan your time', sub: 'About 20 minutes per passage', blocks: [
            { type: 'table', head: ['Passage', 'Minutes', 'Why'], rows: [['1', '17–18', 'The easiest: save time here'], ['2', '20', 'A little harder'], ['3', '22–23', 'The longest and hardest']] },
            { type: 'note', tone: 'warn', text: 'Do not spend five minutes on one question. Mark it, guess, move on, and come back at the end if there is time.' }] },
          { icon: 'eye', title: 'Skimming and scanning', sub: 'Two ways of reading fast', blocks: [
            { type: 'cards', cols: 2, items: [
              { icon: 'eye', t: 'Skimming: for the main idea', d: 'Read the title, the first sentence of each paragraph and any pictures, quickly. Use it at the start: what is this passage about?' },
              { icon: 'target', t: 'Scanning: for one detail', d: 'Look for one name, number, date or key word, without reading every word. Use it to find the **place** of an answer.' }] }] },
          { icon: 'pen', title: 'The answer sheet', sub: 'Small rules that cost marks', blocks: [
            { type: 'list', items: [
              '**Spelling counts.** A misspelled answer is a wrong answer.',
              '**Capital letters do not matter:** *london* and *London* are both right.',
              '**Numbers** can be written as figures or words: *3* or *three*.',
              'A **hyphenated word** counts as one word: *well-known*, *two-thirds*.',
              '**Never leave a gap.** There are no minus marks, so a guess can only help.',
              'On paper, write your answers on the answer sheet as you go: there is **no** extra time at the end.'] }] },
          { icon: 'list', title: 'Keep an error log', sub: 'Your own doctor’s notes', blocks: [
            { type: 'text', text: 'After each practice, write down every mistake and **why** it happened. After a few tests, you will see your biggest problem.' },
            { type: 'table', head: ['Why I lost the mark', 'What to do next time'], rows: [['I could not find the place', 'Choose better key words; trust names, numbers and dates'], ['I did not know a word', 'Learn it with its synonyms'], ['My answer was too general', 'Copy the words that make it specific'], ['My answer did not fit the grammar', 'Check singular / plural and the part of speech'], ['I ran out of time', 'Keep to 20 minutes a passage; guess and move on']] }] }
        ] },
      { type: 'check', anchor: 'xl-check', kicker: 'Check yourself', title: 'True or false?', intro: 'Tap True or False to see the answer.',
        items: [
          { s: 'You get 10 extra minutes at the end to copy your answers onto the answer sheet.', answer: false, why: 'That happens in Listening (on paper), not in Reading. Write your answers as you go.' },
          { s: 'A wrong answer loses you a mark.', answer: false, why: 'There are no minus marks. Always write something.' },
          { s: 'In completion tasks, you can use your own words if the meaning is the same.', answer: false, why: 'You must copy words from the passage, exactly as they are written.' },
          { s: 'Passage 3 is usually the hardest.', answer: true, why: 'Plan more time for it: about 22–23 minutes.' },
          { s: 'For band 7 in Academic Reading you need about 30 correct answers.', answer: true, why: '30–32 out of 40 is usually band 7.' },
          { s: 'Matching headings answers are always in passage order.', answer: false, why: 'You answer paragraph by paragraph, but the headings in the list are in no order.' }] }
    ]
  },
  sections: [{
    id: 'learn', number: '01', minutes: 40, tone: 'blue', art: 'reading',
    title: 'Reading overview', subtitle: 'The test, the scores and how to improve',
    outcome: 'Know how the Reading test works, how it is marked and how to improve.',
    activities: [
      { id: 'tips', short: 'Read', minutes: 35, grouping: 'Alone', title: 'Read the overview', goal: 'Read how the test works and how to improve.', blocks: [{ type: 'text', title: 'Overview', text: 'The test, the question types, the scores and how to improve.' }] },
      { id: 'check', short: 'Check', minutes: 5, grouping: 'Alone', title: 'Check yourself', goal: 'Answer the true or false questions.', blocks: [{ type: 'text', title: 'Check', text: 'Six true or false questions.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
