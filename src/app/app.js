'use strict';

angular
    .module('social-net', [
        'ui.router',
        'ui.bootstrap',
        'ngSanitize',
        'templates-app',
        'xeditable',
        'social-net.common',
        'social-net.home',
        'social-net.posts',
        'social-net.friends',
        'social-net.profile',
        'social-net.login'
    ])

    .config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/profile');
    }])

    .run(function(editableOptions) {
        editableOptions.theme = 'bs3';
    }
);
