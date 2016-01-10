'use strict';

angular.module('social-net.common.services').

    service('AuthService', ['$q', 'ProfileResource', function ($q, ProfileResource) {

        this.user = undefined;

        this.checkAuth = function() {
            var deferred = $q.defer();

            if (localStorage.snUserId && !this.user) {
                ProfileResource.get({ id: localStorage.snUserId }, function(user) {
                    this.user = user;
                    deferred.resolve();
                }.bind(this));
            } else if (localStorage.snUserId && this.user) {
                deferred.resolve();
            } else {
                deferred.reject();
            }

            return deferred.promise;
        };

        this.login = function(user) {
            var deferred = $q.defer();

            if (!user.username || !user.password) {
                deferred.reject();
                return deferred.promise;
            }

            ProfileResource.getAll({
                username: user.username,
                password: user.password
            }, function(response) {
                if (response.length > 0) {
                    this.user = response[0];
                    localStorage.snUserId = this.user.id;
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
            }.bind(this));

            return deferred.promise;
        };

        this.logout = function() {
            this.user = undefined;
            localStorage.snUserId = null;
        };

    }]);