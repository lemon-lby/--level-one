const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
const path = require("path");

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}