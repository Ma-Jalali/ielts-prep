/* IELTS · Listening · Practise · Part 3 · Exercise 19 — Returning a faulty breadmaker.
   Source: Listening Section 3 Exercises (Practice No 19); answers and recording script from the teacher's key (folder 19, Ans.12.pdf).
   Recordings stream from Google Drive. Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
  id: 'ieb2w1d319', week: 1, day: 319, sheet: true, illus: 'home',
  title: 'Returning a faulty breadmaker',
  duration: 'About 20 minutes',
  journey: 'Listen to a customer bringing a broken breadmaker back to a shop and the assistant explaining what happens next. Complete the flow chart, then fill in the replacement form.',
  finish: { title: 'Next', text: 'Exercise 20' },
  sections: [{
    id: 'ex', number: '01', minutes: 20, tone: 'teal', art: 'listening',
    title: 'Questions 1–10', subtitle: 'Flow-chart and form completion',
    outcome: 'Follow a process with yes/no branches and catch numbers, spelled names and dates.',
    activities: [
      { id: 'listen', short: 'Listen and answer', minutes: 15, grouping: 'Alone',
        title: 'Listen and answer', goal: 'Play each recording and answer Questions 1–10. Read the questions before you play.',
        blocks: [{
          type: 'ieTest', id: 'ieb2w1d319-test', title: 'Part 3 · Exercise 19',
          audios: [
            { title: 'Recording 1 · Questions 1–5', src: 'https://drive.google.com/file/d/1Cup7-NH0mrtPWH7DCl4nIOWolCB0Kbtp/view', note: 'A customer complains that her breadmaker has stopped working.' },
            { title: 'Recording 2 · Questions 6–10', src: 'https://drive.google.com/file/d/1Cb2UOTjo72vdYaVp0nIstquaaNMCl5l3/view', note: 'The assistant fills in the replacement form with the customer’s details.' }
          ],
          blocks: [
            { type: 'ieDiagram', id: 'ieb2w1d319-q1', from: 1, title: 'Dealing with a faulty product',
              instruction: 'Complete the gaps in the flow chart. Write **NO MORE THAN TWO WORDS AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2,
              src: 'assets/lessons/listening/part3/ex19-flowchart.jpg', alt: 'Flow chart: a customer complains about a malfunction; if the machine is inside the guarantee period, the customer fills in a form and the shop replaces the machine; if not, the customer fills in a form, the product is sent away to be fixed, and the shop receives details of cost and time before the repair is arranged.',
              labels: [
                { x: 75.6, y: 48.9, answer: 'repair centre|repair center' },
                { x: 75.5, y: 60.0, answer: 'an estimate|estimate' },
                { x: 86.9, y: 67.0, answer: 'accept|agree|accept estimate|accept it' },
                { x: 81.5, y: 80.5, answer: 'collect' },
                { x: 25.2, y: 48.8, answer: 'three|3' }
              ] },
            { type: 'ieGap', id: 'ieb2w1d319-q2', from: 6, layout: 'form', title: 'Harvey’s Homewares · Faulty Product Replacement Instruction',
              instruction: 'Complete the form. Write **NO MORE THAN ONE WORD AND/OR A NUMBER** for each answer.', rule: 'NO MORE THAN ONE WORD AND/OR A NUMBER', max: 1,
              text: 'Product Make: Gleeware\nModel: Breadmaker 3\nModel No: [[217980345]]\nShop where bought: Bluewater\nDate of purchase: 2.12.06\nCustomer surname: [[Yonge]] · Initials: J. H.\nHouse number: [[15|fifteen]]\nRoad name: [[Capercaillie]] Gardens\nPostcode: AD22 4SC\nHome phone: 08896 3412877\nDay of delivery: [[Monday]]' }
          ]
        }] },
      { id: 'script', short: 'Script and answers', minutes: 5, grouping: 'Alone',
        title: 'Check the script', goal: 'After you check your answers, open the script and find where each answer is said.',
        blocks: [
          { type: 'text', title: 'Recording script and answer key', text: 'The full recording script and the answer key are in the teacher’s key for this exercise. <a href="https://drive.google.com/file/d/1CjYPQ-kTyKx1HY0hnJa7ggf4V3tg13Q6/view" target="_blank" rel="noopener">Open the script and answer key (Google Drive)</a>' }
        ] }
    ]
  }],
  extras: [],
  glossary: []
};
