import {
    applyStyles
} from "./css/util.js"

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");


const style = {
    background: "#f40",
    width: "400px",
    height: "400px",
    border: "1px solid"
}

applyStyles(div1, style);
applyStyles(div2, style);