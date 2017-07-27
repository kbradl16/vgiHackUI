'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.get'])
.controller('View1Ctrl', ['gettest', function(gettest) {
  var vm = this;

	vm.test = "Test";
	//vm.getAllProducts = gettest.getAllProducts("test");
	// this.getProjects = gettest.getProjects("test");
	// this.getProduct = gettest.getProducts("test");
	// this.getAllProjectRuns = gettest.getAllProjectRuns("test");
	// this.getAllTestCaseRuns = gettest.getAllTestCaseRuns("test");
}]);