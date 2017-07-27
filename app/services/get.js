'use strict';

angular.module('myApp.get', [])

.factory('gettest', ['$resource', function($resource) {
	var service = {
		getProduct: getProduct
	};
	
	return service;
	
	//////////////////
	
	function getProduct(getProduct){
		
		 var resource = $resource('webService/AllProducts:productId', {productId: '@id'});

		 return resource.get({userId:getProduct});
			
	}
												
	function getProjects(getProduct){
		
		// var resource = $resource('webService/AllProjects:productId', {productId: '@id'});

		// return resource.get({userId:getProduct});
	}
	
	function getProjects(getProduct){
		
		// var resource = $resource('webService/AllProjectRuns:productId', {productId: '@id'});

		// return resource.get({userId:getProduct});
	}			
												
												
												
	function getProjects(getProduct){
		
		// var resource = $resource('webService/AllProjectRuns:productId', {productId: '@id'});

		// return resource.get({userId:getProduct});
	}	
		
	function getProjects(getProduct){
		
		// var resource = $resource('webService/AllTestCaseRuns:productId', {productId: '@id'});

		// return resource.get({userId:getProduct});
	}	
		

												
		
												
												
												
												
												//Post
//												/ProductRequest/{name}
//												/ProjectRequest/{productName}/{projectName}
//												/ProjectRunRequest/{projectName}/{codePath}/{buildURL}
												
}]);