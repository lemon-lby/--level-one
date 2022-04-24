const symbolFor = (() => {
    const symbols = {};
    return function (name) {
        if (!symbols[name]) {
            symbols[name] = Symbol(name);
        }
        console.log(symbols);
        return symbols[name];
    }
})();


const syb1 = symbolFor("abc");
const syb2 = symbolFor("dasd");








// Symbol.isConcatSpreadable

const arr = [1];
const arr2 = [5, 6, 7, 8];
arr2[Symbol.isConcatSpreadable] = false;
const result = arr.concat(56, arr2);
console.log(result);




//Symbol.isConcatSpreadable
const obj = {
    a: 1,
    b: 2
}
obj[Symbol.toPrimitive] = function(){
    return 2;
}
console.log(obj * 123);