/* IELTS Prep · the student's character (avatar) on the maps and the home page, and their first language.
   The teacher designs each student's character on the Students page (js/students.js): body (gender), a quick starting
   look, skin tone, hair style and colour, clothes, glasses, beard and earrings. It is saved in ielts_members.avatar as
   { skin, hair, hairColor, top, outfit, glasses, beard, earrings, heritage }; anything missing takes the gender's default.
   - IELTSCharacter.walker(gender, avatar): the small figure that walks the road maps (about 26px tall, drawn round 0,0).
   - IELTSCharacter.portrait(gender, size, avatar): a round picture for the home page and the Students list.
   - IELTSCharacter.lang(code): the student's first language { name, hello, done, rtl } for small greetings. */
(() => {
  const INK = '#2c3e50';
  const SKINS = { porcelain: ['#f8dcc8', '#ebc4aa'], light: ['#f0c9a0', '#e2b58a'], medium: ['#dcab7e', '#c99567'], olive: ['#c6905f', '#b17d4f'], tan: ['#a8703f', '#946033'], brown: ['#8a5533', '#77482a'], deep: ['#5e3a24', '#4f301d'] };
  const SKIN_NAMES = { porcelain: 'Very light', light: 'Light', medium: 'Medium', olive: 'Olive', tan: 'Tan', brown: 'Brown', deep: 'Deep' };
  const HAIR_COLORS = { black: '#1f1a17', darkbrown: '#3b2a20', brown: '#6b4428', auburn: '#8e3b23', ginger: '#c4622d', blonde: '#e0b864', platinum: '#efe3c4', grey: '#a9a9a9', pink: '#e06aa0', blue: '#3f7fd6', purple: '#7b4bc4', green: '#2fa37a' };
  const HAIR_COLOR_NAMES = { black: 'Black', darkbrown: 'Dark brown', brown: 'Brown', auburn: 'Auburn', ginger: 'Ginger', blonde: 'Blonde', platinum: 'Platinum', grey: 'Grey', pink: 'Pink', blue: 'Blue', purple: 'Purple', green: 'Green' };
  const HAIRS = { long: 'Long', wavy: 'Long wavy', curlylong: 'Long curly', ponytail: 'Ponytail', braid: 'Braid', bun: 'Bun', bob: 'Bob', pixie: 'Pixie', short: 'Short', sidepart: 'Side parting', buzz: 'Buzz cut', spiky: 'Spiky', curly: 'Short curly', afro: 'Afro', manbun: 'Top knot', bald: 'Bald', cap: 'Cap', hijab: 'Headscarf' };
  const TOPS = { red: ['#d6283c', '#a91d2f'], blue: ['#2f6db5', '#24527f'], teal: ['#1f9d8b', '#167566'], purple: ['#7b4bc4', '#5c3797'], gold: ['#e3a843', '#b98320'], green: ['#3f9b4f', '#2f7a3c'], pink: ['#e06aa0', '#b84d80'], navy: ['#2b3d6b', '#1d2a4c'], orange: ['#ee7b30', '#c25f1d'], grey: ['#6d7686', '#525a68'] };
  const TOP_NAMES = { red: 'Red', blue: 'Blue', teal: 'Teal', purple: 'Purple', gold: 'Gold', green: 'Green', pink: 'Pink', navy: 'Navy', orange: 'Orange', grey: 'Grey' };
  const OUTFITS = { trousers: 'Top and trousers', dress: 'Dress', skirt: 'Top and skirt' };
  const GLASSES = { none: 'No glasses', round: 'Round glasses', square: 'Square glasses' };
  const BEARDS = { none: 'No beard', stubble: 'Stubble', beard: 'Beard', moustache: 'Moustache' };
  const EARRINGS = { none: 'No earrings', studs: 'Earrings' };
  /* the fun extras: a face that shows a mood, something on the head, a pet, something to carry, a background */
  const EXPRESSIONS = { smile: 'Smile', grin: 'Big grin', laugh: 'Laughing', wink: 'Wink', calm: 'Calm', surprised: 'Surprised', tongue: 'Cheeky' };
  const EYES = { dark: '#18213f', brown: '#6b4428', hazel: '#8a6a2f', green: '#3f8f5a', blue: '#3f7fd6', grey: '#7d8794' };
  const EYE_NAMES = { dark: 'Dark', brown: 'Brown', hazel: 'Hazel', green: 'Green', blue: 'Blue', grey: 'Grey' };
  const FACES = { none: 'Nothing', freckles: 'Freckles', blush: 'Rosy cheeks', star: 'Star', heart: 'Heart', plaster: 'Plaster' };
  const HATS = { none: 'Nothing', beanie: 'Beanie', beret: 'Beret', gradcap: 'Graduation cap', crown: 'Crown', party: 'Party hat', headphones: 'Headphones', flower: 'Flower', bow: 'Bow' };
  const PETS = { none: 'No pet', cat: 'Cat', dog: 'Dog', owl: 'Owl', fox: 'Fox', panda: 'Panda', bunny: 'Bunny', parrot: 'Parrot' };
  const CARRY = { none: 'Nothing', book: 'A book', balloon: 'A balloon', flag: 'A flag', umbrella: 'An umbrella' };
  const BGS = { auto: '', sky: '#cfe8ff', sunset: '#ffd3a8', mint: '#cdeee0', lilac: '#e3d6fb', sunny: '#ffe59a', night: '#232a55', confetti: '#fff3f6' };
  const BG_NAMES = { auto: 'Match the clothes', sky: 'Sky', sunset: 'Sunset', mint: 'Mint', lilac: 'Lilac', sunny: 'Sunshine', night: 'Night sky', confetti: 'Confetti' };
  /* a pet's face, drawn round 0,0 (about 7 units), then moved and sized */
  function pet(kind, x, y, k, cls) {
    const eyes = `<circle cx="-2.4" cy="-.8" r=".95" fill="#18213f"/><circle cx="2.4" cy="-.8" r=".95" fill="#18213f"/><circle cx="-2.1" cy="-1.1" r=".3" fill="#fff"/><circle cx="2.7" cy="-1.1" r=".3" fill="#fff"/>`;
    const P = {
      cat: `<g class="ch-ears"><path d="M-6.2-2.6-6.8-9.6-1.8-6zM6.2-2.6 6.8-9.6 1.8-6z" fill="#f2a65a"/><path d="M-5.4-4-5.7-7.8-3-5.8zM5.4-4 5.7-7.8 3-5.8z" fill="#f9d3b0"/></g><circle r="6.6" fill="#f6b877"/>${eyes}<path d="M-.9.9h1.8L0 2z" fill="#d9657a"/><path d="M0 2q-1.3 1.5-2.6.5M0 2q1.3 1.5 2.6.5M-3.6 1.4-7.4.8M-3.6 2.4-7.2 3M3.6 1.4 7.4.8M3.6 2.4 7.2 3" fill="none" stroke="#7a4a23" stroke-width=".5" stroke-linecap="round"/>`,
      dog: `<g class="ch-ears"><ellipse cx="-6" cy="-1.4" rx="2.4" ry="4.6" fill="#8a5533" transform="rotate(14 -6 -1.4)"/><ellipse cx="6" cy="-1.4" rx="2.4" ry="4.6" fill="#8a5533" transform="rotate(-14 6 -1.4)"/></g><circle r="6.4" fill="#d9a066"/><ellipse cy="2.4" rx="3.4" ry="2.7" fill="#fbeedd"/>${eyes}<ellipse cy="1.2" rx="1.3" ry=".95" fill="#18213f"/><path d="M0 2.1v1.2q-1 1-2 .3M0 3.3q1 1 2 .3" fill="none" stroke="#18213f" stroke-width=".5" stroke-linecap="round"/>`,
      owl: `<g class="ch-ears"><path d="M-5.6-4-5-8.6-2-5.8zM5.6-4 5-8.6 2-5.8z" fill="#6f5238"/></g><circle r="6.5" fill="#8a6a4a"/><circle cx="-2.6" cy="-1" r="2.7" fill="#fff"/><circle cx="2.6" cy="-1" r="2.7" fill="#fff"/><circle cx="-2.6" cy="-1" r="1.2" fill="#18213f"/><circle cx="2.6" cy="-1" r="1.2" fill="#18213f"/><path d="M-1 1.4h2L0 3.4z" fill="#ee9b30"/><path d="M-3 4.6q3 1.6 6 0" fill="none" stroke="#6f5238" stroke-width=".6"/>`,
      fox: `<g class="ch-ears"><path d="M-6-2.4-6.6-9.8-1.6-6zM6-2.4 6.6-9.8 1.6-6z" fill="#ee7b30"/><path d="M-5.4-4.6-5.6-7.8-3.2-6zM5.4-4.6 5.6-7.8 3.2-6z" fill="#3b2a20"/></g><circle r="6.4" fill="#ee7b30"/><path d="M-6.2 1.4Q-3 0 0 3.4 3 0 6.2 1.4 4.8 6.4 0 6.4t-6.2-5z" fill="#fff6ea"/>${eyes}<ellipse cy="3" rx="1.1" ry=".8" fill="#18213f"/>`,
      panda: `<g class="ch-ears"><circle cx="-5" cy="-5.2" r="2.5" fill="#18213f"/><circle cx="5" cy="-5.2" r="2.5" fill="#18213f"/></g><circle r="6.5" fill="#fff"/><ellipse cx="-2.6" cy="-.8" rx="2" ry="2.5" fill="#18213f" transform="rotate(18 -2.6 -.8)"/><ellipse cx="2.6" cy="-.8" rx="2" ry="2.5" fill="#18213f" transform="rotate(-18 2.6 -.8)"/><circle cx="-2.5" cy="-.9" r=".7" fill="#fff"/><circle cx="2.5" cy="-.9" r=".7" fill="#fff"/><ellipse cy="2" rx="1.1" ry=".8" fill="#18213f"/><path d="M0 2.8q-1 1.2-2 .4M0 2.8q1 1.2 2 .4" fill="none" stroke="#18213f" stroke-width=".5" stroke-linecap="round"/>`,
      bunny: `<g class="ch-ears"><ellipse cx="-2.8" cy="-8.6" rx="1.9" ry="5" fill="#f1f2f6" transform="rotate(-8 -2.8 -8.6)"/><ellipse cx="2.8" cy="-8.6" rx="1.9" ry="5" fill="#f1f2f6" transform="rotate(8 2.8 -8.6)"/><ellipse cx="-2.8" cy="-8.4" rx=".8" ry="3.4" fill="#f6b6c6" transform="rotate(-8 -2.8 -8.4)"/><ellipse cx="2.8" cy="-8.4" rx=".8" ry="3.4" fill="#f6b6c6" transform="rotate(8 2.8 -8.4)"/></g><circle r="6.2" fill="#f7f8fb"/>${eyes}<path d="M-.8 1h1.6L0 2z" fill="#f08a9b"/><path d="M0 2q-1.2 1.4-2.4.4M0 2q1.2 1.4 2.4.4" fill="none" stroke="#8a93ab" stroke-width=".5" stroke-linecap="round"/>`,
      parrot: `<g class="ch-ears"><path d="M-1-6 0-10.4 1.4-6.2 3-9.4 2.6-5.4z" fill="#e0445a"/></g><circle r="6.3" fill="#3f9b4f"/><path d="M-6 1.6a6.3 6.3 0 0 0 12 0Q0 5-6 1.6z" fill="#2f7a3c"/><circle cx="-2.4" cy="-1.2" r="1.9" fill="#fff"/><circle cx="2.4" cy="-1.2" r="1.9" fill="#fff"/><circle cx="-2.2" cy="-1.1" r=".9" fill="#18213f"/><circle cx="2.6" cy="-1.1" r=".9" fill="#18213f"/><path d="M-1.7.4h3.4Q1.8 4.8 0 4.8T-1.7.4z" fill="#f4c542"/><path d="M-1.7.4h3.4q-.4 1.2-1.7 1.2T-1.7.4z" fill="#e3a01e"/>`
    }[kind];
    return P ? `<g transform="translate(${x} ${y}) scale(${k})"><g class="${cls}">${P}</g></g>` : '';
  }
  /* quick starting looks: only a skin tone and hair to start from; every part can then be changed */
  const HERITAGE = {
    eastasian: { label: 'East Asian', skin: 'light', hairColor: 'black' },
    southeastasian: { label: 'South-East Asian', skin: 'medium', hairColor: 'black' },
    southasian: { label: 'South Asian', skin: 'tan', hairColor: 'black' },
    middleeastern: { label: 'Middle Eastern', skin: 'olive', hairColor: 'darkbrown' },
    european: { label: 'European', skin: 'porcelain', hairColor: 'brown' },
    nordic: { label: 'Northern European', skin: 'porcelain', hairColor: 'blonde' },
    latin: { label: 'Latin American', skin: 'medium', hairColor: 'darkbrown' },
    african: { label: 'African', skin: 'deep', hairColor: 'black', hair: { male: 'curly', female: 'afro' } }
  };
  const BASE = {
    female: { skin: 'light', hair: 'long', hairColor: 'darkbrown', top: 'red', outfit: 'dress', glasses: 'none', beard: 'none', earrings: 'studs' },
    male: { skin: 'light', hair: 'short', hairColor: 'darkbrown', top: 'blue', outfit: 'trousers', glasses: 'none', beard: 'none', earrings: 'none' },
    nonbinary: { skin: 'light', hair: 'bob', hairColor: 'purple', top: 'teal', outfit: 'trousers', glasses: 'none', beard: 'none', earrings: 'studs' },
    unspecified: { skin: 'light', hair: 'cap', hairColor: 'darkbrown', top: 'gold', outfit: 'trousers', glasses: 'none', beard: 'none', earrings: 'none' }
  };
  const norm = g => (['female', 'male', 'nonbinary', 'unspecified'].includes(g) ? g : 'unspecified');
  const pick = (v, list, d) => (v && Object.prototype.hasOwnProperty.call(list, v) ? v : d);
  /* the full look: the gender's defaults, then the saved choices (unknown values are ignored) */
  function resolve(gender, av) { const g = norm(gender), b = BASE[g], a = av && typeof av === 'object' ? av : {};
    return { g, skin: pick(a.skin, SKINS, b.skin), hair: pick(a.hair, HAIRS, b.hair), hairColor: pick(a.hairColor, HAIR_COLORS, b.hairColor), top: pick(a.top, TOPS, b.top),
      outfit: pick(a.outfit, OUTFITS, b.outfit), glasses: pick(a.glasses, GLASSES, b.glasses), beard: pick(a.beard, BEARDS, b.beard), earrings: pick(a.earrings, EARRINGS, b.earrings), heritage: pick(a.heritage, HERITAGE, ''),
      expression: pick(a.expression, EXPRESSIONS, 'smile'), eyes: pick(a.eyes, EYES, 'dark'), face: pick(a.face, FACES, 'none'), hat: pick(a.hat, HATS, 'none'), pet: pick(a.pet, PETS, 'none'), carry: pick(a.carry, CARRY, 'none'), bg: pick(a.bg, BGS, 'auto') }; }
  const colours = L => ({ skin: SKINS[L.skin][0], skin2: SKINS[L.skin][1], hair: HAIR_COLORS[L.hair === 'cap' ? 'darkbrown' : L.hairColor], top: TOPS[L.top][0], bottom: TOPS[L.top][1],
    scarf: L.hair === 'hijab' ? TOPS[L.top === 'navy' ? 'teal' : 'navy'][0] : '' });

  /* ── the walker (about 26px tall, faces right, drawn round 0,0) ── */
  function walker(gender, av) {
    const L = resolve(gender, av), c = colours(L), H = L.hair, hc = c.hair;
    const back = {
      long: `<path d="M-4.6-12.5c-.6 4 .2 8.6 1.2 11.2h6.8c1-2.6 1.8-7.2 1.2-11.2z" fill="${hc}"/>`,
      wavy: `<path d="M-4.6-12.5c-1.2 2 .4 3.6-.6 5.4s.8 4 1.6 5.8h6.8c.8-1.8 2.6-3.6 1.6-5.8s.6-3.4-.6-5.4z" fill="${hc}"/>`,
      curlylong: `<path d="M-5.2-12c-1.6 2.6.6 3.8-.8 6s1 4.2 1.6 5h8.8c.6-.8 3-2.8 1.6-5s.8-3.4-.8-6z" fill="${hc}"/>`,
      ponytail: `<path d="M-3.4-12.6c-3 .6-4 4-3 8.6.4-2.8 1.4-4.4 3.4-5.6z" fill="${hc}"/>`,
      braid: `<g fill="${hc}"><circle cx="-4.4" cy="-9.4" r="1.5"/><circle cx="-5" cy="-6.8" r="1.4"/><circle cx="-5.4" cy="-4.3" r="1.2"/></g>`,
      bun: `<circle cx="-1" cy="-15.6" r="2.3" fill="${hc}"/>`,
      manbun: `<circle cx="-1.4" cy="-15.5" r="1.7" fill="${hc}"/>`,
      bob: `<path d="M-4.8-12.5c-.4 2.6 0 5 .6 6.4h8.4c.6-1.4 1-3.8.6-6.4z" fill="${hc}"/>`,
      afro: `<circle cy="-12" r="6.6" fill="${hc}"/>`,
      hijab: `<path d="M-5.4-11a5.4 5.4 0 0 1 10.8 0v4.2c0 1.4-1 2.4-2.4 2.4h-7.4z" fill="${c.scarf}"/>`
    }[H] || '';
    const front = {
      long: `<path d="M-4.4-11.2a4.4 4.4 0 0 1 8.8-.4c-1.6-1.4-4.6-1.8-8.8.4z" fill="${hc}"/>`,
      wavy: `<path d="M-4.4-11.2a4.4 4.4 0 0 1 8.8-.4c-1.6-1.4-4.6-1.8-8.8.4z" fill="${hc}"/>`,
      curlylong: `<path d="M-4.6-11a4.6 4.6 0 0 1 9.2 0c-1-.8-2-.4-3-1-1 .6-2.2.6-3.2 0-1 .6-2 .2-3 1z" fill="${hc}"/>`,
      braid: `<path d="M-4.4-11.2a4.4 4.4 0 0 1 8.8-.4c-1.6-1.4-4.6-1.8-8.8.4z" fill="${hc}"/>`,
      ponytail: `<path d="M-4.2-11.4a4.2 4.2 0 0 1 8.4 0c-2-1-6.2-1-8.4 0z" fill="${hc}"/>`,
      bun: `<path d="M-4.2-11.4a4.2 4.2 0 0 1 8.4 0c-2-1-6.2-1-8.4 0z" fill="${hc}"/>`,
      manbun: `<path d="M-4.2-11.4a4.2 4.2 0 0 1 8.4 0c-2-1-6.2-1-8.4 0z" fill="${hc}"/>`,
      bob: `<path d="M-4.4-11a4.4 4.4 0 0 1 8.8 0c-1.2-1.2-3-1.6-4.4-1-1.4-.6-3.2-.2-4.4 1z" fill="${hc}"/>`,
      pixie: `<path d="M-4.4-11.2a4.4 4.4 0 0 1 8.8-.6c-1.4-.4-3-1.4-4.4-.8-1.6-.2-3 .4-4.4 1.4z" fill="${hc}"/>`,
      short: `<path d="M-4.2-11.5a4.2 4.2 0 0 1 8.4-1c-2 .6-5 .6-8.4 1z" fill="${hc}"/>`,
      sidepart: `<path d="M-4.3-11.2a4.3 4.3 0 0 1 8.6-1.2c-1.2.2-2.6-.2-3.6-1.2-1.4 1.4-3.2 2-5 2.4z" fill="${hc}"/>`,
      buzz: `<path d="M-4.1-11.6a4.1 4.1 0 0 1 8.2 0c-2.4-.8-5.8-.8-8.2 0z" fill="${hc}" opacity=".85"/>`,
      spiky: `<path d="M-4.2-11.8-3.6-15.4l1.4 1.4.8-2.8 1.4 2.2 1.2-2.6 1 2.6 1.4-1.4.6 3.4c-2-.8-6.2-.8-8.4 0z" fill="${hc}"/>`,
      curly: `<g fill="${hc}"><circle cx="-3" cy="-13.4" r="1.9"/><circle cx="-.6" cy="-14.8" r="2"/><circle cx="2" cy="-14.4" r="1.9"/><circle cx="3.8" cy="-12.6" r="1.6"/><circle cx="-4" cy="-11.4" r="1.4"/></g>`,
      afro: '',
      bald: `<path d="M-1.6-14.4a2 1 0 0 1 3 .4" stroke="#fff" stroke-width=".7" opacity=".45" fill="none" stroke-linecap="round"/>`,
      cap: `<path d="M-4.4-11.6a4.4 4.4 0 0 1 8.8 0z" fill="#d6283c"/><path d="M3.6-11.8h3.6" stroke="#a91d2f" stroke-width="1.6" stroke-linecap="round"/>`,
      hijab: ''
    }[H] || '';
    const dress = L.outfit === 'dress', skirt = L.outfit === 'skirt';
    const legs = dress || skirt ? `<path class="ch-leg ch-leg-a" d="M-2 4-4 12" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/><path class="ch-leg ch-leg-b" d="M2 4l3 8" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>`
      : `<g class="ch-leg ch-leg-a"><path d="M-2 4-4 12" stroke="${c.bottom}" stroke-width="2.6" stroke-linecap="round"/><path d="M-4.6 12h1.6" stroke="${INK}" stroke-width="2" stroke-linecap="round"/></g><g class="ch-leg ch-leg-b"><path d="M2 4l3 8" stroke="${c.bottom}" stroke-width="2.6" stroke-linecap="round"/><path d="M4.4 12h1.8" stroke="${INK}" stroke-width="2" stroke-linecap="round"/></g>`;
    const hat = H === 'cap' ? '' : ({
      beanie: `<path d="M-4.3-11.8a4.3 4.3 0 0 1 8.6 0z" fill="${c.bottom}"/><rect x="-4.6" y="-12.7" width="9.2" height="1.7" rx=".85" fill="#fff" opacity=".9"/><circle cy="-16.3" r="1.1" fill="#fff"/>`,
      beret: `<ellipse cx="-.7" cy="-14.5" rx="4.9" ry="2.1" fill="${c.bottom}" transform="rotate(-8 -.7 -14.5)"/><path d="M-.4-16.6v-1" stroke="${c.bottom}" stroke-width=".8" stroke-linecap="round"/>`,
      gradcap: `<path d="M-3.4-13.6h6.8v1.6h-6.8z" fill="${INK}"/><path d="M-6.2-14.6 0-16.9 6.2-14.6 0-12.3z" fill="${INK}"/><path d="M4.4-14.4v2.8" stroke="#e3a843" stroke-width=".7" stroke-linecap="round"/>`,
      crown: `<path d="M-3.5-13.4-3.2-17.2-1.5-15.4 0-17.8 1.5-15.4 3.2-17.2 3.5-13.4z" fill="#f4c542" stroke="#c9952a" stroke-width=".3"/>`,
      party: `<path d="M-2.6-14.2.5-20.4 2.8-14.6z" fill="#e06aa0"/><path d="M-1.4-16.6 1.8-17.6" stroke="#fff" stroke-width=".6"/><circle cx=".5" cy="-20.4" r=".95" fill="#f4c542"/>`,
      headphones: `<path d="M-4.5-11a4.5 4.5 0 0 1 9 0" stroke="${INK}" stroke-width="1.1" fill="none"/><rect x="-1.1" y="-12.6" width="2.2" height="3.4" rx="1.1" fill="${INK}"/>`,
      flower: `<g fill="#f08ab0"><circle cx="-2.8" cy="-15.6" r=".9"/><circle cx="-1.6" cy="-14.6" r=".9"/><circle cx="-4" cy="-14.6" r=".9"/><circle cx="-2.8" cy="-13.7" r=".9"/></g><circle cx="-2.8" cy="-14.6" r=".7" fill="#f4c542"/>`,
      bow: `<path d="M-1-15.2-3.6-16.8v3zM-1-15.2 1.6-16.8v3z" fill="#e0445a"/><circle cx="-1" cy="-15.2" r=".7" fill="#b02a40"/>`
    }[L.hat] || '');
    const carry = { book: `<g transform="rotate(-14 7 1)"><rect x="5.2" y="-.8" width="4.4" height="3.4" rx=".5" fill="#2f6db5"/><path d="M5.9-.1h3" stroke="#fff" stroke-width=".5" opacity=".8"/></g>`,
      balloon: `<g class="ch-balloon"><path d="M7 1C8-4 9.2-8 9.6-12.6" stroke="#8a93ab" stroke-width=".5" fill="none"/><path d="M8.9-13.2h1.6l-.8 1.1z" fill="#c9304a"/><ellipse cx="9.8" cy="-17" rx="3.4" ry="4.1" fill="#e0445a"/><path d="M8-18.6q.6-1.6 2-1.9" stroke="#fff" stroke-width=".7" fill="none" stroke-linecap="round" opacity=".7"/></g>`,
      flag: `<path d="M7 1.4V-13" stroke="#8a6f4e" stroke-width=".8" stroke-linecap="round"/><path class="ch-flag" d="M7-13h6.4l-1.7 2 1.7 2H7z" fill="#d6283c"/>`,
      umbrella: `<path d="M7 1.4V-17" stroke="${INK}" stroke-width=".7" stroke-linecap="round"/><path d="M.2-16.6a6.8 5.2 0 0 1 13.6 0q-1.7-1.2-3.4 0-1.7-1.2-3.4 0-1.7-1.2-3.4 0-1.7-1.2-3.4 0z" fill="#3f7fd6"/>` }[L.carry] || '';
    const buddy = pet(L.pet, -15.5, 8.6, .52, 'ch-pet ch-pet-walk');
    const body = dress ? `<path d="M-3.6-7h7.2l2.6 12.2h-12.4z" fill="${c.top}"/><path d="M-5.6 2.4h11.2" stroke="${c.bottom}" stroke-width="1.6"/>`
      : skirt ? `<rect x="-4.3" y="-7" width="8.6" height="8" rx="3.2" fill="${c.top}"/><path d="M-4.4 0h8.8l1.6 5.2H-6z" fill="${c.bottom}"/>`
      : `<rect x="-4.5" y="-7" width="9" height="12" rx="3.5" fill="${c.top}"/>`;
    const head = H === 'hijab' ? `<circle cx=".7" cy="-10.8" r="3.5" fill="${c.skin}"/>` : `<circle cy="-11" r="4.2" fill="${c.skin}"/>`;
    const beard = L.beard === 'beard' ? `<path d="M-1.4-9.6c.4 2.4 1.8 3.6 3.2 3.6s2.4-1.2 2.6-3.2c-.8.6-1.6.6-2.6.4-1.2.4-2.2 0-3.2-.8z" fill="${hc}"/>` : L.beard === 'stubble' ? `<path d="M-1-9.4c.6 2 1.8 3 3 3s2-.8 2.4-2.6" stroke="${hc}" stroke-width="1.6" fill="none" opacity=".4"/>` : L.beard === 'moustache' ? `<path d="M1.8-9.2h2.2" stroke="${hc}" stroke-width="1" stroke-linecap="round"/>` : '';
    const specs = L.glasses !== 'none' ? `<path d="M.6-11.6h3.8" stroke="${INK}" stroke-width=".7"/><circle cx="2.8" cy="-11.4" r="1.2" fill="none" stroke="${INK}" stroke-width=".7"/>` : '';
    return `<g transform="translate(-34 -2)">${buddy}<g class="cm-walker" data-gender="${L.g}"><ellipse cy="13" rx="7" ry="1.8" fill="#18213f" opacity=".14"/>
      ${legs}${back}<rect x="-8" y="-6" width="5" height="9" rx="2" fill="${L.top === 'gold' ? '#2f6db5' : '#e3a843'}"/>${body}
      <path d="M4-4l3 5" stroke="${c.skin}" stroke-width="2.2" stroke-linecap="round"/>${head}${beard}${front}${specs}${hat}${carry}</g></g>`;
  }

  /* ── the portrait (a round picture, 64 × 64 units) ── */
  let uid = 0;
  function portrait(gender, size = 64, av) {
    const L = resolve(gender, av), c = colours(L), H = L.hair, hc = c.hair, id = 'chc' + (++uid);
    const curls = (pts, r) => pts.map(([x, y, rr]) => `<circle cx="${x}" cy="${y}" r="${rr || r}"/>`).join('');
    const back = {
      long: `<path d="M17 30c-2 10-1 20 3 26h24c4-6 5-16 3-26z" fill="${hc}"/>`,
      wavy: `<path d="M17 30c-3 5 1 8-2 13s2 9 3 13h28c1-4 5-8 2-13s1-8-2-13z" fill="${hc}"/>`,
      curlylong: `<g fill="${hc}">${curls([[17, 30], [15, 38], [16, 46], [19, 53], [47, 30], [49, 38], [48, 46], [45, 53], [24, 54], [40, 54], [32, 54]], 5.4)}<path d="M17 28h30v26H17z"/></g>`,
      ponytail: `<path d="M42 22c8 1 11 10 8 22-1-7-4-11-8-13z" fill="${hc}"/>`,
      braid: `<g fill="${hc}"><ellipse cx="44.5" cy="38" rx="3.4" ry="3.8"/><ellipse cx="45.5" cy="44.5" rx="3.1" ry="3.5"/><ellipse cx="46" cy="50.5" rx="2.8" ry="3.2"/><path d="M45 54v4" stroke="${hc}" stroke-width="2.4" stroke-linecap="round"/></g>`,
      bun: `<circle cx="32" cy="15" r="6.4" fill="${hc}"/>`,
      manbun: `<circle cx="32" cy="15.2" r="4.6" fill="${hc}"/>`,
      bob: `<path d="M17.5 29c-1 6 0 11 2 14h25c2-3 3-8 2-14z" fill="${hc}"/>`,
      afro: `<g fill="${hc}"><circle cx="32" cy="27" r="17"/>${curls([[17, 22], [21, 14], [29, 10], [37, 10], [44, 14], [48, 22], [49, 31], [15, 31]], 5)}</g>`,
      hijab: `<path d="M13 66c0-14 3-24 6-33a13 13 0 0 1 26 0c3 9 6 19 6 33z" fill="${c.scarf}"/>`
    }[H] || '';
    const front = {
      long: `<path d="M18.5 30c0-9 6-14 13.5-14s13.5 5 13.5 14c-3-4-8-6-13-6-5.4 0-10 2.2-14 6z" fill="${hc}"/><path d="M22 24c4-5 13-6 19-1" stroke="${hc}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
      wavy: `<path d="M18.5 30c0-9 6-14 13.5-14s13.5 5 13.5 14c-2-3-4-3-6-5-2 1-5 1-7.5-.4-2.4 1.6-5.6 1.8-8 .4-2 1.6-3.4 3-5.5 5z" fill="${hc}"/>`,
      curlylong: `<g fill="${hc}">${curls([[21, 22], [26, 18], [32, 17], [38, 18], [43, 22], [19, 27], [45, 27]], 4.6)}</g>`,
      braid: `<path d="M18.5 30c0-9 6-14 13.5-14s13.5 5 13.5 14c-3-4-8-6-13-6-5.4 0-10 2.2-14 6z" fill="${hc}"/><path d="M24 22c5-3 12-3 17 1" stroke="${hc}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
      ponytail: `<path d="M19.5 28c0-8 5.5-12.5 12.5-12.5S44.5 20 44.5 28c-3-3.4-7.5-5-12.5-5s-9.5 1.6-12.5 5z" fill="${hc}"/>`,
      bun: `<path d="M19.5 28c0-8 5.5-12.5 12.5-12.5S44.5 20 44.5 28c-3-3.4-7.5-5-12.5-5s-9.5 1.6-12.5 5z" fill="${hc}"/>`,
      manbun: `<path d="M19.5 28c0-8 5.5-12.5 12.5-12.5S44.5 20 44.5 28c-3-3.4-7.5-5-12.5-5s-9.5 1.6-12.5 5z" fill="${hc}"/>`,
      bob: `<path d="M18.5 30c0-9 6-14 13.5-14s13.5 5 13.5 14c-2.5-2.6-6-3.6-9-3-1.8-1.6-6-1.6-8.6 0-3-.6-7 .4-9.4 3z" fill="${hc}"/>`,
      pixie: `<path d="M19 29c0-9 5.6-13.5 13-13.5S45 20 45 28c-2-1-4-3.4-5-5.6-3 2-7 2-11 .6-3 1.6-6.4 3.6-10 6z" fill="${hc}"/>`,
      short: `<path d="M19.5 28c0-8 5.5-12.5 12.5-12.5S44.5 20 44.5 28c-2-2.4-5-3.4-8-3-2-2-6-2.4-8.5-1-3 .4-6.5 1.6-8.5 4z" fill="${hc}"/>`,
      sidepart: `<path d="M19.5 29c0-8.4 5.5-13.5 12.5-13.5S44.5 20 44.5 28c-2.4-2.6-5.4-4-8.6-4.4-1.6-.2-3-1.2-3.8-2.6-2.6 3.4-7.6 6.4-12.6 8z" fill="${hc}"/>`,
      buzz: `<path d="M20 27.5c0-7 5-11.8 12-11.8S44 20.5 44 27.5c-3-2.6-7.5-3.6-12-3.6s-9 1-12 3.6z" fill="${hc}" opacity=".82"/>`,
      spiky: `<path d="M19.5 28 20.5 18l3.5 3 1.5-7.5 3.5 5 3-7 3 6.5 3.5-5 1.5 7 3.5-2.5L44.5 28c-3-3-7-4.4-12.5-4.4S22.5 25 19.5 28z" fill="${hc}"/>`,
      curly: `<g fill="${hc}">${curls([[22, 23], [26.5, 19], [32, 17.6], [37.5, 19], [42, 23], [20, 27.5], [44, 27.5]], 4.4)}</g>`,
      afro: '',
      bald: `<path d="M27 21q5-3 10 0" stroke="#fff" stroke-width="1.6" opacity=".35" fill="none" stroke-linecap="round"/>`,
      cap: `<path d="M18.5 27c0-7 6-11.5 13.5-11.5S45.5 20 45.5 27z" fill="#d6283c"/><path d="M42 26.6h9" stroke="#a91d2f" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="15.8" r="1.6" fill="#a91d2f"/>`,
      hijab: `<path fill-rule="evenodd" d="M32 15c-8.6 0-15 6.6-15 16v12c4 5 9.4 7.4 15 7.4S43 48 47 43V31c0-9.4-6.4-16-15-16zm0 5c-6.4 0-10.6 4.8-10.6 11.2S25.8 43.4 32 43.4 42.6 37.6 42.6 31.2 38.4 20 32 20z" fill="${c.scarf}"/>`
    }[H] || '';
    const beard = L.beard === 'beard' ? `<path d="M19.6 31c0 9.6 5.4 16 12.4 16s12.4-6.4 12.4-16c-1.6 3.6-3.6 5.6-6 6-1.6-1.6-4-2.4-6.4-2.4s-4.8.8-6.4 2.4c-2.4-.4-4.4-2.4-6-6z" fill="${hc}"/>`
      : L.beard === 'stubble' ? `<path d="M20.4 33c1 7 5.6 11.6 11.6 11.6S42.6 40 43.6 33c-2 3-4.4 4.4-6.6 4.4-1.4-1.2-3.2-1.8-5-1.8s-3.6.6-5 1.8c-2.2 0-4.6-1.4-6.6-4.4z" fill="${hc}" opacity=".32"/>`
      : L.beard === 'moustache' ? `<path d="M26.4 35.4c2-1.8 3.8-1.8 5.6-.6 1.8-1.2 3.6-1.2 5.6.6-1.8.4-3.8.4-5.6-.2-1.8.6-3.8.6-5.6.2z" fill="${hc}"/>` : '';
    const E = L.expression, mc = L.beard === 'beard' ? '#fbe9e4' : '#18213f', line = d => `<path d="${d}" fill="none" stroke="${mc}" stroke-width="1.6" stroke-linecap="round"/>`;
    const mouth = { smile: line('M28.6 36.4q3.4 2.6 6.8 0'), calm: line('M29.6 36.9q2.4.9 4.8 0'),
      grin: `<path d="M27.4 35.4q4.6 5.4 9.2 0z" fill="#7a2f3a"/><path d="M28.5 35.7h7q-.7 1.5-3.5 1.5t-3.5-1.5z" fill="#fff"/>`,
      laugh: `<path d="M26.8 35q5.2 7 10.4 0z" fill="#7a2f3a"/><path d="M28 35.3h8q-.8 1.3-4 1.3t-4-1.3z" fill="#fff"/><path d="M29.6 38.6q2.4-1.4 4.8 0-2.4 1.6-4.8 0z" fill="#f08a9b"/>`,
      wink: line('M28.6 36.2q3.6 3 7 -.4'), surprised: `<ellipse cx="32" cy="37.3" rx="1.9" ry="2.4" fill="#7a2f3a"/>`,
      tongue: line('M28.6 36.4q3.4 2.6 6.8 0') + `<path d="M31.2 37.6h3.2v1.4a1.6 1.6 0 0 1-3.2 0z" fill="#f08a9b"/>` }[E];
    const iris = EYES[L.eyes], big = E === 'surprised' ? .4 : 0;
    const eye = x => L.eyes === 'dark' ? `<circle cx="${x}" cy="31.6" r="${1.6 + big}" fill="#18213f"/><circle cx="${x + .5}" cy="31" r=".45" fill="#fff" opacity=".9"/>`
      : `<circle cx="${x}" cy="31.6" r="${1.9 + big}" fill="${iris}"/><circle cx="${x}" cy="31.6" r=".95" fill="#18213f"/><circle cx="${x + .6}" cy="30.9" r=".5" fill="#fff" opacity=".95"/>`;
    const shut = x => `<path d="M${x - 1.9} 32.2q1.9-2.6 3.8 0" fill="none" stroke="#18213f" stroke-width="1.5" stroke-linecap="round"/>`;
    const eyes = E === 'laugh' ? shut(27.6) + shut(36.4) : E === 'wink' ? `<g class="ch-eyes">${eye(27.6)}</g>${shut(36.4)}` : `<g class="ch-eyes">${eye(27.6)}${eye(36.4)}</g>`;
    const browY = E === 'surprised' ? 26.2 : 27.6;
    const face = { freckles: `<g fill="#a8643c" opacity=".7"><circle cx="23.4" cy="34.4" r=".55"/><circle cx="25" cy="35.6" r=".55"/><circle cx="26.2" cy="34.2" r=".55"/><circle cx="37.8" cy="34.2" r=".55"/><circle cx="39" cy="35.6" r=".55"/><circle cx="40.6" cy="34.4" r=".55"/></g>`,
      blush: `<circle cx="24.4" cy="35" r="2.9" fill="#f08a9b" opacity=".6"/><circle cx="39.6" cy="35" r="2.9" fill="#f08a9b" opacity=".6"/>`,
      star: `<path class="ch-twinkle" d="m40 32.6.8 1.7 1.9.2-1.4 1.3.4 1.9-1.7-1-1.7 1 .4-1.9-1.4-1.3 1.9-.2z" fill="#f4c542" stroke="#c9952a" stroke-width=".3"/>`,
      heart: `<path d="M24.4 37q-2.6-1.8-2.6-3.4a1.4 1.4 0 0 1 2.6-.6 1.4 1.4 0 0 1 2.6.6q0 1.6-2.6 3.4z" fill="#e0445a"/>`,
      plaster: `<g transform="rotate(-24 39.4 35)"><rect x="36.6" y="33.8" width="5.6" height="2.4" rx="1.2" fill="#f3cfa4" stroke="#d7a877" stroke-width=".3"/><rect x="38.6" y="33.8" width="1.6" height="2.4" fill="#fbe6cb"/></g>` }[L.face] || '';
    const hat = H === 'cap' ? '' : ({
      beanie: `<path d="M18.4 27.2c0-8.8 6-13.8 13.6-13.8s13.6 5 13.6 13.8z" fill="${c.bottom}"/><path d="M24 15.6v9M28 14v10.6M32 13.4v11.2M36 14v10.6M40 15.6v9" stroke="#fff" stroke-width=".7" opacity=".25"/><rect x="17.4" y="23.8" width="29.2" height="5" rx="2.5" fill="#fff"/><rect x="17.4" y="23.8" width="29.2" height="5" rx="2.5" fill="${c.top}" opacity=".25"/><circle cx="32" cy="12" r="3" fill="#fff"/>`,
      beret: `<ellipse cx="30" cy="17.6" rx="14.6" ry="6.6" fill="${c.bottom}" transform="rotate(-10 30 17.6)"/><ellipse cx="27" cy="15.6" rx="7" ry="2.4" fill="#fff" opacity=".14" transform="rotate(-10 27 15.6)"/><path d="M31 11.4v-2.2" stroke="${c.bottom}" stroke-width="1.6" stroke-linecap="round"/>`,
      gradcap: `<path d="M22.4 18.4v5c5.6 2.8 13.6 2.8 19.2 0v-5z" fill="#232a44"/><path d="M13.4 16 32 9.2 50.6 16 32 22.8z" fill="${INK}"/><path d="M32 16l13.6.4" stroke="#e3a843" stroke-width="1"/><g class="ch-tassel"><path d="M45.6 16.4v7" stroke="#e3a843" stroke-width="1.1" stroke-linecap="round"/><path d="M44.4 23h2.4l.5 3.4h-3.4z" fill="#e3a843"/></g>`,
      crown: `<path d="M20.6 21.4 19 10.6l5.6 4.6L28 8.4l4 6.2 4-6.2 3.4 6.8 5.6-4.6-1.6 10.8z" fill="#f4c542" stroke="#c9952a" stroke-width=".8" stroke-linejoin="round"/><rect x="20.6" y="19.6" width="22.8" height="3" rx="1" fill="#e3a01e"/><circle class="ch-twinkle" cx="32" cy="16.6" r="1.5" fill="#e0445a"/><circle cx="25.4" cy="17.8" r="1.1" fill="#3f7fd6"/><circle cx="38.6" cy="17.8" r="1.1" fill="#3f9b4f"/>`,
      party: `<path d="M24.6 20.6 34 2.6l6.6 16.6z" fill="#e06aa0"/><path d="M28.2 13.6l8.6-2.4M26.2 17.6l12.6-3.2M30.6 9.2l4.6-1.2" stroke="#fff" stroke-width="1.3" opacity=".85"/><circle class="ch-twinkle" cx="34" cy="2.8" r="2.3" fill="#f4c542"/>`,
      headphones: `<path d="M18.4 31a13.6 13.6 0 0 1 27.2 0" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/><rect x="14.8" y="27" width="6" height="10.4" rx="3" fill="${INK}"/><rect x="43.2" y="27" width="6" height="10.4" rx="3" fill="${INK}"/><rect x="16" y="29" width="2" height="6.4" rx="1" fill="${c.top}"/><rect x="46" y="29" width="2" height="6.4" rx="1" fill="${c.top}"/>`,
      flower: `<g transform="translate(43.4 20.4)"><g fill="#f08ab0"><circle cy="-2.7" r="2.3"/><circle cx="2.6" cy="-.8" r="2.3"/><circle cx="1.6" cy="2.2" r="2.3"/><circle cx="-1.6" cy="2.2" r="2.3"/><circle cx="-2.6" cy="-.8" r="2.3"/></g><circle r="1.9" fill="#f4c542"/></g>`,
      bow: `<path d="M32 15.8 24.6 11.4q-1.4 4.6 0 8.8zM32 15.8l7.4-4.4q1.4 4.6 0 8.8z" fill="#e0445a"/><circle cx="32" cy="15.8" r="2.1" fill="#b02a40"/>`
    }[L.hat] || '');
    const tint = `color-mix(in srgb, ${c.top} 16%, #fff)`;
    const scene = { sky: `<ellipse cx="13" cy="15" rx="8" ry="3.4" fill="#fff" opacity=".9"/><ellipse cx="17" cy="12.6" rx="4.6" ry="3" fill="#fff" opacity=".9"/><ellipse class="ch-cloud" cx="52" cy="22" rx="7" ry="3" fill="#fff" opacity=".85"/>`,
      sunset: `<circle cx="12" cy="18" r="8.6" fill="#ff9d5c" opacity=".8"/><path d="M0 30h64v34H0z" fill="#ffb38a" opacity=".55"/>`,
      mint: `<circle cx="50" cy="12" r="15" fill="#fff" opacity=".4"/>`, lilac: `<circle cx="13" cy="13" r="15" fill="#fff" opacity=".4"/>`,
      sunny: `<g class="ch-rays" stroke="#ffcf4d" stroke-width="4" stroke-linecap="round" opacity=".75">${[0, 30, 60, 90, 120, 150].map(a => `<path d="M32 -2v68" transform="rotate(${a} 32 32)"/>`).join('')}</g><circle cx="32" cy="32" r="21" fill="#ffe59a"/>`,
      night: `<g fill="#fff">${[[10, 14, 1], [20, 7, .7], [47, 9, .9], [55, 22, .7], [8, 30, .7], [56, 36, .9], [14, 44, .6]].map(([x, y, r], i) => `<circle class="ch-twinkle" style="animation-delay:${-i * .7}s" cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g><path d="M50 8a6 6 0 1 0 5.4 8.6A5 5 0 0 1 50 8z" fill="#ffe59a"/>`,
      confetti: `<g class="ch-confetti">${[[9, 16, '#e0445a'], [18, 8, '#3f7fd6'], [48, 8, '#f4c542'], [56, 20, '#3f9b4f'], [7, 34, '#7b4bc4'], [57, 38, '#ee7b30'], [12, 48, '#1f9d8b'], [52, 50, '#e06aa0'], [30, 5, '#1f9d8b']].map(([x, y, col], i) => `<rect x="${x}" y="${y}" width="3" height="1.6" rx=".6" fill="${col}" transform="rotate(${i * 37} ${x} ${y})"/>`).join('')}</g>` }[L.bg] || '';
    const buddy = pet(L.pet, 51.5, 52, 1.2, 'ch-pet');
    const specs = L.glasses === 'round' ? `<g fill="none" stroke="${INK}" stroke-width="1.4"><circle cx="27.4" cy="31.4" r="3.6"/><circle cx="36.6" cy="31.4" r="3.6"/><path d="M31 31.2q1-.8 2 0M23.8 30.6l-3.4-1M40.2 30.6l3.4-1"/></g>`
      : L.glasses === 'square' ? `<g fill="none" stroke="${INK}" stroke-width="1.4"><rect x="23.4" y="28.4" width="7.4" height="5.8" rx="1.4"/><rect x="33.2" y="28.4" width="7.4" height="5.8" rx="1.4"/><path d="M30.8 31h2.4M23.4 30.4l-3-1M40.6 30.4l3-1"/></g>` : '';
    const ears = H === 'hijab' ? '' : `<ellipse cx="19.6" cy="32" rx="2" ry="2.8" fill="${c.skin2}"/><ellipse cx="44.4" cy="32" rx="2" ry="2.8" fill="${c.skin2}"/>`;
    const rings = L.earrings === 'studs' && H !== 'hijab' ? `<circle cx="19.4" cy="35.6" r="1.4" fill="#f4c542" stroke="#c9952a" stroke-width=".5"/><circle cx="44.6" cy="35.6" r="1.4" fill="#f4c542" stroke="#c9952a" stroke-width=".5"/>` : '';
    const neck = L.outfit === 'dress' ? `<path d="M26 48q6 5 12 0" stroke="${c.bottom}" stroke-width="2" fill="none"/>` : `<path d="M28 47.5h8l-4 5z" fill="#fff" opacity=".85"/>`;
    return `<svg class="ch-portrait" data-gender="${L.g}" viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="${BGS[L.bg] || tint}"/>
      <clipPath id="${id}"><circle cx="32" cy="32" r="32"/></clipPath><g clip-path="url(#${id})">${scene}<g class="ch-person">
      <g class="ch-head">${back}</g><path d="M12 66c0-12 9-19 20-19s20 7 20 19z" fill="${c.top}"/>${neck}
      <rect x="28.5" y="40" width="7" height="8" rx="3" fill="${c.skin2}"/><g class="ch-head">${ears}<circle cx="32" cy="31" r="12.5" fill="${c.skin}"/>
      ${eyes}<path d="M25.6 ${browY}q2-1 4 0M34.4 ${browY}q2-1 4 0" stroke="${H === 'bald' || H === 'hijab' ? '#5a3a2a' : hc}" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".8"/>
      <circle cx="24.6" cy="35" r="2" fill="#f3a3a3" opacity=".5"/><circle cx="39.4" cy="35" r="2" fill="#f3a3a3" opacity=".5"/>${face}${beard}${mouth}${front}${specs}${rings}${hat}</g></g>${buddy}</g></svg>`;
  }

  /* ── first languages: a hello and a "well done" in each, for small surprises ── */
  const LANGS = {
    ar: ['Arabic', 'مرحبا', 'أحسنت', 1], fa: ['Persian (Farsi)', 'سلام', 'آفرین', 1], prs: ['Dari', 'سلام', 'آفرین', 1], ps: ['Pashto', 'سلام', 'شاباس', 1],
    ur: ['Urdu', 'السلام علیکم', 'شاباش', 1], ckb: ['Kurdish (Sorani)', 'سڵاو', 'دەستخۆش', 1], kmr: ['Kurdish (Kurmanji)', 'Silav', 'Destê te xweş be'], he: ['Hebrew', 'שלום', 'כל הכבוד', 1],
    tr: ['Turkish', 'Merhaba', 'Aferin'], az: ['Azerbaijani', 'Salam', 'Afərin'], uz: ['Uzbek', 'Salom', 'Barakalla'], kk: ['Kazakh', 'Сәлем', 'Жарайсың'],
    zh: ['Chinese (Mandarin)', '你好', '太棒了'], yue: ['Cantonese', '你好', '好叻'], ja: ['Japanese', 'こんにちは', 'よくできました'], ko: ['Korean', '안녕하세요', '잘했어요'],
    vi: ['Vietnamese', 'Xin chào', 'Làm tốt lắm'], th: ['Thai', 'สวัสดี', 'เก่งมาก'], id: ['Indonesian', 'Halo', 'Bagus sekali'], ms: ['Malay', 'Helo', 'Syabas'], tl: ['Filipino (Tagalog)', 'Kumusta', 'Magaling'],
    hi: ['Hindi', 'नमस्ते', 'शाबाश'], bn: ['Bengali', 'হ্যালো', 'শাবাশ'], pa: ['Punjabi', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'ਸ਼ਾਬਾਸ਼'], ta: ['Tamil', 'வணக்கம்', 'நன்று'], ne: ['Nepali', 'नमस्ते', 'स्याबास'], si: ['Sinhala', 'ආයුබෝවන්', 'ශාබාෂ්'],
    es: ['Spanish', '¡Hola', '¡Bien hecho!'], pt: ['Portuguese', 'Olá', 'Muito bem!'], fr: ['French', 'Bonjour', 'Bravo !'], it: ['Italian', 'Ciao', 'Ottimo lavoro!'], de: ['German', 'Hallo', 'Gut gemacht!'],
    nl: ['Dutch', 'Hallo', 'Goed gedaan!'], pl: ['Polish', 'Cześć', 'Dobra robota!'], ro: ['Romanian', 'Salut', 'Bravo!'], el: ['Greek', 'Γεια σου', 'Μπράβο!'], ru: ['Russian', 'Привет', 'Молодец!'], uk: ['Ukrainian', 'Привіт', 'Молодець!'],
    am: ['Amharic', 'ሰላም', 'ጎበዝ'], sw: ['Swahili', 'Habari', 'Hongera'], en: ['English', 'Hello', 'Well done!']
  };
  function lang(code) { const L = LANGS[code]; if (!L) return null; return { code, name: L[0], hello: L[1], done: L[2], rtl: !!L[3] }; }
  /* "¡Hola, Isla!" / "سلام Isla" — the hello and the name, each in its own direction */
  function hello(code, name) { const L = lang(code); if (!L || code === 'en') return ''; const esc = s => String(s || '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);
    const word = `<bdi lang="${code}" dir="${L.rtl ? 'rtl' : 'ltr'}">${esc(L.hello)}${name ? '' : '!'}</bdi>`;   // the "!" inside, so it sits on the correct side in Arabic script
    return name ? `${word}, <bdi>${esc(name)}</bdi>!` : word; }

  window.IELTSCharacter = { walker, portrait, resolve, norm, lang, hello, LANGS, HERITAGE, BASE,
    OPTIONS: { skin: SKIN_NAMES, hair: HAIRS, hairColor: HAIR_COLOR_NAMES, top: TOP_NAMES, outfit: OUTFITS, glasses: GLASSES, beard: BEARDS, earrings: EARRINGS,
      expression: EXPRESSIONS, eyes: EYE_NAMES, face: FACES, hat: HATS, pet: PETS, carry: CARRY, bg: BG_NAMES },
    SWATCH: { skin: k => SKINS[k][0], hairColor: k => HAIR_COLORS[k], top: k => TOPS[k][0], eyes: k => EYES[k], bg: k => BGS[k] || 'conic-gradient(#d6283c, #e3a843, #1f9d8b, #2f6db5, #7b4bc4, #d6283c)' },
    petFace: (kind, size = 40) => `<svg viewBox="-9 -12 18 20" width="${size}" height="${size}" aria-hidden="true">${pet(kind, 0, 0, 1, 'ch-pet')}</svg>`,
    LABELS: { female: 'Female', male: 'Male', nonbinary: 'Non-binary / LGBTQ+', unspecified: 'Prefer not to say' } };
})();
