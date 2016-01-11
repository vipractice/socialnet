'use strict';

angular.module('social-net.friends').

controller('FriendsCtrl', function ($scope, $state, $stateParams, FriendsModel, AuthService) {

    AuthService.checkAuth().then(function() {
        $scope.friends = FriendsModel.getFriends(AuthService.user.id);
    });

    $scope.removeFriend = function(friend){
        FriendsModel.removeFriend(friend).then(function(response) {
            _.remove($scope.friends, function(item) {
                return item.id === friend.id;
            });
        });
    };
});
