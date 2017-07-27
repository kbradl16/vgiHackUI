'use strict';

angular.module('myApp.get', [])

.factory('get', ['$resource', function($resource) {
	var service = {
		testGet: testGet,
		getAllProducts: getAllProducts,
		getAllProjects: getAllProjects,
		getAllProjectRuns: getAllProjectRuns,
		getAllTestCaseRuns: getAllTestCaseRuns,
	};
	
	return service;
	
	//////////////////

	function testGet(testId){
		console.log('testing', testId);
		return 'Product ' + testId;
	}
	
	function getAllProducts(){
		
		 var resource = $resource('webService/AllProducts');

		 return resource.get();
	}

												
	function getAllProjects(){

		var resource = $resource('webService/AllProjects');

		return resource.get();
	}
	
	function getAllProjectRuns(projectRuns){
		
		var resource = $resource('webService/AllProjectRuns:getAllProjectRuns', {getAllProjectRuns: '@getAllProjectRuns'});

		return resource.get({getAllProjectRuns: projectRuns});
	}			
																			
												
	// function getAllProjectRuns(projectRuns){
		
	// 	var resource = $resource('webService/AllProjectRuns:getAllProjectRuns', {getAllProjectRuns: '@getAllProjectRuns'});

	// 	return resource.get({getAllProjectRuns: projectRuns});
	// }	
		
	function getAllTestCaseRuns(testCaseRuns){
		
		var resource = $resource('webService/AllTestCaseRuns:AllTestCaseRuns', {AllTestCaseRuns: '@AllTestCaseRuns'});

		return resource.get({AllTestCaseRuns: testCaseRuns});
	}	
		

												
		
												
												
												
												
												//Post
//												/ProductRequest/{name}
//												/ProjectRequest/{productName}/{projectName}
//												/ProjectRunRequest/{projectName}/{codePath}/{buildURL}
												
}]);