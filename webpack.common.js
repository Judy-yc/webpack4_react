// webpack.common.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/', //  "/" 或者  "./"代表资源的查找路径
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@Views': path.resolve(__dirname, 'src/views/'),
      '@components': path.resolve(__dirname, 'src/components/'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'eslint-loader',
        },
        exclude: [path.resolve(__dirname, './node_modules')],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[path][name][hash:8].[ext]',
              fallback: 'file-loader',
              // // 将图片打包到该公共目录下
              outputPath: 'images',
            },
          },
          {
            loader: 'image-webpack-loader', // 压缩图片
            options: {
              disable: false, // 是否禁止压缩，默认false
              quality: 80, // 压缩质量，也可以是'70-80'
            },
          },
        ],
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
  plugins: [
    new webpack.BannerPlugin('嘻哈'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.template.html'),
      title: '嘻哈',
      inject: true,
    }),

    // 复制文件的插件
    // new CopyWebpackPlugin([{
    //     // 要复制的目录
    //     from: path.resolve(__dirname, './static'),
    //     // 打包到输出目录下的static目录中
    //     to: 'static',
    //     // 忽略png文件，['.*']表示复制任何文件
    //     ignore: ['*.png']
    // }]),
  ],
};
