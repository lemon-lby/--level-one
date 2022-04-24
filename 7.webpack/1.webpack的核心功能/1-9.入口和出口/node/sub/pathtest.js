//该对象提供了大量的路径处理的函数

const path = require("path");


require("path");

// var result = path.resolve("./", "child", "abc", "123");
var result = path.resolve(__dirname,"src")
console.log(result);