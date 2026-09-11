import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/blogDetail";
import "./page.css";

export const metadata: Metadata = {
  title: "The Listing Photo Mistake &mdash; The EM Creative Studio",
  description: "Buyers decide whether to click into a listing in under three seconds. We reviewed forty top-performing listings to find the one framing choice separating the scrolls-past from the saves.",
  alternates: { canonical: "/blog/the-listing-photo-mistake" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/blogDetail.js" strategy="afterInteractive" />
    </>
  );
}
