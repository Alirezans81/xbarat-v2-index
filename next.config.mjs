/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smicln.ir",
        port: "",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "xbarat-back.pro",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
