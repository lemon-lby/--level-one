import NumberTimer from "../util/number";
import AppendNumber from "./AppendNumber";

var n = new NumberTimer(100);
n.onNumberCreated = function (n, isPrime) {
    AppendNumber(n, isPrime);
}

//该部分用于注册事件
var isStart = false; //默认没有开始
window.onclick = function () {
    if (isStart) {
        n.stop();
        isStart = false;
    } else {
        n.start();
        isStart = true;
    }

}