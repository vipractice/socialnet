'use strict';

angular.module('social-net.common.models.friends', ['ngResource']).

factory ('FriendsModel', ['$resource', function ($resource) {

    var friendUrl = 'http://localhost:3000/friends?profileId=:id&_expand=user';


    var FriendsModel = $resource(friendUrl , { id: '@id'}, {
        getAll: {
            method: 'GET',
            url: friendUrl,
            isArray: true
        },

        deleteFriend: {
            method: 'DELETE',
            url: 'http://localhost:3000/friends/:id'
        },

        saveFriend:{
            method: 'POST',
            url: 'http://localhost:3000/friends/'
        }
    });

    return {
        getFriends: function (id) {
            return FriendsModel.getAll({ id: id });
        },

        removeFriend: function(friend) {
            return FriendsModel.deleteFriend({ id: friend.id }).$promise;
        },

        addFriend: function (userToSave) {
            return FriendsModel.saveFriend(userToSave).$promise;
        }
    };
}]);