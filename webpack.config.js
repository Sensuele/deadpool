const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './main.js',
    // publicPath: './'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
  },
  mode: 'development',

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /(\.scss|\.css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-sass-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              }
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,

        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './assets/fonts/',
          publicPath: './assets/fonts/',
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/img',
            publicPath: './assets/img',
            useRelativePath: true
          }
        }]
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "./main.css",
    })
  ]
};