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
    this.on('ordersExcute', this.ordersExcute);
    this.on('identifyExcute', this.identifyExcute);
    this.on('getOrdersExcute', this.getOrdersExcute);
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
    });
};

MainService.prototype.ordersProc = function ( paramData, callback ){
    console.log('ordersProc');
    console.log( paramData );
    this.ordersCallback = callback;
    var commModel = new CommModel();
    commModel.data = paramData;
    this.emit( 'ordersExcute', commModel );
};

MainService.prototype.ordersExcute = function( commModel ){
    console.log('MainService : ordersExcute');
    //console.log( commModel.data );

    //var orderedProducts = commModel.data.formData.products;
    //console.log(orderedProducts);
    //delete commModel.data.formData.products;

    delete commModel.data.formData.products;
    commModel.data.formData.giftwrap = "test";
    console.log( commModel.data.formData );
    var self = this;
    var sql = 'INSERT INTO orders SET ? ';
    //var sql = 'INSERT INTO orders (name, street, city, state, zip, country, giftwrap ) values (?, ?, ?, ?, ?, ?, ?) ';
    db.query( sql, commModel.data.formData, function( err, result ){
        if( err ){
            console.log('[ordersExcute] error db.query');
        } else {
            console.log('[ordersExcute] db Transaction Success');
        }

        if( result ){
            commModel.success = true;
            commModel.code = 1;
            commModel.message = result;
            self.ordersCallback( null, commModel );
        }
    });
};


MainService.prototype.getOrdersProc = function ( paramData, callback ){
    console.log('ordersProc');
    console.log( paramData );
    this.ordersCallback = callback;
    var commModel = new CommModel();
    commModel.data = paramData;
    this.emit( 'getOrdersExcute', commModel );
};

MainService.prototype.getOrdersExcute = function( commModel ){
    console.log('MainService : ordersExcute');
    //console.log( commModel.data );

    //var orderedProducts = commModel.data.formData.products;
    //console.log(orderedProducts);
    //delete commModel.data.formData.products;

    var self = this;
    var sql = 'SELECT * FROM orders ';
    //var sql = 'INSERT INTO orders (name, street, city, state, zip, country, giftwrap ) values (?, ?, ?, ?, ?, ?, ?) ';
    db.query( sql, null, function( err, result ){
        if( err ){
            console.log('[ordersExcute] error db.query');
        } else {
            console.log('[ordersExcute] db Transaction Success');
        }

        if( result ){
            console.log( result );
            commModel.success = true;
            commModel.code = 1;
            commModel.message = result;
            self.ordersCallback( null, commModel );
        }
    });
};




MainService.prototype.identifyProc = function( paramData, callback ){
    console.log('identifyProc : paramData : ' + JSON.stringify( paramData ) );
    var self = this;
    this.identifyCallback = callback;
    var commModel = new CommModel();
    commModel.data = paramData;
    this.emit( 'identifyExcute', commModel );
};


MainService.prototype.identifyExcute = function( authModel ){
    console.log('identifyExcute : paramData : ' + JSON.stringify( authModel.data ) );
    var self = this;
    var username = authModel.data.formData.username;
    var password = authModel.data.formData.password;

    console.log(username + ' / ' + password);

    var sql = "SELECT username FROM users WHERE username = ? AND password = ? ";
    db.query( sql, authModel.data.formData, function( err, result ){
        if( err ){
            console.log('[identifyExcute] error db.query');
        } else {
            console.log('[identifyExcute] db Transaction Success');
        }

        if( result ){
            authModel.success = true;
            authModel.code = 1;
            authModel.message = result;
            self.identifyCallback( null, authModel );
            console.log( "[identifyExcute] Success : " + result );
        }
    });

};

MainService.prototype.identify = function( authModel ){
    var self = this;
    var USER_ID = authModel.user.USER_ID;

    var sql = "SELECT USER_ID FROM USER WHERE USER_ID = ?";

};

//서비스 부분은 싱글톤 패턴으로
//싱글톤 함수 모듈화
module.exports = Singletonify(MainService).getInstance();