"use client";

import Script from "next/script";
import { SITE_BODY_HTML } from "./siteMarkup";

/**
 * The original page was a hand-tuned static HTML/CSS/vanilla-JS build (custom
 * cursor-free scroll reveals, physics-y "liquid" blobs, a crown mark that
 * draws itself on, etc.). The markup is rendered as-is so every selector the
 * CSS and behaviour scripts depend on still resolves, and the scripts run in
 * the order they ran before.
 */
export default function SiteBody() {
  return (
    <>
      {/* The nav paints closed and opens when the crown intro docks. The class
          used to sit on <body> in the root layout, but that put it on every
          route - and only this one has an intro to wait for, so everywhere else
          the nav sat shut until main.js timed out. Setting it from an inline
          script here runs during parse, before the header below exists, so the
          first paint already has it. */}
      <script
        dangerouslySetInnerHTML={{
          __html: "document.body.classList.add('nav-boot')",
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: SITE_BODY_HTML }} />
      <Script src="/scripts/main.js" strategy="afterInteractive" />
      <Script src="/scripts/crown.js" strategy="afterInteractive" />
      <Script src="/scripts/fluid.js" strategy="afterInteractive" />
      <Script src="/scripts/grid.js" strategy="afterInteractive" />
      <Script src="/scripts/shot.js" strategy="afterInteractive" />
      {/* Delegated from document, so it does not care that the matcher injects
          its CTA long after this runs. */}
      <Script src="/scripts/booking.js" strategy="afterInteractive" />
      {/* The atmosphere film is off for now, at the studio's request.
          heroVideo.js is the only thing that attaches the video's source and
          the only thing that sets body.film-on, and the film was always
          additive - it sits on the white .atmos__ground, and every path that
          skipped it (phones, metered connections, reduced motion) already fell
          back to the paper hero. So not loading the script is the whole
          removal: the <video> in siteMarkup.ts still ships with no source and
          preload="none", so it fetches nothing, and the hero is ink on paper
          with the clouds, the fluid field and the grain, exactly as it read
          before the film existed. Restoring it is this one line.

          Last in the list because it waits on hero-revealed anyway, and it is
          the only script here that can pull a large file, so nothing else
          should queue behind it. */}
      {/* <Script src="/scripts/heroVideo.js" strategy="afterInteractive" /> */}
    </>
  );
}
