var util = require('util');
var EventEmitter = require("events").EventEmitter;

var Calc = function() {
    var self = this; // 자기 자신을 호출함.
    this.on("stop", function() {
        console.log("계산기에 stop 이벤트 전달됨");
    });
}

util.inherits(Calc, EventEmitter);
Calc.prototype.add = function(a, b) {
    return a+b;
}

Calc.prototype.multiply = function(a, b) {
    return a*b;
}

Calc.prototype.substract = function(a, b) {
    return a-b;
}

module.exports = Calc;
module.exports.title = 'calculator';