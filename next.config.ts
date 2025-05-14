import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  output: 'export', 
  images: {
    unoptimized: true, 
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },};

export default nextConfig;


