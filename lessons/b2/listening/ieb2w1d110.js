/* IELTS · Listening · Practise · Part 1 · Exercise 10 — A media survey.
   Source: Listening Section 1 Exercises (Practice No 10); answers and recording script from the teacher's key (folder 10).
   Questions 4–6 may be answered in any order, so each of those gaps accepts any of the three sections.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d110', week: 1, day: 110,
  title: 'A media survey',
  duration: 'About 20 minutes',
  journey: 'Listen to a student answering survey questions about newspapers, TV, radio, computers and the internet. Complete the form, the list and the multiple-choice questions.',
  finish: { title: 'Next', text: 'Exercise 11' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Form completion, listing and multiple choice',
    outcome: 'Catch spelled names and numbers, and listen past the options a speaker mentions but rejects.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d110-test', title: 'Part 1 · Exercise 10',
          audios: [
            { title: 'Recording 1 · Questions 1–10', src: 'https://drive.google.com/file/d/1HgMYHHdjxmKX28L8KSeD5wwM4OUb8Bh3/view', note: 'An interviewer asks a student, Philip, how he uses the media.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d110-q1', from: 1, layout: 'form', title: 'Media Survey · Details of Respondents',
              instruction: 'Complete the form below. Write **NO MORE THAN THREE WORDS OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS OR A NUMBER', max: 3,
              text: 'Respondent No: 6\nName: Philip [[Matthews]]\nAge: [[21|twenty-one|twenty one]]\nOccupation: [[full-time student|full time student|a full-time student]]' },
            { type: 'ieGap', id: 'ieb2w1d110-q2', from: 4, layout: 'notes', title: 'Newspaper sections he reads regularly',
              instruction: 'List **THREE** sections of the newspaper that he reads regularly, in any order. Write **NO MORE THAN THREE WORDS** for each answer.', rule: 'NO MORE THAN THREE WORDS', max: 3,
              text: '- [[sports|sport|sports section|the sports section|the sports pages|national news|news|the news|national news section|the national news|TV reviews|television reviews|the TV reviews|TV review|TV reviews section]]\n- [[national news|news|the news|national news section|the national news|sports|sport|sports section|the sports section|the sports pages|TV reviews|television reviews|the TV reviews|TV review|TV reviews section]]\n- [[TV reviews|television reviews|the TV reviews|TV review|TV reviews section|sports|sport|sports section|the sports section|the sports pages|national news|news|the news|national news section|the national news]]' },
            { type: 'ieChoice', id: 'ieb2w1d110-q3', from: 7, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'Preferred TV programmes', options: ['comedies', 'documentaries', 'dramas'], answer: 'C' },
              { q: 'Main source of information', options: ['radio', 'TV', 'newspaper'], answer: 'B' },
              { q: 'Main use of computer', options: ['for computer games', 'for coursework', 'for accounts'], answer: 'B' },
              { q: 'Main use of the internet', options: ['for sending email', 'for surfing the web', 'for banking'], answer: 'A' }
            ] }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–10', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Philip', lines: [
              ['Interviewer', 'Excuse me, have you got a few minutes to answer some questions?'],
              ['Philip', 'What about?'],
              ['Interviewer', 'I’m doing a survey about how people use the media, things like newspapers, television, computers, etc.'],
              ['Philip', 'I see. Well, OK.'],
              ['Interviewer', 'Can I start by taking a few personal details? Don’t worry, it’s completely confidential.'],
              ['Philip', 'Sure.'],
              ['Interviewer', 'First, could I have your name?'],
              ['Philip', 'Yes, Philip Matthews. That’s M-A-double T-H-E-W-S.'],
              ['Interviewer', 'Matthews. Right. Got it. And do you mind if I ask your age?'],
              ['Philip', 'No, that’s all right. I’m 21 — I’ll be 22 next week, as it happens.'],
              ['Interviewer', 'Oh, many happy returns in advance!'],
              ['Philip', 'Thanks.'],
              ['Interviewer', 'And what’s your occupation?'],
              ['Philip', 'I suppose I’d have to say full-time student. Is that an occupation?'],
              ['Interviewer', 'It certainly is! OK, now turning to the survey proper. Do you buy a daily paper?'],
              ['Philip', 'No. I usually get one on Saturdays, though.'],
              ['Interviewer', 'What’s the first thing you turn to in the newspaper?'],
              ['Philip', 'That’s easy, the sports section. Doesn’t everyone? You’ve got to check on your team’s progress, read the match report, haven’t you? And after that, I generally have a quick look at the news.'],
              ['Interviewer', 'When you say “news”, is that local, national or international?'],
              ['Philip', 'Oh, I’d say national news. Not local. Nothing very exciting happens round here! And I’m not terribly up on international affairs.'],
              ['Interviewer', 'And are there any other sections you read regularly? Business, for example?'],
              ['Philip', 'No. You must be joking! Business bores me stiff, I’m afraid. Let me think. I might have a look at the Arts section once in a while, but not as a regular thing. I suppose the only other thing I make a point of looking at is the TV reviews.'],
              ['Interviewer', 'You watch a lot of TV?'],
              ['Philip', '’Fraid I do, yes. Too much, probably!'],
              ['Interviewer', 'Right. That’s it for that section … Well, if we could turn to TV and radio now …'],
              ['Philip', 'Right.'],
              ['Interviewer', 'Is there any particular kind of TV programme you watch?'],
              ['Philip', 'Well, the news, obviously, and sport. But mostly, I want to be entertained. I like a good TV drama. Something with a strong plot that you can get involved in. I don’t watch a lot of documentaries, to be honest, and most of the comedies and quiz shows — they leave me cold.'],
              ['Interviewer', 'And do you listen to the radio at all?'],
              ['Philip', 'In the mornings I do. I prefer it to breakfast TV. But that’s about the only time.'],
              ['Interviewer', 'So would you say you got most of your information from television?'],
              ['Philip', 'Yes, I suppose I would. As I said, I don’t go in for a daily paper.'],
              ['Interviewer', 'And finally, just a couple more questions. Do you use a computer?'],
              ['Philip', 'Yes.'],
              ['Interviewer', 'And what would you say you use it for mostly?'],
              ['Philip', 'Mm, that’s a hard one. I mean, I use it for computer games, like everyone else. But I’ve been cutting down on that lately. I think at the moment I probably use it most for typing up lecture notes and other coursework, like assignments. I did once try to keep an account of my spending on it. But I didn’t get very far.'],
              ['Interviewer', 'Do you have internet access?'],
              ['Philip', 'Yes.'],
              ['Interviewer', 'How do you use that mainly?'],
              ['Philip', 'Well, it can be very useful for college work. I’ve found an awful lot of information surfing the Web. But in answer to your question, I think I’d have to say email. It’s just a great way of keeping in touch with friends, especially the ones I have abroad.'],
              ['Interviewer', 'How about online banking? Have you thought about that?'],
              ['Philip', 'Not while I’ve got an overdraft, no!'],
              ['Interviewer', 'Fair enough. OK, well, thanks very much for your time.'],
              ['Philip', 'Is that it?'],
              ['Interviewer', 'Yup. That’s it.'],
              ['Philip', 'OK, well, cheers.']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
