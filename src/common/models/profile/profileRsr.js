'use strict';

angular.module('social-net.common.models.profile').

factory ('ProfileRsr', ['$resource', function ($resource) {

    var profileUrl = 'http://localhost:3000/users/:id';

    return  $resource(profileUrl, { id: '@id'}, {

            getUser: {
                method: 'GET',
                url: profileUrl,
                isArray: true
            },

            updateUser: {
                method: 'PUT'
            },

            getPosts: {
                method: 'GET',
                url: profileUrl + '/posts?_sort=createdAt&_order=ASC',
                isArray: true
            },

            getPostsByPage: {
                method: 'GET',
                url: profileUrl + '/posts?_sort=createdAt&_order=ASC?_start=:start&_end=:end' ,
                params:{ start:0,end:5},
                isArray: true
            },

            getAll: {
                method: 'GET',
                url: 'http://localhost:3000/users',
                isArray: true
            }
        });

}]);