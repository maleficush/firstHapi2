'use strict'
angular.module( 'sportsStore' )
    .constant('productListActiveClass', 'btn-primary')
    .constant('productListPageCount', 3)
    .controller('productListCtrl', function ( $scope, $filter, productListActiveClass, productListPageCount ){
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


    });