const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/scripts/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/app/build'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015","react"]
      }
    }],
  },
  externals: [
    'electron',
    'fs',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};