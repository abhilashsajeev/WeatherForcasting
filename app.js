/**
* weatherApp Module
*
* Description
*/
var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

weatherApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl : 'pages/home.htm',
		controller:'homeController'
	})
	.when('/forcast',{
		templateUrl:'pages/forcast.htm',
		controller:'forcastController'
	})
	.when('/forcast/:days',{
		templateUrl:'pages/forcast.htm',
		controller:'forcastController'
	});
}]);

weatherApp.service('cityService', function(){
	this.city = 'NewYork, NY';
});

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope,cityService){
	$scope.city = cityService.city;
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	})
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