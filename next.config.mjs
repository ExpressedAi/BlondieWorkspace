/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { turbo: { rules: {} } },
  pageExtensions: ['mdx'],
  images: { remotePatterns: [] }
};
export default nextConfig;
