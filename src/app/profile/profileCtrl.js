'use strict';

angular.module('social-net.profile').

controller('ProfileCtrl', function ($scope,$http, ProfileModel) {

    var MyId = 1;

    $scope.profile = ProfileModel.getById(MyId);

    $scope.posts = ProfileModel.getPostsByPage(MyId, 0, $scope.limit);

    $scope.updateUser = function() {
        ProfileModel.updateUser($scope.profile).then(function(response) {
            alert('Profile is updated');
        });
    };

});
