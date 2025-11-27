import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
