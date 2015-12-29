'use strict';

angular.module('social-net.friends', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('friends', {
            url: '^/friends',
            controller: 'FriendsCtrl',
            templateUrl: 'friends/friends.tpl.html'
        });
});