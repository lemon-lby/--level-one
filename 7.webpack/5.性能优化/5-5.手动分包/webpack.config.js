const HtmlWebpackPlugin = require("html-webpack-plugin")
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
const path = require("path");
const webpack = require("webpack");
module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    devServer: {
        hot: true,
        open: true
    },
    plugins: [
        //可选
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"]
        }),
        new webpack.DllReferencePlugin({
            manifest: require("./dll/jquery.manifest.json")
        }),
        new webpack.DllReferencePlugin({
            manifest: require("./dll/lodash.manifest.json")
        }),
    ]
}