/**
 * Created by jhenriquez on 7/28/17.
 */
angular.module('myApp.history', ['myApp.get'])
  .controller('HistoryController', ['$routeParams', 'get', '$location', function($routeParams, get, $location) {
    var vm = this;

    vm.projectProps = get.getProjectById().get({projectId: $routeParams.id});

    vm.goToProducts = function(projectId) {
      $location.path('/product/' + projectId);
    };
  }]);