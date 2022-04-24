//将obj2的数据覆盖到obj1，并且会对obj1产生改动然后返回obj1
// const obj = Object.assign(obj1, obj2);


//这样写不会对对象产生变化
// const obj = Object.assign({}, obj1, obj2);



// Objcet.getOwnPropertyNames:
const obj ={
    a:1,
    b:2,
    c:3,
    0:"a",
    2:"a"
};
console.log(Object.getOwnPropertyNames(obj));