const path = require('path')
const webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const env = process.env.MIX_ENV === 'prod' ? 'production' : 'development'

const plugins = {
  production: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ],
  development: []
}

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'web/static/js/app.tsx'),
    path.join(__dirname, 'web/static/scss/app.scss')
  ],
  output: {
    path: path.join(__dirname, '/priv/static'),
    filename: 'js/app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['awesome-typescript-loader'],
        include: path.join(__dirname, 'web/static/js'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([
      path.join(__dirname, 'priv/static/js'),
      path.join(__dirname, 'priv/static/css')
    ]),
    // Important to keep React file size down
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env),
      },
    }),
    new CheckerPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('css/app.css')
  ].concat(plugins[env]),
  resolve: {
    modules: [
      'node_modules',
      'web/static/js'
    ],
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      phoenix: path.join(__dirname, '/deps/phoenix/priv/static/phoenix.js')
    },
  }
}
