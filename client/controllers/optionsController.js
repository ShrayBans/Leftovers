angular
  .module('OptionsController', ['ngRoute', 'FoodFactory'])
  .controller('OptionsController', function ($scope, $location, FoodFactory, CalorieFactory) {
  $scope.calories = CalorieFactory.getCalories();
  $scope.restaurants = CalorieFactory.getRestaurants();
  if (!CalorieFactory.completed) $location.path('/');
});