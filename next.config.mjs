/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.dub.co",
      },
    ],
  },
};

export default nextConfig;
