export const a = 1; //导出a,值为1，类似于CommonJS中的exports.a= 1;
export function test() {} //导出test,值为一个函数，类似于CommonJS中的exports.test= function(){};
export class Person {}
export const name = "dasf";



var age = 18;
var sex = 1;
export {
    age ,
    sex
}; //将age变量的名称作为导出的名称，age变量的值作为导出的值