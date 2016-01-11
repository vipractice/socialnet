'use strict';

angular.module('social-net.common.models.profile').

factory ('ProfileModel', ['ProfileResource', function(ProfileResource) {

    return {

        getById: function (id) {
            return ProfileResource.get({ id: id }).$promise;
        },

        getPosts: function(id) {
            return ProfileResource.getPosts({ id: id });
        },

        getPostsByPage: function (id, params) {
           return ProfileResource.getPostsByPage({ id: id, start: params.start, end: params.end }).$promise;
        },

        updateUser: function(profile) {
            return ProfileResource.updateUser(profile).$promise;
        }


    };

}]);