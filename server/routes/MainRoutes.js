'use strict';

var MainController = require('../controller/MainController');

exports.register = function(server, options, next){
    var mainController = new MainController();

    server.bind(mainController);

    server.route([
        {
            method: 'GET',
            path:'/maintest',
            config: {auth: 'jwt'},
            handler: mainController.dbTest
        },
        {
            method: 'GET',
            path:'/maintest2',
            config: {auth: false},
            handler: mainController.dbTest
        },
        {
            method: 'GET',
            path:'/orders',
            config: {auth: false},
            handler: mainController.getOrders
        },
        //아직 로그인 전이기 때문에 auth는 false로 셋팅한다.
        {
            method: 'POST',
            path:'/users/login',
            config: {auth: false},
            handler: mainController.identify
        },
        {
            method: 'POST',
            path:'/orders',
            config: {auth: false},
            handler: mainController.orders
        }

    ]);

    next();
};

exports.register.attributes = {
    name: 'MainRoutes'
};
