/* IELTS · Listening · Learn · Lesson 1 — Listening overview.
   A Learn lesson on one page (js/sheet.js, learnPage): the teacher's two videos, then how the test works, in tabs.
   Videos: the teacher's Google Drive folder "Listening training" (Lesson 1 Basic Information & Tips, Lesson 2 Examples &
   Practice). Written for this site from the course book's introduction and the teacher's own notes ("IELTS Listening
   Tips", International House): the timing, the general approach, the study method and the ways to improve.
   Ids (lesson, activities) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d1', week: 1, day: 1, sheet: true, illus: 'headset',
  title: 'Listening overview',
  duration: 'About 45 minutes',
  journey: 'How the IELTS Listening test works: its four parts, what happens on the day, how it is marked, and the approach and habits that raise your score. Watch the two videos first, then read on and check yourself.',
  finish: { title: 'Next', text: 'Part 1: everyday conversation' },
  learn: {
    tags: ['4 parts', '40 questions'],
    jump: [['xl-videos', 'Videos', 'play'], ['xl-test', 'The test', 'list'], ['xl-score', 'A better score', 'star'], ['xl-check', 'Check yourself', 'ok']],
    blocks: [
      { type: 'videos', anchor: 'xl-videos', kicker: 'Watch first', title: 'Two videos from your teacher', intro: 'Watch them in order. You can pause, go back and watch again as often as you like.',
        items: [
          { title: 'Basic information and tips', note: 'What the Listening test is, how it is organised, and the tips that matter most.', src: 'https://drive.google.com/file/d/1QXj5lt7lH2U99KSa6ElWZC4RcOxREADL/view' },
          { title: 'Examples and practice', note: 'Real examples of the question types, and practice with them step by step.', src: 'https://drive.google.com/file/d/1s0hOrHXrWP5uwtPXLHJAxQ33ETtE7HOg/view' }
        ] },
      { type: 'facts', kicker: 'At a glance', title: 'The test in six numbers',
        items: [['4', 'parts, each harder than the one before'], ['40', 'questions: 10 in each part'], ['30', 'minutes of recordings, more or less'], ['1×', 'you hear each recording **once** only'], ['1', 'mark for each correct answer, and **no** minus marks'], ['1–9', 'band score, with half bands such as 6.5']] },
      { type: 'parts', kicker: 'The four parts', title: 'What you will hear',
        intro: 'Parts 1 and 2 are about everyday life; Parts 3 and 4 are about study and academic life. The answers always come **in the same order** as the recording.',
        items: [
          { n: 1, qs: 'Questions 1–10', who: 'Two speakers', what: 'A conversation about an everyday, social situation.', eg: 'booking a holiday, joining a club, reporting a lost bag' },
          { n: 2, qs: 'Questions 11–20', who: 'One speaker', what: 'A talk on a general, everyday topic.', eg: 'a guided tour, a radio talk about a local event' },
          { n: 3, qs: 'Questions 21–30', who: 'Two to four speakers', what: 'A discussion about a study or education topic.', eg: 'two students and a tutor planning a project' },
          { n: 4, qs: 'Questions 31–40', who: 'One speaker', what: 'A lecture or talk on an academic subject.', eg: 'a university lecture on marine biology' }
        ],
        foot: 'Each recording lasts a few minutes. The instructions are on the recording, and before each part you get time to read the questions.' },
      { type: 'tabs', anchor: 'xl-test', kicker: 'Know the test', title: 'How the test works',
        items: [
          { label: 'How it runs', icon: 'clock', blocks: [
            { type: 'table', head: ['', 'On paper', 'On computer'], wide: true, rows: [
              ['Recordings', 'About 30 minutes', 'About 30 minutes'],
              ['Your answers', 'Write on the question paper as you listen', 'Type straight into the boxes as you listen'],
              ['At the end', '**10 minutes** to copy your answers to the answer sheet', '**2 minutes** to check your answers'],
              ['In total', 'About **40 minutes**', 'About **32 minutes**']] },
            { type: 'list', items: [
              'The recording starts and **cannot be stopped**. Once it has started you cannot leave or enter the room.',
              'Before each part you get a short time to **read the questions**. Use it: find the topic and underline key words.',
              'Parts 1, 2 and 3 are usually split into **two halves**, with time to read the next questions in the middle. Part 4 plays without a break.',
              '**On paper**, short forms are fine on the question paper, but copy your answers to the answer sheet carefully: only the answer sheet is marked.'] }] },
          { label: 'On the day', icon: 'target', blocks: [
            { type: 'list', items: [
              'Listening is the **first** part of the test, so arrive early and settle in.',
              'On paper, bring a **pencil** and an **eraser**. You cannot take books, notes or a phone into the room.',
              'The room may be **full of people**. Expect some noise and stay focused on the recording.',
              'You hear everything **once**, so keep up with the questions: if you miss an answer, let it go and move to the next one.'] }] },
          { label: 'Scores', icon: 'star', blocks: [
            { type: 'table', intro: 'Roughly how many correct answers you need for each band (it varies slightly from test to test).', head: ['Band', 'Correct answers (out of 40)'],
              rows: [['9', '39–40'], ['8.5', '37–38'], ['8', '35–36'], ['7.5', '32–34'], ['**7**', '**30–31**'], ['**6.5**', '**26–29**'], ['6', '23–25'], ['5.5', '18–22'], ['5', '16–17'], ['4.5', '13–15']],
              foot: 'For this course (Band 6.5–7) aim for **at least 30 correct answers** out of 40.' }] },
          { label: 'Questions', icon: 'info', blocks: [
            { type: 'faq', open: false, items: [
              { q: 'Will I hear different accents?', a: 'Yes: British, Australian, North American and others. They are always clear and natural, and the speakers never make grammar mistakes.' },
              { q: 'What sort of questions will I get?', a: 'Most of the time you either **choose a letter** or **write a few words** (often no more than two or three). The types are: form, note, table and flow-chart completion; sentence completion; short answers; multiple choice; matching; and labelling a map, plan or diagram.\n\nAny type can appear in any part of the test.' },
              { q: 'Will I get every question type?', a: 'No. Each part usually has two or three types, so one full test has about eight or nine different ones. The same type can come up in more than one part.' },
              { q: 'What are key words?', a: 'The words that carry the meaning: usually nouns, verbs, numbers and names. Listen for them, and for other words with the same meaning, because the recording often says the same idea in a different way.' },
              { q: 'Does spelling matter?', a: 'Yes. A wrongly spelled answer is marked wrong, so check your spelling. British and American spellings are both accepted (programme / program, colour / color). Numbers can be written as words or as figures.' },
              { q: 'Do capital letters matter?', a: 'No. "london", "London" and "LONDON" are all accepted. Writing in capitals can make your handwriting clearer on paper.' }] }] }
        ] },
      { type: 'tabs', anchor: 'xl-score', kicker: 'A better score', title: 'How to approach the test',
        items: [
          { label: 'Each part', icon: 'list', lead: 'Use the same three steps for every set of questions.', blocks: [
            { type: 'steps', items: [
              { t: 'Before you listen', d: ['Work out the **situation**: where are the speakers, and who are they?', 'Read the questions and **predict the answer**: by grammar (a verb, an adjective, a singular, plural or uncountable noun?) and by meaning (a person, a place, a number, a time, a thing?).', '**Underline or circle** a few key words, especially in long questions. It keeps you focused.'] },
              { t: 'While you listen', d: ['Read and listen at the same time: follow the questions as the recording moves on.', 'Write your answer as soon as you hear it, then move straight on.', 'Keep your place with the key words you underlined. If you lose your place, jump to the next question.'] },
              { t: 'After you listen', d: ['Check **spelling** and **grammar**: does a plural need an -s? Does the answer fit the sentence?', 'Check the **word limit** in the instructions.', 'Answer **every** question: there are no minus marks, so a sensible guess can only help.'] }] }] },
          { label: 'Study routine', icon: 'repeat', lead: 'Follow this method every time you do an exercise or a test.', blocks: [
            { type: 'steps', items: [
              { t: 'Listen and answer', d: 'Do the exercise in one go, as in the test: no pausing.' },
              { t: 'Check and study your mistakes', d: 'Find each wrong answer in the script. Why did you miss it: a spelling mistake, a number, a word you did not know, or the speaker changing their mind?' },
              { t: 'Write down your score', d: 'Keep a record of each exercise and test, so you can see your progress and your weak parts.' },
              { t: 'Do it again', d: 'If your score was low, do the same exercise again after a few days, until you can answer almost every question correctly.' }] }] },
          { label: 'Improve', icon: 'star', blocks: [
            { type: 'cards', items: [
              { icon: 'ear', t: 'Listen to British English', d: 'Most recordings use British speakers. Listen to the BBC, British podcasts, TV series and films.' },
              { icon: 'book', t: 'Learn topic vocabulary', d: 'Learn words by topic (travel, health, education, the environment …) and their spelling.' },
              { icon: 'target', t: 'Find your weak part', d: 'Which part loses you the most marks? Spend most of your practice time there.' },
              { icon: 'clock', t: 'Take practice tests', d: 'Do full tests regularly under test conditions, and study every mistake afterwards.' }] }] },
          { label: 'Rules', icon: 'info', blocks: [
            { type: 'note', tone: 'tip', title: 'No minus marks', text: 'A wrong answer loses nothing. Never leave a gap: if you are not sure, write your best guess.' },
            { type: 'note', tone: 'info', title: 'Short forms you can use', text: 'Measurements and symbols are fine in your answers: cm, m, km, g, kg, °C, $, £, %. Other short forms (such as "St" for "Street" or "Mon" for "Monday") are best written in full.' },
            { type: 'note', tone: 'warn', title: 'Keep to the word limit', text: 'If the instructions say NO MORE THAN TWO WORDS, an answer of three words is wrong, even if it has the right idea. A number counts as one word.' }] }
        ] },
      { type: 'check', anchor: 'xl-check', kicker: 'Check yourself', title: 'True or false?', intro: 'Tap True or False to see the answer.',
        items: [
          { s: 'You can listen to each recording twice.', answer: false, why: 'You hear each recording once only.' },
          { s: 'Each of the four parts has ten questions.', answer: true, why: 'Ten questions in each part, 40 in all.' },
          { s: 'Part 4 is a conversation between two students.', answer: false, why: 'Part 4 is one speaker giving a lecture or talk on an academic subject. Students in discussion is Part 3.' },
          { s: 'The answers come in the same order as the recording.', answer: true, why: 'So the questions help you keep your place.' },
          { s: 'A wrong answer loses you a mark, so it is better to leave a gap.', answer: false, why: 'There are no minus marks. Always write something.' },
          { s: 'A spelling mistake still gets half a mark.', answer: false, why: 'There are no half marks: a misspelled answer is wrong.' },
          { s: 'On paper you get 10 minutes at the end to copy your answers.', answer: true, why: 'On computer you get 2 minutes to check instead.' },
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
