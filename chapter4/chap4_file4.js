process.on("tick", function(count) {
    console.log('tick event is occured : %s', count);
});

setTimeout(function() {
    console.log("2초 뒤에 tick 이벤트 발생");
    process.emit('tick', "2");
}, 2000);