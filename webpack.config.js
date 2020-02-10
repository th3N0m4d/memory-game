const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const APP_DIR = path.join(__dirname, 'src')

const plugins = [
  new HtmlWebPackPlugin({
    template: `${APP_DIR}/index.html`
  }),
  new CleanWebpackPlugin()
]

const resolve = {
  alias: {
    '@': APP_DIR
  },
  extensions: ['.jsx', '.js']
}

const devServer = {
  open: true
}

module.exports = {
  resolve,
  plugins,
  devServer,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: 'file-loader'
      }
    ]
  }
}
