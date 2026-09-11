import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/workDetail";
import "./page.css";

export const metadata: Metadata = {
  title: "Westside Realty Group Case Study &mdash; The EM Creative Studio",
  description: "How a full site rebuild and local SEO foundation doubled listing engagement for Westside Realty Group in 90 days. A case study from The EM Creative Studio.",
  alternates: { canonical: "/work/westside-realty-group" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/workDetail.js" strategy="afterInteractive" />
    </>
  );
}
