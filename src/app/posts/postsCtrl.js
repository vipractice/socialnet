'use strict';

angular.module('social-net.posts').

controller('PostsCtrl', function ($scope, PostModel) {
    var MyId = 5;

    $scope.posts = PostModel.getByUserId(MyId);

});
