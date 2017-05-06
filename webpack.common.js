var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    app: ["./index.js"],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'mobx',
      'mobx-react'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css-loader' }),
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css'],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    alias: {
      components: path.resolve('./src/components/'),
      utils: path.resolve('./src/utils/'),
      styles: path.resolve('./src/assets/styles/'),
    }
  }
};