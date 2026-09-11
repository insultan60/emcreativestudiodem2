import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/work";
import "./page.css";

export const metadata: Metadata = {
  title: "Work &mdash; The EM Creative Studio",
  description: "Selected work from The EM Creative Studio: real estate web design, brand identity, SEO, paid social, content and email campaigns, with the results attached. Los Angeles boutique agency.",
  alternates: { canonical: "/work" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/work.js" strategy="afterInteractive" />
    </>
  );
}
