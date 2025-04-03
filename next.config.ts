import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["s3-alpha-sig.figma.com","randomuser.me",], // Allow Figma's image host
  },
};

export default nextConfig;
