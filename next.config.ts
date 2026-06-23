import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.vimeocdn.com" },
    ],
  },
  async redirects() {
    return [
      // /webinars merged into the video library on June 4 2026.
      // Permanent redirects so external links + search results land users
      // on the canonical Videos page.
      { source: "/webinars", destination: "/resources/videos", permanent: true },
      { source: "/webinars/:slug*", destination: "/resources/videos", permanent: true },
    ];
  },
};

export default nextConfig;
