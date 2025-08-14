/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true, turbo: { rules: {} } },
  pageExtensions: [],
  images: { remotePatterns: [] }
};
export default nextConfig;
