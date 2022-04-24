//全局污染
// let a = "dsa";

// console.log(window.a);


//数据覆盖

// let b = "1";
// let b = "2";//检查到当前作用域(全局作用域)已经声明了变量

// let b = 123;
// function test(){
//     let b = 456;
//     console.log(b);
// }
// test();//不同作用域内可以重复声明



// let a = 123;//全局作用域
// {
//     let a = 456;//块级作用域
//     console.log(a);//使用的是块级作用域中的a
// }
// console.log(a);


// if (Math.random() < 0.5) {
//     let a = 'abc';//定义在当前作用域
//     console.log(a);//当前块级作用域中的a
// } else {
//     console.log(a);
// }
// console.log(a);


// console.log(a);
// let a = "123";


var div = document.getElementById("divButtons");
for (let i = 1; i <= 10; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = "按钮" + i;
    div.appendChild(btn);
    btn.onclick = function () {
        console.log(i); //使用的是当前作用域中的i
    }
}