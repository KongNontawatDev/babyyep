// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify:true,
  
}

export default nextConfig
// module.exports = withBundleAnalyzer(nextConfig)
