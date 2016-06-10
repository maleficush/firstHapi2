'use strict'

var MainService = require('../service/MainService');


var MainController = function(){};

//GET
MainController.prototype.dbTest = function( request, reply ){
    console.log('MainController : dbTest');
    var self = this;
    var paramData = {};
    paramData['authData'] = request.auth.credentials;
    console.log('MainController : authData : ' + JSON.stringify(request.auth.credentials));

    MainService.dbTestProc( paramData, function( err, result ){
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

//POST
MainController.prototype.identify = function( request, reply ){
    console.log('MainController : dbTest');
    var self = this;
    var paramData = {};
    paramData['formData'] = request.payload;
    console.log('MainController(identify) : formData : ' + JSON.stringify(request.payload));
    MainService.identifyProc( paramData, function( err, result ){
        if( err ) reply( err ).code( 500 );
        else reply('identify');

        var responseData = {};
        responseData['protocol'] = 'deviceRegist';
        responseData['data'] = result;
        responseData['time'] = ( new Date() ).getTime();
    });
};

//POST
MainController.prototype.orders = function( request, reply ){
    var self = this;
    var paramData = {};
    paramData['formData'] = request.payload;
    console.log('MainController(orders) : formData : ' + JSON.stringify(request.payload));
    MainService.ordersProc(paramData, function(err, result){
        var responseData = {};
        responseData['protocol'] = 'ordersRegist';
        responseData['data'] = result;
        console.log( '[MainController] success callback' );
        console.log( result )
        responseData['time'] = (new Date()).getTime();

        if( err ) reply( err ).code( 500 );
        else reply( responseData );


    });
};

MainController.prototype.getOrders = function( request, reply ){
    var self = this;
    var paramData = {};
    paramData['formData'] = request.payload;
    MainService.getOrdersProc(paramData, function(err, result){
        var responseData = {};
        responseData['protocol'] = 'getOrders';
        responseData['data'] = result;
        console.log( '[MainController] success callback' );
        console.log( result )
        responseData['time'] = (new Date()).getTime();

        if( err ) reply( err ).code( 500 );
        else reply( responseData );


    });
};



module.exports = MainController;