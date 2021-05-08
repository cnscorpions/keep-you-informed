/**
 * 解析知乎
 * @param {*} param 
 * @returns 
 */
function parseZhihu(param) {
    const { data, detail_text} = JSON.parse(param)
    const postsData = data.map(item => item.target)
    const render = ({ title, id }) => `${title} [↗️](https://www.zhihu.com/question/${id})`;
    return postsData.map(item => render(item));
}

/**
 * 解析B站
 * @param {*} param 
 * @returns 
 */
function parseBilibili(param) {
    const { list } = JSON.parse(param)
    const render = (text, type) => {
        switch (type) {
            case 1:
                return text;
                break;
            case 4:
                return `${text} ⬆️`;
                break;
            case 5:
                return `${text} 🔥`;
                break;
            default:
                break;
        }
    }
    return list.map(item => render(item.keyword, item.word_type))
    
}

/**
 * 解析百度
 * @param {*} param 
 * @returns 
 */
function parseBaiduHot(param) {
    const { result: { topwords } } = JSON.parse(param)
    return topwords.map(item => item.keyword)
}

function parseGoogle(param) {
    const { default: {trendingSearchesDays: { 0: {trendingSearches }}}} = JSON.parse(param)
    return trendingSearches.map(item => item.title.query);
}

module.exports = {
    parseZhihu,
    parseBilibili,
    parseBaiduHot,
    parseGoogle
}
