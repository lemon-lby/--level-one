var { CleanWebpackPlugin } = require("clean-webpack-plugin")
var path = require("path")

var HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode:"development",
    devtool:"source-map",
    entry:{
        home:"./src/index.js",
        a:"./src/a.js"
    },
    output:{
        filename:"[name].[chunkhash:5].js",
        path:path.resolve(__dirname,"./dist")
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            inject:"body",
            chunks:["home"],
            filename:"home.html"
        }),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            inject:"body",
            chunks:["a"],
            filename:"a.html"
        }),
    ]
}