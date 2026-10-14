/* The website templates shown on /templates. Each one is a generalized,
 * fictional version of a site the studio has shipped: the design is real,
 * every name, photo, listing and number in it is made up. The live demos are
 * static pages in public/template-demos/<slug>/ and open inside the viewer at
 * /templates/<slug>. Gallery thumbnails are public/images/templates/<slug>.jpg
 * (desktop, 1440x900) and <slug>-m.jpg (phone, 390x844). */

export interface SiteTemplate {
  slug: string;
  name: string;
  /** The kind of business it was first built for. */
  fit: string;
  summary: string;
  features: string[];
  /** Swatches shown on the card, darkest first. */
  palette: string[];
  fonts: string;
}

export const TEMPLATES: SiteTemplate[] = [
  {
    slug: "summit",
    name: "Summit",
    fit: "Solo agent",
    summary:
      "Polished and confident in deep teal and muted gold on warm ivory, with Fraunces serif headlines. A full-screen hero with a glass action pill leads into roomy card sections and soft fade-up motion.",
    features: [
      "Buy / Sell / Schedule hero pill",
      "Recently sold listings grid",
      "Home value form",
      "Process timeline and FAQ",
    ],
    palette: ["#17140f", "#084446", "#9a6c2e", "#D19852", "#f6ecd6", "#f6f3ec"],
    fonts: "Fraunces · Onest",
  },
  {
    slug: "haven",
    name: "Haven",
    fit: "Solo agent",
    summary:
      "Warm, editorial luxury: cream and blush grounds, elegant serif headlines with italic accents and a cinematic full-screen hero. Calm, airy and personal, built around one agent's story.",
    features: [
      "Full-screen photo hero",
      "Available / Sold listing tabs",
      "Testimonial slider and FAQ",
      "Neighborhood guides and blog",
    ],
    palette: ["#241e1c", "#92735e", "#ab8b75", "#dac6b8", "#fdefe5", "#f9f4ee"],
    fonts: "Playfair Display · Inter",
  },
  {
    slug: "lumen",
    name: "Lumen",
    fit: "Solo agent",
    summary:
      "Quiet and refined in moss, parchment and clay, with Cormorant serif headlines and a staged hero entrance. Made for agents who sell homes with character and want the site to feel the same way.",
    features: [
      "Hero with agent contact blocks",
      "Featured and recently sold grids",
      "Animated stats and reviews",
      "Relocation and neighborhood guides",
    ],
    palette: ["#1C1C1A", "#3A4233", "#4F5847", "#CBBBA0", "#DED2BD", "#F5F0E1"],
    fonts: "Cormorant Garamond · DM Sans",
  },
  {
    slug: "meridian",
    name: "Meridian",
    fit: "Real estate team",
    summary:
      "Cinematic and bold: full-bleed imagery, warm cream pages broken by deep ink bands, and restrained coral buttons. Room for a whole team, with an interactive market map and slow, smooth reveals.",
    features: [
      "Featured listings grid",
      "Instant home value form",
      "Interactive market map",
      "Team intro film and services tabs",
    ],
    palette: ["#070502", "#55524E", "#E06345", "#BDA979", "#D3BF8F", "#FBF9F5"],
    fonts: "Fraunces · Onest",
  },
];

/** The pages every template demo ships with, in menu order. The viewer's
 *  page picker lists these; the files sit next to each demo's index.html. */
export const TEMPLATE_PAGES = [
  { file: "index.html", label: "Home" },
  { file: "search.html", label: "Property search" },
  { file: "listing.html", label: "Listing detail" },
  { file: "about.html", label: "About" },
  { file: "buyers.html", label: "Buyers" },
  { file: "sellers.html", label: "Sellers" },
  { file: "neighborhood.html", label: "Neighborhood" },
  { file: "contact.html", label: "Contact" },
];

export const templateBySlug = (slug: string) => TEMPLATES.find((t) => t.slug === slug);
