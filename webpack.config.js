var webpack = require('webpack');
module.exports = {
    entry: "./assets/js/entry.js",
    output: {
        path: __dirname + '/public/javascripts/',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })/*,
        uglifyJsPlugin*/
    ],
    module: {
        loaders: [
            { 
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};