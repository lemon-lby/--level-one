




/**
 * 创建一个元素
 * @param {*} name 元素的名称 
 * @param {*} container 元素的父元素
 * @param {*} content 元素的内容
 */
function createElement(name = "div", container = document.getElementById("container"), content) {
    const ele = document.createElement(name);
    if (content) {
        ele.innerHTML = content;
    }
    container.appendChild(ele);
}
// createElement("div",document.getElementById("container"),"dadas");
createElement(undefined, undefined, "dadas");





function test(name="button",container=document.getElementById("container"),content){
    const ele = document.createElement(name);
    if(content){
        ele.innerHTML = content;
    }
    container.appendChild(ele);
}
test(undefined,undefined,"按钮");