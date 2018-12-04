// webpack.dev.js
const merge = require('webpack-merge'); 
const common = require('./webpack.common.js');

module.exports = merge(common, {   
    devServer: {
        contentBase: "./dist",  
        port: "8088",  
        inline: true,  
        historyApiFallback: true, 
        hot: true   
    }
})