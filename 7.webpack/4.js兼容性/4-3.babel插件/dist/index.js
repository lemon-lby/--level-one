"use strict";

var _obj$foo, _obj$foo$bar, _obj$qux;

// class A {
//     a = 1;
//     constructor() {
//         this.b = 3;
//     }
// }
// function Print() {
//     console.log(this.loginId);
// }
// const obj = {
//     loginId: "abc"
// };
// obj::Print(); //相当于 ：Print.call(obj);
var obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
};
var baz = obj === null || obj === void 0 ? void 0 : (_obj$foo = obj.foo) === null || _obj$foo === void 0 ? void 0 : (_obj$foo$bar = _obj$foo.bar) === null || _obj$foo$bar === void 0 ? void 0 : _obj$foo$bar.baz; //42

var safe = obj === null || obj === void 0 ? void 0 : (_obj$qux = obj.qux) === null || _obj$qux === void 0 ? void 0 : _obj$qux.baz; //undefined