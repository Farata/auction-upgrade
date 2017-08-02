'use strict';

(function () {

  var ReviewService = function ($http) {
    // Instance attributes go here:
    this.$http = $http;
  };

  /** List all dependencies required by the service. */
  ReviewService.$inject = ['$http'];

  // Instance methods go here:
  ReviewService.prototype = {

    /** Returns the list of all available reviews for the specified product. */
    getReviewsForProduct: function (productId) {
      return this.$http.get('/data/reviews.json')
          .then(function (resp) { return resp.data || []; })
          .then(function (data) { return _.filter(data, function (r) {
              return r.productId === productId;
            });
          });
    }
  };

  // Register the service within AngularJS DI container.
  angular.module('store').service('ReviewService', ReviewService);
}());
