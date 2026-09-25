import { FOOTER_HTML } from "../footer";

// Body markup for /terms, lifted from em-creative-studio-terms.html.
// Rendered as-is: the stylesheet in app/terms/page.css and the behaviour in
// public/scripts/pages/terms.js are both written against this exact structure.
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
    <span class="eyebrow">Legal &middot; Terms &amp; Conditions</span>
    <h1 class="hero__hl" data-words>The fine print,<br><em class="tint">made readable.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Plain-English terms, not a wall of legalese.</strong> Here is exactly what you are agreeing to when you use this site or work with us, spelled out clearly.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">Effective Sep 2026</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">Fair by design</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">No surprise fees</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Cancel anytime</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="#acceptance">
      Read the terms <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#commitments">See what we promise</a>
  </div>
</section>

<!-- ============================== TL;DR ========================= -->
<section class="sec">
  <div class="wrap">
    <span class="eyebrow" data-rise>
      <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
      At A Glance
    </span>
    <h2 class="h2" data-rise>The terms, <span class="tint">boiled down.</span></h2>
    <p class="lede" data-rise>The full terms are below if you want the detail. This is the part that actually matters day to day.</p>

    <div class="tldr-grid" style="margin-top:clamp(28px,4vh,40px);">
      <div class="tldr-card" data-rise>
        <span class="tldr-card__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
        <h3 class="tldr-card__ttl">What you&rsquo;re agreeing to</h3>
        <p class="tldr-card__body">By using our site or hiring us, you accept the terms below. No fine-print traps.</p>
      </div>
      <div class="tldr-card" data-rise>
        <span class="tldr-card__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
        <h3 class="tldr-card__ttl">What we promise</h3>
        <p class="tldr-card__body">Clear scope, fair pricing, and work that&rsquo;s actually yours once it&rsquo;s paid for.</p>
      </div>
      <div class="tldr-card" data-rise>
        <span class="tldr-card__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></span>
        <h3 class="tldr-card__ttl">What&rsquo;s off-limits</h3>
        <p class="tldr-card__body">Copying our brand, reselling our templates, or misusing content you don&rsquo;t own.</p>
      </div>
      <div class="tldr-card" data-rise>
        <span class="tldr-card__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7l-3 7a4 4 0 0 0 8 0z"/><path d="M19 7l-3 7a4 4 0 0 0 8 0z"/><path d="M5 7h14"/><path d="M9 21h6"/></svg></span>
        <h3 class="tldr-card__ttl">How disputes get handled</h3>
        <p class="tldr-card__body">A conversation first, mediation second, California law if it ever goes further.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== TERMS BODY ========================= -->
<section class="sec sec--linen">
  <div class="wrap">
    <div class="policy-wrap">
      <nav class="policy-toc" aria-label="Terms sections" data-rise>
        <p class="policy-toc__lbl">On this page</p>
        <a href="#acceptance">Acceptance of Terms</a>
        <a href="#use">Using Our Services</a>
        <a href="#ip">Intellectual Property</a>
        <a href="#content">Client Content</a>
        <a href="#payment">Payment &amp; Fees</a>
        <a href="#cancellation">Cancellations &amp; Refunds</a>
        <a href="#disclaimers">Disclaimers</a>
        <a href="#liability">Limitation of Liability</a>
        <a href="#law">Governing Law</a>
        <a href="#changes">Changes To These Terms</a>
        <a href="#contact-us">Contact Us</a>
      </nav>

      <article class="policy" data-rise>
        <div class="policy__meta">
          <strong>Last updated:</strong> September 1, 2026 &middot; Effective for theemcreative.studio and every project we take on
        </div>
        <p style="font-size:15px; line-height:1.72; color:var(--ink-soft); margin:0 0 8px;">
          The EM Creative Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) wrote these terms in plain language on purpose. They cover how you can use this site and what to expect when you work with us on a project. By using theemcreative.studio or engaging our services, you&rsquo;re agreeing to what&rsquo;s below.
        </p>

        <section id="acceptance">
          <h2><span class="policy__no">1</span> Acceptance of Terms</h2>
          <p>By using theemcreative.studio or engaging The EM Creative Studio for any project, you agree to these terms. If you&rsquo;re accepting on behalf of a company, you&rsquo;re confirming you have the authority to bind that company to them. If you don&rsquo;t agree, please don&rsquo;t use the site or engage our services.</p>
        </section>

        <section id="use">
          <h2><span class="policy__no">2</span> Using Our Site &amp; Services</h2>
          <p>You&rsquo;re welcome to browse, share, and reference anything on this site. A few ground rules keep it usable for everyone:</p>
          <ul>
            <li><strong>Lawful use only.</strong> Don&rsquo;t use the site to violate any law, infringe on anyone&rsquo;s rights, or distribute harmful code.</li>
            <li><strong>No scraping or bulk harvesting</strong> of content, pricing, or contact details without our written permission.</li>
            <li><strong>Accurate information.</strong> When you fill out a form or start a project, the details you give us should be true and current.</li>
          </ul>
          <p>We can suspend access for anyone who violates these terms, without prior notice.</p>
        </section>

        <section id="ip">
          <h2><span class="policy__no">3</span> Intellectual Property</h2>
          <p>Unless a signed agreement says otherwise, everything on this site, design, copy, code, photography, the EM Creative Studio name and crown mark, belongs to us or our licensors.</p>
          <ul>
            <li><strong>Our brand &amp; site.</strong> You may not copy, resell, or repurpose our website design, templates, or branding as your own.</li>
            <li><strong>Case studies &amp; portfolio work.</strong> Client projects shown here are shared with permission and remain subject to the ownership terms of that specific engagement.</li>
            <li><strong>Your final deliverables.</strong> Once a project is paid in full, ownership of the specific deliverables outlined in your agreement transfers to you, as described in Payment, Fees &amp; Deposits below.</li>
          </ul>
          <div class="policy__callout"><strong>We retain the right</strong> to display finished work in our portfolio and marketing, unless your contract includes a confidentiality clause saying otherwise.</div>
        </section>

        <section id="content">
          <h2><span class="policy__no">4</span> Client Content &amp; Submissions</h2>
          <p>When you send us content, logos, copy, images, brand assets, feedback, for a project, you&rsquo;re confirming you own it or have the rights to use it, and you&rsquo;re giving us permission to use it solely to complete your project.</p>
          <ul>
            <li>You&rsquo;re responsible for anything you provide, including making sure it doesn&rsquo;t infringe on someone else&rsquo;s rights.</li>
            <li>We may lightly edit, resize, or format content you provide as needed to fit a design, without changing its substance.</li>
            <li>We won&rsquo;t use your content for anything outside your project without asking first.</li>
          </ul>
        </section>

        <section id="payment">
          <h2><span class="policy__no">5</span> Payment, Fees &amp; Deposits</h2>
          <p>Pricing and payment schedules are set out in your individual project agreement or invoice. In general:</p>
          <ul>
            <li><strong>Deposits.</strong> Most projects begin with a deposit, typically 50%, to reserve our time and cover initial work.</li>
            <li><strong>Remaining balance.</strong> The final balance is due on delivery, unless your agreement states otherwise.</li>
            <li><strong>Late payments.</strong> Invoices unpaid after 14 days may pause active work and, we&rsquo;d rather that never happen, may accrue a reasonable late fee as noted on the invoice.</li>
            <li><strong>Third-party costs.</strong> Stock assets, fonts, hosting, or plugins purchased on your behalf are billed separately or added to your invoice.</li>
          </ul>
        </section>

        <section id="cancellation">
          <h2><span class="policy__no">6</span> Cancellations &amp; Refunds</h2>
          <p>We&rsquo;d rather a project not work out than force it, so here&rsquo;s how cancellation works:</p>
          <ul>
            <li><strong>Before work begins.</strong> Deposits are refundable in full if cancelled before any work has started.</li>
            <li><strong>After work begins.</strong> Deposits become non-refundable once work is underway, since they cover time already spent; you&rsquo;ll be billed only for work completed beyond that.</li>
            <li><strong>Our cancellation.</strong> If we need to cancel a project, we&rsquo;ll refund any amount paid for work not yet delivered.</li>
          </ul>
          <p>To cancel, just tell us in writing, email is fine.</p>
        </section>

        <section id="disclaimers">
          <h2><span class="policy__no">7</span> Disclaimers &amp; Warranties</h2>
          <p>This site and our services are provided &ldquo;as is.&rdquo; We work hard to make sure everything is accurate, functional, and on-brand, but we don&rsquo;t guarantee the site will be error-free or uninterrupted, or that any project outcome, traffic, leads, sales, will match expectations, since results depend on many factors outside our control.</p>
          <p>We make no warranties, express or implied, beyond what&rsquo;s explicitly stated in your project agreement.</p>
        </section>

        <section id="liability">
          <h2><span class="policy__no">8</span> Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, The EM Creative Studio is not liable for indirect, incidental, or consequential damages, including lost profits or data, arising from your use of this site or our services.</p>
          <div class="policy__callout"><strong>Our total liability</strong> for any claim related to a project is capped at the total amount you paid us for that specific project.</div>
        </section>

        <section id="law">
          <h2><span class="policy__no">9</span> Governing Law &amp; Disputes</h2>
          <p>These terms are governed by the laws of the State of California, without regard to conflict-of-law principles. Any dispute we can&rsquo;t resolve directly will first go through good-faith mediation before either party pursues formal action, in Los Angeles County, California.</p>
        </section>

        <section id="changes">
          <h2><span class="policy__no">10</span> Changes To These Terms</h2>
          <p>We may update these terms as our services evolve. We&rsquo;ll update the &ldquo;last updated&rdquo; date above when we do, and for any change that meaningfully affects an active client agreement, we&rsquo;ll reach out directly before it takes effect.</p>
        </section>

        <section id="contact-us">
          <h2><span class="policy__no">11</span> Contact Us</h2>
          <p>Questions about these terms, or about a specific agreement? Reach us directly:</p>
          <ul>
            <li><strong>Email</strong> &mdash; <a href="mailto:info@theemcreativestudio.com" style="color:var(--cta); font-weight:600;">info@theemcreativestudio.com</a></li>
            <li><strong>Phone</strong> &mdash; (818) 484-1031</li>
            <li><strong>Mail</strong> &mdash; The EM Creative Studio, Los Angeles, CA</li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</section>

<!-- ============================== COMMITMENTS SPLIT ========================= -->
<section class="sec" id="commitments">
  <div class="wrap">
    <span class="eyebrow" data-rise>
      <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
      How This Works
    </span>
    <h2 class="h2" data-rise>A partnership, <span class="tint">spelled out.</span></h2>
    <p class="lede" data-rise>Contracts read better as a two-way street. Here&rsquo;s the shorthand version of what each of us signs up for.</p>

    <div class="commit-wrap" style="margin-top:clamp(28px,4vh,40px);">
      <div class="commit-card commit-card--light" data-rise>
        <p class="commit-card__lbl">We Commit To</p>
        <h3 class="commit-card__ttl">Our side of the deal</h3>
        <ul class="commit-card__list">
          <li><span class="commit-card__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>A written scope before any work begins, so there are no surprises.</li>
          <li><span class="commit-card__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>On-time delivery, or proactive notice the moment a date&rsquo;s at risk.</li>
          <li><span class="commit-card__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Full ownership of your final deliverables once the invoice is paid.</li>
          <li><span class="commit-card__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Transparent pricing: no hidden fees, no scope creep without a conversation first.</li>
        </ul>
      </div>
      <div class="commit-card commit-card--dark" data-rise>
        <p class="commit-card__lbl">We Ask Of You</p>
        <h3 class="commit-card__ttl">Your side of the deal</h3>
        <ul class="commit-card__list">
          <li><span class="commit-card__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Feedback and approvals within the window we agree on together.</li>
          <li><span class="commit-card__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Brand assets, copy, and access provided when the project needs them.</li>
          <li><span class="commit-card__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Deliverables used within the license terms in your agreement.</li>
          <li><span class="commit-card__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Invoices settled on the schedule laid out in your contract.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ============================== STATS BAND ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="stats" data-rise>
      <div class="stat">
        <div class="stat__num">50%</div>
        <div class="stat__lbl">Typical deposit to begin a project</div>
      </div>
      <div class="stat">
        <div class="stat__num">14 days</div>
        <div class="stat__lbl">Grace period on an invoice</div>
      </div>
      <div class="stat">
        <div class="stat__num">0</div>
        <div class="stat__lbl">Hidden fees, ever</div>
      </div>
      <div class="stat">
        <div class="stat__num">CA</div>
        <div class="stat__lbl">Governing state of law</div>
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
          <span>Can I cancel my contract once work has started?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Yes, anytime, in writing. Deposits already spent on work in progress aren&rsquo;t refundable, but you&rsquo;ll only be billed for work completed beyond that point. See Cancellations &amp; Refunds for the full breakdown.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>What happens if a payment is late?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Invoices unpaid after 14 days may pause active work until the balance is settled. A reasonable late fee may apply, as noted on your invoice. We&rsquo;ll always reach out before pausing anything.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>Who owns the final deliverables?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">You do, once your invoice is paid in full. Until then, ownership stays with us. We also reserve the right to feature finished work in our portfolio, unless your agreement says otherwise.</p>
        </div></div>
      </div>
      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          <span>What if we disagree about scope?</span>
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">We handle it as a conversation first, always. If a formal dispute is ever necessary, these terms call for good-faith mediation in Los Angeles County under California law before anything more formal.</p>
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
        <p class="findus__body">Whatever it is, a terms question or something else entirely, reach out and someone on our small team will get back to you directly.</p>
        <div style="margin-top:20px;"><a class="btn btn--dark" href="/contact">Get in touch <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a></div>
      </div>
      <div class="findus__pin" aria-hidden="true">
        <span class="findus__pin-ring"></span>
        <span class="findus__pin-ring"></span>
        <span class="findus__pin-core">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
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
