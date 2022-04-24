export
/**
 * 给某个dom元素应用一个样式
 * @param {*} dom dom元素
 * @param {*} styles 样式对象
 */
function applyStyles(dom, styles) {
    for (const key in styles) {
        const value = styles[key];
        dom.style[key] = value;
    }
}