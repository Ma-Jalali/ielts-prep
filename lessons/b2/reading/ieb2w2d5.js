/* IELTS · Reading · Learn · Lesson 5 — True / False / Not Given and Yes / No / Not Given.
   One lesson per type of question, in the same order and with the same name as Reading → Practise (the teacher's booklet
   "Reading Exercises"). Built from the old lesson 4 of the teacher's training notes "Reading" (RAD TIME).
   Ids (lesson, activities, exercise blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
 "id": "ieb2w2d5",
 "week": 2,
 "day": 5,
 "sheet": true,
 "illus": "map",
 "title": "True / False / Not Given and Yes / No / Not Given",
 "duration": "About 60 minutes",
 "journey": "The question type students fear most, and the one that rewards careful reading most. Learn the difference between FALSE and NOT GIVEN, the five ways statements are built, and Yes / No / Not Given, then try an exercise.",
 "finish": {
  "title": "Next",
  "text": "Sentence completion without a box"
 },
 "learn": {
  "tags": [],
  "jump": [
   [
    "xl-decide",
    "How to decide",
    "target"
   ],
   [
    "xl-basics",
    "The basics",
    "info"
   ],
   [
    "xl-built",
    "Five patterns",
    "list"
   ],
   [
    "xl-ex",
    "Try it",
    "pen"
   ],
   [
    "xl-sum",
    "Remember",
    "ok"
   ]
  ],
  "blocks": [
   {
    "type": "key",
    "title": "The difference that matters",
    "text": "**FALSE**: the passage says the **opposite**. **NOT GIVEN**: the passage **does not say**."
   },
   {
    "type": "steps",
    "anchor": "xl-decide",
    "kicker": "How to decide",
    "title": "Three steps for every statement",
    "items": [
     {
      "t": "Find the place",
      "d": "Choose a word you can trust in the statement (a name, a number, a key noun) and find the sentence in the passage that talks about it."
     },
     {
      "t": "Compare word by word",
      "d": "Read the passage sentence from **beginning to end**. Check **every** part of the statement: who, what, when, how much, how sure."
     },
     {
      "t": "Decide",
      "d": [
       "Everything in the statement is in the passage → **TRUE**",
       "Something in the statement is the opposite of the passage → **FALSE**",
       "Something in the statement is not in the passage at all → **NOT GIVEN**"
      ]
     }
    ]
   },
   {
    "type": "tabs",
    "anchor": "xl-basics",
    "kicker": "The basics",
    "title": "Three answers, one careful reader",
    "items": [
     {
      "label": "Tips",
      "icon": "tip",
      "blocks": [
       {
        "type": "list",
        "items": [
         "The answers are **all in passage order**.",
         "Read each statement **very** carefully: every word counts.",
         "When you find the place of the answer, read the sentence in the passage **from the beginning to the end**.",
         "Do **not** use your general knowledge. Only the passage counts, even if you know the statement is true in real life."
        ]
       },
       {
        "type": "text",
        "title": "Every word counts",
        "text": "Look at how much information there is in one short statement:"
       },
       {
        "type": "table",
        "wide": true,
        "head": [
         "Statement",
         "Who?",
         "Does what?",
         "When / where?"
        ],
        "rows": [
         [
          "Emma eats pancakes on Sunday mornings.",
          "Emma",
          "eats pancakes",
          "on ==Sunday mornings=="
         ],
         [
          "Jack walks in the park in autumn.",
          "Jack",
          "walks in the park",
          "in ==autumn=="
         ]
        ]
       },
       {
        "type": "note",
        "tone": "tip",
        "text": "If the passage only says *Emma eats pancakes*, the answer to the first statement is **NOT GIVEN**: the passage says nothing about **Sunday mornings**."
       }
      ]
     },
     {
      "label": "False or Not Given?",
      "icon": "target",
      "blocks": [
       {
        "type": "cards",
        "cols": 2,
        "items": [
         {
          "icon": "no",
          "t": "FALSE / NO",
          "d": "The easiest to recognise: a word in the statement is the **opposite** of the information in the passage. The passage **contradicts** it."
         },
         {
          "icon": "eye",
          "t": "NOT GIVEN",
          "d": "Either there is **no information** about it in the passage, or there is information but it is **not enough** to say true or false."
         }
        ]
       },
       {
        "type": "image",
        "src": "assets/reading/notgiven.svg",
        "alt": "Two diagrams. Not Given: the question circle is partly outside the passage circle. True: the question circle is completely inside the passage circle.",
        "caption": "If any part of the question (**b**) is not in the passage, the answer is NOT GIVEN. If everything in the question is in the passage, the answer is TRUE, even when the passage says more."
       },
       {
        "type": "versus",
        "items": [
         {
          "q": "French people like to eat toast **in the morning**.",
          "p": "French people like to eat toast.",
          "answer": "NOT GIVEN",
          "why": "The passage says nothing about **when** they eat it. Q = ax + b, P = ax."
         },
         {
          "q": "French people like to eat toast.",
          "p": "French people like to eat toast in the morning, in the afternoon and in the evening.",
          "answer": "TRUE",
          "why": "Everything in the statement is in the passage. The passage simply says more. Q = ax, P = ax + b."
         }
        ]
       }
      ]
     },
     {
      "label": "Yes / No / Not Given",
      "icon": "chat",
      "blocks": [
       {
        "type": "cards",
        "cols": 2,
        "items": [
         {
          "icon": "book",
          "t": "TRUE / FALSE / NOT GIVEN",
          "d": "Asks about **facts**: does the statement agree with the **information** in the passage?"
         },
         {
          "icon": "chat",
          "t": "YES / NO / NOT GIVEN",
          "d": "Asks about **opinions**: does the statement agree with the **views or claims of the writer**?"
         }
        ]
       },
       {
        "type": "note",
        "tone": "info",
        "text": "The method is exactly the same. Only the words change: YES = TRUE and NO = FALSE. With YES / NO, look for opinion words: *I believe*, *surprisingly*, *unfortunately*, *it is clear that*, *I doubt*."
       }
      ]
     }
    ]
   },
   {
    "type": "folds",
    "anchor": "xl-built",
    "kicker": "How they are built",
    "title": "Five ways examiners build a statement",
    "intro": "Most statements test one of these five things. Learn to notice them and you will know where to look.",
    "items": [
     {
      "icon": "repeat",
      "title": "1 · Comparison",
      "sub": "bigger, the best, more, similar, prefer",
      "blocks": [
       {
        "type": "text",
        "text": "When a statement **compares** two or more things, find the same comparison in the passage. If there is **no** comparison, or a **different** one, the answer is NOT GIVEN. If the same comparison is there, decide between TRUE and FALSE."
       },
       {
        "type": "chips",
        "title": "Watch out for",
        "groups": [
         {
          "items": [
           "-er / more … than",
           "the -est / the most",
           "less / fewer",
           "similar",
           "identical",
           "the same",
           "different",
           "prefer",
           "rather than",
           "unlike"
          ]
         }
        ]
       },
       {
        "type": "note",
        "tone": "tip",
        "text": "Statement: *Russia is bigger than Canada.* Passage: *Russia is a bigger producer of gas than Canada.* → **NOT GIVEN**. The statement compares **size**; the passage compares **gas production**."
       },
       {
        "type": "versus",
        "items": [
         {
          "q": "Dr Smith is **the best** doctor in the area.",
          "p": "Dr Smith is a professional doctor in this area.",
          "answer": "NOT GIVEN",
          "why": "The passage does not compare Dr Smith with other doctors."
         },
         {
          "q": "Egypt is **the most popular** tourist country in Africa.",
          "p": "Egypt is one of the popular tourist countries in Africa.",
          "answer": "NOT GIVEN",
          "why": "*One of the popular* countries does not tell us whether it is **the most** popular."
         },
         {
          "q": "Egypt is one of the popular tourist countries in Africa.",
          "p": "Egypt is the most popular tourist country in Africa.",
          "answer": "TRUE",
          "why": "If it is the most popular, it is certainly one of the popular ones."
         },
         {
          "q": "We need **more** money to do this research.",
          "p": "Doing this research costs a great deal of money.",
          "answer": "NOT GIVEN",
          "why": "The research is expensive, but the passage does not say we need **more** money than we have."
         }
        ]
       }
      ]
     },
     {
      "icon": "clock",
      "title": "2 · Time",
      "sub": "already, soon, originally, always, before",
      "blocks": [
       {
        "type": "chips",
        "title": "Watch out for",
        "groups": [
         {
          "items": [
           "already",
           "soon",
           "early",
           "late",
           "recently",
           "originally",
           "used to",
           "no longer",
           "still",
           "yet",
           "permanent",
           "temporary",
           "for good (= forever)",
           "in no time (= very quickly)",
           "so far (= until now)",
           "before",
           "after",
           "always",
           "at any time"
          ]
         }
        ]
       },
       {
        "type": "versus",
        "items": [
         {
          "q": "Nylon has **already** been used in parachutes.",
          "p": "Scientists hope to use nylon in parachutes.",
          "answer": "FALSE",
          "why": "*Hope to use* = it has **not** been used yet."
         },
         {
          "q": "This system will **soon** be used in many hotels.",
          "p": "Many hotel managers would like to have this system in their hotels, but I doubt it will happen in the near future.",
          "options": [
           "YES",
           "NO",
           "NOT GIVEN"
          ],
          "answer": "NO",
          "why": "This is the writer’s view: *I doubt it will happen in the near future* = not soon."
         },
         {
          "q": "This tower **is** covered with limestone slabs.",
          "p": "This tower was **originally** covered with limestone slabs, all of which have been stolen over the years.",
          "answer": "FALSE",
          "why": "It **was** covered, but the slabs have gone."
         },
         {
          "q": "John Harris broke the record **before** Roger Anderson.",
          "p": "Roger Anderson was the first person to break the record.",
          "answer": "FALSE",
          "why": "If Roger was **first**, John cannot have been before him."
         },
         {
          "q": "John Harris broke the record **before** Roger Anderson.",
          "p": "Record breakers: John Harris 1985 · Roger Anderson 1956",
          "answer": "FALSE",
          "why": "Roger: 1956. John: 1985, almost thirty years later."
         },
         {
          "q": "You can call this centre **at any time**.",
          "p": "The centre is open from 6 am to 11 pm, and during this time you can call whenever you wish.",
          "answer": "FALSE",
          "why": "Only between 6 am and 11 pm, not at **any** time."
         },
         {
          "q": "The **ultimate goal of the founder** of the Olympic Games was to bring countries together, whatever their wars or political problems.",
          "p": "The purpose of the Olympic Games has always been to bring countries together without considering political problems.",
          "answer": "NOT GIVEN",
          "why": "The passage talks about the purpose of **the Games**, not about the goal of **the founder**."
         }
        ]
       }
      ]
     },
     {
      "icon": "hash",
      "title": "3 · Quantity",
      "sub": "all, most, half, a few, few, only, enough",
      "blocks": [
       {
        "type": "scale",
        "items": [
         {
          "v": "100%",
          "p": 100,
          "words": [
           "all",
           "every",
           "each",
           "the whole",
           "entire"
          ]
         },
         {
          "v": "60–70%",
          "p": 66,
          "words": [
           "most",
           "the majority of",
           "many",
           "much",
           "quite a few (≈ many)",
           "quite a bit of (≈ much)"
          ]
         },
         {
          "v": "50%",
          "p": 50,
          "words": [
           "half"
          ]
         },
         {
          "v": "Some",
          "p": 25,
          "words": [
           "some",
           "several",
           "a few",
           "a little"
          ],
          "note": "*A few* and *a little* are positive: = some."
         },
         {
          "v": "≈ 0",
          "p": 6,
          "words": [
           "few",
           "little",
           "hardly any"
          ],
          "note": "*Few* and *little* (without *a*) are negative: = almost none."
         },
         {
          "v": "0%",
          "p": 0,
          "words": [
           "no",
           "none",
           "not any",
           "never"
          ]
         }
        ]
       },
       {
        "type": "note",
        "tone": "warn",
        "title": "Two small words, big changes",
        "text": "**Only** means *nothing else*: *This disease can only be cured by herbal medicine*.\n\n**Enough** means *as much as is needed*: *There is enough water for the city*."
       },
       {
        "type": "versus",
        "items": [
         {
          "q": "**All** the students passed the exam.",
          "p": "**Most** of the students passed the exam.",
          "answer": "FALSE",
          "why": "*Most* means some students did **not** pass."
         },
         {
          "q": "The **whole** city was destroyed in the earthquake.",
          "p": "The earthquake destroyed **most of** the city.",
          "answer": "FALSE",
          "why": "*Most of* is not *the whole*."
         },
         {
          "q": "**Few** people visited the museum last year.",
          "p": "The museum had more than two million visitors last year.",
          "answer": "FALSE",
          "why": "*Few* = almost none, but two million is a lot."
         },
         {
          "q": "This disease can be cured **only** by herbal medicine.",
          "p": "**One of the ways** to cure this illness is herbal medicine.",
          "answer": "FALSE",
          "why": "*One of the ways* means there are other ways too."
         }
        ]
       }
      ]
     },
     {
      "icon": "signpost",
      "title": "4 · Who did it?",
      "sub": "one agent or more than one",
      "blocks": [
       {
        "type": "text",
        "text": "A statement often says that **A** did something to **B** (A → B), but the passage names someone else."
       },
       {
        "type": "cards",
        "cols": 2,
        "items": [
         {
          "icon": "no",
          "t": "Only ONE person can do it → FALSE",
          "d": "Statement: *Tom won the race.* Passage: *Sara won the race.* A race has one winner, so it cannot be Tom. (The word **only** often does the same job.)"
         },
         {
          "icon": "eye",
          "t": "MORE THAN ONE can do it → NOT GIVEN",
          "d": "Statement: *Tom loves Anna.* Passage: *Sam loves Anna.* Many people can love Anna, so we do not know about Tom."
         }
        ]
       }
      ]
     },
     {
      "icon": "star",
      "title": "5 · Certainty",
      "sub": "definitely, probably, may, might",
      "blocks": [
       {
        "type": "scale",
        "items": [
         {
          "v": "100%",
          "p": 100,
          "words": [
           "certainly",
           "definitely",
           "for sure",
           "always",
           "on all occasions",
           "must",
           "vital",
           "crucial",
           "essential"
          ]
         },
         {
          "v": "Likely",
          "p": 70,
          "words": [
           "be likely to",
           "will probably",
           "probably"
          ]
         },
         {
          "v": "Possible",
          "p": 40,
          "words": [
           "may",
           "might",
           "could",
           "possibly",
           "perhaps"
          ]
         }
        ]
       },
       {
        "type": "table",
        "wide": true,
        "head": [
         "Statement",
         "Passage",
         "Answer"
        ],
        "rows": [
         [
          "It will *definitely* happen.",
          "It *might* happen.",
          "FALSE"
         ],
         [
          "It *might* happen.",
          "It will *definitely* happen.",
          "TRUE"
         ]
        ]
       },
       {
        "type": "note",
        "tone": "warn",
        "title": "*May* has two meanings",
        "text": "*May* can mean **possibly**, or it can mean **are allowed to**:\n\n*You **may** drink water during the test.* (= you are allowed to)\n*You **may not** use your phone in the exam room.* (= you are **not** allowed to)"
       }
      ]
     }
    ]
   },
   {
    "type": "exercises",
    "anchor": "xl-ex",
    "kicker": "In class",
    "title": "Try it",
    "intro": "Read the passage and decide on each statement. The answers, with the reasons, are folded at the bottom.",
    "items": [
     {
      "id": "ieb2w2d4-e1",
      "title": "Welcome to Australia",
      "kind": "True / False / Not Given",
      "go": "Read",
      "tip": "Before you read, underline the small words that change everything: **only**, **all**, **free**, **possible**, **the most**, **if**.",
      "passage": {
       "title": "Welcome to Australia",
       "subtitle": "Information for new residents",
       "text": "### Apply for a Tax File Number\nEveryone who receives any income in Australia needs a Tax File Number. Income includes wages or a salary from a job, money earned from investments, and government payments.\n\n### Register with Medicare\nThe Australian Government helps with medical costs through a scheme called Medicare. You may be able to join Medicare and get immediate access to health services and programmes such as free care in public hospitals, help with the cost of care outside hospital, and cheaper medicines.\n\nTo register with Medicare, wait about ten working days after you arrive in Australia, and then go to a Medicare office with your passport or travel documents. If you need to see a doctor urgently, you can register with Medicare without waiting ten days.\n\nMedicare has a Welcome Kit, which has been translated into 16 languages. It explains Medicare and other government health services, and who can receive benefits and payments. You can get the booklet from Medicare offices or read it on the internet.\n\n### Open a bank account\nPeople in Australia usually keep their money in a bank, a building society or a credit union. It is a good idea to open a bank account within six weeks of your arrival, because during this time you usually need only your passport as identification. After six weeks, you will need more identification to open an account.\n\n### Register with Centrelink\nNew residents can register with the government agency Centrelink to get help with looking for work, having their overseas skills recognised and finding suitable courses. Centrelink also has an application form for Tax File Numbers and can help you send your application to the Tax Office, so that there is no delay in any payments.\n\n### Register for English classes\nEnglish courses for new arrivals are provided under the Adult Migrant English Program. As a new resident, you may be entitled to up to 510 hours of free English lessons.\n\n### Get a driver’s licence\nIf you hold a permanent resident visa and a current driver’s licence from another country, in English or with an official translation, you may drive for your first three months in Australia. After that, you will need an Australian licence. To get one, you usually have to pass a knowledge test, a practical test and an eyesight test. Licences from some countries do not need a practical test."
      },
      "blocks": [
       {
        "type": "ieTFNG",
        "id": "ieb2w2d4-e1-q1",
        "from": 1,
        "kind": "tfng",
        "instruction": "Do the following statements agree with the information given in the reading passage? Choose **TRUE**, **FALSE** or **NOT GIVEN**.",
        "items": [
         {
          "q": "A Tax File Number is **only** needed by people who are working.",
          "answer": "FALSE",
          "why": "Income also includes investments and government payments."
         },
         {
          "q": "**All** healthcare services are free for people registered with Medicare.",
          "answer": "FALSE",
          "why": "Only some are free (public hospital care); for others Medicare only helps with the cost."
         },
         {
          "q": "In certain cases, it is possible to register with Medicare less than ten days after arriving in Australia.",
          "answer": "TRUE",
          "why": "If you need to see a doctor urgently, you can register without waiting ten days."
         },
         {
          "q": "There is a charge for Welcome Kit booklets from Medicare offices.",
          "answer": "NOT GIVEN",
          "why": "The passage says where to get the booklet, but not whether it costs anything."
         },
         {
          "q": "Banks are **the most** commonly used type of financial institution.",
          "answer": "NOT GIVEN",
          "why": "Banks, building societies and credit unions are listed, but not compared."
         },
         {
          "q": "**If** you open a bank account in your first six weeks in Australia, you will probably need fewer documents than later on.",
          "answer": "TRUE",
          "why": "In the first six weeks you usually need only your passport; after that, more identification."
         },
         {
          "q": "Centrelink can help you to get your qualifications accepted officially.",
          "answer": "TRUE",
          "why": "*Having their overseas skills recognised* = getting qualifications accepted."
         },
         {
          "q": "Centrelink can lend money to new arrivals if necessary.",
          "answer": "NOT GIVEN",
          "why": "Payments are mentioned, but nothing about lending money."
         },
         {
          "q": "English lessons are free for **all** new residents.",
          "answer": "FALSE",
          "why": "New residents **may be** entitled to free lessons, so not all of them are."
         },
         {
          "q": "Whether you need to take an Australian practical driving test depends on which country you come from.",
          "answer": "TRUE",
          "why": "Licences from some countries do not need a practical test."
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "type": "note",
    "tone": "info",
    "title": "More practice",
    "text": "When you are ready, go to **Practise → True / False / Not Given and Yes / No / Not Given** for more exercises of this type: [open the exercises](#/skill/2/practise/tfng)."
   },
   {
    "type": "recap",
    "anchor": "xl-sum",
    "title": "Remember",
    "items": [
     "The answers are **in passage order**.",
     "Check **every** word of the statement: who, what, when, how much, how sure.",
     "**FALSE** = the passage says the opposite. **NOT GIVEN** = the passage does not say.",
     "Watch the five patterns: **comparison**, **time**, **quantity**, **who did it**, **certainty**.",
     "Never use your **general knowledge**: only the passage counts."
    ]
   },
   {
    "type": "check",
    "kicker": "Check yourself",
    "title": "True or false?",
    "intro": "Tap True or False to see the answer.",
    "items": [
     {
      "s": "If you know from real life that a statement is true, you should answer TRUE.",
      "answer": false,
      "why": "Only the passage counts."
     },
     {
      "s": "NOT GIVEN can mean that there is some information, but not enough.",
      "answer": true,
      "why": "That is the harder kind of NOT GIVEN: Q = ax + b, P = ax."
     },
     {
      "s": "TRUE / FALSE / NOT GIVEN answers are in passage order.",
      "answer": true,
      "why": "So the answer to Question 3 comes after the answer to Question 2."
     },
     {
      "s": "*Few people came* and *a few people came* mean the same.",
      "answer": false,
      "why": "*Few* = almost nobody; *a few* = some."
     }
    ]
   }
  ]
 },
 "sections": [
  {
   "id": "learn",
   "number": "05",
   "minutes": 60,
   "tone": "blue",
   "art": "reading",
   "title": "True / False / Not Given and Yes / No / Not Given",
   "subtitle": "Question type 3",
   "outcome": "Tell FALSE from NOT GIVEN, recognise the five ways statements are built, and answer Yes / No / Not Given too.",
   "activities": [
    {
     "id": "tips",
     "short": "Tips",
     "minutes": 35,
     "grouping": "Alone",
     "title": "Learn how the statements work",
     "goal": "Read the basics and the five ways statements are built.",
     "blocks": [
      {
       "type": "text",
       "title": "Tips",
       "text": "The basics and the five ways statements are built."
      }
     ]
    },
    {
     "id": "practise",
     "short": "Exercise",
     "minutes": 25,
     "grouping": "Alone",
     "title": "Do the exercise",
     "goal": "Do the exercise and check your answers.",
     "blocks": [
      {
       "type": "text",
       "title": "Exercise",
       "text": "Welcome to Australia."
      }
     ]
    }
   ]
  }
 ],
 "extras": [],
 "glossary": []
};
