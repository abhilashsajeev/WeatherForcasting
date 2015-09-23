weatherApp.controller('homeController', ['$scope', 'cityService','$location', function($scope,cityService,$location){
	var vm = this;
	vm.city = cityService.city;
	vm.submit  = function(){
		$location.path('/forcast');
	};
	$scope.$watch('vm.city',function(){
		cityService.city = vm.city;
	});
}]);
weatherApp.controller('forcastController', ['$scope','cityService',
	'$routeParams', 'weatherService', function($scope,cityService,$routeParams,weatherService){
	var vm = this;
	vm.city = cityService.city;
	vm.days = $routeParams.days || 2;
	vm.weatherResult = weatherService.getWeather(vm.city,vm.days);
	vm.convertToDate = function(dt){
		return new Date(dt * 1000);
	}
}]);