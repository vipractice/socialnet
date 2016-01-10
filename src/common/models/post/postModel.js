'use strict';

angular.module('social-net.common.models.post', ['ngResource']).

factory ('PostModel', ['PostResource', function (PostResource) {

    function PostModel(userId) {
        this.userId = userId;
        this.subject = '';
        this.description = '';
        this.createdAt = new Date();
    }

    PostModel.prototype.save = function() {
        return PostResource.save({
            subject: this.subject,
            description: this.description,
            userId: this.userId,
            createdAt: this.createdAt
        }).$promise;
    };

    return PostModel;

}]);