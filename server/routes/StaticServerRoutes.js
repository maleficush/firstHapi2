'use strict';

exports.register = function(server, options, next){
    server.route([
        {
            method: 'GET',
            path:'/',
            config: {auth: false},
            handler: function(request, reply){
                reply.file(process.cwd() + '/public/index.html');
            }
        },
        {
            method: 'GET',
            path:'/bootTemplate',
            config: {auth: false},
            handler: function(request, reply){
                reply.file(process.cwd() + '/public/spa/view/Main.html');
            }
        },
        {
            method: 'GET',
            path: '/public/img/{param*}',
            handler: {
                directory: {
                    path: 'public/spa/img'
                }
            }
        },
        {
            method: 'GET',
            path: '/public/js/{param*}',
            config: {auth: false},
            handler: {
                directory: {
                    path: 'public/spa/js'
                }
            }
        },
        {
            method: 'GET',
            path: '/public/css/{param*}',
            config: {auth: false},
            handler: {
                directory: {
                    path: 'public/spa/css'
                }
            }
        },
        {
            method: 'GET',
            path: '/public/view/{param*}',
            handler: {
                directory: {
                    path: 'public/spa/view'
                }
            }
        },
        {
            method: 'GET',
            path: '/b3/css/{param*}',
            config: {auth: false},
            handler: {
                directory: {
                    path: 'bower_components/bootstrap/dist/css'
                }
            }
        },
        {
            method: 'GET',
            path: '/b3/js/{param*}',
            config: {auth: false},
            handler: {
                directory: {
                    path: 'bower_components/bootstrap/dist/js'
                }
            }
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'AuthRoutes'
};
