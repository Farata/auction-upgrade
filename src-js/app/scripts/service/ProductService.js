'use strict';

(function () {
  var ProductService = function ($http) {
    // Instance attributes go here:
    this.$http = $http;
  };

  /** List all dependencies required by the service. */
  ProductService.$inject = ['$http'];

  // Instance methods go here:
  ProductService.prototype = {

    /** Returns the list of all available products on the server. */
    getProducts: function () {
      return this.$http.get('/data/products.json')
        .then(function (resp) {
          return resp.data;
        });
    },
    /** Returns the list of products which are meet search criteria */
    search : function (params) {
      var title = params['title'],
          price = params['price'],
          category = params['category'];

      return this.getProducts().then(function (products) {
        return _.filter(products, function (p) {
          return (!title || p.title.contains(title, true))
            && (!price || p.price == price)
            && (!category || p.categories.indexOf(category) != -1);
        });
      });
    },
    /** Returns a product with the specified ID. */
    getProductById: function (id) {
      return this.getProducts().then(function (products) {
        return _.find(products, function (p) {
          return p.id === id;
        });
      });
    },
    /** Returns collection of available categories of products. */
    getCategories : function () {
      return this.getProducts().then(function (products) {
        return _.reduce(products, function (union, product) {
          return _.union(union, product.categories)
        })
      });
    }
  };

  // Register the service within AngularJS DI container.
  angular.module('store').service('ProductService', ProductService);
}());
