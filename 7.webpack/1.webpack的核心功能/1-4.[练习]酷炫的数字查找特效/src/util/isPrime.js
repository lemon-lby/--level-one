/**
 * 判断n是否是素数
 * @param {*} n 
 */
export default function (n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n - 1; i++) {
        if (n % i === 0) {
            //发现2到n-1之间，有一个数能整除n
            return false;
        }
    }
    return true;
}