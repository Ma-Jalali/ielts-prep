/* IELTS · Reading · Learn · Lesson 9 — Multiple choice: one answer and several answers (question types 13 and 14).
   Source: the teacher's training notes "Reading" (RAD TIME), pages 24–26. The Persian notes on the options are
   translated. Both passages are adapted (rewritten). Corrected keys: animals Q4 (lions) is A, not C (lions sleep
   alone); "Which FIVE advantages" is C, D, E, F, G (B, "more eggs can be laid", is not in the passage).
   Ids (lesson, activities, exercises, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w2d9', week: 2, day: 9, sheet: true, illus: 'eco',
  title: 'Multiple choice',
  duration: 'About 50 minutes',
  journey: 'Choose the right option: one answer, or several from a longer list. The trick is not to find a good option but to remove the bad ones. Learn the four kinds of option, then try two exercises about animals.',
  finish: { title: 'Next', text: 'Labelling a diagram' },
  learn: {
    tags: ['Question types 13 and 14'],
    jump: [['xl-tips', 'Tips', 'tip'], ['xl-options', 'Four kinds of option', 'list'], ['xl-ex', 'Exercises', 'pen']],
    blocks: [
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'Two kinds of multiple choice',
        items: [
          { label: 'One answer', icon: 'target', lead: 'A question or an unfinished sentence, and three or four options. You choose **one**.', blocks: [
            { type: 'list', items: [
              'The answers are **all in passage order**.',
              'Read the question, not the options, first: find the place in the passage with the **question’s** key words.',
              'Then **remove the wrong options** one by one. It is easier than finding the right one.'] },
            { type: 'cards', cols: 2, items: [
              { icon: 'chat', t: 'A question', d: '*Why do many people in this region eat spicy food?*' },
              { icon: 'pen', t: 'An unfinished sentence', d: '*Many people in this region eat spicy food because …*' }] }] },
          { label: 'Several answers', icon: 'list', lead: 'A longer list of options (often A–E or A–G), and you choose **two, three or more**. The question tells you how many.', blocks: [
            { type: 'list', items: [
              'The answers are **in passage order**, but they can be **close** to each other or **far** apart.',
              'Remove the wrong options as you read.',
              'Choose **exactly** the number of letters you are asked for. The order of your letters does not matter.'] }] }
        ] },
      { type: 'table', anchor: 'xl-options', kicker: 'Four kinds of option', title: 'Which one is right?', intro: 'Imagine the passage says **XYZ**. The options usually look like this:', wide: true,
        head: ['Option', 'What it does', 'Right or wrong?'],
        rows: [
          ['A · ~~JQR~~', 'Says something *different* from the passage.', 'Wrong'],
          ['B · XYZ in other words', 'Says the *same* thing as the passage, *paraphrased*.', '==Right=='],
          ['C · ~~XYZ + T~~', 'Is not false, but *adds* information (T) that is not in the passage.', 'Wrong'],
          ['D · ~~NFI~~', 'Is *not found* in the passage at all.', 'Wrong']] },
      { type: 'note', tone: 'warn', title: 'Three more traps', text: '**Same words, different meaning:** an option that copies words from the passage is often wrong.\n\n**True, but not the answer:** the option is in the passage, but it does not answer **this** question.\n\n**Too strong:** *always*, *all*, *never*, *only*. Check that the passage is as strong.' },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'Exercises', title: 'Try them', intro: 'Open an exercise, read the passage and choose your answers. The answers, with the reasons, are folded at the bottom.',
        items: [
          { id: 'ieb2w2d9-e1', title: 'How animals live together', kind: 'Multiple choice (one answer)', go: 'Read',
            tip: 'The five questions follow the passage. For each option, ask: is it different, extra or not there at all?',
            passage: { title: 'How animals live together', subtitle: 'Social organisation among animals', text: 'The palolo, a worm that lives on rocks in the sea, is one of very few animals that never have contact with other members of their species. Others, such as spiders, normally live alone and meet only to mate (that is, to reproduce).\n\nSome species form social links only while they are raising their young. Among birds, European robins raise their chicks in a pair, away from other robins, while herring gulls form larger groups, called colonies, of many pairs living close together, each pair bringing up its own chicks. Many species of fish and birds form large groups, called schools and flocks, and swim or fly together. Hens attack each other and in the end establish an order based on the strength of each bird. Those at the top of the ‘pecking order’ eat before the others.\n\nFinally, some animals spend most or all of their lives in social groups in which individuals co-operate. Lions, for example, usually live in a fairly permanent group, called a pride, where some activities, such as hunting, are shared, while others, such as sleeping, are done alone.\n\nBees, wasps and ants live in stable, co-operative groups in which every activity is shared and organised. Worker bees, which are all female, have several jobs, one after another, depending on their age. They begin by cleaning, and later become soldiers that defend the hive against intruders. Finally, they fly out of the hive to collect food. Theirs is a highly complex social organisation.' },
            blocks: [{ type: 'ieChoice', id: 'ieb2w2d9-e1-q1', from: 1, instruction: 'Choose the correct letter, **A**, **B** or **C**.',
              items: [
                { q: 'Which of these animals spends most, but not all, of its life alone?', options: ['the palolo', 'the herring gull', 'the spider'], answer: 'C', why: 'Spiders live alone but meet to mate. The palolo **never** meets others.' },
                { q: 'European robins and herring gulls are different in', options: ['how many birds help to bring up each chick.', 'the kind of group in which pairs bring up their young.', 'how long they spend together.'], answer: 'B', why: 'Robins raise their chicks as a pair, away from others; herring gulls raise them as pairs within a colony.' },
                { q: 'What point is made about hens?', options: ['The best fighters eat different food from weaker hens.', 'They live in larger groups than most other birds.', 'Their social structure gives some individuals advantages over others.'], answer: 'C', why: 'Hens at the top of the pecking order *eat before the others*. They eat first, not different food (A).' },
                { q: 'What is said about the life of lions?', options: ['They live in a group and do some activities together.', 'They live separately and come together for some activities.', 'They live in a group and do all activities together.'], answer: 'A', why: 'Hunting is shared, but sleeping is done alone, so not **all** activities (C).' },
                { q: 'What point is made about worker bees?', options: ['They do different jobs as they get older.', 'Their social structure is unlike that of any other animal.', 'They could not survive alone.'], answer: 'A', why: '*Several jobs, one after another, depending on their age.* B and C are not in the passage.' }] }] },
          { id: 'ieb2w2d9-e2', title: 'Why animals co-operate', kind: 'Multiple choice (five answers)', go: 'Read',
            tip: 'Each paragraph gives one or two advantages. Watch for options that use the passage’s words but change the meaning.',
            passage: { title: 'Why animals co-operate', text: 'Social co-operation can bring a number of benefits. Groups of male frogs sing to attract females, and large groups usually attract more females per male than small groups, which makes it easier for the males to find a mate.\n\nYoung animals can be raised more safely in social groups. Birds in a colony tend to lay their eggs at about the same time, so all the chicks come out of their eggs almost together. Since a single predator (an animal that kills and eats other animals) can only eat a limited number of eggs or chicks, each individual is less likely to be eaten. Groups of adult elephants surround all their young, giving each one far more protection than its own parents alone could provide.\n\nGroups are also better at bringing up the young. In some species of apes and monkeys, female ‘aunts’ help to look after young that are not their own, and at the same time learn how to raise their own young in the future. Lion cubs drink the milk not only of their mother but also of other females in the group, and the range of antibodies that different females provide increases the cubs’ resistance to disease.\n\nA group that spreads out to look for food is likely to be more successful than an animal searching alone. When one animal has found food, others may simply join it, but some species have developed a highly complex form of communication. When a honeybee finds food, it returns to the hive and performs a complex dance to show the others where the food is.' },
            blocks: [{ type: 'ieMulti', id: 'ieb2w2d9-e2-q1', from: 1, pick: 5, q: 'Which FIVE of these advantages of social co-operation are mentioned in the passage?',
              options: ['Females can choose a mate more easily.', 'More eggs can be laid.', 'Eggs are more likely to survive.', 'There are more adults available to protect the young.', 'Individuals can develop skills for later use.', 'The young are likely to be healthier.', 'Individuals can eat food that others have found.', 'The group is more likely to live close to a source of food.'],
              answers: ['C', 'D', 'E', 'F', 'G'],
              why: 'C: a predator can only eat a limited number of eggs. D: adult elephants surround the young. E: the ‘aunts’ learn to raise their own young. F: antibodies increase resistance to disease. G: others may join an animal that has found food. A is wrong: it is easier for the **males**. B is wrong: eggs are laid at the same time, not in greater numbers.' }] }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '09', minutes: 50, tone: 'blue', art: 'reading',
    title: 'Multiple choice', subtitle: 'Question types 13 and 14',
    outcome: 'Remove the wrong options and choose one or several answers.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 15, grouping: 'Alone', title: 'Read the tips', goal: 'Read the tips and the four kinds of option.', blocks: [{ type: 'text', title: 'Tips', text: 'One answer, several answers and four kinds of option.' }] },
      { id: 'practise', short: 'Exercises', minutes: 35, grouping: 'Alone', title: 'Do the exercises', goal: 'Do the two exercises and check your answers.', blocks: [{ type: 'text', title: 'Exercises', text: 'Two exercises.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
