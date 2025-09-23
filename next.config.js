
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p16-sign-va.tiktokcdn.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'p16-sign-sg.tiktokcdn.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'p16-pu-sign-no.tiktokcdn-eu.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'p16-sign-no.tiktokcdn-eu.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '*.tiktokcdn.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '*.tiktokcdn-eu.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
