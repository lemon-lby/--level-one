const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
     mode:"development",
     devServer:{
         hot:true,
         open:true
     },
     plugins:[
         //可选
         new HtmlWebpackPlugin({
             template:"./public/index.html"
         })
     ]
}