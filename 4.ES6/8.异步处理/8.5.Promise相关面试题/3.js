const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});
const promise2 = promise1.catch(() => {
    return 2;
})

console.log("promise1", promise1);
console.log("promise2", promise2);


setTimeout(() => {
    console.log("promise1", promise1);
    console.log("promise2", promise2);
}, 2000);


// pro1 pending
// pro2 pending


// pro1 fulfilled undefined
// pro2 fulfilled undefined