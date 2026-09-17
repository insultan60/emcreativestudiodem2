import { NextResponse } from "next/server";

/* The contact form's delivery endpoint.
 *
 * Until now the form was a stub: public/scripts/pages/contact.js waited 900ms
 * and showed "Message sent." Nothing was ever sent, and nobody would have
 * known - the success panel looks the same either way. This route is what
 * makes that panel honest.
 *
 * Resend, over plain fetch rather than the SDK: one POST to one URL does not
 * earn a dependency. Node runtime, not edge, because the key should stay in a
 * server environment and there is nothing here that benefits from the edge. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Caps, so a scripted post cannot mail us a novel. */
const LIMITS = { name: 120, email: 200, company: 160, message: 4000, service: 60, services: 12 };

type Payload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  services?: unknown;
  /** Honeypot. Real people never see it, so anything in it is a bot. */
  website?: unknown;
};

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/* Deliberately loose - the aim is to catch a typo, not to adjudicate RFC 5322.
   Anything stricter rejects addresses that work. */
const looksLikeEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Expected JSON." }, { status: 400 });
  }

  /* Honeypot: answer 200 so a bot logs a success and moves on, and send
     nothing. Telling it that it failed only invites a second attempt. */
  if (str(body.website, 100)) return NextResponse.json({ ok: true });

  const name = str(body.name, LIMITS.name);
  const email = str(body.email, LIMITS.email);
  const company = str(body.company, LIMITS.company);
  const message = str(body.message, LIMITS.message);
  const services = Array.isArray(body.services)
    ? body.services
        .map((s) => str(s, LIMITS.service))
        .filter(Boolean)
        .slice(0, LIMITS.services)
    : [];

  const missing = [
    !name && "name",
    !looksLikeEmail(email) && "a valid email",
    !message && "a message",
  ].filter(Boolean);
  if (missing.length) {
    return NextResponse.json({ error: `Please add ${missing.join(", ")}.` }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  /* A misconfigured environment is our problem, not the sender's, and it is
     the one failure they must not be told "try again" about - the retry would
     fail the same way. Log it loudly and own it in the response. */
  if (!apiKey || !to || !from) {
    console.error("[contact] missing env:", {
      RESEND_API_KEY: Boolean(apiKey),
      CONTACT_TO: Boolean(to),
      CONTACT_FROM: Boolean(from),
    });
    return NextResponse.json(
      { error: "The form is not configured to send right now. Please email us directly." },
      { status: 500 },
    );
  }

  const picked = services.length ? services.join(", ") : "Not specified";
  const lines = [
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Company:  ${company || "-"}`,
    `Services: ${picked}`,
    "",
    message,
  ].join("\n");

  const html = `
    <div style="font:15px/1.6 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a">
      <p style="margin:0 0 18px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6E7865">
        New enquiry — theemcreativestudio.com
      </p>
      <table style="border-collapse:collapse;margin-bottom:20px">
        <tr><td style="padding:3px 16px 3px 0;color:#77716a">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:3px 16px 3px 0;color:#77716a">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:3px 16px 3px 0;color:#77716a">Company</td><td>${escapeHtml(company) || "—"}</td></tr>
        <tr><td style="padding:3px 16px 3px 0;color:#77716a">Services</td><td>${escapeHtml(picked)}</td></tr>
      </table>
      <div style="white-space:pre-wrap;padding:16px 18px;background:#F6F4F1;border-radius:10px">${escapeHtml(message)}</div>
    </div>`;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        /* So hitting reply in the inbox answers the person who wrote in,
           rather than the website's own send address. */
        reply_to: email,
        subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
        text: lines,
        html,
      }),
    });

    if (!res.ok) {
      /* Resend's body says why - a From address off an unverified domain, a
         revoked key. Worth having in the server log; not worth showing. */
      console.error("[contact] resend rejected:", res.status, await res.text());
      return NextResponse.json(
        { error: "We could not send that just now. Please try again, or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { error: "We could not send that just now. Please try again, or email us directly." },
      { status: 502 },
    );
  }
}
