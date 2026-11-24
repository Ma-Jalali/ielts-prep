/* IELTS · Listening · Learn · Lesson 1 — Listening overview.
   A Learn lesson on one page (js/sheet.js, learnPage): the teacher's two videos, then how the test works.
   Videos: the teacher's Google Drive folder "Listening training" (Lesson 1 Basic Information & Tips, Lesson 2 Examples &
   Practice). The overview is written for this site from the course book's introduction (not copied from it).
   Ids (lesson, activities) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d1', week: 1, day: 1, sheet: true, illus: 'headset',
  title: 'Listening overview',
  duration: 'About 45 minutes',
  journey: 'How the IELTS Listening test works: its four parts, the question types, what happens on the day, how it is marked, and the habits that raise your score. Watch the two videos first, then read the overview and check yourself.',
  finish: { title: 'Next', text: 'Part 1: everyday conversation' },
  learn: {
    tags: ['4 parts', '40 questions'],
    blocks: [
      { type: 'videos', kicker: 'Watch first', title: 'Two videos from your teacher', intro: 'Watch them in order. You can pause, go back and watch again as often as you like.',
        items: [
          { title: 'Basic information and tips', note: 'What the Listening test is, how it is organised, and the tips that matter most.', src: 'https://drive.google.com/file/d/1QXj5lt7lH2U99KSa6ElWZC4RcOxREADL/view' },
          { title: 'Examples and practice', note: 'Real examples of the question types, and practice with them step by step.', src: 'https://drive.google.com/file/d/1s0hOrHXrWP5uwtPXLHJAxQ33ETtE7HOg/view' }
        ] },
      { type: 'facts', kicker: 'At a glance', title: 'The test in six numbers',
        items: [['4', 'parts, each harder than the one before'], ['40', 'questions: 10 in each part'], ['30', 'minutes, more or less, from start to finish'], ['1×', 'you hear each recording **once** only'], ['1', 'mark for each correct answer'], ['1–9', 'band score, with half bands such as 6.5']] },
      { type: 'parts', kicker: 'The four parts', title: 'What you will hear',
        intro: 'Parts 1 and 2 are about everyday life; Parts 3 and 4 are about study and academic life. The answers always come **in the same order** as the recording.',
        items: [
          { n: 1, qs: 'Questions 1–10', who: 'Two speakers', what: 'A conversation about an everyday, social situation.', eg: 'booking a holiday, joining a club, reporting a lost bag' },
          { n: 2, qs: 'Questions 11–20', who: 'One speaker', what: 'A talk on a general, everyday topic.', eg: 'a guided tour, a radio talk about a local event' },
          { n: 3, qs: 'Questions 21–30', who: 'Two to four speakers', what: 'A discussion about a study or education topic.', eg: 'two students and a tutor planning a project' },
          { n: 4, qs: 'Questions 31–40', who: 'One speaker', what: 'A lecture or talk on an academic subject.', eg: 'a university lecture on marine biology' }
        ],
        foot: 'Each recording lasts a few minutes. The instructions are on the recording, and before each part you get time to read the questions.' },
      { type: 'list', kicker: 'How it runs', title: 'What happens in the test',
        items: [
          'The recording starts and **cannot be stopped**. Once it has started you cannot leave or enter the room.',
          'Before each part you get a short time to **read the questions**. Use it: find the topic and underline key words.',
          'Parts 1, 2 and 3 are usually split into **two halves**, with time to read the next questions in the middle. Part 4 plays without a break.',
          '**On paper:** write on the question paper as you listen (short forms are fine there), then copy your answers to the answer sheet in the extra time at the end. Copy them carefully: only the answer sheet is marked.',
          '**On computer:** type your answers straight into the boxes as you listen. At the end you get two minutes to check them.'
        ] },
      { type: 'list', kicker: 'On the day', title: 'Before you go in', tone: 'gold',
        items: [
          'Listening is the **first** part of the test, so arrive early and settle in.',
          'On paper, bring a **pencil** and an **eraser**. You cannot take books, notes or a phone into the room.',
          'The room may be **full of people**. Expect some noise and stay focused on the recording.',
          'You hear everything **once**, so keep up with the questions: if you miss an answer, let it go and move to the next one.'
        ] },
      { type: 'faq', kicker: 'Your questions', title: 'Questions students often ask',
        items: [
          { q: 'Will I hear different accents?', a: 'Yes: British, Australian, North American and others. They are always clear and natural, and the speakers never make grammar mistakes.' },
          { q: 'What sort of questions will I get?', a: 'Most of the time you either **choose a letter** or **write a few words** (often no more than two or three). The types are: form, note, table and flow-chart completion; sentence completion; short answers; multiple choice; matching; and labelling a map, plan or diagram.\n\nAny type can appear in any part of the test.' },
          { q: 'Will I get every question type?', a: 'No. Each part usually has two or three types, so one full test has about eight or nine different ones. The same type can come up in more than one part.' },
          { q: 'Why are there so many situations and question types?', a: 'IELTS checks the listening you need to live, work or study in English: everyday conversations, talks, discussions and lectures, both formal and informal.' },
          { q: 'How should I use the reading time?', a: 'Read the questions before each part plays. Work out the topic, underline or highlight the key words, and decide what kind of answer each gap needs: a number, a name, a place, a noun, a verb?\n\nOn this site you can do the same: select words in a question to highlight or underline them.' },
          { q: 'What are key words?', a: 'The words that carry the meaning: usually nouns, verbs, numbers and names. Listen for them, and for other words with the same meaning, because the recording often says the same idea in a different way.' },
          { q: 'What is the best general approach?', a: 'Follow the words on the question paper to keep your place. Write as you listen, not afterwards. If you lose your place, look ahead to the next question and pick up from there.' },
          { q: 'How is the test marked?', a: 'One mark for each correct answer, 40 marks in all. Your mark is turned into a band score from 1 to 9, and half bands (such as 6.5) are possible. See the table below.' },
          { q: 'Does spelling matter?', a: 'Yes. A wrongly spelled answer is marked wrong, so check your spelling. British and American spellings are both accepted (programme / program, colour / color). Do not use short forms in your final answers. Numbers can be written as words or as figures.' },
          { q: 'What else can I do to prepare?', a: 'Listen to English every day: the radio, podcasts, TV, films, even songs. Then practise each part on this site, one exercise at a time, and check your answers carefully afterwards.' }
        ] },
      { type: 'table', kicker: 'Scores', title: 'From marks to a band score', intro: 'Roughly how many correct answers you need for each band (it varies slightly from test to test).',
        head: ['Band', 'Correct answers (out of 40)'],
        rows: [['9', '39–40'], ['8.5', '37–38'], ['8', '35–36'], ['7.5', '32–34'], ['**7**', '**30–31**'], ['**6.5**', '**26–29**'], ['6', '23–25'], ['5.5', '18–22'], ['5', '16–17']],
        foot: 'For this course (Band 6.5–7) aim for **at least 30 correct answers** out of 40.' },
      { type: 'check', kicker: 'Check yourself', title: 'True or false?', intro: 'Tap True or False to see the answer.',
        items: [
          { s: 'You can listen to each recording twice.', answer: false, why: 'You hear each recording once only.' },
          { s: 'Each of the four parts has ten questions.', answer: true, why: 'Ten questions in each part, 40 in all.' },
          { s: 'Part 4 is a conversation between two students.', answer: false, why: 'Part 4 is one speaker giving a lecture or talk on an academic subject. Students in discussion is Part 3.' },
          { s: 'The answers come in the same order as the recording.', answer: true, why: 'So the questions help you keep your place.' },
          { s: '“colour” and “color” are both accepted.', answer: true, why: 'British and American spellings are both fine.' },
          { s: 'A spelling mistake still gets half a mark.', answer: false, why: 'There are no half marks: a misspelled answer is wrong.' },
          { s: 'Every test includes every question type.', answer: false, why: 'A test usually has about eight or nine of the types.' },
          { s: 'About 30 correct answers gives you band 7.', answer: true, why: 'Around 30–31 out of 40 is band 7.' }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '01', minutes: 45, tone: 'teal', art: 'listening',
    title: 'Listening overview', subtitle: 'How the test works',
    outcome: 'Know how the Listening test is organised, what happens on the day and how it is marked.',
    activities: [
      { id: 'watch', short: 'Watch', minutes: 25, grouping: 'Alone', title: 'Watch the two videos', goal: 'Watch the teacher’s two videos in order.',
        blocks: [{ type: 'text', title: 'Videos', text: 'Basic information and tips; Examples and practice.' }] },
      { id: 'read', short: 'Read and check', minutes: 20, grouping: 'Alone', title: 'Read the overview and check yourself', goal: 'Read how the test works, then answer the true or false questions.',
        blocks: [{ type: 'text', title: 'Overview', text: 'The four parts, the question types, the day of the test and the marking.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
