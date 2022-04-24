"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.of.js");

new Promise(function (resolve) {
  resolve();
});
Array.of(3, 4, 5);
var arr = [1, 2, 3, 4, 5];

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var item = _arr[_i];
  console.log(item);
}

var a = 1;