/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/a.js":
/*!************************!*\
  !*** ./src/utils/a.js ***!
  \************************/
/***/ (() => {

    

/***/ }),

/***/ "./src/utils/b.js":
/*!************************!*\
  !*** ./src/utils/b.js ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./src/utils sync recursive \\.js$":
/*!*******************************!*\
  !*** ./src/utils/ sync \.js$ ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.js": "./src/utils/a.js",
	"./b.js": "./src/utils/b.js",
	"./index.js": "./src/utils/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/utils sync recursive \\.js$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// const module = document.getElementById("txt").ariaValueMax;

// if (Math.random() < 0.5) {
//     const a = require("./utils/" + module);//动态依赖
//     console.log(a);
// }


//仅在webpack运行过程中有效
//参数1：目录，整个目录中的模块需要添加到打包结果
//参数2：是否递归寻找子目录，如果为true，表示需要寻找子目录
//参数3：正则表达式，凡是匹配的才会加入打包结果
const context = __webpack_require__("./src/utils sync recursive \\.js$");
console.log(context.keys());
})();

/******/ })()
;
//# sourceMappingURL=main.js.map