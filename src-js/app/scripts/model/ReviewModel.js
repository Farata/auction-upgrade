'use strict';

(function () {

  var ReviewModel = function () {
    this.id = -1;
    this.productId = -1;
    this.timestamp = '0000-00-00T00:00:00+00:00';
    this.user = '';
    this.rating = 0;
    this.comment = '';
  };

  angular.module('store').value('ReviewModel', ReviewModel);
}());

