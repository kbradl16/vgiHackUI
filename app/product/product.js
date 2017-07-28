'use strict';

angular.module('myApp.product', ['ngRoute'])
  .controller('ProductController', ['data', '$routeParams', 'get', function(data, $routeParams, get) {
    this.data = data;

    this.last = 0;//data.projectProperties[0].data.builds.length;

    console.log('builds', data.projectProperties[0]);
  }]);
