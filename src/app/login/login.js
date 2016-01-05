'use strict';

angular.module('social-net.login', ['ui.router']).

    config(function config($stateProvider) {

        $stateProvider
            .state('login', {
                url: '^/login',
                controller: 'LoginCtrl',
                templateUrl: 'login/login.tpl.html'
            });
    });