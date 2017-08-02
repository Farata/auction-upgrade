'use strict';

(function () {
  var MainController = function (productService, $location) {
    var _this = this;
    _this.products = [];

    this.productService = productService;
    this.$location = $location;
    this.categories = [];
    this.searchFormData = {};

    // Gets url params as dictionary
    var queryParams = $location.search();

    // Price must be parsed to float, otherwise will not be shown
    if(queryParams["price"]) {
      queryParams['price'] = parseFloat(queryParams['price']);
    }

    // Init form data with location params
    _.defaults(_this.searchFormData, queryParams);

    // Init categories
    this.productService
      .getCategories()
      .then(function (categories) { _this.categories = categories; });

    // Search products
    this.search();
  };

  MainController.prototype.search = function () {
    var _this = this;

    // Set query params from dictionary
    this.$location.search(this.searchFormData);

    this.productService
      .search(this.searchFormData)
      .then(function (data) { _this.products = data; });
  };

  MainController.$inject = ['ProductService', '$location'];
  angular.module('store').controller('MainController', MainController);
}());
