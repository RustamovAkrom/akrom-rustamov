import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  images: {
    qualities: [75, 85, 95],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withContentlayer(withNextIntl(nextConfig));
