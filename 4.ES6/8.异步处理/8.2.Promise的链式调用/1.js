const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

const pro2 = pro1.then((data) => {
    console.log(data);
    return data + 1;
});

const pro3 = pro2.then((data) => {
    console.log(data);
})

console.log(pro1, pro2, pro3);

setTimeout(() => {
    console.log(pro1, pro2, pro3);
}, 2000);







// pending     pending       pending 
// 1
// 2
// fulfilled<1>      fulfilled<2>     fulfilled<undefined>      