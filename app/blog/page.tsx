import type { Metadata } from "next";
import Script from "next/script";
import { HTML } from "@/components/pages/blog";
import "./page.css";

export const metadata: Metadata = {
  title: "Journal &mdash; The EM Creative Studio",
  description: "Strategy, craft and the occasional hot take on real estate marketing, written by the team that runs the campaigns. Notes from The EM Creative Studio.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
      <Script src="/scripts/nav.js" strategy="afterInteractive" />
      <Script src="/scripts/pages/blog.js" strategy="afterInteractive" />
    </>
  );
}
