var devConfig = require("./webpack.dev");
var proConfig = require("./webpack.pro")
var baseConfig = require("./webpack.base")


module.exports = function (env) {
    console.log(env);
    if (env && env.prod) {
        return {
            ...baseConfig,
            ...proConfig
        }
    } else {
        return {
            ...baseConfig,
            ...devConfig
        }
    }

}