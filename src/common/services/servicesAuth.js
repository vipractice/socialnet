'use strict';

angular.module('social-net.common.services').

    service('AuthService', ['$q', 'ProfileRsr', function ($q, ProfileRsr) {

        this.user = undefined;

        this.isAuthorized = false;

        this.login = function(user) {
            var deferred = $q.defer();

            ProfileRsr.getAll({
                username: user.username,
                password: user.password
            }, function(response) {
                if (response.length > 0) {
                    this.user = response[0];
                    this.isAuthorized = true;
                    deferred.resolve();
                } else {
                    this.isAuthorized = false;
                    deferred.reject();
                }
            }.bind(this));

            return deferred.promise;
        };

    }]);