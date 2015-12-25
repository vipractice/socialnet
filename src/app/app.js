'use strict';

angular.module('social-net', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'templates-app',
    'social-net.common',
    'social-net.home',
    'social-net.posts',
    'social-net.profile'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/profile');
}]);
