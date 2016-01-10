'use strict';

angular.module('social-net.common.models.post').

    factory ('PostResource', ['$resource', function ($resource) {

    var postUrl = 'http://localhost:3000/posts/:id';

    return $resource(postUrl, { id: '@id'});

}]);