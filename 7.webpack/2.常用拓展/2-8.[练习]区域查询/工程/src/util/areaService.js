/**
 * 得到所有省份
 */
export async function getProvinces() {
    return await fetch("http://yuanjin.tech:5100/api/local").then(resp => resp.json())
}