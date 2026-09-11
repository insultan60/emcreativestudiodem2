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
    </>
  );
}
