//Promise.resolve
const pro = Promise.resolve(1);
console.log(pro);


//Promise.all  //所有任务都成功则成功，有一个失败则失败,有一个挂起则挂起
const pro1 = Promise.all([Promise.resolve(1), Promise.resolve(2),Promise.resolve(3)]);
setTimeout(() => {
    console.log(pro1);
}, 1000);

const pro2 = Promise.all([Promise.resolve(1), Promise.reject(2),Promise.resolve(3)]);
setTimeout(() => {
    console.log(pro2);
}, 1000);




//Promise.any   //有一个任务完成则完成,全部失败则失败

const pro3 = Promise.any([Promise.resolve(1), Promise.reject(2),Promise.resolve(3)]);
setTimeout(() => {
    console.log(pro3);
}, 1000);






//Promise.allSettled       //所有任务都必须有结果
const pro4 = Promise.allSettled([Promise.resolve(1), Promise.reject(2),Promise.resolve(3)]);
setTimeout(() => {
    console.log(pro4);
}, 1000);




//Promise.race     //所有任务都必须有结果
const pro5 = Promise.race([Promise.resolve(1), Promise.reject(2),Promise.resolve(3)]);
setTimeout(() => {
    console.log(pro5);
}, 1000);
