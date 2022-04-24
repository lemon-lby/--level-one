// async function m() {
//     return 123
// }
// console.log(m());


// async function m(){
//     return new Promise()
// }
// 若自己写的返回promise。则相当于没写async






function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
};
// delay(1000).then(() => {
//     console.log();
// })   改成下面的写法

//立即执行函数
(async function test() {
    try {
        await delay(1000);
        console.log("成功");
    } catch {
        console.log("失败");
    }

})();

//箭头函数
(async () => {
    await delay(1000);
    console.log("输出");
})();