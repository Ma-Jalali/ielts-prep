/* IELTS · Reading · Learn · Lesson 2 — Completion tasks: the method.
   Source: the teacher's training notes "Reading" (RAD TIME), pages 2–3: the rules for copying answers, "too general"
   and "repeated words", and the four steps; rewritten, with new examples where the originals were unclear.
   Note: numbers may be written as figures or words in IELTS, so the old "three → 3" rule is replaced.
   Ids (lesson, activities) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w2d2', week: 2, day: 2, sheet: true, illus: 'grad',
  title: 'Completion tasks: the method',
  duration: 'About 45 minutes',
  journey: 'Half of the Reading test asks you to complete gaps with words from the passage. Learn the golden rules for copying an answer, the three mistakes that lose most marks, and a four-step method that works for every completion task.',
  finish: { title: 'Next', text: 'Short answers, notes and tables' },
  learn: {
    tags: ['Completion tasks', 'The four steps'],
    jump: [['xl-rules', 'The rules', 'list'], ['xl-mistakes', 'Three mistakes', 'warn'], ['xl-steps', 'Four steps', 'target'], ['xl-try', 'Try it', 'pen']],
    blocks: [
      { type: 'note', tone: 'info', title: 'Find answers. Do not make them.', text: 'In a completion task, every answer is **already written in the passage**. Your job is to find the right words and copy them exactly: you may leave words out, but you may not change them.' },
      { type: 'table', anchor: 'xl-rules', kicker: 'The golden rules', title: 'Copy the words exactly', intro: 'Each row shows a word in the passage and an answer that loses the mark.', wide: true,
        head: ['In the passage', 'Wrong answer', 'The rule'],
        rows: [
          ['TV', '~~television~~', 'Do not change the word.'],
          ['by the river', '~~near the river~~', 'Do not use a synonym, even with the same meaning.'],
          ['car', '~~cars~~', 'Do not change the grammar.'],
          ['development', '~~develop~~', 'Do not change the part of speech.'],
          ['a great sunny day', '~~a sunny great day~~', 'Do not change the order.']],
        foot: 'One exception: **numbers**. You can write *three* or *3*, and both are right.' },
      { type: 'tabs', kicker: 'Leaving words out', title: 'How many words can you take?',
        items: [
          { label: 'The passage', icon: 'book', blocks: [
            { type: 'text', text: '*Yesterday Jack bought a **really beautiful modern car**, two Japanese **scooters** and an **iPhone**.*' },
            { type: 'note', tone: 'tip', text: 'The instructions say **NO MORE THAN THREE WORDS AND/OR A NUMBER**. Open each question to see which answers work.' }] },
          { label: 'Question 1', icon: 'pen', blocks: [
            { type: 'text', text: 'Jack bought a ______ yesterday.' },
            { type: 'reveal', items: [{ q: 'Which answers are right?', a: '*car*, *modern car* and *beautiful modern car* are all right. *really beautiful modern car* is wrong: it has **four** words.' }] }] },
          { label: 'Question 2', icon: 'pen', blocks: [
            { type: 'text', text: 'Jack bought a **nice** ______ yesterday.' },
            { type: 'reveal', items: [{ q: 'Which answers are right?', a: '*car* or *modern car*. Not *beautiful modern car*: *nice* already means *beautiful*, so you would say it twice.' }] }] },
          { label: 'Question 3', icon: 'pen', blocks: [
            { type: 'text', text: 'Jack bought a **high-tech** ______ yesterday.' },
            { type: 'reveal', items: [{ q: 'Which answer is right?', a: 'Only *car*. *High-tech* already means *modern*.' }] }] }
        ] },
      { type: 'tabs', anchor: 'xl-mistakes', kicker: 'Three mistakes', title: 'The mistakes that lose most marks',
        items: [
          { label: 'Too general', icon: 'warn', lead: 'An answer must be **specific**. Copy the words that make it exact.', blocks: [
            { type: 'table', wide: true, head: ['Too general', 'Specific: right'], rows: [
              ['… ~~birds~~ are becoming extinct.', '… ==North African birds== are becoming extinct.'],
              ['Scientists are doing research on a bird in a ~~tunnel~~.', 'Scientists are doing research on a bird in a ==wind tunnel==.'],
              ['To succeed on this course, you need to ~~study~~.', 'To succeed on this course, you need to ==study regularly==.']] }] },
          { label: 'Repeated words', icon: 'repeat', lead: 'Do **not** write words that are already in the question.', blocks: [
            { type: 'table', wide: true, head: ['Question', 'Wrong', 'Right'], rows: [['$ ______', '~~$15~~', '15'], ['______ percent', '~~33%~~', '33'], ['that ______', '~~that book~~', 'book']] },
            { type: 'reveal', title: 'Find the problem', intro: 'Each answer has the right information but loses the mark. Why? (NO MORE THAN FOUR WORDS AND/OR A NUMBER)', items: [
              { q: 'This bird can have an hourly flight speed of **50 km per hour**.', a: '*hourly* already means *per hour*. Write only **50 km**.' },
              { q: 'A **local business** in this area is looking for new employees.', a: '*in this area* already means *local*. Write only **business**.' },
              { q: 'You need to achieve **over 7.0** in IELTS or above.', a: '*or above* already means *over*. Write only **7.0**.' }] }] },
          { label: 'Wrong grammar', icon: 'abc', lead: 'The finished sentence must be **grammatically correct**. The words around the gap tell you what kind of word you need.', blocks: [
            { type: 'text', text: '*Passage: Although the council spent less **money** last year, its high **costs** remain alarming.*' },
            { type: 'reveal', items: [
              { q: 'The council’s ______ **are** still alarming.', a: '**costs** (or *high costs*): *are* needs a plural noun.' },
              { q: 'The **amount of** ______ the council spent went down.', a: '**money**: *amount of* needs an uncountable noun.' }] }] }
        ] },
      { type: 'steps', anchor: 'xl-steps', kicker: 'The method', title: 'Four steps for every completion task',
        items: [
          { t: 'Find out what the passage is about (30 seconds to 1 minute)', d: 'Look at the title, any pictures and a few of the questions. Get a general picture of the topic. Do **not** read the whole passage yet.' },
          { t: 'Read ONE question carefully', d: ['**Understand** it: what exactly is it asking?', '**Predict** the answer. *Grammar:* a noun (singular or plural?), an adjective, a verb, a phrase. *Meaning:* a place, a number, a time, a person, an animal, an object …', '**Choose words you can trust**: words that cannot change, such as names, numbers and dates, are easy to find in the passage. Words whose meaning cannot change much are also useful.'] },
          { t: 'Find the PLACE of the answer', d: 'Scan the passage for your trusted words. The answer is almost always in **one sentence**, so find that sentence first.' },
          { t: 'Find the ANSWER carefully', d: 'Read that sentence from the **beginning to the end**, more than once if you need to. Use **grammar**, **meaning** and **the question** to choose the words. Then check: the word limit, the grammar, no repeated words, not too general, and the spelling.' }] },
      { type: 'note', tone: 'tip', title: 'Most answers come in passage order', text: 'In most completion tasks, the answer to Question 2 comes after the answer to Question 1. If you cannot find an answer, look between the answers before and after it.' },
      { type: 'chips', kicker: 'Predict', title: 'What kind of answer?', intro: 'Before you look at the passage, decide what the gap needs.',
        groups: [{ label: 'Grammar', items: ['noun (singular)', 'noun (plural)', 'uncountable noun', 'adjective', 'verb', 'phrase'] }, { label: 'Meaning', items: ['a place', 'a number', 'a time or date', 'a person', 'an animal', 'an object', 'a reason', 'an amount'] }] },
      { type: 'reveal', anchor: 'xl-try', kicker: 'Try it', title: 'Predict, find and copy', intro: 'Complete each sentence with **NO MORE THAN THREE WORDS AND/OR A NUMBER** from the passage. Think first, then tap.',
        items: [
          { q: 'The meeting is in the ______.\n*Passage: Our meeting is next week on Monday evening, beginning at around 7 pm.*', a: '**evening**. *In the* needs a part of the day: *in the evening*.' },
          { q: 'Somebody has broken the window on ______.\n*Passage: I don’t know whether the window was broken by accident or whether somebody had a particular purpose in breaking it.*', a: '**purpose**. *On purpose* means deliberately; *on accident* is not correct English.' },
          { q: 'Dr Anderson lives in a ______ near the lake.\n*Passage: Dr Anderson’s home is a small stone cottage close to the lake.*', a: '**small stone cottage** (or *cottage*, *stone cottage*). *Near* = *close to*.' },
          { q: 'Every summer, the family goes on a ______ abroad.\n*Passage: Each year the Browns take a two-week trip to another country in July.*', a: '**two-week trip** (or *trip*). *Two-week* has a hyphen, so it counts as one word.' }] }
    ]
  },
  sections: [{
    id: 'learn', number: '02', minutes: 45, tone: 'blue', art: 'reading',
    title: 'Completion tasks: the method', subtitle: 'Rules, mistakes and four steps',
    outcome: 'Copy answers correctly and use four steps for every completion task.',
    activities: [
      { id: 'tips', short: 'Rules', minutes: 25, grouping: 'Alone', title: 'Learn the rules and the mistakes', goal: 'Read the golden rules and the three common mistakes.', blocks: [{ type: 'text', title: 'Rules', text: 'The golden rules and the three common mistakes.' }] },
      { id: 'practise', short: 'Method', minutes: 20, grouping: 'Alone', title: 'Learn the four steps and try them', goal: 'Learn the four steps and try the examples.', blocks: [{ type: 'text', title: 'Method', text: 'The four steps and the examples.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
