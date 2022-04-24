const text = "";
console.log("字符串长度", text.length);
console.log("使用正则测试", /^.$/u.test(text));


//判断字符串char是32位还是16位
function is32bit(char, i) {
    //如果码点大于了16位二进制的最大值，则是32位的
    return char.codePointAt(i) > 0xffff
}

//得到一个字符串码点的真实长度
function getLengthOfCodePoint(str) {
    var len = 0;
    for (let i = 0; i < str.length; i++) {
        //i在索引码元
        if(is32bit(str,i)){
            //当前字符串，在i这个位置,占用了两个码元
            i++;
        }
        len++;
    }
    return len;
}
console.log(is32bit("古是否是32位的", "古", 0));
console.log("asdasd的码点长度",getLengthOfCodePoint("asdasd"));