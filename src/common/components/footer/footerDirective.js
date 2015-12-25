'use strict';

angular.module('social-net.common.components.footer')

.directive('snFooter', function () {

    return {
        restrict: 'E',
        transclude: true,
        scope: {

        },
        templateUrl: '../common/components/footer/footer.tpl.html',
        link: function linkFn (scope, element, attrs) {

        }
    };

});
