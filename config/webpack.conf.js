const project = require('./../package.json').config;
const webpack = require('webpack');

module.exports = {
    entry: './' + project.sources_dir + '/main.ts',
    output: {
        path: './' + project.dist_dir + '/',
        filename: 'app.js',
        sourceMapFilename: '[file].map'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    }
};
