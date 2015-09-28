"use strict"

describe('WeatherReport',function () {
	var el,convertToDate;
	beforeEach(module('weatherApp'));
	beforeEach(module('weatherReport'));
	beforeEach(inject(function ($compile, $rootScope) {
		var scope = $rootScope;
		scope.weatherDay = {
			dt:1443182050668,
			temp:{
				day : 2
			},
			description:'sunny'
		};
		scope.convertToDate = sinon.spy();
		scope.dateFormat = "d MMM, y";

		el = angular.element('<weather-report />');
		$compile(el)(scope);
		scope.$digest();
	}));
	it('Should bind the data',function () {
		console.log(el.children('.col-md-12'));
		expect(el.children('.col-md-12')[0].text()).to.equal('Daytime Temprature : 2')
	});

});