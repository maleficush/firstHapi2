'use strict'

var MainService = require('../service/MainService');
//module.exports = MainController;
var MainController = function(){};

MainController.prototype.dbTest = function(request, reply){
    console.log('MainController : dbTest');
    var self = this;
    var paramData = {};

    MainService.dbTestProc(paramData, function( err, result ){
        var responseData = {};
        responseData['protocol'] = 'dbTest';
        responseData['data'] = result;
        responseData['time'] = ( new Date() ).getTime();

        if( err ) {
            reply(err).code(500);
        } else {
            reply(result);
        }
        console.log(JSON.stringify(result));
    });
};

module.exports = MainController;

