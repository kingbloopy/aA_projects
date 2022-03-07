
var path = require('path');
// allows config file to be dynamic on where to put bundled file

module.exports = {
  entry: './frontend/entry.jsx',
  // which file will it pack everything into
  output: {
    filename: './bundle.js',
    // specifies where output goes- sometimes seen as main.js
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};