// Body markup for /contact, lifted from em-creative-studio-contact_1.html.
// Rendered as-is: the stylesheet in app/contact/page.css and the behaviour in
// public/scripts/pages/contact.js are both written against this exact structure.
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
  <symbol id="ic-star" viewBox="0 0 24 24"><path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/></symbol>
  <symbol id="ic-star-fill" viewBox="0 0 24 24"><path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" fill="currentColor" stroke-linejoin="round"/></symbol>
  <symbol id="ic-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></symbol>
</svg>

<!-- ============================== NAV ========================== -->
<header class="nav">
  <div class="nav-pill">
    <a class="brand" href="/"><img src="/images/pg/901081dfa7b252f8.webp" alt="The EM Creative Studio"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/packages">Packages</a>
        <a href="/work">Work</a>
        <a href="/blog">Blog</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/contact" aria-current="page">Contact</a>
      </nav>
    </div>
    <div class="nav-collapse">
      <a class="btn btn--dark" href="#form">
        Start a project <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
    </div>
  </div>
</header>

<!-- ============================== HERO ========================= -->
<section class="hero" id="top">
  <div class="hero__ground"></div>
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <span class="eyebrow">Los Angeles &middot; Say Hello</span>
    <h1 class="hero__hl" data-words>Tell us what<br><em class="tint">isn&rsquo;t working yet.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>No forms that vanish into a void.</strong> A real person on our team reads every message and replies within one business day, usually sooner.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">&lt;24 hr reply</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">Two slots open for Q4</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">No sales script</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">LA-based team</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="#form">
      Start the form <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="mailto:hello@theemcreative.studio">Prefer email?</a>
  </div>
</section>

<!-- ============================== CONTACT SPLIT ========================= -->
<section class="sec" id="form">
  <div class="wrap">
    <span class="eyebrow" data-rise>
      <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
      Two Slots Open For Q4
    </span>
    <h2 class="h2" data-rise>Let&rsquo;s see if we&rsquo;re <span class="tint">a fit.</span></h2>
    <p class="lede" data-rise>Five fields, no gatekeeping. Tell us about your business and we&rsquo;ll tell you honestly if we&rsquo;re the right team for it.</p>

    <div class="contact-wrap" style="margin-top:clamp(32px,4.4vh,48px);" data-rise>
      <form class="cform" id="contactForm" novalidate>
        <div class="cform__success" id="cformSuccess">
          <span class="cform__success-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
          <h3>Message sent.</h3>
          <p>We read every note ourselves. Expect a reply from a real person within one business day.</p>
          <button class="btn btn--ghost" type="button" id="cformReset">Send another message</button>
        </div>

        <div class="cform__row">
          <div class="field">
            <label for="cf-name">Name</label>
            <input id="cf-name" name="name" type="text" placeholder="Jamie Rivera" required autocomplete="name">
          </div>
          <div class="field">
            <label for="cf-email">Email</label>
            <input id="cf-email" name="email" type="email" placeholder="you@youragency.com" required autocomplete="email">
          </div>
        </div>

        <div class="field">
          <label for="cf-company">Brokerage or company</label>
          <input id="cf-company" name="company" type="text" placeholder="Westside Realty Group" autocomplete="organization">
        </div>

        <div class="field">
          <label>What do you need help with?</label>
          <div class="chips" role="group" aria-label="Project type" id="projectChips">
            <button class="chip" type="button" data-value="Branding" aria-pressed="false">Branding</button>
            <button class="chip" type="button" data-value="Web Design" aria-pressed="false">Web Design</button>
            <button class="chip" type="button" data-value="Social Media" aria-pressed="false">Social Media</button>
            <button class="chip" type="button" data-value="SEO" aria-pressed="false">SEO</button>
            <button class="chip" type="button" data-value="Full Rebrand" aria-pressed="false">Full Rebrand</button>
            <button class="chip" type="button" data-value="Not Sure Yet" aria-pressed="false">Not Sure Yet</button>
          </div>
        </div>

        <div class="field">
          <label for="cf-message">Tell us about the project</label>
          <textarea id="cf-message" name="message" placeholder="What's the market, what's not working, what would a win look like in 90 days?" required></textarea>
        </div>

        <div class="cform__submit">
          <button class="btn btn--dark" type="submit" id="cformSubmit">
            <span class="btn__spin" aria-hidden="true"></span>
            <span class="btn__label">Send message</span>
            <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
          </button>
          <span class="cform__note">No auto-replies. A person reads this.</span>
        </div>
      </form>

      <aside class="cside">
        <span class="cside__badge"><span class="cside__badge-dot" aria-hidden="true"></span> Currently booking Q4</span>
        <h3 class="cside__ttl">Or skip the form and reach us directly.</h3>
        <ul class="cside__list">
          <li>
            <span class="cside__ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg></span>
            <div><span class="cside__lbl">Email</span><a href="mailto:hello@theemcreative.studio">hello@theemcreative.studio</a></div>
          </li>
          <li>
            <span class="cside__ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
            <div><span class="cside__lbl">Phone</span><a href="tel:+13105551234">(310) 555-1234</a></div>
          </li>
          <li>
            <span class="cside__ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <div><span class="cside__lbl">Studio</span><span class="cside__val">Los Angeles, CA</span></div>
          </li>
          <li>
            <span class="cside__ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
            <div><span class="cside__lbl">Hours</span><span class="cside__val">Mon&ndash;Fri, 9am&ndash;6pm PT</span></div>
          </li>
        </ul>
        <div class="cside__social">
          <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
          <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="TikTok"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- ============================== NEXT STEPS ========================= -->
<section class="sec sec--linen">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          No Mystery
        </span>
        <h2 class="h2" data-rise>What happens <span class="tint">after you hit send.</span></h2>
      </div>
      <p class="lede" data-rise>The same three steps for every message, whether it&rsquo;s a full rebrand or a quick question.</p>
    </div>

    <div class="next" style="margin-top:clamp(32px,4.4vh,44px);">
      <article class="next-card" data-rise>
        <div class="next-card__no">01</div>
        <h3 class="next-card__ttl">We read it, same day.</h3>
        <p class="next-card__body">Every message goes to the team, not a queue. You&rsquo;ll hear back within one business day with a real answer, not an auto-reply.</p>
      </article>
      <article class="next-card" data-rise>
        <div class="next-card__no">02</div>
        <h3 class="next-card__ttl">A 15-minute intro call.</h3>
        <p class="next-card__body">No slide deck, no pitch. Just a conversation about your market, what&rsquo;s not working, and whether we&rsquo;re the right fit.</p>
      </article>
      <article class="next-card" data-rise>
        <div class="next-card__no">03</div>
        <h3 class="next-card__ttl">A proposal, in writing.</h3>
        <p class="next-card__body">Clear scope, clear pricing, no surprise line items. If it&rsquo;s not a fit, we&rsquo;ll tell you that too and point you somewhere better.</p>
      </article>
    </div>
  </div>
</section>

<!-- ============================== STATS BAND ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="stats" data-rise>
      <div class="stat">
        <div class="stat__num">&lt;24 hrs</div>
        <div class="stat__lbl">Average first reply</div>
      </div>
      <div class="stat">
        <div class="stat__num">15 min</div>
        <div class="stat__lbl">Intro call, no pitch deck</div>
      </div>
      <div class="stat">
        <div class="stat__num">100%</div>
        <div class="stat__lbl">Replies from an actual human</div>
      </div>
      <div class="stat">
        <div class="stat__num">2</div>
        <div class="stat__lbl">Q4 slots remaining</div>
      </div>
    </div>
  </div>
</section>

<!-- ============================== FAQ ========================= -->
<section class="sec sec--linen">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Before You Write In
        </span>
        <h2 class="h2" data-rise>Quick answers, <span class="tint">just in case.</span></h2>
      </div>
      <p class="lede" data-rise>The four things people usually ask before they hit send.</p>
    </div>

    <div class="faq" data-rise>
      <div class="faq-item" data-open="true">
        <button class="faq-item__q" type="button">
          <span>Do you work with agents outside Los Angeles?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Yes. We are based in LA and most of our current roster is Southern California real estate, but the process works the same over video for any market in the US.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>What do you need from me before the first call?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Nothing prepared. Bring the honest version of what is and isn&rsquo;t working, a link to your current site or socials if you have one, and roughly what you&rsquo;d want to spend.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>How fast can you actually start?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Once a proposal is signed, most engagements kick off within one to two weeks. We keep two Q4 slots open at a time on purpose, so onboarding never gets rushed.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>What if we get on a call and it&rsquo;s not a fit?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">That happens, and it's a fine outcome. We&rsquo;ll say so directly, and where we can we&rsquo;ll point you toward someone better suited to what you need.</p>
        </div></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================== FIND US ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="findus" data-rise>
      <div class="findus__copy">
        <span class="eyebrow">Based in Los Angeles</span>
        <h3 class="findus__ttl">Local market, in-person when it helps.</h3>
        <p class="findus__body">Most of our work happens over video, but we&rsquo;re always glad to meet in person for a walkthrough, a shoot, or just coffee if you&rsquo;re LA-based.</p>
      </div>
      <div class="findus__pin" aria-hidden="true">
        <span class="findus__pin-ring"></span>
        <span class="findus__pin-ring"></span>
        <span class="findus__pin-core">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </span>
      </div>
    </div>
  </div>
</section>

<!-- ============================== NEWSLETTER ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="news" data-rise>
      <div class="news__copy">
        <span class="eyebrow">Stay in the loop</span>
        <h2 class="news__ttl">One email a month.<br>Zero noise.</h2>
        <p class="news__body">The strategies, swipe files, and behind-the-scenes numbers we don&rsquo;t publish anywhere else, straight from the team that reads every message you see on this page.</p>
      </div>
      <div>
        <form class="news__form" onsubmit="return false">
          <input class="news__input" type="email" placeholder="you@youragency.com" required aria-label="Email address">
          <button class="btn btn--paper" type="submit">Subscribe <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></button>
        </form>
        <p class="news__fine">One email a month. Unsubscribe whenever.</p>
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
          <li><a href="/contact" aria-current="page">Contact</a></li>
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
