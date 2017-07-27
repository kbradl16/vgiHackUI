'use strict';

angular.module('myApp.view2', ['ngRoute'])
.controller('View2Ctrl', ['data', '$routeParams', 'get', function(data, $routeParams, get) {
	this.id = data;
}]);