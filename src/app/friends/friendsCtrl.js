'use strict';

angular.module('social-net.friends').

controller('FriendsCtrl', function ($scope, FriendsModel, ProfileModel) {

    var MyId = 5;

    $scope.friends = FriendsModel.getFriends(MyId);

    $scope.profile = ProfileModel.getById(MyId);

});
