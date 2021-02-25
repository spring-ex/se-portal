angular.module('app').factory('NotificationsFactory', function($q, $http, LoginFactory) {
    var factory = {};
    var URL = LoginFactory.getBaseUrl() + '/secure';

    factory.sendFeesNotification = function(obj) {
        var d = $q.defer();
        $http({
            method: 'POST',
            url: URL + '/feesNotification',
            data: obj,
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

    factory.sendCustomNotification = function(obj) {
        var d = $q.defer();
        $http({
            method: 'POST',
            url: URL + '/customNotification',
            data: obj,
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

    factory.broadcastNotification = function(obj) {
        var d = $q.defer();
        $http({
            method: 'POST',
            url: URL + '/broadcastNotification',
            data: obj,
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