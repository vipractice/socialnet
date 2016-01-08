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
        $urlRouterProvider.otherwise('/login');
    }])

    .run(function($rootScope, editableOptions, AuthService) {
        editableOptions.theme = 'bs3';

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            $rootScope.$broadcast('user-authorized', { isAuthorized: AuthService.isAuthorized });
            // TODO: add check for authorization

        });
    }
);
