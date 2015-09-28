'use strict';
weatherApp.controller('homeController', ['$scope', 'cityService','$location', function($scope,cityService,$location){
  (function init(vm) {
    angular.extend(vm, {
      city:cityService.city,
      submit:submit
    });

    function submit () {
      $location.path('/forcast');
    };
    $scope.$watch('vm.city',function(){
      cityService.city = vm.city;
    });
  }(this));
  
}]);
weatherApp.controller('forcastController', ['$scope','cityService',
  '$routeParams', 'weatherService', function($scope,cityService,$routeParams,weatherService){
    (function init(vm){
      angular.extend(vm,{
        city:cityService.city,
        days:$routeParams.days || 2,
        weatherResult:weatherService.getWeather(cityService.city,$routeParams.days || 2),
        convertToDate:convertToDate
      });

      function convertToDate(dt){
        return new Date(dt * 1000);
      };
    }(this));
  }]
);