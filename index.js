/**
 * Created by liveupc on 2016-05-11.
 */
var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
        return reply('hello world');
    }
});

server.start(function(){
   console.log('Server running at : ', server.info.uri);
});