/* IELTS · Reading · Learn · Lesson 5 — Sentence completion, with and without a box (question types 4 and 5).
   Source: the teacher's training notes "Reading" (RAD TIME), pages 11–13. "Medicine for the healthy" and "Work
   experience and internships" are adapted (rewritten); the internship exercise has two new questions (4 and 5).
   Ids (lesson, activities, exercises, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w2d5', week: 2, day: 5, sheet: true, illus: 'health',
  title: 'Sentence completion',
  duration: 'About 55 minutes',
  journey: 'Sentences with a gap: sometimes you copy words from the passage, sometimes you choose an ending from a box. Either way, the finished sentence must be true to the passage, grammatically correct and make sense.',
  finish: { title: 'Next', text: 'Summary completion' },
  learn: {
    tags: ['Question types 4 and 5'],
    jump: [['xl-tips', 'Tips', 'tip'], ['xl-ex', 'Exercises', 'pen']],
    blocks: [
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'Two kinds of sentence completion',
        items: [
          { label: 'Without a box', icon: 'pen', lead: 'You complete each sentence with words from the passage, for example **NO MORE THAN THREE WORDS AND/OR A NUMBER**.', blocks: [
            { type: 'list', items: [
              'The answers are **all in passage order**.',
              'Your answer must make the sentence **grammatically correct** and **meaningful**.',
              'Check every answer: **grammar**, **meaning**, **no repeated words**, **not too general**, **spelling**.'] },
            { type: 'note', tone: 'tip', title: 'Meaning comes first', text: 'When you find the place of the answer (usually one sentence), look for words that make sense in the gap. Then use the question to decide which of them fit best.' },
            { type: 'steps', title: 'What to do', items: [
              { t: 'Check the word limit', d: 'Read the instructions: how many words can you use?' },
              { t: 'Read ONE sentence carefully', d: ['**Understand** it.', '**Predict** the answer. *Grammar:* a noun (singular, plural or uncountable), an adjective, a verb. *Meaning:* a person, a place, a number, a date, an object …', '**Choose words you can trust**, to find the place faster.'] },
              { t: 'Find the PLACE of the answer', d: 'Scan the passage for your trusted words.' },
              { t: 'Find the ANSWER', d: 'Read that sentence from the beginning to the end, several times if necessary, and use **grammar**, **meaning** and **the question** to find the answer.' }] },
            { type: 'reveal', title: 'Try it', items: [
              { q: 'There is a blue ______ on the desk.\n*Passage: On the desk you can see some beautiful pencils, a blue handkerchief and a pleasant-smelling Japanese pen.*', a: '**handkerchief**. *A* needs a singular noun, and the *blue* thing is the handkerchief. Do not repeat *blue*.' },
              { q: 'The interview is in the ______.\n*Passage: The interview is next week, on Monday morning at 9 o’clock.*', a: '**morning**: *in the morning*.' },
              { q: 'First, you should ______ by describing yourself and your abilities.\n*Passage: The first step is to complete the application form by describing yourself and your abilities.*', a: '**complete the application** (or *complete the application form*, if four words are allowed). *Should* needs a verb.' }] },
            { type: 'reveal', title: 'Why are these answers wrong?', items: [
              { q: '**Japanese student** go on a trip every year.', a: '**Grammar**: *go* needs a plural subject: *Japanese students*.' },
              { q: 'Those **mice** who do research need to have health insurance.', a: '**Meaning**: mice do not do research. (The passage meant *scientists*.)' },
              { q: 'Living in Australia is really **phantastic**.', a: '**Spelling**: *fantastic*.' },
              { q: 'You need to get **over 7** in IELTS or above.', a: '**An extra word**: *or above* already means *over*. Write *7*.' },
              { q: '**Birds** are becoming extinct.', a: '**Too general**: which birds? *North African birds*.' }] }] },
          { label: 'With a box', icon: 'list', lead: 'You choose the best ending for each sentence from a box of options. (This type is also called *matching sentence endings*.)', blocks: [
            { type: 'list', items: [
              'The answers are **in passage order**.',
              'There are **more endings than sentences**.',
              'Choose the **closest possible** ending: the one that matches the passage, not just one that sounds right.',
              'Read **all** the options for each question.',
              'Spend more time on the **sentence beginnings**, and analyse them before you go to the passage.'] },
            { type: 'steps', title: 'What to do', items: [
              { t: 'Read ONE sentence beginning carefully', d: 'Underline its key words.' },
              { t: 'Find the right place in the passage', d: 'Be careful not to choose the wrong area: a word from the question may appear in several places.' },
              { t: 'Read that part very carefully', d: 'Then come to the box and read **all** the endings.' },
              { t: 'Choose the closest ending', d: ['Do **not** cross out an ending you have used: one may be needed again in a later exercise of the same kind.', 'If two endings seem possible, write both and come back later.'] }] },
            { type: 'note', tone: 'tip', text: 'Grammar helps here too: the beginning and the ending must make one correct sentence. *By winning the scholarship, you have the chance to …* needs a **verb**.' }] }
        ] },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'Exercises', title: 'Try them', intro: 'Open an exercise, read the passage and answer the questions. The answers, with the reasons, are folded at the bottom.',
        items: [
          { id: 'ieb2w2d5-e1', title: 'Medicine for the healthy', kind: 'Sentence completion', go: 'Read',
            tip: 'The six answers come in passage order, about one in each paragraph from B to D. Predict the grammar of each gap first.',
            passage: { title: 'Medicine for the healthy', text: 'A  The main purpose of medicine has always been to treat illness. But recent medical advances now promise to change the lives of healthy people too. We are entering a new age of medicine, in which drugs and biotechnology designed for the sick may soon make people’s minds and bodies much more powerful.\n\nB  Students have long used caffeine, in the form of coffee, to stay awake and think clearly while they study. However, one in ten students at the University of Cambridge has now admitted taking medication to help them work for longer. The pills most commonly used are Ritalin, a medicine used to treat the brain condition ADHD (attention deficit hyperactivity disorder), which stops people concentrating, and Modafinil, which treats narcolepsy, the ‘sudden sleep’ disorder. Both medicines work by stimulating brain activity in patients, but some healthy students take them to stay alert and focused for longer. Although the short-term side effects can seem small, regular use is likely to be dangerous. One student, for example, took Modafinil for four days to help her revise for an exam. She passed the exam, but then collapsed, lost her sight for a short time and spent the night in hospital.\n\nC  There is another way of boosting brain activity. TDCS (transcranial direct current stimulation) involves sending small electrical currents into the brain. This therapy has been used especially to treat people who have lost their memories after strokes. Research at the University of Oxford suggests that TDCS can also help healthy people do better in maths tests. Surprisingly, the effects seem to last for up to six months. Scientists are now discussing a battery-powered cap (nicknamed ‘the Zap Cap’) that people could buy to stimulate the brain in the same way. It may turn out to be quite cheap, but its effects cannot be guaranteed.\n\nD  Of course, it is not only the healthy brain that could benefit from medical advances. For many years, some sportspeople have illegally improved their all-round physical power by using anabolic steroids, drugs first designed to stop muscles wasting away. However, new research promises far more powerful forms of enhancement. Scientists have become increasingly skilled at reproducing parts of the body that have stopped working. They can now put new retinas into the eyes of blind people, for example, or give robotic limbs, controlled by the brain, to people who have lost arms or legs. So how could healthy people benefit from this technology? Some have suggested that security guards could have eye implants to help them see in the dark, or that soldiers might wear extra legs or ‘smart trousers’ to help them cross difficult ground. In fact, the first wearable robot to go on sale has already been launched, so soon people may be able to run 20 miles to school or work without feeling tired.\n\nE  It seems likely, then, that medical innovation could create a society divided into three groups: the sick, the healthy and the super-human. The question is: do we want to live in a society in which some people compete and succeed by using medication? It is a decision that needs to be made in the coming decades.' },
            blocks: [{ type: 'ieGap', id: 'ieb2w2d5-e1-q1', from: 1, layout: 'sentences', instruction: 'Complete each sentence with **NO MORE THAN THREE WORDS AND/OR A NUMBER** from the passage.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'Ritalin is [[used to treat]] ADHD.\nTaking Modafinil regularly is likely to be [[dangerous]].\nReceiving small electrical currents is a treatment for people who have lost their [[memories]].\nDrugs have made it possible for athletes to improve their [[all-round physical power|physical power]].\nScientists can now produce body parts such as retinas and [[robotic]] arms and legs.\n[[Wearable]] robots may help us run long distances without feeling tired.',
              why: ['Paragraph B: *a medicine used to treat the brain condition ADHD*. The gap needs a verb phrase before *ADHD*.', 'Paragraph B: *regular use is likely to be dangerous*. The gap needs an adjective.', 'Paragraph C: *people who have lost their memories after strokes*.', 'Paragraph D: *improved their all-round physical power*. *All-round* has a hyphen, so it counts as one word.', 'Paragraph D: *robotic limbs* = robotic arms and legs. The gap needs an adjective.', 'Paragraph D: *the first wearable robot*.'] }] },
          { id: 'ieb2w2d5-e2', title: 'Work experience and internships', kind: 'Sentence endings (with a box)', go: 'Read',
            tip: 'Two programmes are described: the **work experience programme** (paragraphs 1–2) and the **internship programme** (paragraph 3). Find the right one before you choose.',
            passage: { title: 'Work experience and internships', subtitle: 'A guide from the education authority', text: 'Through our student work experience programme, the education authority offers more than 9,000 work experience placements to young people every year. The programme is designed to give students job opportunities that will enrich their studies and help them gain useful work skills, which improves their chances of finding a good job after they graduate. A placement does not have to be related to a particular field of study, so participants may even discover areas of work they had never thought about before.\n\nAll secondary and post-secondary students in full-time education are eligible to apply for the programme. Individual case managers decide the minimum level of academic achievement needed for each job. During the academic term, a student may work part-time. During the summer holidays, a student may work full-time or part-time. The education authority recruits all the students on the programme. Applicants must apply in person at our office, and we then refer them to the right department.\n\nOur internship programme is designed especially for post-secondary students, whether they study part-time or full-time. Interns are given an assignment related to their area of research, which gives them the chance to use their academic knowledge in a real workplace. The college or university plays an important part in placing students on this programme, and it decides how long each assignment will last. Assignments traditionally last four months, but they may vary from 4 to 18 months. Students on this programme normally work full-time.' },
            blocks: [{ type: 'ieMatch', id: 'ieb2w2d5-e2-q1', from: 1, kindName: 'Matching sentence endings', boxTitle: 'Endings', instruction: 'Complete each sentence with the correct ending, **A–H**, from the box.',
              options: ['if you have high marks at your school or college.', 'if you are a full-time student.', 'outside normal term time.', 'when you have graduated from university.', 'if you have finished secondary education.', 'is decided by your college or university.', 'is always four months.', 'apply in person.'],
              items: [
                { q: 'You can apply for the work experience programme …', answer: 'B', why: '*All secondary and post-secondary students in full-time education are eligible.* High marks (A) are decided job by job.' },
                { q: 'You can work full-time on the work experience programme …', answer: 'C', why: 'In term time you may work part-time; in the summer holidays you may work full-time.' },
                { q: 'You can only join the internship programme …', answer: 'E', why: 'It is *designed especially for post-secondary students*, so you must have finished secondary education. It is not after university (D).' },
                { q: 'The length of an internship …', answer: 'F', why: 'The college or university *decides how long each assignment will last*. Four months is usual, not always (G).' },
                { q: 'Students who want to join the work experience programme must …', answer: 'H', why: '*Applicants must apply in person at our office.*' }] }] }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '05', minutes: 55, tone: 'blue', art: 'reading',
    title: 'Sentence completion', subtitle: 'Question types 4 and 5',
    outcome: 'Complete sentences with words from the passage, or with the right ending from a box.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 20, grouping: 'Alone', title: 'Read the tips', goal: 'Read the tips for both kinds of sentence completion.', blocks: [{ type: 'text', title: 'Tips', text: 'Sentence completion with and without a box.' }] },
      { id: 'practise', short: 'Exercises', minutes: 35, grouping: 'Alone', title: 'Do the exercises', goal: 'Do the two exercises and check your answers.', blocks: [{ type: 'text', title: 'Exercises', text: 'Two exercises.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
