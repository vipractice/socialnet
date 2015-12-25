'use strict';

angular.module('social-net.common.models.profile', ['ngResource']).

factory ('ProfileModel', ['$resource', function ($resource) {

    var ProfileModel = $resource('http://localhost:3000/users/:id', { id: '@id' });

    return {
        getById: function (id) {
            return ProfileModel.get({ id: id });
        }
    };

}]);