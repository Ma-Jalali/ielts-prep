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
    jump: [['xl-rules', 'The rules', 'list'], ['xl-limit', 'Word limits', 'hash'], ['xl-mistakes', 'Three mistakes', 'warn'], ['xl-steps', 'Four steps', 'target'], ['xl-try', 'Try it', 'pen'], ['xl-sum', 'Remember', 'ok']],
    blocks: [
      { type: 'key', title: 'The golden rule', text: '**Find** answers. Do not **make** them.', sub: 'Every answer is already written in the passage. Copy the words exactly: you may **leave words out**, but you may **never change** them.' },
      { type: 'table', anchor: 'xl-rules', kicker: 'The rules', title: 'Copy the words exactly', intro: 'Each row shows the words in the passage, an answer that **loses the mark**, and the rule it breaks.', wide: true,
        head: ['In the passage', 'Wrong answer', 'The rule'],
        rows: [
          ['TV', '~~television~~', 'Do not change the word.'],
          ['by the river', '~~near the river~~', 'Do not use a synonym, even one with the same meaning.'],
          ['car', '~~cars~~', 'Do not change the grammar.'],
          ['development', '~~develop~~', 'Do not change the part of speech.'],
          ['a great sunny day', '~~a sunny great day~~', 'Do not change the order.']] },
      { type: 'note', tone: 'info', title: 'One exception: numbers', text: 'You can write a number as a word or as figures: *three* and *3* are both right.' },
      { type: 'examples', anchor: 'xl-limit', kicker: 'Word limits', title: 'How many words can you take?', intro: 'The instructions say **NO MORE THAN THREE WORDS AND/OR A NUMBER**. Read the passage, think about each question, then tap to check.', hide: true, cols: 1,
        items: [
          { label: 'Question 1', p: 'Yesterday Jack bought a ==really beautiful modern car==, two Japanese scooters and an iPhone.', q: 'Jack bought a ______ yesterday.', a: 'car · modern car · beautiful modern car', why: 'All three are right. *really beautiful modern car* is wrong: it has **four** words.' },
          { label: 'Question 2', p: 'Yesterday Jack bought a really ==beautiful== modern car, two Japanese scooters and an iPhone.', q: 'Jack bought a **nice** ______ yesterday.', a: 'car · modern car', why: 'Not *beautiful modern car*: *nice* already means *beautiful*, so you would say it twice.' },
          { label: 'Question 3', p: 'Yesterday Jack bought a really beautiful ==modern== car, two Japanese scooters and an iPhone.', q: 'Jack bought a **high-tech** ______ yesterday.', a: 'car', why: '*High-tech* already means *modern*, so only *car* is left.' }] },
      { type: 'tabs', anchor: 'xl-mistakes', kicker: 'Three mistakes', title: 'The mistakes that lose most marks', intro: 'Your answer can contain the right information and **still** lose the mark. These are the three reasons why.',
        items: [
          { label: 'Too general', icon: 'warn', lead: 'An answer must be **specific**. Copy the words that make it exact.', blocks: [
            { type: 'table', wide: true, head: ['Too general: wrong', 'Specific: right'], rows: [
              ['… ~~birds~~ are becoming extinct.', '… ==North African birds== are becoming extinct.'],
              ['Scientists are studying a bird in a ~~tunnel~~.', 'Scientists are studying a bird in a ==wind tunnel==.'],
              ['To succeed on this course, you need to ~~study~~.', 'To succeed on this course, you need to ==study regularly==.']] }] },
          { label: 'Repeated words', icon: 'repeat', lead: 'Do **not** write words that are already in the question.', blocks: [
            { type: 'table', wide: true, head: ['Question', 'Wrong', 'Right'], rows: [['$ ______', '~~$15~~', '15'], ['______ percent', '~~33%~~', '33'], ['that ______', '~~that book~~', 'book']] },
            { type: 'examples', title: 'Find the problem', intro: 'Each answer has the right information but loses the mark. Why? Tap to check.', hide: true, aLabel: 'Write only', qLabel: 'Answer given',
              items: [
                { q: 'This bird can have an **hourly** flight speed of ==50 km per hour==.', a: '50 km', why: '*Hourly* already means *per hour*.' },
                { q: 'A ==local business== **in this area** is looking for new employees.', a: 'business', why: '*In this area* already means *local*.' },
                { q: 'You need to achieve ==over 7.0== in IELTS **or above**.', a: '7.0', why: '*Or above* already means *over*.' }] }] },
          { label: 'Wrong grammar', icon: 'abc', lead: 'The finished sentence must be **grammatically correct**. The words around the gap tell you what kind of word you need.', blocks: [
            { type: 'examples', hide: true, items: [
              { p: 'Although the council spent less ==money== last year, its high ==costs== remain alarming.', q: 'The council’s ______ **are** still alarming.', a: 'costs (or high costs)', why: '*Are* needs a **plural** noun.' },
              { p: 'Although the council spent less ==money== last year, its high ==costs== remain alarming.', q: 'The **amount of** ______ the council spent went down.', a: 'money', why: '*Amount of* needs an **uncountable** noun.' }] }] }
        ] },
      { type: 'steps', anchor: 'xl-steps', kicker: 'The method', title: 'Four steps for every completion task', intro: 'Use these four steps for **every** gap-fill question in the test.',
        items: [
          { t: 'Find out what the passage is about · 30 seconds to 1 minute', d: 'Look at the **title**, any **pictures** and a **few of the questions**. Get a general picture of the topic. Do **not** read the whole passage yet.' },
          { t: 'Read ONE question carefully', d: ['**Understand** it: what exactly is it asking?', '**Predict** the answer. *Grammar:* a noun (singular or plural?), an adjective, a verb, a phrase. *Meaning:* a place, a number, a time, a person, an object …', '**Choose words you can trust.** Names, numbers and dates cannot change, so they are easy to find in the passage.'] },
          { t: 'Find the PLACE of the answer', d: 'Scan the passage for your trusted words. The answer is almost always in **one sentence**, so find that sentence first.' },
          { t: 'Find the ANSWER carefully', d: 'Read that sentence from the **beginning to the end**, more than once if you need to. Use **grammar**, **meaning** and **the question** to choose the words.' }] },
      { type: 'chips', kicker: 'Before you go to the passage', title: 'Predict: what kind of answer?', intro: 'Look at the words around the gap and decide **two** things.',
        groups: [{ label: '1 · Grammar: what kind of word?', items: ['noun (singular)', 'noun (plural)', 'uncountable noun', 'adjective', 'verb', 'phrase'] }, { label: '2 · Meaning: what kind of thing?', items: ['a place', 'a number', 'a time or date', 'a person', 'an animal', 'an object', 'a reason', 'an amount'] }] },
      { type: 'note', tone: 'tip', title: 'Most answers come in passage order', text: 'In most completion tasks, the answer to Question 2 comes **after** the answer to Question 1. If you cannot find an answer, look **between** the answers before and after it.' },
      { type: 'examples', anchor: 'xl-try', kicker: 'Try it', title: 'Predict, find and copy', intro: 'Use **NO MORE THAN THREE WORDS AND/OR A NUMBER** from the passage. Predict the answer first, then tap to check.', hide: true,
        items: [
          { p: 'Our meeting is next week on Monday ==evening==, beginning at around 7 pm.', q: 'The meeting is in the ______.', a: 'evening', why: '*In the* needs a part of the day: *in the evening*.' },
          { p: 'I don’t know whether the window was broken by accident, or whether somebody had a particular ==purpose== in breaking it.', q: 'Somebody broke the window on ______.', a: 'purpose', why: '*On purpose* = deliberately. (*On accident* is not correct English.)' },
          { p: 'Dr Anderson’s home is a ==small stone cottage== close to the lake.', q: 'Dr Anderson lives in a ______ near the lake.', a: 'small stone cottage', why: '*Near* = *close to*. *Cottage* and *stone cottage* are also right.' },
          { p: 'Each year the Browns take a ==two-week trip== to another country in July.', q: 'Every summer, the family goes on a ______ abroad.', a: 'two-week trip', why: '*Two-week* has a hyphen, so it counts as **one** word. *Trip* is also right.' }] },
      { type: 'recap', anchor: 'xl-sum', title: 'The checklist for every gap',
        items: ['Copy the words **exactly**: no synonyms, no new grammar, no new order.', 'Keep to the **word limit**. A hyphenated word counts as one.', 'Be **specific**: keep the words that make the answer exact.', 'Do **not** repeat words that are already in the question.', 'The sentence must be **grammatically correct** with your answer in it.', 'Check your **spelling**.'] }
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
