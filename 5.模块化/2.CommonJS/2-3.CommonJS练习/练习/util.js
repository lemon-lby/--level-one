module.exports = {
    sortRandom: function (arr) {
        arr.sort((a, b) => Math.random() - 0.5);
    },
    print(player) {
        let str = "";
        for (const item of player) {
            str += item.toString() + "     ";
        }
        console.log(str);
    }
}