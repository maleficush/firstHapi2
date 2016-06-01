'use strict'
spa.shell = ( function(){
    //----  모듈 스코프 변수  ----
    var
        configMap = {
            main_html: String() + '<div class = "outer1" id="first"><div class="header">header 1</div><div class="main">main 1</div><div class="footer">footer 1</div></div>'
        },

        stateMap = { $container: null },

        jqueryMap = {},
        setJqueryMap,

        initModule;
    //----  모듈 스코프 변수  ----



    //----  유틸리티 메서드 시작  ----

    //----  유틸리티 메서드 끝  ----



    //----  DOM 메서드 시작  ----
    //----  setJqueryMap 메서드 시작  ----//
    setJqueryMap = function(){
        var $container = stateMap.$container;
        jqueryMap = { $container: $container };
    };
    //----  setJqueryMap 메서드 끝  ----//
    //----  DOM 메서드 끝  ----



    //----  이벤트 핸들러 시작  ----
    //----  이벤트 핸들러 끝  ----

    //----  public 메서드 시작  ----
    //public 메서드 /initModule/ 시작
    initModule = function( $container ){
        stateMap.$container = $container;
        $container.html( configMap.main_html + configMap.main_html2 + configMap.main_html3 );
        setJqueryMap();
    };
    //public 메서드 /initModule/ 끝
    //----  public 메서드 끝  ----

    return { initModule: initModule };
}());