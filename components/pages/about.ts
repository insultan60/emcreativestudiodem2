import { FOOTER_HTML } from "../footer";

// Body markup for /about, lifted from em-creative-studio-about_5.html.
// Rendered as-is: the stylesheet in app/about/page.css and the behaviour in
// public/scripts/pages/about.js are both written against this exact structure.
export const HTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="arw" viewBox="0 0 17 10">
    <path d="M0 5h15M11 1l4 4-4 4" stroke="currentColor" stroke-width="1.4" fill="none"/>
  </symbol>
  <symbol id="ic-heart" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></symbol>
  <symbol id="ic-film" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 3v18M17 3v18M2 8h5M17 8h5M2 16h5M17 16h5"/></symbol>
  <symbol id="ic-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></symbol>
  <symbol id="ic-gear" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></symbol>
</svg>

<!-- ============================== NAV ========================== -->
<header class="nav">
  <div class="nav-pill">
    <a class="brand" href="/"><img src="/images/logo-em.svg" alt="The EM Creative Studio" width="2000" height="2000"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services">Services</a>
        <a href="/about" aria-current="page">About</a>
        <a href="/packages">Packages</a>
        <a href="/work">Work</a>
        <a href="/blog">Blog</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
    <div class="nav-collapse">
      <a class="btn btn--dark" href="/contact">
        Start a project <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
    </div>
  </div>
</header>

<!-- ============================== HERO ========================= -->
<section class="hero" id="top">
  <div class="hero__ground"></div>
  <div class="abt-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <span class="eyebrow">Los Angeles &middot; Six People, One Studio</span>
    <h1 class="hero__hl" data-words>The humans <em class="tint">behind the crown.</em></h1>
  </div>

  <div class="abt-cluster">
    <div class="abt-cluster__item" data-open-team="1"><img src="/images/pg/e7025139b435e968.webp" alt="Ernest"><span class="abt-cluster__tag">Ernest</span></div>
    <div class="abt-cluster__item" data-open-team="0"><img src="/images/pg/097ebd170bdf71f1.webp" alt="Seda Naumenko"><span class="abt-cluster__tag">Seda</span></div>
    <div class="abt-cluster__item" data-open-team="2"><img src="/images/pg/c93b8e9ad57b2ce2.webp" alt="Lilit"><span class="abt-cluster__tag">Lilit</span></div>
  </div>

  <p class="hero__lede">
    <strong>Six people</strong> who take real estate marketing personally, not one more logo in an agency roster.
  </p>

  <div class="hero__acts">
    <a class="btn btn--dark" href="/contact">
      Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#team">Meet the team</a>
  </div>
</section>

<!-- ============================== STORY ========================= -->
<section class="sec" id="story">
  <div class="wrap story">
    <div class="story__text">
      <span class="eyebrow" data-rise>Our Story</span>
      <h2 class="h2" data-rise>Founded on a simple belief&#58; your brand deserves more than a <span class="tint">template.</span></h2>
      <p class="lede" data-rise>EM Creative Studio was founded by Seda Naumenko in 2019, built on a background spanning marketing, branding, and real estate. What began as one founder's insistence on doing things properly has grown into a six-person studio that still treats every client relationship the same way: personally.</p>
      <p class="lede" data-rise>From brand systems and social content to full campaign direction, every project still runs through the same small group, not a rotating cast of freelancers or an account manager relaying notes to someone else's desk.</p>
      <div class="story__facts" data-rise>
        <span>Founded 2019</span>
        <span>Los Angeles, CA</span>
        <span>Team of 6</span>
        <span>Real Estate Specialists</span>
      </div>
    </div>
    <div class="story__quote" data-rise>
      <p>In a world of AI templates and generic agencies, we believe in the power of human creativity.</p>
      <div class="story__quote-attr">
        <img src="/images/pg/097ebd170bdf71f1.webp" alt="Seda Naumenko">
        <div>
          <strong>Seda Naumenko</strong>
          <span>Founder &amp; Creative Director</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================== VALUES ========================= -->
<section class="sec sec--linen" id="values">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>What We Believe</span>
        <h2 class="h2" data-rise>Four things we won't compromise on.</h2>
      </div>
      <p class="lede" data-rise>The same standards apply whether it's a single Instagram carousel or a full brand launch.</p>
    </div>
    <div class="values__grid">
      <div class="value-card" data-rise>
        <span class="value-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-heart"/></svg></span>
        <h4>Human, Not Automated</h4>
        <p>No AI templates standing in for craft. Every strategy, shot, and edit passes through someone who cares whether it's right.</p>
      </div>
      <div class="value-card" data-rise>
        <span class="value-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-film"/></svg></span>
        <h4>Story First</h4>
        <p>Trained in film and performance, not just marketing decks, we direct brand stories the way you'd direct a scene.</p>
      </div>
      <div class="value-card" data-rise>
        <span class="value-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-target"/></svg></span>
        <h4>Detail Obsessed</h4>
        <p>From color grading to carousel graphics, the small decisions get the same attention as the big ones.</p>
      </div>
      <div class="value-card" data-rise>
        <span class="value-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-gear"/></svg></span>
        <h4>Built to Last</h4>
        <p>Reliable systems and web solutions run behind the creative, so the work keeps working long after launch.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== TEAM ========================= -->
<section class="sec" id="team">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>The People</span>
        <h2 class="h2" data-rise>Six people, one studio.</h2>
      </div>
      <p class="lede" data-rise>Every project runs through this same small group. Click anyone to read their full story.</p>
    </div>

    <div class="tm-grid">
      <div class="tm-card tm-card--lead" data-open-team="0">
        <div class="tm-card__frame"><img src="/images/pg/097ebd170bdf71f1.webp" alt="Seda Naumenko"></div>
        <div class="tm-card__wash"></div>
        <span class="tm-card__hint"><svg width="14" height="14" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        <div class="tm-card__body">
          <span class="tm-card__nick">The Visionary</span>
          <h4 class="tm-card__name">Seda Naumenko</h4>
          <p class="tm-card__role">Founder &amp; Creative Director</p>
        </div>
      </div>

      <div class="tm-card" data-open-team="1">
        <div class="tm-card__frame"><img src="/images/pg/e7025139b435e968.webp" alt="Ernest"></div>
        <div class="tm-card__wash"></div>
        <span class="tm-card__hint"><svg width="14" height="14" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        <div class="tm-card__body">
          <span class="tm-card__nick">The Storyteller</span>
          <h4 class="tm-card__name">Ernest</h4>
          <p class="tm-card__role">Co-Founder &amp; Visual Storytelling Director</p>
        </div>
      </div>

      <div class="tm-card" data-open-team="2">
        <div class="tm-card__frame"><img src="/images/pg/c93b8e9ad57b2ce2.webp" alt="Lilit"></div>
        <div class="tm-card__wash"></div>
        <span class="tm-card__hint"><svg width="14" height="14" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        <div class="tm-card__body">
          <span class="tm-card__nick">The Creative Eye</span>
          <h4 class="tm-card__name">Lilit</h4>
          <p class="tm-card__role">Social Media Videographer &amp; Content Producer</p>
        </div>
      </div>

      <div class="tm-card" data-open-team="3">
        <div class="tm-card__frame"><img src="/images/pg/hayk.webp" alt="Hayk"></div>
        <div class="tm-card__wash"></div>
        <span class="tm-card__hint"><svg width="14" height="14" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        <div class="tm-card__body">
          <span class="tm-card__nick">The Story Shaper</span>
          <h4 class="tm-card__name">Hayk</h4>
          <p class="tm-card__role">Video Editor &amp; Post-Production Specialist</p>
        </div>
      </div>

      <div class="tm-card" data-open-team="4">
        <div class="tm-card__frame"><img src="/images/pg/luba.webp" alt="Luba"></div>
        <div class="tm-card__wash"></div>
        <span class="tm-card__hint"><svg width="14" height="14" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        <div class="tm-card__body">
          <span class="tm-card__nick">The Content Creator</span>
          <h4 class="tm-card__name">Luba</h4>
          <p class="tm-card__role">Content Designer &amp; Canva Specialist</p>
        </div>
      </div>

      <div class="tm-card" data-open-team="5">
        <div class="tm-card__frame"><div class="tm-card__avatar" style="background:var(--espresso)">B</div></div>
        <div class="tm-card__wash"></div>
        <span class="tm-card__hint"><svg width="14" height="14" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        <div class="tm-card__body">
          <span class="tm-card__nick">The Tech Guru</span>
          <h4 class="tm-card__name">Basit</h4>
          <p class="tm-card__role">Technology &amp; Web Solutions Lead</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- team modal -->
<div class="team-modal" id="teamModal">
  <div class="team-modal__bg"></div>
  <div class="team-modal__panel">
    <button class="team-modal__close" aria-label="Close">&times;</button>
    <img id="tmImg" src="" alt="" style="display:none">
    <div id="tmAvatar" class="team-modal__avatar" style="display:none"></div>
    <div>
      <p class="team-modal__nick" id="tmNick"></p>
      <h3 class="team-modal__name" id="tmName"></h3>
      <p class="team-modal__role" id="tmRole"></p>
      <p class="team-modal__bio" id="tmBio"></p>
      <div class="team-modal__tags" id="tmTags"></div>
      <p class="team-modal__quote" id="tmQuote"></p>
    </div>
  </div>
</div>

<!-- ============================== CTA ============================ -->
<section class="sec cta-end" id="cta">
  <div class="wrap row">
    <div>
      <span class="eyebrow" data-rise>Let's Work Together</span>
      <h2 class="h2" data-rise>You've met the team. Let's meet your brand's potential.</h2>
    </div>
    <div data-rise>
      <a class="btn btn--dark" href="mailto:hello@theemcreative.studio">
        Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
