'use strict'
var KeyConfig = {
    jwtOption : {
        key: 'liveu',
        verifyOptions: { algorithms: [ 'HS256' ] },
        validateFunc: function (decoded, request, callback) {
            console.log(decoded);

            if( decoded.USER_ID ) {
                return callback(null, true);
            }else{
                return callback(null, false);
            }
        }
    }
};

module.exports = KeyConfig;