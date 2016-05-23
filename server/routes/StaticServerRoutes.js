'use strict';

exports.register = function(server, options, next){
    // Add the route
    server.route({
        method: 'GET',
        path:'/hello',
        handler: function (request, reply) {
            return reply('hello world');
        }
    });

    next();
};
