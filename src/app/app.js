'use strict';

angular.module('social-net', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'templates-app',
    'social-net.common',
    'social-net.home',
    'social-net.posts',
    'social-net.friends',
    "xeditable",
    'social-net.profile'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/profile');
}]).

run(function(editableOptions) {
        editableOptions.theme = 'bs3';
    }
);
