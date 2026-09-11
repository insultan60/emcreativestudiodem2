import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/serviceDetail";
import "./page.css";

export const metadata: Metadata = {
  title: "Social Media Management &mdash; The EM Creative Studio",
  description: "Content planning, posting, captions, hashtag strategy, and community management for real estate brands, run by one senior team. Los Angeles boutique agency.",
  alternates: { canonical: "/services/social-media-management" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/serviceDetail.js" strategy="afterInteractive" />
    </>
  );
}
