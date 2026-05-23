import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  images: {
    qualities: [75, 85],
  },
};

export default withContentlayer(nextConfig);
