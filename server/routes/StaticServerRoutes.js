'use strict';

exports.register = function(server, options, next){
    server.route(
        {
            method: 'GET',
            path:'/',
            handler: {
                file: process.cwd() + '/public/index.html'
            }
        },
        {
            method: 'GET',
            path:'/hello',
            handler: function (request, reply) {
                console.log('/hello handler!!');
                return reply('hello world');
            }
        }
    );

    next();
};

exports.register.attributes = {
    name: 'AuthRoutes'
};
