'use strict';

angular.module('myApp.product', ['ngRoute'])
  .controller('ProductController', ['data', '$routeParams', 'get', function(data, $routeParams, get) {
    this.id = data;

    this.product = get.getProductById().get({productId: $routeParams.id});
  }]);
