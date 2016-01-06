'use strict';

angular.module('social-net.common.models.profile').

factory ('ProfileModel',  function (ProfileRsr) {

    return {
        getUser: function (id){
          return ProfileRsr.getUser({id: id});
        },

        getById: function (id) {
             return ProfileRsr.get({ id: id },function(response){
                response.birthday = new Date(response.birthday);
                return response;

             });
        },

        getPosts: function(id) {
            return ProfileRsr.getPosts({ id: id });
        },

        getPostsByPage: function (id, start, end) {

           return ProfileRsr.getPostsByPage({ id: id, start:start,end: end})
        },

        updateUser: function(profile) {
            return ProfileRsr.updateUser(profile).$promise;
        },



        start: 0,
        end:2

    };

});