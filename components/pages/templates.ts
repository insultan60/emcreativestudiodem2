import { FOOTER_HTML } from "../footer";
import { TEMPLATES } from "@/lib/templates";

// Body markup for /templates. Built on the /work page's sheet (hero, section
// heads, buttons, CTA band) with the template cards styled in
// app/templates/page.css. The card data lives in lib/templates.ts.

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const ARROW = `<svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>`;

const cards = TEMPLATES.map(
  (t, i) => `
      <article class="tpl" id="${t.slug}" data-rise>
        <a class="tpl__stage" href="/templates/${t.slug}" aria-label="Preview the ${esc(t.name)} template">
          <div class="tpl__browser">
            <div class="tpl__chrome" aria-hidden="true"><i></i><i></i><i></i><span>yourname.com</span></div>
            <div class="tpl__screen">
              <img src="/images/templates/${t.slug}.jpg" alt="${esc(t.name)} template, desktop home page" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="tpl__phone" aria-hidden="true">
            <img src="/images/templates/${t.slug}-m.jpg" alt="" loading="lazy" decoding="async">
          </div>
        </a>
        <div class="tpl__body">
          <span class="tpl__no">${String(i + 1).padStart(2, "0")} / ${esc(t.fit)}</span>
          <h3 class="tpl__name">${esc(t.name)}</h3>
          <p class="tpl__sum">${esc(t.summary)}</p>
          <ul class="tpl__feats">
            ${t.features.map((f) => `<li>${esc(f)}</li>`).join("\n            ")}
          </ul>
          <div class="tpl__meta">
            <span class="tpl__swatches" aria-label="Color palette">${t.palette
              .map((c) => `<i style="background:${esc(c)}" title="${esc(c)}"></i>`)
              .join("")}</span>
            <span class="tpl__fonts">${esc(t.fonts)}</span>
          </div>
          <div class="tpl__acts">
            <a class="btn btn--dark" href="/templates/${t.slug}">Preview live ${ARROW}</a>
            <a class="btn btn--ghost" href="/contact?template=${t.slug}#book">Start with ${esc(t.name)}</a>
          </div>
        </div>
      </article>`,
).join("\n");

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
        <a href="/work">Work</a>
        <a href="/blog">Blog</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
    <div class="nav-collapse">
      <a class="btn btn--dark" href="/contact">
        Start a project ${ARROW}
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
    <span class="eyebrow">Real Estate &middot; Website Templates</span>
    <h1 class="hero__hl" data-words>Live sites, ready to<br><em class="tint">wear your brand.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Four designs we have built and launched for working agents and teams.</strong> Each is a full site: home, property search, listing pages, buyers, sellers, neighborhoods, about and contact. Click through it the way your clients would, on desktop or on a phone, then pick the one that feels like you.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">4 full sites</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">Mobile-first</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">SEO built in</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Your brand, not ours</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="#templates">
      Browse the templates ${ARROW}
    </a>
    <a class="btn btn--ghost" href="/contact#book">Talk to us first</a>
  </div>
</section>

<!-- ============================== TEMPLATES ========================= -->
<section class="sec" id="templates">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          The Templates
        </span>
        <h2 class="h2" data-rise>Pick a starting point, <span class="tint">not a box.</span></h2>
      </div>
      <p class="lede" data-rise>
        Every name, photo and listing in these previews is a placeholder. The layouts are
        real sites in the wild. Open one, search the listings, try it on a phone.
      </p>
    </div>

    <div class="tpl-list">
${cards}
    </div>
  </div>
</section>

<!-- ============================== HOW IT WORKS ========================= -->
<section class="sec sec--linen" id="how">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>How It Works</span>
        <h2 class="h2" data-rise>From template to <span class="tint">your site.</span></h2>
      </div>
      <p class="lede" data-rise>A template gets you a proven layout. Everything on top of it is made for you.</p>
    </div>
    <ol class="tpl-steps">
      <li data-rise><span class="tpl-steps__n">01</span><h3>Choose a design</h3><p>Preview the four templates and pick the one closest to how you want to be seen. Mixing sections from two is fine.</p></li>
      <li data-rise><span class="tpl-steps__n">02</span><h3>Make it yours</h3><p>We apply your colors, type, logo, photography and copy, and add the pages you need: neighborhoods, listings, sellers, buyers, blog.</p></li>
      <li data-rise><span class="tpl-steps__n">03</span><h3>Connect and launch</h3><p>Listings feed, lead forms, your CRM and analytics are wired in, local SEO is set up, and the site goes live on your domain.</p></li>
    </ol>
  </div>
</section>

<!-- ============================== CTA ============================ -->
<section class="sec cta-end" id="cta">
  <div class="wrap row">
    <div>
      <span class="eyebrow" data-rise>Found The One?</span>
      <h2 class="h2" data-rise>Let&rsquo;s put your name on it.</h2>
    </div>
    <div data-rise>
      <a class="btn btn--dark" href="/contact#book">
        Book a 30-minute call ${ARROW}
      </a>
    </div>
  </div>
</section>

<!-- =========================== FOOTER ========================== -->
${FOOTER_HTML}`;
