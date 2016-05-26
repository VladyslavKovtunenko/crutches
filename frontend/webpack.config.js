module.exports = {
    entry: "./static/js/entry.js",
    output: {
        path: "./static/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};