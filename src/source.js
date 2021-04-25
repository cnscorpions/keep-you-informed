const { zhihuFunc } = require("./zhihu")

const listOfNewsSource = {
    weibo: {
        text: "微博",
        url: "https://s.weibo.com/top/summary?cate=realtimehot",
        headers: {
            'Host': 's.weibo.com',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            'Connection': 'keep-alive',
            'Referer': 'https://s.weibo.com/top/summary?cate=realtimehot',
            'Cookie': 'SINAGLOBAL=314790566767.6465.1613819517863; SUB=_2AkMXAXjwf8NxqwJRmPATxW_rbYhzyQDEieKhXYkrJRMxHRl-yT9jqnUPtRB6PIFWH64Rho5KgGhTp5M4QwTmrXg8Mp3_; UOR=www.google.com,weibo.com,www.google.com; _s_tentry=-; Apache=9564555420441.713.1619335603112; ULV=1619335603118:12:5:1:9564555420441.713.1619335603112:1619065398544',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        },
        rule: "ul.list_a li span",
        fn: null
    },
    zhihu: {
        text: "知乎",
        url: "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=100",
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        },
        rule: null,
        fn: zhihuFunc
    }
}

module.exports = {
    listOfNewsSource
}
