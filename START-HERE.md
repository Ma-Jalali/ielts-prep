# IELTS Prep — course app

The DEC10 design (layout, colours, illustrations, every interactive block, the class tools) with **none of its course content**, set up as one course: **IELTS Preparation**. It adds **Studio**, an editor that lets you change any page in place and build new pages from the blocks.

Site (after GitHub Pages is switched on): `https://ma-jalali.github.io/ielts-prep/`

## Studio: edit and build pages in the browser

1. Open **`…/ielts-prep/#/studio`** once on your computer. A **Studio** link appears in the side panel and a dock appears at the bottom of the screen. Students never see it.
2. Switch on **Edit mode**, then open any lesson page:
   - **Hover a block** to see its toolbar. You can move it up or down, duplicate it, copy it, delete it, open **Edit** (every field, plus a JSON tab), or press **+** to add a block below.
   - **Double-click any text** to type over it. **Enter** saves; **Shift + Enter** adds a new line.
   - **Activity bar:** edit the activity, add a new one after it, duplicate it, move it earlier or later, or delete it.
   - **Stage bar:** the same actions for a stage. **Page bar** (on the overview): edit the page details or add a stage.
   - **Add a block** opens the catalogue. It starts with IELTS question types: True/False/Not Given, Yes/No/Not Given, sentence and note completion, gap-fill, multiple choice, matching, reading passage, listening recording, writing task box, Speaking Part 1/2/3 and a band-descriptor self-check. After those come all the design's blocks.
   - **Undo:** the dock button, or Ctrl/⌘ + Z when you're not typing in a box.
3. **New page:** Studio → New page. Pick a week, a day, a title and a starting point (blank, Listening, Reading, Writing, Speaking, all four skills, or a copy of an existing page).
4. Everything is saved at once as a **draft on this device**. A draft replaces the published page on this device only.

### Publishing a draft

- **Option A:** In Studio → Drafts, press **Lesson file**. Put the file in `lessons/week<N>/`. For a new page, also press **course.js entry** and paste it into that week in `lessons/course.js`.
- **Option B:** Press **Download all drafts** and give the `.json` file to Claude. Claude runs `node tools/import-drafts.js <file>`, adds the course.js entries and publishes.
- Then raise the version (see below) and discard the drafts in Studio.

## Files

| Path | What it is |
|---|---|
| `index.html` | the single page |
| `js/config.js` | settings: Supabase keys, version |
| `lessons/course.js` | **the course map**: weeks, days, Skills Lab, downloads |
| `lessons/guide.js` | Course calendar + Assessments pages (dates, mock tests, the four skills) |
| `lessons/week1/iew1d1.js` | Starter page: one empty stage per skill |
| `lessons/week1/iew1d2.js` | **Block gallery**: every block, working (built from `js/studio-blocks.js`) |
| `lessons/_template.js` | every block type documented, for writing lessons by hand |
| `lessons/lab/_template.js` | a Skills Lab lesson (Warm-up · Learn · Practise · Use it) |
| `js/studio.js`, `css/studio.css` | Studio |
| `js/studio-blocks.js` | Studio's block catalogue and IELTS presets: add new presets here |
| `js/app.js` and the other `js/`, `css/` files | the app and design system (from DEC10) |
| `tools/build-sw.js` | rebuilds the offline file list |
| `tools/import-drafts.js` | turns a "Download all drafts" file into lesson files |
| `supabase/` | the database migrations of the shared project (already applied; for reference) |

## Rules that protect students' work

- **Lesson ids start with `ie`**, for example `iew3d2`. Activity and field ids are the keys of saved answers, so never rename any of these once students have started.
- The Supabase project is **shared with DEC15/DEC10**. Logins work on every site. This class (class list, chats, boards, announcements) is kept apart by the course id `ielts`. No database change is needed.
- Every release: raise the version in `js/config.js` **and** every `?v=` in `index.html`, then run `node tools/build-sw.js`.

## What is placeholder

- The logo, app icon and share image are simple placeholder marks.
- `lessons/guide.js` has example dates, test formats and a readiness checklist.
- The eight weeks on the course map, and the four Skills Lab strands (empty).
