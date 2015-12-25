'use strict';

angular.module('social-net.posts').

controller('PostsCtrl', function ($scope, PostModel, ProfileModel) {
    var MyId = 5;

    //$scope.posts = PostModel.getByUserId(MyId);
    $scope.posts = ProfileModel.getPosts(1);

});
