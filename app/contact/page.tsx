import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/contact";
import "./page.css";

export const metadata: Metadata = {
  title: "Contact &mdash; The EM Creative Studio",
  description: "Tell us about your listings, your market, and what is not working yet. The EM Creative Studio replies within one business day, real person, no bot.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/contact.js" strategy="afterInteractive" />
    </>
  );
}
