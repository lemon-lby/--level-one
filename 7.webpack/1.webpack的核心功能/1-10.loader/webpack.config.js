module.exports = {
    mode: "development",
    module: {
        rules: [{
                test: /index\.js$/, //正则表达式，匹配模块的路径
                use: [{
                        loader: "./loaders/test-loader?changeVar=未知数", //加载器的路径
                        // options: {
                        //     changeVar:"未知数"
                        //     }
                    } //每个加载器的使用是一个对象
                ] //匹配到了之后使用哪些loaders（加载器）
            }, //规则1
            {} //规则2
        ], //模块的匹配规则
        // noParse: //是否不要解析某个模块
    }
}