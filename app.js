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
	});
}])

weatherApp.controller('homeController', ['$scope', function($scope){
	
}]);
weatherApp.controller('forcastController', ['$scope', function($scope){
	
}])