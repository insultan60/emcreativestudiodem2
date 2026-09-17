/* The site footer, in one place.
 *
 * It used to be fourteen places: siteMarkup.ts had this version, and each of
 * the thirteen page components carried its own near-copy. They had drifted -
 * the inner ones had no crown watermark, a different set of links, and were
 * still pointing at the pre-vector logo raster long after the home page had
 * moved to the SVG. Every one of them had to be found and fixed by hand, and
 * one always got missed.
 *
 * The home page's version is the one that won, because it is the one the
 * studio has been looking at. The only edit made on the way in: #process,
 * #quiz and #top became /#process, /#quiz and /#top, since those sections
 * only exist on the home page. From "/" they are still a same-document
 * fragment navigation, so nothing changed there either. */
export const FOOTER_HTML = `
<footer class="foot" id="contact">
  <div class="foot__crown" aria-hidden="true"></div>
  <div class="foot__inner">
    <!-- header: logo + tagline -->
    <div class="foot__header">
      <a href="/#top" data-hot><img src="/images/logo-em.svg" alt="EM Creative Studio" width="2000" height="2000"></a>
      <p class="foot__tagline">Boutique real estate marketing that earns your crown.</p>
    </div>

    <!-- 3 columns: Studio, Company, Contact+Social -->
    <div class="foot__body">
      <div>
        <p class="foot__label">Studio</p>
        <ul>
          <li><a href="/services" data-hot>Services</a></li>
          <li><a href="/packages" data-hot>Packages</a></li>
          <li><a href="/services/seo" data-hot>SEO Plans</a></li>
          <li><a href="/#quiz" data-hot>Assessment</a></li>
          <li><a href="/#process" data-hot>Process</a></li>
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
