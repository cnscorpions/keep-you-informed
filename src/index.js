const fetch = require("node-fetch")
const cheerio = require('cheerio')
const schedule = require('node-schedule');
const { sendMD } = require("./dingding")
const { listOfNewsSource } = require("./source")
const { time } = require("../config")

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

/**
 * 休眠函数
 * @param {*} ms 
 * @returns 
 */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
    try {
        for (let item of Object.keys(listOfNewsSource)) {
            const { text, url, headers, rule, fn, start = 0, end = 10 } = listOfNewsSource[item];
            const html = await fetchData(url, headers)
            const data = extractData(html, rule, fn);
            console.log(`${text}消息`, data)
            // 休眠500ms
            await sleep(500)
            const newArr = data.slice(start, end);
            let str = `## ${text}榜单 \n`;
            newArr.forEach((el, index) => {
                str +=`${index + 1}. ${el} \n`;
            })
            sendMD(`${text}消息`, str)
        }
    } catch (error) {
        console.error(error)
    }
}

// 默认每天北京时间，8点整消息提醒
const { hour, minute, second, tz } = time;
const rule = new schedule.RecurrenceRule();
rule.hour = hour || 8;
rule.minute = minute || 0;
rule.second = second || 0;
rule.tz = tz || 'Asia/Shanghai';

// 举例
// */10 * * * * * 每10秒

const job = schedule.scheduleJob(rule, async function () {
    console.log(new Date(), "task starts")
    await main();
    console.log(new Date(), "task is over")
});
