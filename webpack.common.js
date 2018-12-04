// webpack.common.js
const path = require('path');  
const webpack = require('webpack');  
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: "./src/index.js", 
    output: {
        path: path.join( __dirname, "/dist"), 
        filename: "js/[name].js" 
    },
    module: {
        rules: [
            {
                test: /\.css$/,   
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                    publicPath: '../'  // 给背景图片设置一个公共路径
                })
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            outputPath: 'images'  // 设置打包后图片存放的文件夹名称
                        }
                    }
                ]
            },
            {                           
                test: /(\.jsx|\.js)$/,   
                use: {                   
                    loader: "babel-loader"
                },
                exclude: /node_modules/   
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('嘻哈'),   
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.template.html"),
            title:"嘻哈"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('css/index.css')
    ]
}