import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  images: { formats: ["image/avif", "image/webp"] },
  turbopack: { root: path.resolve(__dirname) },
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        "",
        "/about",
        "/menu",
        "/menu/food",
        "/menu/drinks",
        "/chef",
        "/gallery",
        "/contact",
        "/faq",
      ].map((route) => ({
        source: route || "/",
        destination: `/en${route}`,
      })),
    };
  },
};

export default nextConfig;
