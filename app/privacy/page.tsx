import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/privacy";
import "./page.css";

export const metadata: Metadata = {
  title: "Privacy Policy &mdash; The EM Creative Studio",
  description: "What The EM Creative Studio collects, why, and how to control it. Plain-language privacy policy, last updated September 2026.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/privacy.js" strategy="afterInteractive" />
    </>
  );
}
