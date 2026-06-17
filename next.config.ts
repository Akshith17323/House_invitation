import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/House_invitation",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
