'use strict';

angular.module('social-net.common.components.friend')

    .directive('snFriend', function () {

        return {
            restrict: 'E',
            scope: {
                friend: '=snFriend'
            },
            templateUrl: '../common/components/friend/friend.tpl.html',
            link: function linkFn (scope, element, attrs) {

            }
        };

    });
