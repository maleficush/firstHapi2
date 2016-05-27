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
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'MainRoutes'
};
