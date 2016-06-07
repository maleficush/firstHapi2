'use strict'
angular.module('customFilters', [])
    .filter( 'unique', function(){
        //data(json Array)와 propertyName(각 json의 키)를 받아서
        return function ( data, propertyName ){
            if ( angular.isArray( data ) && angular.isString( propertyName ) ){
                var results = [];
                var keys = {};
                for ( var i = 0; i < data.length ; i++ ){
                    var val = data[i][propertyName];
                    if ( angular.isUndefined( keys[val] )) {
                        keys[val] = true;
                        results.push(val);
                    }
                }
                return results;
            } else {
                return data;
            }
        }
    })


    // 표시되어야 할 시작 인덱스와 종료 인덱스만큼의 데이터를 리턴시키는 메소드
    .filter( 'range', function( $filter ){
        // page : 현재 선택된 페이지(영역의 시작 인덱스 판단)
        // size : 페이지 크기(영역의 종료 인덱스 판단)
        return function ( data, page, size ){
            if( angular.isArray( data ) && angular.isNumber( page ) && angular.isNumber( size ) ){

                var start_index = ( page - 1 ) * size;
                if( data.length < start_index ){
                    return [];
                } else {
                    return $filter( 'limitTo' )( data.splice(start_index), size );
                }

            } else {
                return data;
            }
        }
    })


    //페이지 갯수
    .filter( 'pageCount', function(){
        return function ( data, size ){
            if( angular.isArray( data ) ){
                var result = [];i
                for ( var i = 0, len = Math.ceil( data.length / size ) ; i < len ; i++ ){
                    result.push(i);
                }
                return result;
            } else {
                return data;
            }
        }
    });