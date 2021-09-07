const DingRobot = require('ding-robot');
const { access_token } = require("../config")

const robot = new DingRobot(access_token);


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
