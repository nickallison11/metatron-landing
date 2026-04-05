import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "metatron.id",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
