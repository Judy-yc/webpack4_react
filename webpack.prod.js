// webpack.prod.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');

module.exports = merge(common, {   
    devtool: 'source-map', 
    plugins: [
        new CleanWebpackPlugin(['dist']), 
        new PurifyCssWebpack({
            paths: glob.sync(path.join(__dirname, 'src/*.html')) 
        })
    ]
})