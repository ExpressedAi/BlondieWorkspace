/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { turbo: { rules: {} } },
  images: { remotePatterns: [] }
};
export default nextConfig;
