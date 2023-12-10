/** @type {import('next').NextConfig} */
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: isProd ? '/NextJs-Portafolio_Page' : undefined,
    assetPrefix: isProd ? 'https://humtej1204.github.io/NextJs-Portafolio_Page/' : undefined,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true,
    }
}

module.exports = nextConfig
