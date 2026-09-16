// Body markup for /services/seo.
//
// Follows the same contract as the other page modules: rendered as-is via
// dangerouslySetInnerHTML, with app/services/seo/page.css written against this
// exact structure and public/scripts/pages/seo.js driving the behaviour.
//
// Pricing and scope come from the SEO plan sheets supplied by the client. Two
// sets live here - real estate and everything else - and the .seg control swaps
// between them. Both sets are always present in the markup so that crawlers and
// any visitor without JS get all six tiers.
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
  <symbol id="ic-doc" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></symbol>
  <symbol id="ic-page" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h8M8 16h5"/></symbol>
  <symbol id="ic-pin" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></symbol>
  <symbol id="ic-scope" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4.5-4.5"/></symbol>
  <symbol id="ic-gauge" viewBox="0 0 24 24"><path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12l4.5-3.5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></symbol>
</svg>

<!-- ============================== NAV ========================== -->
<header class="nav">
  <div class="nav-pill">
    <a class="brand" href="/"><img src="/images/pg/901081dfa7b252f8.webp" alt="The EM Creative Studio"></a>
    <div class="nav-collapse">
      <nav class="nav-links" aria-label="Primary">
        <a href="/services" aria-current="page">Services</a>
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
    <span class="eyebrow">Search &middot; Organic Growth Plans</span>
    <h1 class="hero__hl" data-words>Get found first,<br><em class="tint">then get chosen.</em></h1>
  </div>

  <p class="hero__lede">
    <strong>Starter, Growth, or Authority.</strong> Six monthly plans across two tracks &mdash; one built for real estate, one for every other business. Every tier includes the audit, the keyword work, and a report written in plain English.
  </p>

  <div class="hero__bubs">
    <span class="bub-float bub-float--a bub-pos--l1"><span class="bub bub--a" style="--br:-4deg; --tail:18px;">From $200/mo</span></span>
    <span class="bub-float bub-float--c bub-pos--l2"><span class="bub bub--c" style="--br:-3deg; --tail:24px;">10&ndash;75+ keywords</span></span>
    <span class="bub-float bub-float--b bub-pos--r1"><span class="bub bub--b" style="--br:4deg; --tail:24px;">1&ndash;6 articles/mo</span></span>
    <span class="bub-float bub-float--d bub-pos--r2"><span class="bub bub--d" style="--br:5deg; --tail:20px;">Six tiers</span></span>
  </div>

  <div class="hero__acts">
    <a class="btn btn--dark" href="/contact">
      Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
    </a>
    <a class="btn btn--ghost" href="#compare">Compare plans</a>
  </div>
</section>

<!-- ============================== PLANS ========================= -->
<section class="sec sec--linen" id="plans">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>
          <svg class="crown" viewBox="0 0 120 74"><use href="#crown"/></svg>
          Monthly SEO plans
        </span>
        <h2 class="h2" data-rise>Real estate, or everything else.</h2>
      </div>
      <p class="lede" data-rise>Real estate competes street by street, so those plans lean on neighborhood pages, listings and local citations. Everything else leans on service pages, industry content and commercial intent.</p>
    </div>

    <div data-rise>
      <div class="seg" id="seg" role="tablist" aria-label="Choose a plan track">
        <button class="seg__btn" type="button" role="tab" id="seg-realestate"
                aria-selected="true" aria-controls="set-realestate" data-set="realestate">Real Estate</button>
        <button class="seg__btn" type="button" role="tab" id="seg-general"
                aria-selected="false" aria-controls="set-general" data-set="general">All Other Businesses</button>
      </div>
    </div>

    <!-- ---------- REAL ESTATE ---------- -->
    <div class="plan-set" id="set-realestate" data-set="realestate" role="tabpanel" aria-labelledby="seg-realestate">
      <p class="plan-set__note" data-rise>Built for agents, teams and brokerages competing on local search &mdash; neighborhood keywords, Google Business Profile, and the real-estate directories buyers actually browse.</p>

      <div class="packs" data-rise>
        <article class="pack">
          <div class="pack__top">
            <div class="pack__head">
            <h3 class="pack__name">Starter</h3>
            <span class="pack__tag">Getting found</span>
          </div>
            <p class="pack__price">$200 <small>/ month</small></p>
            <p class="pack__best"><strong>Best for</strong> solo agents, new local businesses, small towns and low-competition markets.</p>
            <a class="btn btn--paper pack__cta" href="/contact">Start here <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
          </div>

          <ul class="pack__stats">
              <li><b>10</b><span>keywords</span></li>
              <li><b>3</b><span>pages</span></li>
              <li><b>1</b><span>post / mo</span></li>
              <li><b>20</b><span>citations</span></li>
          </ul>

          <div class="pack__detail">
            <p class="pack__inherit pack__inherit--base">The starting point</p>
            <details class="pack__more">
              <summary class="pack__more-sum">
                <span>Everything included</span>
                <small>12 items</small>
                <svg class="pack__more-chev" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-plus"/></svg>
              </summary>
              <div class="pack__more-body">
  <p class="pack__group">Foundation</p>
                <ul class="pack__list">
                  <li>Initial website SEO audit &mdash; broken links, page speed, indexing issues</li>
                  <li>Schema markup on the homepage &mdash; LocalBusiness or RealEstateListing</li>
                </ul>

                <p class="pack__group">Keywords &amp; on-page</p>
                <ul class="pack__list">
                  <li>10 locally targeted keywords, e.g. &ldquo;homes for sale in [city]&rdquo;</li>
                  <li>On-page SEO for up to 3 pages &mdash; home, about, contact</li>
                  <li>Title tags, meta descriptions, H1/H2 structure, image alt text</li>
                </ul>

                <p class="pack__group">Local presence</p>
                <ul class="pack__list">
                  <li>Google Business Profile setup and full optimization &mdash; categories, description, services, photos, hours, Q&amp;A</li>
                  <li>NAP consistency check across your site and top directories</li>
                  <li>20 local directory citations &mdash; Google, Yelp, Bing Places, Yellow Pages, Zillow, Realtor.com, Homes.com, Facebook, Apple Maps, Foursquare</li>
                </ul>

                <p class="pack__group">Content &amp; reviews</p>
                <ul class="pack__list">
                  <li>1 blog post a month, 500&ndash;700 words &mdash; neighborhood spotlight, market update, or buyer/seller tips</li>
                  <li>Review generation &mdash; email and SMS templates to request Google reviews from past clients</li>
                </ul>

                <p class="pack__group">Reporting</p>
                <ul class="pack__list">
                  <li>10 keywords tracked monthly</li>
                  <li>Monthly report &mdash; rankings, GBP views, website clicks, calls</li>
                </ul>
              </div>
            </details>
          </div>
        </article>

        <article class="pack">
          <div class="pack__top">
            <div class="pack__head">
            <h3 class="pack__name">Growth</h3>
            <span class="pack__tag">Most chosen</span>
          </div>
            <p class="pack__price">$500 <small>/ month</small></p>
            <p class="pack__best"><strong>Best for</strong> growing teams, agents expanding into new neighborhoods, and suburban or mid-size city markets.</p>
            <a class="btn btn--dark pack__cta" href="/contact">Start here <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
          </div>

          <ul class="pack__stats">
              <li><b>25</b><span>keywords</span></li>
              <li><b>10</b><span>pages</span></li>
              <li><b>2&ndash;3</b><span>posts / mo</span></li>
              <li><b>40&ndash;50</b><span>citations</span></li>
          </ul>

          <div class="pack__detail">
            <p class="pack__inherit">Everything in Starter, plus</p>
            <details class="pack__more">
              <summary class="pack__more-sum">
                <span>Everything included</span>
                <small>14 items</small>
                <svg class="pack__more-chev" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-plus"/></svg>
              </summary>
              <div class="pack__more-body">
  <p class="pack__group">Keywords &amp; on-page</p>
                <ul class="pack__list">
                  <li>25 locally targeted keywords, including neighborhood-level and long-tail buyer/seller intent terms</li>
                  <li>On-page SEO for up to 10 pages &mdash; service, area and listing pages</li>
                  <li>Full meta, header, internal linking and content optimization</li>
                  <li>Internal linking pass connecting posts to service pages to build topical authority</li>
                  <li>Schema markup extended &mdash; RealEstateListing, Person and Review across key pages</li>
                </ul>

                <p class="pack__group">Local presence</p>
                <ul class="pack__list">
                  <li>Google Business Profile active management &mdash; 4 posts a week covering listings, solds, tips and community updates</li>
                  <li>Photo uploads, Q&amp;A management and offer posts</li>
                  <li>40&ndash;50 citations including Zillow, Trulia, Realtor.com, Movoto, Homesnap and HomeAdvisor, plus geo-targeted local directories</li>
                </ul>

                <p class="pack__group">Content &amp; authority</p>
                <ul class="pack__list">
                  <li>2&ndash;3 blog posts a month, 700&ndash;1,000 words &mdash; hyperlocal guides, school district guides, market reports, first-time buyer content</li>
                  <li>Local link building &mdash; 2&ndash;3 earned backlinks a month from local news, neighborhood blogs, business associations and the chamber of commerce</li>
                </ul>

                <p class="pack__group">Competitors &amp; reputation</p>
                <ul class="pack__list">
                  <li>Competitor gap analysis on 3 local competitors &mdash; their keywords, their backlinks, the content gaps you can take</li>
                  <li>Review management &mdash; weekly Google and Yelp monitoring with response templates for positive and negative reviews</li>
                </ul>

                <p class="pack__group">Reporting</p>
                <ul class="pack__list">
                  <li>25 keywords tracked and reported monthly</li>
                  <li>Monthly report &mdash; organic traffic, GBP insights, keyword movement, citation health</li>
                </ul>
              </div>
            </details>
          </div>
        </article>

        <article class="pack">
          <div class="pack__top">
            <div class="pack__head">
            <h3 class="pack__name">Authority</h3>
            <span class="pack__tag">Market leader</span>
          </div>
            <p class="pack__price">$800 <small>/ month</small></p>
            <p class="pack__best"><strong>Best for</strong> brokerages, multi-agent offices, property managers, and agents in competitive metro markets.</p>
            <a class="btn btn--paper pack__cta" href="/contact">Talk to us <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
          </div>

          <ul class="pack__stats">
              <li><b>50+</b><span>keywords</span></li>
              <li><b>Full</b><span>site</span></li>
              <li><b>4&ndash;6</b><span>posts / mo</span></li>
              <li><b>70+</b><span>citations</span></li>
          </ul>

          <div class="pack__detail">
            <p class="pack__inherit">Everything in Growth, plus</p>
            <details class="pack__more">
              <summary class="pack__more-sum">
                <span>Everything included</span>
                <small>16 items</small>
                <svg class="pack__more-chev" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-plus"/></svg>
              </summary>
              <div class="pack__more-body">
  <p class="pack__group">Keywords &amp; technical</p>
                <ul class="pack__list">
                  <li>50+ keywords &mdash; zip code level, neighborhood level, property type, and buyer/seller intent</li>
                  <li>Full technical SEO &mdash; Core Web Vitals (LCP, CLS, INP), site speed, mobile usability</li>
                  <li>Crawl error resolution, XML sitemap and robots.txt management, canonical tag setup</li>
                  <li>On-page SEO across the entire website &mdash; every service, listing, location and blog page</li>
                </ul>

                <p class="pack__group">Local presence</p>
                <ul class="pack__list">
                  <li>Full Google Business Profile management &mdash; daily activity, AI Overview optimization, post scheduling, review campaigns, suspension risk monitoring</li>
                  <li>70+ citations across national, regional and real-estate platforms, with a quarterly audit and cleanup of duplicate or incorrect listings</li>
                </ul>

                <p class="pack__group">Content &amp; landing pages</p>
                <ul class="pack__list">
                  <li>5&ndash;6 neighborhood and zip code landing pages built per quarter, each written, optimized and published</li>
                  <li>4&ndash;6 blog posts a month, 1,000&ndash;1,500 words &mdash; market reports, community guides, investment content, relocation guides</li>
                  <li>1 pillar page per quarter, 2,000&ndash;3,000 words &mdash; a guide like &ldquo;Complete Guide to Buying a Home in [City]&rdquo;</li>
                  <li>Active link building &mdash; 5&ndash;8 high-authority backlinks a month from local news outlets, real estate publications and community sites</li>
                </ul>

                <p class="pack__group">Reputation &amp; tracking</p>
                <ul class="pack__list">
                  <li>Reputation management across Google, Yelp, Zillow and Realtor.com, with monthly review request campaigns and a negative review response strategy</li>
                  <li>Conversion tracking &mdash; Google Analytics 4, Search Console and call tracking configured to attribute leads back to specific SEO work</li>
                  <li>Competitor monitoring on 5 competitors each month, with counter-strategy recommendations</li>
                </ul>

                <p class="pack__group">Reporting &amp; access</p>
                <ul class="pack__list">
                  <li>50+ keywords tracked and updated monthly</li>
                  <li>Full dashboard &mdash; organic traffic, lead sources, GBP performance, rankings, backlink growth, conversion data</li>
                  <li>Dedicated account manager &mdash; monthly strategy call, quarterly roadmap review, priority email and phone support</li>
                </ul>
              </div>
            </details>
          </div>
        </article>
      </div>
    </div>

    <!-- ---------- ALL OTHER BUSINESSES ---------- -->
    <div class="plan-set" id="set-general" data-set="general" role="tabpanel" aria-labelledby="seg-general">
      <p class="plan-set__note" data-rise>Built for everyone outside real estate &mdash; service businesses, SaaS, ecommerce and multi-location brands competing on commercial and buyer-intent search.</p>

      <div class="packs" data-rise>
        <article class="pack">
          <div class="pack__top">
            <div class="pack__head">
            <h3 class="pack__name">Starter</h3>
            <span class="pack__tag">Getting found</span>
          </div>
            <p class="pack__price">$299 <small>/ month</small></p>
            <p class="pack__best"><strong>Best for</strong> small businesses, startups, local service providers, and businesses entering organic search.</p>
            <a class="btn btn--paper pack__cta" href="/contact">Start here <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
          </div>

          <ul class="pack__stats">
              <li><b>15</b><span>keywords</span></li>
              <li><b>5</b><span>pages</span></li>
              <li><b>1</b><span>article / mo</span></li>
              <li><b>Basic</b><span>profile</span></li>
          </ul>

          <div class="pack__detail">
            <p class="pack__inherit pack__inherit--base">The starting point</p>
            <details class="pack__more">
              <summary class="pack__more-sum">
                <span>Everything included</span>
                <small>16 items</small>
                <svg class="pack__more-chev" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-plus"/></svg>
              </summary>
              <div class="pack__more-body">
  <p class="pack__group">Audit &amp; technical</p>
                <ul class="pack__list">
                  <li>Initial SEO audit &mdash; technical health check, indexing review, broken links, mobile usability</li>
                  <li>Basic website performance analysis</li>
                  <li>XML sitemap and robots.txt review</li>
                  <li>Schema markup implementation and basic crawl issue fixes</li>
                </ul>

                <p class="pack__group">Keywords</p>
                <ul class="pack__list">
                  <li>15 targeted keywords</li>
                  <li>Local and service-based search opportunities</li>
                  <li>Search intent analysis</li>
                </ul>

                <p class="pack__group">Website optimization</p>
                <ul class="pack__list">
                  <li>Up to 5 key pages optimized</li>
                  <li>Title tags, meta descriptions, header structure, image alt text</li>
                  <li>Internal linking recommendations</li>
                </ul>

                <p class="pack__group">Local presence</p>
                <ul class="pack__list">
                  <li>Google Business Profile optimization &mdash; category, description, services and products, photos and information</li>
                  <li>NAP consistency check</li>
                  <li>Business directory optimization and citation submissions</li>
                </ul>

                <p class="pack__group">Content</p>
                <ul class="pack__list">
                  <li>1 SEO-optimized article a month, 800&ndash;1,000 words</li>
                  <li>Keyword-focused content strategy &mdash; industry guides, how-tos, customer education, service topics</li>
                </ul>

                <p class="pack__group">Reporting</p>
                <ul class="pack__list">
                  <li>Monthly report &mdash; keyword rankings, organic traffic, search impressions, performance insights and recommendations</li>
                </ul>
              </div>
            </details>
          </div>
        </article>

        <article class="pack">
          <div class="pack__top">
            <div class="pack__head">
            <h3 class="pack__name">Growth</h3>
            <span class="pack__tag">Most chosen</span>
          </div>
            <p class="pack__price">$699 <small>/ month</small></p>
            <p class="pack__best"><strong>Best for</strong> growing businesses looking to increase organic traffic, visibility and qualified leads.</p>
            <a class="btn btn--dark pack__cta" href="/contact">Start here <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
          </div>

          <ul class="pack__stats">
              <li><b>40</b><span>keywords</span></li>
              <li><b>15</b><span>pages</span></li>
              <li><b>2</b><span>articles / mo</span></li>
              <li><b>Weekly</b><span>profile</span></li>
          </ul>

          <div class="pack__detail">
            <p class="pack__inherit">Everything in Starter, plus</p>
            <details class="pack__more">
              <summary class="pack__more-sum">
                <span>Everything included</span>
                <small>12 items</small>
                <svg class="pack__more-chev" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-plus"/></svg>
              </summary>
              <div class="pack__more-body">
  <p class="pack__group">Keywords</p>
                <ul class="pack__list">
                  <li>40 targeted keywords</li>
                  <li>Commercial, long-tail and location-based terms</li>
                  <li>Competitor keyword opportunities</li>
                </ul>

                <p class="pack__group">Website optimization</p>
                <ul class="pack__list">
                  <li>Up to 15 pages optimized</li>
                  <li>Content optimization and internal linking improvements</li>
                  <li>SEO-friendly heading structure</li>
                  <li>Conversion-focused and user experience recommendations</li>
                </ul>

                <p class="pack__group">Local presence</p>
                <ul class="pack__list">
                  <li>Google Business Profile management, worked weekly &mdash; posts, photo updates, Q&amp;A management, review monitoring, profile improvements</li>
                </ul>

                <p class="pack__group">Competitors</p>
                <ul class="pack__list">
                  <li>Monthly competitor analysis &mdash; the keywords they rank for, content gaps, backlink opportunities, strategy insights</li>
                </ul>

                <p class="pack__group">Content &amp; authority</p>
                <ul class="pack__list">
                  <li>2 SEO articles a month with keyword targeting and search intent optimization</li>
                  <li>Local and industry link-building campaigns &mdash; directory opportunities, industry outreach, partnerships, digital PR</li>
                </ul>

                <p class="pack__group">Reporting</p>
                <ul class="pack__list">
                  <li>Monthly report &mdash; keyword movement, traffic growth, Search Console insights, competitor changes</li>
                </ul>
              </div>
            </details>
          </div>
        </article>

        <article class="pack">
          <div class="pack__top">
            <div class="pack__head">
            <h3 class="pack__name">Authority</h3>
            <span class="pack__tag">Market leader</span>
          </div>
            <p class="pack__price">$1,500 <small>/ month</small></p>
            <p class="pack__best"><strong>Best for</strong> established companies, competitive industries, SaaS, ecommerce brands, and businesses targeting multiple markets.</p>
            <a class="btn btn--paper pack__cta" href="/contact">Talk to us <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg></a>
          </div>

          <ul class="pack__stats">
              <li><b>75+</b><span>keywords</span></li>
              <li><b>Full</b><span>site</span></li>
              <li><b>4</b><span>articles / mo</span></li>
              <li><b>Advanced</b><span>profile</span></li>
          </ul>

          <div class="pack__detail">
            <p class="pack__inherit">Everything in Growth, plus</p>
            <details class="pack__more">
              <summary class="pack__more-sum">
                <span>Everything included</span>
                <small>15 items</small>
                <svg class="pack__more-chev" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-plus"/></svg>
              </summary>
              <div class="pack__more-body">
  <p class="pack__group">Advanced technical SEO</p>
                <ul class="pack__list">
                  <li>Core Web Vitals improvements and site speed optimization</li>
                  <li>Crawl error resolution and indexation management</li>
                  <li>Canonical optimization and duplicate content fixes</li>
                  <li>Structured data implementation and ongoing technical monitoring</li>
                </ul>

                <p class="pack__group">Keywords</p>
                <ul class="pack__list">
                  <li>75+ targeted keywords</li>
                  <li>High-competition and buyer-intent terms</li>
                  <li>Industry and location-based opportunities, plus competitor keyword gaps</li>
                </ul>

                <p class="pack__group">Content &amp; landing pages</p>
                <ul class="pack__list">
                  <li>4 SEO articles a month &mdash; industry guides, comparison content, educational resources, product and service content</li>
                  <li>Landing page strategy &mdash; service pages, location pages, industry pages, conversion-focused pages built and optimized</li>
                </ul>

                <p class="pack__group">Digital PR &amp; link building</p>
                <ul class="pack__list">
                  <li>Monthly authority campaigns &mdash; industry outreach, relevant backlink opportunities, guest contributions, brand mentions</li>
                </ul>

                <p class="pack__group">Tracking</p>
                <ul class="pack__list">
                  <li>Google Analytics 4 and Search Console setup</li>
                  <li>Conversion, lead, form and call tracking where applicable</li>
                </ul>

                <p class="pack__group">Strategy management</p>
                <ul class="pack__list">
                  <li>Monthly strategy meeting and a quarterly SEO roadmap</li>
                  <li>Ongoing competitor monitoring and growth recommendations</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </details>
          </div>
        </article>
      </div>
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
      <p class="lede" data-rise>If you already know roughly what you need, this is the fast way to check. The table follows whichever track you picked above.</p>
    </div>

    <div class="plan-set" data-set="realestate">
      <div class="cmp" data-rise>
        <table>
          <thead>
            <tr>
              <th></th>
              <th><span class="tier-pill">Getting found</span><br>Starter &middot; $200</th>
              <th><span class="tier-pill">Most chosen</span><br>Growth &middot; $500</th>
              <th><span class="tier-pill">Market leader</span><br>Authority &middot; $800</th>
            </tr>
          </thead>
          <tbody>
            <tr><th>Website SEO audit</th><td class="yes">Included</td><td class="yes">Included</td><td class="yes">Included</td></tr>
            <tr><th>Keywords targeted</th><td>10</td><td>25</td><td>50+</td></tr>
            <tr><th>Pages optimized</th><td>3</td><td>10</td><td>Entire website</td></tr>
            <tr><th>Directory citations</th><td>20</td><td>40&ndash;50</td><td>70+ &amp; quarterly audit</td></tr>
            <tr><th>Google Business Profile</th><td>Setup &amp; optimization</td><td>4 posts / week</td><td>Daily &amp; AI Overview</td></tr>
            <tr><th>Schema markup</th><td>Homepage</td><td>+ Person &amp; Review</td><td>Full structured data</td></tr>
            <tr><th>Blog posts / month</th><td>1 &middot; 500&ndash;700w</td><td>2&ndash;3 &middot; 700&ndash;1,000w</td><td>4&ndash;6 &middot; 1,000&ndash;1,500w</td></tr>
            <tr><th>Neighborhood landing pages</th><td class="no">&mdash;</td><td class="no">&mdash;</td><td>5&ndash;6 / quarter</td></tr>
            <tr><th>Pillar content</th><td class="no">&mdash;</td><td class="no">&mdash;</td><td>1 / quarter</td></tr>
            <tr><th>Link building</th><td class="no">&mdash;</td><td>2&ndash;3 / month</td><td>5&ndash;8 / month</td></tr>
            <tr><th>Competitor analysis</th><td class="no">&mdash;</td><td>3 competitors</td><td>5, monthly</td></tr>
            <tr><th>Review management</th><td>Request templates</td><td>Weekly &middot; Google, Yelp</td><td>+ Zillow, Realtor.com</td></tr>
            <tr><th>Technical SEO</th><td>Audit only</td><td>Audit only</td><td>Core Web Vitals &amp; full</td></tr>
            <tr><th>Conversion tracking</th><td class="no">&mdash;</td><td class="no">&mdash;</td><td>GA4, GSC &amp; calls</td></tr>
            <tr><th>Keywords tracked</th><td>10</td><td>25</td><td>50+</td></tr>
            <tr><th>Account management</th><td>Monthly report</td><td>Monthly report</td><td>Dedicated manager</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="plan-set" data-set="general">
      <div class="cmp" data-rise>
        <table>
          <thead>
            <tr>
              <th></th>
              <th><span class="tier-pill">Getting found</span><br>Starter &middot; $299</th>
              <th><span class="tier-pill">Most chosen</span><br>Growth &middot; $699</th>
              <th><span class="tier-pill">Market leader</span><br>Authority &middot; $1,500</th>
            </tr>
          </thead>
          <tbody>
            <tr><th>SEO audit</th><td class="yes">Included</td><td class="yes">Included</td><td class="yes">Included</td></tr>
            <tr><th>Keyword research</th><td>15 keywords</td><td>40 keywords</td><td>75+ keywords</td></tr>
            <tr><th>Website optimization</th><td>5 pages</td><td>15 pages</td><td>Full website</td></tr>
            <tr><th>Blog content</th><td>1 / month</td><td>2 / month</td><td>4 / month</td></tr>
            <tr><th>Google Business Profile</th><td>Basic</td><td>Weekly</td><td>Advanced</td></tr>
            <tr><th>Competitor analysis</th><td class="no">&mdash;</td><td class="yes">Included</td><td class="yes">Included</td></tr>
            <tr><th>Technical SEO</th><td>Basic</td><td>Advanced</td><td>Full</td></tr>
            <tr><th>Link building</th><td>Basic</td><td>Campaigns</td><td>Advanced</td></tr>
            <tr><th>Landing page strategy</th><td class="no">&mdash;</td><td class="no">&mdash;</td><td class="yes">Included</td></tr>
            <tr><th>Conversion tracking</th><td class="no">&mdash;</td><td>Basic</td><td>Full</td></tr>
            <tr><th>Strategy calls</th><td class="no">&mdash;</td><td>Monthly</td><td>Monthly + quarterly</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- ============================== TIMELINE ========================= -->
<section class="sec sec--linen" id="timeline">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>What To Expect</span>
        <h2 class="h2" data-rise>SEO compounds. Here is the shape of it.</h2>
      </div>
      <p class="lede" data-rise>Nobody ranks in week two. This is the honest curve, so you can judge the work against the right month.</p>
    </div>

    <div class="tl" data-rise>
      <div class="tl__step">
        <p class="tl__when">Month 1</p>
        <h3 class="tl__what">Foundation</h3>
        <ul class="tl__list">
          <li>SEO audit</li>
          <li>Technical fixes</li>
          <li>Keyword strategy</li>
          <li>Website optimization</li>
        </ul>
      </div>
      <div class="tl__step">
        <p class="tl__when">Months 2&ndash;3</p>
        <h3 class="tl__what">Growth</h3>
        <ul class="tl__list">
          <li>Content publishing</li>
          <li>Authority building</li>
          <li>Ranking improvements</li>
          <li>Traffic growth</li>
        </ul>
      </div>
      <div class="tl__step">
        <p class="tl__when">Months 4&ndash;6+</p>
        <h3 class="tl__what">Scaling</h3>
        <ul class="tl__list">
          <li>Increased organic visibility</li>
          <li>Improved keyword positions</li>
          <li>More qualified leads</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ============================== ADD-ONS ========================= -->
<section class="sec" id="addons">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>A La Carte</span>
        <h2 class="h2" data-rise>Add exactly what a month needs.</h2>
      </div>
      <p class="lede" data-rise>Every add-on layers onto any plan, so there is no need to jump a tier just for one thing.</p>
    </div>

    <div class="addons__grid">
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-doc"/></svg></span>
        <h4>Additional SEO Content</h4>
        <p>An extra keyword-targeted article beyond your plan&rsquo;s monthly count.</p>
        <p class="addon-card__price">$150 <small>per article</small></p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-page"/></svg></span>
        <h4>Additional Page Optimization</h4>
        <p>A full on-page pass on a page outside your plan&rsquo;s allowance.</p>
        <p class="addon-card__price">$75 <small>per page</small></p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-pin"/></svg></span>
        <h4>Google Business Profile Management</h4>
        <p>Active profile management added to a plan that does not already include it.</p>
        <p class="addon-card__price">+$200 <small>/ month</small></p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-scope"/></svg></span>
        <h4>SEO Competitor Research</h4>
        <p>A one-time deep read on who is beating you and on which terms.</p>
        <p class="addon-card__price">+$300 <small>one-time</small></p>
      </div>
      <div class="addon-card" data-rise>
        <span class="addon-card__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><use href="#ic-gauge"/></svg></span>
        <h4>Technical SEO Audit</h4>
        <p>A standalone full technical audit, whether or not you are on a plan.</p>
        <p class="addon-card__price">+$500 <small>one-time</small></p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== FAQ ========================= -->
<section class="sec sec--linen" id="faq">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <span class="eyebrow" data-rise>Good Questions</span>
        <h2 class="h2" data-rise>Before you pick a plan.</h2>
      </div>
    </div>

    <div class="faq" data-rise>
      <div class="faq-item" data-open="true">
        <button class="faq-item__q" type="button">
          Which of the two tracks applies to me?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">If you sell or manage property, the real estate track. It is built around neighborhood and zip code keywords, listing schema, and the directories buyers actually browse, like Zillow and Realtor.com. Everything else &mdash; service businesses, SaaS, ecommerce, multi-location brands &mdash; belongs on the other track, where the work goes into service pages, industry content and commercial intent instead.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          How soon will I see results?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Month one is foundation work: the audit, technical fixes, keyword strategy and on-page optimization. Movement usually starts showing in months two and three as content publishes and authority builds. Months four to six are where compounding shows up as visibility, better keyword positions and more qualified leads. Anyone promising page one in thirty days is either buying ads or guessing.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          What is the difference between Starter and Growth?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Starter establishes the foundation &mdash; audit, core pages, profile, citations and a post a month. Growth roughly doubles the keyword set and the pages we touch, adds competitor analysis and active link building, and turns the Google Business Profile from a one-time setup into something worked every week. Starter gets you found. Growth is where you start taking ground from someone else.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          Can I add more content or pages without changing plan?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Yes. Extra articles are $150 each and extra page optimization is $75 per page, both on any plan. Google Business Profile management can be added for $200 a month, and competitor research and a full technical audit are available as one-time pieces at $300 and $500. Adding what you need for one month is usually cheaper than moving up a tier for all of them.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          How is the work reported?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Every plan gets a monthly report covering rankings, organic traffic and profile performance. What changes between tiers is how many keywords are tracked &mdash; 10, 25 or 50+ on the real estate track &mdash; and how much detail sits behind it. Authority adds conversion and lead attribution, so you can see which SEO work produced which enquiry rather than taking traffic on faith.</p>
        </div></div>
      </div>

      <div class="faq-item" data-open="false">
        <button class="faq-item__q" type="button">
          Do you need access to my website and accounts?
          <svg class="faq-item__chev" width="16" height="16" viewBox="0 0 24 24"><use href="#ic-plus"/></svg>
        </button>
        <div class="faq-item__a-wrap"><div class="faq-item__a-inner">
          <p class="faq-item__a">Yes, for anything on-page. We need editor access to the site to change titles, metas, headings and schema, and manager access to your Google Business Profile, Analytics and Search Console. You keep ownership of all of it, so if we ever part ways the work and the data stay with you.</p>
        </div></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================== CTA ============================ -->
<section class="sec cta-end" id="cta">
  <div class="wrap row">
    <div>
      <span class="eyebrow" data-rise>Not Sure Which Plan Fits</span>
      <h2 class="h2" data-rise>Let&rsquo;s look at what you already rank for.</h2>
    </div>
    <div data-rise>
      <a class="btn btn--dark" href="mailto:hello@theemcreative.studio">
        Book a 30-minute call <svg width="17" height="10" viewBox="0 0 17 10"><use href="#arw"/></svg>
      </a>
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
          <li><a href="/services/seo">SEO Plans</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/#process">Process</a></li>
        </ul>
      </div>
      <div>
        <p class="foot__label">Company</p>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
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
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>`;
