/* IELTS · Listening · Practise · Part 1 · Exercise 11 — Photography courses.
   Source: Listening Section 1 Exercises (Practice No 11); answers and recording script from the teacher's key (folder 11).
   The paper numbers the "choose TWO" item as Question 7 only; here it counts as Questions 7–8 (as in the real test), so the rest move up by one.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d111', week: 1, day: 111,
  title: 'Photography courses',
  duration: 'About 20 minutes',
  journey: 'Listen to a man phoning an art college about its photography courses. Complete the table and answer the multiple-choice questions.',
  finish: { title: 'Next', text: 'Exercise 12' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–11', subtitle: 'Table completion and multiple choice',
    outcome: 'Keep your place in a table as the speaker moves from course to course, and listen for corrections like “No, I tell a lie”.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–11. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d111-test', title: 'Part 1 · Exercise 11',
          audios: [
            { title: 'Recording 1 · Questions 1–11', src: 'https://drive.google.com/file/d/1Hyq8Veeg7-jiJK9L0hHOqHKi3pAwQidj/view', note: 'A man phones the Department of Art, Design and Media to ask about photography courses.' }
          ],
          blocks: [
            { type: 'ieTable', id: 'ieb2w1d111-q1', from: 1, title: 'Photography Courses',
              instruction: 'Complete the table below. Write **NO MORE THAN THREE WORDS OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS OR A NUMBER', max: 3,
              columns: ['Course title', 'Level', 'Day / Time', 'Length', 'Interview'],
              rows: [
                ['Introducing Photography', '[[Foundation|Foundation level|Foundation-level]]', 'Monday 6:30–9:30', '10 weeks', 'NO'],
                ['Black and White Photography', 'Intermediate', 'Tuesday [[2–4.30|2-4.30|2 – 4.30|2 - 4.30|2–4:30|2-4:30|2.00–4.30|2.00-4.30|2:00–4:30|2:00-4:30|2 to 4.30|2 to 4:30|2pm–4.30pm|2pm-4.30pm|2 pm-4.30 pm]]', '10 weeks', 'YES'],
                ['Landscape Photography', 'Advanced', 'Tuesday 6:30–9:00', '[[16 weeks|sixteen weeks|16]]', '[[YES]]'],
                ['The art of digital photography', 'Advanced', 'Wednesday [[any time|anytime|at any time|flexitime|flexi-time|flexible time]]', '[[60 hours|sixty hours|60|60 hrs]]', 'YES']
              ] },
            { type: 'ieMulti', id: 'ieb2w1d111-q2', from: 7, instruction: 'Choose **TWO** letters, **A–G**.',
              q: 'Which TWO of the following subjects are covered in the Introducing Photography course?',
              options: ['film types', 'camera controls', 'camera accessories', 'lighting', 'composition', 'night photography', 'printing'], answers: ['B', 'E'], pick: 2 },
            { type: 'ieChoice', id: 'ieb2w1d111-q3', from: 9, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'What is the fee for the Black and White Photography course?', options: ['£85', '£95', '£140'], answer: 'A' },
              { q: 'What does the fee for the Landscape Photography course include?', options: ['materials', 'field trip', 'examination fee'], answer: 'B' },
              { q: 'Which course is it especially important to apply for early?', options: ['Introducing Photography', 'Black and White Photography', 'The art of digital photography'], answer: 'B' }
            ] }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–11', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Man', lines: [
              ['Woman', 'Department of Art, Design and Media. Can I help you?'],
              ['Man', 'Yes. I’d like some information about photography courses.'],
              ['Woman', 'Let me just get the prospectus … OK, well, we do several different courses. I’ll just run through them for you. The first is “Introducing photography”. That runs for ten weeks and it’s a Foundation-level course, so it’s for people just beginning in photography.'],
              ['Man', 'Right.'],
              ['Woman', 'That’s on Monday evenings, from six thirty to nine thirty. Next, there’s “Black and white photography”, which is at Intermediate level, so you would need some previous experience for that one. And you also have to have an interview with a tutor beforehand.'],
              ['Man', 'Sounds interesting. Which evening is it on?'],
              ['Woman', 'It’s a daytime course, actually. From two to four thirty on Tuesdays. That’s also for ten weeks.'],
              ['Man', 'That’s a pity, I work on Tuesday afternoons.'],
              ['Woman', 'There’s also “Landscape photography”, which is on Tuesday evenings, from six thirty to nine. That’s a longer course than the others, it runs for sixteen weeks.'],
              ['Man', 'And do you need previous experience for that one?'],
              ['Woman', 'Let me just check … Mm, it’s Advanced level. So yes, you would, yes, and again you’d have to be interviewed beforehand. OK? Then the only other one we do is “The art of digital photography”.'],
              ['Man', 'I’m not sure that’s for me, but which evening is it?'],
              ['Woman', 'It’s a flexitime course. It’s on a Wednesday, but you can do it at any time to suit you during the day.'],
              ['Man', 'How many weeks is that?'],
              ['Woman', 'It’s up to you, really. You have to do 60 hours in all. And again, there’s an interview.'],
              ['Man', 'Right. OK. Can I just go back to the first course you mentioned? Um, what sort of things does that cover?'],
              ['Woman', '“Introducing photography”? Let’s see what it says in the prospectus. Yes, here it is: “Find out about different types of camera and camera care, learn how the camera’s controls operate, and which lenses to use for different subjects, study the main elements of effective composition.” That’s all it says. You could always talk to the tutor if you wanted more information.'],
              ['Man', 'It sounds a bit … basic, to be honest. What about “Landscape photography”, was that the next one?'],
              ['Woman', 'Yes, that includes a field trip, where you go out with your tutor on location. But, look, to save me reading everything out, why don’t I send you the prospectus?'],
              ['Man', 'That’d be great. But could you just give me an idea of the fees?'],
              ['Woman', 'I’ll just have to check … Right, “Introducing photography”, that’s … yes, £95. “Black and white”’s the same, I think … No, I tell a lie, it’s a bit less, actually, £85. And then “Landscape” and “Digital”, they’re both £140.'],
              ['Man', 'Gosh. That’s a bit steep, isn’t it?'],
              ['Woman', 'Well, they are longer courses, if you remember. With the “Digital”, the fee also includes some photographic materials. And with the “Landscape”, the cost of that field trip I mentioned is included.'],
              ['Man', 'Right. Oh, and I forgot to ask, is there an examination?'],
              ['Woman', 'Not as such. But you can have your work assessed and get a certificate if you pay a small extra fee.'],
              ['Man', 'I see. Just one last question. How soon would I need to apply?'],
              ['Woman', 'Well, there are still places on all the courses at the moment, but they do tend to fill up quickly. “Introducing photography” is always popular — we’re running two courses this year so we can meet the demand. And “Digital” is getting quite popular, too. But there are only twelve places on the Black and white course, so that everyone has access to the equipment. If you’re interested in applying for that one, I wouldn’t leave it too long, if I were you.'],
              ['Man', 'I’ll bear that in mind. Thanks very much for your help.']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
