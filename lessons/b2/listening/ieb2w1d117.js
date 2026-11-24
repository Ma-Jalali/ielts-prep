/* IELTS · Listening · Practise · Part 1 · Exercise 17 — Finding a flat in Newbridge.
   Source: Listening Section 1 Exercises (Practice No 17); answers and recording script from the teacher's key (folder 17).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d117', week: 1, day: 117,
  title: 'Finding a flat in Newbridge',
  duration: 'About 20 minutes',
  journey: 'Listen to an accommodation officer showing a student a map of Newbridge and telling him how to apply for some flats. Label the map, match the flats and complete the sentences.',
  finish: { title: 'Next', text: 'Exercise 18' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Map labelling, matching and sentence completion',
    outcome: 'Follow directions on a map (left, opposite, next to, further away) and keep track of several similar items.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d117-test', title: 'Part 1 · Exercise 17',
          audios: [
            { title: 'Recording 1 · Questions 1–3', src: 'https://drive.google.com/file/d/1H07LDfU2WNv_szIaO-UAykRklKrjqPLK/view', note: 'An accommodation officer shows a student a map of Newbridge.' },
            { title: 'Recording 2 · Questions 4–10', src: 'https://drive.google.com/file/d/1GzdpWgOTV5URvz0p1i_Rcte5H8xykUQO/view', note: 'The officer explains how to apply for each flat and describes the town.' }
          ],
          blocks: [
            { type: 'ieDiagram', id: 'ieb2w1d117-q1', from: 1, title: 'Map of Newbridge',
              instruction: 'Label the map. Choose your answers from the list below and write the correct letter, **A–H**, next to Questions 1–3.',
              src: 'assets/lessons/listening/part1/ex17-map.jpg', alt: 'Map of Newbridge: the High Street runs up from the bridge; West Street branches off to the left past the supermarket and the sports centre; London Road is on the right with two buildings beside it.',
              bank: ['High Street (example)', 'tennis courts', 'car park', 'The Towers', 'The Heights', 'railway station', 'town hall', 'bus station'],
              labels: [
                { x: 53.5, y: 20.6, answer: 'G' },
                { x: 47, y: 52.7, answer: 'F' },
                { x: 88.7, y: 47.3, answer: 'D' }
              ] },
            { type: 'ieMatch', id: 'ieb2w1d117-q2', from: 4, reuse: true, boxTitle: 'What should the student do next?',
              instruction: 'What is the next thing the student should do? Write the correct letter, **A–C**, next to each flat number.',
              options: ['apply to an agency', 'deal through the accommodation officer', 'apply directly to the owner'],
              items: [
                { q: 'Flat 4', answer: 'A' },
                { q: 'Flat 6', answer: 'C' },
                { q: 'Flat 8', answer: 'B' },
                { q: 'Flat 10', answer: 'C' },
                { q: 'Flat 14', answer: 'A' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d117-q3', from: 9, layout: 'sentences',
              instruction: 'Complete the sentences below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: 'The biggest employers in Newbridge used to be [[clothing factories]].\nThere is little student accommodation in the [[housing estates]] around the town.' }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–3', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Student', lines: [
              ['Officer', 'Well, you have left things a bit late. Have you tried looking for somewhere in Newbridge?'],
              ['Student', 'Newbridge? No, I haven’t. I’ve never heard of Newbridge.'],
              ['Officer', 'Well, let me show you — I’ve got a map here. Here’s where everything is. You come into Newbridge over the bridge and the main road in front of you is, surprisingly enough, the High Street. This is one of the main streets.'],
              ['Student', 'Mmm …'],
              ['Officer', 'And branching off to the left, you can see there, is West Street — that is another busy part of town.'],
              ['Student', 'I see.'],
              ['Officer', 'Now, as I was saying, here is the High Street and here is West Street going left. Now if you go along West Street, the first place you come to on your right is the supermarket — it’s not a very big one but it’s got most things you’re likely to need. Next to it, there’s the old town hall — I say the old town hall because it is about a hundred years old, but it will soon make way for a car park, I’m afraid. I suppose the car is king. Now opposite the supermarket is the railway station. You can get very frequent buses and trains from here in to the university. And next to that is the sports centre — it’s a brand new one and was built on the site of some tennis courts, so that’s progress. It’s got everything the keen sportsman like yourself might require. Now that’s the centre of town and I want to point out to you the buildings opposite the supermarket, but on the other side of London Road. There are two buildings there: the one further away from the High Street is called The Heights and the one nearer the High Street is called The Towers.'],
              ['Student', 'What are they?'],
              ['Officer', 'They are where you could find a flat. One of them — The Heights — has a number of flats for rent at the moment.'],
              ['Student', 'Oh good.']
            ] }] },
          { type: 'toggle', title: 'Recording script · Questions 4–10', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Student', lines: [
              ['Officer', 'Now the first one is Flat 4. That’s a nice flat with a balcony and you need to apply to The Newbridge Accommodation Agency to ask about that one. You’ll find their number in the phone book. Number 6 is another nice one which has been empty for a while and you can ring the owner directly, I think … yes, I’ve got her number written here — there it is.'],
              ['Student', 'Right, thank you.'],
              ['Officer', 'Good. Now, number 8 is a re-advertisement —'],
              ['Student', 'What do you mean?'],
              ['Officer', 'Well, it did have a tenant, but now it is for rent again, so I’d like to ask about that one. Leave it with me and I’ll look into it for you, then we can talk about it when I’ve got more information.'],
              ['Student', 'OK … are there others in this block?'],
              ['Officer', 'Yes, there’s number 10, now this one’s a bit strange. It’s advertised with an agency as well as privately in the local paper. Normally, if it’s advertised through an agency, you shouldn’t really go behind the agency and go directly to the owner, but on this occasion I suggest you just answer the advert here in the newspaper which the owner has obviously put in.'],
              ['Student', 'OK.'],
              ['Officer', 'Finally, there is number 14. This is with the Newstart Agency — this is an agency started by the girl who was my assistant here and she left to make money for herself, so she’s not my favourite person, but I’m afraid I would have to advise you to go through the agency anyway. Again, their number is in the phone book. All right, is that something for you to be starting with?'],
              ['Student', 'That’s great. But what kind of place is Newbridge?'],
              ['Officer', 'It’s a nice place. It was developed about a hundred years ago, really for people who worked in the factories around there. They were clothing factories and everyone worked in them — men, women, boys and girls. Then when the factories closed down things got very difficult for the town — there was a huge amount of unemployment, until a few years ago when in the telecoms boom a company making mobile phones started up — I think your phone was made in Newbridge — and now this company employs most of the people in the town. There are new housing estates on the edge of the town but they are mostly occupied by young families, and there isn’t much student accommodation there. Most flats and so on are in the centre.'],
              ['Student', 'That sounds good.'],
              ['Officer', 'Well, let me know how you get on.'],
              ['Student', 'Yes, of course. Thank you. Bye.'],
              ['Officer', 'Bye.']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
