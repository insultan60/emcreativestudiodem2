import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/services";
import "./page.css";

export const metadata: Metadata = {
  title: "Services &mdash; The EM Creative Studio",
  description: "Six marketing disciplines under one senior team: social, branding, content, email, print and digital advertising for real estate brands. Los Angeles boutique agency.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/services.js" strategy="afterInteractive" />
    </>
  );
}
