// let count = 0; //需要隐藏的内部实现

// //要暴露给外部的接口


// //exports = {}
// module.exports.getNumber = function getNumber() {
//     count++;
//     return count;
// };
// /*  
//     exports:{
//         getNumber : fn
//     }
// */


// module.exports.abc = 123;
// /*  
//     exports:{
//         getNumber : fn,
//         abc:123
//     }
// */

let count = 0;
module.exports = {
    getNumber: function () {
        count++;
        return count;
    }
}