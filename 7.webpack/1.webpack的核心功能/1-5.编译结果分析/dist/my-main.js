//合并两个模块
//  ./src/a.js
//  ./src/index.js



(function (modules) {
    var moduleExports = {}; //用于缓存模块的导出结果
    //require函数相当于运行一个模块，得到模块导出结果
    function _webpack_require(modeuleId) { //moduleId就是模块的路径
        if (moduleExports[modeuleId]) {
            return moduleExports[modeuleId];
        }
        var func = modules[modeuleId]; //得到该模块对应的函数
        var module = {
            exports: {}
        }
        func(module, module.exports, _webpack_require); //运行模块
        var result = module.exports; //得到模块导出的结果
        moduleExports[modeuleId] = result;
        return result;
    }

    //执行入口模块
    _webpack_require("./src/index.js");
})({ //该对象保存了所有的模块，以及模块对应的代码
    "./src/a.js": function (module, exports) {
        console.log("module a");
        module.exports = "a";
    },
    "./src/index.js": function (module, exports, _webpack_require) {
        console.log("index module");
        var a = _webpack_require("./src/a.js");
        console.log(a);
    },
})