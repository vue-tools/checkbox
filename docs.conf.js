var path = require('path')

module.exports = {
    port: 9090,
    webpack: {
        resolve: {
            alias: {
                'vt-checkbox': path.resolve(__dirname, 'src')
            }
        }
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}