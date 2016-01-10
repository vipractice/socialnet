'use strict';

angular.module('social-net.profile').

controller('ProfileCtrl', [
    '$scope', '$state', '$stateParams',
    'ProfileModel', 'AuthService',
    function (
        $scope, $state, $stateParams,
        ProfileModel, AuthService) {

    var step = 5;

    var postLimits = {
        start: 0,
        end: step
    };

    if ($stateParams && $stateParams.id) {
        ProfileModel.getById($stateParams.id).then(function(response) {
            $scope.profile = response;
            $scope.profile.birthday = new Date($scope.profile.birthday);
            loadPosts();
            $scope.showEditBtn = false;
        });
    } else {
        $scope.profile = AuthService.user;
        loadPosts();
        $scope.showEditBtn = true;
    }

    $scope.posts = [];

    $scope.showMoreBtn = true;

    $scope.updateUser = function() {
        ProfileModel.updateUser($scope.profile).then(function(response) {

        });
    };

    $scope.createPost = function(post){
        post.createdAt = new Date();
        post.userId = AuthService.user.id;
        ProfileModel.createPost(post).then(function(response){

        });
    };

    $scope.loadPosts = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        updateLimit();
        loadPosts();
    };

    function updateLimit() {
        postLimits.start = postLimits.end;
        postLimits.end = postLimits.end + step;
    }

    function loadPosts() {
        ProfileModel.getPostsByPage($scope.profile.id, postLimits).then(function(response) {
            if (response.length) {
                $scope.posts = _.union($scope.posts, response);
                if (response.length < step) {
                    $scope.showMoreBtn = false;
                }
            } else {
                $scope.showMoreBtn = false;
            }

        });
    }


}]);
