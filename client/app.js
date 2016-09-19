var app = angular
  .module('myApp', [
  	'rzModule',
    'ngRoute',
    'HomeController',
    'OptionsController',
    'FoodFactory',
    'CalorieFactory'
  ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    .when('/results', {
      templateUrl: './partials/results.html',
      controller: 'OptionsController'
    })
    .otherwise({
        redirectTo: '/'
    });
}
