process.on('exit', function() {
    console.log("Exit Event is occured");
});

setTimeout(function() {
    console.log("2초 후에 시스템 종료 시도 함.");
    process.exit();
}, 2000);