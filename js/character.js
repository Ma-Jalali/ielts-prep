/* IELTS Prep · the student's character on the maps and the home page. The teacher picks each student's gender when
   adding them (Students page): female → long hair, male → short hair, nonbinary → a bob with a rainbow scarf,
   unspecified → a cap. window.IELTSCharacter.walker(g) is the small figure that walks the road maps (about 26px tall,
   drawn around 0,0 like the old walker); .portrait(g) is a round picture for the home page. */
(() => {
  const SKIN = '#f0c9a0', SKIN2 = '#e2b58a', INK = '#2c3e50';
  const look = g => ({
    female: { hair: '#5a3624', top: '#d6283c', bottom: '#a91d2f', pack: '#e3a843' },
    male: { hair: '#3b2a20', top: '#2f6db5', bottom: '#24527f', pack: '#e3a843' },
    nonbinary: { hair: '#6b3fa0', top: '#1f9d8b', bottom: '#167566', pack: '#f4a52e' },
    unspecified: { hair: '#3b2a20', top: '#e3a843', bottom: '#b98320', pack: '#2f6db5' }
  })[g] || null;
  const norm = g => (['female', 'male', 'nonbinary', 'unspecified'].includes(g) ? g : 'unspecified');

  function walker(gender) {
    const g = norm(gender), c = look(g);
    const backHair = g === 'female' ? `<path d="M-4.6-12.5c-.6 4 .2 8.6 1.2 11.2h6.8c1-2.6 1.8-7.2 1.2-11.2z" fill="${c.hair}"/>` : g === 'nonbinary' ? `<path d="M-4.8-12.5c-.4 2.6 0 5 .6 6.4h8.4c.6-1.4 1-3.8.6-6.4z" fill="${c.hair}"/>` : '';
    const body = g === 'female' ? `<path d="M-3.6-7h7.2l2.6 12.2h-12.4z" fill="${c.top}"/><path d="M-5.6 2.4h11.2" stroke="${c.bottom}" stroke-width="1.6"/>` : `<rect x="-4.5" y="-7" width="9" height="12" rx="3.5" fill="${c.top}"/>`;
    const hairTop = g === 'female' ? `<path d="M-4.4-11.2a4.4 4.4 0 0 1 8.8-.4c-1.6-1.4-4.6-1.8-8.8.4z" fill="${c.hair}"/><path d="M-4.2-11.6c1-2.4 4.6-3.4 7.4-1.6" stroke="${c.hair}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`
      : g === 'male' ? `<path d="M-4.2-11.5a4.2 4.2 0 0 1 8.4-1c-2 .6-5 .6-8.4 1z" fill="${c.hair}"/>`
      : g === 'nonbinary' ? `<path d="M-4.4-11a4.4 4.4 0 0 1 8.8 0c-1.2-1.2-3-1.6-4.4-1-1.4-.6-3.2-.2-4.4 1z" fill="${c.hair}"/>`
      : `<path d="M-4.4-11.6a4.4 4.4 0 0 1 8.8 0z" fill="#d6283c"/><path d="M3.6-11.8h3.6" stroke="#a91d2f" stroke-width="1.6" stroke-linecap="round"/>`;
    const scarf = g === 'nonbinary' ? `<path d="M-3.4-7.4h6.8" stroke="#e8414d" stroke-width="1.4"/><path d="M-3.4-6.2h6.8" stroke="#f4a52e" stroke-width="1.2"/><path d="M-3.4-5.1h6.8" stroke="#2fb38a" stroke-width="1.1"/><path d="M-3.4-4.1h6.8" stroke="#2b67d1" stroke-width="1"/><path d="M2-4.5l1.4 4" stroke="#8a5cc7" stroke-width="1.4" stroke-linecap="round"/>` : '';
    return `<g transform="translate(-34 -2)"><g class="cm-walker" data-gender="${g}"><ellipse cy="13" rx="7" ry="1.8" fill="#18213f" opacity=".14"/>
      <path d="M-2 4-4 12M2 4l3 8" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>${backHair}<rect x="-8" y="-6" width="5" height="9" rx="2" fill="${c.pack}"/>${body}${scarf}
      <path d="M4-4l3 5" stroke="${SKIN}" stroke-width="2.2" stroke-linecap="round"/><circle cy="-11" r="4.2" fill="${SKIN}"/>${hairTop}</g></g>`;
  }

  function portrait(gender, size = 64) {
    const g = norm(gender), c = look(g);
    const back = g === 'female' ? `<path d="M17 30c-2 10-1 20 3 26h24c4-6 5-16 3-26z" fill="${c.hair}"/>` : g === 'nonbinary' ? `<path d="M17.5 29c-1 6 0 11 2 14h25c2-3 3-8 2-14z" fill="${c.hair}"/>` : '';
    const top = g === 'female' ? `<path d="M18.5 30c0-9 6-14 13.5-14s13.5 5 13.5 14c-3-4-8-6-13-6-5.4 0-10 2.2-14 6z" fill="${c.hair}"/><path d="M22 24c4-5 13-6 19-1" stroke="${c.hair}" stroke-width="3" fill="none" stroke-linecap="round"/>`
      : g === 'male' ? `<path d="M19.5 28c0-8 5.5-12.5 12.5-12.5S44.5 20 44.5 28c-2-2.4-5-3.4-8-3-2-2-6-2.4-8.5-1-3 .4-6.5 1.6-8.5 4z" fill="${c.hair}"/>`
      : g === 'nonbinary' ? `<path d="M18.5 30c0-9 6-14 13.5-14s13.5 5 13.5 14c-2.5-2.6-6-3.6-9-3-1.8-1.6-6-1.6-8.6 0-3-.6-7 .4-9.4 3z" fill="${c.hair}"/><circle cx="41.5" cy="22" r="2.4" fill="#f4a52e"/>`
      : `<path d="M18.5 27c0-7 6-11.5 13.5-11.5S45.5 20 45.5 27z" fill="#d6283c"/><path d="M42 26.6h9" stroke="#a91d2f" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="15.8" r="1.6" fill="#a91d2f"/>`;
    const scarf = g === 'nonbinary' ? `<g stroke-linecap="round"><path d="M22 47.5h20" stroke="#e8414d" stroke-width="2.6"/><path d="M22 50h20" stroke="#f4a52e" stroke-width="2.4"/><path d="M22 52.3h20" stroke="#2fb38a" stroke-width="2.2"/><path d="M22 54.4h20" stroke="#2b67d1" stroke-width="2"/></g>` : '';
    return `<svg class="ch-portrait" data-gender="${g}" viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="color-mix(in srgb, ${c.top} 16%, #fff)"/>
      <clipPath id="chc-${g}"><circle cx="32" cy="32" r="32"/></clipPath><g clip-path="url(#chc-${g})">
      ${back}<path d="M12 66c0-12 9-19 20-19s20 7 20 19z" fill="${c.top}"/><path d="M28 47.5h8l-4 5z" fill="#fff" opacity=".85"/>
      <rect x="28.5" y="40" width="7" height="8" rx="3" fill="${SKIN2}"/><circle cx="32" cy="31" r="12.5" fill="${SKIN}"/>
      <circle cx="27.6" cy="31.6" r="1.6" fill="#18213f"/><circle cx="36.4" cy="31.6" r="1.6" fill="#18213f"/><path d="M28.6 36.4q3.4 2.6 6.8 0" fill="none" stroke="#18213f" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="24.6" cy="35" r="2" fill="#f3a3a3" opacity=".55"/><circle cx="39.4" cy="35" r="2" fill="#f3a3a3" opacity=".55"/>${top}${scarf}</g></svg>`;
  }

  window.IELTSCharacter = { walker, portrait, norm, LABELS: { female: 'Female', male: 'Male', nonbinary: 'Non-binary / LGBTQ+', unspecified: 'Prefer not to say' } };
})();
