module.exports = {
     mode:"development",
     module:{
        rules:[
            {
                test:/\.js$/,
                include:/\.\/src/,  //只管当前目录下的src
                exclude:/lodash/,//忽略lodash目录
                use:["babel-loader"]
            }
        ]
     }
}