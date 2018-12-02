const { join } = require('path')

const include = join(__dirname, 'src')

module.exports = {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'eds',
  },
  devtool: 'source-map',
  module: {
    rules: [{ test: /\.js$/, loader: 'babel-loader', include }],
  },
}
