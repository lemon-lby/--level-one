class Animal {
    constructor(type, name, age, sex) {
        if (new.target === Animal) {
            throw new typeError("不能直接创建Animal的对象，应该通过子类创建");
        }
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
    jiao() {
        console.log("动物怎么叫？");
    }
};

class Dog extends Animal {
    constructor(name, age, sex) {
        super("犬类", name, age, sex);
        //子类特有的属性
        this.abc = 123;
        this.loves = "骨头";
    }
    //同名方法，会覆盖父类
    jiao() {
        console.log("汪汪");
    }
    print() {
        //调用父类的print
        super.print();
        //子类特有的代码
        console.log(`【爱好】：${this.loves}`);
    }
}


const d = new Dog("das", 3, "公");
d.jiao();
d.print();
console.log(d);









//下面的代码逻辑有问题

// const a = new Animal("犬类", "das", 3, "公");
// console.log(a);