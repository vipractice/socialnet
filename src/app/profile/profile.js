'use strict';

angular.module('social-net.profile', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('profile', {
            url: '^/profile',
            controller: 'ProfileCtrl',
            templateUrl: 'profile/profile.tpl.html'
        })
        .state('userProfile', {
            url: '/profile/:id',
            controller: 'ProfileCtrl',
            templateUrl: 'profile/profile.tpl.html'
        });
});