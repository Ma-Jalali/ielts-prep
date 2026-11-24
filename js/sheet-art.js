/* Pictures for the top of a practice exercise (js/sheet.js). One small scene per topic; a lesson picks one with
   `illus: 'phone'`. Flat shapes with ink outlines, a light and a shade of each course colour, on a soft tinted card,
   so the 25 pictures read as one family. viewBox 320 × 220. */
(function () {
  const K = '#18213f', R = '#d6283c', R2 = '#a91d2f', G = '#f4a52e', G2 = '#d4860f', S = '#2b67d1', S2 = '#1e4ea6', T = '#1f9d8b', T2 = '#137a6b',
    W = '#fff', PK = '#fbd3d8', SB = '#cfdcf6', YL = '#fde3b3', MT = '#cdeee7', CR = '#fff7ea', GR = '#e7eaf2', WD = '#c98a52', WD2 = '#a86c3a';
  const o = (w = 2.4) => `stroke="${K}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;
  const O = o();
  const spark = (x, y, c = G, k = 1) => `<path d="M${x} ${y - 7 * k}q1.5 5.5 7 7-5.5 1.5-7 7-1.5-5.5-7-7 5.5-1.5 7-7z" fill="${c}"/>`;
  const plus = (x, y, c = G, k = 1) => `<path d="M${x} ${y - 6 * k}v${12 * k}M${x - 6 * k} ${y}h${12 * k}" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/>`;
  const dot = (x, y, c = S, r = 3.2) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
  const ring = (x, y, c = R, r = 5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="2.4"/>`;
  const cloud = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-26 8a10 10 0 0 1 4-19 14 14 0 0 1 26-6 11 11 0 0 1 20 7 9 9 0 0 1 2 18z" fill="${W}" stroke="${K}" stroke-width="2" stroke-linejoin="round"/></g>`;
  const leaf = (x, y, r = 0, c = T, k = 1) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${k})"><path d="M0 0c-2-12 6-22 18-22 2 12-6 22-18 22z" fill="${c}" stroke="${K}" stroke-width="2" stroke-linejoin="round"/><path d="M2-2 14-16" stroke="${K}" stroke-width="1.6" stroke-linecap="round"/></g>`;
  const plant = (x, y) => `<path d="M${x - 12} ${y - 22}h24l-4 22h-16z" fill="${R}" ${o(2)}/><path d="M${x - 14} ${y - 22}h28" ${o(2)}/>${leaf(x - 2, y - 24, -40, T, .9)}${leaf(x + 2, y - 24, 30, T2, .8)}${leaf(x, y - 26, -5, T, .7)}`;
  const bubble = (x, y, w, h, fill, tail = 'l') => `<path d="M${x + 10} ${y}h${w - 20}a10 10 0 0 1 10 10v${h - 20}a10 10 0 0 1-10 10${tail === 'l' ? `H${x + 44}l-20 12 6-12` : `H${x + w - 20}l10 12-26-12`}H${x + 10}a10 10 0 0 1-10-10V${y + 10}a10 10 0 0 1 10-10z" fill="${fill}" ${O}/>`;
  const lines = (x, y, w, n, gap = 8, c = K, op = .5) => [...Array(n)].map((_, i) => `<path d="M${x} ${y + i * gap}h${i === n - 1 && n > 1 ? w * .6 : w}" stroke="${c}" stroke-width="2.4" stroke-linecap="round" opacity="${op}"/>`).join('');
  const shadow = (x, y, rx) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${rx * .09 + 3}" fill="${K}" opacity=".09"/>`;
  const waves = (x, y, n = 3, c = S) => [...Array(n)].map((_, i) => `<path d="M${x + i * 7} ${y - 8 - i * 4}q${8 + i * 4} ${8 + i * 4} 0 ${16 + i * 8}" fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round" opacity="${1 - i * .25}"/>`).join('');
  const phone = (x, y, k = 1, c = SB) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="0" y="0" width="44" height="80" rx="9" fill="${K}" ${O}/><rect x="5" y="9" width="34" height="58" rx="4" fill="${c}"/><rect x="16" y="3.5" width="12" height="2.6" rx="1.3" fill="${GR}"/><circle cx="22" cy="73" r="3" fill="${GR}"/><path d="M11 20h22M11 28h16" stroke="${W}" stroke-width="2.4" stroke-linecap="round" opacity=".9"/><rect x="11" y="38" width="22" height="20" rx="4" fill="${W}" opacity=".8"/></g>`;
  const clip = (x, y, w, h, fill = W) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" ${O}/><rect x="${x + w / 2 - 16}" y="${y - 7}" width="32" height="15" rx="5" fill="${G}" ${O}/>`;
  const person = (x, y, shirt, hair = K, k = 1, skin = '#f2c9a5') => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-26 46c0-22 12-34 26-34s26 12 26 34z" fill="${shirt}" ${O}/><path d="M-6 12l6 10 6-10" fill="${W}" ${o(2)}/><circle cx="0" cy="-6" r="15" fill="${skin}" ${O}/><path d="M-15-8c0-12 8-18 15-18s16 5 15 18c-6-2-12-7-14-12-3 6-9 10-16 12z" fill="${hair}"/><circle cx="-5" cy="-4" r="1.8" fill="${K}"/><circle cx="5" cy="-4" r="1.8" fill="${K}"/><path d="M-4 3q4 3 8 0" fill="none" ${o(1.8)}/></g>`;

  const A = {
    grad: `${shadow(160, 186, 120)}
      <path d="M84 70 160 34l76 36z" fill="${CR}" ${O}/><circle cx="160" cy="56" r="7" fill="${G}" ${o(2)}/><rect x="84" y="70" width="152" height="10" fill="${GR}" ${O}/>
      ${[96, 124, 182, 210].map(x => `<rect x="${x}" y="80" width="14" height="72" fill="${W}" ${o(2)}/><path d="M${x + 4.5} 86v60M${x + 9.5} 86v60" stroke="${K}" stroke-width="1.2" opacity=".35"/>`).join('')}
      <rect x="148" y="104" width="24" height="48" rx="12" fill="${S}" ${O}/><path d="M78 152h164v10H78zM70 162h180v10H70z" fill="${GR}" ${O}/>
      <path d="M262 112 222 128l40 16 40-16z" fill="${K}" ${O}/><path d="M240 136v16c0 6 10 11 22 11s22-5 22-11v-16l-22 8z" fill="${S}" ${O}/><path d="M290 125v20" ${O}/><circle cx="290" cy="148" r="4" fill="${G}" ${o(2)}/>
      ${phone(34, 92, .75, PK)}${bubble(52, 40, 52, 32, W)}<path d="M64 56h28" stroke="${R}" stroke-width="2.6" stroke-linecap="round"/>
      ${cloud(250, 50, .8)}${spark(118, 30)}${dot(42, 186, T)}${plus(292, 92, R, .8)}`,
    headset: `${shadow(160, 188, 100)}
      <rect x="92" y="120" width="136" height="54" rx="8" fill="${WD}" ${O}/><path d="M92 134h136" stroke="${WD2}" stroke-width="2"/>
      <rect x="112" y="64" width="96" height="62" rx="8" fill="${K}" ${O}/><rect x="119" y="71" width="82" height="46" rx="4" fill="${SB}"/><path d="M128 82h40M128 92h56M128 102h30" stroke="${W}" stroke-width="3" stroke-linecap="round"/><path d="M150 126h20v12h-20z" fill="${GR}" ${o(2)}/>
      <path d="M44 120v-14a40 40 0 0 1 80 0v14" fill="none" stroke="${K}" stroke-width="6" stroke-linecap="round"/><rect x="34" y="112" width="20" height="32" rx="8" fill="${R}" ${O}/><rect x="114" y="112" width="20" height="32" rx="8" fill="${R}" ${O}/>
      <path d="M124 140q0 18-28 20" fill="none" ${O}/><rect x="84" y="155" width="16" height="10" rx="5" fill="${K}"/>
      ${bubble(214, 26, 74, 44, W, 'l')}${dot(236, 48, R)}${dot(251, 48, G)}${dot(266, 48, S)}${bubble(244, 82, 50, 32, PK, 'r')}<path d="M256 98h26" stroke="${K}" stroke-width="2.4" stroke-linecap="round" opacity=".5"/>
      <rect x="240" y="134" width="40" height="40" rx="6" fill="${W}" ${O}/><path d="M248 146h24M248 154h24M248 162h14" stroke="${K}" stroke-width="2" stroke-linecap="round" opacity=".45"/>${spark(62, 46)}${plus(196, 36, R, .8)}${dot(300, 136, T)}`,
    globe: `${shadow(150, 190, 70)}
      <path d="M150 176v-14M120 184c0-12 14-18 30-18s30 6 30 18z" fill="${WD}" ${O}/><path d="M92 100a58 58 0 0 0 116 0" fill="none" stroke="${G}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="150" cy="100" r="50" fill="${SB}" ${O}/><path d="M118 70c12 4 14 16 7 23s5 17 15 14 12 12 7 22M160 56c-5 12 5 17 15 17s12 12 5 20M178 118c6-2 12 4 10 12" fill="none" stroke="${T}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M108 78a50 50 0 0 1 22-24" stroke="${W}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
      <path d="M56 68q50-60 152-34" fill="none" stroke="${K}" stroke-width="2.2" stroke-dasharray="2 7" stroke-linecap="round"/><g transform="translate(214 36) rotate(18)"><path d="M-22 0h30l14-6c5-2 8 4 2 7L10 6l-6 12h-7l2-11-13 1-5 5h-5l3-7-3-7h5z" fill="${W}" ${o(2)}/></g>
      <rect x="236" y="120" width="52" height="58" rx="8" fill="${R}" ${O}/><path d="M250 120v-10a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v10" fill="none" ${O}/><path d="M236 138h52" stroke="${R2}" stroke-width="2.4"/><circle cx="262" cy="154" r="9" fill="${W}" ${o(2)}/><path d="M258 154l3 3 6-6" fill="none" stroke="${T}" stroke-width="2.4" stroke-linecap="round"/>
      ${person(54, 142, G, K, .8)}${cloud(262, 58, .7)}${spark(36, 54, R)}${dot(110, 34, G)}`,
    sport: `${shadow(160, 188, 120)}
      <rect x="40" y="140" width="240" height="38" rx="6" fill="${MT}" ${O}/><path d="M160 140v38M40 159h240" stroke="${W}" stroke-width="2.4"/>
      <circle cx="96" cy="94" r="34" fill="${G}" ${O}/><path d="M66 80c16 7 44 7 60 0M66 108c16-7 44-7 60 0M96 60v68" fill="none" ${O}/><path d="M76 72a26 26 0 0 1 14-8" stroke="${W}" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".8"/>
      <g transform="rotate(-24 210 92)"><ellipse cx="210" cy="72" rx="26" ry="32" fill="${W}" ${O}/><path d="M190 60h40M188 72h44M190 84h40M200 44v56M210 40v64M220 44v56" stroke="${K}" stroke-width="1.2" opacity=".45"/><rect x="205" y="104" width="10" height="44" rx="4" fill="${R}" ${O}/></g>
      <circle cx="248" cy="132" r="10" fill="#d7e85a" ${O}/><path d="M240 128q8 4 16 0" fill="none" stroke="${W}" stroke-width="2"/>
      <rect x="132" y="118" width="54" height="10" rx="5" fill="${SB}" ${O}/><rect x="126" y="108" width="12" height="30" rx="4" fill="${K}"/><rect x="180" y="108" width="12" height="30" rx="4" fill="${K}"/>
      <path d="M268 50h26v16l-6 6h-14l-6-6z" fill="${S}" ${O}/><path d="M276 50v-6h10v6" fill="none" ${o(2)}/>${spark(40, 48)}${plus(150, 40, R, .8)}${dot(296, 104, T)}`,
    home: `${shadow(140, 188, 110)}
      <path d="M200 182V112h56v70" fill="${GR}" ${O}/><path d="M192 116l36-26 36 26" fill="${S}" ${O}/><rect x="214" y="132" width="16" height="16" rx="2" fill="${YL}" ${o(2)}/><rect x="236" y="132" width="12" height="16" rx="2" fill="${YL}" ${o(2)}/>
      <path d="M60 92 130 40l70 52" fill="${R}" ${O}/><path d="M72 86v96h116V86" fill="${CR}" ${O}/><path d="M60 92 130 40l70 52" fill="none" stroke="${R2}" stroke-width="2.4" stroke-linejoin="round" transform="translate(0 8)" opacity=".5"/>
      <rect x="114" y="128" width="32" height="54" rx="4" fill="${S}" ${O}/><circle cx="139" cy="156" r="2.6" fill="${G}"/>
      <rect x="84" y="104" width="22" height="22" rx="3" fill="${SB}" ${o(2)}/><path d="M95 104v22M84 115h22" stroke="${K}" stroke-width="1.8"/><rect x="154" y="104" width="22" height="22" rx="3" fill="${SB}" ${o(2)}/><path d="M165 104v22M154 115h22" stroke="${K}" stroke-width="1.8"/>
      <path d="M160 58V40h14v28" fill="${WD}" ${O}/><path d="M164 32c4-6 10-6 14-2" fill="none" stroke="${GR}" stroke-width="4" stroke-linecap="round"/>
      ${plant(48, 184)}<g transform="translate(268 68) rotate(-30)"><circle cx="0" cy="0" r="15" fill="${G}" ${O}/><circle cx="0" cy="0" r="5" fill="${W}" ${o(2)}/><path d="M15 0h30M37 0v9M45 0v7" ${O}/></g>${cloud(84, 40, .7)}${spark(292, 128, R)}`,
    tv: `${shadow(150, 188, 110)}
      <rect x="64" y="152" width="172" height="26" rx="6" fill="${WD}" ${O}/><path d="M80 178v8M220 178v8" ${O}/>
      <path d="M128 52l22 20 22-20" fill="none" ${O}/><circle cx="128" cy="50" r="4" fill="${R}" ${o(2)}/><circle cx="172" cy="50" r="4" fill="${R}" ${o(2)}/>
      <rect x="72" y="70" width="156" height="82" rx="14" fill="${K}" ${O}/><rect x="84" y="80" width="108" height="62" rx="9" fill="${SB}"/>
      <path d="M84 120l26-22 20 16 18-12 44 30v10H84z" fill="${T}" opacity=".85"/><circle cx="168" cy="96" r="8" fill="${G}"/><path d="M90 90l14-6" stroke="${W}" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      <circle cx="210" cy="92" r="7" fill="${G}" ${o(2)}/><circle cx="210" cy="114" r="7" fill="${R}" ${o(2)}/><path d="M204 130h12M204 136h12" stroke="${W}" stroke-width="2" stroke-linecap="round" opacity=".6"/>
      <path d="M100 98l-6 8 8 2-4 10" fill="none" stroke="${R}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <g transform="translate(262 96) rotate(40)"><rect x="-6" y="0" width="12" height="54" rx="5" fill="${G}" ${O}/><path d="M-14 0a14 14 0 1 1 28 0l-6 6h-16z" fill="${GR}" ${O}/><rect x="-5" y="-14" width="10" height="10" fill="var(--xs-soft)"/></g>
      ${clip(22, 66, 40, 54)}<path d="M30 84h24M30 94h24M30 104h16" stroke="${K}" stroke-width="2" stroke-linecap="round" opacity=".45"/>${spark(258, 40)}${plus(46, 158, S, .8)}`,
    food: `${shadow(160, 186, 110)}
      <ellipse cx="160" cy="150" rx="86" ry="18" fill="${GR}" ${O}/><path d="M74 150a86 52 0 0 0 172 0" fill="${W}" ${O}/>
      <path d="M100 142c10-24 40-30 60-20 18-14 46-6 56 18" fill="${YL}" ${o(2)}/><circle cx="128" cy="132" r="11" fill="${R}" ${o(2)}/><circle cx="160" cy="124" r="9" fill="${T}" ${o(2)}/><circle cx="190" cy="132" r="10" fill="${G}" ${o(2)}/><circle cx="148" cy="140" r="6" fill="${T2}"/>
      <path d="M120 104c-4-8 4-12 0-20M160 98c-4-8 4-12 0-20M200 104c-4-8 4-12 0-20" fill="none" stroke="${K}" stroke-width="2.2" stroke-linecap="round" opacity=".35"/>
      <path d="M44 70v40m-7-40v16a7 7 0 0 0 14 0V70M44 110v66" fill="none" ${O}/><path d="M276 70c13 7 13 38 0 44v62" fill="${GR}" ${O}/>
      ${clip(236, 22, 52, 62)}<path d="M246 42l4 4 7-7M246 58l4 4 7-7" fill="none" stroke="${T}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M262 44h16M262 60h16" stroke="${K}" stroke-width="2" stroke-linecap="round" opacity=".45"/>
      ${leaf(70, 50, -30, T)}${spark(110, 40)}${dot(300, 110, R)}${plus(36, 186, S, .7)}`,
    chat: `${shadow(160, 190, 120)}
      ${person(92, 136, S, K, 1.05)}${person(232, 136, R, WD2, 1.05)}<rect x="44" y="176" width="232" height="10" rx="5" fill="${WD}" ${O}/>
      ${bubble(34, 30, 98, 52, W)}${lines(50, 48, 64, 3, 9)}${bubble(186, 22, 98, 48, PK, 'r')}${lines(202, 40, 62, 2, 10)}
      <rect x="150" y="104" width="20" height="36" rx="10" fill="${K}" ${O}/><path d="M142 128a18 18 0 0 0 36 0M160 146v12M150 160h20" fill="none" ${O}/><path d="M155 112h10M155 120h10" stroke="${W}" stroke-width="1.8" opacity=".6"/>
      ${spark(160, 60)}${dot(28, 120, G)}${plus(296, 110, T, .8)}`,
    music: `${shadow(160, 190, 120)}
      <path d="M40 182 98 92l58 90z" fill="${R}" ${O}/><path d="M98 92v-22" ${O}/><path d="M98 70l18 7-18 7z" fill="${G}" ${o(2)}/><path d="M86 182l12-30 12 30" fill="${R2}" ${o(2)}/>
      <path d="M150 182l50-70 50 70z" fill="${S}" ${O}/><path d="M200 112v-20" ${O}/><path d="M200 92l18 7-18 7z" fill="${T}" ${o(2)}/><path d="M190 182l10-24 10 24" fill="${S2}" ${o(2)}/>
      <path d="M40 110q30-18 60 0t60 0 60 0 60 0" fill="none" stroke="${K}" stroke-width="2"/>${[58, 92, 126, 160, 194, 228, 262].map((x, i) => `<path d="M${x} ${106 + (i % 2) * 6}l5 12-10 0z" fill="${[R, G, S, T][i % 4]}" ${o(1.6)}/>`).join('')}
      <path d="M226 54V30l40-8v24" fill="none" ${O}/><ellipse cx="218" cy="54" rx="9" ry="7" fill="${K}"/><ellipse cx="258" cy="46" rx="9" ry="7" fill="${K}"/><path d="M226 38l40-8" ${O}/>
      <path d="M120 30v20" ${O}/><ellipse cx="112" cy="50" rx="9" ry="7" fill="${R}" ${O}/><path d="M120 30q10 4 8 14" fill="none" ${O}/>${spark(44, 46)}${spark(296, 96, R, .8)}${dot(170, 34, G)}`,
    survey: `${shadow(150, 188, 100)}
      ${clip(88, 34, 104, 140)}<path d="M100 46h80" stroke="${K}" stroke-width="1" opacity="0"/>
      ${[66, 96, 126].map((y, i) => `<rect x="102" y="${y}" width="16" height="16" rx="4" fill="${i < 2 ? T : W}" ${o(2)}/>${i < 2 ? `<path d="M106 ${y + 8}l3 3 6-6" fill="none" stroke="${W}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>` : ''}<path d="M128 ${y + 5}h48M128 ${y + 12}h30" stroke="${K}" stroke-width="2.2" stroke-linecap="round" opacity=".45"/>`).join('')}
      <path d="M102 158h70" stroke="${K}" stroke-width="2.2" stroke-linecap="round" opacity=".3"/>
      <g transform="translate(214 160) rotate(-60)"><rect x="0" y="-8" width="96" height="16" rx="3" fill="${G}" ${O}/><path d="M0-8l-16 8 16 8z" fill="${CR}" ${o(2)}/><path d="M-11-2.5v5l-5-2.5z" fill="${K}"/><rect x="82" y="-8" width="14" height="16" rx="3" fill="${R}" ${o(2)}/></g>
      <rect x="226" y="64" width="62" height="44" rx="8" fill="${W}" ${O}/><path d="M236 98V84M248 98V76M260 98V88M272 98V72" stroke="${S}" stroke-width="6" stroke-linecap="round"/>
      <circle cx="54" cy="118" r="24" fill="${W}" ${O}/><path d="M54 118V94a24 24 0 0 1 22 14z" fill="${R}" ${o(2)}/><path d="M54 118l22-10a24 24 0 0 1-8 26z" fill="${G}" ${o(2)}/>${spark(60, 54)}${plus(270, 140, T, .8)}${dot(300, 46, R)}`,
    camera: `${shadow(160, 188, 110)}
      <rect x="62" y="70" width="176" height="104" rx="18" fill="${K}" ${O}/><path d="M104 70l12-22h56l12 22" fill="${GR}" ${O}/><rect x="62" y="96" width="176" height="52" fill="${WD}" opacity=".9"/><path d="M62 96h176M62 148h176" ${O}/>
      <circle cx="150" cy="122" r="40" fill="${W}" ${O}/><circle cx="150" cy="122" r="28" fill="${S2}" ${O}/><circle cx="150" cy="122" r="16" fill="${S}"/><circle cx="140" cy="112" r="6" fill="${W}" opacity=".9"/><circle cx="160" cy="132" r="3" fill="${W}" opacity=".6"/>
      <rect x="200" y="80" width="26" height="12" rx="4" fill="${G}" ${o(2)}/><circle cx="84" cy="84" r="6" fill="${R}" ${o(2)}/><rect x="186" y="56" width="22" height="14" rx="3" fill="${R}" ${o(2)}/>
      <rect x="238" y="24" width="58" height="64" rx="4" fill="${W}" ${O} transform="rotate(10 267 56)"/><rect x="244" y="30" width="46" height="40" fill="${MT}" transform="rotate(10 267 56)"/><path d="M246 66l12-14 10 8 8-6 12 12" fill="none" stroke="${T2}" stroke-width="2.4" stroke-linejoin="round" transform="rotate(10 267 56)"/>
      ${spark(44, 52)}${spark(286, 150, R, .8)}${dot(36, 150, T)}`,
    conference: `${shadow(160, 190, 120)}
      <rect x="40" y="60" width="122" height="84" rx="8" fill="${W}" ${O}/><rect x="40" y="60" width="122" height="14" rx="7" fill="${S}" ${O}/><path d="M56 90h60M56 102h88M56 114h44" stroke="${K}" stroke-width="2.4" stroke-linecap="round" opacity=".45"/><path d="M128 124l10-14 10 8" fill="none" stroke="${R}" stroke-width="3" stroke-linecap="round"/>
      <path d="M100 144v38M80 182h40" ${O}/>
      <path d="M196 24l30 40 30-40" fill="none" stroke="${R}" stroke-width="6" stroke-linecap="round"/><rect x="190" y="60" width="72" height="92" rx="10" fill="${W}" ${O}/><rect x="190" y="60" width="72" height="22" rx="10" fill="${R}" ${O}/><rect x="216" y="56" width="20" height="10" rx="3" fill="${GR}" ${o(2)}/>
      ${person(226, 110, S, K, .55)}<path d="M204 134h44M210 142h32" stroke="${K}" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>
      <rect x="250" y="148" width="50" height="40" rx="6" fill="${W}" ${O}/><path d="M250 160h50M262 142v12M288 142v12" ${O}/><circle cx="275" cy="174" r="6" fill="${G}" ${o(2)}/>${spark(176, 40)}${plus(30, 40, T, .8)}${dot(36, 170, G)}`,
    boat: `<path d="M20 160q20-10 40 0t40 0 40 0 40 0 40 0 40 0 40 0" fill="none" stroke="${S}" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M86 140h148l-18 28H104z" fill="${R}" ${O}/><path d="M92 150h136" stroke="${R2}" stroke-width="3"/>${[116, 140, 164, 188].map(x => `<circle cx="${x}" cy="156" r="4" fill="${W}" ${o(1.8)}/>`).join('')}
      <path d="M164 140V36l58 82h-58" fill="${W}" ${O}/><path d="M158 50l-40 74h40" fill="${SB}" ${O}/><path d="M164 36v104" stroke="${K}" stroke-width="3.4"/><path d="M164 36l22-8v14z" fill="${G}" ${o(2)}/>
      <path d="M28 186q20-10 40 0t40 0 40 0 40 0 40 0 40 0" fill="none" stroke="${S}" stroke-width="2.6" stroke-linecap="round" opacity=".5"/>
      <circle cx="268" cy="56" r="20" fill="${G}" ${O}/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<path d="M${268 + Math.cos(a * Math.PI / 180) * 26} ${56 + Math.sin(a * Math.PI / 180) * 26}l${Math.cos(a * Math.PI / 180) * 7} ${Math.sin(a * Math.PI / 180) * 7}" stroke="${G}" stroke-width="2.6" stroke-linecap="round"/>`).join('')}
      <path d="M40 60q8-8 16 0q8-8 16 0" fill="none" stroke="${K}" stroke-width="2.2" stroke-linecap="round"/><path d="M82 40q6-6 12 0q6-6 12 0" fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round"/>
      <path d="M262 150l12-22 12 22z" fill="${T}" ${o(2)}/><path d="M274 128v-8" ${o(2)}/>${cloud(70, 98, .6)}`,
    bus: `${shadow(160, 184, 130)}<path d="M20 176h280" ${O} opacity=".4"/>
      <rect x="44" y="64" width="216" height="98" rx="18" fill="${R}" ${O}/><path d="M44 88h216" stroke="${R2}" stroke-width="2.4"/><rect x="58" y="72" width="80" height="10" rx="5" fill="${YL}" ${o(2)}/><path d="M66 77h60" stroke="${K}" stroke-width="2" stroke-linecap="round" opacity=".5"/>
      ${[58, 100, 142, 184].map(x => `<rect x="${x}" y="96" width="34" height="30" rx="5" fill="${SB}" ${o(2)}/><path d="M${x + 6} ${102}l8-6" stroke="${W}" stroke-width="2.4" stroke-linecap="round"/>`).join('')}
      <rect x="226" y="96" width="24" height="54" rx="4" fill="${SB}" ${o(2)}/><path d="M238 96v54" stroke="${K}" stroke-width="1.6"/><path d="M44 138h216" ${O}/><rect x="254" y="138" width="10" height="10" rx="3" fill="${G}" ${o(2)}/>
      ${[92, 214].map(x => `<circle cx="${x}" cy="164" r="17" fill="${K}"/><circle cx="${x}" cy="164" r="7" fill="${GR}"/>`).join('')}
      <path d="M270 40v130" ${O}/><rect x="256" y="28" width="28" height="28" rx="14" fill="${S}" ${O}/><path d="M264 38h12v8h-12zM266 46v4M274 46v4" stroke="${W}" stroke-width="2" fill="none"/>
      ${cloud(80, 34, .7)}${spark(170, 34)}${dot(298, 120, T)}`,
    books: `${shadow(160, 186, 120)}
      <rect x="56" y="148" width="150" height="28" rx="5" fill="${S}" ${O}/><path d="M70 148v28M190 148v28" stroke="${W}" stroke-width="3" opacity=".7"/>
      <rect x="68" y="120" width="132" height="28" rx="5" fill="${G}" ${O}/><path d="M84 120v28M184 120v28" stroke="${W}" stroke-width="3" opacity=".7"/>
      <rect x="60" y="92" width="126" height="28" rx="5" fill="${R}" ${O}/><path d="M76 92v28M170 92v28" stroke="${W}" stroke-width="3" opacity=".7"/>
      <path d="M96 70q22-12 44 0 22-12 44 0v22q-22-12-44 0-22-12-44 0z" fill="${W}" ${O}/><path d="M140 70v22" ${O}/><path d="M104 76h26M150 76h26" stroke="${K}" stroke-width="1.8" stroke-linecap="round" opacity=".45"/>
      <circle cx="244" cy="146" r="14" fill="${SB}" ${O}/><circle cx="276" cy="146" r="14" fill="${SB}" ${O}/><path d="M258 146h4M230 140l-10-6M290 140l10-6" ${O}/>
      <rect x="222" y="56" width="36" height="52" rx="4" fill="${T}" ${O}/><path d="M222 66h36" stroke="${T2}" stroke-width="2.4"/><rect x="232" y="76" width="16" height="22" rx="2" fill="${W}" opacity=".9"/>
      <path d="M266 56h26v52h-26z" fill="${PK}" ${O}/><path d="M274 66h10M274 74h10" stroke="${K}" stroke-width="2" opacity=".4"/>${plant(40, 186)}${spark(120, 44)}${plus(300, 40, R, .8)}`,
    arts: `${shadow(160, 188, 110)}
      <path d="M48 70 72 56l10 8M48 70l4 108M72 56l18 122" fill="none" stroke="${WD2}" stroke-width="5" stroke-linecap="round"/>
      <rect x="40" y="64" width="84" height="66" rx="4" fill="${W}" ${O}/><path d="M48 118c12-24 22-34 34-20 10-18 22-22 34 4v16H48z" fill="${MT}"/><circle cx="104" cy="82" r="8" fill="${G}"/><path d="M40 130h84" ${O}/>
      <path d="M164 46c-36 0-62 24-62 54 0 22 22 30 34 22 10-6 18 2 16 12-2 12 6 16 18 16 34 0 58-26 58-54s-24-50-64-50z" fill="${CR}" ${O}/>
      <circle cx="138" cy="84" r="9" fill="${R}" ${o(2)}/><circle cx="164" cy="68" r="9" fill="${G}" ${o(2)}/><circle cx="194" cy="76" r="9" fill="${S}" ${o(2)}/><circle cx="204" cy="106" r="9" fill="${T}" ${o(2)}/><circle cx="182" cy="128" r="7" fill="${PK}" ${o(2)}/>
      <path d="M268 30l-46 72" stroke="${K}" stroke-width="7" stroke-linecap="round"/><path d="M268 30l-46 72" stroke="${WD}" stroke-width="3.4" stroke-linecap="round"/><path d="M222 102l-8 16 15-8z" fill="${R}" ${o(2)}/>
      <g transform="translate(262 140)"><path d="M-24-20h48v16c0 16-10 28-24 28s-24-12-24-28z" fill="${W}" ${O}/><circle cx="-9" cy="-6" r="3" fill="${K}"/><circle cx="9" cy="-6" r="3" fill="${K}"/><path d="M-9 8q9 8 18 0" fill="none" ${o(2)}/></g>
      ${spark(110, 40)}${plus(296, 76, R, .8)}${dot(36, 182, T)}`,
    map: `${shadow(160, 190, 130)}
      <path d="M38 52l78-22 88 22 78-22v134l-78 22-88-22-78 22z" fill="${CR}" ${O}/><path d="M116 30v134M204 52v134" stroke="${K}" stroke-width="2" opacity=".35"/>
      <path d="M38 118c40-10 50-40 92-36s50 40 90 30 40-34 62-40" fill="none" stroke="${S}" stroke-width="10" opacity=".25" stroke-linecap="round"/><path d="M38 118c40-10 50-40 92-36s50 40 90 30 40-34 62-40" fill="none" stroke="${S}" stroke-width="2.4" stroke-dasharray="1 8" stroke-linecap="round"/>
      <rect x="64" y="138" width="34" height="22" rx="3" fill="${MT}" ${o(2)}/><rect x="146" y="120" width="26" height="18" rx="3" fill="${YL}" ${o(2)}/><rect x="222" y="138" width="40" height="22" rx="3" fill="${SB}" ${o(2)}/><circle cx="86" cy="70" r="12" fill="${MT}" ${o(2)}/><circle cx="244" cy="76" r="9" fill="${MT}" ${o(2)}/>
      <path d="M216 74c0-16 24-16 24 0 0 14-12 28-12 28s-12-14-12-28z" fill="${R}" ${O}/><circle cx="228" cy="74" r="5" fill="${W}"/><path d="M58 112c0-10 16-10 16 0 0 9-8 18-8 18s-8-9-8-18z" fill="${T}" ${o(2)}/>
      <g transform="translate(286 170)"><circle r="18" fill="${W}" ${O}/><path d="M0-12l5 12-5 12-5-12z" fill="${R}" ${o(1.6)}/><path d="M0 0l5 0" stroke="none"/></g>${spark(30, 40)}${dot(160, 30, G)}`,
    suitcase: `${shadow(160, 190, 110)}
      <rect x="92" y="70" width="124" height="106" rx="16" fill="${G}" ${O}/><path d="M130 70V52a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v18" fill="none" ${O}/><path d="M124 70v106M184 70v106" stroke="${G2}" stroke-width="6"/><path d="M124 70v106M184 70v106" ${O} opacity=".5"/>
      <rect x="100" y="92" width="40" height="26" rx="5" fill="${R}" ${o(2)} transform="rotate(-10 120 105)"/><path d="M108 104h22" stroke="${W}" stroke-width="2.4" stroke-linecap="round" transform="rotate(-10 120 105)"/>
      <circle cx="196" cy="140" r="12" fill="${S}" ${o(2)}/><path d="M190 140l4 4 8-8" fill="none" stroke="${W}" stroke-width="2.4" stroke-linecap="round"/><circle cx="110" cy="182" r="6" fill="${K}"/><circle cx="198" cy="182" r="6" fill="${K}"/>
      <g transform="translate(244 112) rotate(12)"><rect x="0" y="0" width="58" height="34" rx="6" fill="${W}" ${O}/><path d="M18 0v34" stroke="${K}" stroke-width="2" stroke-dasharray="3 4"/><path d="M26 10h24M26 18h18M26 26h20" stroke="${K}" stroke-width="2" stroke-linecap="round" opacity=".45"/><circle cx="9" cy="17" r="5" fill="${R}"/></g>
      <g transform="translate(50 60) rotate(-16)"><path d="M-22 0h30l14-6c5-2 8 4 2 7L10 6l-6 12h-7l2-11-13 1-5 5h-5l3-7-3-7h5z" fill="${W}" ${o(2)}/></g><path d="M70 82q40 30 22-20" fill="none" stroke="${K}" stroke-width="2" stroke-dasharray="2 6" stroke-linecap="round"/>
      ${cloud(256, 50, .75)}${spark(40, 150, R)}${dot(296, 168, T)}`,
    mountain: `<rect x="18" y="16" width="284" height="188" rx="44" fill="${SB}" opacity=".5"/>
      <circle cx="232" cy="62" r="22" fill="${G}" ${O}/>${cloud(100, 52, .8)}
      <path d="M18 186l70-104 40 56 30-40 74 88z" fill="${MT}" ${O}/><path d="M88 82l-16 24 10 2 6-10 10 8z" fill="${W}" ${o(2)}/><path d="M158 98l-12 16 9 2 4-7 7 4z" fill="${W}" ${o(2)}/>
      <path d="M150 186l60-80 60 80z" fill="${T}" ${O}/><path d="M210 106l-12 16 8 2 4-6 6 4z" fill="${W}" ${o(2)}/>
      <path d="M40 186h40v-20h10v-12h20v12h10v20" fill="${WD}" ${o(2)}/><path d="M40 166h80M50 186v-14M70 186v-14M100 186v-14" stroke="${K}" stroke-width="1.6" opacity=".5"/>
      <g transform="translate(262 164)"><path d="M-14 22v-26c0-10 6-14 14-14s14 4 14 14v26" fill="${W}" ${O}/><circle cx="0" cy="-22" r="7" fill="${W}" ${O}/><path d="M-7-22c-2 6 2 8 0 12M7-22c2 6-2 8 0 12" stroke="${K}" stroke-width="1.6" fill="none"/><path d="M-14 22h28" ${O}/></g>
      <path d="M18 186h284" ${O}/>${spark(282, 112, R, .8)}${dot(60, 40, R)}`,
    robot: `${shadow(160, 190, 90)}
      <path d="M160 26v18" ${O}/><circle cx="160" cy="22" r="7" fill="${R}" ${O}/><rect x="114" y="44" width="92" height="66" rx="18" fill="${SB}" ${O}/><rect x="126" y="56" width="68" height="36" rx="10" fill="${K}"/>
      <circle cx="146" cy="74" r="8" fill="${T}"/><circle cx="174" cy="74" r="8" fill="${T}"/><circle cx="148" cy="72" r="2.6" fill="${W}"/><circle cx="176" cy="72" r="2.6" fill="${W}"/><path d="M148 100h24" ${O}/>
      <rect x="104" y="62" width="10" height="24" rx="4" fill="${G}" ${o(2)}/><rect x="206" y="62" width="10" height="24" rx="4" fill="${G}" ${o(2)}/>
      <rect x="128" y="110" width="64" height="14" fill="${GR}" ${O}/><rect x="118" y="124" width="84" height="52" rx="12" fill="${R}" ${O}/><rect x="140" y="134" width="40" height="22" rx="5" fill="${W}" ${o(2)}/><circle cx="152" cy="145" r="4" fill="${G}"/><circle cx="168" cy="145" r="4" fill="${S}"/>
      <path d="M118 140l-26-16M202 140l26-16" stroke="${K}" stroke-width="8" stroke-linecap="round"/><path d="M118 140l-26-16M202 140l26-16" stroke="${GR}" stroke-width="4" stroke-linecap="round"/><circle cx="88" cy="120" r="8" fill="${G}" ${O}/><circle cx="232" cy="120" r="8" fill="${G}" ${O}/>
      <rect x="132" y="176" width="20" height="12" rx="4" fill="${K}"/><rect x="168" y="176" width="20" height="12" rx="4" fill="${K}"/>
      <g transform="translate(262 60)"><circle r="18" fill="${W}" ${O}/><path d="M-6-6l12 12M6-6l-12 12" stroke="${S}" stroke-width="3" stroke-linecap="round" opacity="0"/><path d="M0-10v20M-10 0h20" stroke="${S}" stroke-width="3" stroke-linecap="round"/><circle r="6" fill="${S}"/></g>
      ${spark(56, 48)}${plus(282, 150, R, .8)}${dot(46, 160, T)}`,
    radio: `${shadow(150, 188, 110)}
      <path d="M94 74 196 34" ${O}/><circle cx="196" cy="34" r="4" fill="${R}" ${o(2)}/>
      <rect x="54" y="74" width="192" height="104" rx="18" fill="${T}" ${O}/><rect x="54" y="74" width="192" height="20" rx="10" fill="${T2}" opacity=".6"/><path d="M80 74v-10h140v10" fill="none" ${O}/>
      <circle cx="104" cy="132" r="32" fill="${W}" ${O}/>${[0, 1, 2, 3, 4].map(i => `<circle cx="104" cy="132" r="${6 + i * 5}" fill="none" stroke="${K}" stroke-width="1.4" opacity=".35"/>`).join('')}<circle cx="104" cy="132" r="5" fill="${K}"/>
      <rect x="152" y="104" width="76" height="26" rx="6" fill="${YL}" ${o(2)}/>${[0, 1, 2, 3, 4, 5, 6].map(i => `<path d="M${160 + i * 10} 112v${i % 2 ? 6 : 10}" stroke="${K}" stroke-width="1.4" opacity=".6"/>`).join('')}<path d="M186 106v22" stroke="${R}" stroke-width="2.6"/>
      <circle cx="168" cy="154" r="9" fill="${G}" ${O}/><circle cx="208" cy="154" r="9" fill="${R}" ${O}/>
      <g transform="translate(256 56) rotate(-8)"><rect x="0" y="0" width="52" height="32" rx="6" fill="${S}" ${O}/><rect x="0" y="8" width="52" height="7" fill="${K}"/><path d="M8 24h18" stroke="${W}" stroke-width="2.4" stroke-linecap="round"/><circle cx="42" cy="24" r="3.4" fill="${G}"/></g>
      ${waves(254, 140, 3, R)}${spark(40, 52)}${dot(300, 180, T)}`,
    health: `${shadow(160, 190, 110)}
      <rect x="196" y="74" width="92" height="104" rx="10" fill="${W}" ${O}/><path d="M196 96h92" ${O}/><rect x="230" y="62" width="24" height="16" rx="4" fill="${GR}" ${o(2)}/><path d="M210 112h44M210 124h60M210 136h50M210 148h36" stroke="${K}" stroke-width="2.2" stroke-linecap="round" opacity=".4"/><path d="M212 84h10M217 79v10" stroke="${R}" stroke-width="3" stroke-linecap="round"/>
      <path d="M118 178s-70-38-70-86a34 34 0 0 1 70-10 34 34 0 0 1 70 10c0 48-70 86-70 86z" fill="${PK}" ${O}/><rect x="104" y="88" width="28" height="64" rx="5" fill="${R}" ${o(2)}/><rect x="86" y="106" width="64" height="28" rx="5" fill="${R}" ${o(2)}/>
      <path d="M62 82a22 22 0 0 1 20-18" stroke="${W}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>
      <path d="M22 60h26l9-18 13 34 9-16h20" fill="none" stroke="${S}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <g transform="translate(272 30)"><path d="M-14 10c0-14 6-22 14-22s14 8 14 22" fill="none" ${O}/><circle cx="-14" cy="12" r="4" fill="${K}"/><circle cx="14" cy="12" r="4" fill="${K}"/></g>
      <rect x="40" y="160" width="40" height="18" rx="9" fill="${G}" ${o(2)}/><path d="M60 160v18" ${o(2)}/>${spark(170, 36)}${dot(300, 120, T)}`,
    eco: `<rect x="18" y="16" width="284" height="188" rx="44" fill="${MT}" opacity=".45"/>
      <circle cx="244" cy="58" r="20" fill="${G}" ${O}/>
      <path d="M18 172q70-30 140-6t144-10v44H18z" fill="${T}" opacity=".35"/>
      <path d="M96 182V120" stroke="${WD2}" stroke-width="8" stroke-linecap="round"/><path d="M96 182V120" ${O} opacity=".6"/><circle cx="96" cy="96" r="38" fill="${T}" ${O}/><circle cx="76" cy="84" r="20" fill="${T2}" opacity=".5"/><circle cx="114" cy="80" r="12" fill="${MT}" opacity=".7"/>
      <path d="M150 182c-6-40 26-66 84-64 4 58-30 84-74 70" fill="${MT}" ${O}/><path d="M146 190c18-26 44-48 72-60" fill="none" ${O}/><path d="M178 160l-4-18M200 146l-2-16M164 174l-16-4" ${O} fill="none"/>
      <g transform="translate(266 138)"><rect x="-22" y="-6" width="18" height="30" rx="8" fill="${K}"/><rect x="4" y="-6" width="18" height="30" rx="8" fill="${K}"/><rect x="-6" y="0" width="12" height="10" fill="${K}"/><circle cx="-13" cy="20" r="6" fill="${S}"/><circle cx="13" cy="20" r="6" fill="${S}"/></g>
      <path d="M200 40q6-6 12 0q6-6 12 0" fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round"/>${leaf(40, 60, -20, T)}${spark(160, 46, R, .8)}`,
    people: `${shadow(160, 190, 130)}
      ${person(74, 140, S, WD2, 1)}${person(246, 140, T, K, 1)}${person(160, 126, R, K, 1.2)}
      <path d="M126 44h68a10 10 0 0 1 10 10v18a10 10 0 0 1-10 10h-24l-10 10-10-10h-24a10 10 0 0 1-10-10V54a10 10 0 0 1 10-10z" fill="${W}" ${O}/><path d="M160 72s-14-8-14-16a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 8-14 16-14 16z" fill="${R}"/>
      <path d="M34 60l8-10 6 8 8-12 6 8" fill="none" stroke="${G}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      ${[[40, 40, R], [270, 48, G], [292, 92, S], [26, 108, T]].map(([x, y, c]) => `<rect x="${x}" y="${y}" width="10" height="10" rx="2" fill="${c}" transform="rotate(25 ${x + 5} ${y + 5})"/>`).join('')}${spark(220, 34)}${dot(100, 40, S)}`,
    laptop: `${shadow(160, 186, 120)}
      <rect x="80" y="54" width="160" height="104" rx="10" fill="${K}" ${O}/><rect x="90" y="64" width="140" height="84" rx="4" fill="${SB}"/>
      <rect x="98" y="72" width="60" height="8" rx="4" fill="${W}"/><path d="M98 90h120M98 100h96M98 110h108" stroke="${W}" stroke-width="3" stroke-linecap="round" opacity=".85"/><rect x="98" y="120" width="44" height="20" rx="4" fill="${R}"/><rect x="150" y="120" width="44" height="20" rx="4" fill="${T}"/>
      <path d="M60 158h200l-12 20H72z" fill="${GR}" ${O}/><rect x="140" y="162" width="40" height="5" rx="2.5" fill="${K}" opacity=".3"/>
      <g transform="translate(268 74)"><circle r="20" fill="${W}" ${O}/><path d="M-8 0h16M0-8v16" stroke="${S}" stroke-width="2.4" stroke-linecap="round" opacity="0"/><path d="M-9-2a9 9 0 0 1 18 0M-5 2a5 5 0 0 1 10 0" fill="none" stroke="${S}" stroke-width="2.6" stroke-linecap="round"/><circle cy="7" r="2.6" fill="${S}"/></g>
      ${bubble(28, 40, 56, 34, PK)}<path d="M40 52l6 6 10-10" fill="none" stroke="${R}" stroke-width="2.6" stroke-linecap="round"/>${spark(268, 136, G)}${dot(46, 150, T)}${plus(150, 34, R, .8)}`,
    science: `${shadow(160, 188, 120)}
      <rect x="40" y="168" width="240" height="12" rx="6" fill="${WD}" ${O}/>
      <path d="M104 60h28M110 60v40l-30 56a8 8 0 0 0 7 12h70a8 8 0 0 0 7-12l-30-56V60" fill="${W}" ${O}/><path d="M92 136h80l12 22a6 6 0 0 1-5 9H85a6 6 0 0 1-5-9z" fill="${T}" opacity=".85"/><circle cx="112" cy="148" r="4" fill="${W}"/><circle cx="130" cy="140" r="3" fill="${W}"/><circle cx="146" cy="152" r="5" fill="${W}" opacity=".8"/>
      <rect x="196" y="92" width="22" height="76" rx="11" fill="${W}" ${O}/><rect x="196" y="126" width="22" height="42" rx="11" fill="${R}" opacity=".85"/><rect x="230" y="110" width="22" height="58" rx="11" fill="${W}" ${O}/><rect x="230" y="140" width="22" height="28" rx="11" fill="${G}" opacity=".9"/><path d="M188 92h38M222 110h38" ${O}/>
      <g transform="translate(250 54)"><circle r="7" fill="${S}" ${o(2)}/><circle cx="-22" cy="12" r="6" fill="${R}" ${o(2)}/><circle cx="18" cy="18" r="6" fill="${G}" ${o(2)}/><path d="M-5 4-17 9M6 4l8 9" ${o(2)}/></g>
      <path d="M122 46c-6-8 4-14-2-22M138 50c-6-8 4-14-2-22" fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round" opacity=".35"/>${spark(60, 60)}${plus(290, 120, T, .8)}${dot(44, 120, S)}`,
    train: `${shadow(160, 182, 130)}<path d="M20 178h280" ${O}/>${[40, 80, 120, 160, 200, 240, 280].map(x => `<path d="M${x - 10} 184h20" stroke="${WD2}" stroke-width="4" stroke-linecap="round"/>`).join('')}
      <rect x="150" y="70" width="110" height="86" rx="10" fill="${S}" ${O}/><rect x="164" y="84" width="34" height="30" rx="5" fill="${SB}" ${o(2)}/><rect x="210" y="84" width="34" height="30" rx="5" fill="${SB}" ${o(2)}/>
      <path d="M60 104h90v52H48v-30a22 22 0 0 1 12-22z" fill="${R}" ${O}/><rect x="76" y="64" width="20" height="40" rx="3" fill="${K}" ${O}/><path d="M70 64h32" ${O}/><circle cx="56" cy="134" r="6" fill="${G}" ${o(2)}/><path d="M48 150l-14 6" ${O}/>
      ${[[74, 160, 14], [122, 160, 14], [184, 160, 12], [228, 160, 12]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/><circle cx="${x}" cy="${y}" r="${r * .4}" fill="${GR}"/>`).join('')}<path d="M74 160h48" stroke="${GR}" stroke-width="3"/>
      <path d="M92 52c-10-4-10-14 2-16 2-10 18-10 20 0 12 0 12 14 0 16" fill="${W}" ${o(2)}/><path d="M118 36c-6-6 0-14 8-12 4-8 18-6 18 4 10 2 8 14-2 14" fill="${W}" ${o(2)} opacity=".8"/>${spark(280, 50)}${dot(36, 60, T)}`,
    watch: `${shadow(160, 190, 70)}
      <path d="M134 40h52l-6 34h-40zM140 146h40l6 34h-52z" fill="${T}" ${O}/><path d="M138 52h44M136 168h48" stroke="${T2}" stroke-width="2.4"/>
      <circle cx="160" cy="110" r="44" fill="${W}" ${O}/><circle cx="160" cy="110" r="36" fill="${SB}" stroke="${K}" stroke-width="2"/>${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => `<path d="M${160 + Math.cos(a * Math.PI / 180) * 30} ${110 + Math.sin(a * Math.PI / 180) * 30}l${Math.cos(a * Math.PI / 180) * 4} ${Math.sin(a * Math.PI / 180) * 4}" stroke="${K}" stroke-width="2" stroke-linecap="round"/>`).join('')}
      <path d="M160 110V88M160 110l14 8" stroke="${K}" stroke-width="3.4" stroke-linecap="round"/><circle cx="160" cy="110" r="4" fill="${R}"/><rect x="204" y="102" width="10" height="16" rx="3" fill="${G}" ${o(2)}/>
      ${waves(222, 72, 3, R)}<g transform="translate(70 132)"><path d="M-24 30 0-20l24 50z" fill="${MT}" ${O}/><path d="M0-20l-8 16 6 2 2-5 6 4z" fill="${W}" ${o(1.8)}/></g><path d="M268 150v-40l16 8-16 8" fill="${R}" ${o(2)}/><path d="M268 150v20" ${O}/>${spark(60, 50)}${dot(290, 60, S)}`,
    family: `${shadow(160, 190, 130)}
      ${person(96, 128, S, K, 1.15)}${person(224, 128, R, WD2, 1.15)}
      <g transform="translate(160 150)"><path d="M-18 34c0-16 8-24 18-24s18 8 18 24z" fill="${G}" ${O}/><circle cy="-2" r="12" fill="#f2c9a5" ${O}/><path d="M-6-12c4-4 10-4 12 0" fill="none" stroke="${K}" stroke-width="2.4" stroke-linecap="round"/><circle cx="-4" cy="-2" r="1.5" fill="${K}"/><circle cx="4" cy="-2" r="1.5" fill="${K}"/><path d="M-3 4q3 2 6 0" fill="none" ${o(1.6)}/></g>
      <path d="M160 70s-14-8-14-16a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 8-14 16-14 16z" fill="${R}" ${o(2)}/>
      <g transform="translate(270 70)"><rect x="-14" y="-16" width="28" height="34" rx="6" fill="${W}" ${O}/><circle cy="-4" r="6" fill="${PK}"/><path d="M-6 12h12" ${o(2)}/></g>${spark(50, 52)}${plus(290, 150, T, .8)}${dot(40, 140, G)}`,
    clothes: `${shadow(160, 188, 120)}
      <path d="M40 50h240" ${O}/><path d="M80 50v8M240 50v8" ${O}/>
      <g transform="translate(110 58)"><path d="M0 0l-10 10h20z" fill="none" ${o(2)}/><path d="M-36 10h72l6 116h-34l-8-80-8 80h-34z" fill="${S}" ${O}/><path d="M-36 24h72" stroke="${S2}" stroke-width="3"/><path d="M-28 34h14v14h-14zM14 34h14v14H14z" fill="none" stroke="${G}" stroke-width="2" stroke-dasharray="3 3"/><path d="M0 24v20" stroke="${G}" stroke-width="2" stroke-dasharray="3 3"/></g>
      <g transform="translate(220 58)"><path d="M0 0l-10 10h20z" fill="none" ${o(2)}/><path d="M-20 10h40l26 22-12 14-10-8v64h-48V38l-10 8-12-14z" fill="${R}" ${O}/><path d="M-10 10q10 12 20 0" fill="none" ${o(2)}/><circle cx="0" cy="58" r="3" fill="${W}"/><circle cx="0" cy="74" r="3" fill="${W}"/></g>
      <g transform="translate(46 150)"><path d="M0 26V0l18 26" fill="none" stroke="${WD2}" stroke-width="3"/><rect x="-14" y="-10" width="28" height="14" rx="4" fill="${G}" ${o(2)}/></g>${spark(290, 110)}${dot(160, 30, T)}`,
    stamp: `${shadow(160, 188, 120)}
      <rect x="58" y="70" width="170" height="108" rx="6" fill="${CR}" ${O}/><path d="M58 76l85 58 85-58" fill="none" ${O}/><path d="M74 156h60M74 166h40" stroke="${K}" stroke-width="2.2" stroke-linecap="round" opacity=".45"/>
      <g transform="translate(196 72) rotate(8)"><path d="M-30-40h60v80h-60z" fill="${W}" stroke="${K}" stroke-width="2.4" stroke-dasharray="4 3"/><rect x="-24" y="-34" width="48" height="56" fill="${SB}"/><circle cx="0" cy="-12" r="12" fill="${G}"/><path d="M-24 22 0-4l24 26z" fill="${T}"/><path d="M-20 30h20" stroke="${K}" stroke-width="2.4" stroke-linecap="round"/><path d="M14 30h6" stroke="${R}" stroke-width="2.4" stroke-linecap="round"/></g>
      <g transform="translate(120 96)"><circle r="22" fill="none" stroke="${R}" stroke-width="2.4"/><circle r="16" fill="none" stroke="${R}" stroke-width="1.6"/><path d="M26-8q12-6 24 0t24 0M26 0q12-6 24 0t24 0M26 8q12-6 24 0t24 0" fill="none" stroke="${R}" stroke-width="2" stroke-linecap="round"/></g>
      ${spark(40, 54)}${plus(290, 150, S, .8)}${dot(276, 30, R)}`
  };
  A.phone = A.headset;
  window.IELTSSheetArt = (k, cls = '') => A[k] ? `<svg class="xs-art ${cls}" viewBox="0 0 320 220" aria-hidden="true" focusable="false">${['mountain', 'eco'].includes(k) ? '' : `<rect x="18" y="16" width="284" height="188" rx="44" fill="var(--xs-soft)"/><circle cx="270" cy="40" r="44" fill="#fff" opacity=".45"/>`}${A[k]}</svg>` : '';
  window.IELTSSheetArt.keys = Object.keys(A);
})();
