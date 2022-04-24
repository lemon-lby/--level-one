function getValues() {
    const inpValues = document.querySelectorAll("input");
    const inps = [];
    for (let i = 0; i < inpValues.length; i++) {
        inps.push(+inpValues[i].value);
    }
    return inps;
}

const btn = document.querySelector("button");
btn.onclick = function () {
    const numbers = getValues();
    spanmax.innerHTML = Math.max(...numbers);
    spanmin.innerHTML = Math.min(...numbers);
}