module.exports = class MyPlugin {
    apply(compiler) {
        //在这里注册事件，类似于window.onload $(function(){})
        compiler.hooks.done.tap("MyPlugin-done", function (compilation) {
            //事件处理函数
            console.log("编译完成");
        });
        // compiler.hooks.done.tapAsync(name, function (compilation,cb) {
        //     //事件处理函数
        //     setTimeout(() => {
        //         cb()
        //     }, 3000);
        // })
        // compiler.hooks.done.tapPromise(name, async function (compilation) {
        //     //事件处理函数
        // })
    }
}