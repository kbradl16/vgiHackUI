'use strict';

angular.module('myApp.get', [])

.factory('get', [function() {
	var service {
		getProduct: getProduct
	}
	
	return service;
	
	//////////////////
	
	function getProduct(getProduct){
		
		var resource = $resource('webService/AllProducts:productId', {productId: '@id'});

		return resource.get({userId:getProduct}, function() {
	}
												
	function getProjects(getProduct){
		
		var resource = $resource('webService/AllProjects:productId', {productId: '@id'});

		return resource.get({userId:getProduct}, function() {
	}
	
	function getProjects(getProduct){
		
		var resource = $resource('webService/AllProjectRuns:productId', {productId: '@id'});

		return resource.get({userId:getProduct}, function() {
	}			
												
												
												
	function getProjects(getProduct){
		
		var resource = $resource('webService/AllProjectRuns:productId', {productId: '@id'});

		return resource.get({userId:getProduct}, function() {
	}	
		
	function getProjects(getProduct){
		
		var resource = $resource('webService/AllTestCaseRuns:productId', {productId: '@id'});

		return resource.get({userId:getProduct}, function() {
	}	
		

												
		
												
												
												
												
												//Post
//												/ProductRequest/{name}
//												/ProjectRequest/{productName}/{projectName}
//												/ProjectRunRequest/{projectName}/{codePath}/{buildURL}
												
}]);