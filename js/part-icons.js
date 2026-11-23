/* IELTS · line icons for the parts of the course, in the same drawing language as the side panel's other icons
   (24 × 24, round caps and joins, drawn in currentColor; the tile behind each one takes the part's colour). Two line
   weights: a strong outline for the main shape (1.8) and fine lines for details (1.1–1.4), with light tinted fills.
   Inline SVG, so they stay sharp at any zoom. Keys are each part's `art` in lessons/course.js. */
(() => {
  const F = 'fill="currentColor" fill-opacity=".16"', T = 'stroke-width="1.1"', M = 'stroke-width="1.4"';
  window.IELTS_PART_ICONS = {
    /* Listening: headphones (band, inner band, ear cups with cushions) and a sound wave */
    listening: `<path d="M3.8 14.6V12a8.2 8.2 0 0 1 16.4 0v2.6"/><path d="M6.5 10.6a5.9 5.9 0 0 1 11 0" ${T} opacity=".6"/>
      <rect x="2.9" y="13.6" width="4.6" height="7" rx="2.1" ${F}/><rect x="16.5" y="13.6" width="4.6" height="7" rx="2.1" ${F}/>
      <path d="M5.2 15.6v3M18.8 15.6v3" ${T}/><path d="M10 16.4v1.4M12 14.9v4.4M14 16.4v1.4" ${M}/>`,
    /* Reading: an open book, text on both pages, the spine and a bookmark */
    reading: `<path d="M12 6.9C10 5.3 7 4.7 3.4 5.2v13.1c3.6-.5 6.6.1 8.6 1.7 2-1.6 5-2.2 8.6-1.7V5.2C17 4.7 14 5.3 12 6.9z"/>
      <path d="M12 6.9v13.1" ${M}/><path d="M3.4 18.3v1.3c3.6-.5 6.6.1 8.6 1.7 2-1.6 5-2.2 8.6-1.7v-1.3" ${T} opacity=".4"/>
      <path d="M5.8 9.1c1.4-.2 2.8 0 4.1.5M5.8 11.8c1.4-.2 2.8 0 4.1.5M5.8 14.5c1.4-.2 2.8 0 4.1.5M14.1 12.3c1.3-.5 2.7-.7 4.1-.5M14.1 15c1.3-.5 2.7-.7 4.1-.5" ${T}/>
      <path d="M15.3 5.5v4.6l1.25-.95 1.25.95V5.1" fill="currentColor" fill-opacity=".9" ${T}/>`,
    /* Writing Task 1: a report: title, grid, axis, bars and a trend line */
    chart: `<rect x="3.2" y="3.4" width="17.6" height="17.2" rx="2.7"/><path d="M6.4 6.9h4.6" ${M}/><circle cx="17.3" cy="6.9" r=".8" fill="currentColor" stroke="none"/>
      <path d="M6.4 10.6h11.2M6.4 13.8h11.2" ${T} opacity=".35"/><path d="M6.4 17.3h11.2" stroke-width="1.2"/>
      <rect x="7.1" y="14.3" width="2" height="3" rx=".5" ${F} ${T}/><rect x="10.1" y="11.8" width="2" height="5.5" rx=".5" ${F} ${T}/><rect x="13.1" y="13" width="2" height="4.3" rx=".5" ${F} ${T}/><rect x="16.1" y="10" width="2" height="7.3" rx=".5" ${F} ${T}/>
      <path d="m8.1 12.3 3-2.6 3 1.3 3.1-3.3" ${M}/><circle cx="8.1" cy="12.3" r=".75" fill="currentColor" stroke="none"/><circle cx="11.1" cy="9.7" r=".75" fill="currentColor" stroke="none"/><circle cx="14.1" cy="11" r=".75" fill="currentColor" stroke="none"/><circle cx="17.2" cy="7.7" r=".75" fill="currentColor" stroke="none"/>`,
    /* Writing Task 2: an essay page (title and paragraphs) and a pen writing */
    essay: `<path d="M14.6 20.6H6.7a2 2 0 0 1-2-2V5.4a2 2 0 0 1 2-2h7.6l3.9 3.9v2.4"/><path d="M14.1 3.5v3.9H18" stroke-width="1.2" ${F}/>
      <path d="M7.7 8.8h4.4" ${M}/><path d="M7.7 11.7h7.2M7.7 14.3h6M7.7 16.9h3.6" ${T}/>
      <path d="M20.3 12.2a1.6 1.6 0 0 1 0 2.2l-5.7 5.7-2.9.7.7-2.9 5.7-5.7a1.6 1.6 0 0 1 2.2 0z" ${F} stroke-width="1.6"/><path d="m16.7 13.6 2.2 2.2" ${T}/><path d="m12.4 18.6 1.5 1.5" ${T}/>`,
    /* Speaking: a conversation: one voice speaking (dots), the other answering */
    discussion: `<path d="M19 9.3h.4a2.5 2.5 0 0 1 2.5 2.5v3.8a2.5 2.5 0 0 1-2.5 2.5h-.3v2.6L16 18.1h-3.3a2.5 2.5 0 0 1-2.4-1.8" stroke-width="1.3"/>
      <path d="M4.5 4.4h9.6a2.5 2.5 0 0 1 2.5 2.5v4.6a2.5 2.5 0 0 1-2.5 2.5H9.3L5.5 17v-3H4.5A2.5 2.5 0 0 1 2 11.5V6.9a2.5 2.5 0 0 1 2.5-2.5z" ${F}/>
      <circle cx="6.5" cy="9.2" r="1" fill="currentColor" stroke="none"/><circle cx="9.3" cy="9.2" r="1" fill="currentColor" stroke="none"/><circle cx="12.1" cy="9.2" r="1" fill="currentColor" stroke="none"/>
      <path d="M14.4 13.6h4M14.9 15.6h2.6" ${T} opacity=".7"/>`,
    /* Vocabulary: word cards: the card behind, and "Aa" with a definition line on the front card */
    research: `<path d="M7.2 6.6V5.4a2.2 2.2 0 0 1 2.2-2.2h9.4a2.2 2.2 0 0 1 2.2 2.2v9.4a2.2 2.2 0 0 1-2.2 2.2h-.9" stroke-width="1.2" opacity=".75"/>
      <rect x="3" y="6.6" width="15" height="14" rx="2.4" ${F}/><path d="m5.9 15.9 2.5-6.6h.6l2.5 6.6M6.8 13.9h3.8" stroke-width="1.6"/>
      <circle cx="14.1" cy="14.2" r="1.75" ${M}/><path d="M15.85 12.4v3.5" ${M}/><path d="M5.9 18.3h9" ${T} opacity=".6"/>`,
    /* Grammar: the parts of a sentence fit together like two jigsaw pieces, each with words on it */
    critical: `<path d="M2.6 6.6h7.3v4.2a1.9 1.9 0 1 1 0 3.8v4.8H2.6z" ${F}/><path d="M4.8 9.6h3.2M4.8 16.6h2.6" ${T}/>
      <g transform="rotate(9 17 12.6) translate(1.3 -.6)"><path d="M12.6 6.6h2.4a1.7 1.7 0 1 1 3.3 0h2.8v12.8h-8.5v-4.8a1.9 1.9 0 1 0 0-3.8z"/><path d="M15.5 10.2h3M16 16.6h2.6" ${T}/></g>`
  };
})();
