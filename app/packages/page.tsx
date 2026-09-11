import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/packages";
import "./page.css";

export const metadata: Metadata = {
  title: "Packages &mdash; The EM Creative Studio",
  description: "Three ways to work with The EM Creative Studio, from a focused Essentials retainer to a fully dedicated Bespoke studio team. Los Angeles boutique real estate marketing.",
  alternates: { canonical: "/packages" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/packages.js" strategy="afterInteractive" />
    </>
  );
}
