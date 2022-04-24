// const text1 = "hello";


// const text2 = "world";

// const text = myTag `111${text1},${text2}。`
// //相当于：
// // text = myTag(["111",",","。"]);
// function myTag(parts) {
//     const values = Array.prototype.slice.apply(arguments).slice(1);
//     let str = "";
//     for (let i = 0; i < values.length; i++) {
//         str += parts[i] + values[i];
//         if (i === values.length - 1) {
//             str += parts[i + 1];
//         }
//     }
//     return str;
// }
// console.log(text);



var text = String.raw`abc\ndef`;
console.log(text);