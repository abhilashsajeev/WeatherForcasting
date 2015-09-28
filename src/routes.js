'use strict';
weatherApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl : 'pages/home.htm',
    controller:'homeController as home'
  })
  .when('/forcast',{
    templateUrl:'pages/forcast.htm',
    controller:'forcastController as forcast'
  })
  .when('/forcast/:days',{
    templateUrl:'pages/forcast.htm',
    controller:'forcastController as forcast'
  });
}]);