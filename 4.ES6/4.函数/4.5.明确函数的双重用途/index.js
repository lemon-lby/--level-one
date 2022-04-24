function Person(firstName, lastName) {

    //判断是否是使用new的方式来调用的函数

    // 过去的判断方式
    // if (!(this instanceof Person)) {
    //     throw new Error("没使用new");
    // }
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    if (new.target === undefined) {
        throw new Error("该函数没有使用new来调用");
    }
}
const p1 = new Person("张", "三");
console.log(p1);

const p2 = Person("李", "四");
console.log(p2);

const p3 = Person.call(p1, "王", "五");
console.log(p3);