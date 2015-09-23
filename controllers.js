weatherApp.controller('homeController', ['$scope', 'cityService','$location', function($scope,cityService,$location){
	$scope.city = cityService.city;
	$scope.submit  = function(){
		$location.path('/forcast');
	};
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});
}]);
weatherApp.controller('forcastController', ['$scope','cityService','$resource',
	'$routeParams', function($scope,cityService,$resource,$routeParams){
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || 2;
	
	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
	 {callback:'JSON_CALLBACK'}, {get:{method:'JSONP'}});
	$scope.weatherResult = $scope.weatherAPI.get({q:$scope.city,cnt:$scope.days,units:'metric'});
	
	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}
}]);