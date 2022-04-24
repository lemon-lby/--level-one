const text = "hello world!!";

const reg = /w\w+/y;
reg.lastIndex = 6;
console.log(reg.test(text));


