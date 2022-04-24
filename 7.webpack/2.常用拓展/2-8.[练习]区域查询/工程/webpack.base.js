//公共配置


const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path")

module.exports = {
    entry: {
        list: "./src/list/index.js",
        detail: "./src/detail/index.js"
    },
    output: {
        filename: "scripts/[name].[chunkhash:5].js",
        path: path.resolve(__dirname, "./dist")
    },
    stats: {
        modules: false,
        colors: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/list.ejs",
            filename: "list.html",
            inject: "body",
            chunks: ["list"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/detail.ejs",
            filename: "detail.html",
            inject: "body",
            chunks: ["detail"]
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "./public",
                to: "./"
            }]
        })
    ]
}