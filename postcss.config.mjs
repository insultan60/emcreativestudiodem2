/* Object form, not the array-of-strings form.
 *
 * `plugins: ["@tailwindcss/postcss"]` builds locally but fails under
 * Turbopack on the Vercel build host, once per stylesheet:
 *
 *   Error: Cannot find module as expression is too dynamic
 *     at http (postcss.config.mjs)
 *
 * Thirteen identical errors, one per CSS file in the app, which makes a
 * config problem look like a CSS problem.
 *
 * Importing the plugin instead is worse, not better: a static ESM import
 * pulls @tailwindcss/oxide and lightningcss - native .node binaries - into
 * the ESM chunk graph, and Turbopack rejects them as "non-ecmascript
 * placeable asset".
 *
 * The object form is what Next documents for postcss.config, and it is the
 * shape Turbopack resolves itself rather than evaluating as an expression. */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
