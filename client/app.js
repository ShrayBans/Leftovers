var app = angular
  .module('myApp', [
    'ngRoute',
    'Codesmith.HomeController',
  ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    });
}
