const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development",
    devServer: {
        open: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader",{
                    
                }]
            },
            {
                test: /\.less$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, "less-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}