// function sum(args) {
//     let sum = 0;
//     for(let i = 0;i<args.length;i++){
//         sum += args[i];
//     }
//     return sum;
// }


// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }



function sum(...args) {
    // args收集了所有的参数，形成了一个数组

    console.log(args);
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(1, 2, 2, 3));




function test(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(test(1,2,3,4));