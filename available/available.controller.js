angular.module('adoptMe')
  .controller('availableController', function($scope) {
    $scope.doSomething = function() {
      window.alert('I did something!');
      document.createElement("div");
      angular.element(document.getElementsByTagName('body')).append( $scope.doSomething);
    };
  });
