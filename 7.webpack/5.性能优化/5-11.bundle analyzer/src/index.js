import $ from "jquery"
import {
    chunk
} from "lodash-es"

$(".red").click(async function () {
    const {
        chunk
    } = await import("./util");
    console.log(chunk([1, 2, 3, 4, 5], 2))
})