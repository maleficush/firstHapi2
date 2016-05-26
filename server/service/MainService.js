'use strict'

var Singletonify = require('../middleware/Singletonify'),
    util = require('util'),
    jwt = require('jsonwebtoken');

var MainService = function(){};

MainService.prototype.dbTest = function(request,reply){
  console.log('MainService : dbTest');
  var self = this;


};

//서비스 부분은 싱글톤 패턴으로
//MainService.instance = null;
//MainService.getInstance = function(){
//  if(this.instance === null){
//    this.instance = new MainService();
//  }
//  return this.instance;
//};
//
//module.exports = MainService.getInstance();

//싱글톤 함수 모듈화
module.exports = Singletonify(MainService).getInstance();