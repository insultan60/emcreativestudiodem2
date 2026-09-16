// Body markup for /blog/the-listing-photo-mistake, lifted from em-creative-studio-blog-detail_1.html.
// Rendered as-is: the stylesheet in app/blog/the-listing-photo-mistake/page.css and the behaviour in
// public/scripts/pages/blogDetail.js are both written against this exact structure.
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
  <symbol id="ic-linkedin" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/></symbol>
  <symbol id="ic-x" viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
  <symbol id="ic-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><polyline points="22,4 12,13 2,4" stroke="currentColor" stroke-width="1.5" fill="none"/></symbol>
  <symbol id="ic-link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></symbol>
</svg>

<div class="progress" aria-hidden="true"><div class="progress__bar" data-progress></div></div>

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
  <div class="hero__photo" aria-hidden="true">
    <img src="https://cdn.pixabay.com/photo/2017/08/03/18/04/camera-2577668_1280.jpg" alt="" loading="eager" decoding="async">
  </div>
  <div class="hero__photo-veil" aria-hidden="true"></div>
  <div class="hero__scrim" aria-hidden="true"></div>
  <div class="hero__weave" aria-hidden="true"></div>

  <div class="hero__inner">
    <a class="hero__crumb" href="/blog">
      <svg width="14" height="9" viewBox="0 0 17 10" style="transform:scaleX(-1)"><use href="#arw"/></svg>
      All Stories
    </a><br>
    <span class="eyebrow">Content &amp; Photography &middot; 6 min read</span>
    <h1 class="hero__hl" data-words>The listing photo mistake that&rsquo;s costing you showings</h1>
  </div>

  <div class="hero__byline">
    <span class="hero__byline-avatar"><img src="https://cdn.pixabay.com/photo/2021/03/26/08/34/woman-6125218_1280.jpg" alt="Maya Chen" loading="lazy" decoding="async"></span>
    <span class="hero__byline-text"><b>Maya Chen</b>August 24, 2026</span>
  </div>
</section>

<!-- ============================== ARTICLE ========================= -->
<section class="sec" id="article">
  <div class="wrap">
    <article class="art">
      <p class="art__lede" data-rise>Buyers decide whether to click into a listing in under three seconds. We pulled forty top-performing listings from three markets to find out what separates the scroll-past from the save, and the answer had almost nothing to do with the camera.</p>

      <p data-rise>Every agent we work with owns a good camera, or hires someone who does. Resolution stopped being the problem years ago. What we kept finding instead, listing after listing, was a framing habit so common that most agents do not even register it as a choice: shooting straight into a room from the doorway, phone or camera held at standing eye level, and calling it done.</p>

      <h2 data-rise>The three-second rule</h2>
      <p data-rise>Online, a listing gets judged before a single word is read. The first photo in the gallery is not a photo so much as a decision buyers make on your behalf: worth a closer look, or worth a scroll past. On mobile, where most listings are first seen, that decision happens in the time it takes to swipe.</p>

      <div class="art__quote" data-rise>
        <p>&ldquo;The first photo isn&rsquo;t a photo. It&rsquo;s a decision buyers make before they&rsquo;ve read a single word of your listing.&rdquo;</p>
      </div>

      <h2 data-rise>The framing mistake we see everywhere</h2>
      <p data-rise>Shooting from the doorway feels natural because it is where anyone would stand when they first walk in. But it is also the angle that most compresses a room: it flattens depth, crowds the middle distance, and leaves buyers guessing at scale. In the forty listings we reviewed, the rooms that photographed largest were rarely the largest rooms. They were the ones shot from a corner.</p>

      <figure class="art__figure" data-rise>
        <div class="art__figure-media">
          <img src="https://cdn.pixabay.com/photo/2024/09/17/11/19/real-estate-9053405_1280.jpg" alt="A staged living room photographed from a corner angle, showing the full depth of the space" loading="lazy" decoding="async">
        </div>
        <figcaption class="art__figure-cap">A corner angle holds a room&rsquo;s true proportions and gives buyers a sense of scale that most doorway shots lose.</figcaption>
      </figure>

      <p data-rise>Shooting from a corner, roughly hip height, does two things a doorway shot cannot. It shows two walls instead of one, which reads as depth rather than a flat backdrop. And it keeps furniture from stacking on top of itself in the frame, which is the single fastest way to make a real room look smaller than it is.</p>

      <div class="art__stat" data-rise>
        <div class="art__stat-num">68%</div>
        <div class="art__stat-body">of the forty listings we reviewed, photos shot from a room corner outperformed doorway shots on click-through rate, holding square footage and price constant.</div>
      </div>

      <h2 data-rise>What to do instead</h2>
      <p data-rise>None of this requires new equipment. It requires a five-minute habit change before the shoot even starts.</p>

      <ol class="art__list" data-rise>
        <li>
          <span class="art__list-num">01</span>
          <span class="art__list-body"><strong>Shoot from the corner, not the doorway.</strong> Two walls in frame beats one, every time.</span>
        </li>
        <li>
          <span class="art__list-num">02</span>
          <span class="art__list-body"><strong>Keep the horizon line straight</strong> across every room in the gallery. A tilted lens reads as amateur even when the shot itself is good.</span>
        </li>
        <li>
          <span class="art__list-num">03</span>
          <span class="art__list-body"><strong>Let the widest room lead the gallery,</strong> not the exterior. Buyers scroll past a facade in half a second; they linger on a room they can picture living in.</span>
        </li>
      </ol>

      <p data-rise>None of this replaces good light, a clean stage, or a photographer who knows the market. But of every variable we tested across those forty listings, the corner-versus-doorway choice moved the number more than any other single fix, and it costs nothing to make.</p>
    </article>

    <div class="art__foot" data-rise>
      <div class="author-card">
        <span class="author-card__avatar"><img src="https://cdn.pixabay.com/photo/2021/03/26/08/34/woman-6125218_1280.jpg" alt="Maya Chen" loading="lazy" decoding="async"></span>
        <div>
          <p class="author-card__name">Maya Chen</p>
          <p class="author-card__role">Content Strategist, The EM Creative Studio</p>
        </div>
      </div>
      <div class="share">
        <span class="share__label">Share</span>
        <a href="#" aria-label="Share on LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24"><use href="#ic-linkedin"/></svg></a>
        <a href="#" aria-label="Share on X"><svg width="16" height="16" viewBox="0 0 24 24"><use href="#ic-x"/></svg></a>
        <a href="mailto:?subject=Worth%20a%20read" aria-label="Share by email"><svg width="16" height="16" viewBox="0 0 24 24"><use href="#ic-mail"/></svg></a>
        <a href="#" aria-label="Copy link"><svg width="16" height="16" viewBox="0 0 24 24"><use href="#ic-link"/></svg></a>
      </div>
    </div>
  </div>
</section>

<!-- ============================== RELATED ========================= -->
<section class="sec sec--linen">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Keep Reading
        </span>
        <h2 class="h2" data-rise>More from <span class="tint">the archive.</span></h2>
      </div>
    </div>

    <div class="post-grid">
      <article class="post-card" data-rise>
        <a class="post-card__media" href="/blog" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2017/06/29/22/29/branding-2456457_1280.jpg" alt="Brand identity moodboard with swatches and type samples" loading="lazy" decoding="async">
          <span class="post-card__cat">Branding</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="/blog">Why your brand voice should sound like you, not every other agent</a></h3>
          <p class="post-card__excerpt">The fastest way to blend into a crowded market is to sound like everyone in it.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2019/12/10/05/11/serious-4684970_1280.jpg" alt="Jordan Reyes" loading="lazy" decoding="async"></span> Jordan Reyes &middot; 5 min read</div>
          <a class="post-card__link" href="/blog">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="post-card" data-rise>
        <a class="post-card__media" href="/blog" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2015/09/05/21/13/analytics-925379_1280.jpg" alt="Analytics dashboard showing search traffic data" loading="lazy" decoding="async">
          <span class="post-card__cat">SEO</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="/blog">Local SEO for agents: ranking when buyers search &ldquo;near me&rdquo;</a></h3>
          <p class="post-card__excerpt">Three technical fixes and one content habit that moved four clients onto page one.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2021/03/26/12/27/woman-6125789_1280.jpg" alt="Sofia Park" loading="lazy" decoding="async"></span> Sofia Park &middot; 7 min read</div>
          <a class="post-card__link" href="/blog">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>

      <article class="post-card" data-rise>
        <a class="post-card__media" href="/blog" tabindex="-1">
          <img src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="Website design layout displayed on a monitor" loading="lazy" decoding="async">
          <span class="post-card__cat">Web Design</span>
        </a>
        <div class="post-card__body">
          <h3 class="post-card__ttl"><a href="/blog">What makes a listing site convert, beyond pretty photos</a></h3>
          <p class="post-card__excerpt">Load speed, form placement, and one map widget decision that quietly kills mobile leads.</p>
          <div class="post-card__meta"><span class="post-card__avatar"><img src="https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_1280.jpg" alt="Devon Lee" loading="lazy" decoding="async"></span> Devon Lee &middot; 6 min read</div>
          <a class="post-card__link" href="/blog">Read more <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
        </div>
      </article>
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
          <li><a href="/services/seo">SEO Plans</a></li>
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
