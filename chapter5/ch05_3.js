var http = require("http");

var server = http.createServer(function(req, res){
    console.log("클라이언트 요청이 들어왔습니다.");
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title> 응답 페이지 </title>");
    res.write("<body> <h1>노드 서버로부터의 응답입니다.</h1> </body>");
    res.write("</head>");
    res.write("</html>");
    res.end();
});

var port = 8080;
server.listen(port, function(){
    console.log("Server is listening on %d", port);
});

server.on("connection", function(socket){
    var addr = socket.address();
    console.log("클라이언트가 접속했습니다. : %s, %s", addr.address, addr.port);
});

server.on("close", function(){
    console.log("서버가 종료됩니다.");
});