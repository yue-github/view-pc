const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '.', dir) // 这里采用一个点，因为vue.config.js文件和package.json文件都在同一个目录下，即根目录下
}
module.exports = {
  publicPath:'./',
  outputDir:"yue",
  assetsDir:"assets",
  lintOnSave:true,
  devServer: {
    hotOnly: true, 
    host: "localhost",
    port: 8080,
    open: true,
    proxy: {
		  // 配置跨域
		  '/apis': {
        target: 'https://coral3.com.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
		  }
		} 
  },
  // 设置目录别名
  configureWebpack: {
    resolve: {
        alias: {
          '@@': resolve('./src/assets'), // 这里采用两个@符号来代替路径的别名，因为一个@符号已经默认被设置src的路径了，为了不影响原有的功能，这里采用两个@字符
          '@@@': resolve('./src/views') 
        }
    },
    plugins: [
        // 需要用到拷贝文件的插件
        new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, './static'),
              to: '.',
              ignore: ['.*']
            }
        ])
    ]
  },
  css:{
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
