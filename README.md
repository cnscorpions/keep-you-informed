# trending-news-notifier
爬取国内外trending news，集中通知，不用打开各个社交媒体

## 特征
- 集中管理消息，避免社交媒体噪声和情绪
- 信息源可扩展

## 技术栈
本项目为一个Node.js爬虫项目
- node-fetch 网络请求库
- cheerio html解析库
- 钉钉消息机器人
- node-schedule 定时任务

## 效果
| 消息通知                           | 通知内容                           |
| ---------------------------------- | ---------------------------------- |
| ![消息通知](./images/消息通知.png) | ![通知内容](./images/消息内容.png) |

## 使用
1. 安装Node.js，并安装本地依赖
```
yarn or npm install
```
2. 创建一个config.js如下：
```
module.exports = {
    webhook: "https://oapi.dingtalk.com/robot/send?access_token=********",
    access_token: "***************" // 需要先创建钉钉群机器人，获得access_token
}
```
3. 运行项目
```
yarn start or npm run start
```
4. 提交到github
```
yarn git -m *** or npm run git -m *** // *** 代表commit信息
```

## 信息源
- [x] 知乎热榜
- [ ] B站热门搜索
- [ ] ~~微博热榜~~（完全没有用的信息，）
- [ ] 微信24h热文榜
- [ ] 百度实时热榜
- [ ] Google Trends
- [ ] Twitter Trends
- [ ] Reddit Popular

## 部署
1. 在`git pull`的项目中创建一个config.js如下：
```
module.exports = {
    webhook: "https://oapi.dingtalk.com/robot/send?access_token=********",
    access_token: "***************" // 需要先创建钉钉群机器人，获得access_token
}
```

2. 需要安装Node.js环境，如果需要部署到线上的话，推荐`pm2`守护进程
```
pm2 start src/index.js --name 热门新闻消息机器人
```
