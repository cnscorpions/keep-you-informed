const fetch = require("node-fetch")
const cheerio = require('cheerio')
const { listOfNewsSource } = require("./source")

/**
 * 获取数据
 * @param {*} url 
 * @param {*} headers 
 */
const fetchData = async (url, headers) => {
    const response = await fetch(url, { method: 'GET', headers });
    const body = await response.text();
    // console.log(body)
    return body;
}

/**
 * 从网页提取信息
 * @param {*} html 
 */
const extractData = (html, rule) => {
    const $ = cheerio.load(html);
    const nodeList = $(rule);
    let arr = [];
    nodeList.each(function (index, elem) {
        arr[index] = $(this).text();
      });
    return arr
}

(async () => {
    try {
        const { url, headers, rule } = listOfNewsSource.weibo;
        const html = await fetchData(url, headers)
        const data = extractData(html, rule)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
})();
