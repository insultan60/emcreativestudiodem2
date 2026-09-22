import { FOOTER_HTML } from "../footer";

// Body markup for /work, lifted from em-creative-studio-work_3.html.
// Rendered as-is: the stylesheet in app/work/page.css and the behaviour in
// public/scripts/pages/work.js are both written against this exact structure.
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
<section class="hero" id="top">
  <div class="hero__ground"></div>
  <div class="pk-crown" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <span class="eyebrow">Los Angeles &middot; Selected Work</span>
    <h1 class="hero__hl" data-words>Real estate brands,<br><em class="tint">working harder.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>240+ sites, six disciplines, one senior team.</strong> A look at the campaigns behind the numbers, and the clients who keep coming back for more.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">240+ sites shipped</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">3.4x traffic lift</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">$18M tracked</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">98% retention</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="/contact#book">
      Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#portfolio">See the full slate</a>
  </div>
</section>

<!-- ============================== SELECTED WORK (scalable client rail) ========================= -->
<section class="sec sec--linen" id="selected-work">
  <div class="wrap">

    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Selected Work
        </span>
        <h2 class="h2" data-rise>Real clients, <span class="tint">one standard.</span></h2>
      </div>
      <p class="lede" data-rise>
        Every deliverable ships through the same senior group, so the quality never
        depends on which client you are. Scroll through the roster, or let the arrows do it.
      </p>
    </div>

    <div class="wrail" data-rise>
      <div class="wrail__view" id="wrailView">
        <div class="wrail__track" id="wrailTrack">
          <article class="wspot">
            <div class="wspot__top"><span class="wspot__no">01 / Web Design</span><div class="wspot__mark"></div></div>
            <div>
              <h3 class="wspot__ttl">Westside Realty Group</h3>
              <p class="wspot__body"><strong>2x listing engagement in 90 days.</strong> A full site rebuild and a local SEO foundation that made every listing page work as hard as an open house.</p>
            </div>
          </article>
          <article class="wspot">
            <div class="wspot__top"><span class="wspot__no">02 / Brand Identity</span><div class="wspot__mark"></div></div>
            <div>
              <h3 class="wspot__ttl">Marchetti &amp; Co.</h3>
              <p class="wspot__body"><strong>A brand competitors keep quietly borrowing.</strong> New identity, website and listing system, built to travel across every touchpoint.</p>
            </div>
          </article>
          <article class="wspot">
            <div class="wspot__top"><span class="wspot__no">03 / SEO &amp; Local Search</span><div class="wspot__mark"></div></div>
            <div>
              <h3 class="wspot__ttl">Luxe Properties LA</h3>
              <p class="wspot__body"><strong>3.4x average traffic lift.</strong> Technical SEO and local listings tuned for a market that never stops moving.</p>
            </div>
          </article>
          <article class="wspot">
            <div class="wspot__top"><span class="wspot__no">04 / Paid Social</span><div class="wspot__mark"></div></div>
            <div>
              <h3 class="wspot__ttl">Ainsworth Properties</h3>
              <p class="wspot__body"><strong>3.1x return on ad spend.</strong> Meta and Google campaigns managed against real ROI, with creative refreshed every fortnight.</p>
            </div>
          </article>
          <article class="wspot">
            <div class="wspot__top"><span class="wspot__no">05 / Content Studio</span><div class="wspot__mark"></div></div>
            <div>
              <h3 class="wspot__ttl">Bellmore &amp; Hale</h3>
              <p class="wspot__body"><strong>40+ short-form videos a month.</strong> Reels, listing content and lifestyle visuals that turned a quiet feed into a lead source.</p>
            </div>
          </article>
          <article class="wspot">
            <div class="wspot__top"><span class="wspot__no">06 / Email &amp; CRM</span><div class="wspot__mark"></div></div>
            <div>
              <h3 class="wspot__ttl">Coastline Realty Partners</h3>
              <p class="wspot__body"><strong>38% average open rate.</strong> Drip campaigns and segmentation that nurture leads long after the first showing.</p>
            </div>
          </article>
        </div>
      </div>

      <div class="wrail__ctrl">
        <div class="wrail__prog"><span class="wrail__fill" id="wrailFill"></span></div>
        <div class="wrail__count"><span id="wrailNow">01</span> / <span id="wrailTotal">06</span></div>
        <div class="wrail__arrows">
          <button type="button" class="wrail__btn" id="wrailPrev" aria-label="Previous client"><svg width="15" height="9" viewBox="0 0 17 10" style="transform:scaleX(-1)"><use href="#arw"/></svg></button>
          <button type="button" class="wrail__btn" id="wrailNext" aria-label="Next client"><svg width="15" height="9" viewBox="0 0 17 10"><use href="#arw"/></svg></button>
        </div>
      </div>
    </div>

    <div class="roster" aria-label="Clients we've worked with" data-rise>
      <div class="roster__track">
        <div class="roster__set">
          <span>Westside Realty Group</span><i>&#8212;</i>
          <span>Marchetti &amp; Co.</span><i>&#8212;</i>
          <span>Luxe Properties LA</span><i>&#8212;</i>
          <span>Ainsworth Properties</span><i>&#8212;</i>
          <span>Bellmore &amp; Hale</span><i>&#8212;</i>
          <span>Coastline Realty Partners</span><i>&#8212;</i>
        </div>
        <div class="roster__set" aria-hidden="true">
          <span>Westside Realty Group</span><i>&#8212;</i>
          <span>Marchetti &amp; Co.</span><i>&#8212;</i>
          <span>Luxe Properties LA</span><i>&#8212;</i>
          <span>Ainsworth Properties</span><i>&#8212;</i>
          <span>Bellmore &amp; Hale</span><i>&#8212;</i>
          <span>Coastline Realty Partners</span><i>&#8212;</i>
        </div>
      </div>
    </div>

    <div style="text-align:center; margin-top:clamp(22px,3vh,32px)" data-rise>
      <a href="#portfolio" class="btn btn--ghost" style="display:inline-flex">View the full slate <span>&rarr;</span></a>
    </div>

  </div>
</section>

<!-- ============================== PORTFOLIO GRID ========================= -->
<section class="sec" id="portfolio">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>The Full Slate</span>
        <h2 class="h2" data-rise>Every project, <span class="tint">one filter away.</span></h2>
      </div>
      <p class="lede" data-rise>Filter by discipline or scroll the whole slate. Either way, you will land on a result worth stealing.</p>
    </div>

    <div class="filters" data-rise role="group" aria-label="Filter work by discipline">
      <button class="filter-pill" type="button" data-filter="All" aria-pressed="true">All</button>
      <button class="filter-pill" type="button" data-filter="Web Design" aria-pressed="false">Web Design</button>
      <button class="filter-pill" type="button" data-filter="Brand Identity" aria-pressed="false">Brand Identity</button>
      <button class="filter-pill" type="button" data-filter="SEO &amp; Local Search" aria-pressed="false">SEO &amp; Local Search</button>
      <button class="filter-pill" type="button" data-filter="Paid Social" aria-pressed="false">Paid Social</button>
      <button class="filter-pill" type="button" data-filter="Content Studio" aria-pressed="false">Content Studio</button>
      <button class="filter-pill" type="button" data-filter="Email &amp; CRM" aria-pressed="false">Email &amp; CRM</button>
    </div>

    <div class="work-grid" id="workGrid">
      <article class="work-card" data-cat="Web Design" data-rise>
        <div class="work-card__art">
          <img class="work-card__img" src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="Website design mockup on a laptop screen" loading="lazy" decoding="async">
          <svg class="work-card__mark" viewBox="0 0 120 74"><use href="#crown"/></svg>
        </div>
        <div class="work-card__body">
          <span class="work-card__tag">Web Design</span>
          <h3 class="work-card__name">Westside Realty Group</h3>
          <p class="work-card__result">2x listing engagement in 90 days</p>
          <p class="work-card__desc">A full site rebuild with a local SEO foundation built in from day one.</p>
          <a class="work-card__link" href="/work/westside-realty-group">View case study <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>
      <article class="work-card" data-cat="Brand Identity" data-rise>
        <div class="work-card__art">
          <img class="work-card__img" src="https://cdn.pixabay.com/photo/2017/06/29/22/29/branding-2456457_1280.jpg" alt="Branding and stationery mockup" loading="lazy" decoding="async">
          <svg class="work-card__mark" viewBox="0 0 120 74"><use href="#crown"/></svg>
        </div>
        <div class="work-card__body">
          <span class="work-card__tag">Brand Identity</span>
          <h3 class="work-card__name">Marchetti &amp; Co.</h3>
          <p class="work-card__result">A brand competitors keep borrowing</p>
          <p class="work-card__desc">New identity, website and listing system, built to travel everywhere.</p>
          <span class="work-card__link">View case study <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        </div>
      </article>
      <article class="work-card" data-cat="SEO &amp; Local Search" data-rise>
        <div class="work-card__art">
          <img class="work-card__img" src="https://cdn.pixabay.com/photo/2014/04/04/22/36/los-angeles-314006_1280.jpg" alt="Los Angeles city skyline" loading="lazy" decoding="async">
          <svg class="work-card__mark" viewBox="0 0 120 74"><use href="#crown"/></svg>
        </div>
        <div class="work-card__body">
          <span class="work-card__tag">SEO &amp; Local Search</span>
          <h3 class="work-card__name">Luxe Properties LA</h3>
          <p class="work-card__result">3.4x average traffic lift</p>
          <p class="work-card__desc">Technical SEO and local listings tuned for a market that never sits still.</p>
          <span class="work-card__link">View case study <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        </div>
      </article>
      <article class="work-card" data-cat="Paid Social" data-rise>
        <div class="work-card__art">
          <img class="work-card__img" src="https://cdn.pixabay.com/photo/2021/02/03/05/27/social-media-5976707_1280.jpg" alt="Social media feed open on a smartphone" loading="lazy" decoding="async">
          <svg class="work-card__mark" viewBox="0 0 120 74"><use href="#crown"/></svg>
        </div>
        <div class="work-card__body">
          <span class="work-card__tag">Paid Social</span>
          <h3 class="work-card__name">Ainsworth Properties</h3>
          <p class="work-card__result">3.1x return on ad spend</p>
          <p class="work-card__desc">Meta and Google campaigns tracked against real ROI, creative refreshed biweekly.</p>
          <span class="work-card__link">View case study <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        </div>
      </article>
      <article class="work-card" data-cat="Content Studio" data-rise>
        <div class="work-card__art">
          <img class="work-card__img" src="https://cdn.pixabay.com/photo/2017/08/03/18/04/camera-2577668_1280.jpg" alt="Video camera set up for a content shoot" loading="lazy" decoding="async">
          <svg class="work-card__mark" viewBox="0 0 120 74"><use href="#crown"/></svg>
        </div>
        <div class="work-card__body">
          <span class="work-card__tag">Content Studio</span>
          <h3 class="work-card__name">Bellmore &amp; Hale</h3>
          <p class="work-card__result">40+ short-form videos a month</p>
          <p class="work-card__desc">Reels, listing content and lifestyle visuals that turned a quiet feed into a lead source.</p>
          <span class="work-card__link">View case study <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        </div>
      </article>
      <article class="work-card" data-cat="Email &amp; CRM" data-rise>
        <div class="work-card__art">
          <img class="work-card__img" src="https://cdn.pixabay.com/photo/2019/06/30/21/36/newsletter-4308826_1280.jpg" alt="Keyboard with a send key representing email campaigns" loading="lazy" decoding="async">
          <svg class="work-card__mark" viewBox="0 0 120 74"><use href="#crown"/></svg>
        </div>
        <div class="work-card__body">
          <span class="work-card__tag">Email &amp; CRM</span>
          <h3 class="work-card__name">Coastline Realty Partners</h3>
          <p class="work-card__result">38% average open rate</p>
          <p class="work-card__desc">Drip campaigns and segmentation that nurture leads long after the first showing.</p>
          <span class="work-card__link">View case study <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="quote" id="voices">
  <!-- background quote mark -->
  <span class="quote__bg-mark" aria-hidden="true">&ldquo;</span>

  <!-- subtle abstract lines -->
  <div class="quote__line" style="width:120px;height:1.5px;top:22%;left:8%;transform:rotate(-15deg);"></div>
  <div class="quote__line" style="width:80px;height:1.5px;top:70%;right:10%;transform:rotate(20deg);"></div>
  <div class="quote__line" style="width:60px;height:1.5px;bottom:18%;left:14%;transform:rotate(8deg);"></div>
  <div class="quote__line" style="width:100px;height:1px;top:35%;right:6%;transform:rotate(-8deg);opacity:.08;"></div>

  <!-- floating client monogram bubbles -->
  <div class="quote__floats" id="quoteFloats"></div>

  <div class="wrap">
    <span class="eyebrow" style="margin-bottom:clamp(28px,4vh,44px);">Client Testimonials</span>
    <div class="quote__inner">
      <div class="quote__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7.5a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 11 7.5zm11 0a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 22 7.5z"/></svg>
      </div>
      <p class="quote__text" id="quoteText"></p>
      <div class="quote__cite" id="quoteCite"></div>
      <div class="quote__dots" id="quoteDots"></div>
    </div>
  </div>
</section>

<!-- ============================== CTA ============================ -->
<section class="sec cta-end" id="cta">
  <div class="wrap row">
    <div>
      <span class="eyebrow" data-rise>Ready When You Are</span>
      <h2 class="h2" data-rise>Let&rsquo;s add your brand to this list.</h2>
    </div>
    <div data-rise>
      <a class="btn btn--dark" href="/contact#book">
        Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
