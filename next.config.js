const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}

module.exports = nextConfig

module.exports = withImages({
  webpack(config, options) {
    return config
}})


