const pro = new Promise((resolve, reject) => {
    console.log("开始百米赛跑");
    const duration = Math.floor(Math.random() * 5);

    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve(duration);
        } else {
            reject("脚扭了");
        }
    }, duration);
});

pro.then(
    (data) => {
        console.log(`成功了,跑了${data}秒`)
    },
    (reason) => {
        console.log(`失败了,因为${reason}`)
    }
)