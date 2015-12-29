'use strict';

angular.module('social-net.common.models.friends', ['ngResource']).

factory ('FriendsModel', ['$resource', function ($resource) {
    var profileUrl = 'http://localhost:3000/users/:id';

    var FriendsModel = $resource(profileUrl , { id: '@id'}, {
        getAll: {
            method: 'GET',
            url: profileUrl + '/friends',
            isArray: true
        }
    });

    return {
        getFriends: function (id) {
            return FriendsModel.getAll({ id: id });
        }
    };
}]);