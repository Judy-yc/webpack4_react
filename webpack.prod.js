// webpack.prod.js
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 使用 MiniCssExtractPlugin 插件后就不做需要style-loader了
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    // MiniCssExtractPlugin插件将css与html分离
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),
    // 打包分析工具
    new BundleAnalyzerPlugin(),
  ],
});
