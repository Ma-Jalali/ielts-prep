/* IELTS · Reading · Learn · Lesson 6 — Summary completion, with and without a box (question types 6 and 7).
   Source: the teacher's training notes "Reading" (RAD TIME), pages 14–17. "Up the Mekong" and "Dinner time, then and
   now" are adapted (rewritten). The third box example now has a passage (the original had none).
   Ids (lesson, activities, exercises, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w2d6', week: 2, day: 6, sheet: true, illus: 'boat',
  title: 'Summary completion',
  duration: 'About 55 minutes',
  journey: 'A short summary of the passage, with gaps. Sometimes you copy the words from the passage, sometimes you choose them from a box. Learn how a summary differs from sentence completion, and how to use grammar and meaning to choose.',
  finish: { title: 'Next', text: 'Matching information' },
  learn: {
    tags: ['Question types 6 and 7'],
    jump: [['xl-tips', 'Tips', 'tip'], ['xl-ex', 'Exercises', 'pen'], ['xl-sum', 'Remember', 'ok']],
    blocks: [
      { type: 'key', title: 'Think of it like this', text: 'A summary is the passage **in fewer words**. Your job is to find **which detail** each gap is talking about.' },
      { type: 'cards', kicker: 'What it is', title: 'Sentences or a summary?', cols: 2,
        items: [
          { icon: 'list', t: 'Sentence completion', d: 'Separate sentences, each about a different point.' },
          { icon: 'book', t: 'Summary completion', d: 'One or two paragraphs: the sentences are **connected** and tell the story of the passage, or of one part of it.' }] },
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'Two kinds of summary',
        items: [
          { label: 'Without a box', icon: 'pen', lead: 'You fill the gaps with words from the passage.', blocks: [
            { type: 'list', items: [
              'The answers are **mostly** in passage order.',
              'The summary is **general**; the passage has a lot of **detail**. Expect paraphrase.',
              'The summary may cover **the whole passage** or only **one part** of it.',
              'Your answers must be **grammatically correct** and must **make sense**.',
              'Check every answer: **grammar**, **meaning**, **no repeated words**, **not too general**.'] },
            { type: 'steps', title: 'What to do', items: [
              { t: 'Check the word limit', d: 'How many words can you use?' },
              { t: 'Read the whole summary quickly', d: 'Get an idea of what it is about, and which part of the passage it covers.' },
              { t: 'Read again, up to the first gap', d: ['**Understand** the sentence.', '**Predict** the type of answer.', '**Choose some words you can trust.**'] },
              { t: 'Find the place in the passage', d: 'Read that sentence from beginning to end, and use **grammar**, **meaning** and **the question** to find the answer.' },
              { t: 'Check your answer', d: 'Read the summary sentence again with your answer in it. Does it sound right?' }] }] },
          { label: 'With a box', icon: 'list', lead: 'You choose the answers from a box of words. There are **more words than gaps**.', blocks: [
            { type: 'text', text: 'This type can be easier than a summary without a box, because **grammar** and **meaning** quickly show which words can fit a gap. But the box is full of traps: words with the same meaning but different grammar, or the same grammar but a slightly different meaning.' },
            { type: 'list', items: [
              'The answers are **mostly** in passage order.',
              'Choose the **closest possible** answer.',
              'Read **all** the options for each gap.',
              'Do not cross out an option you have used. If two options seem possible, note both: a later gap may need one of them. If two are still possible at the end, go back to the passage once more.',
              'If two options mean the same, choose the one that fits the **grammar**. If two fit the grammar, find the **small difference** in meaning and compare it with the passage.'] },
            { type: 'versus', qLabel: 'Summary', options: null, items: [
              { q: 'The financial situation of this travel agency has ______ .', p: 'This travel agency has had 23 per cent more passengers than last year, and its profits are 33 per cent higher.', options: ['increased', 'decreased', 'get better', 'improved', 'decrease'], answer: 3, why: '*Has* needs a past participle, so not *get better* or *decrease*. Profits are higher, so not *decreased*. A **situation** *improves*; it does not *increase*.' },
              { q: 'It is ______ to look around the area before you move to a new home.', p: 'Whenever you plan to move, the first thing to do is to make sure that your new home is in a convenient area.', options: ['important', 'urgent'], answer: 0, why: '*The first thing to do* = it is important. Nothing says it must be done quickly (*urgent*).' },
              { q: 'The company has had some ______ from other local firms.', p: 'Several local businesses have worked together with the company on the project.', options: ['support', 'cooperation'], answer: 1, why: '*Worked together with* = **cooperation**. *Support* is close, but it does not mean working together.' }] }] }
        ] },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'Exercises', title: 'Try them', intro: 'Open an exercise, read the passage and complete the summary. The answers, with the reasons, are folded at the bottom.',
        items: [
          { id: 'ieb2w2d6-e1', title: 'Up the Mekong', kind: 'Summary completion', go: 'Read',
            tip: 'The summary follows the journey in order. Gap 2 is a city, gap 4 is a way of travelling, and gap 7 is the name of a place.',
            passage: { title: 'Up the Mekong', subtitle: 'A journey along the Mekong River', text: 'By the time the Mekong River flows into the South China Sea, it has crossed six countries. On the way it has been worshipped, polluted and purified, and used for trade, both legal and illegal. The Mekong begins in the Tibetan Himalayas and ends in the delta south of Ho Chi Minh City in Vietnam, which is where our journey began. We were heading first for a town called Can Tho, the biggest city in the delta.\n\nTo get there, our car had to cross the Mekong at a place called Binh Minh, where a line of vehicles a kilometre long was waiting to squeeze onto one of four ferries. The river was perhaps 800 metres wide at this point and busy with traffic. On our driver’s advice, we decided to leave the car behind, cross on the first available ferry and wait for the car on the other side.\n\nWe spent most of the ten-minute crossing politely avoiding people selling chewing gum, drinks, fruit and snacks. The ferry arrived on the edge of the town and, as there was no sign of the car, we set off for our hotel on foot.\n\nIn the morning we left for Chau Doc, the last large town before the Cambodian border. The delta was once part of the great Khmer Empire, and it was the last part of Indochina to become part of Vietnam. By mid-morning, the streets of every town were full of schoolchildren going home: primary pupils in white and blue uniforms, and older girls in elegant traditional dress, riding their bicycles slowly and gracefully. It was Teachers’ Day all over Vietnam, when students go to school to thank their teachers with presents and celebrations and then go home again. The main result was a huge blue-and-white traffic jam.\n\nChau Doc looked like a model town. Surrounded by brightly coloured rice fields, with Sam Mountain behind it, it was the perfect market in a wonderfully fertile land.\n\nBuddhism is one of the great religions of Vietnam, and Sam Mountain is an important centre of pilgrimage. The road to the top, with its spectacular view over the fields to the Cambodian border, is steep and winding, but always busy with people on foot. We sat on the wall of a pavilion at the summit, 260 metres above the plain, and watched the sun set over the flooded rice fields, listening to the distant sounds of a village at the foot of the mountain.\n\nWhen it was time to return to the river for the journey to Phnom Penh, there were only four passengers, so instead of the relaxing trip I had imagined, we climbed into a speedboat. At first we went slowly along the canals, and there was time to enjoy the view of houses on stilts, high and dry above the mud. But as soon as we were back on the Mekong, the driver turned up the speed. However wide the river was (and in places it was more than a kilometre), we raced straight towards any boat coming the other way and then, at the last moment, turned sharply to one side! We were all very relieved to reach the border post at Vinh Xuong, where we could get off.' },
            blocks: [{ type: 'ieGap', id: 'ieb2w2d6-e1-q1', from: 1, layout: 'summary', title: 'A journey up the Mekong', instruction: 'Complete the summary below. Choose **NO MORE THAN THREE WORDS** from the passage for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'The Mekong River runs through [[six|6]] countries before it finally reaches the sea. The writer describes a journey up the river, starting from the city of [[Ho Chi Minh]] in the south of Vietnam. At first, they travelled by [[car]] before catching a ferry across the river. From there they went [[on foot]] to their hotel and spent the night there before setting off the next morning for Chau Doc.\n\nThe next day turned out to be a special day for [[teachers]] in Vietnam, so the town was full of [[schoolchildren|students|pupils]]. Not far from Chau Doc is [[Sam Mountain]], which is a major centre for Buddhist pilgrims. The view from the top of the mountain was [[spectacular]], and they could see the Cambodian border in the distance. The last part of their river journey was quite frightening because of the [[speed]] of the boat, so everyone was very relieved when they got off at Vinh Xuong.',
              why: ['*It has crossed six countries.*', '*South of Ho Chi Minh City* (*the city of* is already in the summary, and *Ho Chi Minh City* would be four words).', '*Our car had to cross the Mekong*: they were in the car until the ferry.', '*We set off for our hotel on foot.*', '*It was Teachers’ Day.*', '*The streets were full of schoolchildren.*', 'A *centre of pilgrimage* = a centre for pilgrims.', '*Its spectacular view.*', '*The driver turned up the speed* and *raced* towards other boats.'] }] },
          { id: 'ieb2w2d6-e2', title: 'Dinner time, then and now', kind: 'Summary completion (with a box)', go: 'Read',
            tip: 'Before you read, sort the box into groups: words for change (*risen*, *fallen* …), comparisons (*fewer*, *smaller* …) and fractions (*half*, *a third* …). Then predict which group each gap needs.',
            passage: { title: 'Dinner time, then and now', text: 'Eating habits in Britain are changing fast. A major survey by the research group Mintel shows that, for the first time, ready meals now account for the largest share of all consumer spending on food: 30.1 per cent of the market. Over the past ten years, pizza sales have risen by 98 per cent, and sales of pasta have grown by a similar amount.\n\nBut this trend has brought deep changes to the way people eat. The proportion of adults who say they regularly eat a traditional Sunday dinner, with roast meat and vegetables, has fallen by ten per cent over the same period, and now fewer than half say they usually have a roast every week. Meat and fish make up a fifth of the UK’s total food market, but this sector has not grown at all in the past decade. Meanwhile, spending on fruit and vegetables has gone up by only six per cent, despite a large government campaign to persuade people to eat more healthily.\n\nHowever, the Mintel survey found that 46 per cent of people still see themselves as ‘traditionalist diners’. In contrast, 27 per cent are ‘convenience seekers’, who are happy to heat up meals in the microwave. A growing group, 31 per cent, are ‘casual diners’: people who skip breakfast and eat out most nights, not for pleasure but because they cannot be bothered to cook.\n\nMore people are expected to become casual diners as households become smaller. This change, together with the growing number of households without children, means that there is less pressure to cook a balanced meal, Mintel suggests.' },
            blocks: [{ type: 'ieGap', id: 'ieb2w2d6-e2-q1', from: 1, layout: 'summary', title: 'Changing eating habits in Britain', instruction: 'Complete the summary using the list of words, **A–O**, below.', bankTitle: 'Words',
              bank: ['smaller', 'risen', 'more', 'remained constant', 'older', 'decrease', 'fewer', 'fluctuate', 'a third', 'half', 'larger', 'fallen', 'a quarter', 'increase', 'drop'],
              text: 'In Britain, convenience meals are now the most popular type of food. Fruit and vegetable consumption has [[B]], and consumption of meat and fish has [[D]], but the traditional Sunday dinner is eaten by [[G]] people. Despite this, almost [[J]] the population are ‘traditionalists’ in their eating habits. Just over [[M]] are ‘convenience seekers’, while almost [[I]] are ‘casual diners’. The number of casual diners is likely to [[N]] as households become [[A]].',
              why: ['Spending has *gone up by only six per cent*: a small rise, but a rise. *Has* needs a past participle.', '*This sector has not grown at all.*', 'The proportion who eat it *has fallen*: fewer people. (*Less* would not fit *people*.)', '46 per cent = almost half.', '27 per cent = just over a quarter.', '31 per cent = almost a third.', '*More people are expected to become casual diners.* *Is likely to* needs a verb.', '*As households become smaller.*'] }] }
        ] },
      { type: 'recap', anchor: 'xl-sum', title: 'Remember',
        items: ['A summary is **general**; the passage has the **detail**. Expect paraphrase.', 'Find which part of the passage the summary covers **first**.', 'Answers are **mostly** in order.', 'With a box: sort the words by **grammar**, then by **meaning**.', 'Read the whole summary again with your answers in it.'] }
    ]
  },
  sections: [{
    id: 'learn', number: '06', minutes: 55, tone: 'blue', art: 'reading',
    title: 'Summary completion', subtitle: 'Question types 6 and 7',
    outcome: 'Complete a summary with words from the passage, or from a box.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 20, grouping: 'Alone', title: 'Read the tips', goal: 'Read the tips for both kinds of summary.', blocks: [{ type: 'text', title: 'Tips', text: 'Summary completion with and without a box.' }] },
      { id: 'practise', short: 'Exercises', minutes: 35, grouping: 'Alone', title: 'Do the exercises', goal: 'Do the two exercises and check your answers.', blocks: [{ type: 'text', title: 'Exercises', text: 'Two exercises.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
