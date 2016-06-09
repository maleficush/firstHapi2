'use strict'
angular.module( 'sportsStore' )
    .controller( 'cartSummaryController', function ( $scope, cart ){
        $scope.cartData = cart.getProducts();

        // 카트에 담긴긴
       $scope.total = function(){
            var total = 0;
            for ( var i = 0, len = $scope.cartData.length ; i < len ; i++ ){
                total += ( $scope.cartData[i].price * $scope.cartData[i].count );
            }
            return total;
        }

        $scope.remove = function ( id ){
            cart.removeProduct( id );
        }
    });