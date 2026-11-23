/* Studio · the block catalogue. Every block type the app can draw, with a short description and a starter template.
   Studio's "Add block" menu and the Block gallery lesson (lessons/week1/iew1d2.js) both read this list.
   A template is a function so every new block gets fresh ids: uid('quiz') → 'quiz-k3f9'.
   IELTS presets at the top are ordinary blocks set up for a test question type. */
(() => {
  const uid = p => `${p}-${Math.random().toString(36).slice(2, 6)}`;
  const T = '…';   // placeholder text the editor shows as "write here"
  const C = window.STUDIO_BLOCKS = [];
  const add = (cat, type, name, desc, make) => C.push({ cat, type, name, desc, make });

  /* ── IELTS question types (presets) ── */
  add('IELTS', 'grid', 'True / False / Not Given', 'Reading: a statement per row, one choice each.', () => ({ type: 'grid', id: uid('tfng'), title: 'Do the statements agree with the information in the passage?', columns: ['Answer'], options: ['True', 'False', 'Not Given'], rows: ['Statement 1', 'Statement 2', 'Statement 3'], answers: [['True'], ['False'], ['Not Given']] }));
  add('IELTS', 'grid', 'Yes / No / Not Given', 'Reading: the writer’s views or claims.', () => ({ type: 'grid', id: uid('ynng'), title: 'Do the statements agree with the claims of the writer?', columns: ['Answer'], options: ['Yes', 'No', 'Not Given'], rows: ['Statement 1', 'Statement 2', 'Statement 3'], answers: [['Yes'], ['No'], ['Not Given']] }));
  add('IELTS', 'limit', 'Sentence / note completion', 'Listening & Reading: short answers with a word limit.', () => ({ type: 'limit', id: uid('compl'), title: 'Complete the notes', rule: 'NO MORE THAN TWO WORDS AND/OR A NUMBER', max: 2, items: [{ q: 'Question 1 …', accept: ['answer'], model: 'answer' }, { q: 'Question 2 …', accept: ['answer'], model: 'answer' }] }));
  add('IELTS', 'cloze', 'Gap-fill with options', 'Summary completion from a list of words.', () => ({ type: 'cloze', id: uid('gap'), title: 'Complete the summary', options: [['option A', 'option B'], ['option C', 'option D']], text: 'Write the summary here. The first gap {{1}} and the second gap {{2}}.', answers: ['option A', 'option D'] }));
  add('IELTS', 'quiz', 'Multiple choice', 'Choose A, B, C or D.', () => ({ type: 'quiz', id: uid('mcq'), title: 'Choose the correct letter, A, B, C or D.', items: [{ q: 'Question 1 …', options: ['Option A', 'Option B', 'Option C', 'Option D'], answer: 0, why: 'Why this answer is right.' }] }));
  add('IELTS', 'match', 'Matching (headings, features, information)', 'Tap a card on the left, then its partner.', () => ({ type: 'match', id: uid('match'), title: 'Choose the correct heading for each paragraph', left: ['Paragraph A', 'Paragraph B', 'Paragraph C'], right: ['Heading for A', 'Heading for B', 'Heading for C'] }));
  add('IELTS', 'passage', 'Reading passage', 'A text students can highlight.', () => ({ type: 'passage', id: uid('passage'), title: 'Reading passage', text: 'Paste the passage here.' }));
  add('IELTS', 'listening', 'Listening recording', 'A YouTube video or an audio file, with transcripts.', () => ({ type: 'listening', title: 'Section 1', source: '', videoId: '', audio: '', start: 0, clip: '', transcripts: [] }));
  add('IELTS', 'fields', 'Writing task box', 'Task 1 or Task 2 answer with a word count.', () => ({ type: 'fields', title: 'Your answer', fields: [{ id: uid('essay'), label: 'Write at least 250 words.', placeholder: 'Start writing here…', rows: 14 }] }));
  add('IELTS', 'cards', 'Speaking Part 2 cue card', 'The topic and the four prompts.', () => ({ type: 'cards', title: 'Describe …', items: [{ label: 'You should say:', text: 'what …' }, { text: 'when …' }, { text: 'where …' }, { label: 'and explain', text: 'why …' }] }));
  add('IELTS', 'talk', 'Speaking Part 1 / Part 3 questions', 'Discussion prompts.', () => ({ type: 'talk', title: 'Answer the questions', prompts: ['Question 1 …', 'Question 2 …', 'Question 3 …'] }));
  add('IELTS', 'form', 'Band descriptor self-check', 'Rate your answer against the criteria.', () => ({ type: 'form', id: uid('bands'), title: 'Check your answer', scale: ['Yes', 'Mostly', 'Needs work'], cols: ['Comments'], sections: [{ label: 'Task response', items: ['I answered every part of the question.'] }, { label: 'Coherence and cohesion', items: ['Each paragraph has one main idea.'] }, { label: 'Lexical resource', items: ['I used precise words for the topic.'] }, { label: 'Grammatical range and accuracy', items: ['I used a mix of simple and complex sentences.'] }] }));

  /* ── Teach ── */
  add('Teach', 'key', 'Key point', 'The one idea to learn — the most prominent element.', () => ({ type: 'key', title: 'The key idea', points: ['Point one', 'Point two'] }));
  add('Teach', 'steps', 'What to do', 'Numbered steps with Alone / Pair / Group / Class badges.', () => ({ type: 'steps', items: [{ who: 'alone', text: 'First step.' }, { who: 'pair', text: 'Second step.' }] }));
  add('Teach', 'do', 'One instruction', 'A single numbered instruction right above its task.', () => ({ type: 'do', n: 1, who: 'pair', text: 'Do this now.' }));
  add('Teach', 'language', 'Language bank', 'Useful phrases grouped by function.', () => ({ type: 'language', title: 'Useful language', groups: [{ label: 'Giving an opinion', phrases: ['In my view, …', 'I would argue that …'] }, { label: 'Adding a point', phrases: ['In addition, …', 'Moreover, …'] }] }));
  add('Teach', 'model', 'Model', 'A worked example (text, rows or a list).', () => ({ type: 'model', title: 'Model answer', text: 'Write the model here.', note: '' }));
  add('Teach', 'tip', 'Tip', 'A short helpful note.', () => ({ type: 'tip', text: 'A useful tip.' }));
  add('Teach', 'sticky', 'Sticky note', 'A pinned note for one key idea.', () => ({ type: 'sticky', title: 'Remember', text: 'One key idea.' }));
  add('Teach', 'text', 'Plain text', 'A plain full-width document, no label.', () => ({ type: 'text', title: '', text: 'Write here.' }));
  add('Teach', 'rule', 'Rule card', 'A grammar rule: explanation, form, examples, a quick check.', () => ({ type: 'rule', n: 1, title: 'The rule', explain: 'Explain the rule.', form: 'subject + verb …', pairs: [['not like this', 'like this']], check: { q: 'A quick question?', a: 'The answer.' } }));
  add('Teach', 'group', 'Section heading', 'A large unnumbered heading above a set of blocks.', () => ({ type: 'group', title: 'Section heading', label: '', goal: '' }));
  add('Teach', 'part', 'Part heading', 'Part 1, Part 2 … inside one activity.', () => ({ type: 'part', n: 1, title: 'Part title', goal: '' }));
  add('Teach', 'figure', 'Picture', 'An image or diagram with a caption.', () => ({ type: 'figure', src: 'assets/art/stage-reading.svg', alt: 'Describe the picture.', caption: 'Caption', size: 'small' }));
  add('Teach', 'hotspot', 'Picture with hotspots', 'Numbered markers that open a pop-up.', () => ({ type: 'hotspot', src: 'assets/art/stage-research.svg', alt: 'Describe the picture.', title: 'Explore the picture', spots: [{ x: 30, y: 30, title: 'Marker 1', text: 'What this part shows.' }, { x: 70, y: 60, title: 'Marker 2', text: 'What this part shows.' }] }));
  add('Teach', 'pairs', 'Before → after', 'Weak vs better versions with [[changed words]] highlighted.', () => ({ type: 'pairs', items: [{ from: 'A weak sentence with [[a problem]].', to: 'A better sentence with [[the fix]].', tag: 'What changed', note: '' }] }));
  add('Teach', 'chat', 'Dialogue', 'A conversation as chat bubbles.', () => ({ type: 'chat', title: 'Conversation', right: 'B', lines: [['A', 'Hello, …'], ['B', 'Hi, …']] }));
  add('Teach', 'teacher', 'Teacher note', 'Only in Teacher view; the text lives in Supabase (teacher_notes).', () => ({ type: 'teacher', ref: uid('t') }));

  /* ── Practise ── */
  add('Practise', 'quiz', 'Quiz', 'Questions with options, an answer and a reason.', () => ({ type: 'quiz', id: uid('quiz'), title: 'Check your understanding', items: [{ q: 'Question?', options: ['Option A', 'Option B', 'Option C'], answer: 0, why: 'Why.' }] }));
  add('Practise', 'choose', 'Choose one', 'Students pick one option (saved).', () => ({ type: 'choose', id: uid('choose'), title: 'Choose one', options: ['Option A', 'Option B', 'Option C'] }));
  add('Practise', 'grid', 'Choice table', 'A table of drop-down choices.', () => ({ type: 'grid', id: uid('grid'), title: 'Choose for each row', rows: ['Row 1', 'Row 2'], columns: ['Column'], options: ['Yes', 'No'], answers: [['Yes'], ['No']] }));
  add('Practise', 'order', 'Put in order', 'Ranking or sequencing (items in the correct order).', () => ({ type: 'order', id: uid('order'), title: 'Put these in order', items: ['First', 'Second', 'Third', 'Fourth'], why: '' }));
  add('Practise', 'sort', 'Sort into boxes', 'Drag cards into categories.', () => ({ type: 'sort', id: uid('sort'), title: 'Sort the cards', buckets: [{ label: 'Group A' }, { label: 'Group B' }], items: [{ text: 'Card 1', answer: 0 }, { text: 'Card 2', answer: 1 }, { text: 'Card 3', answer: 0 }] }));
  add('Practise', 'match', 'Match', 'Tap-to-pair (right[i] goes with left[i]).', () => ({ type: 'match', id: uid('match'), title: 'Match', left: ['Left 1', 'Left 2', 'Left 3'], right: ['Right 1', 'Right 2', 'Right 3'] }));
  add('Practise', 'spot', 'Spot the phrases', 'Tap phrases that do a job; [[*right ones]] are marked.', () => ({ type: 'spot', id: uid('spot'), title: 'Find the linking words', label: 'Linking words', paras: ['This is a sentence. [[*However]], this one contrasts. [[The]] word is not a linker.'] }));
  add('Practise', 'cloze', 'Gap fill', 'Drop-down gaps in a text: {{1}}, {{2}} …', () => ({ type: 'cloze', id: uid('cloze'), title: 'Complete the text', options: [['is', 'are']], text: 'The results {{1}} clear.', answers: ['are'] }));
  add('Practise', 'limit', 'Short answers (word limit)', 'Live word counter; over the limit scores zero.', () => ({ type: 'limit', id: uid('limit'), title: 'Answer the questions', rule: 'NO MORE THAN THREE WORDS', max: 3, items: [{ q: 'Question?', accept: ['answer'], model: 'answer' }] }));
  add('Practise', 'bet', 'Confidence bet', 'Multiple choice with a coin bet.', () => ({ type: 'bet', id: uid('bet'), title: 'How sure are you?', coins: 10, items: [{ q: 'Question?', options: ['A', 'B', 'C'], answer: 0, why: '' }] }));
  add('Practise', 'rewrite', 'Rewrite the sentence', 'Type the corrected sentence; accepted answers.', () => ({ type: 'rewrite', id: uid('rewrite'), title: 'Correct the sentences', items: [{ q: 'The sentence with a mistake.', accept: ['The corrected sentence.'], model: 'The corrected sentence.', why: '' }] }));
  add('Practise', 'para', 'Paraphrase', 'A copy meter shows how much of the original is reused.', () => ({ type: 'para', id: uid('para'), title: 'Paraphrase the sentence', items: [{ text: 'The original sentence.', model: 'A model paraphrase.' }] }));
  add('Practise', 'squeeze', 'Notes under a limit', 'Turn a sentence into short notes.', () => ({ type: 'squeeze', id: uid('squeeze'), title: 'Make notes', items: [{ text: 'A long sentence to turn into notes.', max: 40, model: 'short notes' }] }));
  add('Practise', 'outline', 'Build an outline', 'Indent notes into levels.', () => ({ type: 'outline', id: uid('outline'), title: 'Build the outline', items: [[0, 'Main idea'], [1, 'Supporting point'], [2, 'Example']] }));
  add('Practise', 'scale', 'Opinion line', 'Place a statement on a line.', () => ({ type: 'scale', id: uid('scale'), title: 'Where do you stand?', statement: 'A statement.', ends: ['Strongly disagree', 'Strongly agree'] }));
  add('Practise', 'flash', 'Memory flash', 'A text appears for a few seconds; type it from memory.', () => ({ type: 'flash', id: uid('flash'), title: 'Remember the sentence', text: 'A sentence to remember.', seconds: 5 }));
  add('Practise', 'flip', 'Flip cards', 'Cards that turn over.', () => ({ type: 'flip', title: 'Flip the cards', items: [{ front: 'Front 1', back: 'Back 1' }, { front: 'Front 2', back: 'Back 2' }] }));
  add('Practise', 'detect', 'Checked writing', 'Writing with automatic checks for key words.', () => ({ type: 'detect', id: uid('detect'), title: 'Write your answer', checks: [{ label: 'Uses a linking word', any: ['however', 'therefore'] }], items: [{ rows: 6, model: 'A model answer.' }] }));

  /* ── Write ── */
  add('Write', 'fields', 'Writing boxes', 'Labelled boxes students type into.', () => ({ type: 'fields', title: '', fields: [{ id: uid('f'), label: 'Your answer', placeholder: 'Write here…', rows: 3 }] }));
  add('Write', 'table', 'Table to fill', 'Columns with rows students fill in.', () => ({ type: 'table', id: uid('table'), title: 'Complete the table', columns: ['Column 1', 'Column 2'], rows: 3 }));
  add('Write', 'checklist', 'Checklist', 'Tick boxes (saved).', () => ({ type: 'checklist', id: uid('check'), title: 'Before you finish', items: ['I checked …', 'I counted my words.'] }));
  add('Write', 'form', 'Feedback form', 'Rate items (Yes · Mostly · Needs work) with comments.', () => ({ type: 'form', id: uid('form'), title: 'Peer feedback', scale: ['Yes', 'Mostly', 'Needs work'], cols: ['Comments'], sections: [{ label: 'Content', items: ['The answer is clear.'] }] }));
  add('Write', 'contract', 'Group agreement', 'A document with signatures and a date.', () => ({ type: 'contract', id: uid('contract'), title: 'Our group agreement', intro: '', fields: [{ id: uid('c'), label: 'We agree to …', placeholder: '…', rows: 2 }], signers: 3 }));

  /* ── Listen & read ── */
  add('Listen & read', 'passage', 'Passage', 'A paragraph students can highlight.', () => ({ type: 'passage', id: uid('passage'), title: 'Text', text: 'Paste the text here.' }));
  add('Listen & read', 'listening', 'Listening', 'Video / audio with transcripts.', () => ({ type: 'listening', title: 'Listening', source: '', videoId: '', audio: '', transcripts: [] }));
  add('Listen & read', 'sources', 'Course texts', 'Buttons that open texts from the lesson’s sources file.', () => ({ type: 'sources', ids: [] }));

  /* ── Layout ── */
  add('Layout', 'tabs', 'Tabs', 'One panel at a time under a tab bar.', () => ({ type: 'tabs', title: '', tabs: [{ label: 'Tab 1', blocks: [{ type: 'text', text: 'Tab 1 content.' }] }, { label: 'Tab 2', blocks: [{ type: 'text', text: 'Tab 2 content.' }] }] }));
  add('Layout', 'toggle', 'Fold', 'A fold that opens (hints, extra help, model answers).', () => ({ type: 'toggle', title: 'Need a hint?', hint: '', blocks: [{ type: 'text', text: 'The hint.' }] }));
  add('Layout', 'carousel', 'Slides', 'Slides in one row (arrows, dots, swipe).', () => ({ type: 'carousel', title: '', slides: [{ title: 'Slide 1', text: 'Text.' }, { title: 'Slide 2', text: 'Text.' }] }));
  add('Layout', 'cards', 'Cards', 'A row of cards (optionally numbered).', () => ({ type: 'cards', title: '', numbered: true, items: [{ label: 'Card 1', text: 'Text.' }, { label: 'Card 2', text: 'Text.' }] }));

  /* ── Class games ── */
  add('Class games', 'bingo', 'Find someone who … bingo', '16 squares; four in a row wins.', () => ({ type: 'bingo', id: uid('bingo'), title: 'Find someone who …', squares: Array.from({ length: 16 }, (_, i) => ({ text: `Square ${i + 1}` })) }));
  add('Class games', 'spinner', 'Spinner', 'Spin reels for a random task.', () => ({ type: 'spinner', id: uid('spin'), title: 'Spin for a topic', reels: [{ label: 'Topic', items: ['Topic 1', 'Topic 2', 'Topic 3'] }] }));
  add('Class games', 'jeopardy', 'Quiz board', 'A team quiz for the projector.', () => ({ type: 'jeopardy', id: uid('jp'), title: 'Quiz board', teams: 4, seconds: 20, cols: [{ title: 'Category 1', clues: [{ pts: 100, clue: 'Clue', answer: 'What is …?' }] }, { title: 'Category 2', clues: [{ pts: 100, clue: 'Clue', answer: 'What is …?' }] }] }));

  window.STUDIO_UID = uid;
  window.STUDIO_PLACEHOLDER = T;
})();
