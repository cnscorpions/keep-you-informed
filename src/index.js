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
const extractData = (html, rule, fn) => {
    const $ = cheerio.load(html);
    // 是否有解析规则
    if (rule) {
        const nodeList = $(rule);
        let arr = [];
        nodeList.each(function (index, elem) {
            arr[index] = $(this).text();
            });
        return arr
    } else {
        if (fn) return fn(html)
    }
}

(async () => {
    try {
        // const { url, headers, rule }
        for (let item of Object.keys(listOfNewsSource)) {
            const { url, headers, rule, fn } = listOfNewsSource[item];
            const html = await fetchData(url, headers)
            const data = extractData(html, rule, fn);
            console.log(item, data)
        }
    } catch (error) {
        console.error(error)
    }
})();
