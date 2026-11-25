/* IELTS · Listening · Learn · Lesson 2 — Part 1: everyday conversation.
   A Learn lesson on one page (js/sheet.js, learnPage): tips in tabs and folds, then the teacher's in-class exercises
   (each one folds open with its recording, the questions and the answers).
   Tips: the teacher's notes "IELTS Listening Tips" (International House), Part 1 pages, checked and extended.
   Exercises and answers: the teacher's slides "Listening Class Exercises" (Part 1: Exercises 1–4 and the spelling
   dictation); recordings from the teacher's Google Drive. Ids are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d2', week: 1, day: 2, sheet: true, illus: 'phone',
  title: 'Part 1: everyday conversation',
  duration: 'About 60 minutes',
  journey: 'Part 1 is the easiest part of the test, so it is where you collect sure marks. Learn how it works and the kinds of answers it asks for (names, numbers, dates, addresses), then practise with five exercises from class.',
  finish: { title: 'Next', text: 'Part 2: everyday monologue' },
  learn: {
    tags: ['Questions 1–10', 'Two speakers'],
    jump: [['xl-glance', 'At a glance', 'info'], ['xl-tips', 'Tips', 'tip'], ['xl-ex', 'Exercises', 'pen'], ['xl-sum', 'Remember', 'star'], ['xl-check', 'Check yourself', 'ok']],
    blocks: [
      { type: 'facts', anchor: 'xl-glance', kicker: 'Part 1 at a glance', title: 'A conversation about everyday life',
        items: [['1–10', 'questions: the first part of the test'], ['2', 'speakers: one asks for information, one gives it'], ['Phone', 'or **face to face**: both are common'], ['Easiest', 'part of the test: aim for **9 or 10** out of 10']] },
      { type: 'key', title: 'The big idea', text: 'Part 1 is about **facts**: names, numbers, dates and addresses. Catch **every letter and number**, and always listen **to the end** of the sentence.' },
      { type: 'tabs', anchor: 'xl-tips', kicker: 'Tips', title: 'How to do well in Part 1', intro: 'Four tabs. Read them in order: each one ends with a button to the next.',
        items: [
          { label: 'How it works', icon: 'info', blocks: [
            { type: 'cards', items: [
              { icon: 'people', t: 'Two speakers', d: 'One person needs information (a customer, a caller, a new member) and asks the other.' },
              { icon: 'chat', t: 'An everyday situation', d: 'Booking a course or a hotel, renting a flat, joining a club, reporting a lost item, enrolling a child.' },
              { icon: 'list', t: 'Usually a form or notes', d: 'Most often you complete a form, notes or a table. Sometimes there is multiple choice or a map.' },
              { icon: 'hash', t: 'Facts, not opinions', d: 'The answers are facts: names, numbers, dates, times, prices, addresses, places.' }] },
            { type: 'text', title: 'What kind of answer?', text: 'Before the recording starts, look at each gap and decide what kind of answer it needs. In Part 1 it is very often one of these:' },
            { type: 'chips', groups: [{ items: ['names', 'numbers', 'addresses', 'postcodes', 'phone numbers', 'measurements', 'shapes', 'prices', 'dates and times', 'days and months', 'countries, nationalities, languages', 'academic subjects'] }] },
            { type: 'note', tone: 'tip', title: 'Read the form like a story', text: 'The labels on a form (Name, Address, Date of arrival …) tell you what the speakers will talk about, and in which order. Follow them down the page as you listen.' }] },
          { label: 'Answer types', icon: 'hash', lead: 'Open each type to see how it sounds and how to write it.', blocks: [
            { type: 'folds', items: [
              { icon: 'abc', title: 'Names and spelling', sub: 'First name, surname, and letters that sound alike', blocks: [
                { type: 'text', text: 'A full name is **first name** (also called *given name* or *forename*) + **middle name** + **surname** (also *family name* or *last name*): John **F.** Kennedy.\n\nNames are usually spelled out letter by letter. Write each letter as you hear it, and listen to the end: speakers sometimes correct a letter.' },
                { type: 'table', head: ['You hear', 'You write'], rows: [['"double L"', 'LL'], ['"double S, E"', 'SSE'], ['"capital M"', 'M (capitals do not matter in your answer)']] },
                { type: 'chips', title: 'Letters that are easy to confuse', groups: [{ label: 'Practise saying these pairs', items: ['A / H / 8 (eight)', 'A / R', 'M / N', 'B / P / V', 'E / I', 'G / J', 'S / F', 'U / W', 'O (oh) / 0 (zero)'] }] }] },
              { icon: 'hash', title: 'Numbers and phone numbers', sub: 'double, triple, oh, and the teens', blocks: [
                { type: 'table', head: ['You hear', 'It means', 'Where'], rows: [['"double four"', '44', 'British'], ['"four four"', '44', 'American'], ['"triple five" / "five double five"', '555', 'British, Australian'], ['"oh"', '0', 'British, American'], ['"zero"', '0', 'Australian (and everywhere in other numbers)']] },
                { type: 'table', title: 'Teens or tens?', intro: 'Listen for the stress: in the teens it is at the **end**, in the tens at the **start**.', head: ['Teen', 'Ten'], rows: [['13 thir**TEEN**', '30 **THIR**ty'], ['14 four**TEEN**', '40 **FOR**ty'], ['15 fif**TEEN**', '50 **FIF**ty'], ['16 six**TEEN**', '60 **SIX**ty'], ['17 seven**TEEN**', '70 **SEV**enty'], ['18 eigh**TEEN**', '80 **EIGH**ty'], ['19 nine**TEEN**', '90 **NINE**ty']] },
                { type: 'note', tone: 'warn', title: 'A tricky one: 280 or 290?', text: 'In "two hundred **and** eighty" the word *and* is usually said quickly as *an\'*, so "hundred an\' eighty" can sound like "hundred ninety". Listen carefully for 218, 219, 280 and 290.' },
                { type: 'chips', title: 'Read these aloud, quickly', groups: [{ items: ['543 3890', '00789 622', '888 907 4426', '7786 422283', '292 344 473', '1019 265 598', '218', '219', '280', '290'] }] }] },
              { icon: 'map', title: 'Addresses and postcodes', sub: 'Street names, short forms, British and American words', blocks: [
                { type: 'table', head: ['Word', 'Short form'], rows: [['Street', 'St'], ['Road', 'Rd'], ['Drive', 'Dr'], ['Avenue', 'Ave'], ['Lane', 'Ln'], ['Square', 'Sq'], ['Crescent', 'Cres'], ['Boulevard', 'Blvd (rare in Britain: you will usually hear Avenue)']] },
                { type: 'note', tone: 'info', text: 'A British postcode mixes letters and numbers, such as **N8 6BY** or **BS8 9PU**. Copy every letter and number exactly. A house number comes **before** the street: *25 Park Drive*.' },
                { type: 'table', title: 'British and American words', head: ['British', 'American'], rows: [['roundabout', 'traffic circle'], ['pavement', 'sidewalk'], ['junction', 'intersection'], ['crossroads', 'intersection'], ['flat', 'apartment'], ['car park', 'parking lot']] }] },
              { icon: 'target', title: 'Measurements and shapes', sub: 'cm, m², decimals, fractions, circular …', blocks: [
                { type: 'table', head: ['You hear', 'You write'], rows: [['twenty centimetres', '20 cm'], ['nine point five kilometres', '9.5 km'], ['nought point eight metres', '0.8 m'], ['seventy-five centimetres', '75 cm / 0.75 m'], ['two square metres', '2 m²'], ['three cubic metres', '3 m³']] },
                { type: 'table', title: 'Size words', head: ['Noun', 'Adjective'], rows: [['length', 'long'], ['width', 'wide'], ['height', 'high / tall'], ['depth', 'deep'], ['weight', 'heavy']] },
                { type: 'chips', title: 'Fractions', groups: [{ items: ['½ a half', '⅓ a third', '⅔ two thirds', '¼ a quarter', '¾ three quarters', '⅕ a fifth', '⅑ a ninth'] }] },
                { type: 'chips', title: 'Shapes (noun → adjective)', groups: [{ items: ['circle → circular', 'triangle → triangular', 'rectangle → rectangular', 'square → square', 'oval → oval', 'cube → cubic', 'cylinder → cylindrical', 'cone → cone-shaped', 'pyramid → pyramid-shaped', 'crescent → crescent-shaped', 'cross → cross-shaped'] }, { label: 'Number prefixes', items: ['mono- 1', 'bi- 2', 'tri- 3', 'quad- 4', 'penta- 5', 'hexa- 6', 'hepta- 7', 'octa- 8', 'nona- 9', 'deca- 10'] }] }] },
              { icon: 'star', title: 'Prices', sub: 'pounds and pence, dollars and cents', blocks: [
                { type: 'table', head: ['You see', 'You hear'], rows: [['£25.80', 'twenty-five pounds eighty (pence)'], ['$80.25', 'eighty dollars (and) twenty-five (cents)'], ['€64.53', 'sixty-four euros fifty-three'], ['15p', 'fifteen pence, or "fifteen p"'], ['20¢', 'twenty cents']] },
                { type: 'note', tone: 'tip', text: 'Listen to the **whole** sentence: a price is often changed by a discount, a deposit or an extra charge ("It\'s £85, but students pay £68").' }] },
              { icon: 'clock', title: 'Dates, times and years', sub: 'the 27th of July, half past nine, the 1960s', blocks: [
                { type: 'table', title: 'Dates', head: ['You hear', 'You write'], rows: [['the twenty-seventh of July', '27 July'], ['July the twenty-seventh', 'July 27'], ['nineteen oh five', '1905'], ['eighteen ninety-two', '1892'], ['two thousand and nine', '2009']] },
                { type: 'table', title: 'Times', head: ['You see', 'You hear'], rows: [['9:15', 'a quarter past nine · nine fifteen'], ['8:45', 'a quarter to nine · eight forty-five'], ['2:30', 'half past two · two thirty'], ['9:05', 'five past nine · nine oh five'], ['14:00', 'fourteen hundred (hours)']] },
                { type: 'note', tone: 'warn', text: 'In British English **"half nine"** means **9:30** (half past nine), not 8:30.' },
                { type: 'table', title: 'Decades and centuries', head: ['You hear', 'It means'], rows: [['the 1960s', '1960–1969'], ['the early / mid / late 1990s', 'about 1990–93 / 1994–96 / 1997–99'], ['the 18th century', '1700–1799'], ['the 13th century', '1200–1299'], ['500 BC / AD 2021', 'before / after the year 0']] },
                { type: 'chips', title: 'Useful time words', groups: [{ items: ['a fortnight = two weeks', 'every other week = every second week', 'every other Sunday', '1st first', '2nd second', '3rd third', '21st twenty-first', '22nd twenty-second'] }] },
                { type: 'chips', title: 'Spell these correctly', tone: 'warn', groups: [{ items: ['Wednesday', 'Thursday', 'Saturday', 'February', 'January', 'August', 'September', 'October'] }] }] },
              { icon: 'book', title: 'Countries and subjects', sub: 'nationalities, languages, academic subjects', blocks: [
                { type: 'table', head: ['Country', 'Nationality', 'Language'], wide: true, rows: [['France', 'French', 'French'], ['Japan', 'Japanese', 'Japanese'], ['Egypt', 'Egyptian', 'Arabic'], ['Greece', 'Greek', 'Greek'], ['Denmark', 'Danish', 'Danish'], ['Ireland', 'Irish', 'English, Irish'], ['Portugal', 'Portuguese', 'Portuguese'], ['Brazil', 'Brazilian', 'Portuguese'], ['Hungary', 'Hungarian', 'Hungarian'], ['Poland', 'Polish', 'Polish'], ['Finland', 'Finnish', 'Finnish'], ['Switzerland', 'Swiss', 'German, French, Italian'], ['Pakistan', 'Pakistani', 'Urdu, English'], ['Norway', 'Norwegian', 'Norwegian'], ['Malaysia', 'Malaysian', 'Malay'], ['New Zealand', 'New Zealander', 'English'], ['Peru', 'Peruvian', 'Spanish'], ['Costa Rica', 'Costa Rican', 'Spanish']] },
                { type: 'chips', title: 'Academic subjects (spell them right)', groups: [{ items: ['biology', 'sociology', 'medicine', 'archaeology', 'pharmacy', 'pharmacology', 'anthropology', 'psychology', 'psychiatry', 'mathematics', 'algebra', 'geometry', 'arithmetic', 'statistics', 'physics', 'mechanics', 'genetics', 'geology', 'astronomy', 'economics', 'politics', 'history'] }] },
                { type: 'table', title: 'Four words that are often mixed up', head: ['Word', 'Meaning'], rows: [['economy (noun)', 'the money and business of a country'], ['economics (noun)', 'the subject you study'], ['economic (adjective)', 'about the economy: *economic growth*'], ['economical (adjective)', 'saving money: *an economical car*']] }] }
            ] }] },
          { label: 'Sounds', icon: 'ear', lead: 'Most Part 1 speakers are British. Two features of British pronunciation catch many students out.', blocks: [
            { type: 'text', title: 'The silent R', text: 'In British English, an **r after a vowel is not pronounced**: the vowel just becomes longer. *Car* sounds like "cah", *four* like "faw". (The r is heard again when the next word begins with a vowel: "fa**r a**way".)' },
            { type: 'chips', groups: [
              { label: 'Short words', items: ['far', 'car', 'war', 'four', 'hour', 'sir', 'pair', 'pear', 'year'] },
              { label: 'Longer words', items: ['father', 'mother', 'brother', 'teacher', 'over', 'under', 'perfect', 'morning', 'internet', 'yesterday', 'Saturday', 'farmer', 'error', 'polar bear'] },
              { label: 'Ending in -re / -ere', items: ['are', 'square', 'here', 'there', 'before'] },
              { label: 'r + a consonant', items: ['hard', 'park', 'warm', 'first', 'part', 'bird', 'March', 'Carl', 'herd'] }] },
            { type: 'text', title: 'The long "a"', text: 'Many words with a short /æ/ in American English have a long /ɑː/ in British English: *can\'t* sounds like "cahnt", *class* like "clahss".' },
            { type: 'chips', groups: [{ items: ["can't", 'pass', 'class', 'past', 'answer', 'after', 'half', 'chance', 'sample', 'example', 'bath', 'last', 'ask'] }] },
            { type: 'note', tone: 'tip', title: 'Say these aloud, the British way', text: 'There are four birds under that tree over there, near the yellow car.\n\nI like bears because they are fantastic creatures, living everywhere, even in polar regions.\n\nI have two brothers and four sisters, living with my sixty-four-year-old mother in the north of Manchester.' }] },
          { label: 'Traps', icon: 'warn', lead: 'Part 1 is easy to understand, but it has traps. Try these.', blocks: [
            { type: 'spot', items: [
              { lines: [['Receptionist', 'So that\'s a double room from the 15th of May?'], ['Caller', 'Yes … oh no, sorry, I\'ve just checked my diary. We arrive on the 16th.']], q: 'When does the caller arrive?', options: ['the 15th of May', 'the 16th of May'], answer: 1, why: 'Speakers often **correct themselves**. Listen for *sorry*, *actually*, *no, wait*.' },
              { lines: [['Assistant', 'The course costs £180, but there\'s a twenty-pound discount for students.'], ['Student', 'Great, I\'m a student, so that\'s fine.']], q: 'How much will the student pay?', options: ['£180', '£160', '£20'], answer: 1, why: 'The first number you hear is often **not** the answer. Listen to the end of the sentence.' },
              { lines: [['Officer', 'And your mobile number?'], ['Woman', 'It\'s oh seven seven double three, four five six, nine one eight.']], q: 'What is the woman\'s number?', options: ['07733 456 918', '077 33 456 981', '0773 456 918'], answer: 0, why: '"Oh" is 0 and "double three" is 33. Write numbers as you hear them, in groups.' }] },
            { type: 'list', items: [
              '**Keep to the word limit.** NO MORE THAN TWO WORDS means "large suitcase" is fine and "large blue suitcase" is wrong.',
              '**Singular or plural?** Look at the words around the gap: "a ___" needs a singular; "two ___" needs a plural.',
              '**Do not repeat** words already printed on the form: if it says "£ ___", write only the number.',
              '**Spelling counts.** A name spelled out letter by letter must be copied exactly.'] }] }
        ] },
      { type: 'exercises', anchor: 'xl-ex', kicker: 'In-class exercises', title: 'Practise Part 1', intro: 'Open an exercise, read the questions, then play the recording. Each one has its answers folded at the bottom.',
        items: [
          { id: 'ieb2w1d2-e1', title: 'A course enrolment form', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1SZIkcGC_sdx-UqUQzGB5yB5x1jqC7xH3/view', note: 'A student enrols on a course at a London academy.' }],
            tip: 'All six answers are facts: a name, a surname, an address, an age, a course and a date. Decide which is which before you play.',
            blocks: [{ type: 'ieGap', id: 'ieb2w1d2-e1-q1', from: 1, layout: 'form', title: 'St. Vitus Academy · Course enrolment form', instruction: 'Complete the form below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.',
              text: 'First name: [[Sara]]\nSurname: [[Walker]]\nAddress: [[19 Swan Street]], London, N8 6BY\nAge: [[18|eighteen]]\nCourse: [[modern dance]]\nCourse start date: [[5 September|September 5|5th September|the 5th of September]]' }] },
          { id: 'ieb2w1d2-e2', title: 'Spelling dictation', kind: 'Names, places and a website', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1PsR_g6mRmgeeKU3DUeuEEcdLc6E0ew7E/view', note: 'Six names and addresses, spelled out.' }],
            tip: 'Write each one exactly as it is spelled: every letter and number counts.',
            blocks: [{ type: 'ieGap', id: 'ieb2w1d2-e2-q1', from: 1, layout: 'notes', title: 'Write what you hear', instruction: 'Listen and write each address, name or website.',
              text: 'Address: [[23 Borough Road]]\nTown: [[Jaywick]]\nName: [[Anna Fravelli]]\nPlace: [[Quarryside]]\nTown: [[Charlesworth]]\nWebsite: [[www.kimmarshall.com|kimmarshall.com]]' }] },
          { id: 'ieb2w1d2-e3', title: 'A child-care enrolment form', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1E-WVrSPsANgewZcRDq38vxJ-4yxHMN4a/view', note: 'A parent enrols a child at a child-care centre in Brisbane.' }],
            blocks: [{ type: 'ieGap', id: 'ieb2w1d2-e3-q1', from: 1, layout: 'form', title: 'Ascot Child Care Centre · Enrolment form', instruction: 'Complete the form below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.',
              text: '# Personal details\nFamily name: Cullen (example)\nChild\'s first name: [[Alex|Alexandra]]\nAge: [[3|three|3 years old|three years old]]\nBirthday: [[8 November|November 8|8th November]]\nOther children in the family: a brother aged [[5|five]]\nAddress: [[108 Park Road]], Brisbane\nEmergency contact number: 3467 8890\nRelationship to child: [[grandmother]]\n# Development\nHas difficulty [[sleeping]] during the day\nIs able to [[get dressed]] herself\n# Child-care arrangements\nDays required: [[Monday and Tuesday|Mondays and Tuesdays|Monday, Tuesday]]\nPick-up time: [[4 pm|4pm|4 o\'clock|4.00 pm|4:00 pm]]' }] },
          { id: 'ieb2w1d2-e4', title: 'A shipping quotation form', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/18DWX_3Xqbj2AzxKS0-JUjcuxygSMBbO_/view', note: 'A student asks a shipping agency to send his things home to Kenya.' }],
            tip: 'Questions 4 and 5 are measurements: write the number and the unit (m or cm).',
            blocks: [{ type: 'ieGap', id: 'ieb2w1d2-e4-q1', from: 1, layout: 'form', title: 'Packham’s Shipping Agency · Customer quotation form', instruction: 'Complete the form below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.',
              text: 'Country of destination: Kenya (example)\nName: Jacob [[Mkere]]\nAddress to be collected from: [[Westall]] College, Downlands Rd.\nTown: Bristol\nPostcode: [[BS8 9PU|BS89PU]]\n# Size of container\nLength: 1.5 m\nWidth: [[0.75 m|0.75m|75 cm|0.75 metres]]\nHeight: [[0.5 m|0.5m|50 cm|0.5 metres]]\n# Contents\nClothes\nAlso: [[books|toys]] (in any order)\nAlso: [[toys|books]] (in any order)\nTotal estimated value: £[[1700|1,700]]' }] },
          { id: 'ieb2w1d2-e5', title: 'A school trip abroad', audio: [{ title: 'Recording', src: 'https://drive.google.com/file/d/1NVTPuGogmQvE8aa6mYDexigt0bHLXxaK/view', note: 'A teacher explains a school trip run by a friendship club.' }],
            blocks: [{ type: 'ieGap', id: 'ieb2w1d2-e5-q1', from: 1, layout: 'form', title: 'School trip information', instruction: 'Complete the notes below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.',
              text: 'Name of club: International Friendship Club (example)\nCountry: [[Peru]]\nAccommodation: students stay with families [[in pairs]]\nCost: £495\nDuration: [[15|fifteen]] days\nThe price does not include presents for the host family or [[spending money]]\nTakes place during the spring [[holiday|holidays]]\nAdvert released on: [[29 September|September 29]]\nAfter the application is received, [[an interview|interview]] is necessary\nNumber of students on the trip: [[20|twenty]]\nTotal number of adults: six, including [[2|two]] parents\nDeposit: £[[100|one hundred]]' }] }
        ] },
      { type: 'recap', anchor: 'xl-sum', title: 'Remember',
        items: ['One person asks, the other answers: the answers are **facts**.', 'Before you listen, predict the **type** of each answer: a name, a number, a date …', 'Write names and numbers **exactly**: spelling counts.', 'Speakers **correct themselves**: listen for *sorry*, *actually*, *no, wait*.', 'Keep to the **word limit**, and do not repeat words already on the form.'] },
      { type: 'check', anchor: 'xl-check', kicker: 'Check yourself', title: 'True or false?', intro: 'Tap True or False to see the answer.',
        items: [
          { s: 'In Part 1 one speaker usually asks the other for information.', answer: true, why: 'A customer, a caller or a new member asks; the other person answers.' },
          { s: 'In British English "double four" means 44.', answer: true, why: 'And "triple five" means 555.' },
          { s: 'Fourteen and forty have the stress in the same place.', answer: false, why: 'four**TEEN** has the stress at the end; **FOR**ty at the start.' },
          { s: '"Half nine" means 8:30.', answer: false, why: 'In British English it means 9:30, half past nine.' },
          { s: 'The first price you hear is always the answer.', answer: false, why: 'Prices are often changed by a discount or an extra charge. Listen to the end.' },
          { s: 'Capital letters do not matter in your answers.', answer: true, why: 'But spelling does.' }
        ] }
    ]
  },
  sections: [{
    id: 'learn', number: '02', minutes: 60, tone: 'teal', art: 'listening',
    title: 'Part 1: everyday conversation', subtitle: 'Tips and in-class exercises',
    outcome: 'Know how Part 1 works and the answers it asks for, and practise with five exercises.',
    activities: [
      { id: 'tips', short: 'Tips', minutes: 25, grouping: 'Alone', title: 'Read the Part 1 tips', goal: 'Read how Part 1 works, the answer types, the sounds and the traps.', blocks: [{ type: 'text', title: 'Tips', text: 'How Part 1 works, answer types, British sounds and traps.' }] },
      { id: 'practise', short: 'Exercises', minutes: 35, grouping: 'Alone', title: 'Do the in-class exercises', goal: 'Do the five exercises and check your answers.', blocks: [{ type: 'text', title: 'Exercises', text: 'Five Part 1 exercises.' }] }
    ]
  }],
  extras: [],
  glossary: []
};
