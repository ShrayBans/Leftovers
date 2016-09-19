angular
  .module('FoodFactory', [])
  .factory('FoodFactory', function ($http, $q) {
  	var factory = {};

  	factory.getlist = function(){
  	    var defer = $q.defer();
  	    $http({method: 'GET', url: 'http://localhost:61686/getdatlist?format=json', headers: {'Access-Control-Allow-Origin': 'localhost:*'}}).
  	    success(function(data) {
  	        // alter data if needed
  	        defer.resolve(data.itemsToReturn);
  	    }).
  	    error(function(data, status, headers, config) {
  	        defer.reject();
  	    });
  	    return defer.promise;
  	};
  	
  	return factory;
  });
