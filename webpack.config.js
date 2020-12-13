const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        main:"./src/index.js",
        tests:"./test/tests.spec.js",
    },
    mode:"production",
    output: {        
        filename: '[name].min.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new CleanWebpackPlugin({
            protectWebpackAssets: true,
        }),  
    ],
    optimization: {
        minimize: true,
        minimizer: [ new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            terserOptions: {
                output: {
                    comments: false,
                },
            },
            extractComments: true,
        })],
    },
    devtool: "source-map",
    devServer: {        
        hot: true
    },    
};