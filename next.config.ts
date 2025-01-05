import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.freepik.com", 'img.lovepik.com', "avatars.githubusercontent.com"], // Add external domains for images
  },
  // You can add more configuration options here if needed
};

export default nextConfig;
