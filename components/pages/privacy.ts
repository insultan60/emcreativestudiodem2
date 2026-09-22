import { FOOTER_HTML } from "../footer";

// Body markup for /privacy, lifted from em-creative-studio-privacy_1.html.
// Rendered as-is: the stylesheet in app/privacy/page.css and the behaviour in
// public/scripts/pages/privacy.js are both written against this exact structure.
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
    <a class="brand" href="/"><img src="/images/logo-em.svg" alt="The EM Creative Studio" width="2000" height="2000"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services">Services</a>
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

<div class="progress" aria-hidden="true"><div class="progress__bar" data-progress></div></div>

<!-- ============================== HERO ========================= -->
<section class="hero" id="top" style="min-height:64vh;">
  <div class="hero__ground"></div>
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <span class="eyebrow">Legal &middot; Privacy Policy</span>
    <h1 class="hero__hl" data-words>Your data,<br><em class="tint">handled plainly.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>No legalese you need a lawyer to decode.</strong> Here is exactly what we collect, why, and how to make us delete it, in language a person would actually use.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">Updated Sep 2026</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">Never sold, ever</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">GDPR &amp; CCPA aware</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Delete anytime</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="#collect">
      Read the policy <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#rights">Know your rights</a>
  </div>
</section>

<!-- ============================== TL;DR ========================= -->
<section class="sec">
  <div class="wrap">
    <span class="eyebrow" data-rise>
      <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
      The Short Version
    </span>
    <h2 class="h2" data-rise>Four things worth <span class="tint">knowing up front.</span></h2>
    <p class="lede" data-rise>The full policy is below if you want it. This is the part most people actually read.</p>

    <div class="tldr-grid" style="margin-top:clamp(28px,4vh,40px);">
      <div class="tldr-card" data-rise>
        <span class="tldr-card__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
        <h3 class="tldr-card__ttl">What we collect</h3>
        <p class="tldr-card__body">Contact details you give us directly, plus basic site analytics. No hidden tracking, no data bought from brokers.</p>
      </div>
      <div class="tldr-card" data-rise>
        <span class="tldr-card__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
        <h3 class="tldr-card__ttl">Why we collect it</h3>
        <p class="tldr-card__body">To reply to you, run the site, and understand what content is actually useful. That&rsquo;s the whole list.</p>
      </div>
      <div class="tldr-card" data-rise>
        <span class="tldr-card__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
        <h3 class="tldr-card__ttl">Who we share it with</h3>
        <p class="tldr-card__body">A short list of vetted tools that run the site and newsletter. We do not sell data, full stop.</p>
      </div>
      <div class="tldr-card" data-rise>
        <span class="tldr-card__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
        <h3 class="tldr-card__ttl">Your rights</h3>
        <p class="tldr-card__body">Ask to see it, fix it, export it, or delete it, whenever you want. Details and how-to further down.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== POLICY BODY ========================= -->
<section class="sec sec--linen">
  <div class="wrap">
    <div class="policy-wrap">
      <nav class="policy-toc" aria-label="Policy sections" data-rise>
        <p class="policy-toc__lbl">On this page</p>
        <a href="#collect">What We Collect</a>
        <a href="#use">How We Use It</a>
        <a href="#cookies">Cookies &amp; Tracking</a>
        <a href="#sharing">Sharing &amp; Third Parties</a>
        <a href="#retention">Data Retention</a>
        <a href="#children">Children&rsquo;s Privacy</a>
        <a href="#security">Data Security</a>
        <a href="#international">International Visitors</a>
        <a href="#changes">Changes To This Policy</a>
        <a href="#contact-us">Contact Us</a>
      </nav>

      <article class="policy" data-rise>
        <div class="policy__meta">
          <strong>Last updated:</strong> September 1, 2026 &middot; Effective for theemcreative.studio and its subdomains
        </div>
        <p style="font-size:15px; line-height:1.72; color:var(--ink-soft); margin:0 0 8px;">
          The EM Creative Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) built this site to be useful, not extractive. This policy explains what information we collect when you visit, what we do with it, and how you can control it. It applies to theemcreative.studio and everything on it.
        </p>

        <section id="collect">
          <h2><span class="policy__no">1</span> What We Collect</h2>
          <p>We collect information in two ways: what you give us directly, and what your browser shares automatically when you visit.</p>
          <ul>
            <li><strong>Information you provide.</strong> Your name, email, company, and message when you use the contact form; your email when you subscribe to the newsletter; anything you send us by email or on a call.</li>
            <li><strong>Information collected automatically.</strong> Pages visited, time on page, referring site, general device and browser type, and approximate location at the city level, gathered through standard analytics cookies.</li>
            <li><strong>Information from third parties.</strong> If you find us through a partner or a referral, we may receive your name and contact details from that source, with your permission.</li>
          </ul>
          <div class="policy__callout"><strong>We do not collect</strong> payment card numbers, government ID numbers, or any sensitive category of data defined under GDPR or CCPA, unless you volunteer it in a message to us, which we&rsquo;d encourage you not to do.</div>
        </section>

        <section id="use">
          <h2><span class="policy__no">2</span> How We Use It</h2>
          <p>We use what we collect for a short, specific list of purposes:</p>
          <ul>
            <li><strong>To respond to you.</strong> Answering a contact form, a booked call, or an email you sent us.</li>
            <li><strong>To run the studio newsletter.</strong> Sending the monthly email you opted into, and nothing more frequent than that.</li>
            <li><strong>To improve the site.</strong> Understanding which pages are useful and which are confusing, in aggregate, not by watching individual visitors.</li>
            <li><strong>To meet legal obligations.</strong> Tax records, contracts, and anything a regulator or court could reasonably require of a small business.</li>
          </ul>
          <p>We do not use your data to train third-party AI models, and we do not build advertising profiles on our visitors.</p>
        </section>

        <section id="cookies">
          <h2><span class="policy__no">3</span> Cookies &amp; Tracking</h2>
          <p>This site uses a small number of cookies and similar technologies:</p>
          <ul>
            <li><strong>Essential cookies.</strong> Keep the site functioning, like remembering your cookie preference itself. These can&rsquo;t be turned off without breaking basic functionality.</li>
            <li><strong>Analytics cookies.</strong> Aggregate, privacy-respecting traffic analytics that tell us which pages get read. No cross-site tracking, no ad-network pixels.</li>
          </ul>
          <p>Most browsers let you block or delete cookies in settings. Blocking analytics cookies won&rsquo;t affect your ability to browse the site or use the contact form.</p>
        </section>

        <section id="sharing">
          <h2><span class="policy__no">4</span> Sharing &amp; Third Parties</h2>
          <p><strong>We do not sell your personal information, to anyone, for any reason.</strong> We share data only with the small set of vetted service providers that keep the studio running, each bound by their own privacy and security commitments:</p>
          <ul>
            <li><strong>Email &amp; newsletter delivery</strong> &mdash; to send the messages you&rsquo;ve opted into.</li>
            <li><strong>Website analytics</strong> &mdash; to understand traffic in aggregate, as described above.</li>
            <li><strong>Hosting &amp; infrastructure</strong> &mdash; to keep the site online and secure.</li>
            <li><strong>Scheduling &amp; calls</strong> &mdash; if you book an intro call, to manage that booking.</li>
          </ul>
          <p>We may also disclose information if required by law, to protect our legal rights, or as part of a future merger or acquisition, in which case we&rsquo;d notify you before your data changes hands.</p>
        </section>

        <section id="retention">
          <h2><span class="policy__no">5</span> Data Retention</h2>
          <p>We keep contact form submissions and email correspondence for as long as needed to serve you and meet our own recordkeeping and legal obligations, typically no more than 24 months after our last contact. Newsletter subscriptions are kept until you unsubscribe. Analytics data is retained in aggregate form and is not tied to an identifiable person after 14 months.</p>
        </section>

        <section id="children">
          <h2><span class="policy__no">6</span> Children&rsquo;s Privacy</h2>
          <p>This site is intended for business owners and professionals. It is not directed at children, and we do not knowingly collect information from anyone under 16. If you believe a minor has provided us information, contact us and we will delete it.</p>
        </section>

        <section id="security">
          <h2><span class="policy__no">7</span> Data Security</h2>
          <p>We use industry-standard safeguards, encrypted connections, access controls, and reputable, security-vetted vendors, to protect the information we hold. No system is perfectly secure, so if we ever become aware of a breach affecting your data, we will notify you promptly and explain what happened.</p>
        </section>

        <section id="international">
          <h2><span class="policy__no">8</span> International Visitors</h2>
          <p>We are based in Los Angeles, California, and our service providers are primarily US-based. If you are visiting from the EU, UK, or elsewhere outside the US, your information may be processed in the United States, under the safeguards described in this policy.</p>
        </section>

        <section id="changes">
          <h2><span class="policy__no">9</span> Changes To This Policy</h2>
          <p>We&rsquo;ll update this page if what we collect or how we use it changes, and we&rsquo;ll update the &ldquo;last updated&rdquo; date at the top when we do. For any change that meaningfully affects your rights, we&rsquo;ll make a reasonable effort to let newsletter subscribers know directly.</p>
        </section>

        <section id="contact-us">
          <h2><span class="policy__no">10</span> Contact Us</h2>
          <p>Questions about this policy, or want to exercise any of the rights below? Reach us directly:</p>
          <ul>
            <li><strong>Email</strong> &mdash; <a href="mailto:info@theemcreativestudio.com" style="color:var(--cta); font-weight:600;">info@theemcreativestudio.com</a></li>
            <li><strong>Phone</strong> &mdash; (310) 555-1234</li>
            <li><strong>Mail</strong> &mdash; The EM Creative Studio, Los Angeles, CA</li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</section>

<!-- ============================== RIGHTS GRID ========================= -->
<section class="sec" id="rights">
  <div class="wrap">
    <span class="eyebrow" data-rise>
      <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
      In Plain Terms
    </span>
    <h2 class="h2" data-rise>Five things you can <span class="tint">always ask us to do.</span></h2>
    <p class="lede" data-rise>Email us and we&rsquo;ll act on any of these within 30 days, usually much sooner.</p>

    <div class="rights-grid" style="margin-top:clamp(28px,4vh,40px);">
      <div class="rights-card" data-rise>
        <span class="rights-card__ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>
        <h3 class="rights-card__ttl">Access</h3>
        <p class="rights-card__body">See exactly what we hold on you.</p>
      </div>
      <div class="rights-card" data-rise>
        <span class="rights-card__ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg></span>
        <h3 class="rights-card__ttl">Correction</h3>
        <p class="rights-card__body">Fix anything that&rsquo;s wrong or outdated.</p>
      </div>
      <div class="rights-card" data-rise>
        <span class="rights-card__ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span>
        <h3 class="rights-card__ttl">Deletion</h3>
        <p class="rights-card__body">Ask us to erase your data outright.</p>
      </div>
      <div class="rights-card" data-rise>
        <span class="rights-card__ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></span>
        <h3 class="rights-card__ttl">Portability</h3>
        <p class="rights-card__body">Get a copy in a usable format.</p>
      </div>
      <div class="rights-card" data-rise>
        <span class="rights-card__ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></span>
        <h3 class="rights-card__ttl">Opt-out</h3>
        <p class="rights-card__body">Unsubscribe or stop analytics tracking.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== STATS BAND ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="stats" data-rise>
      <div class="stat">
        <div class="stat__num">0</div>
        <div class="stat__lbl">Data ever sold to anyone</div>
      </div>
      <div class="stat">
        <div class="stat__num">24 mo</div>
        <div class="stat__lbl">Default retention window</div>
      </div>
      <div class="stat">
        <div class="stat__num">30 days</div>
        <div class="stat__lbl">Max response to a data request</div>
      </div>
      <div class="stat">
        <div class="stat__num">2</div>
        <div class="stat__lbl">Regulations we design around</div>
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
          Common Questions
        </span>
        <h2 class="h2" data-rise>A few things people <span class="tint">actually ask.</span></h2>
      </div>
      <p class="lede" data-rise>If your question isn&rsquo;t here, it&rsquo;s one email away.</p>
    </div>

    <div class="faq" data-rise>
      <div class="faq-item" data-open="true">
        <button class="faq-item__q" type="button">
          <span>Do you sell or rent my data to advertisers?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">No. Never has, never will. We don&rsquo;t work with ad networks or data brokers, and nothing on this site is monetized through your personal information.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>How do I actually delete my information?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Email info@theemcreativestudio.com with &ldquo;delete my data&rdquo; in the subject line. We&rsquo;ll confirm your identity, remove your information from our systems, and let you know once it&rsquo;s done, usually within a few business days.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>Does unsubscribing from the newsletter delete everything?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">It stops the emails, but if you&rsquo;ve also contacted us directly, that correspondence is kept separately per our retention policy. Ask us to delete everything and we will.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>What happens to my data if EM Creative Studio is ever acquired?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">We&rsquo;d notify affected users before any data changes hands as part of a merger or acquisition, and this policy would continue to govern how it&rsquo;s used unless we tell you otherwise, clearly and in advance.</p>
        </div></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================== CONTACT CTA ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="findus" data-rise>
      <div class="findus__copy">
        <span class="eyebrow">Still Have Questions</span>
        <h3 class="findus__ttl">A real person will answer.</h3>
        <p class="findus__body">Whatever it is, privacy question or something else entirely, reach out and someone on our small team will get back to you directly.</p>
        <div style="margin-top:20px;"><a class="btn btn--dark" href="/contact">Get in touch <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a></div>
      </div>
      <div class="findus__pin" aria-hidden="true">
        <span class="findus__pin-ring"></span>
        <span class="findus__pin-ring"></span>
        <span class="findus__pin-core">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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
${FOOTER_HTML}`;
