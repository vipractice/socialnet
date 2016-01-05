'use strict';

angular.module('social-net.friends').

controller('FriendsCtrl', function ($scope, FriendsModel, ProfileModel) {

    var MyId = 1;

    $scope.friend = FriendsModel.getFriends(MyId);

    $scope.profile = ProfileModel.getById(MyId);

});
