angular
  .module('OptionsController', ['ngRoute', 'FoodFactory'])
  .controller('OptionsController', function ($scope, $location, FoodFactory, CalorieFactory) {
  if (!CalorieFactory.completed) $location.path('/');

  $scope.calories = CalorieFactory.getCalories();
  $scope.restaurants = FoodFactory.getData();
  

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