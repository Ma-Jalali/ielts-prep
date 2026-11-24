/* IELTS · Listening · Practise · Part 1 · Exercise 22 — Student health and welfare services.
   Source: Listening Section 1 Exercises (Practice No 22); answers and recording script from the teacher's key (folder 22).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d122', week: 1, day: 122, sheet: true, illus: 'health',
  title: 'Student health and welfare services',
  duration: 'About 20 minutes',
  journey: 'Listen to a new student asking an adviser about health and welfare services at Glenfield, then ordering an information pack. Complete the table and the form.',
  finish: { title: 'Next', text: 'Exercise 23' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Table and form completion',
    outcome: 'Follow each service across the table, then catch a phone number, a spelled name and a postcode.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d122-test', title: 'Part 1 · Exercise 22',
          audios: [
            { title: 'Recording 1 · Questions 1–5 (first part)', src: 'https://drive.google.com/file/d/1HPdjDq-y2lmQ-9E8SKiltqRa_SBgD5Rc/view', note: 'A new student phones the university to ask about health and welfare services.' },
            { title: 'Recording 2 · Questions 1–5 (second part)', src: 'https://drive.google.com/file/d/1D2JeufKQnJskBtgf4ZW_cQBRa0e354Yx/view', note: 'The adviser goes on to the other services.' },
            { title: 'Recording 3 · Questions 6–10', src: 'https://drive.google.com/file/d/1HPv-HRta_t3AsSAmomtqZzsQcSA8fkLD/view', note: 'The student asks for an information pack and gives her details.' }
          ],
          blocks: [
            { type: 'ieTable', id: 'ieb2w1d122-q1', from: 1,
              instruction: 'Complete the table. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              columns: ['Student services', 'Location', 'Cost', 'Availability'],
              rows: [
                ['Health centre', 'North campus', 'Example: £6.50 charge for prescriptions', 'All students within the [[yellow]] zone'],
                ['Counselling service', 'North campus', 'Up to [[8|eight|8 sessions|eight sessions]] consultations free', 'All students'],
                ['Nightline', '[[Central]] campus', 'free', 'By phone: call [[0900 7625913|09007625913]]'],
                ['Sports centre', 'South campus', '£[[22|twenty-two]] each year', 'All students']
              ] },
            { type: 'ieGap', id: 'ieb2w1d122-q2', from: 6, layout: 'form', title: 'Material request form',
              instruction: 'Complete the form below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'Documents requested: [[whole information pack|information pack|the information pack|the whole pack]]\nStudent name: [[Sonia Orr]]\nAddress: 22 [[Winter Gardens]], Glenfield\nPostcode: [[GF23]] 9BQ\nNationality: Swiss\nAge: 24\nCourse: [[Economics and Sociology|Economics & Sociology]]' }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–5', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Student', lines: [
              ['Student', 'Hi, I wonder if you could help me. I’m starting a course at Glenfield in a few weeks. I was just a bit worried about what facilities there will be and what I’ll have to do. I’m especially interested in health and welfare stuff.'],
              ['Adviser', 'Certainly. We normally send out a copy of our leaflet “Staying healthy at Glenfield”. I’m not sure why you haven’t had it.'],
              ['Student', 'Well, could you answer a few questions for me? Firstly, I’m wondering about how I get a doctor when I arrive.'],
              ['Adviser', 'Well, you can register with the University Health Centre on North Campus.'],
              ['Student', 'And do I have to pay for that?'],
              ['Adviser', 'Not to register, but if you have to get medicines, there’s a prescription charge of £6.90.'],
              ['Student', 'OK. Well, I’m not planning to get ill. That’s only going to arise if I have any problems. So should I just go along when I arrive?'],
              ['Adviser', 'That’s what we recommend for peace of mind. But it’s not compulsory, and if you don’t live inside the catchment area you can’t in fact register there. Where do you live?'],
              ['Student', 'Well, at the moment I’m staying at the backpackers’ hostel in Hill Street, but I will be moving from there shortly. Somewhere nearer.'],
              ['Adviser', 'Well, there’s a map at the centre which shows you the area that the university practice can accept people from. It’s what we call the yellow zone. If you live outside that area you have to find another medical centre to register with.'],
              ['Student', 'It sounds like I’ll only qualify after I move.'],
              ['Adviser', 'I think you might be right. Then, in addition to the Health Centre, there’s a free Counselling Service for all students situated on the North Campus. You don’t have to register. They also have drop-in sessions. I say it’s free, but that’s only for up to eight sessions. Beyond that they normally refer people elsewhere.'],
              ['Student', 'Sounds serious.'],
              ['Adviser', 'Well, it’s not just for big problems. People go there for advice on housing, workload, whatever really. They can even arrange financial …'],
              ['Student', 'Is it confidential?'],
              ['Adviser', 'Absolutely. Then again, a lot of students prefer to phone the Nightline service, which is run from an office on the Central Campus. They don’t really encourage people to drop in.'],
              ['Student', 'I see.'],
              ['Adviser', 'So it’s basically a free phone line. The number, if you want to make a note, is 0-nine-hundred-seven-six-two-five-nine-one-three. There, I’ll say it again: 0-nine-hundred-seven-six-two-five-nine-one-three.'],
              ['Student', 'Fine. Well, I hope I won’t need any of these. What I will want is access to some gym facilities.'],
              ['Adviser', 'Right. Well, you’ll find those on the South Campus in the Sports Centre. It’s great, but it’s not free. You have to present your student card and pay a fee of £22 to get a pass, but that will last for the whole year.']
            ] }] },
          { type: 'toggle', title: 'Recording script · Questions 6–10', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Student', lines: [
              ['Student', 'Is this information on the website?'],
              ['Adviser', 'I’m afraid not. I can send you some leaflets or even send the whole information pack, if you give me your details.'],
              ['Student', 'Could you send the whole information pack, please?'],
              ['Adviser', 'Yes, that’s fine. I’ll have to take down some details. Could you tell me your full name?'],
              ['Student', 'Sonia Orr.'],
              ['Adviser', 'S-O-N-Y …'],
              ['Student', 'Erm, I’ll spell it. S-O-N-I-A … then Orr, O-R-R.'],
              ['Adviser', 'O-R-R … OK. And you said you were in Hill Street?'],
              ['Student', 'Yes, but don’t send it there as I’m about to move. I’ll give you my new address, which is 22 Winter Gardens. That’s Glenfield.'],
              ['Adviser', 'And the postcode?'],
              ['Student', 'Oh yeah. That’s GF23 9BQ.'],
              ['Adviser', 'Fine. Now we’re doing a bit of data collection about who uses our services at the moment. Can I just ask a few more questions?'],
              ['Student', 'Yes, that’s fine.'],
              ['Adviser', 'OK. If you’re an international student, what country are you from?'],
              ['Student', 'I’m from Switzerland.'],
              ['Adviser', 'And how old are you?'],
              ['Student', 'I’m 24.'],
              ['Adviser', 'And finally, which course are you enrolled on?'],
              ['Student', 'Right, well, that’s a bit complicated, since I’m hoping to switch to Economics and History …'],
              ['Adviser', 'But at the moment …'],
              ['Student', '… I’m down to do Economics and Sociology. It’s a joint degree.'],
              ['Adviser', 'OK. I’ll put that. Great, well … I’ll pop the information pack in the post and you should get it soon.']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
