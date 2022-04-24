const HtmlWebpackPlugin = require("html-webpack-plugin")
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    optimization: {
        //分包策略
        chunks:all,
        //maxSize:60000
        //automaticNameDeliMiter:"."
        //minChunks:1
        //minSize:0
        cachGrops: {
            //属性名是缓存组名称，会影响到分包的chunk名
            //属性名是缓存组的配置，缓存组继承所有的全局配置，也有自己特殊的配置
            vendors:{
                test:/[\\/]node_modules[\\/]/,//当匹配到相应模块时，将这些模块进行单独打包
                priority:-10 //缓存组优先级，优先级越高，该策略越先进行处理，默认值为0
            },
            default:{
                minChunks:2, //覆盖全局配置，将最小chunk引用数该为2
                priority:-20, //优先级
                reuseExistingChunk:true//重用已经被分离出去的chunk
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"]
        }),

    ]
}