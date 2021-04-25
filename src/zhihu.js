/**
 * 
 * @param {*} param 
 * @returns 
 */
function main(param) {
    const { data, detail_text} = JSON.parse(param)
    const postsData = data.map(item => item.target)
    return postsData.map(item => item.title);
}

module.exports = {
    zhihuFunc: main
}
