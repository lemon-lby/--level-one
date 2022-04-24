const Poker = require("./poker.js");
const util = require("./util.js");

const pokers = [];
for (let i = 1; i <= 13; i++) {
    for (let j = 1; j <= 4; j++) {
        pokers.push(new Poker(j, i));
    }
}
pokers.push(new Poker(null, 14));
pokers.push(new Poker(null, 15));

util.sortRandom(pokers);


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