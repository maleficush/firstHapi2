'use strict'

var EventEmitter = require('events').EventEmitter,//이벤트 emite 패턴 사용
    Singletonify = require('../middleware/Singletonify'),//객체를 싱글톤으로 만들기 위한 미들웨어
    util = require('util'),
    jwt = require('jsonwebtoken'),//JsonWebToken 인증
    db = require('../middleware/db'),//db커넥션 풀, db접속
    AuthModel = require('../model/AuthModel'),//인증 모델
    CommModel = require('../model/CommModel');//API 공통모델



var MainService = function(){
  this.on('dbTestExcute', this.dbTestExcute);
  this.on('identify', this.identify);
};

util.inherits(MainService, EventEmitter);

MainService.prototype.dbTestProc = function( paramData, callback ){
    this.dbTestCallback = callback;
    var commModel = new CommModel();
    commModel.data = paramData;
    this.emit( 'dbTestExcute', commModel );
};

MainService.prototype.dbTestExcute = function( commModel ){
    console.log('MainService : dbTestExcute');
    var self = this;
    var sql = 'select * from product';

    db.query(sql, null, function(err, result){
        if( err ){
            console.log('error db.query');
        }

        if( result ){
            commModel.success = true;
            commModel.code = 1;
            commModel.message = result;
            self.dbTestCallback(null, commModel);
        }

        //console.log( result );
    });
};

MainService.prototype.identifyProc = function( paramData, callback ){
    console.log('identifyProc : paramData : ' + JSON.stringify(paramData));
    var self = this;
};

MainService.prototype.identify = function( authModel ){
    var self = this;
    var USER_ID = authModel.user.USER_ID;

    var sql = "SELECT USER_ID FROM USER WHERE USER_ID = ?";

};

//서비스 부분은 싱글톤 패턴으로
//싱글톤 함수 모듈화
module.exports = Singletonify(MainService).getInstance();