/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudinary Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
}

export default nextConfig
