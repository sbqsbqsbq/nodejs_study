var http = require("http");
var fs = require("fs");

var server = http.createServer();

var port = 3000;

server.listen(port, function(){
    console.log("Server is now listening on %d", port);
})

server.on("request", function(req, res) {
    console.log("클라이언트로부터의 이미지 요청");

    var fileName = "./house.jpg";
    var infile = fs.createReadStream(fileName, {flags : 'r'});

    infile.pipe();

    // fs.readFile(fileName, function(err, data) {
    //     res.writeHead(200, {"Content-Type" : "image/jpg"});
    //     res.write(data);
    //     res.end();
    // })
})