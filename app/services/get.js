'use strict';

angular.module('myApp.get', [])

.factory('get', ['$resource', function($resource) {
	var service = {
		testGet: testGet,
		getAllProducts: getAllProducts,
    getProjectById: getProjectById,
		getSpecificProduct: getSpecificProduct,
		getSpecificProject: getSpecificProject,
		getAllProjectRuns: getAllProjectRuns,
		getAllTestCaseRuns: getAllTestCaseRuns,
	},
	PRODUCTS_ROUTE = 'http://localhost:8080/ssot-webservice-1.0.0-SNAPSHOT/rest/webService/products';
	
	return service;
	
	//////////////////

	function testGet(testId){
		console.log('testing', testId);
		return 'Product ' + testId;
	}
	
	function getAllProducts(){
		var resource = $resource(PRODUCTS_ROUTE);
		
 		return resource.get(function(data){
	 		return data;
		});
	}

	function getProjectById() {
		return $resource('http://localhost:8080/ssot-webservice-1.0.0-SNAPSHOT/rest/webService/projects/:projectId');
	}

												
	function getSpecificProduct(productId){
		var resource = $resource('http://localhost:8080/ssot-webservice-1.0.0-SNAPSHOT/rest/webService/products/' + productId);

 		return resource.get(function(data){
	 		return data;
		});
	}

	function getSpecificProject(projectId){
		var resource = $resource('http://localhost:8080/ssot-webservice-1.0.0-SNAPSHOT/rest/webService/projects/' + projectId);

 		return resource.get(function(data){
	 		return data;
		});
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