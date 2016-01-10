'use strict';

angular.module('social-net.auth.logout', ['ui.router']).

    config(function config($stateProvider) {

        $stateProvider
            .state('logout', {
                url: '^/logout',
                controller: 'LogoutCtrl'
            });
    });