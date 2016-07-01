angular
  .module('adoptMe', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'availableController',
        controllerAs: 'available',
        templateUrl: 'available/available.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
