// class Animal {
//     constructor(type, name, age, sex) {
//         this.type = type;
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//     }
//     print() {
//         console.log(`【种类】：${this.type}`);
//         console.log(`【名字】：${this.name}`);
//         console.log(`【年龄】：${this.age}`);
//         console.log(`【性别】：${this.sex}`);
//     }
// }
// const a = new Animal("狗", "旺财", 3, "公");
// a.print();


// console.log(a);



class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【名字】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
};
const a = new Animal("猫","七七",3,"female");
a.print();