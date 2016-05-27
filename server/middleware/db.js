'use strict';

var mysql = require('mysql'),
    dbConfig = require('../config/DBConfig');

//데이터 베이스를 서비스단에서 쉽게 쓸 수 있도록 구성한 미들웨어
module.exports = function(){
    var internals = {};
    var externals = {};

    var pool= mysql.createPool(dbConfig);

    internals.pool = pool;

    //커넥션 풀을 얻어
    internals.connect = function(connectHandler) {
        pool.getConnection(function(err, connection) {
            if (err) return connectHandler(err, null);
            return connectHandler(null, connection);
        });
    };

    //커넥션 풀을 이용해 쿼리를 실행하고 커넥션풀을 반납한다.
    externals.query = function(sql, args, callback) {
        internals.connect(function(err, connection) {
            if (err) return callback(err, null);
            connection.query(sql, args, function(err, rows, fields) {
                callback(err, rows);
                connection.release();
            });
        });
    };

    return externals;

}();