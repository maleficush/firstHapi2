/**
 * index.js
 * 서버 설정 영역
 */
'use strict'

//모듈 선언영역
var Hapi = require('hapi'),
    jwt = require('hapi-auth-jwt2'),
    keyConfig = require('./config/KeyConfig'),
    logConfig = require('./config/LogConfig');

var HapiServer = function() {

    //Hapi HTTP 프레임워크 서버 생성
    var server = new Hapi.Server();

    //로컬서버의 8421 포트로 HTTP서버 구성
    server.connection({
        host: 'localhost',
        port: 8421
    });

    //플러그인 등록 영역

    //JWT관련 플러그인 등록
    server.register(jwt, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('jwt plugin success122');
        }
        //인증 토큰관련 설정
        server.auth.strategy('jwt', 'jwt', keyConfig.jwtOption);

    });

    //라우팅 및 기타 플러그인 옵션
    var plugins = [
        //static pages and content
        {register: require('inert')},

        //로그 관련 플러그인 및 설정
        {register: require('good'), options: logConfig},

        //StaticServer 라우팅
        {register: require('./routes/StaticServerRoutes')},

        //MainRoutes API 라우팅
        {register: require('./routes/MainRoutes')}

    ];

    server.register(plugins, function(err){
       if (err) {
           console.log(err);
       } else {
           console.log('Plugin success');
       }
        server.auth.default('jwt');
    });


    server.start(function(){
        console.log('Server running at : ', server.info.uri);
    });

    return this;
};

module.exports = new HapiServer();




