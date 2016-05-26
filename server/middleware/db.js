'use strict';

var mysql = require('mysql'),
    dbConfig = require('../config/DBConfig');

//데이터 베이스를 서비스단에서 쉽게 쓸 수 있도록 구성한 미들웨어
module.exports = function(){
    var internals = {};
    var externals = {};

    var pool= mysql.createPool(dbConfig);


}();