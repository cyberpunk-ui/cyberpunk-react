const path = require('path')

module.exports = {
  entry: {
    'cyberpunk-react': path.resolve(__dirname, '../lib/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist/lib'),
    library: 'cyberpunk-react',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
}
