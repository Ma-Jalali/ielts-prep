/* IELTS · Reading · Learn · Lesson 8 — Matching headings (question type 12).
   Source: the teacher's training notes "Reading" (RAD TIME), pages 22–23. The Persian advice (two questions to choose
   between two headings) is translated. "Studying in the USA" is adapted (rewritten); its last question is now
   "Paragraph F" (the handout said E twice).
   Ids (lesson, activities, exercises, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w2d8', week: 2, day: 8, sheet: true, illus: 'grad',
  title: 'Matching headings',
  duration: 'About 45 minutes',
  journey: 'You choose the best heading for each paragraph from a list. A heading is about the whole paragraph, not one sentence of it. Learn to find the main idea fast, and to spot the two kinds of wrong heading.',
  finish: { title: 'Next', text: 'Multiple choice' },
  learn: {
    tags: ['Question type 12'],
    jump: [['xl-tips', 'Tips', 'tip'], ['xl-wrong', 'Wrong headings', 'warn'], ['xl-ex', 'Exercise', 'pen']],
    blocks: [
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'Find the main idea',
        items: [
          { label: 'Tips', icon: 'tip', blocks: [
            { type: 'image', src: 'assets/reading/headings.svg', alt: 'Three paragraphs, A, B and C. The first sentence of each one is highlighted and labelled topic sentence.', size: 'small' },
            { type: 'list', items: [
              'Each heading is used **once** only, and there are **more headings than paragraphs**.',
              'A heading must cover the information of the **whole** paragraph, not just a part of it.',
              'Read the **beginning** of each paragraph more carefully: writers usually put the main idea there.'] },
            { type: 'note', tone: 'info', title: 'The topic sentence', text: 'The **topic sentence** gives the main idea of a paragraph. It is usually, but not always, the **first** sentence, so read the first sentence carefully, then check that the rest of the paragraph agrees with it.' }] },
          { label: 'What to do', icon: 'list', blocks: [
            { type: 'steps', items: [
              { t: 'Cross out the example', d: 'If there is an example, cross that heading out of the list. You do not need to read that paragraph.' },
              { t: 'Read one paragraph', d: 'Read it fairly quickly, but read the beginning carefully. Say the main idea to yourself in a few words.' },
              { t: 'Choose from the list', d: 'Choose a heading. If more than one seems possible, write them all and come back to the paragraph later.' },
              { t: 'Continue to the last paragraph', d: 'Do the same with each paragraph.' },
              { t: 'Decide', d: 'Go back to the paragraphs with more than one possible heading and decide which is better. Remember: the right heading covers the **whole** paragraph.' }] }] },
          { label: 'Stuck between two?', icon: 'repeat', lead: 'If you cannot decide between two headings, ask yourself two questions.', blocks: [
            { type: 'cards', cols: 2, items: [
              { icon: 'eye', t: '1 · Which one covers the WHOLE paragraph?', d: 'One heading often fits only one or two sentences. The other fits everything.' },
              { icon: 'target', t: '2 · How are the two headings different?', d: 'Compare them word by word: **singular or plural** (*a problem* or *problems*), and the **time** (past, general, continuing or future).' }] }] }
        ] },
      { type: 'cards', anchor: 'xl-wrong', kicker: 'Wrong headings', title: 'The right heading and two traps', intro: 'Imagine a paragraph that is about **X**, **Y** and **Z**.',
        items: [
          { icon: 'ok', t: 'Right: XYZ', d: 'It sums up **all** the information in the paragraph.' },
          { icon: 'no', t: 'Wrong: Y', d: 'It covers only **part** of the paragraph: one example, one detail, one sentence.' },
          { icon: 'no', t: 'Wrong: XYZ + M', d: 'It adds something (**M**) that the paragraph says little or nothing about.' }] },
      { type: 'note', tone: 'warn', title: 'The word-matching trap', text: 'A heading that repeats a word from the paragraph is **not** necessarily right. The right heading usually **paraphrases** the main idea.' },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'Exercise', title: 'Try it', intro: 'Read the passage and choose a heading for each paragraph. The answers, with the reasons, are folded at the bottom.',
        items: [
          { id: 'ieb2w2d8-e1', title: 'Studying in the USA', kind: 'Matching headings', go: 'Read',
            tip: 'All the headings are advice. For each paragraph, ask: what is the writer telling me to do?',
            passage: { title: 'Studying in the USA', text: 'A  American films exaggerate things to excite audiences, so they give a rather strange picture of what life in the US is really like. Even if some ideas are true of certain people, they may not be true in general. For example, although Americans tend to be louder than people from some other cultures, many of the people you meet when you study in the US will be quiet and polite.\n\nB  Americans are much more assertive than most international visitors. They use words as tools to give their views and to get things done. You will be expected to offer opinions and try to persuade others to accept your view. Take the initiative and offer information that others will find interesting. In an interview, talk about your goals and achievements. Eye contact is also important: it is not a sign of disrespect, but a sign of openness, honesty and enthusiasm.\n\nC  You will find that teaching styles in the US are very different from those in many other countries. Teaching is interactive and depends less on learning by heart. Professors prefer discussion and debate to silent listening, and classes are often organised in groups. Students regularly visit their lecturers to ask questions about their courses and their progress, and your department will have office hours when students can come and ask questions.\n\nD  Americans tend to be more informal than people from many other countries. It is common to wear casual clothes to class and to call professors by their first names. Even so, good manners and politeness are always appropriate. If you are polite and dress a little more formally than your American friends, it will only reflect well on you. However, as in most countries, it would be wrong to wear a T-shirt and jeans to an interview.\n\nE  Unless your professor has said that working together is expected, you should do your written work on your own. Working with other students on individual assignments is considered cheating. Studying together is fine, but assignments should be completed alone. In the same way, using someone else’s ideas or quoting a text without saying where it comes from is plagiarism. Cheating and plagiarism can lead to failing a course, or even being expelled.\n\nF  Your grade in most classes will be based on your marks in tests, quizzes and assignments. If a class has a discussion section, taking an active part can improve your grade. The better your professor and teaching assistants know you and your work, the better they will be able to judge your progress. Good luck in your first semester!' },
            blocks: [{ type: 'ieMatch', id: 'ieb2w2d8-e1-q1', from: 1, kindName: 'Matching headings', numbering: 'roman', boxTitle: 'List of headings', instruction: 'The passage has six paragraphs, **A–F**. Choose the correct heading for each paragraph from the list of headings, **i–ix**.',
              options: ['Be prepared for different methods of assessment', 'Mix with people from different countries', 'Make sure your work is your own', 'Aim to be successful on your course', 'Attend lectures regularly', 'Don’t believe everything you hear', 'Feel free to discuss your education', 'Don’t worry about having a smart appearance', 'Don’t be afraid to speak up'],
              items: [
                { q: 'Paragraph A', answer: 'vi', why: 'Films give a *strange picture*: what you see and hear about Americans is not always true.' },
                { q: 'Paragraph B', answer: 'ix', why: 'Give opinions, persuade, take the initiative, talk about your achievements: speak up.' },
                { q: 'Paragraph C', answer: 'vii', why: 'Discussion and debate, and visiting lecturers to ask about your course and progress.' },
                { q: 'Paragraph D', answer: 'viii', why: 'Casual clothes are common. (Dressing *a little* more formally helps, but only an interview needs more.)' },
                { q: 'Paragraph E', answer: 'iii', why: 'Do your written work on your own; no cheating or plagiarism.' },
                { q: 'Paragraph F', answer: 'i', why: 'Grades come from tests, quizzes, assignments and taking part in discussions.' }] }] }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '08', minutes: 45, tone: 'blue', art: 'reading',
    title: 'Matching headings', subtitle: 'Question type 12',
    outcome: 'Choose the heading that sums up each whole paragraph.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 20, grouping: 'Alone', title: 'Read the tips', goal: 'Read the tips and the two kinds of wrong heading.', blocks: [{ type: 'text', title: 'Tips', text: 'Topic sentences and wrong headings.' }] },
      { id: 'practise', short: 'Exercise', minutes: 25, grouping: 'Alone', title: 'Do the exercise', goal: 'Do the exercise and check your answers.', blocks: [{ type: 'text', title: 'Exercise', text: 'Studying in the USA.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
