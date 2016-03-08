var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var postcssNest = require('postcss-nested');
var postcssNext = require('postcss-cssnext');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./client.js",
  output: {
    path: __dirname + "/build/",
    filename: "bundle.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?localIdentName=[name]_[local]_[hash:base64:6]&modules!postcss'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  },
  postcss: [
    postcssNext({
      browsers: ['Chrome >= 20'],
      url: false
    }),
    postcssNest
  ],
  plugins: [
      new webpack.ProvidePlugin({
        'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      })
  ]
};