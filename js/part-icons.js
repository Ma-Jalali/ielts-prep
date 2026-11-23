/* IELTS · line icons for the parts of the course, in the same drawing language as the side panel's other icons
   (24 × 24, round line caps, drawn in currentColor; the tile behind each one takes the part's colour). Inline SVG,
   so they stay sharp at any zoom. Keys are each part's `art` in lessons/course.js. */
window.IELTS_PART_ICONS = {
  /* headphones with a sound wave between the ear cups */
  listening: '<path d="M4 15.5v-3.5a8 8 0 0 1 16 0v3.5"/><path d="M4 14.5h1.8A1.7 1.7 0 0 1 7.5 16.2v2.6a1.7 1.7 0 0 1-1.7 1.7H5.7A1.7 1.7 0 0 1 4 18.8z"/><path d="M20 14.5h-1.8a1.7 1.7 0 0 0-1.7 1.7v2.6a1.7 1.7 0 0 0 1.7 1.7h.1a1.7 1.7 0 0 0 1.7-1.7z"/><path d="M10 16.4v1.2M12 14.8v4.4M14 16v2" stroke-width="1.5"/>',
  /* an open book, text on both pages and a bookmark */
  reading: '<path d="M12 6.8C10 5.2 7 4.6 3.5 5.1v13.1c3.5-.5 6.5.1 8.5 1.7 2-1.6 5-2.2 8.5-1.7V5.1C17 4.6 14 5.2 12 6.8z"/><path d="M12 6.8v13.1"/><path d="M6 9.2c1.3-.2 2.6 0 3.8.4M6 12.2c1.3-.2 2.6 0 3.8.4M6 15.2c1.3-.2 2.6 0 3.8.4M14.2 12.6c1.2-.4 2.5-.6 3.8-.4M14.2 15.6c1.2-.4 2.5-.6 3.8-.4"/><path d="M15.2 5.3v4.4l1.3-1 1.3 1V4.9"/>',
  /* Writing Task 1: a report with a bar chart and a trend line */
  chart: '<rect x="3.5" y="3.5" width="17" height="17" rx="2.6"/><path d="M7 7.2h4"/><path d="M7.5 17v-2.5M11 17v-4.5M14.5 17v-3M18 17v-6.5" stroke-width="2.2"/><path d="m6.6 12.4 3.6-3 3.4 1.8 3.8-3.6"/><circle cx="17.4" cy="7.6" r=".6" fill="currentColor"/>',
  /* Writing Task 2: an essay page with paragraphs and a pen writing */
  essay: '<path d="M14.5 20.5H6.8a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h7.4L18 7.3v2.2"/><path d="M14 3.6v3.9h3.9"/><path d="M8 9.5h5M8 12.5h7M8 15.5h4"/><path d="M20.3 12.4a1.5 1.5 0 0 1 0 2.1l-5.6 5.6-2.8.7.7-2.8 5.6-5.6a1.5 1.5 0 0 1 2.1 0z"/>',
  /* Speaking: a conversation, one voice speaking */
  discussion: '<path d="M4.5 4.5h9.5a2.5 2.5 0 0 1 2.5 2.5v4.5a2.5 2.5 0 0 1-2.5 2.5H9.2L5.5 17v-3H4.5A2.5 2.5 0 0 1 2 11.5V7a2.5 2.5 0 0 1 2.5-2.5z"/><path d="M19 9.2h.5A2.5 2.5 0 0 1 22 11.7v3.8a2.5 2.5 0 0 1-2.5 2.5h-.3v2.6L16 18h-3.3a2.5 2.5 0 0 1-2.4-1.8"/><circle cx="6.6" cy="9.3" r=".95" fill="currentColor" stroke="none"/><circle cx="9.3" cy="9.3" r=".95" fill="currentColor" stroke="none"/><circle cx="12" cy="9.3" r=".95" fill="currentColor" stroke="none"/>',
  /* Vocabulary: a word card, "Aa", with a definition line */
  research: '<rect x="3" y="4.5" width="18" height="15" rx="2.6"/><path d="m6 15.2 2.7-7.4h.6l2.7 7.4M7 12.8h4"/><circle cx="16.1" cy="13.1" r="2.1"/><path d="M18.2 10.8v4.4"/><path d="M6 17.6h12" opacity=".5"/>',
  /* Grammar: a sentence diagram, subject + verb + object joined in one structure */
  critical: '<circle cx="12" cy="4.6" r="1.6"/><path d="M12 6.2v3.3M5 13.5v-2.6a1.3 1.3 0 0 1 1.3-1.3h11.4a1.3 1.3 0 0 1 1.3 1.3v2.6M12 9.5v4"/><rect x="2.4" y="13.5" width="5.2" height="6" rx="1.4"/><rect x="9.4" y="13.5" width="5.2" height="6" rx="1.4"/><rect x="16.4" y="13.5" width="5.2" height="6" rx="1.4"/><path d="M4.3 16.5h1.4M11.3 16.5h1.4M18.3 16.5h1.4"/>'
};
