const axios = require("axios")
const cheerio = require("cheerio");
/**
 * 得到所有电影的html字符串
 */
async function getMoviesHtml() {
    const resp = await axios.get("https://movie.douban.com/chart");
    return resp.data;
}

async function getMoviesData() {
    const html = await getMoviesHtml();
    const $ = cheerio.load(html);
    var trs = $("tr.item");
    var movies = [];
    for (let i = 0; i < trs.length; i++) {
        const tr = trs[i];
        //分析每个tr的数据，得到一个电影对象
        var m = getMovie($(tr));
        movies.push(m);
    }
    return movies;
}

/**
 * 分析tr,得到一部电影对象
 * @param {*} tr 
 */
function getMovie(tr) {
    var name = tr.find("a").text();
    name = name.replace(/\s/g, "");
    name.split("/")[0];

    // return name;

    var imgSrc = tr.find("a.nbg img").attr("src");
    var detail = tr.find("p").text();
    return {
        name,
        imgSrc,
        detail
    }
}

module.exports = getMoviesData;