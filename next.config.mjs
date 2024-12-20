/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["minimal-portfolio-darshan.pockethost.io"],
  },
  env: {
    POCKET_BASE_URL: process.env.POCKET_BASE_URL,
  },
};

export default nextConfig;
