'use script'

/***
 * AngularJS의 $resource 서비스를 통해 Deployd RESTful API에 접근을 허용하는 컨트롤러
 */
angular.module( "sportsStoreAdmin" )
    .constant( "productUrl", "http://localhost:5500/products")

    .config( function( $httpProvider ){
        //권한 false로 설정
        $httpProvider.defaults.withCredentials = false;
    })

    // $scope, $resource는 내부 모듈로 inject
    // productUrl은 모듈 constant로 정의함
    .controller( "productCtrl", function( $scope, $resource, productUrl ){
        

    });