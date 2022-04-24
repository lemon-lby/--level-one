var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: "body"
        })
    ],
    devServer: {
        port: 8000,
        open: true,
        proxy: {
            '/api': {
                target: "http://open.duyiedu.com",
                changeOrigin: true //更改请求头中的host和origin
            }
        }
    },
    stats: {
        modules: false,
        colors: true
    }

}