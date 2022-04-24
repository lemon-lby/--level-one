new Promise((resolve, reject) => {
    throw new Error(1);
}).then((res) => {
    console.log(res);
    return new Error(2);
}).catch((err) => {
    throw err;
    return 3;
}).then((res) => {
    console.log(res);
})

// pro1 rejected Error(1)
// pro2 rejected Error(1)
// pro3 rejected Error(1)
// pro4 rejected Error(1)