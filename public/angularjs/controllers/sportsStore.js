'use strict'
//최상위 컨트롤러 생성
angular.module( 'sportsStore' )
    .constant( 'dataUrl', 'http://localhost:8421/maintest2' )
    .constant( 'orderUrl', 'http://localhost:8421/orders' )
    .controller('sportsStoreCtrl', function( $scope, $http, $location, dataUrl,  orderUrl, cart ){

    $scope.data = {};

    $http.get( dataUrl )
        .success( function( data ) {
           $scope.data.products = data.message;
        })
        .error( function( error ) {
           $scope.data.error = error;
        });

    $scope.sendOrder = function( shippingDetails ){
        // 배송 정보 객체를 안전하게 조작하기 위하여 angular.copy로 배송 정보 객체를 복사해서 사용한다.
        var order = angular.copy( shippingDetails );
        console.log('$scope.sendOrder');
        console.log( order );

        // 배송 정보 객체에 상품 json array를 추가한다.
        order.products = cart.getProducts();
        console.log( order.products );
        $http.post( orderUrl, order )
            .success( function( data ){
                console.log( 'success callback ' );
                console.log( data.data.data );
                $scope.data = data.data.formData;
                cart.getProducts().length = 0;
            })
            .error( function( error ){
                $scope.data.orderError = error;
            })
            .finally( function(){
                $location.path( "/complete" );
            });
    }
});