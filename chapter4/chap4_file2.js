var url = require('url');
var queryString = require('querystring');

var curURL = url.parse('http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');
var curStr = url.format(curURL);

console.log("주소 문자열 : %s", curStr);
console.dir(curURL);

var param = queryString.parse(curURL.query);
console.log("요청 패러미터 중 query의 값: %s", param.query);
console.log("원본 요청 패러미터 : %s", queryString.stringify(param));