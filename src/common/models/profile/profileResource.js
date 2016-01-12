'use strict';

angular.module('social-net.common.models.profile').

factory ('ProfileResource', ['$resource', function ($resource) {

    var profileUrl = 'http://localhost:3000/users/:id';

    return $resource(profileUrl, { id: '@id'}, {

        updateUser: {
            method: 'PUT'
        },

        getUser: {
            method: 'GET',
            url: profileUrl,
            isArray: true
        },

        getPosts: {
            method: 'GET',
            url: profileUrl + '/posts?_sort=createdAt&_order=DESC',
            isArray: true
        },

        getPostsByPage: {
            method: 'GET',
            url: profileUrl + '/posts?_sort=createdAt&_order=DESC&_embed=comments&_start=:start&_end=:end',
            isArray: true
        },
        getUsersByPage: {
            method: 'GET',
            url: 'http://localhost:3000/users'+'?_start=:start&_end=:end',
            isArray: true
        },

        getAll: {
            method: 'GET',
            url: 'http://localhost:3000/users',
            isArray: true
        }

    });

}]);