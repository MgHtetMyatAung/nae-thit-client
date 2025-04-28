import createNextIntlPlugin from "next-intl/plugin";
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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
