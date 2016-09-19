angular
  .module('OptionsController', ['ngRoute', 'FoodFactory'])
  .controller('OptionsController', function ($scope, $location, FoodFactory, CalorieFactory) {
  if (!CalorieFactory.completed) $location.path('/');

  $scope.calories = CalorieFactory.getCalories();
  $scope.restaurants = CalorieFactory.getRestaurantsArray();
  $scope.data = [];
  for (var i = 0; i < $scope.restaurants.length; i++) {
  	$scope.restaurants
  }
  

  $scope.data = FoodFactory.getList()
});