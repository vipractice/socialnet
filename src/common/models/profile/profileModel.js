'use strict';

angular.module('social-net.common.models.profile').

factory ('ProfileModel', ['ProfileResource', 'PostResource', function(ProfileResource, PostResource) {

    return {

        getById: function (id) {
            return ProfileResource.get({ id: id }).$promise;
        },

        getPosts: function(id) {
            return ProfileResource.getPosts({ id: id });
        },

        getPostsByPage: function (id, params) {
           return PostResource.getAll({ id: id, start: params.start, end: params.end }).$promise;
        },

        updateUser: function(profile) {
            return ProfileResource.updateUser(profile).$promise;
        }


    };

}]);