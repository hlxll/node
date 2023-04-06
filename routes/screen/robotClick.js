let robot = require("robotjs");
let screenSize = robot.getScreenSize();
const robotClick= function(x, y){
    robot.moveMouseSmooth(x, y);	//移动鼠标
    robot.setMouseDelay(1000); // 设置延迟，避免立即执行下面的点击
    robot.mouseClick();
}
module.exports = robotClick