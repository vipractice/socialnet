'use strict';

angular.module('social-net.common.components.post')

    .directive('snPost', function () {

        return {
            restrict: 'E',
            scope: {
                post: '=snPost'
            },
            templateUrl: '../common/components/post/post.tpl.html',
            link: function linkFn (scope, element, attrs) {

            }
        };

    });
