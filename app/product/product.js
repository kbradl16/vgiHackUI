'use strict';

angular.module('myApp.product', ['ngRoute'])
  .controller('ProductController', ['data', '$routeParams', 'get', '$location', function(data, $routeParams, get, $location) {
    this.data = data;

    this.last = 0;//data.projectProperties[0].data.builds.length;

    console.log('builds', data.projectProperties[0]);

    this.goToHistory = function(projectId) {
      $location.path('/history/' + projectId);
    };
  }]);
