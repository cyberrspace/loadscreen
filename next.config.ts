import withPWA from "next-pwa";
import type { NextConfig } from "next";

const baseConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
};

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development" ? true : false, // Disable only in dev
})(baseConfig);

export default nextConfig;
