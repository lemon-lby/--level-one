const numbers = ["a", "b", "c", "d", [1, 2, 3, 4]];

// const {
//     0: n1,
//     1: n2
// } = numbers;

//等效于

const [n1, , , n4, n5] = numbers;
console.log(n1, n4,n5);