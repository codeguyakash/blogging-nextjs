/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://bit.ly",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
