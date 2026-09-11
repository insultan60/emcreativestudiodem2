/* One place for the site's own address.
 *
 * Env-driven because nothing in this repo knows the production domain yet - the
 * fallback below is a guess and will put the wrong host in every canonical and
 * og:url if it ships unset. Set NEXT_PUBLIC_SITE_URL in the deploy environment.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.theemcreative.studio"
).replace(/\/$/, "");

export const SITE_NAME = "The EM Creative Studio";
