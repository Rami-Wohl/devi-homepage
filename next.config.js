/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      permanent: true,
      source: "/:locale/assets/:path*",
      destination: "/assets/:path*",
      locale: false, // Prevent locales from affecting static assets
    },
  ],
};

export default withNextIntl(nextConfig);
