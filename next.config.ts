import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
