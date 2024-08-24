/** @type {import('next').NextConfig} */
const nextConfig = {
  // use proxy for avoid CORS
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_DOMAIN}/:path*`
      },
    ];
  },
};

export default nextConfig;
