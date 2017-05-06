var webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = function (env) {
    const path = `${__dirname}/src`;
    return Merge(CommonConfig, {
        devtool: 'inline-sourcemap',
        output: {
            path: path,
            filename: "index.js"
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
            new HtmlWebpackPlugin({ template: 'index.ejs', alwaysWriteToDisk: true }),
            new HtmlWebpackHarddiskPlugin({ outputPath: path }),
        ]
    })
}