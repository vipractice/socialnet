'use strict';

angular.module('social-net.friends').

controller('FriendsCtrl', function ($scope, FriendsModel, ProfileModel) {

    var MyId = 4;


    $scope.friends = FriendsModel.getFriends(MyId);
    console.log($scope.friends);

    $scope.users = ProfileModel.getUser($scope.friendId);
    console.log($scope.users);

    $scope.profile = ProfileModel.getById(MyId);

});
