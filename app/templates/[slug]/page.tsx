import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TEMPLATES, templateBySlug } from "@/lib/templates";
import Viewer from "./Viewer";
import "./viewer.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/templates/[slug]">): Promise<Metadata> {
  const t = templateBySlug((await params).slug);
  if (!t) return {};
  return {
    title: `${t.name} Template Preview — The EM Creative Studio`,
    description: `A live preview of the ${t.name} real estate website template. ${t.summary}`,
    alternates: { canonical: `/templates/${t.slug}` },
    // The preview is placeholder content in a frame; /templates is the page
    // that should rank.
    robots: { index: false, follow: true },
  };
}

export default async function Page({ params }: PageProps<"/templates/[slug]">) {
  const t = templateBySlug((await params).slug);
  if (!t) notFound();
  const others = TEMPLATES.filter((o) => o.slug !== t.slug).map(({ slug, name }) => ({ slug, name }));
  return <Viewer slug={t.slug} name={t.name} others={others} />;
}
