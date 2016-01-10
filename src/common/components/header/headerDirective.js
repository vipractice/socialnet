'use strict';

angular.module('social-net.common.components.header')

.directive('snHeader', ['AuthService', function (AuthService) {

    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@snHeaderTitle',
            homeState: '@snHeaderHomeState'
        },
        templateUrl: '../common/components/header/header.tpl.html',
        link: function linkFn (scope, element, attrs) {

            scope.$on('user-authorized', function(event, data) {
                scope.isAuthorized = data.isAuthorized;

                if (scope.isAuthorized) {
                    scope.user = AuthService.user;
                }
            });
        }
    };

}]);
