var fs = require("fs");

fs.open("./output.txt", "w", function(err, data){
    if (err) throw err;

    var buf = new Buffer("Hi :)");
    fs.write(data, buf, 0, buf.length, null, function(err, written, buf) {
        if (err) throw err;
        console.log(err, written, buf);

        fs.close(data, function(){
            console.log("파일 열고, 쓰고, 닫기 완료");
        });
    });
});