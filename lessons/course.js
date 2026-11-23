/* IELTS PREP · course map — the skills and their lessons. The app itself is in js/, css/, assets/.
   THE COURSE IS ORGANISED BY SKILL, NOT BY WEEK. Students work through each skill's lessons in order:
     the four skills  1 Listening · 2 Reading · 3 Writing · 4 Speaking
     two sub-skills   5 Grammar · 6 Vocabulary
   The data keeps the app's weeks/days shape: each entry in `weeks` is a SKILL and each of its `days` is a LESSON
   (`day` = the lesson's number in that skill). `units` below makes the app say "Reading · Lesson 3", not "Week 2, Day 3".
   LEVEL: this course is B2 → Band 6.5–7. Lesson ids carry the level: <idPrefix>w<skill>d<lesson>, e.g. ieb2w2d3 =
   B2 · Reading · Lesson 3. A later level gets its own prefix (ieb1…, iec1…) so ids never clash.
   ADD A LESSON — two ways
   A. In the browser (no code): open  #/studio  (side panel → Studio), choose "New page", pick the skill and the lesson
      number, build it with the blocks, then "Download lesson file" and put it in the skill's folder (below), or ask
      Claude to publish your drafts.
   B. By hand: copy lessons/_template.js to <folder>/<id>.js and write the content.
   Then, below, change the lesson's status from 'soon' to 'ready' and add scripts: ['<folder>/<id>.js'].
   Raise the version (index.html ?v= and js/config.js) and run  node tools/build-sw.js .
   LESSON IDS START WITH "ie". The Supabase project is shared with DEC15/DEC10 and the id is the key of every
   student's saved work and class wall, so an IELTS id must never be the same as another course's id.
   Never change an id after students start — to reorder lessons once students have started, add new ids rather than
   renumbering old ones. */
window.DEC15_COURSE = {
  id: 'ielts',          // keeps this class (class list, chat, announcements, boards) apart from the other courses — never change
  idPrefix: 'ieb2',     // every lesson id starts with this: 'ie' + the level (b2)
  units: { unit: 'Skill', lesson: 'Lesson' },   // the course is by skill: "Reading · Lesson 3"
  level: { id: 'b2', title: 'B2 → Band 6.5–7' },
  root: '',             // lessons and pictures live at the top of the site
  code: 'IELTS',
  title: 'IELTS Preparation',
  topic: 'Academic IELTS · B2 → Band 6.5–7',
  intro: 'Four skills and two sub-skills. Open a skill and work through its lessons in order.',
  heroImage: 'assets/ui/library/hero.svg',
  heroAlt: '',
  sideCard: { name: 'IELTS Preparation', note: 'Academic · Band 6.5–7' },
  // Settings (gear at the foot of the side panel) → Side panel colour. The first one is the default.
  sideColours: [['light', 'Light', '#ffffff'], ['charcoal', 'Charcoal', '#424242'], ['black', 'Black', '#000000'], ['navy', 'Navy', '#1a355e'], ['eucalypt', 'Eucalypt', '#4f7d74']],
  defaultLesson: 'ieblocks',           // opens when no lesson is chosen yet; the first ready lesson is used instead once there is one
  galleryLesson: 'ieblocks',           // Studio links to it
  scripts: ['lessons/guide.js'],       // loaded before every lesson: the Course calendar and Assessments pages
  downloads: [],                       // side panel → Downloads (see the DEC10 course for the format)
  printables: [],                      // side panel → Photocopiables (teachers only)
  /* Pages outside the skills: not on the course map, opened by a link (the Block gallery is linked from Studio). */
  pages: [
    { id: 'ieblocks', status: 'ready', title: 'Block gallery', where: 'Studio', art: 'research',
      parts: ['IELTS', 'Teach', 'Practise', 'Write', 'Listen & read', 'Layout', 'Class games'],
      stages: ['ielts', 'teach', 'practise', 'write', 'media', 'layout', 'games'], tones: ['teal', 'amber', 'teal', 'clay', 'blue', 'plum', 'green'],
      scripts: ['lessons/studio/ieblocks.js'] }
  ],
  /* THE OUTLINE. Each skill: n (its number; never change), theme (name), short, tag (one line under the name),
     tone, folder (where its lesson files go), summary. Each lesson: id, day (its number in the skill), status
     ('soon' = planned, 'ready' = published), title, sub (the part of the test), art, parts (its focus, shown as chips). */
  map: [
    { n: 1, label: "Listening", sub: '10 lessons' },
    { n: 2, label: "Reading", sub: '10 lessons' },
    { n: 3, label: "Writing", sub: '12 lessons' },
    { n: 4, label: "Speaking", sub: '8 lessons' },
    { n: 5, label: "Grammar", sub: '10 lessons' },
    { n: 6, label: "Vocabulary", sub: '10 lessons' }
  ],
  weeks: [
    {
      n: 1, theme: "Listening", short: "Listening", tag: "4 sections · 40 questions", tone: 'teal', folder: 'lessons/b2/listening',
      summary: "From everyday conversations to academic lectures: predict, follow and catch the answer the first time.",
      days: [
        { id: 'ieb2w1d1', day: 1, status: 'soon', title: "The Listening test", sub: "Format and answer sheet", art: 'listening', parts: ["4 sections","Timing","Transfer rules"] },
        { id: 'ieb2w1d2', day: 2, status: 'soon', title: "Predicting answers", sub: "Section 1", art: 'listening', parts: ["Form completion","Word limits","Paraphrase"] },
        { id: 'ieb2w1d3', day: 3, status: 'soon', title: "Numbers, names and spelling", sub: "Section 1", art: 'listening', parts: ["Dates and prices","Spelling names","Addresses"] },
        { id: 'ieb2w1d4', day: 4, status: 'soon', title: "Maps and plans", sub: "Section 2", art: 'listening', parts: ["Directions","Location language","Labelling"] },
        { id: 'ieb2w1d5', day: 5, status: 'soon', title: "Multiple choice", sub: "Section 2", art: 'listening', parts: ["Distractors","Changed minds","Paraphrased options"] },
        { id: 'ieb2w1d6', day: 6, status: 'soon', title: "Matching and classifying", sub: "Section 3", art: 'listening', parts: ["Speakers’ views","Matching lists"] },
        { id: 'ieb2w1d7', day: 7, status: 'soon', title: "Academic discussions", sub: "Section 3", art: 'listening', parts: ["Agreeing and disagreeing","Who says what"] },
        { id: 'ieb2w1d8', day: 8, status: 'soon', title: "Lectures and signposting", sub: "Section 4", art: 'listening', parts: ["Lecture structure","Signposts","Note-taking"] },
        { id: 'ieb2w1d9', day: 9, status: 'soon', title: "Notes, tables and flow-charts", sub: "Section 4", art: 'listening', parts: ["Summary completion","Flow-charts","Word limits"] },
        { id: 'ieb2w1d10', day: 10, status: 'soon', title: "Full test strategy", sub: "All sections", art: 'listening', parts: ["Timed practice","Checking","Error log"] }
      ]
    },
    {
      n: 2, theme: "Reading", short: "Reading", tag: "3 passages · 60 minutes", tone: 'blue', folder: 'lessons/b2/reading',
      summary: "Read long academic texts quickly and accurately, and handle every question type with a clear method.",
      days: [
        { id: 'ieb2w2d1', day: 1, status: 'soon', title: "The Academic Reading test", sub: "Format", art: 'reading', parts: ["3 passages","Question types","Time plan"] },
        { id: 'ieb2w2d2', day: 2, status: 'soon', title: "Skimming, scanning and paraphrase", sub: "Core skills", art: 'reading', parts: ["Skimming","Scanning","Synonyms"] },
        { id: 'ieb2w2d3', day: 3, status: 'soon', title: "True / False / Not Given", sub: "Information", art: 'reading', parts: ["False vs Not Given","Qualifiers"] },
        { id: 'ieb2w2d4', day: 4, status: 'soon', title: "Yes / No / Not Given", sub: "Writer’s views", art: 'reading', parts: ["Claims","Opinion language"] },
        { id: 'ieb2w2d5', day: 5, status: 'soon', title: "Matching headings", sub: "Paragraphs", art: 'reading', parts: ["Main idea","Topic sentences","Distractors"] },
        { id: 'ieb2w2d6', day: 6, status: 'soon', title: "Matching information and features", sub: "Paragraphs", art: 'reading', parts: ["Locating details","People and ideas"] },
        { id: 'ieb2w2d7', day: 7, status: 'soon', title: "Completion questions", sub: "Sentences and summaries", art: 'reading', parts: ["Summary","Notes and tables","Word limits"] },
        { id: 'ieb2w2d8', day: 8, status: 'soon', title: "Multiple choice and short answers", sub: "Detail and gist", art: 'reading', parts: ["Eliminating options","Short answers"] },
        { id: 'ieb2w2d9', day: 9, status: 'soon', title: "Complex texts", sub: "Passage 3", art: 'reading', parts: ["Reference words","Inference","Argument"] },
        { id: 'ieb2w2d10', day: 10, status: 'soon', title: "Full test strategy", sub: "All passages", art: 'reading', parts: ["20 minutes a passage","Timed practice","Error log"] }
      ]
    },
    {
      n: 3, theme: "Writing", short: "Writing", tag: "Task 1 · Task 2", tone: 'clay', folder: 'lessons/b2/writing',
      summary: "Plan and write a clear Task 1 report and a well-argued Task 2 essay, and edit them to band 7.",
      days: [
        { id: 'ieb2w3d1', day: 1, status: 'soon', title: "The Writing test", sub: "Tasks and criteria", art: 'writing', parts: ["Task 1 and Task 2","Band descriptors","Timing"] },
        { id: 'ieb2w3d2', day: 2, status: 'soon', title: "Line graphs", sub: "Task 1", art: 'writing', parts: ["Overview","Trends","Selecting data"] },
        { id: 'ieb2w3d3', day: 3, status: 'soon', title: "Bar charts and tables", sub: "Task 1", art: 'writing', parts: ["Comparisons","Grouping data"] },
        { id: 'ieb2w3d4', day: 4, status: 'soon', title: "Pie charts and mixed charts", sub: "Task 1", art: 'writing', parts: ["Proportions","Two charts together"] },
        { id: 'ieb2w3d5', day: 5, status: 'soon', title: "Processes and maps", sub: "Task 1", art: 'writing', parts: ["Sequencing","Passive","Changes over time"] },
        { id: 'ieb2w3d6', day: 6, status: 'soon', title: "Understanding Task 2 questions", sub: "Task 2", art: 'writing', parts: ["Question types","Key words","Task response"] },
        { id: 'ieb2w3d7', day: 7, status: 'soon', title: "Planning an essay", sub: "Task 2", art: 'writing', parts: ["Position","Main ideas","Paragraph plan"] },
        { id: 'ieb2w3d8', day: 8, status: 'soon', title: "Opinion essays", sub: "Task 2", art: 'writing', parts: ["Agree or disagree","Clear position"] },
        { id: 'ieb2w3d9', day: 9, status: 'soon', title: "Discussion essays", sub: "Task 2", art: 'writing', parts: ["Both views","Your opinion"] },
        { id: 'ieb2w3d10', day: 10, status: 'soon', title: "Problem, cause and solution essays", sub: "Task 2", art: 'writing', parts: ["Causes","Solutions","Two-part questions"] },
        { id: 'ieb2w3d11', day: 11, status: 'soon', title: "Advantages and disadvantages", sub: "Task 2", art: 'writing', parts: ["Weighing up","Outweigh questions"] },
        { id: 'ieb2w3d12', day: 12, status: 'soon', title: "Editing to band 7", sub: "Task 1 and Task 2", art: 'writing', parts: ["Coherence","Cohesion","Checking errors"] }
      ]
    },
    {
      n: 4, theme: "Speaking", short: "Speaking", tag: "Parts 1, 2 and 3", tone: 'plum', folder: 'lessons/b2/speaking',
      summary: "Speak fluently and at length about familiar and abstract topics, with natural pronunciation.",
      days: [
        { id: 'ieb2w4d1', day: 1, status: 'soon', title: "The Speaking test", sub: "Format and criteria", art: 'discussion', parts: ["3 parts","Four criteria","What examiners hear"] },
        { id: 'ieb2w4d2', day: 2, status: 'soon', title: "Extending your answers", sub: "Part 1", art: 'discussion', parts: ["Reasons","Examples","Natural length"] },
        { id: 'ieb2w4d3', day: 3, status: 'soon', title: "Familiar topics", sub: "Part 1", art: 'discussion', parts: ["Home, work, study","Paraphrasing the question"] },
        { id: 'ieb2w4d4', day: 4, status: 'soon', title: "The cue card", sub: "Part 2", art: 'discussion', parts: ["1-minute notes","Covering the points"] },
        { id: 'ieb2w4d5', day: 5, status: 'soon', title: "Telling a story for two minutes", sub: "Part 2", art: 'discussion', parts: ["Narrative tenses","Keeping going"] },
        { id: 'ieb2w4d6', day: 6, status: 'soon', title: "Giving and justifying opinions", sub: "Part 3", art: 'discussion', parts: ["Opinions","Reasons and examples"] },
        { id: 'ieb2w4d7', day: 7, status: 'soon', title: "Speculating and comparing", sub: "Part 3", art: 'discussion', parts: ["Abstract topics","Past and future","Hedging"] },
        { id: 'ieb2w4d8', day: 8, status: 'soon', title: "Pronunciation and fluency", sub: "All parts", art: 'discussion', parts: ["Word stress","Chunking","Intonation"] }
      ]
    },
    {
      n: 5, theme: "Grammar", short: "Grammar", tag: "Range and accuracy", tone: 'amber', folder: 'lessons/b2/grammar',
      summary: "The grammar band 7 needs: a wide range of structures, used accurately in writing and speaking.",
      days: [
        { id: 'ieb2w5d1', day: 1, status: 'soon', title: "Sentence structure", sub: "Accuracy", art: 'critical', parts: ["Clauses","Run-ons","Fragments"] },
        { id: 'ieb2w5d2', day: 2, status: 'soon', title: "Complex sentences", sub: "Range", art: 'critical', parts: ["Subordination","Linking clauses"] },
        { id: 'ieb2w5d3', day: 3, status: 'soon', title: "Relative clauses", sub: "Range", art: 'critical', parts: ["Defining","Non-defining","Reduced"] },
        { id: 'ieb2w5d4', day: 4, status: 'soon', title: "Tenses for data and change", sub: "Writing Task 1", art: 'critical', parts: ["Past and present","Perfect tenses"] },
        { id: 'ieb2w5d5', day: 5, status: 'soon', title: "Comparing", sub: "Writing Task 1", art: 'critical', parts: ["Comparatives","Superlatives","Proportions"] },
        { id: 'ieb2w5d6', day: 6, status: 'soon', title: "The passive", sub: "Processes and academic style", art: 'critical', parts: ["Forms","When to use it"] },
        { id: 'ieb2w5d7', day: 7, status: 'soon', title: "Conditionals and hypotheses", sub: "Task 2 and Part 3", art: 'critical', parts: ["Real and unreal","Mixed"] },
        { id: 'ieb2w5d8', day: 8, status: 'soon', title: "Modals for hedging and speculation", sub: "Task 2 and Part 3", art: 'critical', parts: ["Certainty","Possibility"] },
        { id: 'ieb2w5d9', day: 9, status: 'soon', title: "Noun phrases and nominalisation", sub: "Academic style", art: 'critical', parts: ["Noun phrases","Nominalisation"] },
        { id: 'ieb2w5d10', day: 10, status: 'soon', title: "Common errors", sub: "Accuracy", art: 'critical', parts: ["Articles","Countability","Agreement"] }
      ]
    },
    {
      n: 6, theme: "Vocabulary", short: "Vocabulary", tag: "Lexical resource", tone: 'green', folder: 'lessons/b2/vocabulary',
      summary: "Paraphrase with confidence and use precise, natural vocabulary on the topics IELTS asks about.",
      days: [
        { id: 'ieb2w6d1', day: 1, status: 'soon', title: "Lexical resource for band 7", sub: "What examiners look for", art: 'research', parts: ["Range","Precision","Less common words"] },
        { id: 'ieb2w6d2', day: 2, status: 'soon', title: "Paraphrasing", sub: "All skills", art: 'research', parts: ["Synonyms","Word class","Sentence changes"] },
        { id: 'ieb2w6d3', day: 3, status: 'soon', title: "Collocation", sub: "Natural English", art: 'research', parts: ["Verb + noun","Adjective + noun"] },
        { id: 'ieb2w6d4', day: 4, status: 'soon', title: "Word formation", sub: "Accuracy", art: 'research', parts: ["Word families","Prefixes and suffixes"] },
        { id: 'ieb2w6d5', day: 5, status: 'soon', title: "Trends, numbers and data", sub: "Writing Task 1", art: 'research', parts: ["Verbs and nouns of change","Approximation"] },
        { id: 'ieb2w6d6', day: 6, status: 'soon', title: "Linking and cohesion", sub: "Writing and Speaking", art: 'research', parts: ["Linkers","Reference","Overuse"] },
        { id: 'ieb2w6d7', day: 7, status: 'soon', title: "Education and work", sub: "Topic vocabulary", art: 'research', parts: ["Study","Careers"] },
        { id: 'ieb2w6d8', day: 8, status: 'soon', title: "Environment and technology", sub: "Topic vocabulary", art: 'research', parts: ["Climate","Innovation"] },
        { id: 'ieb2w6d9', day: 9, status: 'soon', title: "Health, society and globalisation", sub: "Topic vocabulary", art: 'research', parts: ["Health","Cities","Culture"] },
        { id: 'ieb2w6d10', day: 10, status: 'soon', title: "Register and idiomatic language", sub: "Style", art: 'research', parts: ["Academic vs informal","Natural phrases"] }
      ]
    }
  ]
};
