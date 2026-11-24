/* IELTS · Listening · Practise · Part 1 · Exercise 2 — A job at a call centre.
   Source: Listening Section 1 Exercises (Practice No 2); answers and recording script from the teacher's key (folder 02).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d102', week: 1, day: 102, sheet: true, illus: 'headset',
  title: 'A job at a call centre',
  duration: 'About 20 minutes',
  journey: 'Listen to a student phoning an employment agency about a summer job at a call centre. Answer the questions, then follow the directions on the map.',
  finish: { title: 'Next', text: 'Exercise 3' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Multiple choice and map labelling',
    outcome: 'Listen for the option the speaker really means, not the first word you hear, and follow directions on a map.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d102-test', title: 'Part 1 · Exercise 2',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1H1aYTzUMPTgbin6Qdpr81Deza_udt72E/view', note: 'Steve phones the Top Job Employment Agency about a call centre job.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1H1w5P9ffod7WWuh68QDtU5nFz_E4NQQm/view', note: 'Ellen explains how to get to the interview in Riverside Business Park.' }
          ],
          blocks: [
            { type: 'ieChoice', id: 'ieb2w1d102-q1', from: 1, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'Steve phones the agency to find out about', options: ['a permanent post at a call centre.', 'the nature of the job advertised.', 'the amount he would be paid.'], answer: 'B' },
              { q: 'Ellen says the problem with some students is that they', options: ['are not completely honest.', 'lack essential IT skills.', 'arrive late for work.'], answer: 'C' },
              { q: 'Steve would mainly take calls from customers', options: ['who want information about their credit card accounts.', 'whose credit cards have been stolen.', 'who have lost their credit cards.'], answer: 'A' }
            ] },
            { type: 'figure', src: 'assets/lessons/listening/part1/ex02-charts.jpg', alt: 'Three pie charts. A: female 55%, male 45%. B: female 75%, male 25%. C: female 45%, male 55%.', caption: 'Question 4 · Charts A, B and C' },
            { type: 'ieChoice', id: 'ieb2w1d102-q2', from: 4, instruction: 'Choose the correct letter, **A, B or C**.', items: [
              { q: 'Which chart shows the current proportion of female to male callers?', options: ['Chart A: female 55%, male 45%', 'Chart B: female 75%, male 25%', 'Chart C: female 45%, male 55%'], answer: 'A' },
              { q: 'Ellen says that call centre operatives should be', options: ['experienced.', 'intelligent.', 'helpful.'], answer: 'B' }
            ] },
            { type: 'ieDiagram', id: 'ieb2w1d102-q3', from: 6,
              instruction: 'Listen to the second part of the recording and label the map below. Write the correct letter, **A–H**, next to Questions 6–10.',
              src: 'assets/lessons/listening/part1/ex02-map.jpg', alt: 'A map of Riverside: Orchard Road runs from the bus station past the car dealers, the water company and the advertising agency; Newfield Avenue, Cherry Lane and Almond Drive turn off it.',
              bank: ['Insurance offices', 'Shipping company', 'Call centre', 'Petrol station', 'Hotel', 'Railway station', 'Shopping centre', 'Local government offices'],
              labels: [
                { x: 13.1, y: 21.7, answer: 'D' },
                { x: 46.6, y: 49.1, answer: 'G' },
                { x: 14.8, y: 59.2, answer: 'A' },
                { x: 45.8, y: 75.4, answer: 'E' },
                { x: 53, y: 95.1, answer: 'C' }
              ] }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–5', hint: 'Open it after you have checked your answers. A few lines are missing from the printed script (marked …).', blocks: [
            { type: 'chat', right: 'Steve', lines: [
              ['Ellen', 'Hello, Top Job Employment Agency. Ellen Sykes speaking. How can I help you?'],
              ['Steve', 'Good morning, my name’s Steve Collins and I’m calling about the call centre job advertised in today’s paper.'],
              ['Ellen', 'For an operative handling credit card enquiries?'],
              ['Steve', 'Yes, that’s right. The wages and working conditions are all in the ad, so what I’d like to know now is what the work actually consists of. I should explain that I’m a student looking for a summer job, not long-term employment.'],
              ['Ellen', 'That’s OK. The people at InterCard say they’ve always found students to be honest, which of course is essential in this line of work, and they have the basic IT skills needed there. Apparently there have been a few who didn’t find it easy to get there on time in the morning …'],
              ['Steve', 'And from those who’ve had their cards stolen?'],
              ['Ellen', 'No, they ring another number for that: an emergency line. People also call that number if they lose their cards.'],
              ['Steve', 'And what are most callers like? I mean what kind of people are they?'],
              ['Ellen', 'All sorts, really. All ages, every kind of background. Though one definite trend is the change in the number of women. Nowadays they make up around 55% of the total, whereas years ago there used to be a majority of men calling. At one time, I heard, as many as three-quarters of all credit cards were actually held by men, but that must have been long before I was there. It’s certainly different now.'],
              ['Steve', 'So to do this job, what sort of experience do I need?'],
              ['Ellen', 'None really. Have you got a credit card yourself?'],
              ['Steve', 'Yes, I have.'],
              ['Ellen', 'Then you probably know quite a bit about them already, and as a student you’re obviously intelligent, which of course you need to be for the job. So after a day or so working with an experienced operative I’m sure you’ll have picked up enough to deal with routine enquiries, which of course most of them are.'],
              ['Steve', 'But there are bound to be questions I can’t deal with, at least at first. What happens then?'],
              ['Ellen', 'In that case you can ask a supervisor. They’re very helpful to new staff.'],
              ['Steve', 'I think I like the sound of this. What do I do next?']
            ] }] },
          { type: 'toggle', title: 'Recording script · Questions 6–10', hint: 'Open it after you have checked your answers. The end of the printed script is missing (marked …).', blocks: [
            { type: 'chat', right: 'Steve', lines: [
              ['Ellen', 'Can you get over there for 9.45 on Monday morning, for an interview?'],
              ['Steve', 'Definitely, yes. Whereabouts are they?'],
              ['Ellen', 'In Riverside Business Park. Do you know it?'],
              ['Steve', 'Yes, I’ve been there once.'],
              ['Ellen', 'How do you usually travel?'],
              ['Steve', 'By bus.'],
              ['Ellen', 'Right. So you take either the 136 or 137 to the bus station, and when you come out of there you turn right.'],
              ['Steve', 'Along Orchard Road, that is? The road from the railway station?'],
              ['Ellen', 'Yes, that’s right. You go past the petrol station next to the car dealers, then carry on down the road.'],
              ['Steve', 'Do I take the first left? At the main car park?'],
              ['Ellen', 'Well you could do that, and walk up Newfield Avenue alongside the shopping centre, but it’s a long way round. I’d suggest continuing along Orchard Road, with the water company and then the insurance offices on your right. They used to be local government offices, by the way.'],
              ['Steve', 'Yes, I remember those.'],
              ['Ellen', 'And you keep going until you reach the advertising agency. Now facing that is a small road called Cherry Lane. There’s a newspaper office on the corner and opposite that is a big hotel, so you can’t miss it.'],
              ['Steve', 'And how far down that road is it?'],
              ['Ellen', 'Well they aren’t actually in Cherry Lane. …']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
