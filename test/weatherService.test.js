"use strict"
describe('weatherService',function () {
	var mockResource,$httpBackend;
	beforeEach(module('weatherApp'));
	beforeEach(function () {
        angular.mock.inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            mockResource = $injector.get('weatherService');
        })
    });

	describe('getWeather',function(){
		it('should make request',inject(function(weatherService){// note the inject function
			// httpBackend in a service mock for ngResource
            $httpBackend.whenJSONP('http://api.openweathermap.org/data/2.5/forecast/daily?callback=JSON_CALLBACK&cnt=2&q=test&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f')
            .respond({
                username: 'test'
            });

            var result = mockResource.getWeather('test',2);

            $httpBackend.flush();

            expect(result.username).to.equal('test');
		}));
		
	})
});