const path = require("path");


module.exports = {
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.resolve.alias
          .set('@', path.resolve(__dirname, './src'))
      },
    devServer: {
        open: true,
        proxy: {
            '/fmsApiDev': {
                target: 'http://192.168.199.179:7080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/fmsApiDev': '/'
                }
            },
        }
    }
}