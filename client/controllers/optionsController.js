angular
  .module('OptionsController', ['ngRoute', 'FoodFactory'])
  .controller('OptionsController', function ($scope, FoodFactory, CalorieFactory) {
  $scope.calories = CalorieFactory.getCalories();
});