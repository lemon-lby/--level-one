const obj = {
    count: 0,
    start: function () {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000)
    },
    regEvent: function () {
        window.onclick = () => {
            console.log(this.count);
        }
    },
    print: function () {
        console.log(this.count);
    }

}
// obj.start();
// obj.regEvent();
obj.print();






// const isOdd = function (num) {
//     return num % 2 !== 0;
// }

// const isOdd = (num) => {
//     return num % 2 !== 0;
// }
// const isOdd = num => {
//     return num % 2 !== 0;
// }
const isOdd = num => num % 2 !== 0;

console.log(isOdd(3));
console.log(isOdd(4));


const sum = (a, b) => ({
    a: a,
    b: b,
    sum: a + b
})