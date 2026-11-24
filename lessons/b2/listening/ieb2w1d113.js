/* IELTS · Listening · Practise · Part 1 · Exercise 13 — Harbour cruises.
   Source: Listening Section 1 Exercises (Practice No 13); answers and recording script from the workbook key (Drive folder "12-13", Track 06; folder "13" is empty).
   The paper's table runs one column per cruise and numbers its gaps 1, 3, 5 / 2, 4, 6. Here the table is read row by row, so the gaps are
   numbered 1–6 in reading order: 1 name, 2 Noon price, 3 third departure time, 4–6 what is included.
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d113', week: 1, day: 113,
  title: 'Harbour cruises',
  duration: 'About 20 minutes',
  journey: 'Listen to a customer phoning a company about its three harbour cruises. Complete the table and the sentences.',
  finish: { title: 'Next', text: 'Exercise 14' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Table and sentence completion',
    outcome: 'Follow prices, times and extras for three options, and fill a table that is not in the order you hear it.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play the recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d113-test', title: 'Part 1 · Exercise 13',
          audios: [
            { title: 'Recording 1 · Questions 1–10', src: 'https://drive.google.com/file/d/1HFq-9JbR8tnIjhJtu11kcF9JZCmi8M8F/view', note: 'A customer phones Blue Harbour Cruises to ask about the three cruises.' }
          ],
          blocks: [
            { type: 'ieTable', id: 'ieb2w1d113-q1', from: 1, title: 'Blue Harbour Cruises',
              instruction: 'Complete the table below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              columns: [],
              rows: [
                ['Name of cruise', 'Highlight Cruise', 'Noon Cruise', '[[Sunset]] Cruise'],
                ['Price per person', '$16', '[[$42|42|42 dollars|$42.00]]', '$25'],
                ['Departure times', '9:30 am', '12:00 pm', '[[6.15|6:15|6.15 pm|6:15 pm|6.15pm|6:15pm|18.15|18:15|quarter past six]]'],
                ['Included in the price', '[[postcard|a postcard|free postcard|a free postcard|postcards|free postcards]]', '[[lunch]]', '[[drinks and snacks|snacks and drinks|drinks, snacks|drinks snacks|drinks & snacks]]']
              ] },
            { type: 'ieGap', id: 'ieb2w1d113-q2', from: 7, layout: 'sentences',
              instruction: 'Complete the sentences below. Write **NO MORE THAN TWO WORDS** for each answer.', rule: 'NO MORE THAN TWO WORDS', max: 2,
              text: 'Jetty no. 2 is across the road from the [[taxi rank|taxi-rank]].\nThe commentary is in [[English]].\nA [[Japanese]] version of the brochure is available.\nPassengers are advised to take a [[hat|sun hat|sunhat]].' }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–10', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Customer', lines: [
              ['Clerk', 'Good morning, Blue Harbour Cruises. How can I help you?'],
              ['Customer', 'Can you tell me something about the different harbour cruises you run?'],
              ['Clerk', 'Well … we run three cruises every day, each offering something slightly different.'],
              ['Customer', 'Let me just get a pencil.'],
              ['Clerk', 'Firstly, there’s the Highlight Cruise … then we do the Noon Cruise and we also have our Sunset Cruise.'],
              ['Customer', 'Could you tell me a little bit about them? When they leave, what they cost, that sort of thing?'],
              ['Clerk', 'Well, the Highlight Cruise is $16 per person and that leaves at 9.30 every morning and takes two hours to go round the harbour.'],
              ['Customer', 'Right … 9.30 … and do you get coffee or refreshments?'],
              ['Clerk', 'No, but there’s a kiosk on board where you can buy drinks and snacks. And we do provide everyone with a free postcard.'],
              ['Customer', 'Right. And the Noon Cruise? Can you give me some details on that one?'],
              ['Clerk', 'Well … the Noon Cruise is a little more expensive — it’s $42 per person, and that departs at 12 o’clock, of course. It’s actually very good value because it takes about three hours, as it goes round the harbour twice and, of course, for that price you also get lunch.'],
              ['Customer', 'I see … and what about the last one?'],
              ['Clerk', 'Well, that’s $25 a head. And it takes two hours.'],
              ['Customer', 'And when does that depart?'],
              ['Clerk', 'We only run that one in the summer months, and it leaves punctually at a quarter past six.'],
              ['Customer', 'And presumably you get a chance to see the sunset.'],
              ['Clerk', 'Yes, indeed, which is why it only runs in the summer.'],
              ['Customer', 'And is there anything included?'],
              ['Clerk', 'Oh, yes. All passengers receive drinks and snacks, served throughout the cruise.'],
              ['Customer', 'Can I book for tomorrow?'],
              ['Clerk', 'No need to book. Just be down at the quay at six o’clock. All our cruises depart from jetty no. 2.'],
              ['Customer', 'Can you tell me where that is exactly?'],
              ['Clerk', 'Yes, no. 2 jetty is opposite the taxi rank. It’s clearly signposted.'],
              ['Customer', 'Right … and can you tell me — is there a commentary?'],
              ['Clerk', 'Yes, there is. On all the cruises.'],
              ['Customer', 'Do they do the commentary in any other languages?'],
              ['Clerk', 'No, it’s just in English, I’m afraid.'],
              ['Customer', 'Oh … so I’ll have to translate for my friend, I suppose, as she’s from Japan.'],
              ['Clerk', 'Well, there is a brochure with some information about the places of interest, and that’s printed in several languages, including Japanese.'],
              ['Customer', 'Oh, fine.'],
              ['Clerk', 'Oh, and one other thing. It gets extremely hot on the upper deck even at that time of day, so it’s a good idea to bring a hat. Otherwise you could get quite sunburned.'],
              ['Customer', 'Right. I’ll remember that. Thanks very much.']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
