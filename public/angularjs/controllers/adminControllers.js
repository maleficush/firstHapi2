'use strict'

angular.module( "sportsStoreAdmin" )
    .constant( "authUrl", "http://localhost:8421/users/login")
    .constant( "ordersUrl", "http://localhost:8421/orders" )
    .controller( "authCtrl", function( $scope, $http, $location, authUrl ){

        $scope.authenticate = function( user, pass ){
            $http.post( authUrl, {
                username: user,
                password: pass
            },{
                withCredentials: true

            }).success( function( data ){
                $location.path("/main");
            }).error( function( error ){
                $scope.authenticationError = error;
            });

        };
    })


    // ng-include 디렉티브를 사용해 뷰를 관리하고 각 뷰를 전환하는 내비게이션 버튼을 생성하는 데 필요한
    // 동작과 데이터를 제공한다.
    .controller( "mainCtrl", function( $scope ){
        $scope.screens = [ "Products", "Orders" ];
        $scope.current = $scope.screens[0];

        $scope.setScreen = function( index ){
            console.log("setScreen : " + index);
            $scope.current = $scope.screens[ index ];
        };

        $scope.getScreen = function (){
            console.log("getScreen : " + $scope.current);
            return $scope.current == "Products" ? "/public/angularjs/views/adminProducts.html" : "/public/angularjs/views/adminOrders.html";
        };
    })


    .controller( "ordersCtrl", function ( $scope, $http, ordersUrl ){
        $http.get( ordersUrl, { withCredentials: false } )
            .success( function( data ){
                $scope.orders = data;
            })
            .error( function( error ){
                $scope.error = error;
            });

        $scope.selectedOrder;

        $scope.sendOrder = function( order ){
            $scope.selectedOrder = order;
        };

        $scope.calcTotal = function( order ){
            var total = 0;
            console.log("※ calcTotal : " + order);
            console.log(JSON.stringify(order));

            for ( var i = 0, len = order.data.length ; i < len ; i++) {
                total += order.data[i].count * order.data[i].price;
            }
            return total;
        };

    });