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
    var fileLength = 0;
    var currentLength = 0;

    fs.stat(fileName, function(err, stats) {
        if (err) throw err;
        fileLength = stats.size();
    });

    res.writeHead(200, {"Content-Type" : "image/jpg"});

    infile.on('readable', function() {
        var chunk;
        while (null != (chunk = infile.read())) {
            console.log("읽어 들인 데이터 크기 : %d 바이트", chunk.length);
            currentLength += chunk.length;
            res.write(chunk, "utf8", function(err) {
                if (err) throw err;
                console.log("파일 부분 쓰기 완료 : %d , 파일 크기 : %d", currentLength, fileLength);
                if (currentLength > fileLength) {
                    res.end(); // 응답 전송하기
                }
            });
        }
    });
});