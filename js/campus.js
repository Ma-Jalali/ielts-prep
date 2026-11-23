/* IELTS · the course map on the home page: an illustrated town. Each part of the course is a landmark (Listening a radio
   tower, Reading a library, Writing Task 1 a data observatory, Writing Task 2 a writers' hall, Speaking an open-air stage,
   Vocabulary a glasshouse of letters, Grammar a workshop). Paths lead from the central plaza ("Start anywhere") to every
   landmark: the parts have no order. Each landmark opens its part (#/skill/<n>). Pure SVG, no images but the part icons. */
window.IELTSCampus = function ({ parts, esc, meta }) {
  const by = art => parts.find(w => w.art === art);
  /* positions of the seven landmarks (x, ground y) and of the plaza; viewBox 1200 × 620 */
  const PL = [600, 452];
  const POS = { listening: [150, 432], reading: [356, 300], chart: [560, 238], essay: [822, 252], discussion: [1050, 420], research: [370, 560], critical: [850, 566] };
  const ink = '#18213f';
  const T = (x, y, s, k = 1) => `<g transform="translate(${x} ${y})${k !== 1 ? ` scale(${k})` : ''}">${s}</g>`;
  const tree = (x, y, k = 1, c = ['#7fbf86', '#5aa267', '#9ad3a0']) => T(x, y, `<ellipse cy="2" rx="13" ry="3.4" fill="${ink}" opacity=".1"/><rect x="-2" y="-14" width="4" height="16" rx="1.5" fill="#8a6a4a"/><circle cy="-24" r="13" fill="${c[1]}"/><circle cx="-6" cy="-28" r="9" fill="${c[0]}"/><circle cx="6" cy="-21" r="8" fill="${c[0]}"/><circle cx="-3" cy="-32" r="4.5" fill="${c[2]}"/>`, k);
  const pine = (x, y, k = 1) => T(x, y, `<ellipse cy="2" rx="9" ry="2.6" fill="${ink}" opacity=".1"/><rect x="-1.6" y="-6" width="3.2" height="8" fill="#7c5f42"/><path d="M0-40 12-16H6l9 12H-15l9-12h-6z" fill="#4f9563"/><path d="M0-40-12-16h6l-9 12H0z" fill="#fff" opacity=".12"/>`, k);
  const bush = (x, y, k = 1) => T(x, y, `<ellipse cy="3" rx="15" ry="2.6" fill="${ink}" opacity=".08"/><circle cx="-7" r="7" fill="#8cc792"/><circle cx="3" cy="-3" r="8.5" fill="#74b67d"/><circle cx="11" cy="1" r="5.5" fill="#8cc792"/><circle cx="1" cy="-7" r="2.6" fill="#b5e0b8"/>`, k);
  const cloud = (x, y, k = 1) => T(x, y, `<path d="M-34 6a12 12 0 0 1 12-14 18 18 0 0 1 33-5 13 13 0 0 1 21 9 9 9 0 0 1 2 10z" fill="#fff"/><path d="M-32 6h66" stroke="#e7ecf6" stroke-width="2.5" stroke-linecap="round"/>`, k);
  const lamp = (x, y) => T(x, y, `<rect x="-1" y="-26" width="2" height="26" fill="#3b4566"/><circle cy="-28" r="4" fill="#ffd57a"/><circle cy="-28" r="9" fill="#ffd57a" opacity=".18"/>`);
  const shade = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${ink}" opacity=".07"/>`;   // the side away from the sun
  const win = (x, y, w = 14, h = 16, c = '#cfdcf2') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${c}"/><rect x="${x}" y="${y}" width="${w}" height="${h * .45}" rx="2" fill="#fff" opacity=".45"/><path d="M${x + w / 2} ${y}v${h}M${x} ${y + h / 2}h${w}" stroke="#fff" stroke-width="1.2" opacity=".8"/>`;
  const shadow = (w = 70) => `<ellipse cy="4" rx="${w}" ry="${w * .14}" fill="${ink}" opacity=".1"/>`;
  /* ───────── the landmarks: drawn around (0, 0) = the middle of their ground line ───────── */
  const L = {
    listening: c => `${shadow(56)}
      <g stroke="#2b3556" stroke-width="2.4" stroke-linecap="round" fill="none"><path d="M-26 0 0-150 26 0"/><path d="M-21-40H21M-16-80H16M-11-115H11"/><path d="M-21-40 16-80M21-40-16-80M-16-80 11-115M16-80-11-115"/></g>
      <rect x="-4" y="-170" width="8" height="22" rx="3" fill="#2b3556"/><circle cy="-174" r="6" fill="${c}"/><circle cy="-174" r="2.4" fill="#fff"/>
      <g fill="none" stroke="${c}" stroke-linecap="round"><path d="M-20-190a28 28 0 0 1 0 32M20-190a28 28 0 0 0 0 32" stroke-width="3" opacity=".85"/><path d="M-34-200a44 44 0 0 1 0 52M34-200a44 44 0 0 0 0 52" stroke-width="2.6" opacity=".55"/><path d="M-48-210a60 60 0 0 1 0 72M48-210a60 60 0 0 0 0 72" stroke-width="2.2" opacity=".3"/></g>
      <g transform="translate(14 0)"><rect x="0" y="-34" width="52" height="34" rx="3" fill="#fff"/><path d="M-4-34h60l-5-12H1z" fill="${c}"/><rect x="8" y="-24" width="12" height="10" rx="2" fill="#cfe9ea"/><rect x="28" y="-24" width="16" height="24" rx="2" fill="#2b3556"/><circle cx="40" cy="-12" r="1.4" fill="#ffd57a"/></g>`,
    reading: c => `${shadow(90)}
      <rect x="-84" y="-8" width="168" height="8" fill="#dfe5f1"/><rect x="-78" y="-16" width="156" height="8" fill="#eef2f9"/>
      <rect x="-70" y="-96" width="140" height="80" fill="#fff"/><rect x="-70" y="-96" width="140" height="80" fill="${c}" opacity=".05"/>
      ${[-56, -28, 0, 28, 56].map(x => `<rect x="${x - 6}" y="-92" width="12" height="76" fill="#f4f7fd"/><rect x="${x - 6}" y="-92" width="3" height="76" fill="#d5def0"/><rect x="${x - 8}" y="-96" width="16" height="5" rx="1" fill="#e3e9f5"/><rect x="${x - 8}" y="-20" width="16" height="4" rx="1" fill="#e3e9f5"/>`).join('')}
      <rect x="-78" y="-106" width="156" height="12" rx="2" fill="#e9eef8"/><path d="M-84-106 0-150 84-106z" fill="${c}"/><path d="M-62-110 0-140 62-110z" fill="#fff" opacity=".16"/>
      <circle cy="-122" r="9" fill="#fff"/><circle cy="-122" r="5.5" fill="${c}"/><path d="M-3-122h6M0-125v6" stroke="#fff" stroke-width="1.4"/>
      ${shade(40, -96, 30, 80)}<rect x="-12" y="-62" width="24" height="46" rx="12" fill="#2b3556"/><rect x="-1" y="-60" width="2" height="44" fill="#fff" opacity=".2"/>
      <text y="-99" text-anchor="middle" font-family="Outfit, Manrope, sans-serif" font-size="8.5" font-weight="700" letter-spacing="2.4" fill="${c}">LIBRARY</text>`,
    chart: c => `${shadow(80)}
      <rect x="-70" y="-120" width="140" height="120" rx="3" fill="#fff"/>${shade(36, -120, 34, 120)}<rect x="-74" y="-126" width="148" height="8" rx="2" fill="#2b3556"/>
      ${[-88, -58].map(y => [-58, -34, -10, 14, 40].map(x => win(x, y, 16, 18)).join('')).join('')}
      ${[-58, -34, 40].map(x => win(x, -28, 16, 18)).join('')}<rect x="-10" y="-34" width="34" height="34" rx="2" fill="#2b3556"/><path d="M7-34v34" stroke="#fff" stroke-opacity=".25" stroke-width="1.5"/><rect x="-14" y="-38" width="42" height="5" rx="2" fill="${c}"/>
      <g transform="translate(0 -160)"><rect x="-58" y="-36" width="116" height="76" rx="6" fill="#2b3556"/><rect x="-52" y="-30" width="104" height="64" rx="3" fill="#fff"/>
        <path d="M-44 26h88M-44 12h88M-44-2h88M-44-16h88" stroke="#e4e9f3" stroke-width="1"/>
        <rect x="-40" y="4" width="12" height="22" rx="1.5" fill="${c}" opacity=".45"/><rect x="-22" y="-8" width="12" height="34" rx="1.5" fill="${c}" opacity=".7"/><rect x="-4" y="-2" width="12" height="28" rx="1.5" fill="${c}" opacity=".45"/><rect x="14" y="-18" width="12" height="44" rx="1.5" fill="${c}"/><rect x="32" y="-10" width="12" height="36" rx="1.5" fill="${c}" opacity=".7"/>
        <path d="M-34-4-16-16 2-10 20-26 38-18" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>${[[-34, -4], [-16, -16], [2, -10], [20, -26], [38, -18]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#fff" stroke="${ink}" stroke-width="1.6"/>`).join('')}
        <rect x="-6" y="40" width="4" height="22" fill="#2b3556"/><rect x="2" y="40" width="4" height="22" fill="#2b3556"/></g>
      <g transform="translate(52 -120)"><path d="M-16 0a16 16 0 0 1 32 0z" fill="${c}"/><rect x="-3" y="-22" width="6" height="12" rx="2" fill="#2b3556" transform="rotate(-30)"/></g>`,
    essay: c => `${shadow(80)}
      <rect x="-70" y="-110" width="140" height="110" rx="3" fill="#fff"/>${shade(36, -110, 34, 110)}<path d="M-76-110h152l-10-18H-66z" fill="${c}"/><path d="M-76-110h152" stroke="#fff" stroke-opacity=".35" stroke-width="2"/>
      ${[-50, -26, 26, 50].map(x => `<rect x="${x - 8}" y="-92" width="16" height="24" rx="8" fill="#f3d4e0"/><rect x="${x - 8}" y="-56" width="16" height="24" rx="8" fill="#f3d4e0"/>`).join('')}${win(-8, -92, 16, 22, '#f3d4e0')}
      <rect x="-12" y="-40" width="24" height="40" rx="12" fill="#2b3556"/><rect x="-16" y="-44" width="32" height="5" rx="2" fill="${c}"/>
      <g transform="translate(0 -176)"><rect x="-6" y="40" width="4" height="26" fill="#2b3556"/><rect x="2" y="40" width="4" height="26" fill="#2b3556"/>
        <rect x="-60" y="-38" width="120" height="80" rx="6" fill="#2b3556"/><rect x="-54" y="-32" width="108" height="68" rx="3" fill="#fff"/>
        <text x="-44" y="-15" font-family="Outfit, Manrope, sans-serif" font-size="10" font-weight="800" letter-spacing="1.5" fill="${c}">ESSAY</text>
        <path d="M-44-5h68M-44 3h74M-44 11h70M-44 19h48M-44 27h60" stroke="#c9cfdd" stroke-width="2.4" stroke-linecap="round"/>
        <g transform="translate(40 14) rotate(38)"><rect x="-3.5" y="-30" width="7" height="26" rx="3" fill="${c}"/><rect x="-3.5" y="-12" width="7" height="3" fill="#f4c35a"/><path d="M-3.5-4h7L0 6z" fill="#f4c35a"/><path d="M0-3v7" stroke="#9a6a10" stroke-width=".8"/></g></g>`,
    discussion: c => `${shadow(96)}
      <path d="M-92 0a92 30 0 0 1 184 0z" fill="#e7ebf4"/><path d="M-78-8a78 24 0 0 1 156 0" fill="none" stroke="#d3dae8" stroke-width="5"/><path d="M-62-14a62 18 0 0 1 124 0" fill="none" stroke="#d3dae8" stroke-width="5"/>
      <rect x="-46" y="-30" width="92" height="12" rx="3" fill="#fff"/><path d="M-56-112q56-30 112 0v8h-112z" fill="${c}"/><path d="M-56-104h112" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>
      <rect x="-50" y="-104" width="6" height="74" fill="#fff"/><rect x="44" y="-104" width="6" height="74" fill="#fff"/>
      <g transform="translate(0 -30)"><rect x="-1.4" y="-38" width="2.8" height="38" fill="#2b3556"/><rect x="-6" y="-56" width="12" height="20" rx="6" fill="#2b3556"/><path d="M-4-50h8M-4-46h8M-4-42h8" stroke="#fff" stroke-opacity=".35"/><path d="M-12 0h24" stroke="#2b3556" stroke-width="3" stroke-linecap="round"/></g>
      <g transform="translate(-60 -150)"><path d="M-24-16h40a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8h-22l-10 10v-10h-8a8 8 0 0 1-8-8V-8a8 8 0 0 1 8-8z" fill="#fff"/><circle cx="-14" cy="-1" r="2.6" fill="${c}"/><circle cx="-4" cy="-1" r="2.6" fill="${c}"/><circle cx="6" cy="-1" r="2.6" fill="${c}"/></g>
      <g transform="translate(62 -168)"><path d="M-20-14h36a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8h-6v10l-10-10h-20a8 8 0 0 1-8-8V-6a8 8 0 0 1 8-8z" fill="${c}"/><path d="M-16-3h28M-16 4h18" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></g>`,
    research: c => `${shadow(86)}
      <rect x="-76" y="-12" width="152" height="12" rx="2" fill="#cfe3d6"/>
      <path d="M-68-12V-84a68 40 0 0 1 136 0v72z" fill="#e9f7ee" stroke="#fff" stroke-width="3"/>
      <path d="M-68-84a68 40 0 0 1 136 0" fill="none" stroke="${c}" stroke-width="4"/>${[-44, -22, 0, 22, 44].map(x => `<path d="M${x}-12V${-84 - Math.round(38 * Math.sqrt(Math.max(0, 1 - (x / 68) ** 2)))}" stroke="#fff" stroke-width="2.4"/>`).join('')}
      <path d="M-68-56h136" stroke="#fff" stroke-width="2.4"/>
      ${[['A', -46, '#1f9254'], ['b', -16, '#2b67d1'], ['C', 14, '#e2552f'], ['d', 42, '#7a4fd0']].map(([t, x, k]) => `<g transform="translate(${x} -12)"><path d="M0 0v-22" stroke="#4f9563" stroke-width="2"/><path d="M0-12c-6-2-9-6-9-10 5 1 8 4 9 10zM0-16c5-2 8-6 8-10-5 1-8 4-8 10z" fill="#74b67d"/><rect x="-9" y="-44" width="18" height="18" rx="4" fill="#fff" stroke="${k}" stroke-width="1.8"/><text y="-30.5" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="700" fill="${k}">${t}</text></g>`).join('')}
      <rect x="-12" y="-120" width="24" height="10" rx="3" fill="${c}"/>`,
    critical: c => `${shadow(96)}
      <rect x="-66" y="-74" width="132" height="74" rx="3" fill="#fff"/>${shade(30, -74, 36, 74)}
      <path d="M-70-74h140v-6l-14-22v22l-28-22v22l-28-22v22l-28-22v22l-28-22v22l-14-22z" fill="${c}"/><path d="M-56-102v22M-28-102v22M0-102v22M28-102v22M56-102v22" stroke="#fff" stroke-opacity=".35" stroke-width="1.5"/>
      ${[-54, -30].map(x => win(x, -60, 18, 20)).join('')}${win(36, -60, 18, 20)}
      <rect x="-6" y="-46" width="36" height="46" rx="2" fill="#2b3556"/><path d="M-6-36h36M-6-26h36M-6-16h36M-6-6h36" stroke="#fff" stroke-opacity=".16" stroke-width="2"/>
      <g transform="translate(-40 -30)"><circle r="12" fill="#fff4dc" stroke="${c}" stroke-width="2.5"/>${[...Array(8)].map((_, i) => `<rect x="-2.5" y="-16.5" width="5" height="6" rx="1.2" fill="${c}" transform="rotate(${i * 45})"/>`).join('')}<circle r="4" fill="${c}"/></g>
      <g transform="translate(78 0)">${[['S', -30, 0], ['V', -4, 0], ['O', 22, 0], ['', -17, -24], ['', 9, -24]].map(([t, x, y], k) => `<g transform="translate(${x} ${y - 24})"><rect width="24" height="24" rx="4" fill="${k < 3 ? '#fff' : '#fff4dc'}" stroke="${c}" stroke-width="2"/><rect width="24" height="6" rx="3" fill="${c}" opacity=".18"/>${t ? `<text x="12" y="18" text-anchor="middle" font-family="Outfit, Manrope, sans-serif" font-size="14" font-weight="800" fill="${c}">${t}</text>` : `<path d="M7 12h10M12 7v10" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`}</g>`).join('')}</g>`
  };
  /* a label over each landmark: the part's icon, name and progress */
  const icon = (w, x, y, size) => `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${w.color}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${(window.IELTS_PART_ICONS || {})[w.art] || ''}</svg>`;
  /* a label over each landmark: a solid pill in the part's colour (white icon tile, name, progress) with a pointer to the building,
     large and high-contrast so every part is easy to find */
  const label = (w, x, y) => { const t = w.short || w.theme, sub = meta(w), wd = Math.max(t.length * 9.6, sub.length * 6.9) + 70;
    return `<g class="cp-label" transform="translate(${x} ${y})"><path d="M-9 23 0 34 9 23z" fill="${w.color}"/><rect x="${-wd / 2}" y="-25" width="${wd}" height="50" rx="25" fill="${w.color}" filter="url(#cp-sh)"/>
      <rect x="${-wd / 2 + 7}" y="-18" width="36" height="36" rx="11" fill="#fff"/>${icon(w, -wd / 2 + 13, -12, 24)}
      <text x="${-wd / 2 + 53}" y="-1" font-family="Outfit, Manrope, sans-serif" font-size="17" font-weight="700" fill="#fff">${esc(t)}</text>
      <text x="${-wd / 2 + 53}" y="15" font-family="Manrope, sans-serif" font-size="11" font-weight="800" letter-spacing=".7" fill="#fff" fill-opacity=".85">${esc(sub.toUpperCase())}</text></g>`; };
  const TOPS = { listening: -232, reading: -176, chart: -230, essay: -238, discussion: -206, research: -150, critical: -128 };
  const paths = Object.entries(POS).filter(([a]) => by(a)).map(([, [x, y]]) => { const mx = (PL[0] + x) / 2, my = (PL[1] + y) / 2 + (y < PL[1] ? 34 : -18);
    return `M${PL[0]} ${PL[1]}Q${mx} ${my} ${x} ${y + 6}`; });
  /* draw landmarks back to front (smaller y first) so nearer ones overlap farther ones */
  const order = Object.entries(POS).sort((a, b) => a[1][1] - b[1][1]).map(([art, [x, y]]) => { const w = by(art); if (!w) return '';
    return `<a class="cp-place" href="#/skill/${w.n}" aria-label="${esc(w.theme)}: ${esc(meta(w))}"><g transform="translate(${x} ${y})"><g class="cp-lift">${L[art](w.color)}</g></g></a>`; }).join('');
  const labels = Object.entries(POS).map(([art, [x, y]]) => { const w = by(art); if (!w) return '';
    return `<a class="cp-place cp-tag" href="#/skill/${w.n}" tabindex="-1" aria-hidden="true"><g transform="translate(${x} ${y})"><g class="cp-lift">${label(w, 0, TOPS[art] - 26)}</g></g></a>`; }).join('');
  return `<svg class="campus-svg" viewBox="0 -64 1200 684" role="group" aria-label="Course map: ${esc(parts.map(w => w.theme).join(', '))}. Start with any part.">
    <defs>
      <linearGradient id="cp-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dfe9fb"/><stop offset=".6" stop-color="#f3f1fb"/><stop offset="1" stop-color="#fdf1ea"/></linearGradient>
      <linearGradient id="cp-hill1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe3d2"/><stop offset="1" stop-color="#bcd9c3"/></linearGradient>
      <linearGradient id="cp-hill2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcefd9"/><stop offset="1" stop-color="#cbe6c8"/></linearGradient>
      <linearGradient id="cp-water" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9fd0ea"/><stop offset="1" stop-color="#b9dff2"/></linearGradient>
      <radialGradient id="cp-sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe0a3"/><stop offset=".5" stop-color="#ffe9c2" stop-opacity=".5"/><stop offset="1" stop-color="#ffe9c2" stop-opacity="0"/></radialGradient>
      <filter id="cp-sh" x="-20%" y="-40%" width="140%" height="190%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="${ink}" flood-opacity=".16"/></filter>
    </defs>
    <rect y="-64" width="1200" height="684" fill="url(#cp-sky)"/>
    <circle cx="1010" cy="96" r="110" fill="url(#cp-sun)"/><circle cx="1010" cy="96" r="34" fill="#ffd88a"/><circle cx="1000" cy="86" r="10" fill="#fff" opacity=".35"/>
    ${cloud(170, 86, 1.1)}${cloud(470, 54, .8)}${cloud(760, 104, 1)}${cloud(1120, 196, .7)}
    <path d="M0 250 70 200 130 232 210 170 300 226 380 186 470 232 560 176 660 228 740 182 830 230 930 172 1020 222 1110 186 1200 220V620H0z" fill="#e4e8f5"/>
    <g fill="#d4dbee">${[[40, 70, 30], [120, 92, 26], [250, 110, 22], [1080, 100, 34], [1150, 120, 24]].map(([x, h, w]) => `<rect x="${x}" y="${250 - h}" width="${w}" height="${h}"/>`).join('')}</g>
    <path d="M0 300C180 252 340 286 520 262S880 236 1200 270V620H0z" fill="url(#cp-hill1)"/>
    <path d="M0 360C200 318 420 350 640 322S1000 300 1200 330V620H0z" fill="url(#cp-hill2)"/>
    <path d="M1200 300C1090 330 1000 360 980 420S1010 520 1080 560 1200 600 1200 620z" fill="url(#cp-water)"/><path d="M1200 322C1110 348 1030 378 1012 424" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"/>
    <g fill="none" stroke-linecap="round">${paths.map(d => `<path d="${d}" stroke="#e9dcc2" stroke-width="22"/><path d="${d}" stroke="#fbf3e2" stroke-width="16"/><path d="${d}" stroke="#d8c8a8" stroke-width="1.6" stroke-dasharray="2 10"/>`).join('')}</g>
    ${[tree(60, 330, .9), pine(250, 300, .8), pine(268, 306, .65), tree(470, 360, .8), tree(690, 318, .75), pine(960, 300, .8), tree(1160, 450, .9), bush(240, 470), bush(520, 560, .9), bush(700, 600, .9), bush(980, 590), tree(40, 590, 1.1), tree(1150, 600, 1), bush(150, 560, .8), pine(660, 520, .7), tree(1000, 300, .6)].join('')}
    <g transform="translate(${PL[0]} ${PL[1]})"><ellipse rx="86" ry="28" fill="#f6ecd8"/><ellipse rx="86" ry="28" fill="none" stroke="#e5d6b8" stroke-width="2"/><ellipse rx="34" ry="11" fill="#bfe1f2"/><ellipse rx="34" ry="11" fill="none" stroke="#fff" stroke-width="3"/>
      <path d="M0-4v-26" stroke="#9fd0ea" stroke-width="3" stroke-linecap="round"/><path d="M0-30c-6 4-10 10-12 18M0-30c6 4 10 10 12 18" fill="none" stroke="#9fd0ea" stroke-width="2" stroke-linecap="round"/>
      ${lamp(-70, -4)}${lamp(70, -4)}
      <g transform="translate(0 -36)"><rect x="-2.5" y="-70" width="5" height="70" rx="1.5" fill="#7c5f42"/><circle cy="-72" r="4" fill="#7c5f42"/>
        <g transform="translate(3 -60)"><path d="M0-11H70l10 11-10 11H0z" fill="${ink}"/><text x="38" y="4" text-anchor="middle" font-family="Outfit, Manrope, sans-serif" font-size="11" font-weight="700" letter-spacing=".5" fill="#fff">START</text></g>
        <g transform="translate(-3 -34)"><path d="M0-11H-86l-10 11 10 11H0z" fill="#d6283c"/><text x="-46" y="4" text-anchor="middle" font-family="Outfit, Manrope, sans-serif" font-size="11" font-weight="700" letter-spacing=".5" fill="#fff">ANYWHERE</text></g></g></g>
    ${order}
    ${labels}
  </svg>`;
};
