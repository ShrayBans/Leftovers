angular
  .module('OptionsController', ['ngRoute', 'FoodFactory'])
  .controller('OptionsController', function ($scope, $location, FoodFactory, CalorieFactory) {
  if (!CalorieFactory.completed) $location.path('/');

  $scope.calories = CalorieFactory.getCalories();
  $scope.restaurants = CalorieFactory.getRestaurantsArray();
  // $scope.data = [];
  FoodFactory.getList($scope.restaurants[0].restaurant)
  		.then(function(res) {
  			console.log(res);
  			// $scope.restaurants[i].data = response;
  		});

  // for (var i = 0; i < $scope.restaurants.length; i++) {
  // 	console.log(i, $scope.restaurants[i].restaurant)
  // 	FoodFactory.getList($scope.restaurants[i].restaurant)
  // 		.then(function(res) {
  // 			console.log(i, res);
  // 			$scope.restaurants[i].data = response;
  // 		});
  // }

});