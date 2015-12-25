'use strict';

angular.module('social-net.common.models.profile', ['ngResource']).

factory ('ProfileModel', ['$resource', function ($resource) {

    var profileUrl = 'http://localhost:3000/users/:id';

    var ProfileModel = $resource(profileUrl, { id: '@id'}, {
        getPosts: {
            method: 'GET',
            url: profileUrl + '/posts',
            isArray: true },

        getPostsByPage: {
            method: 'GET',
            url: profileUrl + '/posts?_start=:start&_end=:end' ,
            params:{ start:0,end:5},
            isArray: true
        }
    });

    return {
        getById: function (id) {
            return ProfileModel.get({ id: id });
        },

        getPosts: function(id) {
            return ProfileModel.getPosts({ id: id });
        },

        getPostsByPage: function (id, start, end) {
            return ProfileModel.getPostsByPage({ id: id, start:start,end:end})
        }
    };

}]);