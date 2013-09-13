'use strict';

angular.module('therouxApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.trips = [
      'los angeles',
      'barcelona',
      'cape town',
      'moscow',
      'hanoi',
      'rio de janeiro'
    ];
  }]);
