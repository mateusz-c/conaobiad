/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.centrumrespo.pl",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
