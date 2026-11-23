/* IELTS Prep offline support. Keeps a copy of the app on the device so lessons open without internet.
   Your answers are always saved on the device (and online when signed in) — this file only caches the app itself.
   After a release, run: node tools/build-sw.js  (updates VERSION and the file list below). */
const VERSION = '1.2';
const CACHE = 'ielts-prep-' + VERSION;   // the cache names must differ from the other courses' sites on the same domain
const PRECACHE = [
  "./",
  "assets/app-icon.svg",
  "assets/apple-touch-icon.png",
  "assets/art/complete.svg",
  "assets/art/library.svg",
  "assets/art/notebook.svg",
  "assets/art/practice.svg",
  "assets/art/soon.svg",
  "assets/art/stage-ai.svg",
  "assets/art/stage-assessment.svg",
  "assets/art/stage-critical.svg",
  "assets/art/stage-discussion.svg",
  "assets/art/stage-feedback.svg",
  "assets/art/stage-group.svg",
  "assets/art/stage-listening.svg",
  "assets/art/stage-reading.svg",
  "assets/art/stage-research.svg",
  "assets/art/stage-writing.svg",
  "assets/art/sync.svg",
  "assets/favicon.svg",
  "assets/fonts/fraunces-italic-400.woff2",
  "assets/fonts/fraunces-normal-400.woff2",
  "assets/fonts/fraunces-normal-600.woff2",
  "assets/fonts/manrope-normal-400.woff2",
  "assets/fonts/manrope-normal-600.woff2",
  "assets/fonts/manrope-normal-700.woff2",
  "assets/fonts/manrope-normal-800-ext.woff2",
  "assets/fonts/manrope-normal-800.woff2",
  "assets/fonts/outfit-latin-ext-wght.woff2",
  "assets/fonts/outfit-latin-wght.woff2",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/logo-dark.svg",
  "assets/logo-white.svg",
  "assets/og-image.png",
  "assets/ui/class/board.svg",
  "assets/ui/class/shared.svg",
  "assets/ui/class/signin.svg",
  "assets/ui/class/todo.svg",
  "assets/ui/guide/assessments.svg",
  "assets/ui/guide/calendar.svg",
  "assets/ui/hero-v2.svg",
  "assets/ui/hero.svg",
  "assets/ui/lab/lab-bench.svg",
  "assets/ui/lab/lab-hero.svg",
  "assets/ui/lab/s-learn.svg",
  "assets/ui/lab/s-practise.svg",
  "assets/ui/lab/s-use.svg",
  "assets/ui/lab/s-warm.svg",
  "assets/ui/library/hero.svg",
  "assets/ui/parts/chart.svg",
  "assets/ui/parts/critical.svg",
  "assets/ui/parts/discussion.svg",
  "assets/ui/parts/essay.svg",
  "assets/ui/parts/listening.svg",
  "assets/ui/parts/reading.svg",
  "assets/ui/parts/research.svg",
  "css/board.css?v=1.2",
  "css/chats.css?v=1.2",
  "css/classroom.css?v=1.2",
  "css/courses.css?v=1.2",
  "css/cowrite.css?v=1.2",
  "css/dec15.css?v=1.2",
  "css/depth.css?v=1.2",
  "css/detail.css?v=1.2",
  "css/dictionary.css?v=1.2",
  "css/downloads.css?v=1.2",
  "css/finish.css?v=1.2",
  "css/fonts.css?v=1.2",
  "css/forms.css?v=1.2",
  "css/fresh.css?v=1.2",
  "css/glass.css?v=1.2",
  "css/gloss.css?v=1.2",
  "css/guide.css?v=1.2",
  "css/kit.css?v=1.2",
  "css/lab.css?v=1.2",
  "css/lesson.css?v=1.2",
  "css/library.css?v=1.2",
  "css/liquid.css?v=1.2",
  "css/livetable.css?v=1.2",
  "css/menubar.css?v=1.2",
  "css/picker.css?v=1.2",
  "css/planner.css?v=1.2",
  "css/play.css?v=1.2",
  "css/polish.css?v=1.2",
  "css/precision.css?v=1.2",
  "css/skills.css?v=1.2",
  "css/studio.css?v=1.2",
  "css/theme.css?v=1.2",
  "css/workspace.css?v=1.2",
  "index.html",
  "js/announce.js?v=1.2",
  "js/app.js?v=1.2",
  "js/band.js?v=1.2",
  "js/board.js?v=1.2",
  "js/boot.js?v=1.2",
  "js/campus.js?v=1.2",
  "js/chats.js?v=1.2",
  "js/classroom.js?v=1.2",
  "js/cloud.js?v=1.2",
  "js/collab.js?v=1.2",
  "js/config.js?v=1.2",
  "js/dictionary.js?v=1.2",
  "js/forms.js?v=1.2",
  "js/guide.js?v=1.2",
  "js/kit.js?v=1.2",
  "js/library.js?v=1.2",
  "js/livetable.js?v=1.2",
  "js/notebook.js?v=1.2",
  "js/notes.js?v=1.2",
  "js/picker.js?v=1.2",
  "js/planner-blocks.js?v=1.2",
  "js/planner.js?v=1.2",
  "js/play.js?v=1.2",
  "js/reader.js?v=1.2",
  "js/studio-apply.js?v=1.2",
  "js/studio-blocks.js?v=1.2",
  "js/studio.js?v=1.2",
  "js/timer.js?v=1.2",
  "js/vendor/supabase.min.js",
  "js/vendor/tiptap.bundle.js?v=1.2",
  "js/wall.js?v=1.2",
  "js/whiteboard.js?v=1.2",
  "lessons/course.js?v=1.2",
  "lessons/guide.js?v=1.2",
  "lessons/studio/ieblocks.js?v=1.2",
  "manifest.webmanifest"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(PRECACHE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('ielts-prep-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;   // sign-in and the class wall always go to the network
  if (req.mode === 'navigate') {   // the page itself (DEC15 index.html, dec10.html …): newest when online, saved copy when offline
    const page = url.pathname;   // each course page keeps its own copy, so DEC10 never opens as DEC15 offline
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(page, copy)); return r; })
      .catch(async () => (await caches.match(page)) || caches.match('index.html')));
    return;
  }
  // files with ?v= never change, so the saved copy is used first; other files update quietly in the background
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req);
    const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; });
    if (hit) { if (!url.search) net.catch(() => null); return hit; }
    return net.catch(async () => (await caches.match(req, { ignoreSearch: true })) || Response.error());
  }));
});
