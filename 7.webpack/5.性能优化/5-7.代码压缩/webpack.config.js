const HtmlWebpackPlugin = require("html-webpack-plugin")
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
const path = require("path");
const webpack = require("webpack");


const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    optimization: {
        //是否要启用压缩。默认情况下，生产环境会自动开启
        //minimize:true
        minimizer: [
            //压缩时使用的插件，可以有多个
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:"[name].[hash:5].css"
        })

    ]
}