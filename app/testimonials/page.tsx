import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/testimonials";
import "./page.css";

export const metadata: Metadata = {
  title: "Client Stories &mdash; The EM Creative Studio",
  description: "Real words from real clients: six real estate brands on what changed after they hired The EM Creative Studio. No paid reviews, no scripted lines.",
  alternates: { canonical: "/testimonials" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/testimonials.js" strategy="afterInteractive" />
    </>
  );
}
