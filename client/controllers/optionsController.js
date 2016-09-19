angular
  .module('OptionsController', ['ngRoute', 'FoodFactory'])
  .controller('OptionsController', function ($scope, $location, FoodFactory, CalorieFactory) {
  if (!CalorieFactory.completed) $location.path('/');

  $scope.formatted = {
  	mcdonalds: "McDonalds",
  	chipotle: "Chipotle",
  	tacobell: "Taco Bell",
  	subway: "Subway",
  	innout: "In N' Out",
  	starbucks: "Starbucks"
  };

  $scope.calories = CalorieFactory.getCalories();
  $scope.restaurants = FoodFactory.getData();

  $scope.formatRestaurant = function(unformatted) {
  	return $scope.formatted[unformatted];
  };

  $scope.startOver = function() {
  	$location.path('/');
  	CalorieFactory.completed = false;
  };


  // for (var i = 0; i < $scope.restaurants.length; i++) {
  // 	$scope.num = 0;
  // 	// console.log(i, $scope.restaurants[i].restaurant)
  // 	FoodFactory.getList($scope.restaurants[i].restaurant)
  // 		.then(function(res) {
  // 			console.log(i, res);
  // 			$scope.restaurants[$scope.num++].data = res;
  // 		});
  // }

});