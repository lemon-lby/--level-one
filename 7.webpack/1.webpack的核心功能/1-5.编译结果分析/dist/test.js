//合并两个模块
//  ./src/a.js
//  ./src/index.js



(function (modules) {
    var moduleExports = {};
    //require函数相当于运行一个模块，得到模块导出结果
    function require(moduleId) { //moduleId就是模块的路径
        if (moduleExports[moduleId]) {
            return moduleExports[moduleId];
        }
        var func = modules[moduleId]; //得到该模块对应的函数
        var module = {
            exports: {}
        }
        func(module, module.exports, require); //运行模块
        var result = module.exports; //得到模块导出的结果
        moduleExports[moduleId] = result;
        return result;
    }

    //执行入口模块
    require("./src/index.js");
})({ //该对象保存了所有的模块，以及模块对应的代码
    "./src/a.js": function (module, exports) {
        eval("console.log(\"module a\")\n module.exports = \"a\";\n //# sourceURL= webpack:///./src/a.js")
    },
    "./src/index.js": function (module, exports, require) {
        eval("console.log(\"index module\");\n var a = require(\"./src/a.js\");\na.abc();\nconsole.log(a);\n //# sourceURL=webpack:///./src/index.js")
    },
})