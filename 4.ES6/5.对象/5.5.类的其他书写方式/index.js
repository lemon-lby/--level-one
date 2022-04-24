//可计算的成员名
const printName = "print"
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    //创建一个age属性，并给它加上getter，读取该属性时，会运行该函数
    getAge() {
        return this._age + "岁";
    }
    //创建一个age属性，并给它加上setter，给该属性赋值时，会运行该函数
    setAge(age) {
            if (age < 0) {
                age = 0;
            } else if (age > 1000) {
                age = 1000;
            }
            this._age = age;

        }
        [printName]() {
            console.log(`【种类】：${this.type}`);
            console.log(`【名字】：${this.name}`);
            console.log(`【年龄】：${this.age}`);
            console.log(`【性别】：${this.sex}`);
        }
};

const a = new Animal("猫", "七七", 3, "female");
a[printName]();









//字段初始化器

class test {
    static a = 1;
    b = 2;
    c = 3;
    // constructor(){
    //     this.a = 1;
    //     this.b = 2;
    //     this.c = 3;
    // }
}

const t = new test();
console.log(t);





//装饰器

class test1 {

    @Obsolete
    print() {
        console.log("print方法")
    }
}

function Obsolete(target, methodName, description){
    //function test1
    //print
    //{value:function print(){},...}
    // console.log(target, methodName, description);
    const oldFunc = description.value;
    description.value = function(...args){
        console.warn(`${methodName}方法已过期`);
        oldFunc.apply(this,args);
    }
}