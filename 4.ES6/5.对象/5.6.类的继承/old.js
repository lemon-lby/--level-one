function Animal(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}

//定义实例方法(原型方法)
Animal.prototype.print = function () {
    console.log(`【种类】：${this.type}`);
    console.log(`【名字】：${this.name}`);
    console.log(`【年龄】：${this.age}`);
    console.log(`【性别】：${this.sex}`);
}

function Dog(name,age,sex){
    Animal.call(this,"犬类",name,age,sex);
}
Object.setPrototypeOf(Dog.prototype,Animal.prototype);
const d = new Dog("das",3,"公");
console.log(d);