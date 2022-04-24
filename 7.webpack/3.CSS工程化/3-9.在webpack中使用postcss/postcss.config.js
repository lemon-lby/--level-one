module.exports = {
    map: false,
    plugins: {
        "postcss-preset-env": {
            stage: 0, //草案阶段的语法也需要转换
            preserve: false
        },
        // "postcss-apply": {},
        // "postcss-color-function": {}
    }
}