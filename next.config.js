
// next.config.js
/* eslint-disable */
const path = require('path')

module.exports = ({
//   exportPathMap: async function(defaultPathMap) {
//     return {
//       '/': { page: '/' },
//       '/about-us': { page: '/about-us' },
//       '/contact-us': { page: '/contact-us' },
//     }
//   },
  webpack(config, { dev }) {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/out/'],
        enforce: 'pre',
        options: {
          emitWarning: true,
        },
      })
    }
    return config
  },
})