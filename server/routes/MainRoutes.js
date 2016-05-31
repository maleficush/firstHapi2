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
        //아직 로그인 전이기 때문에 auth는 false로 셋팅한다.
        {
            method: 'POST',
            path:'/login',
            config: {auth: false},
            handler: mainController.identify
        },
    ]);

    next();
};

exports.register.attributes = {
    name: 'MainRoutes'
};
