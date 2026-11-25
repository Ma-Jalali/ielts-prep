/* IELTS · Listening · Learn · Lesson 4 — Part 3: academic discussion.
   A Learn lesson on one page (js/sheet.js, learnPage): tips in tabs, short practice dialogues, then the teacher's
   in-class exercises. Tips: the teacher's notes "IELTS Listening Tips" (International House), Part 3 pages, checked and
   extended (the two short dialogues are written for this site). Exercises and answers: the teacher's slides "Listening
   Class Exercises" (Part 3: Exercises 14–21); recordings from the teacher's Google Drive.
   Ids are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d4', week: 1, day: 4, sheet: true, illus: 'people',
  title: 'Part 3: academic discussion',
  duration: 'About 70 minutes',
  journey: 'In Part 3 two to four people discuss a study topic, and you follow who says what, what they agree on and what they decide. Learn how to handle the speakers, multiple choice and matching, and the traps, then practise with six exercises from class.',
  finish: { title: 'Next', text: 'Part 4: academic lecture' },
  learn: {
    tags: ['Questions 21–30', 'Two to four speakers'],
    jump: [['xl-glance', 'At a glance', 'info'], ['xl-tips', 'Tips', 'tip'], ['xl-ex', 'Exercises', 'pen'], ['xl-sum', 'Remember', 'star'], ['xl-check', 'Check yourself', 'ok']],
    blocks: [
      { type: 'facts', anchor: 'xl-glance', kicker: 'Part 3 at a glance', title: 'A discussion about study',
        items: [['21–30', 'questions, usually in two sets'], ['2–4', 'speakers: students, a tutor, a lecturer'], ['Opinions', 'you follow ideas, reasons and views, not just facts'], ['Harder', 'than Parts 1 and 2: the speakers interrupt and change their minds']] },
      { type: 'key', title: 'The big idea', text: 'Part 3 is about **opinions**. The right answer is usually what the speakers **agree on in the end**, not the first thing you hear.' },
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'How to do well in Part 3', intro: 'Five tabs. Read them in order: each one ends with a button to the next.',
        items: [
          { label: 'How it works', icon: 'info', blocks: [
            { type: 'cards', items: [
              { icon: 'people', t: 'Up to four speakers', d: 'Usually students talking with each other or with a tutor: about an assignment, a project, a presentation, a course choice.' },
              { icon: 'chat', t: 'Ideas, not just facts', d: 'You follow the discussion and pick out important facts, reasons and ideas, and sometimes who holds which opinion.' },
              { icon: 'list', t: 'Question types', d: 'Mostly multiple choice and matching, often with note or flow-chart completion.' },
              { icon: 'repeat', t: 'Said in other words', d: 'The answer is almost never in the same words as the question. Listen for the meaning.' }] },
            { type: 'note', tone: 'tip', title: 'Learn the names', text: 'The speakers say their names at the start. Note who is who: many questions ask what **one** speaker thinks, or who said something.' }] },
          { label: 'Speakers', icon: 'people', lead: 'Answers come from different speakers, and some depend on whether the speakers agree.', blocks: [
            { type: 'list', items: [
              'At the start, note each **name** and who they are (student, tutor …).',
              'Read each question to see **whose** view it asks for: "What does **Paul** think …?"',
              'Wait for the **decision**: a speaker suggests something, another disagrees, and they finally agree on something else.',
              'A question about what they **both** think needs both speakers to agree.'] },
            { type: 'table', title: 'Agreeing and disagreeing', head: ['Agreeing', 'Disagreeing or doubting'], wide: true, rows: [
              ['Exactly. / Absolutely.', 'I\'m not so sure about that.'],
              ['That\'s a good point.', 'I see what you mean, but …'],
              ['I couldn\'t agree more.', 'Actually, I think …'],
              ['That makes sense.', 'Hmm, that might be a problem.'],
              ['Yes, let\'s do that.', 'I\'d rather …']] }] },
          { label: 'Multiple choice', icon: 'list', lead: 'Multiple choice is the most common type in Part 3.', blocks: [
            { type: 'steps', items: [
              { t: 'Read the question first', d: 'Underline the key words in the question itself: it tells you what to listen for.' },
              { t: 'See how the options differ', d: 'Underline the one or two words that make each option different.' },
              { t: 'Expect to hear all of them', d: 'All three options are often mentioned. Only one answers the question. The others are mentioned and then rejected, or are true but answer a different question.' },
              { t: 'Choose TWO / THREE', d: 'In "Choose TWO letters" questions, the answers can be written in any order, but you need both (or all three) right.' }] }] },
          { label: 'Matching', icon: 'target', lead: 'Matching: a box of options (A–G) and a list of questions.', blocks: [
            { type: 'list', items: [
              'Read the **box** first, then the questions. Underline the key word in each option.',
              'The **questions** are in the order of the recording; the options in the box are **not**.',
              'Some options are **not used**. Read the instructions: "NB You may use any letter more than once."',
              'The options are almost always **said in other words**: *good work prospects* might be "you\'ll find a job easily".'] },
            { type: 'table', title: 'Common paraphrases', head: ['In the question', 'You might hear'], rows: [['expensive', 'it costs a lot · pricey · not cheap'], ['difficult', 'challenging · not easy · tough'], ['increase', 'go up · rise · grow'], ['essential', 'vital · crucial · you can\'t do without'], ['problem', 'issue · drawback · disadvantage'], ['benefit', 'advantage · plus · the good thing'], ['many', 'plenty of · a lot of · a large number of'], ['old-fashioned', 'out of date · dated']] }] },
          { label: 'Traps', icon: 'warn', lead: 'Part 3 is full of distractors: words that match an option but do not answer the question. Try these.', blocks: [
            { type: 'spot', items: [
              { lines: [['Student', 'Is there anything in my work you think I could improve?'], ['Tutor', 'Well, your work\'s been good this term. Your data is clearly set out, and you obviously pay attention in lectures. You could read a little more widely around the topic, though.']], q: 'The student needs to work on his …', options: ['concentration', 'presentation skills', 'subject knowledge'], answer: 2, why: '"Read more widely around the topic" means **subject knowledge**. Attention and presentation were both praised: they are the distractors.' },
              { lines: [['Student', 'Hi, I\'m looking for Mr Peterson. Is he on holiday?'], ['Administrator', 'He\'s just back from two weeks\' study leave, but he isn\'t in today: he\'s caught a nasty cold. Try his four o\'clock class tomorrow.']], q: 'Mr Peterson is not available because he is …', options: ['off sick', 'on study leave', 'teaching another class'], answer: 0, why: 'He has a cold, so he is **off sick**. The study leave is over, and the class is tomorrow: both are mentioned, neither is the reason.' }] },
            { type: 'note', tone: 'warn', title: 'Hearing a word from an option is not enough', text: 'Speakers often say a word from a wrong option, then reject it: "We could use a survey … no, that would take too long." Wait for the end of the idea.' }] }
        ] },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'In-class exercises', title: 'Practise Part 3', intro: 'Open an exercise, read the questions, then play the recording. Each one has its answers folded at the bottom.',
        items: [
          { id: 'ieb2w1d4-e1', title: 'Five short extracts', kind: 'Multiple choice', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1GwxljtOCWI6yEyJMY7VXR9IDwEPrsu7B/view', note: 'Short, separate extracts: a timetable, a walk, sharks, a building and planes.' }],
            tip: 'Each question has its own short extract. Read the question and options before each one, and underline what makes the options different.',
            blocks: [
              { type: 'ieChoice', id: 'ieb2w1d4-e1-q1', from: 1, instruction: 'Choose the correct letter, **A**, **B** or **C**.', items: [{ q: 'Which lecture does the woman attend in the middle of the day?', options: ['Library skills', 'Technical design', 'History of architecture'], answer: 'B' }] },
              { type: 'ieMulti', id: 'ieb2w1d4-e1-q2', from: 2, numbers: 1, pick: 2, instruction: 'Choose **TWO** letters, **A–G**.', q: 'Which TWO things should they take on the walk?', options: ['a larger rucksack', 'a drink container', 'soft drinks', 'cold food', 'insect repellent', 'a camera', 'sunglasses'], answers: ['B', 'D'] },
              { type: 'ieChoice', id: 'ieb2w1d4-e1-q3', from: 3, instruction: 'Choose the correct letter, **A**, **B** or **C**.', items: [
                { q: 'The speaker says sharks are unlike any other fish because they', options: ['cannot float in water.', 'are unable to swim backwards.', 'catch their prey in the air.'], answer: 'A' },
                { q: 'What is the Tjibaou building?', options: ['a home for the native people of New Caledonia', 'a unique example of Italian architecture', 'a place to learn about Kanak culture'], answer: 'C' }] },
              { type: 'ieMulti', id: 'ieb2w1d4-e1-q4', from: 5, pick: 3, instruction: 'Choose **THREE** letters, **A–G**.', q: 'Which THREE things does the woman like?', options: ['the appearance of the planes', 'the idea of working for an airline', 'travelling to unusual places', 'collecting airline equipment', 'watching the planes take off', 'the noise of the engines', 'being a passenger'], answers: ['A', 'D', 'F'] }] },
          { id: 'ieb2w1d4-e2', title: 'White-water canoeing', kind: 'Multiple choice', audio: [
              { title: 'Recording 1 · Questions 1–2', src: 'https://drive.google.com/file/d/1Yw29zNJFTq_u28koDq3CpxnSs2YsZjFg/view', note: 'A radio programme about canoeing begins.' },
              { title: 'Recording 2 · Questions 3–6', src: 'https://drive.google.com/file/d/1GP5lrmSyKPdX94vyghw7H6bUQJf3VsrV/view', note: 'Cynthia explains the sport and what to buy.' },
              { title: 'Recording 3 · Question 7', src: 'https://drive.google.com/file/d/1oGANcshTcXNR8fnbVtpE8GtJDip3YhMj/view', note: 'Cynthia talks about serious canoeists.' }],
            blocks: [
              { type: 'ieChoice', id: 'ieb2w1d4-e2-q1', from: 1, instruction: 'Choose the correct letter, **A**, **B** or **C**.', items: [
                { q: 'The announcer says that canoeing is', options: ['safer than people think.', 'enjoyable for most people.', 'becoming more popular.'], answer: 'C' },
                { q: 'The speaker says that canoes may be hard to', options: ['steer.', 'balance.', 'get going.'], answer: 'B' }] },
              { type: 'ieChoice', id: 'ieb2w1d4-e2-q3', from: 3, instruction: 'Choose the correct letter, **A**, **B** or **C**.', items: [{ q: 'Where does the term "white-water canoeing" come from?', options: ['the type of river that is chosen', 'the effect of the paddles on the water', 'the speed at which the boat travels'], answer: 'B' }] },
              { type: 'ieMulti', id: 'ieb2w1d4-e2-q4', from: 4, pick: 3, instruction: 'Choose **THREE** letters, **A–G**.', q: 'Which THREE things does Cynthia recommend you buy to get started?', options: ['a low-budget canoe', 'protective headgear', 'a waterproof jacket', 'a short-sleeved wetsuit', 'a long-sleeved sweater', 'rubber boots', 'gloves'], answers: ['B', 'D', 'G'] },
              { type: 'ieChoice', id: 'ieb2w1d4-e2-q7', from: 7, instruction: 'Choose the correct letter, **A**, **B** or **C**.', items: [{ q: 'According to Cynthia, serious canoeists', options: ['take risks on purpose.', 'prefer to teach people in the winter.', 'avoid rivers that are too high.'], answer: 'A' }] }] },
          { id: 'ieb2w1d4-e3', title: 'A tutorial about a composition', kind: 'Multiple choice', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1okGnMG7__PluRi5LKJgFXL6r4TSq07ui/view', note: 'A tutor talks to Jamie about his work and the next assignment.' }],
            blocks: [{ type: 'ieChoice', id: 'ieb2w1d4-e3-q1', from: 1, instruction: 'Choose the correct letter, **A**, **B** or **C**.', items: [
              { q: 'What pleased the tutor about Jamie\'s composition?', options: ['It was well researched.', 'It was neatly presented.', 'It included plenty of data.'], answer: 'C' },
              { q: 'How will the tutor make sure that the students work on relevant topics?', options: ['by asking them to get together to discuss their choices', 'by talking to each student individually', 'by handing out a list of topics to the class'], answer: 'B' }] }] },
          { id: 'ieb2w1d4-e4', title: 'Choosing a course', kind: 'Matching', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1SWmLO5cU_8_PFeo5zejm9B04IwGoxNWM/view', note: 'Students compare university courses.' }],
            tip: 'Three questions, six courses: three courses are not used.',
            blocks: [{ type: 'ieMatch', id: 'ieb2w1d4-e4-q1', from: 1, boxTitle: 'Courses', instruction: 'Which course has the following advantages? Choose **THREE** answers from the box and write the correct letter, **A–F**, next to Questions 1–3.',
              options: ['Arts', 'Computing', 'Dentistry', 'Law', 'Medicine', 'Science'],
              items: [{ q: 'good work prospects', answer: 'E' }, { q: 'plenty of work opportunities', answer: 'D' }, { q: 'lower entry requirements', answer: 'A' }] }] },
          { id: 'ieb2w1d4-e5', title: 'Problems with four cars', kind: 'Matching', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/19pl4IF7ktxBAbrS0CcEJLZGTf1vEKH6P/view', note: 'A man gives his opinion of four vehicles.' }],
            blocks: [{ type: 'ieMatch', id: 'ieb2w1d4-e5-q1', from: 1, boxTitle: 'Common vehicle defects and problems', instruction: 'What point does the man make about each car? Choose **FOUR** answers from the box and write the correct letter, **A–G**, next to Questions 1–4.',
              options: ['limited colour range', 'hidden costs', 'high fuel consumption', 'lack of legroom', 'poor road holding', 'poor visibility', 'slow acceleration'],
              items: [{ q: 'Vehicle 1', answer: 'D' }, { q: 'Vehicle 2', answer: 'C' }, { q: 'Vehicle 3', answer: 'B' }, { q: 'Vehicle 4', answer: 'F' }] }] },
          { id: 'ieb2w1d4-e6', title: 'The Good Study Guide', kind: 'Notes from a box', audio: [{ title: 'Recording · Questions 21–26', src: 'https://drive.google.com/file/d/1EgpTT4_4jfQOoK1LPEIruGolv9EjSlRH/view', note: 'Rachel and Paul talk about a study skills book.' }],
            tip: 'Two speakers, two lists. Note which speaker is talking: Questions 21–23 are about Rachel, 24–26 about Paul.',
            blocks: [{ type: 'ieGap', id: 'ieb2w1d4-e6-q1', from: 21, layout: 'notes', title: 'The Open University Good Study Guide', instruction: 'Complete the notes below using letters **A–F** from the box. **NB** You may use any letter more than once. (Answers 21–23 and 24–26 may be in any order.)',
              bank: ['writing', 'note-taking', 'working with numbers', 'reading', 'videos', 'exam preparation'],
              text: '# What Rachel found most useful in the book\n[[C]]\n[[E]]\n[[F]]\n# What Paul needs\n[[A]]\n[[B]]\n[[F]]' }] }
        ] },
      { type: 'recap', anchor: 'xl-sum', title: 'Remember',
        items: ['Two to four speakers: know **who** says what.', 'Listen for **agreement** and **disagreement**: speakers change their minds.', 'Multiple choice: all the options may be **mentioned**. Choose the one that **answers** the question.', 'Matching: read the **box** first. A letter may be used more than once.', 'Beware of **distractors**: words that match an option but do not answer the question.'] },
      { type: 'check', anchor: 'xl-check', kicker: 'Check yourself', title: 'True or false?', intro: 'Tap True or False to see the answer.',
        items: [
          { s: 'Part 3 can have up to four speakers.', answer: true, why: 'Usually two or three: students and a tutor.' },
          { s: 'If you hear a word from an option, that option is the answer.', answer: false, why: 'Wrong options are often mentioned and then rejected.' },
          { s: 'In matching, the options in the box are in the order of the recording.', answer: false, why: 'The questions are in order; the box is not.' },
          { s: 'Noting the speakers\' names at the start can help you.', answer: true, why: 'Many questions ask what one speaker thinks.' },
          { s: 'In "Choose TWO letters", the two letters can be in any order.', answer: true, why: 'But you need both right.' }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '04', minutes: 70, tone: 'teal', art: 'listening',
    title: 'Part 3: academic discussion', subtitle: 'Tips and in-class exercises',
    outcome: 'Follow several speakers, handle multiple choice and matching, avoid distractors, and practise with six exercises.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 25, grouping: 'Alone', title: 'Read the Part 3 tips', goal: 'Read how Part 3 works, speakers, multiple choice, matching and traps.', blocks: [{ type: 'text', title: 'Tips', text: 'How Part 3 works, speakers and opinions, multiple choice, matching, traps.' }] },
      { id: 'practise', short: 'Exercises', minutes: 45, grouping: 'Alone', title: 'Do the in-class exercises', goal: 'Do the exercises and check your answers.', blocks: [{ type: 'text', title: 'Exercises', text: 'Six Part 3 exercises.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
