import path from "path"
export default {
    context: path.resolve(__dirname, "../"),
    entry: {
        index: "./lib/index.js",
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        splitChunks: {
            name: 'vendors',
            chunks: 'initial',
        },
        runtimeChunk: {
            name: "manifest",
        },
    },
}
