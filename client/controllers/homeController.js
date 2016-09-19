angular
  .module('HomeController', ['ngRoute', 'FoodFactory', 'CalorieFactory'])
  .controller('HomeController', function ($scope, $location, CalorieFactory, FoodFactory) {

  	$scope.slider = 
  		{
  			fats: 100,
  			protein: 200,
  			carbs: 300,
  			step: 5
  		};

  	$scope.restaurants = CalorieFactory.getRestaurants();
  	$scope.error = false;

  	$scope.calories = Math.round(($scope.slider.fats * 9 + $scope.slider.protein * 4 + $scope.slider.carbs * 4) /10) * 10;

  	$scope.updateSliders = function() {
  		$scope.slider.fats = $scope.calories * .30/9;
  		$scope.slider.protein = $scope.calories * .30/4;
  		$scope.slider.carbs = $scope.calories * .40/4;
  		if($scope.calories > 4000) $scope.error = true;
  		else $scope.error = false;
  	};

  	$scope.errorHandle = function() {
  		if($scope.calories > 4000) $scope.errorMsg = 'Enter calorie amount under 4000';
  	};

  	$scope.submitMacros = function() {
  		CalorieFactory.calories = $scope.calories;
  		CalorieFactory.restaurants = $scope.restaurants;
  		CalorieFactory.completed = true;
  		console.log('Restaurants', CalorieFactory.getRestaurantsArray());
  		FoodFactory.getList(CalorieFactory.getRestaurantsArray());
  		$location.path('/results');
  	};



});