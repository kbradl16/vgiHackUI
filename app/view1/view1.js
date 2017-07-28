'use strict';

angular.module('myApp.view1', ['ngRoute'])
.controller('View1Ctrl', ['get', function(get) {
	var vm = this;

	get.getAllProducts().$promise.then(function(data) {
		vm.productsList = data;
	});
}]);