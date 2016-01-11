'use strict';

angular.module('social-net.users').

controller('UsersCtrl', function ($scope, $state, $stateParams, ProfileResource, FriendsModel, AuthUser) {

    var limits = {
        start: 0,
        limit: 8
    };

    $scope.users = ProfileResource.getUsersByPage({
        start: limits.start,
        limit: limits.limit
    });

    $scope.showMoreUsers = function ($event){
        $event.preventDefault();
        $event.stopPropagation();
        updateLimit();
        $scope.users = ProfileResource.getUsersByPage({
            start: limits.start,
            limit: limits.limit
        });
    };

    $scope.searchObj = {};

    $scope.addFriend = function (user){

        var userToSave = {
            profileId: AuthUser.id,
            userId: user.id
        };

        FriendsModel.addFriend(userToSave).then(function() {
            user.hideBtn = true;
        });
    };

    $scope.resetSearch = function (){
        $scope.users = ProfileResource.getAll();
    };

    $scope.search = function() {
        var searchTemp = {};

        _.forEach($scope.searchObj, function(item, key) {
            if (item) {
                searchTemp[key] = item;
            }
        });

        $scope.users = ProfileResource.getAll(searchTemp);
    };

    function updateLimit() {
        limits.start = limits.start + limits.limit;
    }
});
