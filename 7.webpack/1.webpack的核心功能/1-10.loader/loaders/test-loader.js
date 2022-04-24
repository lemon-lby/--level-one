var loaderUtils = require("loader-utils")

module.exports = function (sourceCode) {
    //sourceCode : 变量 a = 1;
    var options = loaderUtils.getOptions(this);
    var reg = new RegExp(options.changeVar,"g");
    console.log(options.changeVar);
    return sourceCode.replace(reg,"var");
}