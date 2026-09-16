// Body markup for /testimonials, lifted from em-creative-studio-testimonials_2.html.
// Rendered as-is: the stylesheet in app/testimonials/page.css and the behaviour in
// public/scripts/pages/testimonials.js are both written against this exact structure.
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
        <a href="/testimonials" aria-current="page">Testimonials</a>
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
    <span class="eyebrow">Los Angeles &middot; Client Stories</span>
    <h1 class="hero__hl" data-words>Six clients.<br><em class="tint">Zero scripted lines.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Every quote on this page came from a client who didn&rsquo;t have to say yes twice.</strong> Real names, real companies, gathered straight from the campaigns we ran together.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">4.9/5 average</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">98% would refer us</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">6 client stories</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">0 paid reviews</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="#spotlight">
      Hear from a client <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#wall">Read every story</a>
  </div>
</section>

<!-- ============================== ROSTER ========================= -->
<section class="sec roster-wrap">
  <div class="wrap">
    <p class="roster__cap" data-rise>Brands who&rsquo;ve trusted us with their name</p>
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
  </div>
</section>

<!-- ============================== SPOTLIGHT (spliced) ========================= -->
<section class="quote" id="spotlight">
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
    <span class="eyebrow" style="margin-bottom:clamp(28px,4vh,44px);">In Their Own Words</span>
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

<!-- ============================== WALL OF LOVE ========================= -->
<section class="sec sec--linen" id="wall">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          The Wall of Love
        </span>
        <h2 class="h2" data-rise>Six brands, <span class="tint">six honest reviews.</span></h2>
      </div>
      <p class="lede" data-rise>Filter by the service that matters to you, or read them all.</p>
    </div>

    <div class="filters" data-rise role="group" aria-label="Filter reviews by service">
      <button class="filter" type="button" data-filter="all" aria-pressed="true">All Reviews</button>
      <button class="filter" type="button" data-filter="branding" aria-pressed="false">Branding</button>
      <button class="filter" type="button" data-filter="web" aria-pressed="false">Web Design</button>
      <button class="filter" type="button" data-filter="social" aria-pressed="false">Social Media</button>
      <button class="filter" type="button" data-filter="seo" aria-pressed="false">SEO</button>
      <button class="filter" type="button" data-filter="print" aria-pressed="false">Print</button>
      <button class="filter" type="button" data-filter="crm" aria-pressed="false">Email &amp; CRM</button>
    </div>
    <p class="feed__count" data-count>Showing all 6 reviews</p>

    <div class="love-grid">
      <article class="love-card" data-cat="branding" data-rise>
        <div class="love-card__top">
          <span class="love-card__mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7.5a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 11 7.5zm11 0a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 22 7.5z"/></svg></span>
          <span class="love-card__cat">Branding</span>
        </div>
        <div class="love-card__stars" aria-label="5 out of 5 stars">
          <svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg>
        </div>
        <p class="love-card__text">&ldquo;They gave us a brand our competitors keep quietly borrowing. The attention to detail was unlike anything we have experienced with other agencies.&rdquo;</p>
        <div class="love-card__foot">
          <span class="love-card__avatar"><img src="https://cdn.pixabay.com/photo/2019/10/04/13/19/woman-4525646_1280.jpg" alt="Dana Reyes" loading="lazy" decoding="async"></span>
          <div>
            <div class="love-card__name">Dana Reyes</div>
            <div class="love-card__role">Founder, Marchetti &amp; Co.</div>
          </div>
        </div>
      </article>

      <article class="love-card" data-cat="web" data-rise>
        <div class="love-card__top">
          <span class="love-card__mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7.5a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 11 7.5zm11 0a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 22 7.5z"/></svg></span>
          <span class="love-card__cat">Web Design</span>
        </div>
        <div class="love-card__stars" aria-label="5 out of 5 stars">
          <svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg>
        </div>
        <p class="love-card__text">&ldquo;EM Creative completely transformed our online presence. Within three months our listings were getting twice the engagement and our brand finally felt like us.&rdquo;</p>
        <div class="love-card__foot">
          <span class="love-card__avatar"><img src="https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583034_1280.jpg" alt="Michael Torres" loading="lazy" decoding="async"></span>
          <div>
            <div class="love-card__name">Michael Torres</div>
            <div class="love-card__role">Broker, Westside Realty Group</div>
          </div>
        </div>
      </article>

      <article class="love-card" data-cat="social" data-rise>
        <div class="love-card__top">
          <span class="love-card__mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7.5a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 11 7.5zm11 0a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 22 7.5z"/></svg></span>
          <span class="love-card__cat">Social Media</span>
        </div>
        <div class="love-card__stars" aria-label="5 out of 5 stars">
          <svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg>
        </div>
        <p class="love-card__text">&ldquo;They took over our Instagram and Reels and our engagement tripled inside a quarter. What I appreciate most is they understand our coastal market, not just marketing in general.&rdquo;</p>
        <div class="love-card__foot">
          <span class="love-card__avatar"><img src="https://cdn.pixabay.com/photo/2017/06/01/00/44/laughing-2362140_1280.jpg" alt="Elena Cruz" loading="lazy" decoding="async"></span>
          <div>
            <div class="love-card__name">Elena Cruz</div>
            <div class="love-card__role">VP Marketing, Coastline Realty Partners</div>
          </div>
        </div>
      </article>

      <article class="love-card" data-cat="seo" data-rise>
        <div class="love-card__top">
          <span class="love-card__mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7.5a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 11 7.5zm11 0a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 22 7.5z"/></svg></span>
          <span class="love-card__cat">SEO</span>
        </div>
        <div class="love-card__stars" aria-label="5 out of 5 stars">
          <svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg>
        </div>
        <p class="love-card__text">&ldquo;Our organic leads nearly doubled in six months without touching a single paid ad. The local SEO work they did actually moved the needle, not just the rankings report.&rdquo;</p>
        <div class="love-card__foot">
          <span class="love-card__avatar"><img src="https://cdn.pixabay.com/photo/2022/11/29/10/54/indian-businesswoman-7624276_1280.jpg" alt="Priya Anand" loading="lazy" decoding="async"></span>
          <div>
            <div class="love-card__name">Priya Anand</div>
            <div class="love-card__role">Marketing Director, Ainsworth Properties</div>
          </div>
        </div>
      </article>

      <article class="love-card" data-cat="print" data-rise>
        <div class="love-card__top">
          <span class="love-card__mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7.5a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 11 7.5zm11 0a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 22 7.5z"/></svg></span>
          <span class="love-card__cat">Print</span>
        </div>
        <div class="love-card__stars" aria-label="5 out of 5 stars">
          <svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg>
        </div>
        <p class="love-card__text">&ldquo;The postcard campaign they built for our farm area outperformed every boosted post we tried that quarter. It&rsquo;s rare to find a shop that still does print this well and still gets digital.&rdquo;</p>
        <div class="love-card__foot">
          <span class="love-card__avatar"><img src="https://cdn.pixabay.com/photo/2020/08/26/15/43/portrait-5519817_1280.jpg" alt="Grant Bellmore" loading="lazy" decoding="async"></span>
          <div>
            <div class="love-card__name">Grant Bellmore</div>
            <div class="love-card__role">Managing Partner, Bellmore &amp; Hale</div>
          </div>
        </div>
      </article>

      <article class="love-card" data-cat="crm" data-rise>
        <div class="love-card__top">
          <span class="love-card__mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7.5a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 11 7.5zm11 0a4.5 4.5 0 0 0-9 0c0 3.5 3.5 6.5 4.5 7.5h1c-1-2-1.5-3.5-1-5A4.5 4.5 0 0 0 22 7.5z"/></svg></span>
          <span class="love-card__cat">Email &amp; CRM</span>
        </div>
        <div class="love-card__stars" aria-label="5 out of 5 stars">
          <svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg><svg viewBox="0 0 24 24"><use href="#ic-star-fill"/></svg>
        </div>
        <p class="love-card__text">&ldquo;Working with Seda and her team felt like having an in-house creative department. They understood our market from day one and delivered beyond expectations.&rdquo;</p>
        <div class="love-card__foot">
          <span class="love-card__avatar"><img src="https://cdn.pixabay.com/photo/2015/07/08/11/25/female-836109_1280.jpg" alt="Rachel Kim" loading="lazy" decoding="async"></span>
          <div>
            <div class="love-card__name">Rachel Kim</div>
            <div class="love-card__role">Team Lead, Luxe Properties LA</div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ============================== STATS BAND ========================= -->
<section class="sec">
  <div class="wrap">
    <div class="stats" data-rise>
      <div class="stat">
        <div class="stat__num">4.9/5</div>
        <div class="stat__lbl">Average client rating</div>
      </div>
      <div class="stat">
        <div class="stat__num">98%</div>
        <div class="stat__lbl">Would refer a friend</div>
      </div>
      <div class="stat">
        <div class="stat__num">240+</div>
        <div class="stat__lbl">Campaigns delivered</div>
      </div>
      <div class="stat">
        <div class="stat__num">3.4x</div>
        <div class="stat__lbl">Average traffic lift</div>
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
        <p class="news__body">The strategies, swipe files, and behind-the-scenes numbers we don&rsquo;t publish anywhere else, straight from the team that earns reviews like the ones above.</p>
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
        <h2 class="h2" data-rise>Ready to become <span class="tint">our next story?</span></h2>
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
          <li><a href="/blog">Blog</a></li>
          <li><a href="/testimonials" aria-current="page">Testimonials</a></li>
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
