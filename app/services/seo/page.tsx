import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/seo";
import "./page.css";

export const metadata: Metadata = {
  title: "SEO Plans — The EM Creative Studio",
  description:
    "Monthly SEO plans from $200. Six tiers across two tracks - one for real estate agents, teams and brokerages, one for every other business. Keyword research, Google Business Profile, technical SEO and content, reported monthly.",
  alternates: { canonical: "/services/seo" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/seo.js" strategy="afterInteractive" />
    </>
  );
}
