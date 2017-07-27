'use strict';

angular.module('myApp.view1', ['ngRoute'])
.controller('View1Ctrl', ['get', function(get) {
	var vm = this;

	vm.productsList = [
		{
			productName: "Product 1 name",
			description: `This is a retail product for retail people who want to use vanguards 
				retail services. BTW this is the coolest product on the planet. We are going to make millions!!!`,
			productOwner: "Kyle Bradley",
			productId: 1
		},
		{
			productName: "Product 2 name",
			description: `This is an institutional application, I lied... this is the coolest product on the planet`,
			productOwner: "Kyle Bradley",
			productId: 2
		},
		{
			productName: "Product 3 name",
			description: `This is a retail product for retail people who want to use vanguards 
				retail services. BTW this is the coolest product on the planet. We are going to make millions!!!`,
			productOwner: "Kyle Bradley",
			productId: 3
		}
	];
	//vm.getAllProducts = gettest.getAllProducts("test");
	// this.getProjects = gettest.getProjects("test");
	// this.getProduct = gettest.getProducts("test");
	// this.getAllProjectRuns = gettest.getAllProjectRuns("test");
	// this.getAllTestCaseRuns = gettest.getAllTestCaseRuns("test");
}]);