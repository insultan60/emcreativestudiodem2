// Body markup for /services/social-media-management, lifted from em-creative-studio-service-detail_2.html.
// Rendered as-is: the stylesheet in app/services/social-media-management/page.css and the behaviour in
// public/scripts/pages/serviceDetail.js are both written against this exact structure.
export const HTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="arw" viewBox="0 0 17 10">
    <path d="M0 5h15M11 1l4 4-4 4" stroke="currentColor" stroke-width="1.4" fill="none"/>
  </symbol>
  <symbol id="crown" viewBox="0 0 120 74">
    <path d="M8 68 C4 48 6 22 10 8 L24 37 L38 13 L49 33 L60 5 L71 33 L82 13 L96 37 L110 8 C114 22 116 48 112 68"
          stroke-width="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 53 C36 45 66 44 88 50 C96 52 97 58 90 60 C74 66 42 66 25 61 C19 59 16 56 20 53"
          stroke-width="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="ic-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></symbol>
  <symbol id="ic-cal" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </symbol>
  <symbol id="ic-pen" viewBox="0 0 24 24">
    <path d="M4 20l1-4.2L15.6 5.2a1.5 1.5 0 0 1 2.1 0l1.1 1.1a1.5 1.5 0 0 1 0 2.1L8.2 19 4 20z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  </symbol>
  <symbol id="ic-hash" viewBox="0 0 24 24">
    <path d="M9 3L7 21M17 3l-2 18M4 9h17M3 15h17" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </symbol>
  <symbol id="ic-chat" viewBox="0 0 24 24">
    <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="ic-crop" viewBox="0 0 24 24">
    <path d="M6 2v16a1 1 0 0 0 1 1h15M2 6h16a1 1 0 0 1 1 1v15" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="ic-report" viewBox="0 0 24 24">
    <path d="M4 20V10M11 20V4M18 20v-7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </symbol>
</svg>

<!-- ============================== NAV ========================== -->
<header class="nav">
  <div class="nav-pill">
    <a class="brand" href="/"><img src="/images/pg/901081dfa7b252f8.webp" alt="The EM Creative Studio"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services" aria-current="page">Services</a>
        <a href="/about">About</a>
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
  <div class="hero__photo" aria-hidden="true">
    <img src="https://cdn.pixabay.com/photo/2021/02/03/05/27/social-media-5976707_1280.jpg" alt="" loading="eager" decoding="async">
  </div>
  <div class="hero__photo-veil" aria-hidden="true"></div>
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <a class="hero__crumb" href="/services">
      <svg width="14" height="9" viewBox="0 0 17 10" style="transform:scaleX(-1)"><use href="#arw"/></svg>
      All Services
    </a><br>
    <span class="eyebrow">Los Angeles &middot; Service 01</span>
    <h1 class="hero__hl" data-words>Social media,<br><em class="tint">managed properly.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Content planning, posting, captions, hashtag strategy, and engagement</strong> that grows your following organically, run by the same senior team behind every other channel.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">2x avg. engagement</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">1 dedicated strategist</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">Weekly calendar</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">98% retention</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="/contact">
      Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#included">See what&rsquo;s included</a>
  </div>
</section>

<!-- ============================== WHAT'S INCLUDED ========================= -->
<section class="sec sec--linen" id="included">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          What&rsquo;s Included
        </span>
        <h2 class="h2" data-rise>Everything your feed <span class="tint">actually needs.</span></h2>
      </div>
      <p class="lede" data-rise>Six moving parts, one strategist keeping them in sync.</p>
    </div>

    <div class="incl-grid">
      <article class="incl-card" data-rise>
        <span class="incl-card__ico"><svg viewBox="0 0 24 24"><use href="#ic-cal"/></svg></span>
        <h3 class="incl-card__ttl">Content Calendar</h3>
        <p class="incl-card__body">A month planned in advance across every platform you&rsquo;re active on, so nothing goes out last-minute.</p>
      </article>
      <article class="incl-card" data-rise>
        <span class="incl-card__ico"><svg viewBox="0 0 24 24"><use href="#ic-pen"/></svg></span>
        <h3 class="incl-card__ttl">Custom Captions</h3>
        <p class="incl-card__body">Written in your brand voice, not a generic template swapped in and out every week.</p>
      </article>
      <article class="incl-card" data-rise>
        <span class="incl-card__ico"><svg viewBox="0 0 24 24"><use href="#ic-hash"/></svg></span>
        <h3 class="incl-card__ttl">Hashtag &amp; Keyword Strategy</h3>
        <p class="incl-card__body">Researched and refreshed as trends move, tuned to your specific market.</p>
      </article>
      <article class="incl-card" data-rise>
        <span class="incl-card__ico"><svg viewBox="0 0 24 24"><use href="#ic-chat"/></svg></span>
        <h3 class="incl-card__ttl">Community Management</h3>
        <p class="incl-card__body">Comments, DMs and mentions answered like a real person is behind the account, because one is.</p>
      </article>
      <article class="incl-card" data-rise>
        <span class="incl-card__ico"><svg viewBox="0 0 24 24"><use href="#ic-crop"/></svg></span>
        <h3 class="incl-card__ttl">Platform-Native Editing</h3>
        <p class="incl-card__body">Reels, Stories and static posts formatted for how each platform actually performs.</p>
      </article>
      <article class="incl-card" data-rise>
        <span class="incl-card__ico"><svg viewBox="0 0 24 24"><use href="#ic-report"/></svg></span>
        <h3 class="incl-card__ttl">Monthly Performance Report</h3>
        <p class="incl-card__body">Plain-English numbers: what grew, what didn&rsquo;t, and what we&rsquo;re changing next.</p>
      </article>
    </div>
  </div>
</section>

<!-- ============================== HOW IT RUNS (timeline) ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          How It Runs
        </span>
        <h2 class="h2" data-rise>From audit <span class="tint">to monthly report.</span></h2>
      </div>
      <p class="lede" data-rise>The same four moves, every month, so the account never goes quiet.</p>
    </div>

    <div class="timeline" data-rise>
      <div class="timeline__line" aria-hidden="true"></div>
      <div class="timeline__step">
        <div class="timeline__dot" style="--d:0ms">01</div>
        <h3 class="timeline__ttl">Audit &amp; Strategy</h3>
        <p class="timeline__body">We review your last 90 days of posts and your three closest competitors, then set content pillars that fit your market.</p>
      </div>
      <div class="timeline__step">
        <div class="timeline__dot" style="--d:120ms">02</div>
        <h3 class="timeline__ttl">Calendar &amp; Approval</h3>
        <p class="timeline__body">A full month is drafted and sent for one round of approval, not an endless back-and-forth.</p>
      </div>
      <div class="timeline__step">
        <div class="timeline__dot" style="--d:240ms">03</div>
        <h3 class="timeline__ttl">Publish &amp; Engage</h3>
        <p class="timeline__body">Posts go out on schedule, and we&rsquo;re in your comments and DMs the same day.</p>
      </div>
      <div class="timeline__step">
        <div class="timeline__dot" style="--d:360ms">04</div>
        <h3 class="timeline__ttl">Report &amp; Refine</h3>
        <p class="timeline__body">A plain-English report lands monthly, and the strategy adjusts with it.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== PROOF ========================= -->
<section class="sec sec--linen">
  <div class="wrap" style="max-width:900px">
    <div class="proof" data-rise>
      <svg class="proof__mark" viewBox="0 0 32 24" fill="currentColor"><path d="M0 24V14.4Q0 8 3.6 4T13.2 0l2 4Q11.6 5.6 9.6 8T7.2 13.6h6V24zm18 0V14.4Q18 8 21.6 4T31.2 0l2 4q-3.6 1.6-5.6 4T25.2 13.6h6V24z"/></svg>
      <p class="proof__text">&ldquo;Within three months our listings were getting twice the engagement, and our brand finally felt like us.&rdquo;</p>
      <p class="proof__cite"><b>Michael Torres</b> &middot; Broker, Westside Realty Group</p>
    </div>
  </div>
</section>

<!-- ============================== PACKAGE CROSS-SELL ========================= -->
<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="xsell" data-rise>
      <div>
        <h3 class="xsell__ttl">Social Media Management ships inside every package.</h3>
        <p class="xsell__body">Essentials, Signature or Bespoke, it is one part of a coordinated retainer, not a standalone add-on someone forgot to integrate.</p>
      </div>
      <a class="btn btn--paper" href="/packages">Compare packages <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
    </div>
  </div>
</section>

<!-- ============================== FAQ ========================= -->
<section class="sec sec--linen">
  <div class="wrap" style="max-width:900px">
    <div style="text-align:center">
      <span class="eyebrow" data-rise>
        <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
        Good Questions
      </span>
      <h2 class="h2" data-rise style="margin-inline:auto">Before you <span class="tint">ask twice.</span></h2>
    </div>

    <div class="faq" data-rise>
      <div class="faq-item" data-open="true">
        <button class="faq-item__q" type="button">
          Which platforms do you cover?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Instagram and Facebook by default, with TikTok, LinkedIn or Pinterest added when your audience is actually there.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          Do we need to shoot content ourselves?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">No. We work with whatever you send us, and if you want new footage, Content Creation pairs with this service as an add-on.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          Who approves what gets posted?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">You get one round of approval per monthly calendar. After that we publish on schedule and only loop you in for anything time-sensitive.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          How fast do results usually show up?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Consistency shows in the first month. Real growth in engagement and followers is usually visible by month two or three, once the calendar and voice have settled in.</p>
        </div></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================== CTA ========================= -->
<section class="sec cta-end" id="cta">
  <div class="wrap">
    <div class="row">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Ready When You Are
        </span>
        <h2 class="h2" data-rise>Let&rsquo;s fix <span class="tint">your feed.</span></h2>
      </div>
      <div data-rise>
        <a class="btn btn--dark" href="mailto:hello@theemcreative.studio">
          Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
<footer class="foot" id="contact">
  <div class="foot__inner">
    <div class="foot__header">
      <a class="brand" href="/"><img src="/images/pg/3adf3352098a4060.webp" alt="The EM Creative Studio"></a>
      <p class="foot__tagline">Boutique real estate marketing that earns your crown.</p>
    </div>

    <div class="foot__body">
      <div>
        <p class="foot__label">Studio</p>
        <ul>
          <li><a href="/services">Services</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="/services/seo">SEO Plans</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/#process">Process</a></li>
        </ul>
      </div>
      <div>
        <p class="foot__label">Company</p>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div>
        <p class="foot__label">Contact</p>
        <ul class="foot__contact">
          <li>
            <span class="foot__contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg></span>
            <a href="mailto:hello@theemcreative.studio">hello@theemcreative.studio</a>
          </li>
          <li>
            <span class="foot__contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
            <a href="tel:+13105551234">(310) 555-1234</a>
          </li>
          <li>
            <span class="foot__contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <span style="font-size:14px;color:rgba(246,244,241,.5);">Los Angeles, CA</span>
          </li>
        </ul>
        <div class="foot__social-row">
          <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
          <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="TikTok"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
        </div>
      </div>
    </div>

    <div class="foot__legal">
      <span>&copy; 2026 The EM Creative Studio. All rights reserved.</span>
      <div class="foot__legal-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`;
