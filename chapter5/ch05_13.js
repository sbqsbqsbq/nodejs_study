var express = require("express");
var http = require("http");
var path = require("path");
var body_parser = require("body-parser");
var static = require("serve-static");

var app = express();
var port = 3000;
app.set("port", process.env.PORT || 3000);

app.use(body_parser.urlencoded({extended : false}));
app.use(body_parser.json());

app.use(static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
    console.log("첫 번째 미들웨어에서 요청 처리");

    var paramID = req.body.id || req.query.id;
    var paramPW = req.body.password || req.query.password;

    res.writeHead("200", {"Content-Type" : "text/html;charset=utf-8"});
    res.write("<h1>익스프레스 서버에서 응답한 결과입니다.</h1>");
    res.write("<div><p>Param ID : " + paramID +"</p></div>");
    res.write("<div><p>Param PW : " + paramPW +"</p></div>");
    res.end();
});

http.createServer(app).listen(port, function() {
    console.log("익스프레스 서버가 다음 포트에서 시작됨. %d", port);
});