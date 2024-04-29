/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "web.whatsapp.com",
      },
    ],
  },
};

export default nextConfig;
