'use strict'
//최상위 컨트롤러 생성
angular.module( 'sportsStore' )
    .constant( 'dataUrl', 'http://localhost:8421/maintest2' )
    .controller('sportsStoreCtrl', function( $scope, $http, dataUrl ){

    //Dummy Data
    //$scope.data = {
    //    products: [
    //        {name : 'Product #1', description: 'A product', category: 'Category #1', price: 100},
    //        {name : 'Product #2', description: 'A product', category: 'Category #1', price: 110},
    //        {name : 'Product #3', description: 'A product', category: 'Category #2', price: 210},
    //        {name : 'Product #4', description: 'A product', category: 'Category #3', price: 202},
    //        {name : 'Product #5', description: 'A product', category: 'Category #2', price: 203},
    //        {name : 'Product #6', description: 'A product', category: 'Category #1', price: 204},
    //        {name : 'Product #7', description: 'A product', category: 'Category #2', price: 205},
    //        {name : 'Product #8', description: 'A product', category: 'Category #5', price: 205},
    //        {name : 'Product #9', description: 'A product', category: 'Category #4', price: 205},
    //        {name : 'Product #10', description: 'A product', category: 'Category #3', price: 205},
    //        {name : 'Product #11', description: 'A product', category: 'Category #4', price: 205},
    //        {name : 'Product #12', description: 'A product', category: 'Category #5', price: 205},
    //        {name : 'Product #13', description: 'A product', category: 'Category #2', price: 205}
    //    ]
    //};

    $scope.data = {};

    $http.get( dataUrl )
        .success( function( data ) {
           $scope.data.products = data.message;
        })
        .error( function( error ) {
           $scope.data.error = error;
        });
});