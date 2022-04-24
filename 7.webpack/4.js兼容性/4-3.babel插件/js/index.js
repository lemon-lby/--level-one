// class A {
//     a = 1;
//     constructor() {
//         this.b = 3;
//     }
// }





// function Print() {
//     console.log(this.loginId);
// }
// const obj = {
//     loginId: "abc"
// };
// obj::Print(); //相当于 ：Print.call(obj);





const obj = {
    foo:{
        bar:{
            baz:42,
        },
    },
};



const baz = obj?.foo?.bar?.baz; //42

const safe = obj?.qux?.baz; //undefined

console.log(baz,safe);