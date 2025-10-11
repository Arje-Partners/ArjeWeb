/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes and server-side features
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;