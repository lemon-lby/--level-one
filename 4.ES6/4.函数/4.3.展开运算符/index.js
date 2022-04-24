function sum(...args) {
    // args收集了所有的参数，形成了一个数组

    console.log(args);
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}


const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2, arr1 === arr2);


const obj1 = {
    name: "1",
    age: 11,
    address: {
        city: "山西",
        contray: "china"
    }
}
const obj2 = {
    ...obj1,
    address: {
        city: "陕西",
        contray: "China"
    }
}
console.log(obj2,obj1.address===obj2.address);