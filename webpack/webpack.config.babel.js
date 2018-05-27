import path from 'path'
export default {
    context: path.resolve(__dirname, '../'),
    entry: {
        index: './lib/index.js',
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'commonjs2',
        filename: '[name].js',
    },
    externals: /^(vue)/,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
}
