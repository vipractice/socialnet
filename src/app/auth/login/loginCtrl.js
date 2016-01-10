'use strict';

angular.module('social-net.auth.login').

    controller('LoginCtrl', ['$scope', '$state', '$timeout', 'AuthService',
        function ($scope, $state, $timeout, AuthService) {

            $scope.user = {};

            $scope.message = {};

            $scope.login = function() {
                AuthService.login($scope.user).then(function() {
                    onLogin('success', 'You are successfully logged in');
                }).catch(function() {
                    onLogin('danger', 'You are not logged in');
                });
            };

            function onLogin(type, text) {
                $scope.message = {
                    type: type,
                    text: text,
                    isShown: true
                };

                $timeout(function() {
                    $scope.message.isShown = false;

                    if (AuthService.isAuthorized) {
                        $state.go('profile');
                    }
                }, 1000);
            }

        }]);
