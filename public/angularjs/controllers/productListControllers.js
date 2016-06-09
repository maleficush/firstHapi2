'use strict'
angular.module( 'sportsStore' )
    .constant('productListActiveClass', 'btn-primary')
    .constant('productListPageCount', 3)
    // cart : cart 팩터리 서비스 주입(같은 앵귤러 모듈끼리 이런식으로 팩토리 서비스를 주입하여 이용 가능하다.)
    .controller('productListCtrl', function ( $scope, $filter, productListActiveClass, productListPageCount, cart ){

        //선택된 카테고리 임시 저장 변수
        var selectedCategory = null;

        //선택된 카테고리 임시 저장 함수
        $scope.selectCategory = function ( newCategory ){
            selectedCategory = newCategory;

            //좌측 메뉴 선택 시 첫번째 페이지로 이동
            $scope.selectedPage = 1;
        }

        //선택된 카테고리만 보여주기 위한 필터 함수
        $scope.categoryFilterFn = function ( product ){
            return selectedCategory == null || product.category == selectedCategory;
        }

        //선택된 좌측 메뉴의 css를 변경하여 선택된 표시 해주기 위한 함수
        $scope.getCategoryClass = function ( category ){
            return selectedCategory == category ? productListActiveClass : "";
        }


        /**
         * 페이징 처리
         * */
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectPage = function ( newPage ) {
            $scope.selectedPage = newPage;
        }

        $scope.getPageClass = function ( page ) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

        $scope.addProductToCart = function ( product ){
            //console.log( product );

            //cart 팩토리 서비스 주입
            //카트에 물품 추가 시 처리
            //카트안에 있는 물품이라면 해당 물품의 갯수가 증가하고 없는 물품이라면 해당 물품이 추가 된다.
            cart.addProduct( product.id, product.name, product.price );
        }


    });