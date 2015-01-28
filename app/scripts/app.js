'use strict';

function mainController() {

}

angular
    .module('jsonParser', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'jsonParser.home'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'scripts/home/views/index.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .controller('mainController', mainController);
