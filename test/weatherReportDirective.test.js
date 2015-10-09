"use strict"

describe('WeatherReport',function () {
	var el,convertToDate;
	beforeEach(module('weatherApp'));
	beforeEach(module('weatherReport'));
	beforeEach(inject(function ($compile, $rootScope) {
		var scope = $rootScope; // Note: Directives test should use rootScope directly otherwise fails
		scope.weatherDay = {
			dt:1443182050668,
			temp:{
				day : 2
			},
			description:'sunny'
		};
		scope.convertToDate = sinon.spy();
		scope.dateFormat = "d MMM, y";

		el = angular.element('<weather-report weather-day="weatherDay" convert-to-date = "convertToDate()" date-format="dateFormat"/>');
		$compile(el)(scope);
		scope.$digest();
	}));
	it('Should applied template',function () {
		expect(el.html()).to.not.equal('');
	});

});