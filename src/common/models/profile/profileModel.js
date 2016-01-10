'use strict';

angular.module('social-net.common.models.profile').

factory ('ProfileModel',  function (ProfileRsr) {

    return {
        getUser: function (id){
          return ProfileRsr.getUser({id: id});
        },

        getById: function (id) {
            return ProfileRsr.get({ id: id }).$promise;
        },

        getPosts: function(id) {
            return ProfileRsr.getPosts({ id: id });
        },

        getPostsByPage: function (id, params) {
           return ProfileRsr.getPostsByPage({ id: id, start: params.start, end: params.end }).$promise;
        },

        updateUser: function(profile) {
            return ProfileRsr.updateUser(profile).$promise;
        },

        createPost: function (newPost) {
            return ProfileRsr.createPost(newPost).$promise;
        }
    };

});