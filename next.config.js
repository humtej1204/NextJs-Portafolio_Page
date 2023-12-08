/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true
    }
}

module.exports = nextConfig
