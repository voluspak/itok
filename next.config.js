
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'p16-amd-va.tiktokcdn.com'
      }
    ]
  }
}

module.exports = nextConfig
