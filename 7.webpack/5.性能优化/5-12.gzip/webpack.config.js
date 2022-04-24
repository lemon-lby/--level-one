const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
const path = require("path");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CompressionCebpackClugin = require("compression-webpack-plugin")

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackBundleAnalyzer(),
        new CompressionCebpackClugin({
            filename: "[file].gzip",
            test: /main\.js/,
            minRatio: 0.5   
        })
    ]
}