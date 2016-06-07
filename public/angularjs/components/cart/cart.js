'use strict'
angular.module( "cart", [])
    .factory( "cart", function(){
        var cartData = [];

        return{

            //카트에 물품 추가 시 처리
            //카트안에 있는 물품이라면 해당 물품의 갯수가 증가하고 없는 물품이라면 해당 물품이 추가 된다.
            addProduct: function( id, name, price ){
                var addedToExistingItem = false;
                for ( var i = 0, len = cartData.length ; i < len ; i++ ){
                    if( cartData[i].id == id ){
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }
                if( !addedToExistingItem ){
                    cartData.push({
                        count: 1, id: id, price: price, name: name
                    });
                }
            },


            // 지정한 ID를 갖고 있는 상품을 제거
            removeProduct: function( id ){
                for( var i = 0, len = cartData.length ; i < len ; i++ ){
                    if( cartData[i].id == id ){
                        cartData.splice( i, 1 );
                        break;
                    }
                }
            },


            // 장바구니 내 객체 배열을 반환
            getProducts: function(){
                return cartData;
            }

        }
    })


    .directive( 'cartSummary', function( cart ){
       return{
           restrict: "E",
           templateUrl: "/public/angularjs/components/cart/cartSummary.html",
           controller: function( $scope ){
               var cartData = cart.getProducts();
           }
       }
    });