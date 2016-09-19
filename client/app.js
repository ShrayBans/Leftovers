var app = angular
  .module('myApp', [
    'ngRoute',
    'HomeController',
    'OptionsController'
  ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    .when('/blah', {
      templateUrl: './partials/options.html',
      controller: 'OptionsController'
    })
    .otherwise({
        redirectTo: '/'
    });
}
