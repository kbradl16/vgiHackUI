'use strict';

angular.module('myApp.product', ['ngRoute'])
  .controller('ProductController', ['data', '$routeParams', 'get', function(data, $routeParams, get) {
    this.data = data;
  }]);
