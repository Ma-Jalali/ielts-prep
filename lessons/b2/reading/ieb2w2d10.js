/* IELTS · Reading · Learn · Lesson 10 — Labelling a diagram (question type 15).
   Source: the teacher's training notes "Reading" (RAD TIME), page 27. The Persian glosses (beyond, opposite, along)
   are translated. The Zinacantan passage is adapted (rewritten) and the plan is drawn for this site
   (assets/reading/zinacantan.svg); the book's picture of a radio telescope is not used.
   Ids (lesson, activities, exercises, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w2d10', week: 2, day: 10, sheet: true, illus: 'home',
  title: 'Labelling a diagram',
  duration: 'About 35 minutes',
  journey: 'A picture, a plan or a machine with numbered labels to complete. The answers are usually in one small part of the passage, so the skill is to find that part fast and follow it like a map.',
  finish: { title: 'Well done', text: 'You have finished the Reading training lessons.' },
  learn: {
    tags: ['Question type 15'],
    jump: [['xl-tips', 'Tips', 'tip'], ['xl-words', 'Useful words', 'abc'], ['xl-ex', 'Exercise', 'pen']],
    blocks: [
      { type: 'cards', anchor: 'xl-tips', kicker: 'Tips', title: 'Follow the passage like a map',
        items: [
          { icon: 'map', t: 'A small area', d: 'The answers are usually in **one or two paragraphs**. Find that part first.' },
          { icon: 'repeat', t: 'Not in order', d: 'The numbers on the diagram may **not** follow the order of the passage.' },
          { icon: 'abc', t: 'Mostly nouns', d: 'The answers are usually **names of parts** (nouns), sometimes with a size or a shape.' },
          { icon: 'eye', t: 'Look at the picture', d: 'Notice the **shape**, **size** and **position** of each part, and the labels that are already there.' }] },
      { type: 'tabs', anchor: 'xl-words', kicker: 'Useful words', title: 'Words for position and shape', intro: 'Passages describe where things are. Learn these words: they lead you to the right part of the picture.',
        items: [
          { label: 'Position', icon: 'map', blocks: [
            { type: 'table', wide: true, head: ['Words', 'Meaning'], rows: [
              ['next to · adjacent to · by · near · in the vicinity of', 'close to something'],
              ['under · below · beneath · underneath · at the bottom of', 'lower than something'],
              ['above · over · on top of', 'higher than something'],
              ['beyond', 'on the far side of something; further away than it'],
              ['in front of · behind', 'before or after something, as you look at it'],
              ['across from · facing · opposite', 'on the other side, looking at it'],
              ['against', 'touching something, usually a wall'],
              ['along', '1 in a straight line: *go along the road* = go straight on. 2 beside the length of something: *There are restaurants along the street.*'],
              ['surrounded by', 'with something all around it'],
              ['in the centre of · in the corner of', 'in the middle · where two walls meet'],
              ['leading off', 'opening from another room: *a kitchen leading off the living room*']] }] },
          { label: 'Shapes', icon: 'target', blocks: [
            { type: 'chips', groups: [{ label: 'Flat shapes', items: ['triangle', 'square', 'rectangle', 'oval', 'circle', 'crescent', 'pentagon', 'hexagon', 'octagon', 'lozenge (diamond)', 'cross'] }, { label: 'Solid shapes', items: ['cube', 'pyramid', 'hemisphere', 'sphere', 'cylinder', 'cone'] }] },
            { type: 'note', tone: 'tip', text: 'Adjectives help too: *circular*, *rectangular*, *triangular*, *curved*, *flat*, *pointed*.' }] }
        ] },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'Exercise', title: 'Try it', intro: 'Read the passage and label the plan. The answers are folded at the bottom.',
        items: [
          { id: 'ieb2w2d10-e1', title: 'A house in Zinacantan', kind: 'Diagram labelling', go: 'Read',
            tip: 'Start from what you can see: the large room, the kitchen and the trees. Then follow the passage around the house.',
            passage: { title: 'Zinacantan', scroll: false, text: 'The rural village of Zinacantan, high in the hills of southern Mexico, is home to people descended from the ancient Maya. The villages of this area are unusual and interesting in their traditions and way of life.\n\nA typical house has only two rooms: one large room, which is both a living room and a bedroom, and a small kitchen leading off it. A typical home has a row of beds along one wall, and three or four chairs in the middle of the room, from which the family can watch the television. In the kitchen there is an open fire in the centre of the room, a bench for grinding corn, and two large storage bins in the corner. Many different crops are grown on the land around the house, including herbs near the kitchen and fruit trees beyond them. On the outer edge of the property, the family grows sugar cane.' },
            blocks: [{ type: 'ieDiagram', id: 'ieb2w2d10-e1-q1', from: 1, title: 'A typical house in Zinacantan', instruction: 'Label the plan below. Choose **NO MORE THAN THREE WORDS** from the passage for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              src: 'assets/reading/zinacantan.svg', alt: 'A plan of a house: a large room with a row of beds along the top wall, chairs in the middle and a television on the bottom wall; a kitchen with a fire, a bench and two round bins in the corner; herbs, fruit trees and, on the far right, sugar cane.',
              labels: [{ x: 27, y: 20, answer: 'beds|row of beds|a row of beds' }, { x: 27, y: 87, answer: 'television|the television' }, { x: 73, y: 54, answer: 'storage bins|large storage bins|bins' }, { x: 92, y: 50, answer: 'sugar cane' }] }] }
        ] },
      { type: 'note', tone: 'tip', title: 'You have finished the training', text: 'You now know all the main types of Reading question. Next, practise them one at a time in **Practise**, then put everything together in a full **Test**.' }
    ]
  },
  sections: [{
    id: 'learn', number: '10', minutes: 35, tone: 'blue', art: 'reading',
    title: 'Labelling a diagram', subtitle: 'Question type 15',
    outcome: 'Label a diagram, plan or picture with words from the passage.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 15, grouping: 'Alone', title: 'Read the tips', goal: 'Read the tips and the words for position and shape.', blocks: [{ type: 'text', title: 'Tips', text: 'Tips, position words and shapes.' }] },
      { id: 'practise', short: 'Exercise', minutes: 20, grouping: 'Alone', title: 'Do the exercise', goal: 'Do the exercise and check your answers.', blocks: [{ type: 'text', title: 'Exercise', text: 'A house in Zinacantan.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
