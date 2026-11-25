/* IELTS · Listening · Learn · Lesson 5 — Part 4: academic lecture.
   A Learn lesson on one page (js/sheet.js, learnPage): tips in tabs, then the teacher's in-class exercises.
   Tips: the teacher's notes "IELTS Listening Tips" (International House), Part 4 pages (lecture structure, signpost
   words and the signpost matching task), checked and extended. Exercises and answers: the teacher's slides "Listening
   Class Exercises" (Part 4: Exercises 23–26); recordings from the teacher's Google Drive.
   Ids are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d5', week: 1, day: 5, sheet: true, illus: 'grad',
  title: 'Part 4: academic lecture',
  duration: 'About 70 minutes',
  journey: 'Part 4 is a lecture by one speaker and the hardest part of the test. Learn how lectures are organised, use signpost words to follow them, and handle note and flow-chart completion, then practise with five exercises from class.',
  finish: { title: 'Next', text: 'Practise: Part 1 exercises' },
  learn: {
    tags: ['Questions 31–40', 'One speaker'],
    jump: [['xl-glance', 'At a glance', 'info'], ['xl-tips', 'Tips', 'tip'], ['xl-ex', 'Exercises', 'pen'], ['xl-sum', 'Remember', 'star'], ['xl-check', 'Check yourself', 'ok']],
    blocks: [
      { type: 'facts', anchor: 'xl-glance', kicker: 'Part 4 at a glance', title: 'A lecture on an academic subject',
        items: [['31–40', 'questions, all in one go'], ['1', 'speaker: a lecturer or a student giving a talk'], ['No break', 'read all ten questions before it starts'], ['Hardest', 'part: formal language and academic words']] },
      { type: 'key', title: 'The big idea', text: 'No break, ten questions, one speaker. **Read all ten questions first**, and let the **signpost words** tell you where you are in the lecture.' },
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'How to do well in Part 4', intro: 'Four tabs. Read them in order: each one ends with a button to the next.',
        items: [
          { label: 'How it works', icon: 'info', blocks: [
            { type: 'cards', items: [
              { icon: 'lecture', t: 'A lecture or talk', d: 'On a course-related subject: science, history, business, the environment, psychology …' },
              { icon: 'list', t: 'Mostly notes', d: 'Usually note, summary, table or flow-chart completion; sometimes multiple choice or matching.' },
              { icon: 'clock', t: 'No break in the middle', d: 'Parts 1–3 pause halfway; Part 4 does not. Use the reading time to read all ten questions.' },
              { icon: 'target', t: 'Main ideas', d: 'You follow how the lecture develops and pick out the main ideas and key points.' }] },
            { type: 'text', title: 'How a lecture is organised', text: 'The language is quite formal. The speaker usually begins by saying what the lecture will cover, then takes the main points one by one, often with examples, and ends with a summary or a final point. The headings in the notes on your question paper usually follow the same plan.' },
            { type: 'note', tone: 'tip', title: 'Use the headings', text: 'Notes in Part 4 have headings. When you hear the speaker move to a new heading ("Let\'s move on to the remedies …"), move your eyes to that part of the notes.' }] },
          { label: 'Signposts', icon: 'signpost', lead: 'Signpost words tell you what is coming next: an example, a contrast, a new point, the end. They help you keep your place.', blocks: [
            { type: 'table', head: ['What comes next', 'Signpost words'], rows: [
              ['the plan of the talk', 'Today I\'d like to talk about … · I\'m going to focus on …'],
              ['the order of points', 'Firstly · Secondly · Then · After that · Lastly · Finally'],
              ['another point or example', 'In addition · Also · What\'s more · Another example is …'],
              ['an example', 'For example · For instance · such as · Take … for example'],
              ['a contrast', 'However · By contrast · On the other hand · Whereas'],
              ['something unexpected', 'Surprisingly (enough) · Interestingly · In fact'],
              ['the same idea in other words', 'In other words · That is to say · To put it another way'],
              ['a new topic', 'Let\'s move on to … · Turning now to … · Now let\'s look at …'],
              ['a general statement', 'Generally speaking · On the whole · In most cases'],
              ['the end', 'To sum up · In conclusion · So, to conclude …']] },
            { type: 'note', tone: 'info', text: 'Try Exercise 1 below: match ten signpost words to their meanings (no recording needed).' }] },
          { label: 'Notes & flow charts', icon: 'pen', lead: 'Most Part 4 questions are gaps in notes, a summary or a flow chart.', blocks: [
            { type: 'steps', items: [
              { t: 'Read the title and headings', d: 'They tell you the topic and the plan of the lecture.' },
              { t: 'Predict each gap', d: 'What fits the grammar (noun, verb, adjective, plural)? What fits the meaning (a date, a place, a process, a person)?' },
              { t: 'Follow the order', d: 'The gaps follow the lecture. In a flow chart, the arrows show the order of a process or the events in time.' },
              { t: 'Write what you hear', d: 'The answer is usually one word (or two) said in the lecture. Keep to the word limit, and check that it fits the sentence.' }] },
            { type: 'note', tone: 'warn', title: 'Check after you write', text: 'Is the spelling right? Does it need a plural -s? Does it fit grammatically? "Fruit taken to the **mills**" or "the **mill**" can both work, but "the **milling**" does not.' }] },
          { label: 'Spelling', icon: 'abc', lead: 'Part 4 answers are often academic words. Practise spelling these.', blocks: [
            { type: 'chips', tone: 'warn', groups: [
              { label: 'Often misspelled', items: ['environment', 'government', 'development', 'research', 'temperature', 'population', 'technology', 'experiment', 'laboratory', 'knowledge', 'behaviour', 'analysis', 'necessary', 'accommodation', 'communication', 'equipment', 'agriculture', 'architecture', 'pollution', 'resources', 'species', 'climate'] },
              { label: 'British spellings (American also accepted)', items: ['centre / center', 'colour / color', 'behaviour / behavior', 'organise / organize', 'labelled / labeled', 'programme / program', 'metre / meter', 'travelled / traveled'] }] }] }
        ] },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'In-class exercises', title: 'Practise Part 4', intro: 'Open an exercise, read the questions, then play the recording. Each one has its answers folded at the bottom.',
        items: [
          { id: 'ieb2w1d5-e1', title: 'Signpost words', kind: 'Matching · no recording', tip: 'Match each signpost word with its meaning. Think about where you would hear it in a lecture.',
            blocks: [{ type: 'ieMatch', id: 'ieb2w1d5-e1-q1', from: 1, boxTitle: 'Meanings', instruction: 'Look at the signpost words 1–10, which signal different kinds of information. Match each one with its meaning, **A–J**.',
              options: ['another example', 'something that is unexpected', 'making the point clearer by giving supporting information', 'something quite different, or the opposite', 'a closing statement, or the final point in a list', 'a possible action that can produce the result you want', 'a change of subject', 'most of the time, usually', 'an opposing point of view', 're-stating something in a different way'],
              items: [{ q: 'One way …', answer: 'F' }, { q: 'In fact …', answer: 'C' }, { q: 'And … in addition', answer: 'A' }, { q: 'Surprisingly enough …', answer: 'B' }, { q: 'By contrast …', answer: 'D' }, { q: 'Lastly …', answer: 'E' }, { q: 'Let\'s move on to …', answer: 'G' }, { q: 'Generally speaking, …', answer: 'H' }, { q: 'In other words, …', answer: 'J' }, { q: 'On the other hand, …', answer: 'I' }] }] },
          { id: 'ieb2w1d5-e2', title: 'The history of McDonald\'s', kind: 'Flow chart', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1dmytWsoc-xLSGlF4b5_THL-HLJC_6hHE/view', note: 'A lecture about how a small restaurant became a global business.' }],
            blocks: [{ type: 'ieGap', id: 'ieb2w1d5-e2-q1', from: 1, layout: 'flow', title: 'McDonald\'s: the early years', instruction: 'Complete the flow chart below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.',
              text: '1940: the first McDonald\'s hamburger restaurant\n1948: re-opened as a take-away restaurant with affordable and [[good quality|good-quality]] food\nThe brothers were seen as pioneers of [[fast food]]\nThey introduced specialisation: one cook on burgers, one cook on [[milkshakes|milkshake]]\n1950: burger sales reached [[1 million|one million|1 million burgers]]\n1961: the McDonald brothers sold the business and [[their name|the name|name]]' }] },
          { id: 'ieb2w1d5-e3', title: 'Olive oil production', kind: 'Flow chart', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1aR5nEtw5D8BI_w1a8tunlY6n8MAjr-f8/view', note: 'A short talk about how olive oil is made.' }],
            blocks: [{ type: 'ieGap', id: 'ieb2w1d5-e3-q1', from: 1, layout: 'flow', title: 'Olive oil production', instruction: 'Complete the flow chart below. Write **NO MORE THAN THREE WORDS** for each answer.',
              text: 'Olives picked [[by hand]]\nFruit taken to the [[mill|mills]] and crushed\nExtra virgin oil produced from the first pressing\nProduct bottled and [[labelled|labeled]]\nTransported to markets [[at home and abroad|home and abroad]]' }] },
          { id: 'ieb2w1d5-e4', title: 'The history of dentistry', kind: 'Note completion', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/19eDt1vulqLlXcVwjVYCdWHevUnSzWupf/view', note: 'A lecture on how people treated toothache through history.' }],
            tip: 'The notes follow the lecture in time order: from the earliest history to modern dentistry.',
            blocks: [{ type: 'ieGap', id: 'ieb2w1d5-e4-q1', from: 1, layout: 'notes', title: 'The History of Dentistry', instruction: 'Complete the notes below. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.',
              text: '# Early history\n- The earliest reference to problems with teeth was in [[5000 BC]].\n- The ancient Sumerians called problems with teeth "tooth [[worms]]".\n- There is [[evidence|historical evidence]] to show that the Chinese used dental treatments.\n# Remedies and treatment\n- An old text from [[Egypt]] reveals medical practices from 1700 to 1500 BC.\n- The text refers to the use of [[olive oil|onions]] and [[onions|olive oil]] to relieve toothache.\n- In the fifth century BC a Greek [[historian]] noted the beginnings of specialisation in medicine.\n- A Greek doctor was the first to [[extract]] problem teeth.\n- In Europe during the [[Middle Ages]], doctors performed dentistry in people\'s homes.\n- A dentist from France is said to have founded [[modern]] dentistry.' }] },
          { id: 'ieb2w1d5-e5', title: 'What is marketing?', kind: 'A full Part 4 · Questions 31–40', audio: [{ title: 'Recording · Questions 31–40', src: 'https://drive.google.com/file/d/1ydY1C1rOvU-L9rva41ewL7WPNjd0TMjj/view', note: 'A lecture introducing the basic ideas of marketing.' }],
            tip: 'A complete Part 4 with four question types. There is no break, so read all four sets before you play.',
            blocks: [
              { type: 'ieGap', id: 'ieb2w1d5-e5-q1', from: 31, layout: 'notes', title: 'What is marketing?', instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS** for each answer. (Question 31 needs two things.)',
                text: '[[selling and advertising|advertising and selling]] represent only two aspects of marketing\n# Marketing involves\n- finding customers\n- ensuring customer satisfaction\n- [[making money|making a profit|making profit]]' },
              { type: 'ieGap', id: 'ieb2w1d5-e5-q2', from: 33, layout: 'notes', title: 'Human needs', instruction: 'Complete the notes below. Write **NO MORE THAN TWO WORDS** for each answer. (Question 33 needs two things.)',
                text: '- Physical needs: e.g. food, [[warmth and safety|safety and warmth]]\n- Social needs: e.g. belonging\n- [[individual]] needs: e.g. knowledge\nHuman needs → human wants → human demands' },
              { type: 'ieMatch', id: 'ieb2w1d5-e5-q3', from: 35, reuse: true, boxTitle: 'Market research methods', instruction: 'Which market research method is used by each of these businesses? Write the correct letter, **A–C**, next to Questions 35–38.',
                options: ['customer observation', 'free offers', 'in-store surveys'],
                items: [{ q: 'supermarkets', answer: 'C' }, { q: 'department stores', answer: 'A' }, { q: 'fast-food companies', answer: 'B' }, { q: 'theme parks', answer: 'A' }] },
              { type: 'ieTable', id: 'ieb2w1d5-e5-q4', from: 39, title: 'Customer satisfaction', instruction: 'Complete the table below. Write **NO MORE THAN THREE WORDS** for each answer.',
                columns: ['Product performance', 'Customers are'], rows: [['poor', 'unhappy'], ['good', '[[satisfied]]'], ['[[better than expected]]', 'delighted']] }] }
        ] },
      { type: 'recap', anchor: 'xl-sum', title: 'Remember',
        items: ['**Read all ten questions** before the lecture starts: there is no break.', '**Signpost words** (*firstly, however, to sum up*) tell you what comes next.', 'Notes and flow charts follow the **order** of the lecture.', 'Answers are often **academic words**: spell them carefully.', 'If you miss an answer, **move on**: do not lose the next one too.'] },
      { type: 'check', anchor: 'xl-check', kicker: 'Check yourself', title: 'True or false?', intro: 'Tap True or False to see the answer.',
        items: [
          { s: 'Part 4 has a short break in the middle.', answer: false, why: 'Part 4 plays without a break. Read all ten questions first.' },
          { s: '"In other words" introduces the same idea said differently.', answer: true, why: 'It re-states something, often in simpler words.' },
          { s: '"On the other hand" introduces another example.', answer: false, why: 'It introduces an opposing point of view.' },
          { s: 'The headings in the notes usually follow the plan of the lecture.', answer: true, why: 'Use them to keep your place.' },
          { s: 'Part 4 is usually easier than Part 3.', answer: false, why: 'Part 4 is the hardest part of the test.' }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '05', minutes: 70, tone: 'teal', art: 'listening',
    title: 'Part 4: academic lecture', subtitle: 'Tips and in-class exercises',
    outcome: 'Follow a lecture with signpost words, complete notes and flow charts, and practise with five exercises.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 25, grouping: 'Alone', title: 'Read the Part 4 tips', goal: 'Read how Part 4 works, signpost words, notes and flow charts, and spelling.', blocks: [{ type: 'text', title: 'Tips', text: 'How Part 4 works, signposts, notes and flow charts, spelling.' }] },
      { id: 'practise', short: 'Exercises', minutes: 45, grouping: 'Alone', title: 'Do the in-class exercises', goal: 'Do the exercises and check your answers.', blocks: [{ type: 'text', title: 'Exercises', text: 'Five Part 4 exercises.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
