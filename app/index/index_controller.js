(function () {
    angular
        .module('controllers')
        .controller(
            'indexController', [
            '$rootScope'
            , '$scope'
            , '$window'
            , '$location',

            function ($rootScope, $scope, $window, $location) {
                   $scope.msg="Hello from angular js controller."
            }
            ])
}());
