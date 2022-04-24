//开发环境


module.exports = {
    mode:"development",
    devServer:{
        open:["list.html"],
        proxy:{
            "/api":{
                target:"http://yuanjin.tech:5100/",
                changeOrigin:true
            }
        }
    }
}