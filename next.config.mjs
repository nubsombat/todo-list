/** @type {import('next').NextConfig} */
const nextConfig = {
    //by pass cors
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: `${process.env.NEXT_PUBLIC_API_DOMAIN}/:path*` // แทนที่ด้วย URL ของ API จริง
          }
        ];
  },
};

export default nextConfig;
