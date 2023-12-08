/** @type {import('next').NextConfig} */
const path = require('path')

const isProd = process.env.NODE_ENV = 'production'

const nextConfig = {
    // basePath: isProd ? '/NextJs-Portafolio_Page' : '',
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true,
      domains: ['localhost', 'humtej1204.github.io/NextJs-Portafolio_Page'],
    }
}

module.exports = nextConfig
