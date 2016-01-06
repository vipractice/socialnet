'use strict';

angular.module('social-net.profile').

controller('ProfileCtrl', function ($scope, ProfileModel) {

    var MyId = 1;
    $scope.start = 0;
    $scope.end = 5;


    $scope.profile = ProfileModel.getById(MyId);

    $scope.posts = ProfileModel.getPostsByPage(MyId, $scope.start, $scope.end);

    $scope.updateUser = function() {
        ProfileModel.updateUser($scope.profile).then(function(response) {
            alert('Profile is updated');
        });
    };

    $scope.limit = function() {
        $scope.start = $scope.end;
        $scope.end = $scope.end+5;
        $scope.posts = ProfileModel.getPostsByPage(MyId, $scope.start, $scope.end);

        if ($scope.posts.length > $scope.end ){
            $scope.end = true;
        }

    };

});
