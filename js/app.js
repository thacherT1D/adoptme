var app = angular.module('redditCloneApp', ['ngRoute', 'angularMoment']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
