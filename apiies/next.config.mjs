/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",  // ✅ Cloudinary hostname allow किया
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
