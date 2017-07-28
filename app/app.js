'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.view1',
  'myApp.product',
  'myApp.version',
  'myApp.get'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl',
      controllerAs: 'view1'
    })
    .when('/product', {
      templateUrl: 'product/product.html',
      controller: 'ProductController',
      controllerAs: 'view2',
      resolve: {
        data: function ($route, get) {
           	 return get.testGet($route.current.params.id);
        }
      }
    })
    .when('/product/:id', {
      templateUrl: 'product/product.html',
      controller: 'ProductController',
      controllerAs: 'product',
      resolve: {
        data: function ($route, get) {
        	
        	var data = {};

        	return get.getSpecificProduct($route.current.params.id).$promise.then(function(productData){
				//return productData;

				angular.forEach(productData.projectProperties, function(projectPropertiesData){
					get.getSpecificProject(projectPropertiesData.projectId).$promise.then(function(projectData){
						projectPropertiesData.data = projectData;
					});
				});

				console.log('productData', productData);
				return productData;
        	});
        }
      }
    })
    .otherwise({redirectTo: '/'});
}]);