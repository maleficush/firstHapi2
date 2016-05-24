'use strict';

exports.register = function(server, options, next){
    server.route(
        {
            method: 'GET',
            path:'/',
            handler: function(request, reply){
                reply.file(process.cwd() + '/public/index.html');
            }
        },
        {
            method: 'GET',
            path: '/public/img/{path*}',
            handler: function(request, reply){
                reply.file(process.cwd() + '/public/img/{path*}');
            }
        }
        //{
        //    method: 'GET',
        //    path:'/hello',
        //    handler: function (request, reply) {
        //        console.log('/hello handler!!');
        //        return reply('hello world');
        //    }
        //}
    );

    next();
};

exports.register.attributes = {
    name: 'AuthRoutes'
};
