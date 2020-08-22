const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    'cyberpunk-react': './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'cyberpunk-react',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  }
}
