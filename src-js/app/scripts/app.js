'use strict';

angular.module('store', ['ngRoute'])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        template: require('../views/main.html'),
        controller: 'MainController',
        controllerAs: 'ctrl',
        reloadOnSearch: false
      })
      .when('/products/:id', {
        template: require('../views/product.html'),
        controller: 'ProductController',
        controllerAs: 'ctrl',
        resolve: {
          // Fetches product from the server before navigating to the product details page.
          product: ['$route', 'ProductService', function ($route, productService) {
            var productId = parseInt($route.current.params.id);
            return productService.getProductById(productId);
          }],
          // Fetches review for the target product ID.
          reviews: ['$route', 'ReviewService', function ($route, reviewService) {
            var productId = parseInt($route.current.params.id);
            return reviewService.getReviewsForProduct(productId);
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

require('./filter/FromNowFilter');
require('./service/ReviewService');
require('./service/ProductService');
require('./controller/MainController');
require('./controller/ProductController');
