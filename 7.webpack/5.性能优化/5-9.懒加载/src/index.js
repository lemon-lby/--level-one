const btn = document.querySelector("button");

btn.onclick = async function () {
    //动态加载
    //import 是ES6的草案
    //浏览器会使用JSOP的方式去远程读取一个JS模块
    //import()会返回一个promise
    // const {
    //     chunk
    // } = await import("lodash-es");
    const {chunk} = await import("./util")
    const result = chunk([2, 3, 4, 5, 76], 2);
    console.log(result);
}