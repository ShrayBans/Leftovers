angular
  .module('Codesmith.HomeController', ['ngRoute'])
  .controller('HomeController', HomeController);


function HomeController($scope) {
  $scope.unit = "Unit 10 Prototype";
}
