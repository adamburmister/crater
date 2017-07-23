const path = require('path')
const webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader')
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
  entry: {
    component: path.join(__dirname, '/web/static/js/Root.tsx')
  },
  output: {
    path: path.join(__dirname, '/priv/server/js'),
    filename: 'server.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      path.join(__dirname, 'priv/server')
    ]),
    // Important to keep React file size down
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
      }
    }),
    new CheckerPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ].concat(plugins[env]),
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', path.join(__dirname, '/web/static/js')],
    alias: {
      phoenix_html: path.join(__dirname, '/deps/phoenix_html/web/static/js/phoenix_html.js'),
      phoenix: path.join(__dirname, './deps/phoenix/web/static/js/phoenix.js')
    }
  }
}
