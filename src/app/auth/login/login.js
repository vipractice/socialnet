'use strict';

angular.module('social-net.auth.login', ['ui.router']).

    config(function config($stateProvider) {

        $stateProvider
            .state('login', {
                url: '^/login',
                controller: 'LoginCtrl',
                templateUrl: 'auth/login/login.tpl.html'
            });
    });