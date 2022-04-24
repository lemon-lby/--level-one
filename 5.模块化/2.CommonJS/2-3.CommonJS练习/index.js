const pokers = []; //扑克的数组
const Poker = require("./poker.js"); //导入扑克牌的构造函数

//构造一副扑克牌
for (let i = 1; i <= 13; i++) {
    for (let j = 1; j <= 4; j++) {
        pokers.push(new Poker(j, i));
    }
}
pokers.push(new Poker(null, 14));
pokers.push(new Poker(null, 15));

// for (const item of pokers) {
//     console.log(item.toString());
// }

//打乱扑克牌
const util = require("./util.js");
util.sortRandom(pokers);
// for (const item of pokers) {
//     console.log(item.toString());
// }

//发牌
const player1 = pokers.slice(0, 17);
const player2 = pokers.slice(17, 34);
const player3 = pokers.slice(34, 51);

const desk = pokers.slice(51);

console.log("玩家1:");
util.print(player1);
console.log("玩家2:");
util.print(player2);
console.log("玩家3:");
util.print(player3);
console.log("桌面:");
util.print(desk);