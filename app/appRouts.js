(function() {
    angular.module('routes').config(config);

    function config($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider
            .when(
            '/',
            {
                templateUrl : 'app/index/index_partial.html',
                controller : "indexController",
            })
            .otherwise({
            redirectTo : '/'
        });

        $locationProvider.html5Mode({
            enabled : true,
            requireBase : false
        });
    };


})();
