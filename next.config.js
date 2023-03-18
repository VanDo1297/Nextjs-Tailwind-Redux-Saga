/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    // should be the same as the API_URL in .env
    API_URL: process.env.API_URL,
  }
}

module.exports = nextConfig
