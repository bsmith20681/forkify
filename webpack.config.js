const path = require('path');
module.exports = {
  entry: './src/js/index.js',
  output: {
    pathe:path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
