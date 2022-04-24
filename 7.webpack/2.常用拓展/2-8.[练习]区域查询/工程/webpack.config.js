const baseConfig = require("./webpack.base")
const devConfig = require("./webpack.dev")
const prodConfig = require("./webpack.prod")
const NODE_ENV = process.env.NODE_ENV;
console.log("--------" + NODE_ENV + "-----------");



module.exports = function () {
    if (NODE_ENV === "production") {
        //生产环境

        const config = {
            ...baseConfig,
            ...prodConfig
        }
        config.plugins = [...baseConfig.plugins, ...prodConfig.plugins]
        return config;

    } else {
        //开发环境
        return {
            ...baseConfig,
            ...devConfig
        }

    }
}