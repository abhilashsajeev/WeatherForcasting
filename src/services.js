'use strict';
weatherApp.service('cityService', function(){
  this.city = 'NewYork, NY';
});

weatherApp.service('weatherService', ['$resource', function($resource){
  this.getWeather = function(city,days){
    var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
      {callback:'JSON_CALLBACK'}, {get:{method:'JSONP'}});

    return weatherAPI.get({appid:'bd82977b86bf27fb59a04b61b657fb6f',q:city,cnt:days,units:'metric'});  
  }
}]);