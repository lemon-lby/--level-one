var {CleanWebpackPlugin} = require("clean-webpack-plugin")
var path = require("path")
module.exports = {
    mode:"development",
    devtool:"source-map",
    output:{
        filename:"[name]..[chunkhash:5].js",
        path: path.resolve(__dirname,"./dist")
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}