angular
  .module('FoodFactory', [])
  .factory('FoodFactory', function ($http, $q) {
  	var factory = {};

  	factory.data = {};

  	factory.getData = function() {
  		return this.data;
  	}

  	factory.getList = function(restArray){
  	    $http({method: 'GET', url: 'http://localhost:3000/food/', headers: {'Access-Control-Allow-Origin': 'localhost:*'}}).
  	    success(function(res) {
  	        // alter data if needed
  	        for (var i = 0; i < restArray.length; i++) {
  	        	factory.data[restArray[i].restaurant] = res[restArray[i].restaurant];
  	        }
  	        console.log('DATA', factory.data);
  	    });
  	};

  	factory.getPromList = function(restaurant){
  		if(!restaurant) restaurant = "";
  	    var defer = $q.defer();
  	    $http({method: 'GET', url: 'http://localhost:3000/food/'+ restaurant, headers: {'Access-Control-Allow-Origin': 'localhost:*'}}).
  	    success(function(data) {
  	        // alter data if needed
  	        defer.resolve(data);
  	    }).
  	    error(function(data, status, headers, config) {
  	        defer.reject();
  	    });
  	    return defer.promise;
  	};

  	return factory;
  });
