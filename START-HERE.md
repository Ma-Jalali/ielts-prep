# IELTS Prep — course app

The DEC10 design (layout, colours, illustrations, every interactive block, the class tools) with **none of its course content**, set up as one course: **IELTS Preparation** (Academic, B2 → Band 6.5–7). It adds **Studio**, an editor that lets you change any page in place and build new pages from the blocks.

## The course outline: by skill, not by week

The course has seven parts: the four skills, with Writing split into Task 1 (Academic) and Task 2 because each task has its own lessons, plus Grammar and Vocabulary. Each part has its own ordered list of lessons. Students work through each skill's lessons in order. There are no weeks or days.

| # | Skill | Lesson folder |
|---|---|---|
| 1 | Listening | `lessons/b2/listening/` |
| 2 | Reading | `lessons/b2/reading/` |
| 3 | Writing Task 1 (Academic) | `lessons/b2/writing-task1/` |
| 4 | Writing Task 2 | `lessons/b2/writing-task2/` |
| 5 | Speaking | `lessons/b2/speaking/` |
| 6 | Grammar | `lessons/b2/grammar/` |
| 7 | Vocabulary | `lessons/b2/vocabulary/` |

The lessons are still to be planned: each skill is empty in `lessons/course.js` and shows "To plan" on the course map. Add each lesson to its skill's `days`, in the order students study it.

- **Side panel.** Under **Course map**, a **Skills** list links to each part's page (`#/skill/<n>`), in the order of course.js: Listening, Reading, Writing Task 1 (Academic), Writing Task 2, Speaking, Vocabulary, Grammar. Readings and Copy Detector are removed.
- **Hide or show menus for students.** Sign in as a teacher, open the side panel's **Settings** (gear), then use **Side panel for students** to switch Course calendar, Assessments, Class board, Chats, Shared with me and Name wheel on or off. This applies to every student at once. It is saved in the class settings, so students who aren't signed in follow it too. Students can't open a hidden page. You still see hidden menus, dimmed and marked "hidden". `menusHidden` in course.js sets which menus start hidden before you choose.
- **No order between the parts.** Students can start with any part. The home page shows the seven parts as cards side by side. Choosing one shows that part's own road map, with its lessons as the stops in order (done lessons are ticked, and the first unfinished one is "Up next"), then its lesson cards.
- **How the data is stored.** The app keeps its original weeks/days structure: each entry in `weeks` is a **skill** and each of its `days` is a **lesson**. The setting `units: { unit: 'Skill', lesson: 'Lesson' }` makes the app say "Reading · Lesson 3" instead of "Week 2, Day 3".
- **Lesson ids carry the level:** `ieb2w<skill>d<lesson>`. For example, `ieb2w2d3` is B2 · Reading · Lesson 3. A future level gets its own prefix, such as `ieb1` or `iec1`, so ids never clash.
- **Lesson files go in the skill's folder:** `lessons/b2/<skill>/<id>.js`, as set by `folder` in course.js.

Site (after GitHub Pages is switched on): `https://ma-jalali.github.io/ielts-prep/`

## Adding a lower or higher level later

The course is set up so that a new level can be added without touching this one:

- Lesson ids carry the level (`ieb2…`), and lesson files sit in a folder per level (`lessons/b2/`).
- A new level gets its own prefix and folder: for example, `ieb1` and `lessons/b1/` for Band 5–5.5, or `iec1` and `lessons/c1/` for Band 7.5+.

When the time comes, there are two ways to do it:

1. **Recommended: one site, a level switch.** Each level gets its own course file (`lessons/b1/course.js` and so on) and its own course id (`ielts-b1`). That keeps each level's class list, chats, board and announcements separate. A **Level** choice in the side panel decides which course file opens, and students choose once (it is remembered). Logins, the design and Studio stay shared, and a Grammar or Vocabulary lesson can be used in two levels by listing the same file in both. This needs a small change to `js/boot.js` and a level picker.
2. **A separate copy of the site per level** (for example a repository `ielts-b1`). It needs no code, but every fix to the app then has to be made in each copy.

## Studio: edit and build pages in the browser

1. Open **`…/ielts-prep/#/studio`** once on your computer. A **Studio** link appears in the side panel and a dock appears at the bottom of the screen. Students never see it.
2. Switch on **Edit mode**, then open any lesson page:
   - **Hover a block** to see its toolbar. You can move it up or down, duplicate it, copy it, delete it, open **Edit** (every field, plus a JSON tab), or press **+** to add a block below.
   - **Double-click any text** to type over it. **Enter** saves; **Shift + Enter** adds a new line.
   - **Activity bar:** edit the activity, add a new one after it, duplicate it, move it earlier or later, or delete it.
   - **Stage bar:** the same actions for a stage. **Page bar** (on the overview): edit the page details or add a stage.
   - **Add a block** opens the catalogue. It starts with IELTS question types: True/False/Not Given, Yes/No/Not Given, sentence and note completion, gap-fill, multiple choice, matching, reading passage, listening recording, writing task box, Speaking Part 1/2/3 and a band-descriptor self-check. After those come all the design's blocks.
   - **Undo:** the dock button, or Ctrl/⌘ + Z when you're not typing in a box.
3. **New page:** Studio → New page. Pick a skill, the lesson number, a title and a starting point (blank, Listening, Reading, Writing, Speaking, all four skills, or a copy of an existing page).
4. Everything is saved at once as a **draft on this device**. A draft replaces the published page on this device only.

### Publishing a draft

- **Option A:** In Studio → Drafts, press **Lesson file**. Put the file in the skill's folder (`lessons/b2/<skill>/`). Then press **course.js entry** and paste it into that skill's `days` in `lessons/course.js`.
- **Option B:** Press **Download all drafts** and give the `.json` file to Claude. Claude runs `node tools/import-drafts.js <file>`, adds the course.js entries and publishes.
- Then raise the version (see below) and discard the drafts in Studio.

## Files

| Path | What it is |
|---|---|
| `index.html` | the single page |
| `js/config.js` | settings: Supabase keys, version |
| `lessons/course.js` | **the course outline**: the seven parts (skills) and their lessons (to plan), downloads |
| `lessons/guide.js` | Course calendar + Assessments pages (dates, mock tests, the four skills) |
| `lessons/b2/<skill>/` | the lesson files of each skill (empty for now) |
| `lessons/studio/ieblocks.js` | **Block gallery**: every block, working (built from `js/studio-blocks.js`). Not on the course map; Studio links to it |
| `lessons/_template.js` | every block type documented, for writing lessons by hand |
| `lessons/lab/_template.js` | a Skills Lab lesson (Warm-up · Learn · Practise · Use it) |
| `js/studio.js`, `css/studio.css` | Studio |
| `js/studio-blocks.js` | Studio's block catalogue and IELTS presets: add new presets here |
| `js/app.js` and the other `js/`, `css/` files | the app and design system (from DEC10) |
| `tools/build-sw.js` | rebuilds the offline file list |
| `tools/import-drafts.js` | turns a "Download all drafts" file into lesson files |
| `supabase/` | the database migrations of the shared project (already applied; for reference) |

## Rules that protect students' work

- **Lesson ids start with `ie`**, for example `ieb2w3d2`. To reorder lessons after students have started, add new ids; never renumber old ones. Activity and field ids are the keys of saved answers, so never rename any of these once students have started.
- The Supabase project is **shared with DEC15/DEC10**. Logins work on every site. This class (class list, chats, boards, announcements) is kept apart by the course id `ielts`. No database change is needed.
- Every release: raise the version in `js/config.js` **and** every `?v=` in `index.html`, then run `node tools/build-sw.js`.

## What is placeholder

- The logo, app icon and share image are simple placeholder marks.
- `lessons/guide.js` has example dates, test formats and a readiness checklist.
- `lessons/guide.js` (Course calendar) still uses example weeks and dates. Change it to match how your classes run, or remove it.
- The Skills Lab is switched off because the main course is now by skill. To bring it back, add `lab` to course.js again (see `lessons/lab/_template.js`).
