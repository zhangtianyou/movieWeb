const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
	publicPath: process.env.NODE_ENV === 'production'? '/' : './',//打包后的位置(如果不设置这个静态资源会报404)
	//process.env.NODE_ENV === 'production'? '/' : './'
	//outputDir: 'dist',//打包后的目录名称
 	//assetsDir: 'static',//静态资源目录名称
 	lintOnSave: false,//eslint校验
 	filenameHashing: false,
	devServer:{
		host:"0.0.0.0",
		port:9000,
		proxy:{
			'/api':{ //生产
				target:"http://47.115.32.199",
				changeOrigin:true,
				pathRewrite:{
					'api':'/api'
				}
			}
			// '/api':{//测试
			// 	target:"http://47.115.32.199",
			// 	changeOrigin:true,
			// 	pathRewrite:{
			// 		'api':'/apis'
			// 	}
			// }
		}
	},
	filenameHashing:true,
	productionSourceMap:false,//去掉打包的时候生成的map文件
	chainWebpack:(config)=>{
		config.plugins.delete('prefetch');//删除预加载----实现真正预加载
	},
	runtimeCompiler:false,
	configureWebpack: {
	    plugins: [
	      // Ignore all locale files of moment.js
	      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
	      // new UglifyJsPlugin({
	      //   uglifyOptions: {
	      //     compress: {
	      //       drop_debugger: true,
	      //       drop_console: true
	      //     }
	      //   },
	      //   sourceMap: false,
	      //   parallel: true
	      // }),
	      // 配置compression-webpack-plugin压缩
	      new CompressionWebpackPlugin({
	        algorithm: 'gzip',
	        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
	        threshold: 10240,
	        minRatio: 0.8
	      })
	    ]
	  }
	// plugins:[
	// 	new CompressionWebpackPlugin({
	// 		algorithm: 'gzip',
	// 		test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
	// 		threshold: 10240,
	// 		minRatio: 0.8
	// 	})
	// ]
}