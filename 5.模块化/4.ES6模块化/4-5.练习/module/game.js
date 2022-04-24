import {
    isWin,
    playerMove
} from "./play.js"

import showUI from "./ui.js"
showUI();

let over = false;
//完成整个游戏
window.onkeydown = function (e) {
    if (over) {
        return;
    }
    var result = false;
    if (e.key === "ArrowUp") {
        result = playerMove("up");
    }
    if (e.key === "ArrowDown") {
        result = playerMove("down");
    }
    if (e.key === "ArrowLeft") {
        result = playerMove("left");
    }
    if (e.key === "ArrowRight") {
        result = playerMove("right");
    }
    if (result) {
        showUI();
        if (isWin()) {
            console.log("游戏胜利");
            over = true;
        }
    }
}