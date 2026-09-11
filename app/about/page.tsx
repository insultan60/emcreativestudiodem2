import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/about";
import "./page.css";

export const metadata: Metadata = {
  title: "About &mdash; The EM Creative Studio",
  description: "Meet the six people behind The EM Creative Studio, a boutique real estate marketing agency in Los Angeles led by founder Seda Naumenko.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/about.js" strategy="afterInteractive" />
    </>
  );
}
