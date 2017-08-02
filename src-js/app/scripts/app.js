'use strict';

angular.module('store', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl',
        reloadOnSearch: false
      })
      .when('/products/:id', {
        templateUrl: 'views/product.html',
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
  });
