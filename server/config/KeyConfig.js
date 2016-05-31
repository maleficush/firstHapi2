'use strict'
var KeyConfig = {
    people : {
        1: {
            id: 1,
            name: 'Jen Jones'
        }
    },

    jwtOption : {
        key: 'NeverShareYourSecret',
        verifyOptions: { algorithms: [ 'HS256' ] },
        validateFunc: function (decoded, request, callback) {
            console.log(JSON.stringify(decoded));
            // do your checks to see if the person is valid
            if (!KeyConfig.people[decoded.id]) {
                return callback(null, false);
            }
            else {
                return callback(null, true);
            }

            //if( decoded.USER_ID ) {
            //    return callback(null, true);
            //}else{
            //    return callback(null, false);
            //}
        }
    }
};

module.exports = KeyConfig;