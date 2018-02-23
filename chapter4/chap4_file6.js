var fs = require("fs");
// var data = fs.readFile("./package.json", "utf8");
var data = fs.readFile("./package.json", "utf8", function(err, data) {
    console.log(data);
})

console.log("package.json의 내용을 출력합니다");