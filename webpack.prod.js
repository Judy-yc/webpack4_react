// webpack.prod.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					// 使用 MiniCssExtractPlugin 插件后就不做需要style-loader了
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin([ 'dist' ]),
		//MiniCssExtractPlugin插件将css与html分离
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: '[id].css'
		})
	]
});
