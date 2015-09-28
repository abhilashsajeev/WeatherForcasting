'use strict';
weatherApp.directive('weatherReport', function(){
  // Runs during compile
  return {
    scope: {
      weatherDay:'=',
      convertToDate:'&',
      dateFormat:'@'
    },
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'directives/weatherReport.html',
    replace: true
    
  };
});