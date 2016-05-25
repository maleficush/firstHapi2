'use strict';

var MainController = require('../controller/MainController');

exports.register = function(server, options, next){
    server.route([
        {
            method: 'GET',
            path:'/',
            handler: function(request, reply){
                reply.file(process.cwd() + '/public/index.html');
            }
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'MainRoutes'
};
