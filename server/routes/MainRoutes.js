'use strict';

var MainController = require('../controller/MainController');

exports.register = function(server, options, next){
    server.route([
        {
            method: 'GET',
            path:'/maintest',
            handler: function(request, reply){
                reply.file(process.cwd() + '/public/view/Main.html');
            }
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'MainRoutes'
};
