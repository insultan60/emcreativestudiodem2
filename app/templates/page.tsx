import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/templates";
// The /work sheet supplies the nav, hero, section heads, buttons and CTA band;
// this page's own sheet only adds the template cards and steps.
import "../work/page.css";
import "./page.css";
// Phone-only refinements shared by every route; after the page sheet so it wins.
import "../mobile.css";
// Site-wide aqua accent; after the page sheet and mobile.css so it wins.
import "../accent.css";

export const metadata: Metadata = {
  title: "Real Estate Website Templates — The EM Creative Studio",
  description:
    "Preview four real estate website templates from The EM Creative Studio, each based on a live agent or team site. Try them on desktop and mobile, then make one yours.",
  alternates: { canonical: "/templates" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/templates.js" strategy="afterInteractive" />
    </>
  );
}
