const user = {
    name: "d",
    age: 11,
    sex: "男",
    address: {
        province: "山西",
        city: "临汾"
    }
}



// let name, age, sex, address;
// name = user.name;

// age = user.age;

// sex = user.sex;

// address = user.address;


// let name, age, sex, address;
// ({name,age,sex,address} = user);

//先定义四个变量，然后从对象中读取同名属性，放到变量中；
let {
    name = 2,
        age,
        sex: gender,
        address: {
            province,
            city
        },
        abc = 1,

} = user;

console.log(name, age, gender, province,city, abc);