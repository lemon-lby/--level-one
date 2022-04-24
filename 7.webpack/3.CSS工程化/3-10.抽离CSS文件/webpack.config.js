const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.png$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "img/[hash:5].[ext]"
                    }
                }
            }
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin()
    ]

}