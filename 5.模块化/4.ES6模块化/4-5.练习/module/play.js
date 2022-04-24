import * as map from "./map.js";

/**
 * 按照指定的方向，让玩家移动一步
 * @param {*} direction left,right,up,down
 */
export function playerMove(direction) {
    var playerPoint = getPlayerPoint(); //得到玩家位置

    var nextInfo = getNextInfo(playerPoint.row, playerPoint.col, direction);

    //什么情况下不能移动
    if (nextInfo.value === map.WALL) {
        //下一个位置是墙
        return false;
    }

    //能移动
    if (nextInfo.value === map.SPACE) {
        //下一个位置是空白
        exchange(playerPoint, nextInfo);
        return true;
    } else {
        //下一个位置是箱子
        //获取箱子的下一个位置
        var nextNextInfo = getNextInfo(nextInfo.row, nextInfo.col, direction);
        if (nextNextInfo.value === map.SPACE) {
            //可以移动
            exchange(nextInfo, nextNextInfo);
            exchange(playerPoint, nextInfo);
            return true;
        } else {
            return false;
        }
    }
}


/**
 * 根据当前游戏内容判断游戏是否结束
 */
export function isWin() {
    //是否每个正确位置都有箱子
    for (var i = 0; i < map.correct.length; i++) {
        var point = map.correct[i];
        if (map.content[point.row][point.col] !== map.BOX) {
            //该正确位置没有箱子
            return false;
        }
    }
    return true;
}

function exchange(point1, point2) {
    const temp = map.content[point1.row][point1.col];
    map.content[point1.row][point1.col] = map.content[point2.row][point2.col];
    map.content[point2.row][point2.col] = temp;
}

/**
 * 获取玩家位置
 */
function getPlayerPoint() {
    for (let row = 0; row < map.rowNumber; row++) {
        for (let col = 0; col < map.rowNumber; col++) {
            if (map.content[row][col] === map.PLAYER) {
                return {
                    row: row,
                    col: col
                }
            }
        }
    }
}



/**
 * 得到指定位置在指定方向上的下一个位置的信息（第几行第几列 ，内容是啥）
 * @param {*} row 指定的行
 * @param {*} col 指定的列
 * @param {*} direction 
 */
function getNextInfo(row, col, direction) {
    if (direction === "left") {
        return {
            row: row,
            col: col - 1,
            value: map.content[row][col - 1]
        }
    } else if (direction === "right") {
        return {
            row: row,
            col: col + 1,
            value: map.content[row][col + 1]
        }
    } else if (direction === "up") {
        return {
            row: row - 1,
            col: col,
            value: map.content[row - 1][col]
        }
    } else {
        return {
            row: row + 1,
            col: col,
            value: map.content[row + 1][col]
        }
    }
}