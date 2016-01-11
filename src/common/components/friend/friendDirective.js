'use strict';

angular.module('social-net.common.components.friend')

    .directive('snFriend', function () {

        return {
            restrict: 'E',
            scope: {
                friend: '=snFriend',
                onClick: '&snFriendOnClick',
                type: '@snFriendType'
            },
            templateUrl: '../common/components/friend/friend.tpl.html',
            link: function linkFn (scope, element, attrs) {

                scope.user = angular.isDefined(scope.friend.user) ? scope.friend.user : scope.friend;

                scope.btnText = (scope.type === 'friend') ? 'Remove from friends' : 'Make friend';
            }
        };

    });
