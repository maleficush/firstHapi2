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
    /***
     * $resource : $http 서비스기반
     */
    .controller( "productCtrl", function( $scope, $resource, productUrl ){

        //★★★ RESTful API에 대한 접근 기능을 제공하는 접근 객체를 생성 ★★★
        $scope.productsResource = $resource( productUrl + ":id", {id: "@id"});

        $scope.listProducts = function(){
            $scope.products = $scope.productsResource.query();
        };

        $scope.deleteProduct = function( product ){
            product.$delete().then( function(){
                $scope.products.splice( $scope.products.indexOf( product ), 1 );
            });
        };

        $scope.creteProduct = function( product ){
            new $scope.productsResource( product).$save().then( function( newProduct ){
                $scope.products.push( newProduct );
                $scope.editedProduct = null;
            });
        };

        $scope.updateProduct = function( product ){
            product.$save();
            $scope.editedProduct = null;
        };

        $scope.startEdit = function( product ){
            $scope.editedProduct = product;
        };

        $scope.cancelEdit = function(){
            $scope.editedProduct= null;
        };

        $scope.listProducts();

    });