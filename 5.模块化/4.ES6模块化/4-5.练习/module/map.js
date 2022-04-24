//仅用于记录地图中的内容（箱子，玩家，墙，空白）
/**
 * 0.空白
 * 1.玩家
 * 2.墙
 * 3.箱子
 */
export const SPACE = 0;
export const PLAYER = 1;
export const WALL = 2;
export const BOX = 3;

export const content = [
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 0, 1, 0, 2, 0, 0],
    [0, 0, 2, 0, 3, 0, 2, 0, 0],
    [2, 2, 2, 0, 0, 0, 2, 2, 2],
    [2, 0, 0, 0, 3, 0, 0, 0, 2],
    [2, 0, 3, 3, 3, 3, 3, 0, 2],
    [2, 0, 0, 0, 3, 0, 0, 0, 2],
    [2, 2, 0, 3, 3, 3, 0, 2, 2],
    [0, 2, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 3, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
];

/**
 * 正确位置
 */
export const correct = [{
        row: 3,
        clo: 3
    },
    {
        row: 4,
        clo: 4
    },
    {
        row: 5,
        clo: 2
    },
    {
        row: 5,
        clo: 3
    },
    {
        row: 5,
        clo: 4
    },
    {
        row: 5,
        clo: 5
    },
    {
        row: 5,
        clo: 6
    },
    {
        row: 6,
        clo: 4
    },
    {
        row: 7,
        clo: 4
    },
    {
        row: 8,
        clo: 4
    },
    {
        row: 9,
        clo: 4
    },
    {
        row: 10,
        clo: 4
    },
]

//总列数
export const colNumber = content[0].length;
//总行数
export const rowNumber = content.length;