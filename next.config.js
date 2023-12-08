/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    exportPathMap: function () { // /Next-React-Components
        return {
          "/": { page: "/" },
          "/ap-grid-layout": { page: "/ap-grid-layout" },
          "/ap-highlight": { page: "/ap-highlight" },
        }
    },
}

module.exports = nextConfig
