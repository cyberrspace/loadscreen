import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
};

const withPWANextConfig = withPWA({
  dest: "public", // service worker will be generated in public/
  register: true,
  skipWaiting: true,
  disable:"false",
});

export default withPWANextConfig(nextConfig);
