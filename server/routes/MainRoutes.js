'use strict';

var MainController = require('../controller/MainController');

exports.register = function(server, options, next){
    var mainController = new MainController();

    server.bind(mainController);

    server.route([
        {
            method: 'GET',
            path:'/maintest',
            handler: mainController.dbTest
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'MainRoutes'
};
