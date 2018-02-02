const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/js/index.js'),
        write: path.resolve(__dirname, './src/js/common/write.js')
    },
    output: {
        filename: '[name].bundle.[hash:7].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            excludeChunks: ['write']
        }),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles.[hash:7].css"),
        new BundleAnalyzerPlugin(),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify("v100500"),
            TWO: "1+1"
        }),
        new webpack.ProvidePlugin({
            '_join': [require.resolve('lodash-es/join'), 'default']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common", // (the commons chunk name)

            filename: "common.[hash:7].js", // (the filename of the commons chunk)
            minChunks: 2, // (Modules must be shared between 3 entries)
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true
    }
};
