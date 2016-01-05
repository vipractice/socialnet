'use strict';

angular.module('social-net.posts').

controller('PostsCtrl', function ($scope, PostModel, ProfileModel) {
    var MyId = 1;

    //$scope.posts = PostModel.getByUserId(MyId);
    $scope.posts = ProfileModel.getPosts(MyId);

});
