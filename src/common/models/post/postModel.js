'use strict';

angular.module('social-net.common.models.post', ['ngResource']).

factory ('PostModel', ['$resource', function ($resource) {

    var PostModel = $resource('http://localhost:3000/posts/:id', { id: '@id' });

    return {
        getByUserId: function (id) {
            return PostModel.get({ id: id });
        }
    };

}]);