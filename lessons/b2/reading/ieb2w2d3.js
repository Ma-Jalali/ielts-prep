/* IELTS · Reading · Learn · Lesson 3 — Short answers, notes and tables (question types 1 and 2).
   Source: the teacher's training notes "Reading" (RAD TIME), pages 4–5. The three passages are adapted (rewritten) from
   the teacher's handout; the answers are unchanged except where the old key was wrong:
   Sahara Q1 was "two thirds" (it is "permanent settlements"); the noise notes now ask for the length of the study
   (the old Q1 needed three words under a two-word limit).
   Ids (lesson, activities, exercises, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w2d3', week: 2, day: 3, sheet: true, illus: 'globe',
  title: 'Short answers, notes and tables',
  duration: 'About 50 minutes',
  journey: 'Two of the most common completion tasks. In short-answer questions you answer a question in a few words; in notes, tables and flow charts you fill the gaps in a page of information. Learn the tips, then try three exercises.',
  finish: { title: 'Next', text: 'True, False, Not Given' },
  learn: {
    tags: ['Question types 1 and 2'],
    jump: [['xl-tips', 'Tips', 'tip'], ['xl-ex', 'Exercises', 'pen']],
    blocks: [
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'How to answer them',
        items: [
          { label: 'Short answers', icon: 'chat', lead: 'You answer each question with words from the passage.', blocks: [
            { type: 'list', items: [
              'The answers are **in passage order**.',
              'Your answer must be **to the point**: only the words that answer the question.',
              'But it must not be **too general** either: keep the words that make it exact.',
              'Keep to the **word limit** in the instructions.'] },
            { type: 'table', title: 'The question word tells you what to look for', head: ['Question word', 'Look for …'], rows: [
              ['Where', 'a place'], ['When · What time', 'a time, a day, a date or a year'], ['How many', 'a number'], ['How much', 'an amount or a price'],
              ['How often', 'a frequency: *monthly*, *twice a week*'], ['How long', 'a length of time or a distance'], ['What proportion', 'a part: *two-thirds*, *10 per cent*'],
              ['Why', 'a reason'], ['What … for / at / to?', 'a noun that fits the preposition']] }] },
          { label: 'Which answer?', icon: 'target', lead: 'Which option answers the question best?', blocks: [
            { type: 'versus', items: [
              { q: 'What colour are ostriches’ eggs?', p: 'Ostriches have white-shelled eggs.', options: ['white', 'white-shelled', 'white-shelled eggs'], answer: 0, why: 'The question asks for a **colour**. *Shelled* and *eggs* are not part of it, and *eggs* is already in the question.' },
              { q: 'How often are the meetings held?', p: 'The meetings are held on a monthly basis.', options: ['monthly', 'monthly basis', 'a monthly basis'], answer: 0, why: '*How often?* → *monthly*. The other answers do not fit the question.' },
              { q: 'What do coral reefs look like?', p: 'They resemble flat beds of rock.', options: ['rock', 'flat beds', 'flat beds of rock'], answer: 2, why: '*rock* is too general and *flat beds* is incomplete. Copy the full description.' }] }] },
          { label: 'Notes, tables, flow charts', icon: 'list', lead: 'You complete gaps in notes, a table or a flow chart, with words and/or a number from the passage.', blocks: [
            { type: 'cards', items: [
              { icon: 'list', t: 'Notes', d: 'Headings and short lines. The headings tell you which part of the passage to read.' },
              { icon: 'hash', t: 'Tables', d: 'Read across the rows and down the columns: the column heading tells you the type of answer.' },
              { icon: 'repeat', t: 'Flow charts', d: 'Steps in a process, in order. Look for words of sequence: *first, then, after, finally*.' },
              { icon: 'eye', t: 'Some information is given', d: 'Use the parts that are already complete: they show you where you are in the passage.' }] },
            { type: 'note', tone: 'warn', title: 'Not always in order', text: 'Notes and tables may **not** follow the order of the passage. A table may also take its answers from different parts of the text.' }] }
        ] },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'Exercises', title: 'Try them', intro: 'Open an exercise, read the passage and answer the questions. The answers, with the reasons, are folded at the bottom.',
        items: [
          { id: 'ieb2w2d3-e1', title: 'Saving water in the desert', kind: 'Short answers', go: 'Read',
            tip: 'All five answers are in passage order. For each question, choose a word you can trust (*Sahara*, *irrigate*, *Egypt*) and scan for it.',
            passage: { title: 'Saving water in the desert', text: 'Since the earliest times, people have invented clever ways of saving water in places where it is scarce. In the Sahara, where two-thirds of the small population live in permanent settlements, many of the oases that provide natural supplies of water have been enlarged by human industry.\n\nIn some areas, gently sloping channels called foggaras run below the surface, collecting ground water and carrying it to a central oasis. In other places, artesian wells are used to irrigate date palms and the other crops that grow in their shade.\n\nIn Egypt, only one per cent of all water goes into the domestic supply. The rest is used to irrigate farm crops.' },
            blocks: [{ type: 'ieGap', id: 'ieb2w2d3-e1-q1', from: 1, layout: 'short', instruction: 'Answer the questions below. Choose **NO MORE THAN THREE WORDS** from the passage for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'Where do most of the people in the Sahara have their homes? [[permanent settlements|in permanent settlements]]\nWhat water sources in the Sahara have people developed? [[oases|the oases]]\nWhat structures are used to water crops in the Sahara? [[artesian wells|wells]]\nWhich crop is named in the passage? [[date palms|palms]]\nHow much of the water in Egypt is used in people’s homes? [[one per cent|1 per cent|1%|one percent]]',
              why: ['*Two-thirds* (= most) of the population live in *permanent settlements*. *Two-thirds* tells you how many, not where.', 'The oases *have been enlarged by human industry* = developed by people.', 'Artesian wells are used to *irrigate* (= water) crops. Foggaras collect water; they do not water crops.', 'Date palms are a crop. *Palms* alone is also accepted.', '*Domestic supply* = water used in homes.'] }] },
          { id: 'ieb2w2d3-e2', title: 'Silence is not always golden', kind: 'Note completion', go: 'Read',
            tip: 'The notes follow the passage. Questions 2–5 are groups of people: look for jobs.',
            passage: { title: 'Silence is not always golden', text: 'A worldwide survey has found that people who live in cities hear better than people who live in quiet villages, and scientists now believe that the ear needs exercise to stay in shape.\n\nA team of scientists at the University of Giessen, in Germany, has spent more than a decade testing the hearing of over 10,000 people around the world. As expected, people exposed to extremely loud noise at work, such as construction workers, had poor hearing. But the hearing of people living in quiet rural areas, such as farmers, was just as bad. Orchestral musicians and airline pilots, by contrast, usually hear well, even though their work is noisy. And there is little difference between people who go to noisy concerts and people who do not.\n\nHearing specialists have long believed that long exposure to very loud noise damages hearing, so industrial standards are based on people’s average exposure to sound energy. However, it is very strong impulses, such as loud bangs, that do the most damage, whereas continual noise ‘trains’ the ear to tolerate it.' },
            blocks: [{ type: 'ieGap', id: 'ieb2w2d3-e2-q1', from: 1, layout: 'notes', title: 'Hearing research', instruction: 'Complete the notes below. Choose **NO MORE THAN TWO WORDS** from the passage for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: '# The research\n- The ear needs training to work well\n- Length of the study: more than [[a decade|decade]]\n# People with poor hearing\n- [[construction workers|farmers]]\n- [[farmers|construction workers]]\n# People with good hearing\n- [[orchestral musicians|airline pilots]]\n- [[airline pilots|orchestral musicians]]\n# The most dangerous type of noise\n- [[loud bangs|bangs]]',
              why: ['*Over a decade* = more than a decade (2 words).', 'Answers 2 and 3 can be in either order.', '', 'Answers 4 and 5 can be in either order: *by contrast* tells you they hear well.', '', '*It is very strong impulses, such as loud bangs, that do the most damage.*'] }] },
          { id: 'ieb2w2d3-e3', title: 'Monday at the fitness centre', kind: 'Table completion', go: 'Read',
            tip: 'Read the column headings first: the first gap is something to bring, the third is a time.',
            passage: { title: 'Fitness Centre', subtitle: 'Activities for Monday 12 July', scroll: false, text: 'The fitness centre offers a variety of activities for members of all ages throughout the week.\n\n### Learn to swim\nClasses for pre-school children aged 5 and under start at 10 am. Classes last 30 minutes, and parents must attend with their children. Don’t forget to book, as places are limited, and bring some warm clothes for after the lesson.\n\n### Women’s aerobics\nOne-hour sessions, led by Melissa, begin at 10.45 am. Join us every Monday for an exciting hour of exercise and fun. Leave your children at the nursery and take some time for yourself. Wear a tracksuit or something similar.\n\n### Lunchtime yoga\nTake a break at lunchtime (1 pm – 2 pm) for an hour of meditation and yoga. Enjoy the peace and quiet of our meditation room, with relaxing sessions for active people with busy lives. Use your own mat for floor work, or hire one from us for a small fee.' },
            blocks: [{ type: 'ieTable', id: 'ieb2w2d3-e3-q1', from: 1, title: 'Monday’s activities', instruction: 'Complete the table below. Choose **NO MORE THAN THREE WORDS AND/OR A NUMBER** from the passage for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              columns: ['Activity', 'Starting time', 'Need to bring'],
              rows: [['Pre-school swimming', '10.00 am', '[[warm clothes|some warm clothes]]'], ['[[women’s aerobics|aerobics]]', '10.45 am', 'tracksuit'], ['Yoga', '[[1 pm|1pm|1.00 pm|1 o’clock]]', '[[own mat|your own mat|mat]]']] }] }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '03', minutes: 50, tone: 'blue', art: 'reading',
    title: 'Short answers, notes and tables', subtitle: 'Question types 1 and 2',
    outcome: 'Answer short-answer questions and complete notes, tables and flow charts.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 15, grouping: 'Alone', title: 'Read the tips', goal: 'Read the tips for short answers, notes and tables.', blocks: [{ type: 'text', title: 'Tips', text: 'Short answers, notes, tables and flow charts.' }] },
      { id: 'practise', short: 'Exercises', minutes: 35, grouping: 'Alone', title: 'Do the exercises', goal: 'Do the three exercises and check your answers.', blocks: [{ type: 'text', title: 'Exercises', text: 'Three exercises.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
