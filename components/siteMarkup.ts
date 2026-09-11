// Auto-extracted static markup from the original em-creative-studio-home_17.html.
// Rendered via dangerouslySetInnerHTML to preserve pixel-exact structure that the
// hand-tuned CSS and vanilla-JS behaviour scripts in /public/scripts depend on.
export const SITE_BODY_HTML = `

<!-- =============================================================
     Reusable crown, lifted from the supplied logo mark
     ============================================================= -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="crown" viewBox="0 0 120 74">
    <path d="M8 68 C4 48 6 22 10 8 L24 37 L38 13 L49 33 L60 5 L71 33 L82 13 L96 37 L110 8 C114 22 116 48 112 68"
          stroke-width="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 53 C36 45 66 44 88 50 C96 52 97 58 90 60 C74 66 42 66 25 61 C19 59 16 56 20 53"
          stroke-width="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="arw" viewBox="0 0 17 10">
    <path d="M0 5h15M11 1l4 4-4 4" stroke="currentColor" stroke-width="1.4" fill="none"/>
  </symbol>
</svg>

<!-- ============================== NAV ========================== -->
<header class="nav">
  <div class="nav-pill">
    <a class="brand" href="#top" data-hot><img src="data:image/webp;base64,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" alt="EM Creative Studio" style="height:40px;width:auto;display:block;"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services" data-hot>Services</a>
        <a href="/about" data-hot>About</a>
        <a href="/packages" data-hot>Packages</a>
        <a href="/work" data-hot>Work</a>
        <a href="/blog" data-hot>Blog</a>
        <a href="/testimonials" data-hot>Testimonials</a>
        <a href="/contact" data-hot>Contact</a>
      </nav>
    </div>
    <div class="nav-collapse">
      <a class="btn btn--dark" href="/contact" data-hot>
        Start a project <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
    </div>
  </div>
</header>

<!-- ============================== HERO ========================= -->
<!-- The hero and the shot plate share one sky. The white ground and the
     painted cloud plate used to live inside the hero, which put a hard seam
     across the page wherever the hero ended; they belong to the pair, so they
     sit on the wrapper and both sections ride on top of them. -->
<div class="atmos">
  <div class="atmos__ground"></div>
  <div class="atmos__clouds" aria-hidden="true"></div>
  <div class="atmos__sky" aria-hidden="true">
    <canvas class="atmos__fluid" id="heroFluid"></canvas>
  </div>
  <div class="atmos__weave" aria-hidden="true"></div>

<section class="hero" id="top">

  <!-- The crown draws itself on: one stroke, run as a dash offset, used as a
       mask over the artwork so the 3D form appears along the line rather than
       fading in. The mask stroke is deliberately fatter than the tube, so the
       finished copy (.crown-draw__full) settles in underneath at the end to
       guarantee every tip and outer bend is covered. Both <image>s point at
       the same file, which is the transparent-background crown the hero
       already used - the source animation carried its own painted backdrop
       and that is exactly what has been dropped here. -->
  <div class="liquid liquid--a" aria-hidden="true">
    <!-- .liquid__stage exists only so the intro has a transform of its own.
         .liquid (parallax) and .liquid__inner (the float loop, which carries
         the mark's 12deg resting tilt) are both written every frame by
         main.js; putting the intro on either would mean fighting it, and
         putting it further in would mean translating along the tilted axes. -->
    <div class="liquid__stage">
    <div class="liquid__inner">
      <div class="liquid__art">
        <svg class="crown-draw" viewBox="0 0 900 625" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="crownDraw" maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="625">
              <rect width="900" height="625" fill="#000"/>
              <!-- Authored against a square 1254 board; this transform lands it
                   on the tightly-cropped 900x625 artwork (fitted to the crown's
                   own alpha, mean coverage .84 along the centreline).
                   The width is measured, not eyeballed: the path is a smooth
                   bezier and it cuts the corners, so at every sharp bend the
                   tube's outer edge sits further from the centreline than the
                   stroke reaches. At 115 that left 1.3% of the artwork behind
                   as white nicks along the outer bends, which stayed on screen
                   until the clean copy settled. 142 covers 99.91%.
                   The caps are BUTT, not round. A round cap paints a disc of
                   half the stroke width even where the dash has zero length,
                   and the dash sits at zero length on the path's last point
                   for the whole draw - so a 71-unit disc of artwork was being
                   revealed at 336,832, which lands on the tip of the left
                   spike's tail. That showed as a loose droplet beside the
                   mark from before the draw even started. Measured at the
                   first frame: 14,414 stray pixels with round, 31 with butt,
                   and butt covers more of the artwork at full draw, not
                   less. -->
              <path class="crown-draw__rev" pathLength="1000"
                    transform="translate(-176.672,-253.044) scale(0.902614)"
                    d="M 790 928 C 690 952, 500 962, 420 895 C 372 855, 392 792, 470 776 C 570 756, 720 820, 812 866 C 852 887, 878 912, 898 936 L 1141 546 C 1090 620, 985 645, 940 620 C 908 602, 898 569, 898 528 C 880 570, 820 630, 795 648 C 775 600, 770 450, 772 320 C 745 400, 700 560, 655 620 C 640 642, 618 652, 600 645 C 560 630, 500 560, 452 458 C 425 512, 390 552, 335 604 C 300 552, 250 480, 215 432 C 240 530, 300 720, 336 832"
                    fill="none" stroke="#fff" stroke-width="142"
                    stroke-linecap="butt" stroke-linejoin="round"/>
            </mask>
          </defs>
          <image class="crown-draw__ink" href="/images/crown.webp"
                 x="0" y="0" width="900" height="625" mask="url(#crownDraw)"/>
          <image class="crown-draw__full" href="/images/crown.webp"
                 x="0" y="0" width="900" height="625"/>
        </svg>
      </div>
      <div class="liquid__sheen"></div>
    </div>
    </div>
  </div>

  <div class="hero__scrim" aria-hidden="true"></div>

  <div class="hero__inner">
    <span class="eyebrow">Los Angeles &middot; Studio since 2019</span>

    <h1 class="hero__hl" data-words>Brands that earn <em class="tint">their <span id="crownWord">crown</span></em></h1>
  </div>


</section>

<!-- ====================== HERO SHOT ======================
     Sits directly under the hero and opens out as you scroll: the plate
     starts inset with the paper showing around it, then loses its margin
     and its corners until it is full bleed, and the calls to action fade
     up over it. The stage is sticky inside a tall track, so the scroll
     distance drives the growth instead of moving the plate down the page.
     ======================================================= -->
<section class="shot" id="shot">
  <div class="shot__track">
    <div class="shot__stage">
      <figure class="shot__frame">
        <img
          class="shot__img"
          src="/images/hero-shot.webp"
          srcset="/images/hero-shot-sm.webp 800w, /images/hero-shot.webp 1360w"
          sizes="100vw"
          width="1360" height="907"
          alt="A boardroom with a long walnut table, black chairs and a wall-mounted screen"
          decoding="async">
        <!-- second fluid field, over the photograph rather than the paper.
             Sits before the veil so the veil still darkens everything under
             the copy; both rely on DOM order, so nothing here takes a
             z-index (giving the canvas one would lift it over both). -->
        <canvas class="shot__fluid" id="shotFluid" aria-hidden="true"></canvas>
        <div class="shot__veil" aria-hidden="true"></div>
        <figcaption class="shot__copy">
          <!-- Each word carries its index so the reveal can sweep across the
               line as the plate opens, rather than the whole block fading at
               once. The wipe is a function of scroll progress, so it tracks
               the scroll instead of running on its own clock. -->
          <p class="shot__lede">
            <strong><span class="w" style="--i:0">Search,</span> <span class="w" style="--i:1">web</span> <span class="w" style="--i:2">design</span> <span class="w" style="--i:3">and</span> <span class="w" style="--i:4">brand</span> <span class="w" style="--i:5">systems</span></strong>
            <span class="w" style="--i:6">for</span> <span class="w" style="--i:7">companies</span> <span class="w" style="--i:8">that</span> <span class="w" style="--i:9">refuse</span> <span class="w" style="--i:10">to</span> <span class="w" style="--i:11">blend</span> <span class="w" style="--i:12">in.</span>
          </p>
          <div class="shot__acts">
            <a class="btn btn--paper" href="/contact" data-hot>
              Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
            </a>
            <a class="btn btn--ghost" href="/work" data-hot>See the work</a>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
</section>
</div><!-- /.atmos -->


<!-- ===================== MARQUEE (minimal) ===================== -->
<section class="strip" aria-label="What we do">
  <div class="strip__track">
    <div class="strip__set">
      <span>SEO &amp; Local Search</span><i>&#8212;</i>
      <span>Web Design</span><i>&#8212;</i>
      <span>Brand Identity</span><i>&#8212;</i>
      <span>Paid Social</span><i>&#8212;</i>
      <span>Content Studio</span><i>&#8212;</i>
      <span>Email &amp; CRM</span><i>&#8212;</i>
    </div>
    <div class="strip__set" aria-hidden="true">
      <span>SEO &amp; Local Search</span><i>&#8212;</i>
      <span>Web Design</span><i>&#8212;</i>
      <span>Brand Identity</span><i>&#8212;</i>
      <span>Paid Social</span><i>&#8212;</i>
      <span>Content Studio</span><i>&#8212;</i>
      <span>Email &amp; CRM</span><i>&#8212;</i>
    </div>
  </div>
</section>

<!-- =========================== SERVICES ======================== -->
<section class="sec sec--linen" id="services">
  <div class="wrap svc">

    <div class="deck armed" id="deck">
      <article class="card" data-i="0">
        <div class="card__top"><span class="card__no">01 / Social</span><div class="card__mark"></div></div>
        <div>
          <h3 class="card__ttl">Social Media Management</h3>
          <p class="card__body">Content planning, posting, captions, hashtag strategy, and engagement that grows your following organically.</p>
        </div>
      </article>
      <article class="card" data-i="1">
        <div class="card__top"><span class="card__no">02 / Brand</span><div class="card__mark"></div></div>
        <div>
          <h3 class="card__ttl">Branding &amp; Strategy</h3>
          <p class="card__body">Website development, personal brand positioning, growth strategy, and monthly reporting.</p>
        </div>
      </article>
      <article class="card" data-i="2">
        <div class="card__top"><span class="card__no">03 / Content</span><div class="card__mark"></div></div>
        <div>
          <h3 class="card__ttl">Content Creation</h3>
          <p class="card__body">Reels, stories, branded graphics, listing content, and lifestyle visuals that stop the scroll.</p>
        </div>
      </article>
      <article class="card" data-i="3">
        <div class="card__top"><span class="card__no">04 / Email</span><div class="card__mark"></div></div>
        <div>
          <h3 class="card__ttl">Email Marketing</h3>
          <p class="card__body">Drip campaigns, newsletters, segmentation and automations that nurture leads into closed deals.</p>
        </div>
      </article>
      <article class="card" data-i="4">
        <div class="card__top"><span class="card__no">05 / Print</span><div class="card__mark"></div></div>
        <div>
          <h3 class="card__ttl">Print &amp; Digital Marketing</h3>
          <p class="card__body">Flyers, brochures, postcards and digital collateral that make your listings impossible to ignore.</p>
        </div>
      </article>
      <article class="card" data-i="5">
        <div class="card__top"><span class="card__no">06 / Ads</span><div class="card__mark"></div></div>
        <div>
          <h3 class="card__ttl">Digital Advertising</h3>
          <p class="card__body">Meta, Google and programmatic campaigns tracked against real ROI, with creative refreshed every fortnight.</p>
        </div>
      </article>
    </div>

    <div>
      <span class="eyebrow" data-rise>
        <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
        What we do
      </span>
      <h2 class="h2" data-rise>Six disciplines, <span class="tint">one studio</span></h2>
      <p class="lede" data-rise style="margin-top:18px">
        Most agencies hand you a channel. We hand you the whole picture, because search, design and
        content only work when they are saying the same thing.
      </p>
      <ol class="svc-index" id="svcIndex" data-rise>
        <li aria-selected="true"><button type="button" data-go="0" data-hot><span class="n">01</span> Social Media Management <span class="bar"></span></button></li>
        <li><button type="button" data-go="1" data-hot><span class="n">02</span> Branding &amp; Strategy <span class="bar"></span></button></li>
        <li><button type="button" data-go="2" data-hot><span class="n">03</span> Content Creation <span class="bar"></span></button></li>
        <li><button type="button" data-go="3" data-hot><span class="n">04</span> Email Marketing <span class="bar"></span></button></li>
        <li><button type="button" data-go="4" data-hot><span class="n">05</span> Print &amp; Digital Marketing <span class="bar"></span></button></li>
        <li><button type="button" data-go="5" data-hot><span class="n">06</span> Digital Advertising <span class="bar"></span></button></li>
      </ol>
      <a href="#" class="btn btn--ghost" style="margin-top:clamp(18px,2.4vh,28px);display:inline-flex" data-hot>View all services <span>&rarr;</span></a>
    </div>

  </div>
</section>

<!-- =========================== PROCESS ========================= -->
<section class="sec process" id="process">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          How it runs
        </span>
        <h2 class="h2" data-rise>Four steps. No mystery.</h2>
      </div>
      <p class="lede" data-rise>Every engagement follows the same spine, whether it is a one-page site or a full rebrand.</p>
    </div>

    <div class="stack">
      <article class="step">
        <div class="step__no">01</div>
        <div>
          <h3 class="step__ttl">Listen, then audit.</h3>
          <p class="step__body">A 90-minute session with whoever actually owns the revenue. Then we pull the numbers: rankings, page speed, funnel drop-off, and what your three closest competitors are doing better than you.</p>
          <ul class="step__tags"><li>Discovery call</li><li>Technical audit</li><li>Competitor teardown</li></ul>
        </div>
        <div class="step__art"><img src="/images/steps/listen.webp" alt="A team talking across a table, papers and coffee between them" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"></div>
      </article>
      <article class="step">
        <div class="step__no">02</div>
        <div>
          <h3 class="step__ttl">Draw the direction.</h3>
          <p class="step__body">One direction, presented properly, with the reasoning attached. You will see type, colour, motion and two key screens before a single line of production code exists.</p>
          <ul class="step__tags"><li>Art direction</li><li>Key screens</li><li>Copy platform</li></ul>
        </div>
        <div class="step__art"><img src="/images/steps/direction.webp" alt="Blank stationery, a rubber stamp and a wooden ampersand laid out on stone" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"></div>
      </article>
      <article class="step">
        <div class="step__no">03</div>
        <div>
          <h3 class="step__ttl">Build it properly.</h3>
          <p class="step__body">Accessible markup, real performance budgets, schema on every template, and a CMS your team can edit on a Tuesday afternoon without calling us.</p>
          <ul class="step__tags"><li>Design system</li><li>Build &amp; QA</li><li>Analytics</li></ul>
        </div>
        <div class="step__art"><img src="/images/steps/build.webp" alt="A build desk: an HTML and CSS reference, a laptop and a ruled notepad" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"></div>
      </article>
      <article class="step">
        <div class="step__no">04</div>
        <div>
          <h3 class="step__ttl">Then keep the pressure on.</h3>
          <p class="step__body">Launch is the start. Monthly content, technical SEO upkeep, paid creative and a plain-English report that tells you what moved and what we are doing about it.</p>
          <ul class="step__tags"><li>Monthly content</li><li>Search upkeep</li><li>Revenue report</li></ul>
        </div>
        <div class="step__art"><img src="/images/steps/measure.webp" alt="A laptop showing a traffic graph and a visitor breakdown" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"></div>
      </article>
    </div>
  </div>
</section>



<!-- ========================== QUIZ ========================== -->
<section class="sec" id="quiz" style="padding-block:clamp(60px,9vh,110px);">
  <div class="wrap" style="text-align:center;">
    <span class="eyebrow" style="margin-bottom:14px;">Quick Assessment</span>
    <h2 class="h2" style="font-family:var(--serif,Georgia,serif);font-weight:400;font-size:clamp(2rem,4.5vw,3.4rem);letter-spacing:-.02em;text-align:center;max-width:none;margin-left:auto;margin-right:auto;">Find Your Perfect Package</h2>
    <p class="lede" style="margin:12px auto 0;max-width:48ch;opacity:.6;">Answer a few quick questions and we'll recommend the ideal marketing plan for your business.</p>

    <div id="quizCard" style="max-width:860px;margin:clamp(32px,5vh,56px) auto 0;background:rgba(214,198,180,.18);border-radius:var(--r-lg);padding:clamp(32px,4.5vw,56px);text-align:left;transition:opacity 200ms ease,transform 200ms ease;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span id="qLabel" style="font-size:13px;opacity:.6;">Question 1 of 3</span>
        <span id="qPct" style="font-size:13px;opacity:.6;">33%</span>
      </div>
      <div style="height:4px;border-radius:2px;background:rgba(74,68,61,.12);overflow:hidden;">
        <div id="qBar" style="height:100%;width:33.3%;background:var(--espresso);border-radius:2px;transition:width 400ms var(--ease-out);"></div>
      </div>
      <h3 id="qTitle" style="font-family:var(--display);font-weight:800;font-size:clamp(1.1rem,1.8vw,1.45rem);margin:clamp(18px,2.5vh,28px) 0 clamp(14px,2vh,22px);letter-spacing:-.02em;">What best describes your current setup?</h3>
      <div id="qOpts" class="quiz__opts"></div>
    </div>
  </div>
</section>

<!-- ============================ STATS ========================== -->
<section class="sec stats">
  <div class="stats__wrap">
    <div class="stats__top">
      <div>
        <div class="stats__eyebrow" data-rise>Six Years, Counted</div>
        <h2 class="stats__heading" data-rise>Numbers that speak <span>for themselves.</span></h2>
      </div>
    </div>
    <div class="stats__row">
      <div class="stats__card" data-rise>
        <span class="stats__num">240<small>+</small></span>
        <span class="stats__label">Sites shipped</span>
      </div>
      <div class="stats__card" data-rise>
        <span class="stats__num">3.4<small>x</small></span>
        <span class="stats__label">Avg. traffic lift</span>
      </div>
      <div class="stats__card" data-rise>
        <span class="stats__num">$18<small>M</small></span>
        <span class="stats__label">Revenue tracked</span>
      </div>
      <div class="stats__card" data-rise>
        <span class="stats__num">98<small>%</small></span>
        <span class="stats__label">Client retention</span>
      </div>
    </div>
  </div>
</section>

<!-- ============================ TEAM ============================= -->
<section class="sec team" id="team">
  <div class="wrap">
    <!-- featured CEO -->
    <div class="team__ceo" data-rise>
      <div class="team__ceo-left">
        <span class="team__ceo-eyebrow">Why EM Creative Studio</span>
        <h3 class="team__ceo-name">Real Designers. Real Strategy. Real <span>Results.</span></h3>
        <p class="team__ceo-bio">In a world of AI templates and generic agencies, we believe in the power of human creativity.</p>

        <div class="team__ceo-features">
          <div class="team__ceo-feat">
            <span class="team__ceo-feat-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg></span>
            <div>
              <h4>Human-Led, Not AI-Driven</h4>
              <p>Every post, every design, every strategy is crafted by a real creative team who understands your market. No bots, no templates, no shortcuts.</p>
            </div>
          </div>
          <div class="team__ceo-feat">
            <span class="team__ceo-feat-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></span>
            <div>
              <h4>Boutique, Not Factory</h4>
              <p>We take on a select number of clients to ensure every brand gets the attention it deserves. You are never a number in a queue.</p>
            </div>
          </div>
          <div class="team__ceo-feat">
            <span class="team__ceo-feat-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
            <div>
              <h4>Real Estate Expertise</h4>
              <p>Our founder spent 10+ years in marketing and real estate. We speak your language, understand your buyers, and know what converts.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="team__ceo-right">
        <div class="team__ceo-photo">
          <img src="data:image/webp;base64,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" alt="Seda Naumenko" loading="lazy">
          <!-- floating quote card -->
          <div class="team__ceo-quote-card">
            <div class="team__ceo-quote-head">
              <img src="data:image/webp;base64,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" alt="" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">
              <div>
                <strong>Seda Naumenko</strong>
                <span>Founder & Creative Director</span>
              </div>
            </div>
            <p>"Every brand we touch gets the full creative attention of our boutique team."</p>
          </div>
        </div>
      </div>
    </div>

    <div class="team__cta" data-rise>
      <a href="#" class="btn btn--dark" data-hot>Meet the Team <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
    </div>
  </div>
</section>

<!-- team modal -->
<div class="team-modal" id="teamModal">
  <div class="team-modal__bg"></div>
  <div class="team-modal__panel">
    <button class="team-modal__close" aria-label="Close">&times;</button>
    <img id="tmImg" src="" alt="">
    <div>
      <h3 class="team-modal__name" id="tmName"></h3>
      <p class="team-modal__role" id="tmRole"></p>
      <p class="team-modal__bio" id="tmBio"></p>
      <div class="team-modal__tags" id="tmTags"></div>
      <p class="team-modal__quote" id="tmQuote"></p>
    </div>
  </div>
</div>

<!-- ========================== PACKAGES ========================= -->
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
      <button class="pack" type="button" aria-expanded="true" data-hot>
        <div class="pack__head">
          <h3 class="pack__name">Essentials</h3>
          <span class="pack__tag">Getting found</span>
        </div>
        <p class="pack__hint">From $2,400 / month</p>
        <div class="pack__reveal">
          <p class="pack__price">$2,400 <small>/ month</small></p>
          <ul class="pack__list">
            <li>Technical SEO and local listings</li>
            <li>Two content pieces a month</li>
            <li>Quarterly design refresh</li>
            <li>Monthly revenue report</li>
          </ul>
          <span class="btn btn--paper">Start here <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        </div>
      </button>

      <button class="pack" type="button" aria-expanded="false" data-hot>
        <div class="pack__head">
          <h3 class="pack__name">Signature</h3>
          <span class="pack__tag">Most chosen</span>
        </div>
        <p class="pack__hint">From $5,800 / month</p>
        <div class="pack__reveal">
          <p class="pack__price">$5,800 <small>/ month</small></p>
          <ul class="pack__list">
            <li>Everything in Essentials</li>
            <li>Paid social and search, managed</li>
            <li>Monthly content shoot</li>
            <li>Landing pages on request</li>
            <li>A strategist on standing call</li>
          </ul>
          <span class="btn btn--dark">Start here <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        </div>
      </button>

      <button class="pack" type="button" aria-expanded="false" data-hot>
        <div class="pack__head">
          <h3 class="pack__name">Bespoke</h3>
          <span class="pack__tag">Full studio</span>
        </div>
        <p class="pack__hint">From $12,000 / month</p>
        <div class="pack__reveal">
          <p class="pack__price">From $12k <small>/ month</small></p>
          <ul class="pack__list">
            <li>Full rebrand and site build</li>
            <li>Multi-market campaign work</li>
            <li>Dedicated studio team</li>
            <li>Weekly working sessions</li>
          </ul>
          <span class="btn btn--paper">Talk to us <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
        </div>
      </button>
    </div>
  </div>
</section>

<!-- ========================= TESTIMONIAL ======================= -->
<section class="quote" id="testimonials">
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

<!-- ============================ CTA ============================ -->
<section class="sec cta-end" id="contact">
  <div class="wrap row">
    <div>
      <span class="eyebrow" data-rise>
        <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
        Two slots open for Q4
      </span>
      <h2 class="h2" data-rise>You are supposed to be great at your business. Not at ads.</h2>
    </div>
    <div data-rise>
      <a class="btn btn--dark" href="mailto:hello@theemcreative.studio" data-hot>
        Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
<footer class="foot" id="contact">
  <div class="foot__crown" aria-hidden="true"></div>
  <div class="foot__inner">
    <!-- header: logo + tagline -->
    <div class="foot__header">
      <a href="#top" data-hot><img src="data:image/webp;base64,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" alt="EM Creative Studio" style="height:60px;width:auto;display:block;opacity:.9;"></a>
      <p class="foot__tagline">Boutique real estate marketing that earns your crown.</p>
    </div>

    <!-- 3 columns: Studio, Company, Contact+Social -->
    <div class="foot__body">
      <div>
        <p class="foot__label">Studio</p>
        <ul>
          <li><a href="/services" data-hot>Services</a></li>
          <li><a href="/packages" data-hot>Packages</a></li>
          <li><a href="#quiz" data-hot>Assessment</a></li>
          <li><a href="#process" data-hot>Process</a></li>
        </ul>
        <div class="foot__social-row">
          <a href="#" data-hot aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" data-hot aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
          <a href="#" data-hot aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" data-hot aria-label="TikTok"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
        </div>
      </div>
      <div>
        <p class="foot__label">Company</p>
        <ul>
          <li><a href="/about" data-hot>About</a></li>
          <li><a href="/blog" data-hot>Blog</a></li>
          <li><a href="/testimonials" data-hot>Testimonials</a></li>
          <li><a href="#" data-hot>Careers</a></li>
        </ul>
      </div>
      <div>
        <p class="foot__label">Contact</p>
        <ul class="foot__contact">
          <li>
            <span class="foot__contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg></span>
            <a href="mailto:hello@theemcreative.studio" data-hot>hello@theemcreative.studio</a>
          </li>
          <li>
            <span class="foot__contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
            <a href="tel:+13105551234" data-hot>(310) 555-1234</a>
          </li>
          <li>
            <span class="foot__contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <span>Los Angeles, CA</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- legal -->
    <div class="foot__legal">
      <span>&copy; 2026 The EM Creative Studio. All rights reserved.</span>
      <div class="foot__legal-links">
        <a href="/privacy" data-hot>Privacy Policy</a>
        <a href="/terms" data-hot>Terms of Service</a>
        <a href="#" data-hot>Cookies</a>
      </div>
    </div>
  </div>
</footer>



`;
