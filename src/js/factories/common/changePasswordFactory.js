angular.module('app').factory('ChangePasswordFactory', function($q, $http, LoginFactory) {
    var factory = {};

    var URL = LoginFactory.getBaseUrl() + '/secure';

    factory.changePassword = function(data) {
        var d = $q.defer();
        $http({
            method: 'PUT',
            url: URL + '/changePassword',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(success) {
            d.resolve(success);
        }, function(error) {
            d.reject(error);
        });
        return d.promise;
    };

    return factory;
});