/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minimal-portfolio-darshan.pockethost.io",
      },
    ],
  },
};

export default nextConfig;
