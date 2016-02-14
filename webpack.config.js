module.exports = {
    entry: "./assets/js/entry.js",
    output: {
        path: __dirname + '/public/javascripts/',
        filename: "bundle.js"
    },
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