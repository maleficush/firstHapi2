'use strict';

var LogConfig = {
    opsInterval: 5000,
    reporters: [
        {
            reporter: require('good-file'),
            events: {ops: '*'},
            config: {path: process.cwd() + '/logs', prefix: 'hapi-process', rotate: 'daily'}
        },
        {
            reporter: require('good-file'),
            events: {response: '*'},
            config: {path: process.cwd() + '/logs', prefix:'hapi-request', rotate:'daily'}
        }

    ]
};