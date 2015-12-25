'use strict';

angular.module('social-net.common.components.header')

.directive('snHeader', function () {

    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@snHeaderTitle',
            homeState: '@snHeaderHomeState'
        },
        templateUrl: '../common/components/header/header.tpl.html',
        link: function linkFn (scope, element, attrs) {

        }
    };

});
