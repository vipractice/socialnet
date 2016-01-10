'use strict';

angular.module('social-net.friends').

controller('FriendsCtrl', function ($scope, $state, $stateParams, FriendsModel, ProfileModel) {

    var MyId = 1;

    $scope.friend = FriendsModel.getFriends(MyId);

    $scope.profile = ProfileModel.getById(MyId);
    $scope.loadProfile = function ($event,id){
        $event.preventDefault();
        $event.stopPropagation();
        loadProfile(id);
    };

    function loadProfile (id){
        $state.path('profile',{reload:true});
        $scope.profile = ProfileModel.getById(id);

    }

});
