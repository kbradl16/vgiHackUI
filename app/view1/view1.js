'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.get'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
		controllerAs: 'view1'
  });
}])

.controller('View1Ctrl', [function(get) {
	this.test = "Test";
	this.getProduct = get.getProduct();	
}]);