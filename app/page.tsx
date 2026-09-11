import type { Metadata } from "next";
import SiteBody from "@/components/SiteBody";
import "./globals.css";

// Deliberately here and not in the root layout: metadata set on a layout is
// inherited by every route that does not override it, so a canonical up there
// would quietly tell search engines that /about, /work and the rest are all
// duplicates of the home page.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <SiteBody />;
}
