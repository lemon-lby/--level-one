const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ]
}