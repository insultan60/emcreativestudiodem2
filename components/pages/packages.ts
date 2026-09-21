import { FOOTER_HTML } from "../footer";

// Body markup for /packages, lifted from em-creative-studio-packages_6.html.
// Rendered as-is: the stylesheet in app/packages/page.css and the behaviour in
// public/scripts/pages/packages.js are both written against this exact structure.
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
  <symbol id="ic-camera" viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></symbol>
  <symbol id="ic-bolt" viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></symbol>
  <symbol id="ic-layout" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="20"/></symbol>
  <symbol id="ic-ads" viewBox="0 0 24 24"><path d="M3 11l18-7v16l-18-7z"/><path d="M8 13v6a2 2 0 0 0 4 0v-4"/></symbol>
  <symbol id="ic-brand" viewBox="0 0 24 24"><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/></symbol>
  <symbol id="ic-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></symbol>
</svg>

<!-- ============================== NAV ========================== -->
<header class="nav">
  <div class="nav-pill">
    <a class="brand" href="/"><img src="/images/logo-em.svg" alt="The EM Creative Studio" width="2000" height="2000"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/packages" aria-current="page">Packages</a>
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
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <span class="eyebrow">Los Angeles &middot; Ways To Work Together</span>
    <h1 class="hero__hl" data-words>Three ways in,<br><em class="tint">one studio.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Essentials, Signature, or Bespoke.</strong> From a focused retainer to a fully dedicated studio team, every tier includes the same senior group and the same monthly reporting.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">Senior team</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">Monthly reporting</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">Three tiers</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Month to month</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="https://calendly.com/theemcreativestudio-info/30min" target="_blank" rel="noopener noreferrer">
      Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#compare">Compare packages</a>
  </div>
</section>

<!-- ============================== PACKAGES ========================= -->
<section class="sec sec--linen" id="packages">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Ways to work together
        </span>
        <h2 class="h2" data-rise>Not every brand needs the same reach</h2>
      </div>
      <p class="lede" data-rise>Retainers start after the build. Every tier includes the reporting, because guessing is expensive.</p>
    </div>

    <div class="packs" id="packs" data-rise>
      <button class="pack" type="button" aria-expanded="true">
        <div class="pack__head">
          <h3 class="pack__name">Essentials</h3>
          <span class="pack__tag">Getting found</span>
        </div>
        <p class="pack__hint">Pricing on request</p>
        <div class="pack__reveal">
          <div class="pack__revealIn">
            <ul class="pack__list">
              <li>Technical SEO and local listings</li>
              <li>Two content pieces a month</li>
              <li>Quarterly design refresh</li>
              <li>Monthly revenue report</li>
            </ul>
            <p class="pack__best"><strong>Best for</strong> a single agent or a small team building a foundation</p>
            <span class="btn btn--paper">Start here <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
          </div>
        </div>
      </button>

      <button class="pack" type="button" aria-expanded="false">
        <div class="pack__head">
          <h3 class="pack__name">Signature</h3>
          <span class="pack__tag">Most chosen</span>
        </div>
        <p class="pack__hint">Pricing on request</p>
        <div class="pack__reveal">
          <div class="pack__revealIn">
            <ul class="pack__list">
              <li>Everything in Essentials</li>
              <li>Paid social and search, managed</li>
              <li>Monthly content shoot</li>
              <li>Landing pages on request</li>
              <li>A strategist on standing call</li>
            </ul>
            <p class="pack__best"><strong>Best for</strong> a growing team ready to run paid alongside organic</p>
            <span class="btn btn--dark">Start here <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
          </div>
        </div>
      </button>

      <button class="pack" type="button" aria-expanded="false">
        <div class="pack__head">
          <h3 class="pack__name">Bespoke</h3>
          <span class="pack__tag">Full studio</span>
        </div>
        <p class="pack__hint">Pricing on request</p>
        <div class="pack__reveal">
          <div class="pack__revealIn">
            <ul class="pack__list">
              <li>Full rebrand and site build</li>
              <li>Multi-market campaign work</li>
              <li>Dedicated studio team</li>
              <li>Weekly working sessions</li>
            </ul>
            <p class="pack__best"><strong>Best for</strong> a brokerage or multi-market team that needs a marketing department, not a vendor</p>
            <span class="btn btn--paper">Talk to us <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
          </div>
        </div>
      </button>
    </div>

    <div class="packs-cta" data-rise>
      <p class="packs-cta__txt">Not sure which tier fits? We&rsquo;ll look at your site first &mdash; free, no pitch.</p>
      <a class="btn btn--dark packs-cta__btn" href="/contact">Get a free evaluation <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
    </div>
  </div>
</section>

<!-- ============================== COMPARE ========================= -->
<section class="sec" id="compare">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>Side by Side</span>
        <h2 class="h2" data-rise>Every tier, one clear table.</h2>
      </div>
      <p class="lede" data-rise>If you already know roughly what you need, this is the fast way to check.</p>
    </div>

    <div class="cmp" data-rise>
      <table>
        <thead>
          <tr>
            <th></th>
            <th><span class="tier-pill">Getting found</span><br>Essentials</th>
            <th><span class="tier-pill">Most chosen</span><br>Signature</th>
            <th><span class="tier-pill">Full studio</span><br>Bespoke</th>
          </tr>
        </thead>
        <tbody>
          <tr><th>Technical SEO &amp; local listings</th><td class="yes">Included</td><td class="yes">Included</td><td class="yes">Included</td></tr>
          <tr><th>Content pieces / month</th><td>2</td><td>4</td><td>Unlimited</td></tr>
          <tr><th>Design refresh cadence</th><td>Quarterly</td><td>Monthly</td><td>Ongoing</td></tr>
          <tr><th>Paid social &amp; search, managed</th><td class="no">&mdash;</td><td class="yes">Included</td><td class="yes">Included</td></tr>
          <tr><th>Content shoots</th><td class="no">&mdash;</td><td>Monthly</td><td>On demand</td></tr>
          <tr><th>Landing pages</th><td>On request</td><td class="yes">Included</td><td class="yes">Included</td></tr>
          <tr><th>Strategist access</th><td class="no">&mdash;</td><td>Standing call</td><td>Dedicated team</td></tr>
          <tr><th>Multi-market campaigns</th><td class="no">&mdash;</td><td class="no">&mdash;</td><td class="yes">Included</td></tr>
          <tr><th>Working sessions</th><td class="no">&mdash;</td><td class="no">&mdash;</td><td>Weekly</td></tr>
          <tr><th>Revenue reporting</th><td>Monthly</td><td>Monthly</td><td>Weekly</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ============================== ADD-ONS ========================= -->
<section class="sec sec--linen" id="addons">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>A La Carte</span>
        <h2 class="h2" data-rise>Add exactly what a project needs.</h2>
      </div>
      <p class="lede" data-rise>Every add-on layers onto any tier, no need to jump a package just for one thing.</p>
    </div>

    <div class="addons__grid">
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-camera"/></svg></span>
        <h4>Extra Content Shoot</h4>
        <p>A second on-site shoot for listings, lifestyle, or team content beyond your tier's monthly cadence.</p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-bolt"/></svg></span>
        <h4>Rush Turnaround</h4>
        <p>Move a deliverable to the front of the queue when a listing or launch cannot wait.</p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-layout"/></svg></span>
        <h4>Landing Page Sprint</h4>
        <p>A dedicated page for a single listing, launch, or campaign, live within a week.</p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-ads"/></svg></span>
        <h4>Additional Ad Spend Management</h4>
        <p>More budget under active management across Meta, Google, or TikTok.</p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-brand"/></svg></span>
        <h4>Brand Refresh Sprint</h4>
        <p>A focused pass on your visual identity and templates, without a full rebrand.</p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-clock"/></svg></span>
        <h4>Extra Strategist Hours</h4>
        <p>Add direct planning time beyond your tier's standard cadence.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== FAQ ========================= -->
<section class="sec" id="faq">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>Good Questions</span>
        <h2 class="h2" data-rise>Before you pick a tier.</h2>
      </div>
    </div>

    <div class="faq" data-rise>
      <div class="faq-item" data-open="true">
        <button class="faq-item__q" type="button">
          How long is the commitment?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Month to month after the first 90 days. We ask for a 90-day minimum because strategy needs a quarter to actually show up in the numbers, not because we lock anyone into a contract.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          What happens before the retainer starts?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Every engagement opens with a paid build phase: a brand and channel audit, foundational content or a website if needed, and a 90-day plan. The retainer starts on solid ground instead of guessing through month one.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          Can I switch tiers later?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Yes. Most clients start at Essentials or Signature and move up once a channel proves itself. Moving down is fine too, we would rather adjust than watch part of a budget go unused.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          Does the retainer include ad spend?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">No. The retainer covers our team's time managing your campaigns. Ad spend is billed directly by the platforms, so you always see exactly where your media budget goes.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          What is not included at the Essentials level?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Paid media management, monthly shoots, and a standing strategist call. Essentials is built for visibility and consistency, not full-funnel campaign management.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          How is reporting handled?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Every tier gets a monthly revenue report in plain language. What changes between tiers is how much we are actively managing, not how much visibility you have into the work.</p>
        </div></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================== CTA ============================ -->
<section class="sec cta-end" id="cta">
  <div class="wrap row">
    <div>
      <span class="eyebrow" data-rise>Not Sure Which Tier Fits</span>
      <h2 class="h2" data-rise>Let's figure out what your brand actually needs.</h2>
    </div>
    <div data-rise>
      <a class="btn btn--dark" href="https://calendly.com/theemcreativestudio-info/30min" target="_blank" rel="noopener noreferrer">
        Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
