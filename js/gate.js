/* IELTS Prep · sign-in gate. The site opens only for people the teacher has added (table public.ielts_members).
   - No session: a sign-in page (email + password; no sign-up: accounts are made by the teacher).
   - A session whose account is not on the list (never added, or removed): signed out with a message.
   - A member: their first name is kept in window.IELTS_GATE.member and the app is loaded (js/boot.js).
   The page itself is hidden until this decides (html.gate-on, set in index.html's <head>).
   Note: this keeps the site closed to anyone without an account; the files are still public on GitHub Pages. */
(() => {
  const cfg = window.DEC15_CONFIG || {}, KEY = 'ielts-member';
  const root = document.documentElement;
  const cache = { get: () => { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }, set: v => { try { v ? localStorage.setItem(KEY, JSON.stringify(v)) : localStorage.removeItem(KEY); } catch (e) { /* ignore */ } } };
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const G = window.IELTS_GATE = { client: null, member: null, firstName: '', isAdmin: false,
    async token() { const { data } = await G.client.auth.getSession(); return data.session?.access_token || ''; },
    async signOut() { cache.set(null); try { await G.client.auth.signOut(); } catch (e) { /* offline */ } location.replace(location.pathname); } };

  const loadScript = src => new Promise((ok, bad) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = bad; document.head.appendChild(s); });
  const art = () => window.IELTSSheetArt ? window.IELTSSheetArt('grad', 'gate-art') : '';
  const greet = () => { const h = new Date().getHours(); return h < 5 ? 'Working late' : h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening'; };

  function page(msg = '', kind = '') {
    let el = document.getElementById('gate'); if (!el) { el = document.createElement('div'); el.id = 'gate'; document.body.appendChild(el); }
    el.innerHTML = `<div class="gate-card">
      <div class="gate-side"><div class="gate-brand"><span class="gate-logo" aria-hidden="true">IELTS</span><b>IELTS Preparation</b><small>Academic · Band 6.5–7</small></div>${art()}
        <p>Your lessons, practice tests and notes, in one place.</p></div>
      <form class="gate-form" novalidate>
        <span class="gate-k">${greet()}</span><h1>Welcome back</h1><p class="gate-sub">Sign in with the email and password your teacher gave you.</p>
        ${msg ? `<p class="gate-msg ${kind}" role="alert">${esc(msg)}</p>` : ''}
        <label><span>Email</span><input type="email" name="email" autocomplete="username" required value="${esc(cache.get()?.email || '')}"></label>
        <label><span>Password</span><span class="gate-pw"><input type="password" name="password" autocomplete="current-password" required><button type="button" class="gate-eye" aria-label="Show password">Show</button></span></label>
        <button class="gate-go" type="submit">Sign in</button>
        <button class="gate-forgot" type="button">Forgot your password?</button>
        <p class="gate-note">No account yet? Accounts are created by your teacher. Ask them to add you.</p>
      </form></div>`;
    root.classList.add('gate-show');
    const f = el.querySelector('form'), email = f.email, pw = f.password, go = f.querySelector('.gate-go');
    (email.value ? pw : email).focus();
    f.querySelector('.gate-eye').onclick = e => { const show = pw.type === 'password'; pw.type = show ? 'text' : 'password'; e.target.textContent = show ? 'Hide' : 'Show'; };
    f.querySelector('.gate-forgot').onclick = async () => {
      if (!email.value.trim()) { page('Type your email first, then press “Forgot your password?”.', 'is-warn'); return; }
      const { error } = await G.client.auth.resetPasswordForEmail(email.value.trim(), { redirectTo: location.href.split('#')[0] });
      page(error ? 'We could not send the email. Please try again in a minute.' : 'If that email has an account, a link to choose a new password is on its way.', error ? 'is-err' : 'is-ok');
    };
    f.onsubmit = async e => { e.preventDefault(); go.disabled = true; go.textContent = 'Signing in…';
      const { error } = await G.client.auth.signInWithPassword({ email: email.value.trim(), password: pw.value });
      if (error) { page(/invalid|credentials/i.test(error.message) ? 'That email and password do not match. Check them and try again.' : 'Could not sign in: ' + error.message, 'is-err'); return; }
      check(true); };
  }

  async function check(fresh) {
    const { data } = await G.client.auth.getSession(), user = data.session?.user;
    if (!user) { page(); return; }
    let row = null, offline = false;
    try { const r = await G.client.from('ielts_members').select('first_name, role, email').eq('user_id', user.id).maybeSingle(); if (r.error) throw r.error; row = r.data; }
    catch (e) { offline = true; const c = cache.get(); if (c && c.id === user.id) row = c; }
    if (!row) { cache.set(null); if (!offline) await G.client.auth.signOut(); page(offline ? 'You are offline. Connect to the internet and sign in.' : 'This account does not have access to IELTS Preparation. If you think it should, ask your teacher.', 'is-err'); return; }
    G.member = { id: user.id, email: user.email, first_name: row.first_name || '', role: row.role }; G.firstName = G.member.first_name; G.isAdmin = row.role === 'admin';
    cache.set(G.member);
    root.classList.toggle('is-ielts-admin', G.isAdmin);
    if (fresh) { const el = document.getElementById('gate'); el.innerHTML = `<div class="gate-hello"><span class="gate-wave" aria-hidden="true">👋</span><h1>Welcome back${G.firstName ? ', ' + esc(G.firstName) : ''}</h1><p>Opening your course…</p></div>`; await new Promise(r => setTimeout(r, 900)); }
    open();
  }

  let opened = false;
  function open() { if (opened) return; opened = true;
    document.getElementById('gate')?.remove(); root.classList.remove('gate-on', 'gate-show');
    loadScript('js/boot.js?v=' + (cfg.version || ''));
    /* a removed student: checked again whenever the page comes back into view */
    document.addEventListener('visibilitychange', async () => { if (document.visibilityState !== 'visible' || !navigator.onLine) return;
      const r = await G.client.from('ielts_members').select('user_id').eq('user_id', G.member.id).maybeSingle(); if (!r.error && !r.data) G.signOut(); });
  }

  (async () => {
    try { if (!window.supabase) await loadScript('js/vendor/supabase.min.js?v=' + (cfg.version || ''));
      G.client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true, storageKey: 'dec15-auth' } });
      G.client.auth.onAuthStateChange(evt => { if (evt === 'PASSWORD_RECOVERY') G.recovery = true; if (evt === 'SIGNED_OUT' && opened) { cache.set(null); location.replace(location.pathname); } });
      await check(false);
    } catch (e) { page('The sign-in service could not be reached. Check your connection and reload the page.', 'is-err'); }
  })();
})();
