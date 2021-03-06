/**
 * index.js
 * 서버 설정 영역
 */
'use strict'

//모듈 선언영역
var Hapi = require('hapi');

var HapiServer = function() {

    //Hapi HTTP 프레임워크 서버 생성
    var server = new Hapi.Server();

    //로컬서버의 8421 포트로 HTTP서버 구성
    server.connection({
        host: 'localhost',
        port: 8421
    });

    //플러그인 등록 영역


    //라우팅 및 기타 플러그인 옵션
    var plugins = [
        //로그 관련 플러그인 및 설정
        {register: route('good'), options: logConfig}
    ];
};





// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
        return reply('hello world');
    }
});

server.start(function(){
   console.log('Server running at : ', server.info.uri);
});