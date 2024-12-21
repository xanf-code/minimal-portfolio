/** @type {import('next').NextConfig} */
const nextConfig = {
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
