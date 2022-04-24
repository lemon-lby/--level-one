// function print(user) {
//     console.log(`姓名:${user.name}`);
//     console.log(`年龄:${user.age}`);
//     console.log(`性别:${user.sex}`);
//     console.log(`省份:${user.address.province}`);
//     console.log(`城市:${user.address.city}`);
// }


function print({
    name,
    age,
    sex,
    address: {
        province,
        city
    }
}) {
    console.log(`姓名:${name}`);
    console.log(`年龄:${age}`);
    console.log(`性别:${sex}`);
    console.log(`省份:${province}`);
    console.log(`城市:${city}`);
}
const user = {
    name: "d",
    age: 11,
    sex: "男",
    address: {
        province: "山西",
        city: "临汾"
    }
}
print(user);