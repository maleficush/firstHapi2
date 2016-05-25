'use strict';

exports.register = function(server, options, next){
    server.route([
        {
            method: 'GET',
            path:'/',
            handler: function(request, reply){
                reply.file(process.cwd() + '/public/index.html');
            }
        },
        {
            method: 'GET',
            path: '/public/img/{param*}',
            handler: {
                directory: {
                    path: 'public/img'
                }
            }
        },
        {
            method: 'GET',
            path: '/public/js/{param*}',
            handler: {
                directory: {
                    path: 'public/js'
                }
            }
        },
        {
            method: 'GET',
            path: '/public/view/{param*}',
            handler: {
                directory: {
                    path: 'public/view'
                }
            }
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'AuthRoutes'
};
