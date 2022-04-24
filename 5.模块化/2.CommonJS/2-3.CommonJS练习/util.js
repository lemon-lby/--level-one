module.exports = {
    sortRandom: function (arr) {
        arr.sort((a, b) => {
            return Math.random() - 0.5
        })
    },
    print: function (player) {
        let str = "";
        for (const item of player) {
            str += item.toString() + "     ";
        }
        console.log(str);
    }
}