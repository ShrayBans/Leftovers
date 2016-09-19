angular
  .module('CalorieFactory', [])
  .factory('CalorieFactory', function () {

  	var object = {};

  	object.getCalories = function() {
  		return this.calories;
  	};

  	object.getRestaurants = function() {
  		return this.restaurants;
  	};

  	object.calories = 2900;

  	object.restaurants = {
  		chipotle: true,
  		mcdonalds: true,
  		tacobell: true,
  		subway: false,
  		innout: false,
  		starbucks: false
  	};

  	object.completed = false;

  	return object;
  });
