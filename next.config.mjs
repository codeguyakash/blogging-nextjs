import { createProxyMiddleware } from "http-proxy-middleware";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://techlog-tech-585621892456.herokuapp.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
