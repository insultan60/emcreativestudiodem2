import { FOOTER_HTML } from "../footer";

// Body markup for /work/westside-realty-group, lifted from em-creative-studio-work-detail.html.
// Rendered as-is: the stylesheet in app/work/westside-realty-group/page.css and the behaviour in
// public/scripts/pages/workDetail.js are both written against this exact structure.
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
        <a href="/work" aria-current="page">Work</a>
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
<section class="hero" id="top" style="min-height:74vh;">
  <div class="hero__ground"></div>
  <div class="hero__photo" aria-hidden="true">
    <img src="https://cdn.pixabay.com/photo/2014/04/04/22/36/los-angeles-314006_1280.jpg" alt="" loading="eager" decoding="async">
  </div>
  <div class="hero__photo-veil" aria-hidden="true"></div>
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <a class="hero__crumb" href="/work">
      <svg width="14" height="9" viewBox="0 0 17 10" style="transform:scaleX(-1)"><use href="#arw"/></svg>
      All Work
    </a><br>
    <span class="eyebrow">Case Study &middot; Web Design &amp; Local SEO</span>
    <h1 class="hero__hl" data-words>From quiet listings<br><em class="tint">to a full calendar.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>A full site rebuild and a local SEO foundation</strong>, built so every listing page could work as hard as an open house. Ninety days later, engagement had doubled.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">2x engagement</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">8-week build</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">90-day results</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Zero downtime</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="#results">
      See the results <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="/contact">Start your project</a>
  </div>
</section>

<!-- ============================== CLIENT META BAR ========================= -->
<section class="sec" style="padding-block:0;">
  <div class="wrap">
    <div class="meta-bar" data-rise>
      <div class="meta-bar__item">
        <p class="meta-bar__lbl">Client</p>
        <p class="meta-bar__val">Westside Realty Group</p>
      </div>
      <div class="meta-bar__item">
        <p class="meta-bar__lbl">Industry</p>
        <p class="meta-bar__val">Residential Real Estate</p>
      </div>
      <div class="meta-bar__item">
        <p class="meta-bar__lbl">Services</p>
        <p class="meta-bar__val">Web Design, Local SEO</p>
      </div>
      <div class="meta-bar__item">
        <p class="meta-bar__lbl">Timeline</p>
        <p class="meta-bar__val">8 Weeks</p>
      </div>
      <div class="meta-bar__item">
        <p class="meta-bar__lbl">Headline Result</p>
        <p class="meta-bar__val">2x Engagement</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== THE CHALLENGE ========================= -->
<section class="sec" id="challenge">
  <div class="wrap" style="max-width:900px;">
    <span class="eyebrow" data-rise>
      <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
      The Challenge
    </span>
    <h2 class="h2" data-rise>A brand outgrowing <span class="tint">its own website.</span></h2>

    <div style="margin-top:clamp(20px,3vh,32px);">
      <p data-rise style="font-size:15px; line-height:1.72; color:var(--ink-soft); margin:0 0 20px;">Westside Realty Group had built a decade of local trust the old-fashioned way: referrals, open houses, and a broker who remembered every client&rsquo;s name. Their website hadn&rsquo;t kept pace with any of it.</p>

      <div class="challenge-stat" data-rise>
        <span class="challenge-stat__num">6 yrs</span>
        <span class="challenge-stat__lbl">since the site&rsquo;s last real update, and mobile visitors had nowhere good to land.</span>
      </div>

      <p data-rise style="font-size:15px; line-height:1.72; color:var(--ink-soft); margin:0 0 20px;">The existing site ran on a six-year-old template that loaded slowly on mobile, buried listings three clicks deep, and said nothing about what actually made the brokerage different. Worse, it barely showed up in local search: a homebuyer searching &ldquo;Westside real estate agent&rdquo; would find three competitors before they found Westside Realty Group at all.</p>

      <p data-rise style="font-size:15px; line-height:1.72; color:var(--ink-soft); margin:0;">The brief was easy to state and hard to execute well: rebuild the site so it looked like the brokerage&rsquo;s reputation, load fast enough to keep mobile visitors from bouncing, and give Google a reason to rank them locally, without losing a single day of lead flow during the switch.</p>
    </div>
  </div>
</section>

<!-- ============================== VISUAL SHOWCASE ========================= -->
<section class="sec sec--linen">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          The Work
        </span>
        <h2 class="h2" data-rise>Built to feel like an <span class="tint">open house, not a brochure.</span></h2>
      </div>
      <p class="lede" data-rise>A homepage that leads with listings, not stock photography, and a listing template built to convert.</p>
    </div>

    <div class="gallery" style="margin-top:clamp(28px,4vh,40px);" data-rise>
      <div class="gallery__item">
        <img src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="The rebuilt Westside Realty Group website shown on a laptop screen" loading="lazy" decoding="async">
        <span class="gallery__cap">New homepage &amp; listing template</span>
      </div>
      <div class="gallery__item">
        <img src="https://cdn.pixabay.com/photo/2024/09/17/11/19/real-estate-9053405_1280.jpg" alt="A staged living room photographed for a Westside Realty Group listing" loading="lazy" decoding="async">
        <span class="gallery__cap">Listing photography, framed to sell scale</span>
      </div>
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
          The Approach
        </span>
        <h2 class="h2" data-rise>Four moves, <span class="tint">eight weeks.</span></h2>
      </div>
      <p class="lede" data-rise>No scope creep, no guesswork, one clear path from audit to launch.</p>
    </div>

    <div class="timeline" data-rise>
      <div class="timeline__line" aria-hidden="true"></div>
      <div class="timeline__step">
        <div class="timeline__dot" style="--d:0ms">01</div>
        <h3 class="timeline__ttl">Discovery &amp; Audit</h3>
        <p class="timeline__body">Ninety days of analytics, a teardown of three closest competitors, and a straight read on what the old site was costing them in leads.</p>
      </div>
      <div class="timeline__step">
        <div class="timeline__dot" style="--d:120ms">02</div>
        <h3 class="timeline__ttl">Design &amp; Architecture</h3>
        <p class="timeline__body">A homepage and listing template built around how buyers actually browse, with local SEO structure baked in from day one.</p>
      </div>
      <div class="timeline__step">
        <div class="timeline__dot" style="--d:240ms">03</div>
        <h3 class="timeline__ttl">Build &amp; SEO Foundation</h3>
        <p class="timeline__body">A fast, mobile-first build with schema markup, optimized listing pages, and a Google Business Profile clean-up running in parallel.</p>
      </div>
      <div class="timeline__step">
        <div class="timeline__dot" style="--d:360ms">04</div>
        <h3 class="timeline__ttl">Launch &amp; Handoff</h3>
        <p class="timeline__body">A zero-downtime switch, a week of monitoring, and training so their team could update listings without calling us for every change.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== RESULTS ========================= -->
<section class="sec sec--linen" id="results">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          The Results
        </span>
        <h2 class="h2" data-rise>Ninety days, <span class="tint">measured plainly.</span></h2>
      </div>
      <p class="lede" data-rise>The numbers we actually track, not vanity metrics.</p>
    </div>

    <div class="stats" data-rise style="margin-top:clamp(28px,4vh,40px);">
      <div class="stat">
        <div class="stat__num">2x</div>
        <div class="stat__lbl">Listing engagement in 90 days</div>
      </div>
      <div class="stat">
        <div class="stat__num">68%</div>
        <div class="stat__lbl">Faster mobile load time</div>
      </div>
      <div class="stat">
        <div class="stat__num">140%</div>
        <div class="stat__lbl">Increase in organic search clicks</div>
      </div>
      <div class="stat">
        <div class="stat__num">8 wks</div>
        <div class="stat__lbl">Concept to launch</div>
      </div>
    </div>
  </div>
</section>

<!-- ============================== PROOF ========================= -->
<section class="sec">
  <div class="wrap" style="max-width:900px">
    <div class="proof" data-rise>
      <svg class="proof__mark" viewBox="0 0 32 24" fill="currentColor"><path d="M0 24V14.4Q0 8 3.6 4T13.2 0l2 4Q11.6 5.6 9.6 8T7.2 13.6h6V24zm18 0V14.4Q18 8 21.6 4T31.2 0l2 4q-3.6 1.6-5.6 4T25.2 13.6h6V24z"/></svg>
      <p class="proof__text">&ldquo;Within three months our listings were getting twice the engagement, and our brand finally felt like us.&rdquo;</p>
      <p class="proof__cite"><b>Michael Torres</b> &middot; Broker, Westside Realty Group</p>
    </div>
  </div>
</section>

<!-- ============================== NEXT CASE STUDY ========================= -->
<section class="sec sec--linen">
  <div class="wrap">
    <span class="eyebrow" data-rise>
      <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
      More Work
    </span>
    <h2 class="h2" data-rise>Every brand gets <span class="tint">the same standard.</span></h2>

    <a class="next-case" href="/work" style="margin-top:clamp(28px,4vh,40px);" data-rise>
      <div class="next-case__art">
        <img class="next-case__img" src="https://cdn.pixabay.com/photo/2017/06/29/22/29/branding-2456457_1280.jpg" alt="Branding and stationery mockup for Marchetti &amp; Co." loading="lazy" decoding="async">
      </div>
      <div class="next-case__body">
        <p class="next-case__tag">Next In The Portfolio &middot; Brand Identity</p>
        <h3 class="next-case__ttl">Marchetti &amp; Co.</h3>
        <p class="next-case__result">A brand competitors keep quietly borrowing.</p>
        <span class="next-case__link">See the full portfolio <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
      </div>
    </a>
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
        <h2 class="h2" data-rise>Want numbers <span class="tint">like these?</span></h2>
      </div>
      <div data-rise>
        <a class="btn btn--dark" href="/contact">
          Start your project <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
