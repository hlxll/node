var express = require("express");
var router = express.Router();

// 实现jsonp接口
router.get("/jsonp", function (req, res, next) {
  // 获取客户端发送过来的回调函数名字
  const funcname = req.query.callback;
  // 得到要发送给客户端的数据
  const data = { name: "huanglin" };
  // 根据前两部得到的数据，拼接出一个函数函数调用的字符串
  const scriptstr = `${funcname}(${JSON.stringify(data)})`;
  // 返回给客户端，用script解析
  res.send(scriptstr);
});

module.exports = router;
