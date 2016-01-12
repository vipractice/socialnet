'use strict';

angular.module('social-net.users').

controller('UsersCtrl', function ($scope, $state, $stateParams, ProfileResource, FriendsModel, AuthUser) {
    var step = 8;

    var limits = {
        start: 0,
        end: step
    };

    $scope.users = ProfileResource.getUsersByPage({
        start: limits.start,
        end: limits.end
    });

    $scope.showMoreUsers = function ($event){
        $event.preventDefault();
        $event.stopPropagation();
        updateLimit();

        ProfileResource.getUsersByPage({start: limits.start, end: limits.end},function (response){

            if (response.length){
                $scope.users = _.union($scope.users, response);

                if (response.length < step){
                    $scope.showMoreUsersBtn = false;
                } else {
                    $scope.showMoreUsersBtn = true;
                }
            }
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
        $scope.searchObj = {};
        limits.start =0;
        limits.end = step;
        $scope.users = ProfileResource.getUsersByPage({
            start: limits.start,
            end: limits.end
        });
        $scope.showMoreUsersBtn = false;

    };

    $scope.search = function() {
        var searchTemp = {};

        _.forEach($scope.searchObj, function(item, key) {
            if (item) {
                searchTemp[key] = item;
            }
        });
        if (!_.isEmpty(searchTemp)){
            $scope.users = ProfileResource.getAll(searchTemp);
        }

    };

    function updateLimit() {
        limits.start = limits.start + limits.end;
        limits.end = limits.end + step;
    }
});
