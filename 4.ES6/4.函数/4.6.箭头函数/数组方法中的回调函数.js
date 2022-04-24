const numbers = [3, 4, 5, 6, 7, 8, 9];
const result = numbers.filter(num => num % 2 !== 0).map(num => num * 2).reduce((a, b) => a + b);

console.log(result);