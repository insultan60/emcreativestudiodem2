import { FOOTER_HTML } from "./footer";

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
    <a class="brand" href="#top" data-hot><img src="/images/logo-em.svg" alt="EM Creative Studio" width="2000" height="2000"></a>
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
                   less.

                   The black below it is the other half of the fix. Reversing
                   the draw put the tail's tip at the START of the stroke,
                   where it is attached from frame one - but it moved the same
                   fault to the other end. The path's opening point is the
                   swoosh's own tip, now the last thing drawn, and the swoosh's
                   curl passes that tip's artwork at 29.5px on the way round
                   while the brush reaches 64. So from about three quarters of
                   the way through, a sliver of the tip sat loose below the
                   mark until the line finally arrived: the droplet again, on
                   the other side. No brush width fixes that one - it would
                   have to drop under 56 to clear 29.5px, and at 56 it no
                   longer covers the tube it is tracing. Measured both ends the
                   same way: the tail's tip has 48.3px of clearance and the
                   swoosh's has 29.5px, so direction alone can only ever
                   rescue one of them.
                   Hence the mask paints black back over the stretch the
                   stroke has not reached yet, and retreats in step with it -
                   88 wide, which covers that tube whole and stays well inside
                   the 58.6px at which any other part of the path comes near
                   it, so it cannot bite a neighbouring strand.

                   "M 813.33 922.40 L 790 928" is a 24-unit lead-in along the
                   start tangent, and it replaces a black disc that used to
                   sit at the path's end. The artwork's tip does not stop
                   where the path stopped: walking the alpha out from the end
                   point, ink runs a further 21 units, and a butt cap paints
                   nothing past the final point, so the stroke could never
                   reach it. The disc hid that ink until the last moment.
                   That disc was the ending fault. It could not lift early -
                   the ink under it only joins the body of the mark at 2550ms
                   of 2600 - and it could not fade, because a half-faded
                   black cap is a half-transparent crown. So it stepped off
                   whole: 811px, 45x25 units, 5% of the crown's width, in a
                   single frame, after 160ms in which the fat brush and the
                   ease-out between them revealed 10 new pixels. The draw
                   stopped, and then the tip was simply there.
                   The lead-in removes the cause instead of covering it. The
                   stroke sweeps the overhang like any other part of the
                   mark, so the tip is drawn on rather than uncovered, and
                   nothing has to be held back for it. Measured over the
                   whole draw: 0 loose pixels at every frame, 0 pixels lost
                   against the old mask, the same 143273 covered at the end,
                   and a last second that tapers +842, +498, +220, +38
                   instead of stalling and then dumping.
                   24 is the number to re-measure if the artwork changes. It
                   is bounded on both sides: shorter and the far end of the
                   overhang is still loose (141px at 12 units), longer and
                   the lead-in leaves the tube. -->
              <path class="crown-draw__rev" pathLength="1000"
                    transform="translate(-176.672,-253.044) scale(0.902614)"
                    d="M 813.33 922.40 L 790 928 C 690 952, 500 962, 420 895 C 372 855, 392 792, 470 776 C 570 756, 720 820, 812 866 C 852 887, 878 912, 898 936 L 1141 546 C 1090 620, 985 645, 940 620 C 908 602, 898 569, 898 528 C 880 570, 820 630, 795 648 C 775 600, 770 450, 772 320 C 745 400, 700 560, 655 620 C 640 642, 618 652, 600 645 C 560 630, 500 560, 452 458 C 425 512, 390 552, 335 604 C 300 552, 250 480, 215 432 C 240 530, 300 720, 336 832"
                    fill="none" stroke="#fff" stroke-width="142"
                    stroke-linecap="butt" stroke-linejoin="round"/>
<path class="crown-draw__tip" pathLength="1000"
                    transform="translate(-176.672,-253.044) scale(0.902614)"
                    d="M 813.33 922.40 L 790 928 C 690 952, 500 962, 420 895 C 372 855, 392 792, 470 776 C 570 756, 720 820, 812 866 C 852 887, 878 912, 898 936 L 1141 546 C 1090 620, 985 645, 940 620 C 908 602, 898 569, 898 528 C 880 570, 820 630, 795 648 C 775 600, 770 450, 772 320 C 745 400, 700 560, 655 620 C 640 642, 618 652, 600 645 C 560 630, 500 560, 452 458 C 425 512, 390 552, 335 604 C 300 552, 250 480, 215 432 C 240 530, 300 720, 336 832"
                    fill="none" stroke="#000" stroke-width="88"
                    stroke-linecap="butt" stroke-linejoin="round"/>
              <!-- The lead-in's own patch. 44, not 88: the clearance from the
                   path to the curl above is 43 units at the tip and tightens
                   along the lead-in, and 88 (half-width 39.7) bites a notch
                   out of the curl the whole way through the draw. 44 covers
                   this stretch of tube - half-width 19.9 against the tube's
                   17.5 - and cannot reach the curl. It hands over to the 88
                   above at the old path start, and retreats over the last
                   225ms as the line sweeps the tip. -->
              <path class="crown-draw__tipin" pathLength="1000"
                    transform="translate(-176.672,-253.044) scale(0.902614)"
                    d="M 813.33 922.40 L 790 928 C 690 952, 500 962, 420 895 C 372 855, 392 792, 470 776 C 570 756, 720 820, 812 866 C 852 887, 878 912, 898 936 L 1141 546 C 1090 620, 985 645, 940 620 C 908 602, 898 569, 898 528 C 880 570, 820 630, 795 648 C 775 600, 770 450, 772 320 C 745 400, 700 560, 655 620 C 640 642, 618 652, 600 645 C 560 630, 500 560, 452 458 C 425 512, 390 552, 335 604 C 300 552, 250 480, 215 432 C 240 530, 300 720, 336 832"
                    fill="none" stroke="#000" stroke-width="44"
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
    <span class="eyebrow">Based in Los Angeles</span>

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
        <div class="step__art"><img src="/images/steps/listen.webp" alt="Five people gathered around a laptop in the studio, working through an audit together" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"></div>
      </article>
      <article class="step">
        <div class="step__no">02</div>
        <div>
          <h3 class="step__ttl">Draw the direction.</h3>
          <p class="step__body">One direction, presented properly, with the reasoning attached. You will see type, colour, motion and two key screens before a single line of production code exists.</p>
          <ul class="step__tags"><li>Art direction</li><li>Key screens</li><li>Copy platform</li></ul>
        </div>
        <div class="step__art"><img src="/images/steps/direction.webp" alt="A tablet showing the art direction beside a notebook, camera and printed moodboard cards" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"></div>
      </article>
      <article class="step">
        <div class="step__no">03</div>
        <div>
          <h3 class="step__ttl">Build it properly.</h3>
          <p class="step__body">Accessible markup, real performance budgets, schema on every template, and a CMS your team can edit on a Tuesday afternoon without calling us.</p>
          <ul class="step__tags"><li>Design system</li><li>Build &amp; QA</li><li>Analytics</li></ul>
        </div>
        <div class="step__art"><img src="/images/steps/build.webp" alt="A build desk: an analytics dashboard on a laptop, a scoped-out build checklist and wireframes" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"></div>
      </article>
      <article class="step">
        <div class="step__no">04</div>
        <div>
          <h3 class="step__ttl">Then keep the pressure on.</h3>
          <p class="step__body">Launch is the start. Monthly content, technical SEO upkeep, paid creative and a plain-English report that tells you what moved and what we are doing about it.</p>
          <ul class="step__tags"><li>Monthly content</li><li>Search upkeep</li><li>Revenue report</li></ul>
        </div>
        <div class="step__art"><img src="/images/steps/measure.webp" alt="A laptop on a studio desk showing a month of rising website traffic, with visits, new users and conversions below the graph" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"></div>
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
        <p class="pack__hint">Pricing on request</p>
        <div class="pack__reveal">
          <p class="pack__price">Let&rsquo;s talk <small>about scope</small></p>
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
        <p class="pack__hint">Pricing on request</p>
        <div class="pack__reveal">
          <p class="pack__price">Let&rsquo;s talk <small>about scope</small></p>
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
        <p class="pack__hint">Pricing on request</p>
        <div class="pack__reveal">
          <p class="pack__price">Let&rsquo;s talk <small>about scope</small></p>
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

<!-- ============================ SEO PLANS ====================== -->
<!-- Teaser for /services/seo. Deliberately NOT built on .pack: main.js claims
     every .pack on the page for its one-open-at-a-time accordion, so a second
     group of them would make these cards fight the retainer cards above. These
     are flat, always-open cards instead, and need no script. -->
<section class="sec" id="seo">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Search &middot; SEO plans
        </span>
        <h2 class="h2" data-rise>Getting found is its own job</h2>
      </div>
      <p class="lede" data-rise>Separate monthly plans for organic search, scoped on their own. These are the real estate tiers &mdash; there is a matching track for every other kind of business.</p>
    </div>

    <div class="seo-band" data-rise>
      <a class="seo-card" href="/services/seo" data-hot>
        <div class="seo-card__top">
          <h3 class="seo-card__name">Starter</h3>
          <span class="seo-card__tag">Getting found</span>
        </div>
        <p class="seo-card__price">Let&rsquo;s talk</p>
        <ul class="seo-card__list">
          <li>10 local keywords</li>
          <li>Google Business Profile, fully set up</li>
          <li>20 directory citations</li>
          <li>1 blog post a month</li>
        </ul>
        <span class="seo-card__more">See what is included <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
      </a>

      <a class="seo-card seo-card--lead" href="/services/seo" data-hot>
        <div class="seo-card__top">
          <h3 class="seo-card__name">Growth</h3>
          <span class="seo-card__tag">Most chosen</span>
        </div>
        <p class="seo-card__price">Let&rsquo;s talk</p>
        <ul class="seo-card__list">
          <li>25 keywords, neighborhood level</li>
          <li>4 profile posts a week</li>
          <li>40&ndash;50 citations &amp; 2&ndash;3 local links a month</li>
          <li>2&ndash;3 blog posts a month</li>
        </ul>
        <span class="seo-card__more">See what is included <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
      </a>

      <a class="seo-card" href="/services/seo" data-hot>
        <div class="seo-card__top">
          <h3 class="seo-card__name">Authority</h3>
          <span class="seo-card__tag">Market leader</span>
        </div>
        <p class="seo-card__price">Let&rsquo;s talk</p>
        <ul class="seo-card__list">
          <li>50+ keywords, zip code level</li>
          <li>Full technical SEO &amp; Core Web Vitals</li>
          <li>5&ndash;6 neighborhood pages a quarter</li>
          <li>Dedicated account manager</li>
        </ul>
        <span class="seo-card__more">See what is included <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></span>
      </a>
    </div>

    <div class="seo-band__foot" data-rise>
      <p>Not in real estate? There is a second track for every other kind of business.</p>
      <a class="btn btn--dark" href="/services/seo" data-hot>
        See all SEO plans <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
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
${FOOTER_HTML}



`;
