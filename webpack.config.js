module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },{
      test: /\.json$/,
      loader: 'json-loader'
    },{
      test: /.*\.(gif|png|jpe?g)$/i,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json','.es6.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};