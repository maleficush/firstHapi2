'use strict'

//공통 결과관련 모델
var AuthModel = function(){
    var result = {};

    result.user = null;
    result.success = false;
    result.message = "Invalid id or password";
    result.token = "";
    result.code = -1;

    return result;
};

module.exports = AuthModel;