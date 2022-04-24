var {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
var path = require("path")

var HtmlWebpackPlugin = require("html-webpack-plugin")

var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "scripts/[name].[chunkhash:5].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: "body"
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "./public",
                to: "./"
            }]  
        })
    ]
}