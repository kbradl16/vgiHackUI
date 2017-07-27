'use strict';

angular.module('myApp.get', [])

.factory('gettest', ['$resource', function($resource) {
	var service = {
		getProducts: getProducts
	};
	
	return service;
	
	//////////////////
	
	function getProducts(products){
		
		 var resource = $resource('webService/AllProducts:getProducts', {getProducts: '@getProducts'});

		 return resource.get({getProducts: products});
	}

												
	function getProjects(projects){

		var resource = $resource('webService/AllProjects:getProjects', {getProjects: '@getProjects'});

		return resource.get({getProjects: projects});
	}
	
	function getAllProjectRuns(projectRuns){
		
		var resource = $resource('webService/AllProjectRuns:getAllProjectRuns', {getAllProjectRuns: '@getAllProjectRuns'});

		return resource.get({getAllProjectRuns: projectRuns});
	}			
																			
												
	function getAllProjectRuns(projectRuns){
		
		var resource = $resource('webService/AllProjectRuns:getAllProjectRuns', {getAllProjectRuns: '@getAllProjectRuns'});

		return resource.get({getAllProjectRuns: projectRuns});
	}	
		
	function getAllTestCaseRuns(testCaseRuns){
		
		var resource = $resource('webService/AllTestCaseRuns:AllTestCaseRuns', {AllTestCaseRuns: '@AllTestCaseRuns'});

		return resource.get({AllTestCaseRuns: testCaseRuns});
	}	
		

												
		
												
												
												
												
												//Post
//												/ProductRequest/{name}
//												/ProjectRequest/{productName}/{projectName}
//												/ProjectRunRequest/{projectName}/{codePath}/{buildURL}
												
}]);