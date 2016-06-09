'use strict'
angular.module( 'd3', [])
    .factory( 'd3Service', [ '$document', '$q', '$rootScope',
        function( $document, $q, $rootscope ){
            var d = $q.defer();
            function onScriptLoad(){
                // Load client in the browser
                $rootScope.$apply( function(){d.resolve( window.d3); });
            }

            // Create a script tag with d3 as the source
            // and call our onScriptLoad callback when it has been loaded
            var scriptTag = $document[0].createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.async = true;
            scriptTag.src = '/bower_components/d3/d3.js';

            // 추가된 script태그가 다 로드가 되었다면 onScriptLoad() 실행
            scriptTag.onreadystatechange = function(){
                if ( this.readyState == 'complete' ) onScriptLoad();
            }

            scriptTag.onload = onScriptLoad();

            var body = $document[0].getElementsByTagName('body')[0];
            body.appendChild( scriptTag );

            return {
                //d3:
            }
    }]);
