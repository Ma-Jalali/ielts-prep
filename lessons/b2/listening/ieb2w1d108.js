/* IELTS · Listening · Practise · Part 1 · Exercise 8 — Student interviews.
   Source: Listening Section 1 Exercises (Practice No 8); answers and recording script from the teacher's key (folder 08).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d108', week: 1, day: 108, sheet: true, illus: 'chat',
  title: 'Student interviews',
  duration: 'About 20 minutes',
  journey: 'Listen to a student counsellor interviewing two students about their courses, clubs and free time. Complete the notes.',
  finish: { title: 'Next', text: 'Exercise 9' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Form completion',
    outcome: 'Follow two interviews with the same questions, and catch names, places and opinions as you listen.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d108-test', title: 'Part 1 · Exercise 8',
          audios: [
            { title: 'Recording 1 · Questions 1–10', src: 'https://drive.google.com/file/d/1HKtjaGBC3bYza7c8btDoOB17Jlgrrld5/view', note: 'Rob, a student counsellor, interviews Linda and then Jim.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d108-q1', from: 1, layout: 'form', title: 'Welcome to the Centre for Student Development and Counselling · Interview one',
              instruction: 'Complete the notes. Use **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'Name: Linda Richmond\nCourse: [[Computer Studies]]\nWhere living: [[on campus|campus]]\nMembership of student societies / clubs: [[Film Society|the Film Society]]\nComments on facilities: quite good\nSuggestions for improvements: [[a new gym|new gym|new gymnasium|a new gymnasium]]\nOther leisure activities: [[cooking]]' },
            { type: 'ieGap', id: 'ieb2w1d108-q2', from: 6, layout: 'form', title: 'Interview two',
              instruction: 'Complete the notes. Use **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'Name: [[Jim Maybury]]\nCourse: Marine Biology\nWhere living: 5 kilometres away\nMembership of student societies / clubs: [[Athletics Club|the Athletics Club]]\nComments on facilities: [[a bit limited|bit limited|limited]]\nSuggestions for improvements: [[a swimming pool|swimming pool|a pool|pool]]\nOther leisure activities: [[playing the guitar|plays the guitar|playing guitar|the guitar|guitar]]' }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–10', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Rob', lines: [
              ['Rob', 'Hi, come in. Take a seat. We haven’t met before, have we?'],
              ['Linda', 'No.'],
              ['Rob', 'I didn’t think so. Well, I’m Rob, I’m one of the Student Counsellors here. And you are …?'],
              ['Linda', 'Linda Richmond.'],
              ['Rob', 'Right. And which course are you on, Linda?'],
              ['Linda', 'I’m doing Computer Studies.'],
              ['Rob', 'OK. Now, the reason for this little chat is that we wanted to find out a bit about what students do when they’re not studying. How you relax. What activities you do. Things like that. But in particular, we’d like to know if there’s anything we can do to improve the facilities available to students. OK?'],
              ['Linda', 'OK.'],
              ['Rob', 'So, tell me, where are you living at the moment?'],
              ['Linda', 'On campus.'],
              ['Rob', 'That’s good. At least you don’t have to worry about commuting if you’re on campus.'],
              ['Linda', 'No, but it can be a bit of a problem getting into town in the evening.'],
              ['Rob', 'I suppose that’s true. Swings and roundabouts. But, tell me, do you belong to any of the student clubs?'],
              ['Linda', 'Yes, I joined the Film Society when I first arrived, and I probably go along two, three times a week. Movies are great — they take your mind off your work and everything.'],
              ['Rob', 'Good. And that’s it?'],
              ['Linda', 'That’s it.'],
              ['Rob', 'So what do you think of the facilities in general?'],
              ['Linda', 'They’re quite good. In my opinion, anyway.'],
              ['Rob', 'Any suggestions for improvements?'],
              ['Linda', 'Well, I think the one thing that’s really needed is a new gym.'],
              ['Rob', 'You don’t think the current gym is adequate?'],
              ['Linda', 'The thing is, it’s nowhere near big enough. You can hardly ever get to use it, except at eight o’clock in the morning maybe. And the equipment’s out of the Ark. It really needs updating. No, a new gym would be fantastic.'],
              ['Rob', 'OK, and finally, are there any other activities you do in your spare time?'],
              ['Linda', 'Mm. I do quite a bit of cooking. It’s the best way I know of relaxing. My speciality is curry! I’m always playing around with new recipes.'],
              ['Rob', 'Great. That’s been very helpful. Many thanks.'],
              ['Rob', 'OK, so could I have your name?'],
              ['Jim', 'Jim. Jim Maybury.'],
              ['Rob', 'Jim — er, sorry, how do you spell your surname?'],
              ['Jim', 'M-A-Y-B-U-R-Y.'],
              ['Rob', 'Maybury, thanks. And what course are you doing, Jim?'],
              ['Jim', 'Marine Biology.'],
              ['Rob', 'And how’s it going?'],
              ['Jim', 'Fine, so far.'],
              ['Rob', 'Good, good, and where are you living?'],
              ['Jim', 'I’ve got a place five kilometres from college.'],
              ['Rob', 'Excellent. And student clubs, societies … Do you belong to anything in particular?'],
              ['Jim', 'Yes, I’m a member of the Athletics Club. We’ve just got back from an inter-university athletics tournament, actually.'],
              ['Rob', 'And how did you get on?'],
              ['Jim', 'We came second.'],
              ['Rob', 'Well done. That’s quite an achievement. So you’re obviously into sport. And what do you think of the university facilities?'],
              ['Jim', 'To be honest, I think they’re a bit limited. Compared with other universities I know, anyway.'],
              ['Rob', 'I see, and what improvements would you like to see?'],
              ['Jim', 'The number one priority, as far as I’m concerned, is a swimming pool. I can’t believe a university this size hasn’t got one. It’s crazy for students to have to go to the public pool in town.'],
              ['Rob', 'Yes, I must say you’re not the first person to mention that. Actually, there is talk of a major fund-raising campaign for new facilities, so maybe there’s hope on the horizon. Anyway, last question: do you take part in any other activities? To relax or whatever?'],
              ['Jim', 'I play the guitar mostly. It’s something I’ve always done and it’s great for winding down.'],
              ['Rob', 'Terrific. Thanks, Jim. Good luck with the course.']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
