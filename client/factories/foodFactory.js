angular
  .module('FoodFactory', [])
  .factory('FoodFactory', function ($http, $q) {
  	var factory = {};

  	factory.getList = function(restaurant){
  		console.log(restaurant)
  	    var defer = $q.defer();
  	    $http({method: 'GET', url: 'http://localhost:3000/food/'+ restaurant, headers: {'Access-Control-Allow-Origin': 'localhost:*'}}).
  	    success(function(data) {
  	        // alter data if needed
  	        console.log('CHECK DATA', data)
  	        defer.resolve(data);
  	    }).
  	    error(function(data, status, headers, config) {
  	        defer.reject();
  	    });
  	    return defer.promise;
  	};

  	return factory;
  });
