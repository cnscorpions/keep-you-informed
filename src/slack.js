const { IncomingWebhook } = require('@slack/webhook');
const { SLACK_WEBHOOK_URL } = require("../config");

const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);

const sendMsg = async (text) => {
    await webhook.send({
        text
      });
}

module.exports = {
    sendMsg
}