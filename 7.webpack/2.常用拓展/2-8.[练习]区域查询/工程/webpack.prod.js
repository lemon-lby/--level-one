//生产环境
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const path = require("path")

module.exports = {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
    ]
}