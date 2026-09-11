// Body markup for /blog, lifted from em-creative-studio-blog_2.html.
// Rendered as-is: the stylesheet in app/blog/page.css and the behaviour in
// public/scripts/pages/blog.js are both written against this exact structure.
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
        <a href="/blog" aria-current="page">Blog</a>
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
    <span class="eyebrow">Los Angeles &middot; The Journal</span>
    <h1 class="hero__hl" data-words>Notes on getting<br><em class="tint">noticed.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Strategy, craft, and the occasional hot take</strong> on real estate marketing, written by the team that runs the campaigns, not a contractor who has never seen your market.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">6 categories</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">Weekly drops</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">5-min reads</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Zero fluff</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="#featured">
      Read the latest <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#feed">Browse categories</a>
  </div>
</section>

<!-- ============================== FEATURED ========================= -->
<section class="sec feat-wrap" id="featured">
  <div class="wrap">
    <span class="eyebrow" data-rise>
      <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
      Just Published
    </span>

    <a class="feat" href="/blog/the-listing-photo-mistake" data-rise>
      <div class="feat__media">
        <img src="https://cdn.pixabay.com/photo/2017/08/03/18/04/camera-2577668_1280.jpg" alt="Camera set up for a real estate listing photo shoot" loading="lazy" decoding="async">
        <span class="feat__pill"><svg viewBox="0 0 24 24"><use href="#ic-star"/></svg> Featured</span>
      </div>
      <div class="feat__body">
        <span class="feat__cat">Content &amp; Photography</span>
        <h2 class="feat__ttl">The listing photo mistake that&rsquo;s costing you showings</h2>
        <p class="feat__excerpt">Buyers decide in under three seconds whether to click into a listing. We broke down forty top-performing listings to find the one framing choice separating the scrolls-past from the saves.</p>
        <div class="feat__meta">
          <span class="feat__avatar"><img src="https://cdn.pixabay.com/photo/2021/03/26/08/34/woman-6125218_1280.jpg" alt="Maya Chen" loading="lazy" decoding="async"></span>
          Maya Chen &middot; Aug 24 &middot; 6 min read
        </div>
        <span class="feat__link">Read the story <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
      </div>
    </a>
  </div>
</section>

<!-- ============================== FEED ========================= -->
<section class="sec sec--linen" id="feed">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          The Archive
        </span>
        <h2 class="h2" data-rise>Six categories, <span class="tint">one voice.</span></h2>
      </div>
      <p class="lede" data-rise>Filter by whatever you&rsquo;re working on this week.</p>
    </div>

    <div class="filters" data-rise role="group" aria-label="Filter articles by category">
      <button class="filter" type="button" data-filter="all" aria-pressed="true">All Stories</button>
      <button class="filter" type="button" data-filter="branding" aria-pressed="false">Branding</button>
      <button class="filter" type="button" data-filter="social" aria-pressed="false">Social Media</button>
      <button class="filter" type="button" data-filter="seo" aria-pressed="false">SEO</button>
      <button class="filter" type="button" data-filter="email" aria-pressed="false">Email &amp; CRM</button>
      <button class="filter" type="button" data-filter="web" aria-pressed="false">Web Design</button>
      <button class="filter" type="button" data-filter="print" aria-pressed="false">Print</button>
    </div>
    <p class="feed__count" data-count>Showing all 6 stories</p>

    <div class="post-grid">
      <article class="post-card" data-cat="branding" data-rise>
        <a class="post-card__media" href="#" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2017/06/29/22/29/branding-2456457_1280.jpg" alt="Brand identity moodboard with swatches and type samples" loading="lazy" decoding="async">
          <span class="post-card__cat">Branding</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="#">Why your brand voice should sound like you, not every other agent</a></h3>
          <p class="post-card__excerpt">The fastest way to blend into a crowded market is to sound like everyone in it. A framework for finding the two or three words that are actually yours.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2019/12/10/05/11/serious-4684970_1280.jpg" alt="Jordan Reyes" loading="lazy" decoding="async"></span> Jordan Reyes &middot; 5 min read</div>
          <a class="post-card__link" href="#">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="post-card" data-cat="social" data-rise>
        <a class="post-card__media" href="#" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2021/02/03/05/27/social-media-5976707_1280.jpg" alt="Social media feed open on a smartphone" loading="lazy" decoding="async">
          <span class="post-card__cat">Social Media</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="#">The algorithm doesn&rsquo;t care about your aesthetic</a></h3>
          <p class="post-card__excerpt">Here is what it actually rewards: watch time, saves, and shares, in that order. A practical look at what to change first.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2021/04/07/09/47/man-6158647_1280.jpg" alt="Amir Khoury" loading="lazy" decoding="async"></span> Amir Khoury &middot; 4 min read</div>
          <a class="post-card__link" href="#">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="post-card" data-cat="seo" data-rise>
        <a class="post-card__media" href="#" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2015/09/05/21/13/analytics-925379_1280.jpg" alt="Analytics dashboard showing search traffic data" loading="lazy" decoding="async">
          <span class="post-card__cat">SEO</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="#">Local SEO for agents: ranking when buyers search &ldquo;near me&rdquo;</a></h3>
          <p class="post-card__excerpt">Three technical fixes and one content habit that moved four of our clients onto page one for their neighborhood terms.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2021/03/26/12/27/woman-6125789_1280.jpg" alt="Sofia Park" loading="lazy" decoding="async"></span> Sofia Park &middot; 7 min read</div>
          <a class="post-card__link" href="#">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="post-card" data-cat="email" data-rise>
        <a class="post-card__media" href="#" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2019/06/30/21/36/newsletter-4308826_1280.jpg" alt="Email newsletter layout on a laptop screen" loading="lazy" decoding="async">
          <span class="post-card__cat">Email &amp; CRM</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="#">Open house follow-ups that actually get replies</a></h3>
          <p class="post-card__excerpt">The five-email sequence we send within an hour of every showing, and why the second email outperforms the first.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2021/03/26/08/34/woman-6125218_1280.jpg" alt="Maya Chen" loading="lazy" decoding="async"></span> Maya Chen &middot; 5 min read</div>
          <a class="post-card__link" href="#">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="post-card" data-cat="web" data-rise>
        <a class="post-card__media" href="#" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="Website design layout displayed on a monitor" loading="lazy" decoding="async">
          <span class="post-card__cat">Web Design</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="#">What makes a listing site convert, beyond pretty photos</a></h3>
          <p class="post-card__excerpt">Load speed, form placement, and one map widget decision that quietly kills mobile leads on half the sites we audit.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_1280.jpg" alt="Devon Lee" loading="lazy" decoding="async"></span> Devon Lee &middot; 6 min read</div>
          <a class="post-card__link" href="#">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="post-card" data-cat="print" data-rise>
        <a class="post-card__media" href="#" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2018/07/26/03/11/offset-printing-3562699_1280.jpg" alt="Offset printing press running a print job" loading="lazy" decoding="async">
          <span class="post-card__cat">Print</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="#">Print isn&rsquo;t dead: when a postcard still beats a boosted post</a></h3>
          <p class="post-card__excerpt">Farming a ten-block radius? The math on direct mail versus paid social, run on three actual campaigns.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2021/04/07/09/47/man-6158647_1280.jpg" alt="Amir Khoury" loading="lazy" decoding="async"></span> Amir Khoury &middot; 4 min read</div>
          <a class="post-card__link" href="#">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>
    </div>

    <div class="feed__more" data-rise>
      <button class="btn btn--ghost" type="button">Load more stories</button>
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
        <p class="news__body">The strategies, swipe files, and behind-the-scenes numbers we don&rsquo;t publish anywhere else, straight from the team running the campaigns.</p>
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

<!-- ============================== CTA END ========================= -->
<section class="sec cta-end">
  <div class="wrap">
    <div class="row">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Ready When You Are
        </span>
        <h2 class="h2" data-rise>Enough reading. <span class="tint">Let&rsquo;s talk shop.</span></h2>
      </div>
      <div data-rise>
        <a class="btn btn--dark" href="/contact">
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
          <li><a href="/work">Work</a></li>
          <li><a href="/#process">Process</a></li>
        </ul>
      </div>
      <div>
        <p class="foot__label">Company</p>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/blog" aria-current="page">Blog</a></li>
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
