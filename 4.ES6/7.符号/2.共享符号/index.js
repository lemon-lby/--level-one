const symbolFor = (() => {
    const symbols = {};
    return function (name) {
        if (!symbols[name]) {
            symbols[name] = Symbol(name);
        }
        console.log(symbols);
        return symbols[name];
    }
})();


const syb1 = symbolFor("abc");
const syb2 = symbolFor("dasd");