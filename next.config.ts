/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If you use <Image /> from next/image, keep this so images work on static hosting:
  images: { unoptimized: true },
  // Optional but helps avoid some static-host 404s:
  trailingSlash: true,
};
module.exports = nextConfig;
