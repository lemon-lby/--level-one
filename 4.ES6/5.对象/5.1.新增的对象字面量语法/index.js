//成员速写
function createUser(loginId, loginPwd, nickName) {
    return {
        loginId,
        loginPwd,
        nickName,
        id: Math.random()
    }
}
console.log(createUser("dad", "1234", "aaa"));




//方法速写
const user = {
    name: "da",
    age: 100,
    // sayHello:function(){
    //     console.log(this.name,this.age);

    sayHello() {
        console.log(this.name, this.age);
    }
}



//计算属性名

const prop1 = "name";
const prop2 = "age";
const prop3 = "sayhello";

const user1 = {
    [prop1]: "da",
    [prop2]: 100,
    [prop3]() {
        console.log(this[prop1], this[prop2]);
    }
}
user1[prop3]();