new Promise((resolve, reject) => {
    resolve(1);
}).then((res) => {
    console.log(res);
    return 2;
}).catch((err) => {
    return 3;
}).then((res)=>{
    console.log(res);
})

//fulfilled 1
//1
//fulfilled 2
//2
//fulfilled undefined