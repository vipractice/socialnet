'use strict';

angular.module('social-net.profile').

controller('ProfileCtrl', function ($scope, ProfileModel) {
    var MyId = 2;


    $scope.profile = ProfileModel.getById(MyId);

    $scope.posts = ProfileModel.getPostsByPage(MyId, 0, $scope.limit);

});
