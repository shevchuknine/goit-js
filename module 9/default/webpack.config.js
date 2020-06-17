const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './index.js',
    context: path.resolve(__dirname, 'src'),
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    mode: "development",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules\/(?!(bootstrap)\/).*/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path]/[name].[ext]',
                            limit: 5000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    devServer: {
        publicPath: '/',
        hot: false,
        historyApiFallback: true,
        noInfo: true,
        quiet: true,
        stats: 'errors-only',
        clientLogLevel: 'warning',
        compress: true,
        open: false,
        port: 3000
    },
};