/**
 * 该模块用于将地图显示到页面上
 */
import * as map from "./map.js"

const divContainer = document.getElementById("g");
const pieceWidth = 45; //每一个小块的宽度
const pieceHeight = 45; //每一个小块的高度

/**
 * 设置div的宽度高度
 */
function setDivContainer() {
    divContainer.style.width = pieceWidth * map.colNumber + "px";
    divContainer.style.height = pieceHeight * map.rowNumber + "px";
}


/**
 * 当前位置是否是正确位置
 * @param {*} row 
 * @param {*} col 
 */
function isCorrect(row, col) {
    for (let i = 0; i < map.correct.length; i++) {
        const point = map.correct[i]; //拿到其中一个正确位置的坐标
        if (point.row === row && point.col === col) {
            return true;
        }
    }
    // return map.correct.find(p => p.row === row && p.col === col) !== undefined;
}






/**
 * 根据行和列创建一个div加入到容器中
 * @param {*} row 
 * @param {*} col 
 */
function setOnePiece(row, col) {
    const value = map.content[row][col];
    const div = document.createElement("div");
    div.className = "item";
    //调整div的位置
    div.style.left = col * pieceWidth + "px";
    div.style.top = row * pieceHeight + "px";

    //当前位置是否是正确位置
    const correct = isCorrect(row, col);

    if (value === map.PLAYER) {
        div.classList.add("player");
    } else if (value === map.WALL) {
        div.classList.add("wall");
    } else if (value === map.BOX) {
        if (correct) {
            div.classList.add("correct-box");
        } else {
            div.classList.add("box");
        }
    } else {
        //空白
        if (correct) {
            div.classList.add("correct");
        } else {
            return;
        }
    }
    divContainer.appendChild(div);
}




/**
 * 根据地图在页面上设置相应的元素
 */
function setContent() {
    //1.清空容器
    divContainer.innerHTML = "";
    //2.遍历地图内容，设置元素
    for (let row = 0; row < map.rowNumber; row++) {
        for (let col = 0; col < map.colNumber; col++) {
            setOnePiece(row, col);
        }
    }
}



/**
 * 该函数用于显示地图
 */
export default function () {
    //1.设置div的宽高
    setDivContainer();
    //2.显示地图中的内容
    setContent();
}