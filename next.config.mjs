/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        // destination: "https://salpyarzay-innovix.odoo.com/api/:path*", // for production
        destination: "https://dummyjson.com/:path*", // for development
      },
    ];
  },
};

export default nextConfig;
