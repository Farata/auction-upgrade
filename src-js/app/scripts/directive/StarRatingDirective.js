'use strict';

angular.module('store').directive('appStarRating', function () {
  return {
    scope: {
      count: '=',
      average: '=',
      showAverage: '='
    },
    restrict: 'E',
    templateUrl: 'views/partial/starRating.html',
    link: function (scope) {
      var stars = [],
          count = scope.count,
          avg = scope.average;

      for (var i = 1; i <= count; i++) {
        stars.push({
          isEmpty: i > avg
        });
      }

      scope.stars = stars;
    }
  };
});
