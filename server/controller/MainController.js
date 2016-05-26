'use strict'

var MainService = require('../service/MainService');
//module.exports = MainController;
var MainController = function(){};

MainController.prototype.dbTest = function(request, reply){
    console.log('MainController : dbTest');
    MainService.dbTest(request, reply);
};

module.exports = MainController;

