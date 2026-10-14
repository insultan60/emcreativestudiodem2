"use client";

import { useRef, useState } from "react";
import { TEMPLATE_PAGES } from "@/lib/templates";

/* The live preview: the static demo page in a frame under a slim studio bar.
   The device buttons only change the frame's width, so the demo's own
   responsive CSS does the work - what you see at "Phone" is exactly what a
   390px-wide phone gets. */

const DEVICES = [
  { key: "desktop", label: "Desktop", width: "100%" },
  { key: "tablet", label: "Tablet", width: "820px" },
  { key: "phone", label: "Phone", width: "390px" },
] as const;

type DeviceKey = (typeof DEVICES)[number]["key"];

export default function Viewer({
  slug,
  name,
  others,
}: {
  slug: string;
  name: string;
  others: { slug: string; name: string }[];
}) {
  const [device, setDevice] = useState<DeviceKey>("desktop");
  const width = DEVICES.find((d) => d.key === device)!.width;
  const [page, setPage] = useState("index.html");
  const frame = useRef<HTMLIFrameElement>(null);
  const base = `/template-demos/${slug}/`;

  // Links inside the demo navigate the frame itself; read back where it
  // landed so the picker follows along. Same origin, so this is allowed.
  const onFrameLoad = () => {
    try {
      const file = frame.current?.contentWindow?.location.pathname.split("/").pop() || "index.html";
      setPage(TEMPLATE_PAGES.some((p) => p.file === file) ? file : "index.html");
    } catch {
      /* cross-origin or blank: leave the picker as it is */
    }
  };
  const goTo = (file: string) => {
    setPage(file);
    if (frame.current) frame.current.src = base + file;
  };

  return (
    <div className="tv">
      <header className="tv__bar">
        <a className="tv__back" href="/templates" aria-label="All templates">
          <svg width="17" height="10" viewBox="0 0 17 10" aria-hidden="true">
            <path d="M17 5H2M6 1L2 5l4 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
          <span>All templates</span>
        </a>
        <div className="tv__title">
          <img src="/images/logo-em.svg" alt="" width="28" height="28" />
          <span>
            <strong>{name}</strong> template
          </span>
        </div>
        <label className="tv__pages">
          <span className="tv__sr">Page</span>
          <select value={page} onChange={(e) => goTo(e.target.value)}>
            {TEMPLATE_PAGES.map((p) => (
              <option key={p.file} value={p.file}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
        <div className="tv__devices" role="group" aria-label="Preview size">
          {DEVICES.map((d) => (
            <button
              key={d.key}
              type="button"
              aria-pressed={device === d.key}
              onClick={() => setDevice(d.key)}
            >
              {d.label}
            </button>
          ))}
        </div>
        <nav className="tv__others" aria-label="Other templates">
          {others.map((o) => (
            <a key={o.slug} href={`/templates/${o.slug}`}>
              {o.name}
            </a>
          ))}
        </nav>
        <a className="tv__cta" href={`/contact?template=${slug}#book`}>
          Start with {name}
        </a>
      </header>
      <main className={`tv__stage tv__stage--${device}`}>
        <iframe
          ref={frame}
          onLoad={onFrameLoad}
          className="tv__frame"
          style={{ width }}
          src={`${base}index.html`}
          title={`${name} template preview`}
        />
      </main>
    </div>
  );
}
