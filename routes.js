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