'use strict';

angular.module('social-net.auth.logout').

    controller('LogoutCtrl', ['$scope', '$state', 'AuthService',
        function ($scope, $state, AuthService) {

            AuthService.logout();
            $state.go('login');

        }]);
