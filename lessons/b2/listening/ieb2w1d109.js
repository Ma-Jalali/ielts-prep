/* IELTS · Listening · Practise · Part 1 · Exercise 9 — A music festival.
   Source: Listening Section 1 Exercises (Practice No 9); answers and recording script from the teacher's key (folder 09).
   The paper numbers the "choose TWO" item as Question 1 only; here it counts as Questions 1–2 (as in the real test), so the rest move up by one.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d109', week: 1, day: 109, sheet: true, illus: 'music',
  title: 'A music festival',
  duration: 'About 20 minutes',
  journey: 'Listen to two students planning a trip to an international music festival. Choose the answers and complete the booking form.',
  finish: { title: 'Next', text: 'Exercise 10' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–11', subtitle: 'Multiple choice, table completion and short answers',
    outcome: 'Listen for dates, times and prices, and notice when a speaker rules an option out.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–11. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d109-test', title: 'Part 1 · Exercise 9',
          audios: [
            { title: 'Recording 1 · Questions 1–11', src: 'https://drive.google.com/file/d/1HOSG2gUNzVGW5VpNMK_8lkD7vGMAh_yS/view', note: 'Andy tells Maria about a music festival and the events his friends want to go to.' }
          ],
          blocks: [
            { type: 'ieMulti', id: 'ieb2w1d109-q1', from: 1, instruction: 'Choose **TWO** letters, **A–G**.',
              q: 'Which TWO of the following types of music will be performed at the festival?',
              options: ['heavy metal', 'rock music', 'jazz', 'opera', 'folk music', 'country and western', 'dance music'], answers: ['C', 'E'], pick: 2 },
            { type: 'ieChoice', id: 'ieb2w1d109-q2', from: 3, instruction: 'Choose the correct letter, **A, B, C or D**.', items: [
              { q: 'When does the festival begin?', options: ['1st May', '9th May', '12th May', '16th May'], answer: 'B' },
              { q: 'How long does the festival last?', options: ['a weekend', 'a week', 'ten days', 'two weeks'], answer: 'D' }
            ] },
            { type: 'ieTable', id: 'ieb2w1d109-q3', from: 5, title: 'Booking form',
              instruction: 'Complete the booking form below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              columns: ['Event', 'Code', 'Time', 'Ticket price'],
              rows: [
                ['Cuban Music: Talk', 'A5', '[[10.30 am|10.30|10:30|10.30 a.m.|10:30 am|10:30 a.m.|half past ten]]', '£6'],
                ['The sounds of Scotland', 'A12', '2 pm', '[[£8|8|8 pounds|eight pounds|£8.00]]'],
                ['[[Africa Alive]]', 'B17', '7 pm', '£15'],
                ['Canal boat cruise with [[lunch]] and talk', 'B9', '2–5 pm', '[[£14.50|14.50|£14.5|14 pounds 50]]']
              ] },
            { type: 'ieGap', id: 'ieb2w1d109-q4', from: 10, layout: 'short',
              instruction: 'Answer the questions below. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: 'What art exhibition do the friends intend to visit? The [[Bus Stop]] Gallery\nWhat should Maria take with her? [[student card|her student card|a student card]]' }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–11', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Maria', lines: [
              ['Andy', 'Oh, good, Maria, I was hoping to catch you.'],
              ['Maria', 'Hi, Andy, what’s up?'],
              ['Andy', 'Well, there’s a group of us thinking of going to the music festival, and we wondered if you’d be interested in coming along.'],
              ['Maria', 'Sorry, what music festival?'],
              ['Andy', 'Didn’t you know? There’s going to be a big international music festival here with loads of famous names performing.'],
              ['Maria', 'I’m not really into classical music.'],
              ['Andy', 'Oh, it’s not just classical music. There’s all sorts. Just a minute, I’ve got the programme here. Yes, there’s world music from an incredible variety of countries: Scottish and Irish folk music, for example, West African percussion, Russian choral music, which should be fantastic, Indian classical music — I could go on and on. And then if you’re a jazz fan, there’s a special jazz weekend and also a whole day of contemporary music.'],
              ['Maria', 'Any rock music?'],
              ['Andy', '’Fraid not.'],
              ['Maria', 'Still, it sounds interesting. When is it exactly?'],
              ['Andy', 'It’s in May.'],
              ['Maria', 'Oh, I’m going to be away the first week of May. I don’t get back till the 12th.'],
              ['Andy', 'Well, that’s OK because it doesn’t start until the 9th and we were thinking of going the following weekend, that’s Saturday the 16th.'],
              ['Maria', 'Fine.'],
              ['Andy', 'Anyway, it’s on for a whole fortnight so there’ll be plenty of time to enjoy it. Look, let me tell you the things we were thinking of going to and you can say if you’re interested in joining us.'],
              ['Maria', 'OK.'],
              ['Andy', 'Right, well, on the Saturday there’s a talk about Cuban music — it’s not only a talk, actually, there’s a demonstration of all the different styles as well. That’s at half past ten in the morning and tickets cost £6.'],
              ['Maria', 'Sounds great.'],
              ['Andy', 'And then in the afternoon, there’s something called “The sounds of Scotland” at two o’clock.'],
              ['Maria', 'I love Scottish music.'],
              ['Andy', 'Me too. The tickets for that are £8. And then, the next day …'],
              ['Maria', 'The Sunday?'],
              ['Andy', 'Yes. There’s a fantastic band from The Gambia, who play all kinds of traditional music, and they’ve got a stunning lead singer, apparently. The concert’s at seven o’clock in the evening and it’s called “Africa Alive”.'],
              ['Maria', '“Africa Alive”.'],
              ['Andy', 'Yes, the tickets are £15 — they’re a bit more expensive, because it’s an evening concert, I suppose. What do you think?'],
              ['Maria', 'Yes, count me in, definitely.'],
              ['Andy', 'Great. Then, getting away from music, they’re doing a special cruise on a canal boat, including lunch and also a talk about the canal and its history. It’s on Sunday afternoon, and it costs, let me see … yes, £14.50.'],
              ['Maria', 'I think that might be stretching the budget a bit too far!'],
              ['Andy', 'OK, well, three out of four isn’t bad! And then there are loads of other things going on at the same time as well. Art exhibitions and stuff. We liked the sound of the Bus Stop Gallery.'],
              ['Maria', 'The what?'],
              ['Andy', 'The Bus Stop Gallery. It’s an art exhibition on a bus which tours around the country. Anyway, the bus is going to be at the festival, and we thought we’d go along some time.'],
              ['Maria', 'Why not? Look, shall I give you some money now?'],
              ['Andy', 'No, wait till I’ve got the tickets. By the way, students can get a discount on the price of the tickets, but you might have to show your student card when you go in, so can you remember to have it with you?'],
              ['Maria', 'Sure.'],
              ['Andy', 'Anyway, I must fly. See you.'],
              ['Maria', 'Thanks, Andy. Bye.']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
