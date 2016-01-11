'use strict';

angular.module('social-net.users', ['ui.router']).

config(function config($stateProvider) {

    $stateProvider
        .state('users', {
            url: '^/users',
            controller: 'UsersCtrl',
            templateUrl: 'users/users.tpl.html'
        });
});