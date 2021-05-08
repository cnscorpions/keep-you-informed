/**
 * 解析知乎
 * @param {*} param 
 * @returns 
 */
function parseZhihu(param) {
    const { data, detail_text} = JSON.parse(param)
    const postsData = data.map(item => item.target)
    return postsData.map(item => item.title);
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

module.exports = {
    parseZhihu,
    parseBilibili
}
