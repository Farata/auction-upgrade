'use strict';

(function () {
  var ProductController = function (product, reviews) {
    this.reviews = reviews || [];
    this.product = product || {};
    this.product.avgRating = (reviews
        .map(function (r) { return r.rating; })
        .reduce(function (l, r) { return l + r; }, 0) / reviews.length) || 0;
  };

  ProductController.$inject = ['product', 'reviews'];
  angular.module('store').controller('ProductController', ProductController);
}());
