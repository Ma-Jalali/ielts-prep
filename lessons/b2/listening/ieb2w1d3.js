/* IELTS · Listening · Learn · Lesson 3 — Part 2: everyday monologue.
   A Learn lesson on one page (js/sheet.js, learnPage): tips in tabs and folds, then the teacher's in-class exercises.
   Tips: the teacher's notes "IELTS Listening Tips" (International House), Part 2 pages (materials, prepositions of
   time and place, maps), checked and extended. Exercises and answers: the teacher's slides "Listening Class Exercises"
   (Part 2: the prediction task and Exercises 7–10); recordings from the teacher's Google Drive.
   Ids are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d3', week: 1, day: 3, sheet: true, illus: 'map',
  title: 'Part 2: everyday monologue',
  duration: 'About 60 minutes',
  journey: 'In Part 2 one person talks about an everyday topic: a tour, a local event, a new facility. Learn to predict the answers, follow directions on a map and use time and place words, then practise with four exercises from class.',
  finish: { title: 'Next', text: 'Part 3: academic discussion' },
  learn: {
    tags: ['Questions 11–20', 'One speaker'],
    jump: [['xl-glance', 'At a glance', 'info'], ['xl-tips', 'Tips', 'tip'], ['xl-ex', 'Exercises', 'pen'], ['xl-sum', 'Remember', 'star'], ['xl-check', 'Check yourself', 'ok']],
    blocks: [
      { type: 'facts', anchor: 'xl-glance', kicker: 'Part 2 at a glance', title: 'One speaker, an everyday topic',
        items: [['11–20', 'questions, usually in two sets'], ['1', 'speaker: a guide, a presenter, a manager'], ['Maps', 'and plans are common in this part'], ['Order', 'the answers follow the talk, in order']] },
      { type: 'key', title: 'The big idea', text: 'One speaker, one topic. **Predict** every gap before you listen, then **follow the talk like a map**: the answers come in order.' },
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'How to do well in Part 2', intro: 'Five tabs. Read them in order: each one ends with a button to the next.',
        items: [
          { label: 'How it works', icon: 'info', blocks: [
            { type: 'cards', items: [
              { icon: 'mic', t: 'One speaker', d: 'A tour guide, a radio presenter, a manager welcoming new staff, someone introducing a club or an event.' },
              { icon: 'chat', t: 'A general topic', d: 'Local facilities, a festival, a museum, a holiday, a charity, the history of a building.' },
              { icon: 'list', t: 'Many question types', d: 'Sentence and note completion, multiple choice, matching, and labelling a map or plan.' },
              { icon: 'signpost', t: 'The speaker gives a plan', d: 'Speakers often say what they will talk about first: "I\'ll start with … and then …". Use it to follow the questions.' }] },
            { type: 'note', tone: 'tip', title: 'The two halves', text: 'Part 2 is usually split into two sets of questions (for example 11–15 and 16–20), with a short pause between them. Use the pause to read the second set.' },
            { type: 'list', items: [
              'Listen for **signposts** that move the talk on: *First of all … Now, moving on to … Finally …*',
              'The words in the questions are often **paraphrased** in the talk: *built* may become *constructed*; *most popular* may become *what people like best*.',
              'In multiple choice, **all the options** may be mentioned. Choose the one that answers the question exactly.'] }] },
          { label: 'Predict', icon: 'eye', lead: 'Before you listen, decide what kind of word fits each gap: a noun, a verb, an adjective, a number, a time? Then tap to check.', blocks: [
            { type: 'examples', hide: true, qLabel: 'The gap', aLabel: 'Predict', items: [
              { label: 'Example', q: 'Lectures begin at ________ in the morning.', a: 'a number: a clock time', why: '*At* + a time, and *in the morning* tells you it is a clock time, e.g. *9.30*.', hide: false },
              { q: 'A ________ can carry up to 350 passengers.', a: 'a means of transport', why: 'A **singular** noun after *A*: e.g. *ferry*, *plane*.' },
              { q: '________ are in danger of becoming extinct.', a: 'an animal or plant species', why: 'A **plural** noun before *are*: e.g. *tigers*.' },
              { q: 'The Rosetta Stone was discovered in Egypt in the ________ .', a: 'a period of time', why: 'After *in the*: a century (*18th century*), a season (*summer*) or a decade (*1790s*). Not a single year: we say *in 1799*, not *in the 1799*.' },
              { q: 'The tower is made of ________ .', a: 'a material', why: 'A noun after *made of*: e.g. *stone*, *steel*.' },
              { q: 'Aboriginal art is extremely ________ these days.', a: 'an adjective', why: 'After *extremely*: e.g. *popular*, *valuable*.' },
              { q: 'Research shows that cigarette smoking is ________ .', a: 'an adjective', why: 'After *is*: e.g. *harmful*, *addictive*.' }] },
            { type: 'note', tone: 'info', title: 'Grammar and meaning', text: '**Grammar:** is it a verb, an adjective, or a noun (singular, plural or uncountable)?\n\n**Meaning:** is it a person, a place, an animal, a thing, a number, a time?' }] },
          { label: 'Maps', icon: 'map', lead: 'Map and plan labelling is common in Part 2. The answers are places, and sometimes you choose letters from a box.', blocks: [
            { type: 'steps', items: [
              { t: 'Before you listen', d: ['Find the **starting point** (the entrance, "You are here", the car park).', 'Look at the **compass**, the labels already given and the shape of the area.', 'Notice where each question number is. The answers come in order, so they often follow a route.'] },
              { t: 'While you listen', d: ['Follow the speaker\'s route with your finger or pen.', 'Listen for **direction words** (below) and for the names already on the map.', 'If you choose from a box, the letters on the map are **not** in the order of the questions.'] }] },
            { type: 'folds', items: [
              { icon: 'signpost', title: 'Direction words', sub: 'next to, opposite, beyond, at the far end …', blocks: [
                { type: 'table', head: ['Words', 'Meaning'], rows: [
                  ['next to · beside · by · adjacent to', 'touching or very close, at the side'],
                  ['near · close to · in the vicinity of', 'not far from'],
                  ['opposite (British) · across from (American) · facing', 'on the other side, looking at it'],
                  ['in front of · behind · at the back of', 'before it · after it'],
                  ['under · below · beneath · underneath', 'lower than'],
                  ['beyond', 'further away than, on the other side of'],
                  ['along', 'following a road or river: *go along the river*; *cafés along the street*'],
                  ['on the corner of · in the centre of', ''],
                  ['between … and …', 'in the middle of two places'],
                  ['surrounded by', 'with things all round it'],
                  ['at the far end of', 'at the end furthest from you']] },
                { type: 'chips', title: 'Giving directions', groups: [{ items: ['turn left / right', 'go straight on', 'go past the …', 'take the second turning on the left', 'it leads to …', 'it stretches from … to …', 'immediately on your right', 'just before / just after the …'] }, { label: 'On the road', items: ['traffic lights', 'junction = intersection', 'crossroads', 'roundabout', 'block', 'bridge', 'path', 'gate'] }] }] },
              { icon: 'target', title: 'North, south, east and west', sub: 'in the north of, or to the north of?', blocks: [
                { type: 'table', head: ['Direction', 'Adjective', 'Furthest'], wide: true, rows: [['north', 'northern', 'northernmost'], ['south', 'southern', 'southernmost'], ['east', 'eastern', 'easternmost'], ['west', 'western', 'westernmost']] },
                { type: 'note', tone: 'warn', title: 'A small word, a different place', text: '**in the north of the park** = inside the park, in its northern part.\n\n**to the north of the library** = outside the library, further north.' }] },
              { icon: 'abc', title: 'Map words people misspell', sub: 'check these before the test', blocks: [
                { type: 'chips', tone: 'warn', groups: [{ items: ['restaurant', 'café', 'pond', 'fountain', 'waterfall', 'church', 'cathedral', 'castle', 'palace', 'garage', 'statue', 'sculpture', 'theme park', 'amusement park', 'tennis court', 'golf course', 'football pitch', 'town hall', 'lift (= elevator)', 'corridor', 'airport', 'region', 'area', 'district', 'ornamental lake', 'vase', 'carriage'] }] }] }
            ] }] },
          { label: 'Time & place', icon: 'clock', lead: 'Prepositions often come just before an answer. Knowing them helps you predict.', blocks: [
            { type: 'folds', open: 0, items: [
              { icon: 'clock', title: 'Prepositions of time', sub: 'in, on, at, and no preposition', blocks: [
                { type: 'table', head: ['', 'Use it with', 'Examples'], wide: true, rows: [
                  ['**in**', 'parts of the day, months, years, seasons, decades, centuries', 'in the morning · in August · in 1989 · in (the) summer · in the 1980s · in the 21st century'],
                  ['**on**', 'days, dates, special days', 'on Tuesday · on 27 July · on my birthday · on Christmas Day · on holiday'],
                  ['**at**', 'clock times, and some fixed phrases', 'at 7 o\'clock · at night · at midnight · at noon · at the weekend (British) · at Christmas · at lunchtime'],
                  ['**no preposition**', 'next, last, this, every, ago', 'next week · last year · this morning · every Sunday · 20 years ago']] },
                { type: 'note', tone: 'warn', text: 'No "the" with years and months: **in 1989**, **in June** (not *in the 1989*). But: **in the 1980s** (a decade) and **in the 18th century**.' },
                { type: 'chips', groups: [{ items: ['a fortnight = 14 days', 'the Middle Ages = medieval times', 'BC / AD', 'at the weekend (British) = on the weekend (American)'] }] }] },
              { icon: 'map', title: 'Prepositions of place', sub: 'on a street, in a building, at an address', blocks: [
                { type: 'table', head: ['', 'Examples'], rows: [['**on** + a street', 'on Park Street · on the corner of'], ['**in** + an area or building', 'in the city centre · in the library'], ['**at** + an address or point', 'at 25 Park Street · at the entrance'], ['**through · across · along**', 'through the park · across the bridge · along the river']] },
                { type: 'note', tone: 'tip', text: 'We say **behind** and **beyond**, not *behind of* or *beyond of*.' }] }
            ] }] },
          { label: 'Materials', icon: 'book', lead: 'Talks about buildings, objects and history often ask what something is made of. Learn the spelling.', blocks: [
            { type: 'chips', groups: [
              { label: 'Metals', items: ['metal → metallic', 'gold → gold / golden', 'silver', 'iron', 'steel', 'bronze', 'copper', 'aluminium (British) / aluminum (American)', 'nickel'] },
              { label: 'Building materials', items: ['stone', 'marble', 'concrete', 'cement', 'brick', 'glass', 'wood → wooden', 'coal', 'coral'] },
              { label: 'Fabrics', items: ['wool → woollen (British) / woolen (American)', 'cotton', 'velvet', 'denim', 'leather', 'cloth', 'fibre (British) / fiber (American)', 'plastic'] },
              { label: 'For pots and plates', items: ['china', 'porcelain', 'ceramic', 'pottery'] }] }] }
        ] },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'In-class exercises', title: 'Practise Part 2', intro: 'Open an exercise, read the questions, then play the recording. Each one has its answers folded at the bottom.',
        items: [
          { id: 'ieb2w1d3-e1', title: 'The Bell Rock lighthouse', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1Y4n9XogV8lT54iKJ4XHkukMmz9CLRaJS/view', note: 'A talk about the history of a famous Scottish lighthouse.' }],
            tip: 'Predict first: Question 1 needs a length of time, Question 2 a material, Question 4 a time of year.',
            blocks: [{ type: 'ieGap', id: 'ieb2w1d3-e1-q1', from: 1, layout: 'sentences', instruction: 'Complete the sentences below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.',
              text: 'The Bell Rock lighthouse was built almost [[200 years|two hundred years]] ago.\nThe tower is made of [[stone|sandstone]].\nThe reef is dangerous to ships because it is [[under water|underwater|under the waves]].\nInitial construction took place during the [[summer|summer months]].' }] },
          { id: 'ieb2w1d3-e2', title: 'What\'s on at the cinema', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/15bNb59RGhedQMQUV7tWGFrzVXYzB993D/view', note: 'A recorded message about the films showing this week.' }],
            blocks: [{ type: 'ieTable', id: 'ieb2w1d3-e2-q1', from: 1, title: 'Cinema programme', instruction: 'Complete the table below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.',
              columns: ['Cinema', 'Film', 'Time showing', 'Type of film'],
              rows: [['One', 'Shrek', '[[11:15 am|11.15 am|11:15|11.15]]', 'Animation'], ['Two', '[[The Long Journey|Long Journey]]', '6:15 pm', 'Documentary'], ['Three', 'Armor of God', '5:30 / 9:15 pm', '[[classic action|action]]']] }] },
          { id: 'ieb2w1d3-e3', title: 'Things to do in the holidays', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1xAZ19wqKq5dSCOlKItn1U_189fVC9nGU/view', note: 'A radio talk with ideas for keeping children busy in the school holidays.' }],
            tip: 'The word limit is only ONE word here. Look at the words before each gap: "the", "a", "make" … tell you what fits.',
            blocks: [{ type: 'ieGap', id: 'ieb2w1d3-e3-q1', from: 1, layout: 'notes', title: 'Things to do in the holidays', instruction: 'Complete the notes below. Write **NO MORE THAN ONE WORD AND/OR A NUMBER** for each answer.',
              text: '- Main problem: children do not have a traditional [[hobby]]\n# Some ideas\n- Give children jobs, for example cleaning the [[car]]\n- At home, ask children to help in the [[kitchen]]\n- Get children to make [[presents|gifts]] ahead of time\n- Get children involved in community work, such as visiting the [[elderly]]\n- Involve older children in long-term [[projects]] in your community\n- You may get some ideas from the [[internet|Internet]]\n- The local [[library]] is often the best place to find ideas\n# Things to remember\n- Make sure children stay [[active]]\n- Children up to the age of [[12|twelve]] need to be supervised by an adult' }] },
          { id: 'ieb2w1d3-e4', title: 'Sydney Harbour Bridge', kind: 'Sentences, a table and short answers', audio: [{ title: 'Recording · Questions 11–20', src: 'https://drive.google.com/file/d/1tNzpsesQS_tcevKntU5tJ55jp9DXswMM/view', note: 'A talk about the building of the famous bridge, and the tunnel beside it.' }],
            tip: 'This is a full Part 2 (Questions 11–20) with three question types. Read all three sets before you play.',
            blocks: [
              { type: 'ieGap', id: 'ieb2w1d3-e4-q1', from: 11, layout: 'sentences', instruction: 'Complete the sentences below. Write **NO MORE THAN THREE WORDS** for each answer.',
                text: '[[Cities]] are often known by their famous bridges.\nThe speaker compares a bridge to a cathedral or [[a palace|palace]].\nSydney Harbour Bridge is nicknamed [[the coat hanger|coat hanger]].' },
              { type: 'ieTable', id: 'ieb2w1d3-e4-q2', from: 14, instruction: 'Complete the table below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.',
                columns: ['Date', 'Event'],
                rows: [['1916', '[[The government|government|the state|state government]] agreed to finance the bridge'], ['[[1924]]', 'Contract signed with an engineering firm'], ['1926', 'Construction involved knocking down [[800 houses]] and the creation of many jobs'], ['1932', 'Bridge completed at a cost of [[9.5 million|£9.5 million|$9.5 million]]'], ['March 1932', 'Opening ceremony: the ribbon was cut by a man riding a [[horse]]']] },
              { type: 'ieGap', id: 'ieb2w1d3-e4-q3', from: 19, layout: 'short', instruction: 'Answer the questions below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.',
                text: 'How long is the tunnel? [[2.3 km|2.3 kilometres|2.3 kilometers|2.3 kms]]\nName ONE thing the tunnel can withstand. [[a ship|ship|an earthquake|earthquake]]' }] }
        ] },
      { type: 'recap', anchor: 'xl-sum', title: 'Remember',
        items: ['One speaker, an everyday topic. The answers come **in order**.', 'Before you listen, predict the **grammar** and the **meaning** of every gap.', 'Maps and plans: find **where you start**, then follow the directions.', 'Prepositions (*at, in, on, opposite*) often come just **before** an answer.', 'Learn to spell common **materials** and **places**.'] },
      { type: 'check', anchor: 'xl-check', kicker: 'Check yourself', title: 'True or false?', intro: 'Tap True or False to see the answer.',
        items: [
          { s: 'Part 2 is a conversation between two people.', answer: false, why: 'Part 2 has one speaker.' },
          { s: 'In map questions with a box, the letters on the map are in the order of the questions.', answer: false, why: 'The questions are in order; the letters are not.' },
          { s: '"Opposite" and "across from" mean the same.', answer: true, why: '"Opposite" is British; "across from" is American.' },
          { s: '"In the north of the city" means outside the city.', answer: false, why: 'It is inside the city. "To the north of the city" is outside it.' },
          { s: 'We say "in 1989" but "in the 1980s".', answer: true, why: 'No "the" with a single year; "the" with a decade.' },
          { s: 'After "extremely" you should expect an adjective.', answer: true, why: 'For example "extremely popular".' }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '03', minutes: 60, tone: 'teal', art: 'listening',
    title: 'Part 2: everyday monologue', subtitle: 'Tips and in-class exercises',
    outcome: 'Predict answers, follow directions on a map, and practise Part 2 with four exercises.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 25, grouping: 'Alone', title: 'Read the Part 2 tips', goal: 'Read how Part 2 works, prediction, maps, time and place words, and materials.', blocks: [{ type: 'text', title: 'Tips', text: 'How Part 2 works, predicting, maps, prepositions and materials.' }] },
      { id: 'practise', short: 'Exercises', minutes: 35, grouping: 'Alone', title: 'Do the in-class exercises', goal: 'Do the exercises and check your answers.', blocks: [{ type: 'text', title: 'Exercises', text: 'Four Part 2 exercises.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
