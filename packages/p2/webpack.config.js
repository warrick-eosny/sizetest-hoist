const webpack = require("webpack");

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    "index": './src/index.ts',
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'babel-loader!ts-loader' }
    ]
  },
  optimization: {
    minimize: true
  }
}
