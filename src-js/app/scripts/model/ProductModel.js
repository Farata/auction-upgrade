'use strict';

(function () {

  var ProductModel = function () {
    this.id = -1;
    this.title = '';
    this.price = -1;
    this.description = '';
    this.avgRating = 0;
  };

  angular.module('store').value('ProductModel', ProductModel);
}());
