import { FOOTER_HTML } from "../footer";

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
    <a class="brand" href="/"><img src="/images/logo-em.svg" alt="The EM Creative Studio" width="2000" height="2000"></a>
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
        <a class="btn btn--dark" href="https://calendly.com/theemcreativestudio-info/30min" target="_blank" rel="noopener noreferrer">
          Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
