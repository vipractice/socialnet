'use strict';

angular
    .module('social-net', [
        'ui.router',
        'ui.bootstrap',
        'ngSanitize',
        'templates-app',
        'xeditable',
        'social-net.common',
        'social-net.friends',
        'social-net.profile',
        'social-net.auth'
    ])

    .config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    }])

    .run(function($rootScope, $state,  editableOptions, AuthService) {
        editableOptions.theme = 'bs3';

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            $rootScope.$broadcast('user-authorized', { isAuthorized: AuthService.isAuthorized });

        });

        if (!AuthService.isAuthorized){
            $state.go('login',{reload:true, location:'/login'});
        }
    }
);
