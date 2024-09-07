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
        hostname: "xbarat.com",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
  output: 'standalone'
};

export default nextConfig;
