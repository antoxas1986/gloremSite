/**
 * Angular Main Javascript, Starting point for single page app
 */

(function () {
    var controllers = angular.module('controllers', []);
    var directives = angular.module('directives', []);
    var services = angular.module('services', []);
    var routes = angular.module('routes', []);

    var myApp = angular.module('glorem', ['ngRoute', 'directives', 'controllers', 'services', 'routes', 'ngAnimate', 'ngResource', 'ui.bootstrap']);
}());
