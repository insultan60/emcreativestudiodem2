import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/terms";
import "./page.css";

export const metadata: Metadata = {
  title: "Terms &amp; Conditions &mdash; The EM Creative Studio",
  description: "What you're agreeing to when you use this site or work with The EM Creative Studio. Plain-language terms, last updated September 2026.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/terms.js" strategy="afterInteractive" />
    </>
  );
}
