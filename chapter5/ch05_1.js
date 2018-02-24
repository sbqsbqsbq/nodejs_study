var http = require("http");

var server = http.createServer();

// var port = 8080;
// server.listen(port, function(){
//     console.log("Server is Listening port 8080");
// });

var port = 8080;
var host = "192.168.0.5";
server.listen(port, host, '50000', function(){
    console.log("Server is now starting : %s, %d", host, port);
});