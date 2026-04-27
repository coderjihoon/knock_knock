import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async rewrites() {
    return [
      {
        source: "/invitation12",
        destination: "https://knock-books.vercel.app/invitation12",
      },
    ];
  },
};

export default nextConfig;
