import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["lh3.googleusercontent.com", "upload.wikimedia.org"],
    // in production, you might want to set this to `unoptimized: false` for better performance
    // unoptimized: true,
  },
};

export default nextConfig;
