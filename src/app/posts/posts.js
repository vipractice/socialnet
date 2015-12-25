'use strict';

angular.module('social-net.posts', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('posts', {
            url: '^/posts',
            controller: 'PostsCtrl',
            templateUrl: 'posts/posts.tpl.html'
        });
});