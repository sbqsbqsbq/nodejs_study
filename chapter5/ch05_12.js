var express = require("express");
var http = require("http");

var app = express();
var port = 8080;

app.use(function(req, res, next) {
    console.log("첫번째 미들웨어에서 요청 처리");

    res.send({name : "소녀시대", age : 20});

    next();
});

// app.use("/", function(req, res, next) {
//     res.writeHead("200", {"Content-Type" : "text/html; charset=utf8"});
//     res.end("<h1>익스프레스 서버에서 " + req.user + "가 응답한 결과</h1>");
// });

http.createServer(app).listen(port, function() {
    console.log("익스프레스 서버가 다음 포트에서 시작됨. %d", port);
});