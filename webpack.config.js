const path = require('path');

const config = {
  entry: [
    './main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist',
    fileName: '[name].js',
    chunkFileName: '[name].js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: 'vue-loader'
      },
  }
};

module.exports = config;