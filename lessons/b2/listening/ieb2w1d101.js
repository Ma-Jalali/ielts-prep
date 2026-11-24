/* IELTS · Listening · Practise · Part 1 · Exercise 1 — A university course enquiry.
   Source: Listening Section 1 Exercises (Practice No 1); answers and recording script from the teacher's key (folder 01).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d101', week: 1, day: 101,
  title: 'A university course enquiry',
  duration: 'About 20 minutes',
  journey: 'Listen to a student calling a university about an International Business course. Complete the notes and the form.',
  finish: { title: 'Next', text: 'Exercise 2' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Note and form completion',
    outcome: 'Predict the kind of answer for each gap, then catch numbers, dates and names as you listen.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d101-test', title: 'Part 1 · Exercise 1',
          audios: [
            { title: 'Recording 1 · Questions 1–6', src: 'https://drive.google.com/file/d/1H1IttO-b7bY7-cbw8KT2xbm1t4x1sj1j/view', note: 'A student phones the university’s Admissions Guidance office.' },
            { title: 'Recording 2 · Questions 7–10', src: 'https://drive.google.com/file/d/1H1B_8IJtrMCAC6mkHav2tfDNx4LQIy_I/view', note: 'The call continues: the student’s details.' }
          ],
          blocks: [
            { type: 'ieGap', id: 'ieb2w1d101-q1', from: 1, layout: 'form', title: 'Notes on University 2 · Subject: International Business Qualification',
              instruction: 'Complete the form below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: '# Entry requirements\nEducational qualifications: [[a first degree|first degree]]\nEnglish language: [[7|seven|7.0]] in IELTS or higher\nCourse hours: [[ten hours|10 hours|ten|10]] per week\nExtended stay: at the start of the [[second semester]]\n# Course dates\nSemester 1: 27th September to 22nd January\nSemester 2: 7th February to [[27|27th|twenty-seventh]] May\nCourse content: study of [[international organizations|international organisations]], in particular how they are managed and their changing external context' },
            { type: 'ieGap', id: 'ieb2w1d101-q2', from: 7, layout: 'form', title: 'Phone enquiries',
              instruction: 'Complete the form below. Write **NO MORE THAN THREE WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN THREE WORDS AND/OR A NUMBER', max: 3,
              text: 'Purpose of call: Information about MIB course\n# Caller details\nName: Javed Iqbal\nHome address: Aga Khan Road, Shalimar [[5|five]], Islamabad, Pakistan\n# First degree\nSubject: [[Economics]]\nClass: [[first|first class]]\nUniversity: Islamabad University\nFirst language/s: [[Urdu and English|English and Urdu]]' }
          ]
        }] },
      { id: 'script', short: 'Check the script', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, read the script and find where each answer is said.',
        blocks: [
          { type: 'toggle', title: 'Recording script · Questions 1–6', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Student', lines: [
              ['Adviser', 'Hello, Admissions Guidance, how can I help?'],
              ['Student', 'Hello, I’d like some information about studying at your university. Can you help me?'],
              ['Adviser', 'Yes, of course. What course are you interested in applying for?'],
              ['Student', 'International Business. I already have a first degree from a university in my country.'],
              ['Adviser', 'Fine, so you’d want to do a Master’s level course?'],
              ['Student', 'Yes, that’s right.'],
              ['Adviser', 'OK, we offer an MIB course that’s a twelve-month full-time course. I can send you details of that course or you can download a pdf file from our website.'],
              ['Student', 'Could you put it in the post, please — I don’t have access to the Internet at the moment. Could you tell me what qualifications I need for that course?'],
              ['Adviser', 'Yes, for the MIB, you need a first degree. The minimum qualification is a “two one” or a “first”.'],
              ['Student', 'OK.'],
              ['Adviser', 'And in English language you need a score of 7 or above in IELTS.'],
              ['Student', 'That’s not a problem. I have a 9.'],
              ['Adviser', 'That’s fine.'],
              ['Student', 'Could you tell me the course hours and the semester dates, please?'],
              ['Adviser', 'Yes, there’s a total of ten hours of lectures, seminars and tutorials a week, and there’s an extended stay abroad at the beginning of the second semester. That involves spending a month at the national head office of a multinational corporation.'],
              ['Student', 'OK.'],
              ['Adviser', 'And the semester dates are … just a moment … OK — the first semester starts on the twenty-seventh of September and ends on the twenty-second of January, and the second semester runs from the seventh of February to the twenty-seventh of May.'],
              ['Student', 'Can you tell me a bit more about the actual course content?'],
              ['Adviser', 'Well, I don’t know much about the course personally — I’m an admissions officer, but I can read the course description for you if you like. If you need to know more about the academic side, you’ll need to speak to the course tutor.'],
              ['Student', 'Thanks — I’d be very grateful if you could tell me as much as possible now.'],
              ['Adviser', 'I’ll just read the main points: “It involves the advanced study of international organizations, their management and their changing external context. Students develop their ability to apply knowledge and understanding of international business to complex issues, both systematically and creatively, to improve business practice.”'],
              ['Student', 'Thank you very much.'],
              ['Adviser', 'You’re welcome. Now, if you could give me your name and address, I’ll have full details of postgraduate courses sent to you.']
            ] }] },
          { type: 'toggle', title: 'Recording script · Questions 7–10', hint: 'Open it after you have checked your answers.', blocks: [
            { type: 'chat', right: 'Student', lines: [
              ['Student', 'OK, my name is Javed Iqbal. That’s J-A-V-E-D … I-Q-B-A-L.'],
              ['Adviser', 'Thank you. And your home address, Mr Iqbal?'],
              ['Student', 'It’s Aga Khan Road, Shalimar 5, Islamabad, Pakistan.'],
              ['Adviser', 'Thank you, and could I ask you one or two more questions for our records?'],
              ['Student', 'Yes, of course.'],
              ['Adviser', 'What was your first degree in?'],
              ['Student', 'I did Economics. I got a first class degree.'],
              ['Adviser', 'And where did you study?'],
              ['Student', 'At the university here in Islamabad.'],
              ['Adviser', 'OK. Now, you said you had an IELTS level 9. Could I ask what your first language is?'],
              ['Student', 'Actually, I’m bilingual in Urdu and English.'],
              ['Adviser', 'Thank you very much. I’ll put full details in the post today.']
            ] }] }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
