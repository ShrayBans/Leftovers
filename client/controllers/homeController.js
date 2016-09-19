angular
  .module('HomeController', ['ngRoute', 'FoodFactory'])
  .controller('HomeController', function ($scope, $location, CalorieFactory) {

  	$scope.slider = 
  		{
  			fats: 100,
  			protein: 200,
  			carbs: 300,
  			step: 5
  		};

  	$scope.calories = Math.round(($scope.slider.fats * 9 + $scope.slider.protein * 4 + $scope.slider.carbs * 4) /10) * 10;

  	$scope.updateSliders = function() {
  		$scope.slider.fats = $scope.calories * .30/9;
  		$scope.slider.protein = $scope.calories * .30/4;
  		$scope.slider.carbs = $scope.calories * .40/4;
  		$scope.slider = FoodFactory;
  	};

  	$scope.errorHandle = function() {
  		if($scope.calories > 4000) $scope.errorMsg = 'Enter calorie amount under 4000';
  	};

  	$scope.submitMacros = function() {
  		$location.path('/results');
  	};

});