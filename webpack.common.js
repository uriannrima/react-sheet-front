var path = require('path');

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
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    alias: {
      utils: path.resolve('./src/utils/')
    }
  }
};