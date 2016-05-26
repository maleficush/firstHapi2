//공통 결과관련 모델
var CommModel = function(){
  var result = {};

    result.data = null;
    result.success = false;
    result.message = "";
    result.code = -1;

    return result;
};