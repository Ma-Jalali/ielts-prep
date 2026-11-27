// Course-wide settings. Media URLs live here so they can be replaced without editing lessons.
window.DEC15_CONFIG = {
  // true = new browsers open in Teacher view (suggested answers + teacher notes always visible).
  // false = Student view: suggested answers open only after the student has tried the activity.
  teacherView: false,
  coreAudioUrl: '',              // direct link to a course audio file, if any
  supplementalVideoId: '',       // a default YouTube video for 'listening' blocks without their own videoId
  policyUrl: '',
  // Supabase (online saving). The same project as DEC15/DEC10: logins work on every site; this course's class
  // (class list, chats, boards, announcements) is kept apart by the course id 'ielts' (lessons/course.js).
  // Use the project URL and the PUBLISHABLE / anon key — never the service_role key. Leave blank to save on the device only.
  supabaseUrl: 'https://bogagtbkiavnhuohzqzb.supabase.co',
  supabaseKey: 'sb_publishable_SThek4oq-ojxSq-CqIbTCg_mDvMkAYR',
  version: '3.42'
};
/* The app was built for several courses sharing one Supabase project. This site is one course (IELTS, id 'ielts');
   the class around the lessons (class list, chat, study groups, announcements, class board, answers switch, timer)
   is kept per course. */
window.DEC15_CLASS = {
  get id() { return window.DEC15_COURSE?.id || 'ielts'; },
  // class_settings keys: other courses add their id ('ielts:answers_open'); only 'dec15' uses the bare key
  key(k) { return this.id === 'dec15' ? k : this.id + ':' + k; },
  unkey(k) { return this.id === 'dec15' ? (String(k).includes(':') ? null : k) : String(k).startsWith(this.id + ':') ? k.slice(this.id.length + 1) : null; },
  mine(row) { return (row?.course || 'dec15') === this.id; }
};
