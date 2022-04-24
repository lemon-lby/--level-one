import {
    getProvinces
} from "../util/areaService";

console.log(getProvinces().then(resp => console.log(resp))) ;