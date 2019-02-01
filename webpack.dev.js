// webpack.dev.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[name]__[local]_[hash:base64:5]'
					}
				},
				'postcss-loader'
			]
		}]
	},
	devServer: {
		// 设置服务器从那个目录提供内容，告知服务器，观察 devServer.contentBase 下的文件。
		contentBase: path.join(__dirname, 'dist'),
		//文件修改后，会触发一次完整的页面重载
		watchContentBase: true,
		//一切服务都启用 gzip 压缩
		compress: true,
		// 刷新模式，false时启用iframe模式
		inline: false,
		//默认是 localhost。如果你希望服务器外部可访问设置'0.0.0.0'
		host: '127.0.0.1',
		hotOnly: true, // 仅启动自动刷新
		proxy: {}, // 设置请求代理
		open: true, // 启动后是否自动打开默认浏览器
		//指定打开浏览器时的导航页面。
		//  openPage: '/different/page',
		//当出现编译器错误或警告时，在浏览器中显示全屏覆盖层,默认false
		overlay: true,
		port: '8088',
		inline: true,
		historyApiFallback: true,
		hot: true //是否启动热模块替换
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
});