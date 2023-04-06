const screenshot = require('screenshot-desktop')
const WebSocket = require('ws')
const wslianjie = require('./wslianjie')
const robotClick = require('./robotClick')
const server = new WebSocket.Server({port:8080})

const SCREENSHOT_INTERVAL = 500;

const createScreenshot = () => {
    return screenshot({format: 'png'}).then((img) => {
        return [ img.toString('base64'), img];
    }).catch((err) => {
        console.log('截图失败', err);
        return err;
    })
}

const startScreenshotTimer = (callback) => {
    return setInterval(() => {
        createScreenshot().then(([imgStr, img]) => {
            callback(['data:image/png;base64,' + imgStr, img]);
        })
    }, SCREENSHOT_INTERVAL)
}
server.on('connection', async function connection(ws,req){
    ws.on('message',async function incoming(message){
        let position =JSON.parse(message)
        robotClick(position.x, position.y)
        let data = await createScreenshot()
        ws.send(JSON.stringify({data: data[0]}))
    })

    let data = await createScreenshot()
    ws.send(JSON.stringify({data: data[0]}))
})

wslianjie()