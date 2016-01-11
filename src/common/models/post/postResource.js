'use strict';

angular.module('social-net.common.models.post').

    factory ('PostResource', ['$resource', function ($resource) {

    var postUrl = 'http://localhost:3000/posts/:id';

    return $resource(postUrl, { id: '@id'}, {

        getAll: {
            method: 'GET',
            url: 'http://localhost:3000/posts?profileId=:id&_embed=comments&_expand=user&_start=:start&_end=:end&_sort=createdAt&_order=DESC',
            isArray: true
        }

    });

}]);