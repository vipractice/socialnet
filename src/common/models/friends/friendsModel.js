'use strict';

angular.module('social-net.common.models.friends', ['ngResource']).

factory ('FriendsModel', ['$resource', function ($resource) {
    var friendUrl = 'http://localhost:3000/friends?profileId=:id&_expand=user';

    var FriendsModel = $resource(friendUrl , { id: '@id'}, {
        getAll: {
            method: 'GET',
            url: friendUrl,
            isArray: true
        }
    });

    return {
        getFriends: function (id) {
            return FriendsModel.getAll({ id: id });
        }
    };
}]);