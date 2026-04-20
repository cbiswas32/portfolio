// Single source of truth for all styles.
// In a real Vite project this would be a .css file - we inject it manually
// here because we're not using CSS modules or a preprocessor.

export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #0a0f1a;
    --bg2:       #0f1624;
    --surface:   rgba(255,255,255,0.04);
    --border:    rgba(255,255,255,0.07);
    --accent:    #00e5a0;
    --accent2:   #00b4d8;
    --text:      #ccd6f6;
    --muted:     #8892b0;
    --white:     #e6f1ff;
    --font-head: 'Plus Jakarta Sans', sans-serif;
    --font-mono: 'Plus Jakarta Sans', sans-serif;
    --font-body: 'Plus Jakarta Sans', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-weight: 300;
    line-height: 1.7;
    overflow-x: hidden;
  }

  ::selection { background: var(--accent); color: #000; }

  a { color: var(--accent); text-decoration: none; transition: color .2s; }
  a:hover { color: var(--accent2); }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 99px; }

  /* ---- Root layout ---- */
  .portfolio {
    max-width: 1100px;
    width: 97%;
    margin: 0 auto;
    display: flex;
    gap: 0;
    min-height: 100vh;
    padding: 0 24px;
  }

  /* ---- Left sidebar ---- */
  .left {
    flex: 1;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 60px;
    
  }

  

  .left-top{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   gap: 4px;
  
  }

  .left-top .greeting {
    font-size: 0.72rem;
    color: var(--accent);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 12px;
  }

  /* white-space: nowrap keeps "Chinmoy Biswas" on a single line at all times.
     clamp() then scales the size down gracefully on narrower viewports
     instead of overflowing. */
  .left-top h1 {
    font-family: var(--font-head);
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  .left-top h2 {
    font-family: var(--font-head);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.04em;
    margin-bottom: 16px;
  }

  .left-top > p {
  font-size: 0.75rem;
  color: var(--muted);
  max-width: 260px;
  line-height: 1.7;
  font-weight: 300;

  text-align: left;  
  margin: 0;         
  }

  /* ---- Nav ---- */
  .nav { margin-top: 48px; display: flex; flex-direction: column; gap: 4px; }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    padding: 6px 0;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    transition: color .2s;
    background: none;
    border: none;
    text-align: left;
  }

  .nav-item .nav-line {
    height: 1px;
    background: var(--muted);
    transition: width .3s, background .2s;
    width: 24px;
  }

  .nav-item.active,
  .nav-item:hover { color: var(--white); }

  .nav-item.active .nav-line,
  .nav-item:hover .nav-line { width: 48px; background: var(--accent); }

  /* ---- Socials ---- */
  .socials { display: flex; gap: 16px; align-items: center; }

  .social-link {
    color: var(--muted);
    transition: color .2s, transform .2s;
    display: flex;
    align-items: center;
    margin-top: 2rem
  }

  .social-link:hover { color: var(--accent); transform: translateY(-2px); }
  .social-link svg { width: 18px; height: 18px; fill: currentColor; }

  /* ---- Right main content ---- */
  .right {
    flex: 1;
    padding: 96px 0 120px 64px;
    min-width: 0;
  }

  .section { margin-bottom: 120px; }

  .section-label {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
    max-width: 80px;
  }

  /* ---- About ---- */
  .about-text { font-size: 0.9rem; color: var(--muted); max-width: 520px; }
  .about-text p {margin:0;
   margin-bottom: 16px; text-align: left;}
  .about-text strong { color: var(--text); font-weight: 500; }
  .about-text a { color: var(--accent); border-bottom: 1px solid transparent; transition: border-color .2s; }
  .about-text a:hover { border-color: var(--accent); }

  .skills-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }

  .chip {
    font-size: 0.65rem;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 99px;
    border: 1px solid var(--accent);
    color: var(--accent);
    letter-spacing: 0.05em;
    transition: background .2s, color .2s;
  }

  .chip:hover { background: var(--accent); color: #000; cursor: default; }

  /* ---- Experience cards ---- */
  .exp-card {
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 0 24px;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid transparent;
    transition: background .25s, border-color .25s;
    margin-bottom: 4px;
    cursor: default;
  }

  .exp-card:hover {
    background: var(--surface);
    border-color: var(--border);
  }

  .exp-date {
    font-size: 0.65rem;
    font-weight: 500;
    color: var(--muted);
    padding-top: 4px;
    letter-spacing: 0.05em;
    text-align: right;
    line-height: 1.5;
    text-transform: uppercase;
  }
  
  .exp-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .exp-body h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 2px;
    line-height: 1.3;
  }

  .exp-company {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 10px;
    letter-spacing: 0.04em;
  }

  .exp-desc {
    font-size: 0.845rem;
    font-weight: 300;
    text-align:  left;
    color: var(--muted);
    line-height: 1.7;
    margin:  0px;
    margin-bottom: 14px;

  }

  /* ---- Shared tag list ---- */
  .tag-list { display: flex; flex-wrap: wrap; gap: 6px; }

  .tag {
    font-size: 0.62rem;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 99px;
    background: rgba(0,229,160,0.1);
    color: var(--accent);
    letter-spacing: 0.04em;
  }

  /* ---- Project cards ---- */
  .proj-card {
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--surface);
    transition: border-color .25s, transform .25s, box-shadow .25s;
    margin-bottom: 16px;
    cursor: default;
  }

  .proj-card:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(0,229,160,0.08);
  }

  .proj-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .proj-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 8px;
    text-align: left;
  }

  .proj-icon { color: var(--muted); font-size: 1.1rem; }

  .proj-desc {
    font-size: 0.845rem;
    font-weight: 300;
    color: var(--muted);
    margin-bottom: 16px;
    line-height: 1.65;
    text-align: left;
    margin: 0;
    margin-bottom: 1rem;
  }

  /* ---- Certifications ---- */
 .cert-item {
  display: flex;
  gap: 12px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color .25s, transform .25s, box-shadow .25s;
  margin-bottom: 16px;
  cursor: default;
}
.cert-item:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(0,229,160,0.08);
}

.cert-left {
  display: flex;
  align-items: flex-start;
  padding-top: 6px;
}

.cert-icon {
  width: 18px;
  height: 18px;
}

.cert-icon.degree {
  color: #00c8ff;
}

.cert-icon.cert {
  color: #00ff95;
}

.cert-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.cert-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white);
  text-align: left;
}

.cert-sub {
  font-size: 0.8rem;
  color: var(--muted);
  text-align: left;
}

.cert-meta {
  font-size: 0.75rem;
  color: var(--muted);
  display: flex;
  gap: 10px;
  text-align: left;
}

.cert-item a {
  font-size: 0.75rem;
  color: var(--accent);
  text-decoration: none;
  margin-top: 4px;
  text-align: left;
}

.cert-item a:hover {
  text-decoration: underline;
  text-align: left;
}
  /* ---- Footer ---- */
  .footer {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--muted);
    padding-top: 48px;
    line-height: 1.8;
    border-top: 1px solid var(--border);
  }

  .footer a { color: var(--accent); }

  /* ---- Cursor glow ---- */
  .cursor-glow {
    pointer-events: none;
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left .08s, top .08s;
    z-index: 0;
  }

  /* ---- Scroll reveal ---- */
  .reveal { opacity: 0; transform: translateY(20px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ================================================================
     RESPONSIVE BREAKPOINTS
     Desktop (default): two-column sticky sidebar layout.
     We narrow down from there at each breakpoint.
  ================================================================ */

  /* ---- Tablet: 768px - 1024px ---- */
  @media (max-width: 1024px) {
    .portfolio { padding: 0 32px; }

    .left {
      width: 280px;
      padding: 72px 0 40px;
    }

    /* clamp handles the font size automatically but we nudge it here too */
    .left-top h1 { font-size: clamp(1.6rem, 4vw, 2.2rem); }
    .left-top > p { max-width: 220px; }

    .right { padding: 72px 0 100px 40px; }
  }

  /* ---- Mobile: below 768px ----
     Sidebar loses sticky positioning and stacks above the content.
     Nav is hidden - not useful without a persistent sidebar.
     The user scrolls naturally on mobile. */
  @media (max-width: 768px) {
    .portfolio {
      flex-direction: column;
      padding: 0 20px;
    }

    .left {
      position: static;
      height: auto;
      width: 100%;
      padding: 52px 0 28px;
      justify-content: flex-start;
      gap: 28px;
    }

    /* clamp scales the name down to fit narrow screens
       without ever letting it wrap to a second line */
    .left-top h1 { font-size: clamp(1.7rem, 7vw, 2.4rem); }

    .left-top > p { max-width: 100%; }

    .nav { display: none; }

    .right { padding: 8px 0 80px 0; }

    .section { margin-bottom: 72px; }

    /* stack date above body text */
    .exp-card {
      grid-template-columns: 1fr;
      gap: 4px 0;
    }

    .exp-date {
      text-align: left;
      margin-bottom: 6px;
    }

    /* disable the lift animation on touch - it lingers on tap */
    .proj-card:hover { transform: none; }

    .about-text { max-width: 100%; }
  }

  /* ---- Small mobile: below 480px ---- */
  @media (max-width: 480px) {
    .portfolio { padding: 0 16px; }

    .left { padding: 40px 0 24px; }

    .left-top h1 { font-size: clamp(1.45rem, 8vw, 1.9rem); }

    .left-top h2 { font-size: 0.85rem; }

    .right { padding: 4px 0 64px 0; }

    .section { margin-bottom: 56px; }

    .exp-card { padding: 16px 12px; }

    .proj-card { padding: 18px 16px; }

    /* larger tap targets on cert rows */
    .cert-item { padding: 16px 12px; }

    .skills-grid { gap: 6px; }

    .chip { font-size: 0.62rem; padding: 4px 10px; }
  }
`;

export function injectGlobalStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("portfolio-global-css")) return;

  const styleTag = document.createElement("style");
  styleTag.id = "portfolio-global-css";
  styleTag.textContent = GLOBAL_CSS;
  document.head.appendChild(styleTag);
}
