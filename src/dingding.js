const DingRobot = require('ding-robot');
const { DINGDING_WEBHOOK_TOKEN } = require("../config")

const robot = new DingRobot(DINGDING_WEBHOOK_TOKEN);


const sendText = text => {
    robot.text(text);
}

const sendMD = (title, md) => {
    robot.markdown(title, md);
}

const sendImg = (title, content, picUrl, url) => {
    robot.link(title, content, picUrl, url);
}

module.exports = {
    sendText,
    sendMD,
    sendImg
}
