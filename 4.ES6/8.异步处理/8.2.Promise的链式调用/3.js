new Promise((resolve, reject) => {
    resolve();
}).then((res) => {
    console.log(res.toString());//报错
    return 2;
}).catch((err) => {
    return 3;
}).then((res) => {
    console.log(res);
})

//pro1 fulfilled undefined
//pro2 rejected xxxx
//pro3 fulfilled 3
//pro4 fulfilled undefined