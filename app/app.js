'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
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
    .when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',
      controllerAs: 'view2'
    })
    .when('/view2/:id', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl',
      controllerAs: 'view2',
      resolve: {
        data: function ($route, get) {
           	 return get.testGet($route.current.params.id);
        }
      }
    })
    .otherwise({redirectTo: '/'});
}]);