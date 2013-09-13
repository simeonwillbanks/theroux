'use strict';

angular.module('therouxApp')
  .directive('map', function () {
    return {
      restrict: 'E',
      scope: {
        trips: '=',
      },
      templateUrl: 'templates/map.html',
      link: function (scope, element, attrs) {
        // we can iterate scope.trips
        // Most likely, D3 logic here
      }
    };
  });
