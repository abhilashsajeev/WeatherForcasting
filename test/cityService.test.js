"use strict"
describe('cityService',function () {
	beforeEach(module('weatherApp'));

	it('Should contain value city equal to NewYork',inject(function(cityService){
		expect(cityService.city).to.exist;
		expect(cityService.city).to.equal('NewYork, NY');
	}));
});