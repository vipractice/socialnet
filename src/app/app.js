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

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            AuthService.checkAuth().catch(function() {
                $state.go('login', { reload: true, location: '/login' });
            }).finally(function() {
                $rootScope.$broadcast('user-authorized', { isAuthorized: angular.isDefined(AuthService.user) });
            });
        });
    }
);
