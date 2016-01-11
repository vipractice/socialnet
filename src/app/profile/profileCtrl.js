'use strict';

angular.module('social-net.profile').

controller('ProfileCtrl', [
    '$scope', '$state', '$stateParams',
    'ProfileModel', 'PostModel', 'AuthService',
    function (
        $scope, $state, $stateParams,
        ProfileModel, PostModel, AuthService) {

    var step = 5;

    var postLimits = {
        start: 0,
        end: step
    };

    if ($stateParams && $stateParams.id) {
        ProfileModel.getById($stateParams.id).then(function(response) {
            $scope.profile = response;
            $scope.newPost = new PostModel(AuthService.user.id, $scope.profile.id);
            $scope.showEditBtn = false;
            loadPosts();
        });
    } else {
        $scope.profile = AuthService.user;
        $scope.profile.birthday = new Date($scope.profile.birthday);
        $scope.newPost = new PostModel(AuthService.user.id, AuthService.user.id);
        $scope.showEditBtn = true;
        loadPosts();
    }

    $scope.posts = [];

    $scope.showMoreBtn = true;

    $scope.updateUser = function() {
        ProfileModel.updateUser($scope.profile);
    };

    $scope.createPost = function(){
        $scope.newPost.save().then(function(post) {
            $scope.posts.unshift(post);
            $scope.newPost = new PostModel(AuthService.user.id);
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
